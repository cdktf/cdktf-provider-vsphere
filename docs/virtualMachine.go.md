# `virtualMachine` Submodule <a name="`virtualMachine` Submodule" id="@cdktf/provider-vsphere.virtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachine <a name="VirtualMachine" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine vsphere_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachine(scope Construct, id *string, config VirtualMachineConfig) VirtualMachine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig">VirtualMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig">VirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservationLockedToMax">ResetMemoryReservationLockedToMax</a></code> | *No description.* |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCdrom` <a name="PutCdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom"></a>

```go
func PutCdrom(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom.parameter.value"></a>

- *Type:* interface{}

---

##### `PutClone` <a name="PutClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone"></a>

```go
func PutClone(value VirtualMachineClone)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---

##### `PutDisk` <a name="PutDisk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk"></a>

```go
func PutDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOvfDeploy` <a name="PutOvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy"></a>

```go
func PutOvfDeploy(value VirtualMachineOvfDeploy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---

##### `PutVapp` <a name="PutVapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp"></a>

```go
func PutVapp(value VirtualMachineVapp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---

##### `ResetAlternateGuestName` <a name="ResetAlternateGuestName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAlternateGuestName"></a>

```go
func ResetAlternateGuestName()
```

##### `ResetAnnotation` <a name="ResetAnnotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAnnotation"></a>

```go
func ResetAnnotation()
```

##### `ResetBootDelay` <a name="ResetBootDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootDelay"></a>

```go
func ResetBootDelay()
```

##### `ResetBootRetryDelay` <a name="ResetBootRetryDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryDelay"></a>

```go
func ResetBootRetryDelay()
```

##### `ResetBootRetryEnabled` <a name="ResetBootRetryEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryEnabled"></a>

```go
func ResetBootRetryEnabled()
```

##### `ResetCdrom` <a name="ResetCdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCdrom"></a>

```go
func ResetCdrom()
```

##### `ResetClone` <a name="ResetClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetClone"></a>

```go
func ResetClone()
```

##### `ResetCpuHotAddEnabled` <a name="ResetCpuHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotAddEnabled"></a>

```go
func ResetCpuHotAddEnabled()
```

##### `ResetCpuHotRemoveEnabled` <a name="ResetCpuHotRemoveEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotRemoveEnabled"></a>

```go
func ResetCpuHotRemoveEnabled()
```

##### `ResetCpuLimit` <a name="ResetCpuLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuLimit"></a>

```go
func ResetCpuLimit()
```

##### `ResetCpuPerformanceCountersEnabled` <a name="ResetCpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuPerformanceCountersEnabled"></a>

```go
func ResetCpuPerformanceCountersEnabled()
```

##### `ResetCpuReservation` <a name="ResetCpuReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuReservation"></a>

```go
func ResetCpuReservation()
```

##### `ResetCpuShareCount` <a name="ResetCpuShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareCount"></a>

```go
func ResetCpuShareCount()
```

##### `ResetCpuShareLevel` <a name="ResetCpuShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareLevel"></a>

```go
func ResetCpuShareLevel()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCustomAttributes"></a>

```go
func ResetCustomAttributes()
```

##### `ResetDatacenterId` <a name="ResetDatacenterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatacenterId"></a>

```go
func ResetDatacenterId()
```

##### `ResetDatastoreClusterId` <a name="ResetDatastoreClusterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreClusterId"></a>

```go
func ResetDatastoreClusterId()
```

##### `ResetDatastoreId` <a name="ResetDatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreId"></a>

```go
func ResetDatastoreId()
```

##### `ResetDisk` <a name="ResetDisk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDisk"></a>

```go
func ResetDisk()
```

##### `ResetEfiSecureBootEnabled` <a name="ResetEfiSecureBootEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEfiSecureBootEnabled"></a>

```go
func ResetEfiSecureBootEnabled()
```

##### `ResetEnableDiskUuid` <a name="ResetEnableDiskUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableDiskUuid"></a>

```go
func ResetEnableDiskUuid()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableLogging"></a>

```go
func ResetEnableLogging()
```

##### `ResetEptRviMode` <a name="ResetEptRviMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEptRviMode"></a>

```go
func ResetEptRviMode()
```

##### `ResetExtraConfig` <a name="ResetExtraConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfig"></a>

```go
func ResetExtraConfig()
```

##### `ResetExtraConfigRebootRequired` <a name="ResetExtraConfigRebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfigRebootRequired"></a>

```go
func ResetExtraConfigRebootRequired()
```

##### `ResetFirmware` <a name="ResetFirmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFirmware"></a>

```go
func ResetFirmware()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetForcePowerOff` <a name="ResetForcePowerOff" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetForcePowerOff"></a>

```go
func ResetForcePowerOff()
```

##### `ResetGuestId` <a name="ResetGuestId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetGuestId"></a>

```go
func ResetGuestId()
```

##### `ResetHardwareVersion` <a name="ResetHardwareVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHardwareVersion"></a>

```go
func ResetHardwareVersion()
```

##### `ResetHostSystemId` <a name="ResetHostSystemId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHostSystemId"></a>

```go
func ResetHostSystemId()
```

##### `ResetHvMode` <a name="ResetHvMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHvMode"></a>

```go
func ResetHvMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetId"></a>

```go
func ResetId()
```

##### `ResetIdeControllerCount` <a name="ResetIdeControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIdeControllerCount"></a>

```go
func ResetIdeControllerCount()
```

##### `ResetIgnoredGuestIps` <a name="ResetIgnoredGuestIps" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIgnoredGuestIps"></a>

```go
func ResetIgnoredGuestIps()
```

##### `ResetLatencySensitivity` <a name="ResetLatencySensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetLatencySensitivity"></a>

```go
func ResetLatencySensitivity()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetMemoryHotAddEnabled` <a name="ResetMemoryHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryHotAddEnabled"></a>

```go
func ResetMemoryHotAddEnabled()
```

##### `ResetMemoryLimit` <a name="ResetMemoryLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryLimit"></a>

```go
func ResetMemoryLimit()
```

##### `ResetMemoryReservation` <a name="ResetMemoryReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservation"></a>

```go
func ResetMemoryReservation()
```

##### `ResetMemoryReservationLockedToMax` <a name="ResetMemoryReservationLockedToMax" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservationLockedToMax"></a>

```go
func ResetMemoryReservationLockedToMax()
```

##### `ResetMemoryShareCount` <a name="ResetMemoryShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareCount"></a>

```go
func ResetMemoryShareCount()
```

##### `ResetMemoryShareLevel` <a name="ResetMemoryShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareLevel"></a>

```go
func ResetMemoryShareLevel()
```

##### `ResetMigrateWaitTimeout` <a name="ResetMigrateWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMigrateWaitTimeout"></a>

```go
func ResetMigrateWaitTimeout()
```

##### `ResetNestedHvEnabled` <a name="ResetNestedHvEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNestedHvEnabled"></a>

```go
func ResetNestedHvEnabled()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNetworkInterface"></a>

```go
func ResetNetworkInterface()
```

##### `ResetNumCoresPerSocket` <a name="ResetNumCoresPerSocket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCoresPerSocket"></a>

```go
func ResetNumCoresPerSocket()
```

##### `ResetNumCpus` <a name="ResetNumCpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCpus"></a>

```go
func ResetNumCpus()
```

##### `ResetOvfDeploy` <a name="ResetOvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOvfDeploy"></a>

```go
func ResetOvfDeploy()
```

##### `ResetPciDeviceId` <a name="ResetPciDeviceId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPciDeviceId"></a>

```go
func ResetPciDeviceId()
```

##### `ResetPoweronTimeout` <a name="ResetPoweronTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPoweronTimeout"></a>

```go
func ResetPoweronTimeout()
```

##### `ResetReplaceTrigger` <a name="ResetReplaceTrigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetReplaceTrigger"></a>

```go
func ResetReplaceTrigger()
```

##### `ResetRunToolsScriptsAfterPowerOn` <a name="ResetRunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterPowerOn"></a>

```go
func ResetRunToolsScriptsAfterPowerOn()
```

##### `ResetRunToolsScriptsAfterResume` <a name="ResetRunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterResume"></a>

```go
func ResetRunToolsScriptsAfterResume()
```

##### `ResetRunToolsScriptsBeforeGuestReboot` <a name="ResetRunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestReboot"></a>

```go
func ResetRunToolsScriptsBeforeGuestReboot()
```

##### `ResetRunToolsScriptsBeforeGuestShutdown` <a name="ResetRunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestShutdown"></a>

```go
func ResetRunToolsScriptsBeforeGuestShutdown()
```

##### `ResetRunToolsScriptsBeforeGuestStandby` <a name="ResetRunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestStandby"></a>

```go
func ResetRunToolsScriptsBeforeGuestStandby()
```

##### `ResetSataControllerCount` <a name="ResetSataControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSataControllerCount"></a>

```go
func ResetSataControllerCount()
```

##### `ResetScsiBusSharing` <a name="ResetScsiBusSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiBusSharing"></a>

```go
func ResetScsiBusSharing()
```

##### `ResetScsiControllerCount` <a name="ResetScsiControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiControllerCount"></a>

```go
func ResetScsiControllerCount()
```

##### `ResetScsiType` <a name="ResetScsiType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiType"></a>

```go
func ResetScsiType()
```

##### `ResetShutdownWaitTimeout` <a name="ResetShutdownWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetShutdownWaitTimeout"></a>

```go
func ResetShutdownWaitTimeout()
```

##### `ResetStoragePolicyId` <a name="ResetStoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetStoragePolicyId"></a>

```go
func ResetStoragePolicyId()
```

##### `ResetSwapPlacementPolicy` <a name="ResetSwapPlacementPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSwapPlacementPolicy"></a>

```go
func ResetSwapPlacementPolicy()
```

##### `ResetSyncTimeWithHost` <a name="ResetSyncTimeWithHost" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHost"></a>

```go
func ResetSyncTimeWithHost()
```

##### `ResetSyncTimeWithHostPeriodically` <a name="ResetSyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHostPeriodically"></a>

```go
func ResetSyncTimeWithHostPeriodically()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetTags"></a>

```go
func ResetTags()
```

##### `ResetToolsUpgradePolicy` <a name="ResetToolsUpgradePolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetToolsUpgradePolicy"></a>

```go
func ResetToolsUpgradePolicy()
```

##### `ResetVapp` <a name="ResetVapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVapp"></a>

```go
func ResetVapp()
```

##### `ResetVbsEnabled` <a name="ResetVbsEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVbsEnabled"></a>

```go
func ResetVbsEnabled()
```

##### `ResetVvtdEnabled` <a name="ResetVvtdEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVvtdEnabled"></a>

```go
func ResetVvtdEnabled()
```

##### `ResetWaitForGuestIpTimeout` <a name="ResetWaitForGuestIpTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestIpTimeout"></a>

```go
func ResetWaitForGuestIpTimeout()
```

##### `ResetWaitForGuestNetRoutable` <a name="ResetWaitForGuestNetRoutable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetRoutable"></a>

```go
func ResetWaitForGuestNetRoutable()
```

##### `ResetWaitForGuestNetTimeout` <a name="ResetWaitForGuestNetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetTimeout"></a>

```go
func ResetWaitForGuestNetTimeout()
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

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.VirtualMachine_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.VirtualMachine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.VirtualMachine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.VirtualMachine_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdrom">Cdrom</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList">VirtualMachineCdromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.changeVersion">ChangeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference">VirtualMachineCloneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.defaultIpAddress">DefaultIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.disk">Disk</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList">VirtualMachineDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIpAddresses">GuestIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.imported">Imported</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.moid">Moid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList">VirtualMachineNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeploy">OvfDeploy</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference">VirtualMachineOvfDeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.powerState">PowerState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.rebootRequired">RebootRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vapp">Vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference">VirtualMachineVappOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappTransport">VappTransport</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmwareToolsStatus">VmwareToolsStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmxPath">VmxPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestNameInput">AlternateGuestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotationInput">AnnotationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelayInput">BootDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelayInput">BootRetryDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabledInput">BootRetryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdromInput">CdromInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cloneInput">CloneInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabledInput">CpuHotAddEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabledInput">CpuHotRemoveEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimitInput">CpuLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabledInput">CpuPerformanceCountersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservationInput">CpuReservationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCountInput">CpuShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevelInput">CpuShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributesInput">CustomAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterIdInput">DatastoreClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreIdInput">DatastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.diskInput">DiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabledInput">EfiSecureBootEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuidInput">EnableDiskUuidInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviModeInput">EptRviModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigInput">ExtraConfigInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequiredInput">ExtraConfigRebootRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmwareInput">FirmwareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOffInput">ForcePowerOffInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIdInput">GuestIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersionInput">HardwareVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemIdInput">HostSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvModeInput">HvModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCountInput">IdeControllerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIpsInput">IgnoredGuestIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivityInput">LatencySensitivityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabledInput">MemoryHotAddEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryInput">MemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimitInput">MemoryLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationInput">MemoryReservationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMaxInput">MemoryReservationLockedToMaxInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCountInput">MemoryShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevelInput">MemoryShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeoutInput">MigrateWaitTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabledInput">NestedHvEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocketInput">NumCoresPerSocketInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpusInput">NumCpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeployInput">OvfDeployInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceIdInput">PciDeviceIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeoutInput">PoweronTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTriggerInput">ReplaceTriggerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolIdInput">ResourcePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOnInput">RunToolsScriptsAfterPowerOnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResumeInput">RunToolsScriptsAfterResumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestRebootInput">RunToolsScriptsBeforeGuestRebootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput">RunToolsScriptsBeforeGuestShutdownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput">RunToolsScriptsBeforeGuestStandbyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCountInput">SataControllerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharingInput">ScsiBusSharingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCountInput">ScsiControllerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiTypeInput">ScsiTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeoutInput">ShutdownWaitTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyIdInput">StoragePolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicyInput">SwapPlacementPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostInput">SyncTimeWithHostInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodicallyInput">SyncTimeWithHostPeriodicallyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicyInput">ToolsUpgradePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappInput">VappInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabledInput">VbsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabledInput">VvtdEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeoutInput">WaitForGuestIpTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutableInput">WaitForGuestNetRoutableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeoutInput">WaitForGuestNetTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestName">AlternateGuestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotation">Annotation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelay">BootDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelay">BootRetryDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabled">BootRetryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabled">CpuHotAddEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabled">CpuHotRemoveEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimit">CpuLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabled">CpuPerformanceCountersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservation">CpuReservation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCount">CpuShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevel">CpuShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreId">DatastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabled">EfiSecureBootEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuid">EnableDiskUuid</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviMode">EptRviMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfig">ExtraConfig</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequired">ExtraConfigRebootRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmware">Firmware</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOff">ForcePowerOff</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestId">GuestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersion">HardwareVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemId">HostSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvMode">HvMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCount">IdeControllerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIps">IgnoredGuestIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivity">LatencySensitivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabled">MemoryHotAddEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimit">MemoryLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservation">MemoryReservation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMax">MemoryReservationLockedToMax</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCount">MemoryShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeout">MigrateWaitTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabled">NestedHvEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocket">NumCoresPerSocket</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpus">NumCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceId">PciDeviceId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeout">PoweronTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTrigger">ReplaceTrigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolId">ResourcePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOn">RunToolsScriptsAfterPowerOn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResume">RunToolsScriptsAfterResume</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestReboot">RunToolsScriptsBeforeGuestReboot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdown">RunToolsScriptsBeforeGuestShutdown</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandby">RunToolsScriptsBeforeGuestStandby</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCount">SataControllerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharing">ScsiBusSharing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCount">ScsiControllerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiType">ScsiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeout">ShutdownWaitTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyId">StoragePolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicy">SwapPlacementPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHost">SyncTimeWithHost</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodically">SyncTimeWithHostPeriodically</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicy">ToolsUpgradePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabled">VbsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabled">VvtdEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeout">WaitForGuestIpTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutable">WaitForGuestNetRoutable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeout">WaitForGuestNetTimeout</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cdrom`<sup>Required</sup> <a name="Cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdrom"></a>

```go
func Cdrom() VirtualMachineCdromList
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList">VirtualMachineCdromList</a>

---

##### `ChangeVersion`<sup>Required</sup> <a name="ChangeVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.changeVersion"></a>

```go
func ChangeVersion() *string
```

- *Type:* *string

---

##### `Clone`<sup>Required</sup> <a name="Clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.clone"></a>

```go
func Clone() VirtualMachineCloneOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference">VirtualMachineCloneOutputReference</a>

---

##### `DefaultIpAddress`<sup>Required</sup> <a name="DefaultIpAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.defaultIpAddress"></a>

```go
func DefaultIpAddress() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.disk"></a>

```go
func Disk() VirtualMachineDiskList
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList">VirtualMachineDiskList</a>

---

##### `GuestIpAddresses`<sup>Required</sup> <a name="GuestIpAddresses" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIpAddresses"></a>

```go
func GuestIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Imported`<sup>Required</sup> <a name="Imported" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.imported"></a>

```go
func Imported() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Moid`<sup>Required</sup> <a name="Moid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.moid"></a>

```go
func Moid() *string
```

- *Type:* *string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterface"></a>

```go
func NetworkInterface() VirtualMachineNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList">VirtualMachineNetworkInterfaceList</a>

---

##### `OvfDeploy`<sup>Required</sup> <a name="OvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeploy"></a>

```go
func OvfDeploy() VirtualMachineOvfDeployOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference">VirtualMachineOvfDeployOutputReference</a>

---

##### `PowerState`<sup>Required</sup> <a name="PowerState" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.powerState"></a>

```go
func PowerState() *string
```

- *Type:* *string

---

##### `RebootRequired`<sup>Required</sup> <a name="RebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.rebootRequired"></a>

```go
func RebootRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `Vapp`<sup>Required</sup> <a name="Vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vapp"></a>

```go
func Vapp() VirtualMachineVappOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference">VirtualMachineVappOutputReference</a>

---

##### `VappTransport`<sup>Required</sup> <a name="VappTransport" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappTransport"></a>

```go
func VappTransport() *[]*string
```

- *Type:* *[]*string

---

##### `VmwareToolsStatus`<sup>Required</sup> <a name="VmwareToolsStatus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmwareToolsStatus"></a>

```go
func VmwareToolsStatus() *string
```

- *Type:* *string

---

##### `VmxPath`<sup>Required</sup> <a name="VmxPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmxPath"></a>

```go
func VmxPath() *string
```

- *Type:* *string

---

##### `AlternateGuestNameInput`<sup>Optional</sup> <a name="AlternateGuestNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestNameInput"></a>

```go
func AlternateGuestNameInput() *string
```

- *Type:* *string

---

##### `AnnotationInput`<sup>Optional</sup> <a name="AnnotationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotationInput"></a>

```go
func AnnotationInput() *string
```

- *Type:* *string

---

##### `BootDelayInput`<sup>Optional</sup> <a name="BootDelayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelayInput"></a>

```go
func BootDelayInput() *f64
```

- *Type:* *f64

---

##### `BootRetryDelayInput`<sup>Optional</sup> <a name="BootRetryDelayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelayInput"></a>

```go
func BootRetryDelayInput() *f64
```

- *Type:* *f64

---

##### `BootRetryEnabledInput`<sup>Optional</sup> <a name="BootRetryEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabledInput"></a>

```go
func BootRetryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CdromInput`<sup>Optional</sup> <a name="CdromInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdromInput"></a>

```go
func CdromInput() interface{}
```

- *Type:* interface{}

---

##### `CloneInput`<sup>Optional</sup> <a name="CloneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cloneInput"></a>

```go
func CloneInput() VirtualMachineClone
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---

##### `CpuHotAddEnabledInput`<sup>Optional</sup> <a name="CpuHotAddEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabledInput"></a>

```go
func CpuHotAddEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CpuHotRemoveEnabledInput`<sup>Optional</sup> <a name="CpuHotRemoveEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabledInput"></a>

```go
func CpuHotRemoveEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CpuLimitInput`<sup>Optional</sup> <a name="CpuLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimitInput"></a>

```go
func CpuLimitInput() *f64
```

- *Type:* *f64

---

##### `CpuPerformanceCountersEnabledInput`<sup>Optional</sup> <a name="CpuPerformanceCountersEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabledInput"></a>

```go
func CpuPerformanceCountersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CpuReservationInput`<sup>Optional</sup> <a name="CpuReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservationInput"></a>

```go
func CpuReservationInput() *f64
```

- *Type:* *f64

---

##### `CpuShareCountInput`<sup>Optional</sup> <a name="CpuShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCountInput"></a>

```go
func CpuShareCountInput() *f64
```

- *Type:* *f64

---

##### `CpuShareLevelInput`<sup>Optional</sup> <a name="CpuShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevelInput"></a>

```go
func CpuShareLevelInput() *string
```

- *Type:* *string

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributesInput"></a>

```go
func CustomAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `DatastoreClusterIdInput`<sup>Optional</sup> <a name="DatastoreClusterIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterIdInput"></a>

```go
func DatastoreClusterIdInput() *string
```

- *Type:* *string

---

##### `DatastoreIdInput`<sup>Optional</sup> <a name="DatastoreIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreIdInput"></a>

```go
func DatastoreIdInput() *string
```

- *Type:* *string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.diskInput"></a>

```go
func DiskInput() interface{}
```

- *Type:* interface{}

---

##### `EfiSecureBootEnabledInput`<sup>Optional</sup> <a name="EfiSecureBootEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabledInput"></a>

```go
func EfiSecureBootEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDiskUuidInput`<sup>Optional</sup> <a name="EnableDiskUuidInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuidInput"></a>

```go
func EnableDiskUuidInput() interface{}
```

- *Type:* interface{}

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLoggingInput"></a>

```go
func EnableLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `EptRviModeInput`<sup>Optional</sup> <a name="EptRviModeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviModeInput"></a>

```go
func EptRviModeInput() *string
```

- *Type:* *string

---

##### `ExtraConfigInput`<sup>Optional</sup> <a name="ExtraConfigInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigInput"></a>

```go
func ExtraConfigInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExtraConfigRebootRequiredInput`<sup>Optional</sup> <a name="ExtraConfigRebootRequiredInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequiredInput"></a>

```go
func ExtraConfigRebootRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `FirmwareInput`<sup>Optional</sup> <a name="FirmwareInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmwareInput"></a>

```go
func FirmwareInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `ForcePowerOffInput`<sup>Optional</sup> <a name="ForcePowerOffInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOffInput"></a>

```go
func ForcePowerOffInput() interface{}
```

- *Type:* interface{}

---

##### `GuestIdInput`<sup>Optional</sup> <a name="GuestIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIdInput"></a>

```go
func GuestIdInput() *string
```

- *Type:* *string

---

##### `HardwareVersionInput`<sup>Optional</sup> <a name="HardwareVersionInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersionInput"></a>

```go
func HardwareVersionInput() *f64
```

- *Type:* *f64

---

##### `HostSystemIdInput`<sup>Optional</sup> <a name="HostSystemIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemIdInput"></a>

```go
func HostSystemIdInput() *string
```

- *Type:* *string

---

##### `HvModeInput`<sup>Optional</sup> <a name="HvModeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvModeInput"></a>

```go
func HvModeInput() *string
```

- *Type:* *string

---

##### `IdeControllerCountInput`<sup>Optional</sup> <a name="IdeControllerCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCountInput"></a>

```go
func IdeControllerCountInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoredGuestIpsInput`<sup>Optional</sup> <a name="IgnoredGuestIpsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIpsInput"></a>

```go
func IgnoredGuestIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LatencySensitivityInput`<sup>Optional</sup> <a name="LatencySensitivityInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivityInput"></a>

```go
func LatencySensitivityInput() *string
```

- *Type:* *string

---

##### `MemoryHotAddEnabledInput`<sup>Optional</sup> <a name="MemoryHotAddEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabledInput"></a>

```go
func MemoryHotAddEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryInput"></a>

```go
func MemoryInput() *f64
```

- *Type:* *f64

---

##### `MemoryLimitInput`<sup>Optional</sup> <a name="MemoryLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimitInput"></a>

```go
func MemoryLimitInput() *f64
```

- *Type:* *f64

---

##### `MemoryReservationInput`<sup>Optional</sup> <a name="MemoryReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationInput"></a>

```go
func MemoryReservationInput() *f64
```

- *Type:* *f64

---

##### `MemoryReservationLockedToMaxInput`<sup>Optional</sup> <a name="MemoryReservationLockedToMaxInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMaxInput"></a>

```go
func MemoryReservationLockedToMaxInput() interface{}
```

- *Type:* interface{}

---

##### `MemoryShareCountInput`<sup>Optional</sup> <a name="MemoryShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCountInput"></a>

```go
func MemoryShareCountInput() *f64
```

- *Type:* *f64

---

##### `MemoryShareLevelInput`<sup>Optional</sup> <a name="MemoryShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevelInput"></a>

```go
func MemoryShareLevelInput() *string
```

- *Type:* *string

---

##### `MigrateWaitTimeoutInput`<sup>Optional</sup> <a name="MigrateWaitTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeoutInput"></a>

```go
func MigrateWaitTimeoutInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NestedHvEnabledInput`<sup>Optional</sup> <a name="NestedHvEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabledInput"></a>

```go
func NestedHvEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `NumCoresPerSocketInput`<sup>Optional</sup> <a name="NumCoresPerSocketInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocketInput"></a>

```go
func NumCoresPerSocketInput() *f64
```

- *Type:* *f64

---

##### `NumCpusInput`<sup>Optional</sup> <a name="NumCpusInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpusInput"></a>

```go
func NumCpusInput() *f64
```

- *Type:* *f64

---

##### `OvfDeployInput`<sup>Optional</sup> <a name="OvfDeployInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeployInput"></a>

```go
func OvfDeployInput() VirtualMachineOvfDeploy
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---

##### `PciDeviceIdInput`<sup>Optional</sup> <a name="PciDeviceIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceIdInput"></a>

```go
func PciDeviceIdInput() *[]*string
```

- *Type:* *[]*string

---

##### `PoweronTimeoutInput`<sup>Optional</sup> <a name="PoweronTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeoutInput"></a>

```go
func PoweronTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ReplaceTriggerInput`<sup>Optional</sup> <a name="ReplaceTriggerInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTriggerInput"></a>

```go
func ReplaceTriggerInput() *string
```

- *Type:* *string

---

##### `ResourcePoolIdInput`<sup>Optional</sup> <a name="ResourcePoolIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolIdInput"></a>

```go
func ResourcePoolIdInput() *string
```

- *Type:* *string

---

##### `RunToolsScriptsAfterPowerOnInput`<sup>Optional</sup> <a name="RunToolsScriptsAfterPowerOnInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOnInput"></a>

```go
func RunToolsScriptsAfterPowerOnInput() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsAfterResumeInput`<sup>Optional</sup> <a name="RunToolsScriptsAfterResumeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResumeInput"></a>

```go
func RunToolsScriptsAfterResumeInput() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsBeforeGuestRebootInput`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestRebootInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestRebootInput"></a>

```go
func RunToolsScriptsBeforeGuestRebootInput() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsBeforeGuestShutdownInput`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestShutdownInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput"></a>

```go
func RunToolsScriptsBeforeGuestShutdownInput() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsBeforeGuestStandbyInput`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestStandbyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput"></a>

```go
func RunToolsScriptsBeforeGuestStandbyInput() interface{}
```

- *Type:* interface{}

---

##### `SataControllerCountInput`<sup>Optional</sup> <a name="SataControllerCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCountInput"></a>

```go
func SataControllerCountInput() *f64
```

- *Type:* *f64

---

##### `ScsiBusSharingInput`<sup>Optional</sup> <a name="ScsiBusSharingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharingInput"></a>

```go
func ScsiBusSharingInput() *string
```

- *Type:* *string

---

##### `ScsiControllerCountInput`<sup>Optional</sup> <a name="ScsiControllerCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCountInput"></a>

```go
func ScsiControllerCountInput() *f64
```

- *Type:* *f64

---

##### `ScsiTypeInput`<sup>Optional</sup> <a name="ScsiTypeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiTypeInput"></a>

```go
func ScsiTypeInput() *string
```

- *Type:* *string

---

##### `ShutdownWaitTimeoutInput`<sup>Optional</sup> <a name="ShutdownWaitTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeoutInput"></a>

```go
func ShutdownWaitTimeoutInput() *f64
```

- *Type:* *f64

---

##### `StoragePolicyIdInput`<sup>Optional</sup> <a name="StoragePolicyIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyIdInput"></a>

```go
func StoragePolicyIdInput() *string
```

- *Type:* *string

---

##### `SwapPlacementPolicyInput`<sup>Optional</sup> <a name="SwapPlacementPolicyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicyInput"></a>

```go
func SwapPlacementPolicyInput() *string
```

- *Type:* *string

---

##### `SyncTimeWithHostInput`<sup>Optional</sup> <a name="SyncTimeWithHostInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostInput"></a>

```go
func SyncTimeWithHostInput() interface{}
```

- *Type:* interface{}

---

##### `SyncTimeWithHostPeriodicallyInput`<sup>Optional</sup> <a name="SyncTimeWithHostPeriodicallyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodicallyInput"></a>

```go
func SyncTimeWithHostPeriodicallyInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ToolsUpgradePolicyInput`<sup>Optional</sup> <a name="ToolsUpgradePolicyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicyInput"></a>

```go
func ToolsUpgradePolicyInput() *string
```

- *Type:* *string

---

##### `VappInput`<sup>Optional</sup> <a name="VappInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappInput"></a>

```go
func VappInput() VirtualMachineVapp
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---

##### `VbsEnabledInput`<sup>Optional</sup> <a name="VbsEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabledInput"></a>

```go
func VbsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VvtdEnabledInput`<sup>Optional</sup> <a name="VvtdEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabledInput"></a>

```go
func VvtdEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForGuestIpTimeoutInput`<sup>Optional</sup> <a name="WaitForGuestIpTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeoutInput"></a>

```go
func WaitForGuestIpTimeoutInput() *f64
```

- *Type:* *f64

---

##### `WaitForGuestNetRoutableInput`<sup>Optional</sup> <a name="WaitForGuestNetRoutableInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutableInput"></a>

```go
func WaitForGuestNetRoutableInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForGuestNetTimeoutInput`<sup>Optional</sup> <a name="WaitForGuestNetTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeoutInput"></a>

```go
func WaitForGuestNetTimeoutInput() *f64
```

- *Type:* *f64

---

##### `AlternateGuestName`<sup>Required</sup> <a name="AlternateGuestName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestName"></a>

```go
func AlternateGuestName() *string
```

- *Type:* *string

---

##### `Annotation`<sup>Required</sup> <a name="Annotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotation"></a>

```go
func Annotation() *string
```

- *Type:* *string

---

##### `BootDelay`<sup>Required</sup> <a name="BootDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelay"></a>

```go
func BootDelay() *f64
```

- *Type:* *f64

---

##### `BootRetryDelay`<sup>Required</sup> <a name="BootRetryDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelay"></a>

```go
func BootRetryDelay() *f64
```

- *Type:* *f64

---

##### `BootRetryEnabled`<sup>Required</sup> <a name="BootRetryEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabled"></a>

```go
func BootRetryEnabled() interface{}
```

- *Type:* interface{}

---

##### `CpuHotAddEnabled`<sup>Required</sup> <a name="CpuHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabled"></a>

```go
func CpuHotAddEnabled() interface{}
```

- *Type:* interface{}

---

##### `CpuHotRemoveEnabled`<sup>Required</sup> <a name="CpuHotRemoveEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabled"></a>

```go
func CpuHotRemoveEnabled() interface{}
```

- *Type:* interface{}

---

##### `CpuLimit`<sup>Required</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimit"></a>

```go
func CpuLimit() *f64
```

- *Type:* *f64

---

##### `CpuPerformanceCountersEnabled`<sup>Required</sup> <a name="CpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabled"></a>

```go
func CpuPerformanceCountersEnabled() interface{}
```

- *Type:* interface{}

---

##### `CpuReservation`<sup>Required</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservation"></a>

```go
func CpuReservation() *f64
```

- *Type:* *f64

---

##### `CpuShareCount`<sup>Required</sup> <a name="CpuShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCount"></a>

```go
func CpuShareCount() *f64
```

- *Type:* *f64

---

##### `CpuShareLevel`<sup>Required</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevel"></a>

```go
func CpuShareLevel() *string
```

- *Type:* *string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributes"></a>

```go
func CustomAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `DatastoreClusterId`<sup>Required</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterId"></a>

```go
func DatastoreClusterId() *string
```

- *Type:* *string

---

##### `DatastoreId`<sup>Required</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreId"></a>

```go
func DatastoreId() *string
```

- *Type:* *string

---

##### `EfiSecureBootEnabled`<sup>Required</sup> <a name="EfiSecureBootEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabled"></a>

```go
func EfiSecureBootEnabled() interface{}
```

- *Type:* interface{}

---

##### `EnableDiskUuid`<sup>Required</sup> <a name="EnableDiskUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuid"></a>

```go
func EnableDiskUuid() interface{}
```

- *Type:* interface{}

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLogging"></a>

```go
func EnableLogging() interface{}
```

- *Type:* interface{}

---

##### `EptRviMode`<sup>Required</sup> <a name="EptRviMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviMode"></a>

```go
func EptRviMode() *string
```

- *Type:* *string

---

##### `ExtraConfig`<sup>Required</sup> <a name="ExtraConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfig"></a>

```go
func ExtraConfig() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExtraConfigRebootRequired`<sup>Required</sup> <a name="ExtraConfigRebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequired"></a>

```go
func ExtraConfigRebootRequired() interface{}
```

- *Type:* interface{}

---

##### `Firmware`<sup>Required</sup> <a name="Firmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmware"></a>

```go
func Firmware() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `ForcePowerOff`<sup>Required</sup> <a name="ForcePowerOff" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOff"></a>

```go
func ForcePowerOff() interface{}
```

- *Type:* interface{}

---

##### `GuestId`<sup>Required</sup> <a name="GuestId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestId"></a>

```go
func GuestId() *string
```

- *Type:* *string

---

##### `HardwareVersion`<sup>Required</sup> <a name="HardwareVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersion"></a>

```go
func HardwareVersion() *f64
```

- *Type:* *f64

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemId"></a>

```go
func HostSystemId() *string
```

- *Type:* *string

---

##### `HvMode`<sup>Required</sup> <a name="HvMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvMode"></a>

```go
func HvMode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdeControllerCount`<sup>Required</sup> <a name="IdeControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCount"></a>

```go
func IdeControllerCount() *f64
```

- *Type:* *f64

---

##### `IgnoredGuestIps`<sup>Required</sup> <a name="IgnoredGuestIps" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIps"></a>

```go
func IgnoredGuestIps() *[]*string
```

- *Type:* *[]*string

---

##### `LatencySensitivity`<sup>Required</sup> <a name="LatencySensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivity"></a>

```go
func LatencySensitivity() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `MemoryHotAddEnabled`<sup>Required</sup> <a name="MemoryHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabled"></a>

```go
func MemoryHotAddEnabled() interface{}
```

- *Type:* interface{}

---

##### `MemoryLimit`<sup>Required</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimit"></a>

```go
func MemoryLimit() *f64
```

- *Type:* *f64

---

##### `MemoryReservation`<sup>Required</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservation"></a>

```go
func MemoryReservation() *f64
```

- *Type:* *f64

---

##### `MemoryReservationLockedToMax`<sup>Required</sup> <a name="MemoryReservationLockedToMax" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMax"></a>

```go
func MemoryReservationLockedToMax() interface{}
```

- *Type:* interface{}

---

##### `MemoryShareCount`<sup>Required</sup> <a name="MemoryShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCount"></a>

```go
func MemoryShareCount() *f64
```

- *Type:* *f64

---

##### `MemoryShareLevel`<sup>Required</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevel"></a>

```go
func MemoryShareLevel() *string
```

- *Type:* *string

---

##### `MigrateWaitTimeout`<sup>Required</sup> <a name="MigrateWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeout"></a>

```go
func MigrateWaitTimeout() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NestedHvEnabled`<sup>Required</sup> <a name="NestedHvEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabled"></a>

```go
func NestedHvEnabled() interface{}
```

- *Type:* interface{}

---

##### `NumCoresPerSocket`<sup>Required</sup> <a name="NumCoresPerSocket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocket"></a>

```go
func NumCoresPerSocket() *f64
```

- *Type:* *f64

---

##### `NumCpus`<sup>Required</sup> <a name="NumCpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpus"></a>

```go
func NumCpus() *f64
```

- *Type:* *f64

---

##### `PciDeviceId`<sup>Required</sup> <a name="PciDeviceId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceId"></a>

```go
func PciDeviceId() *[]*string
```

- *Type:* *[]*string

---

##### `PoweronTimeout`<sup>Required</sup> <a name="PoweronTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeout"></a>

```go
func PoweronTimeout() *f64
```

- *Type:* *f64

---

##### `ReplaceTrigger`<sup>Required</sup> <a name="ReplaceTrigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTrigger"></a>

```go
func ReplaceTrigger() *string
```

- *Type:* *string

---

##### `ResourcePoolId`<sup>Required</sup> <a name="ResourcePoolId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolId"></a>

```go
func ResourcePoolId() *string
```

- *Type:* *string

---

##### `RunToolsScriptsAfterPowerOn`<sup>Required</sup> <a name="RunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOn"></a>

```go
func RunToolsScriptsAfterPowerOn() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsAfterResume`<sup>Required</sup> <a name="RunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResume"></a>

```go
func RunToolsScriptsAfterResume() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsBeforeGuestReboot`<sup>Required</sup> <a name="RunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestReboot"></a>

```go
func RunToolsScriptsBeforeGuestReboot() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsBeforeGuestShutdown`<sup>Required</sup> <a name="RunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdown"></a>

```go
func RunToolsScriptsBeforeGuestShutdown() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsBeforeGuestStandby`<sup>Required</sup> <a name="RunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandby"></a>

```go
func RunToolsScriptsBeforeGuestStandby() interface{}
```

- *Type:* interface{}

---

##### `SataControllerCount`<sup>Required</sup> <a name="SataControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCount"></a>

```go
func SataControllerCount() *f64
```

- *Type:* *f64

---

##### `ScsiBusSharing`<sup>Required</sup> <a name="ScsiBusSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharing"></a>

```go
func ScsiBusSharing() *string
```

- *Type:* *string

---

##### `ScsiControllerCount`<sup>Required</sup> <a name="ScsiControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCount"></a>

```go
func ScsiControllerCount() *f64
```

- *Type:* *f64

---

##### `ScsiType`<sup>Required</sup> <a name="ScsiType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiType"></a>

```go
func ScsiType() *string
```

- *Type:* *string

---

##### `ShutdownWaitTimeout`<sup>Required</sup> <a name="ShutdownWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeout"></a>

```go
func ShutdownWaitTimeout() *f64
```

- *Type:* *f64

---

##### `StoragePolicyId`<sup>Required</sup> <a name="StoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyId"></a>

```go
func StoragePolicyId() *string
```

- *Type:* *string

---

##### `SwapPlacementPolicy`<sup>Required</sup> <a name="SwapPlacementPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicy"></a>

```go
func SwapPlacementPolicy() *string
```

- *Type:* *string

---

##### `SyncTimeWithHost`<sup>Required</sup> <a name="SyncTimeWithHost" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHost"></a>

```go
func SyncTimeWithHost() interface{}
```

- *Type:* interface{}

---

##### `SyncTimeWithHostPeriodically`<sup>Required</sup> <a name="SyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodically"></a>

```go
func SyncTimeWithHostPeriodically() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `ToolsUpgradePolicy`<sup>Required</sup> <a name="ToolsUpgradePolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicy"></a>

```go
func ToolsUpgradePolicy() *string
```

- *Type:* *string

---

##### `VbsEnabled`<sup>Required</sup> <a name="VbsEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabled"></a>

```go
func VbsEnabled() interface{}
```

- *Type:* interface{}

---

##### `VvtdEnabled`<sup>Required</sup> <a name="VvtdEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabled"></a>

```go
func VvtdEnabled() interface{}
```

- *Type:* interface{}

---

##### `WaitForGuestIpTimeout`<sup>Required</sup> <a name="WaitForGuestIpTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeout"></a>

```go
func WaitForGuestIpTimeout() *f64
```

- *Type:* *f64

---

##### `WaitForGuestNetRoutable`<sup>Required</sup> <a name="WaitForGuestNetRoutable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutable"></a>

```go
func WaitForGuestNetRoutable() interface{}
```

- *Type:* interface{}

---

##### `WaitForGuestNetTimeout`<sup>Required</sup> <a name="WaitForGuestNetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeout"></a>

```go
func WaitForGuestNetTimeout() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineCdrom <a name="VirtualMachineCdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

&virtualmachine.VirtualMachineCdrom {
	ClientDevice: interface{},
	DatastoreId: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.clientDevice">ClientDevice</a></code> | <code>interface{}</code> | Indicates whether the device should be mapped to a remote client device. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.datastoreId">DatastoreId</a></code> | <code>*string</code> | The datastore ID the ISO is located on. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.path">Path</a></code> | <code>*string</code> | The path to the ISO file on the datastore. |

---

##### `ClientDevice`<sup>Optional</sup> <a name="ClientDevice" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.clientDevice"></a>

```go
ClientDevice interface{}
```

- *Type:* interface{}

Indicates whether the device should be mapped to a remote client device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#client_device VirtualMachine#client_device}

---

##### `DatastoreId`<sup>Optional</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.datastoreId"></a>

```go
DatastoreId *string
```

- *Type:* *string

The datastore ID the ISO is located on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path to the ISO file on the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#path VirtualMachine#path}

---

### VirtualMachineClone <a name="VirtualMachineClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

&virtualmachine.VirtualMachineClone {
	TemplateUuid: *string,
	CustomizationSpec: github.com/cdktf/cdktf-provider-vsphere-go/vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec,
	Customize: github.com/cdktf/cdktf-provider-vsphere-go/vsphere.virtualMachine.VirtualMachineCloneCustomize,
	LinkedClone: interface{},
	OvfNetworkMap: *map[string]*string,
	OvfStorageMap: *map[string]*string,
	Timeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.templateUuid">TemplateUuid</a></code> | <code>*string</code> | The UUID of the source virtual machine or template. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customizationSpec">CustomizationSpec</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | customization_spec block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customize">Customize</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | customize block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.linkedClone">LinkedClone</a></code> | <code>interface{}</code> | Whether or not to create a linked clone when cloning. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfNetworkMap">OvfNetworkMap</a></code> | <code>*map[string]*string</code> | Mapping of ovf networks to the networks to use in vSphere. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfStorageMap">OvfStorageMap</a></code> | <code>*map[string]*string</code> | Mapping of ovf storage to the datastores to use in vSphere. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.timeout">Timeout</a></code> | <code>*f64</code> | The timeout, in minutes, to wait for the virtual machine clone to complete. |

---

##### `TemplateUuid`<sup>Required</sup> <a name="TemplateUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.templateUuid"></a>

```go
TemplateUuid *string
```

- *Type:* *string

The UUID of the source virtual machine or template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#template_uuid VirtualMachine#template_uuid}

---

##### `CustomizationSpec`<sup>Optional</sup> <a name="CustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customizationSpec"></a>

```go
CustomizationSpec VirtualMachineCloneCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

customization_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#customization_spec VirtualMachine#customization_spec}

---

##### `Customize`<sup>Optional</sup> <a name="Customize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customize"></a>

```go
Customize VirtualMachineCloneCustomize
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

customize block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#customize VirtualMachine#customize}

---

##### `LinkedClone`<sup>Optional</sup> <a name="LinkedClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.linkedClone"></a>

```go
LinkedClone interface{}
```

- *Type:* interface{}

Whether or not to create a linked clone when cloning.

When this option is used, the source VM must have a single snapshot associated with it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#linked_clone VirtualMachine#linked_clone}

---

##### `OvfNetworkMap`<sup>Optional</sup> <a name="OvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfNetworkMap"></a>

```go
OvfNetworkMap *map[string]*string
```

- *Type:* *map[string]*string

Mapping of ovf networks to the networks to use in vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}

---

##### `OvfStorageMap`<sup>Optional</sup> <a name="OvfStorageMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfStorageMap"></a>

```go
OvfStorageMap *map[string]*string
```

- *Type:* *map[string]*string

Mapping of ovf storage to the datastores to use in vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ovf_storage_map VirtualMachine#ovf_storage_map}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

The timeout, in minutes, to wait for the virtual machine clone to complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

### VirtualMachineCloneCustomizationSpec <a name="VirtualMachineCloneCustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

&virtualmachine.VirtualMachineCloneCustomizationSpec {
	Id: *string,
	Timeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.id">Id</a></code> | <code>*string</code> | The unique identifier of the customization specification is its name and is unique per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.timeout">Timeout</a></code> | <code>*f64</code> | The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique identifier of the customization specification is its name and is unique per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#id VirtualMachine#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error.

Setting this value to 0 or a negative value skips the waiter. Default: 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

### VirtualMachineCloneCustomize <a name="VirtualMachineCloneCustomize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

&virtualmachine.VirtualMachineCloneCustomize {
	DnsServerList: *[]*string,
	DnsSuffixList: *[]*string,
	Ipv4Gateway: *string,
	Ipv6Gateway: *string,
	LinuxOptions: github.com/cdktf/cdktf-provider-vsphere-go/vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions,
	NetworkInterface: interface{},
	Timeout: *f64,
	WindowsOptions: github.com/cdktf/cdktf-provider-vsphere-go/vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions,
	WindowsSysprepText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsServerList">DnsServerList</a></code> | <code>*[]*string</code> | The list of DNS servers for a virtual network adapter with a static IP address. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsSuffixList">DnsSuffixList</a></code> | <code>*[]*string</code> | A list of DNS search domains to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv4Gateway">Ipv4Gateway</a></code> | <code>*string</code> | The IPv4 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv6Gateway">Ipv6Gateway</a></code> | <code>*string</code> | The IPv6 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.linuxOptions">LinuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | linux_options block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.timeout">Timeout</a></code> | <code>*f64</code> | The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsOptions">WindowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | windows_options block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsSysprepText">WindowsSysprepText</a></code> | <code>*string</code> | Use this option to specify a windows sysprep file directly. |

---

##### `DnsServerList`<sup>Optional</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsServerList"></a>

```go
DnsServerList *[]*string
```

- *Type:* *[]*string

The list of DNS servers for a virtual network adapter with a static IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#dns_server_list VirtualMachine#dns_server_list}

---

##### `DnsSuffixList`<sup>Optional</sup> <a name="DnsSuffixList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsSuffixList"></a>

```go
DnsSuffixList *[]*string
```

- *Type:* *[]*string

A list of DNS search domains to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#dns_suffix_list VirtualMachine#dns_suffix_list}

---

##### `Ipv4Gateway`<sup>Optional</sup> <a name="Ipv4Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv4Gateway"></a>

```go
Ipv4Gateway *string
```

- *Type:* *string

The IPv4 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ipv4_gateway VirtualMachine#ipv4_gateway}

---

##### `Ipv6Gateway`<sup>Optional</sup> <a name="Ipv6Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv6Gateway"></a>

```go
Ipv6Gateway *string
```

- *Type:* *string

The IPv6 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ipv6_gateway VirtualMachine#ipv6_gateway}

---

##### `LinuxOptions`<sup>Optional</sup> <a name="LinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.linuxOptions"></a>

```go
LinuxOptions VirtualMachineCloneCustomizeLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#linux_options VirtualMachine#linux_options}

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error.

Setting this value to 0 or a negative value skips the waiter. Default: 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

##### `WindowsOptions`<sup>Optional</sup> <a name="WindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsOptions"></a>

```go
WindowsOptions VirtualMachineCloneCustomizeWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

windows_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#windows_options VirtualMachine#windows_options}

---

##### `WindowsSysprepText`<sup>Optional</sup> <a name="WindowsSysprepText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsSysprepText"></a>

```go
WindowsSysprepText *string
```

- *Type:* *string

Use this option to specify a windows sysprep file directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#windows_sysprep_text VirtualMachine#windows_sysprep_text}

---

### VirtualMachineCloneCustomizeLinuxOptions <a name="VirtualMachineCloneCustomizeLinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

&virtualmachine.VirtualMachineCloneCustomizeLinuxOptions {
	Domain: *string,
	HostName: *string,
	HwClockUtc: interface{},
	ScriptText: *string,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.domain">Domain</a></code> | <code>*string</code> | The domain name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hostName">HostName</a></code> | <code>*string</code> | The hostname for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hwClockUtc">HwClockUtc</a></code> | <code>interface{}</code> | Specifies whether or not the hardware clock should be in UTC or not. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.scriptText">ScriptText</a></code> | <code>*string</code> | The customization script to run before and or after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.timeZone">TimeZone</a></code> | <code>*string</code> | Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The domain name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#domain VirtualMachine#domain}

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

The hostname for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#host_name VirtualMachine#host_name}

---

##### `HwClockUtc`<sup>Optional</sup> <a name="HwClockUtc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hwClockUtc"></a>

```go
HwClockUtc interface{}
```

- *Type:* interface{}

Specifies whether or not the hardware clock should be in UTC or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#hw_clock_utc VirtualMachine#hw_clock_utc}

---

##### `ScriptText`<sup>Optional</sup> <a name="ScriptText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.scriptText"></a>

```go
ScriptText *string
```

- *Type:* *string

The customization script to run before and or after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#script_text VirtualMachine#script_text}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}

---

### VirtualMachineCloneCustomizeNetworkInterface <a name="VirtualMachineCloneCustomizeNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

&virtualmachine.VirtualMachineCloneCustomizeNetworkInterface {
	DnsDomain: *string,
	DnsServerList: *[]*string,
	Ipv4Address: *string,
	Ipv4Netmask: *f64,
	Ipv6Address: *string,
	Ipv6Netmask: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsDomain">DnsDomain</a></code> | <code>*string</code> | A DNS search domain to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsServerList">DnsServerList</a></code> | <code>*[]*string</code> | Network-interface specific DNS settings for Windows operating systems. Ignored on Linux. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | The IPv4 address assigned to this network adapter. If left blank, DHCP is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Netmask">Ipv4Netmask</a></code> | <code>*f64</code> | The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Netmask">Ipv6Netmask</a></code> | <code>*f64</code> | The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected. |

---

##### `DnsDomain`<sup>Optional</sup> <a name="DnsDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsDomain"></a>

```go
DnsDomain *string
```

- *Type:* *string

A DNS search domain to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#dns_domain VirtualMachine#dns_domain}

---

##### `DnsServerList`<sup>Optional</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsServerList"></a>

```go
DnsServerList *[]*string
```

- *Type:* *[]*string

Network-interface specific DNS settings for Windows operating systems. Ignored on Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#dns_server_list VirtualMachine#dns_server_list}

---

##### `Ipv4Address`<sup>Optional</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Address"></a>

```go
Ipv4Address *string
```

- *Type:* *string

The IPv4 address assigned to this network adapter. If left blank, DHCP is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ipv4_address VirtualMachine#ipv4_address}

---

##### `Ipv4Netmask`<sup>Optional</sup> <a name="Ipv4Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Netmask"></a>

```go
Ipv4Netmask *f64
```

- *Type:* *f64

The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ipv4_netmask VirtualMachine#ipv4_netmask}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Address"></a>

```go
Ipv6Address *string
```

- *Type:* *string

The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ipv6_address VirtualMachine#ipv6_address}

---

##### `Ipv6Netmask`<sup>Optional</sup> <a name="Ipv6Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Netmask"></a>

```go
Ipv6Netmask *f64
```

- *Type:* *f64

The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ipv6_netmask VirtualMachine#ipv6_netmask}

---

### VirtualMachineCloneCustomizeWindowsOptions <a name="VirtualMachineCloneCustomizeWindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

&virtualmachine.VirtualMachineCloneCustomizeWindowsOptions {
	ComputerName: *string,
	AdminPassword: *string,
	AutoLogon: interface{},
	AutoLogonCount: *f64,
	DomainAdminPassword: *string,
	DomainAdminUser: *string,
	DomainOu: *string,
	FullName: *string,
	JoinDomain: *string,
	OrganizationName: *string,
	ProductKey: *string,
	RunOnceCommandList: *[]*string,
	TimeZone: *f64,
	Workgroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.computerName">ComputerName</a></code> | <code>*string</code> | The host name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | The new administrator password for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogon">AutoLogon</a></code> | <code>interface{}</code> | Specifies whether or not the VM automatically logs on as Administrator. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogonCount">AutoLogonCount</a></code> | <code>*f64</code> | Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminPassword">DomainAdminPassword</a></code> | <code>*string</code> | The password of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminUser">DomainAdminUser</a></code> | <code>*string</code> | The user account of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainOu">DomainOu</a></code> | <code>*string</code> | The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.fullName">FullName</a></code> | <code>*string</code> | The full name of the user of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.joinDomain">JoinDomain</a></code> | <code>*string</code> | The domain that the virtual machine should join. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.organizationName">OrganizationName</a></code> | <code>*string</code> | The organization name this virtual machine is being installed for. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.productKey">ProductKey</a></code> | <code>*string</code> | The product key for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.runOnceCommandList">RunOnceCommandList</a></code> | <code>*[]*string</code> | A list of commands to run at first user logon, after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.timeZone">TimeZone</a></code> | <code>*f64</code> | The new time zone for the virtual machine. This is a sysprep-dictated timezone code. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.workgroup">Workgroup</a></code> | <code>*string</code> | The workgroup for this virtual machine if not joining a domain. |

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.computerName"></a>

```go
ComputerName *string
```

- *Type:* *string

The host name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.adminPassword"></a>

```go
AdminPassword *string
```

- *Type:* *string

The new administrator password for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}

---

##### `AutoLogon`<sup>Optional</sup> <a name="AutoLogon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogon"></a>

```go
AutoLogon interface{}
```

- *Type:* interface{}

Specifies whether or not the VM automatically logs on as Administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#auto_logon VirtualMachine#auto_logon}

---

##### `AutoLogonCount`<sup>Optional</sup> <a name="AutoLogonCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogonCount"></a>

```go
AutoLogonCount *f64
```

- *Type:* *f64

Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#auto_logon_count VirtualMachine#auto_logon_count}

---

##### `DomainAdminPassword`<sup>Optional</sup> <a name="DomainAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminPassword"></a>

```go
DomainAdminPassword *string
```

- *Type:* *string

The password of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#domain_admin_password VirtualMachine#domain_admin_password}

---

##### `DomainAdminUser`<sup>Optional</sup> <a name="DomainAdminUser" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminUser"></a>

```go
DomainAdminUser *string
```

- *Type:* *string

The user account of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#domain_admin_user VirtualMachine#domain_admin_user}

---

##### `DomainOu`<sup>Optional</sup> <a name="DomainOu" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainOu"></a>

```go
DomainOu *string
```

- *Type:* *string

The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#domain_ou VirtualMachine#domain_ou}

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

The full name of the user of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#full_name VirtualMachine#full_name}

---

##### `JoinDomain`<sup>Optional</sup> <a name="JoinDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.joinDomain"></a>

```go
JoinDomain *string
```

- *Type:* *string

The domain that the virtual machine should join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#join_domain VirtualMachine#join_domain}

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

The organization name this virtual machine is being installed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#organization_name VirtualMachine#organization_name}

---

##### `ProductKey`<sup>Optional</sup> <a name="ProductKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.productKey"></a>

```go
ProductKey *string
```

- *Type:* *string

The product key for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#product_key VirtualMachine#product_key}

---

##### `RunOnceCommandList`<sup>Optional</sup> <a name="RunOnceCommandList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.runOnceCommandList"></a>

```go
RunOnceCommandList *[]*string
```

- *Type:* *[]*string

A list of commands to run at first user logon, after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#run_once_command_list VirtualMachine#run_once_command_list}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.timeZone"></a>

```go
TimeZone *f64
```

- *Type:* *f64

The new time zone for the virtual machine. This is a sysprep-dictated timezone code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}

---

##### `Workgroup`<sup>Optional</sup> <a name="Workgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.workgroup"></a>

```go
Workgroup *string
```

- *Type:* *string

The workgroup for this virtual machine if not joining a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#workgroup VirtualMachine#workgroup}

---

### VirtualMachineConfig <a name="VirtualMachineConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

&virtualmachine.VirtualMachineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourcePoolId: *string,
	AlternateGuestName: *string,
	Annotation: *string,
	BootDelay: *f64,
	BootRetryDelay: *f64,
	BootRetryEnabled: interface{},
	Cdrom: interface{},
	Clone: github.com/cdktf/cdktf-provider-vsphere-go/vsphere.virtualMachine.VirtualMachineClone,
	CpuHotAddEnabled: interface{},
	CpuHotRemoveEnabled: interface{},
	CpuLimit: *f64,
	CpuPerformanceCountersEnabled: interface{},
	CpuReservation: *f64,
	CpuShareCount: *f64,
	CpuShareLevel: *string,
	CustomAttributes: *map[string]*string,
	DatacenterId: *string,
	DatastoreClusterId: *string,
	DatastoreId: *string,
	Disk: interface{},
	EfiSecureBootEnabled: interface{},
	EnableDiskUuid: interface{},
	EnableLogging: interface{},
	EptRviMode: *string,
	ExtraConfig: *map[string]*string,
	ExtraConfigRebootRequired: interface{},
	Firmware: *string,
	Folder: *string,
	ForcePowerOff: interface{},
	GuestId: *string,
	HardwareVersion: *f64,
	HostSystemId: *string,
	HvMode: *string,
	Id: *string,
	IdeControllerCount: *f64,
	IgnoredGuestIps: *[]*string,
	LatencySensitivity: *string,
	Memory: *f64,
	MemoryHotAddEnabled: interface{},
	MemoryLimit: *f64,
	MemoryReservation: *f64,
	MemoryReservationLockedToMax: interface{},
	MemoryShareCount: *f64,
	MemoryShareLevel: *string,
	MigrateWaitTimeout: *f64,
	NestedHvEnabled: interface{},
	NetworkInterface: interface{},
	NumCoresPerSocket: *f64,
	NumCpus: *f64,
	OvfDeploy: github.com/cdktf/cdktf-provider-vsphere-go/vsphere.virtualMachine.VirtualMachineOvfDeploy,
	PciDeviceId: *[]*string,
	PoweronTimeout: *f64,
	ReplaceTrigger: *string,
	RunToolsScriptsAfterPowerOn: interface{},
	RunToolsScriptsAfterResume: interface{},
	RunToolsScriptsBeforeGuestReboot: interface{},
	RunToolsScriptsBeforeGuestShutdown: interface{},
	RunToolsScriptsBeforeGuestStandby: interface{},
	SataControllerCount: *f64,
	ScsiBusSharing: *string,
	ScsiControllerCount: *f64,
	ScsiType: *string,
	ShutdownWaitTimeout: *f64,
	StoragePolicyId: *string,
	SwapPlacementPolicy: *string,
	SyncTimeWithHost: interface{},
	SyncTimeWithHostPeriodically: interface{},
	Tags: *[]*string,
	ToolsUpgradePolicy: *string,
	Vapp: github.com/cdktf/cdktf-provider-vsphere-go/vsphere.virtualMachine.VirtualMachineVapp,
	VbsEnabled: interface{},
	VvtdEnabled: interface{},
	WaitForGuestIpTimeout: *f64,
	WaitForGuestNetRoutable: interface{},
	WaitForGuestNetTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.name">Name</a></code> | <code>*string</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.resourcePoolId">ResourcePoolId</a></code> | <code>*string</code> | The ID of a resource pool to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.alternateGuestName">AlternateGuestName</a></code> | <code>*string</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.annotation">Annotation</a></code> | <code>*string</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootDelay">BootDelay</a></code> | <code>*f64</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryDelay">BootRetryDelay</a></code> | <code>*f64</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryEnabled">BootRetryEnabled</a></code> | <code>interface{}</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cdrom">Cdrom</a></code> | <code>interface{}</code> | cdrom block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotAddEnabled">CpuHotAddEnabled</a></code> | <code>interface{}</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotRemoveEnabled">CpuHotRemoveEnabled</a></code> | <code>interface{}</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuLimit">CpuLimit</a></code> | <code>*f64</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuPerformanceCountersEnabled">CpuPerformanceCountersEnabled</a></code> | <code>interface{}</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuReservation">CpuReservation</a></code> | <code>*f64</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareCount">CpuShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareLevel">CpuShareLevel</a></code> | <code>*string</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | The ID of the datacenter where the VM is to be created. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>*string</code> | The ID of a datastore cluster to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreId">DatastoreId</a></code> | <code>*string</code> | The ID of the virtual machine's datastore. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.disk">Disk</a></code> | <code>interface{}</code> | disk block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.efiSecureBootEnabled">EfiSecureBootEnabled</a></code> | <code>interface{}</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableDiskUuid">EnableDiskUuid</a></code> | <code>interface{}</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.eptRviMode">EptRviMode</a></code> | <code>*string</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfig">ExtraConfig</a></code> | <code>*map[string]*string</code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfigRebootRequired">ExtraConfigRebootRequired</a></code> | <code>interface{}</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.firmware">Firmware</a></code> | <code>*string</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.folder">Folder</a></code> | <code>*string</code> | The name of the folder to locate the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forcePowerOff">ForcePowerOff</a></code> | <code>interface{}</code> | Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.guestId">GuestId</a></code> | <code>*string</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hardwareVersion">HardwareVersion</a></code> | <code>*f64</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hostSystemId">HostSystemId</a></code> | <code>*string</code> | The ID of an optional host system to pin the virtual machine to. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hvMode">HvMode</a></code> | <code>*string</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ideControllerCount">IdeControllerCount</a></code> | <code>*f64</code> | The number of IDE controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ignoredGuestIps">IgnoredGuestIps</a></code> | <code>*[]*string</code> | List of IP addresses and CIDR networks to ignore while waiting for an IP. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.latencySensitivity">LatencySensitivity</a></code> | <code>*string</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memory">Memory</a></code> | <code>*f64</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryHotAddEnabled">MemoryHotAddEnabled</a></code> | <code>interface{}</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryLimit">MemoryLimit</a></code> | <code>*f64</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservation">MemoryReservation</a></code> | <code>*f64</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservationLockedToMax">MemoryReservationLockedToMax</a></code> | <code>interface{}</code> | If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareCount">MemoryShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>*string</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.migrateWaitTimeout">MigrateWaitTimeout</a></code> | <code>*f64</code> | The amount of time, in minutes, to wait for a vMotion operation to complete before failing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.nestedHvEnabled">NestedHvEnabled</a></code> | <code>interface{}</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCoresPerSocket">NumCoresPerSocket</a></code> | <code>*f64</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCpus">NumCpus</a></code> | <code>*f64</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ovfDeploy">OvfDeploy</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | ovf_deploy block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.pciDeviceId">PciDeviceId</a></code> | <code>*[]*string</code> | A list of PCI passthrough devices. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.poweronTimeout">PoweronTimeout</a></code> | <code>*f64</code> | The amount of time, in seconds, that we will be trying to power on a VM. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.replaceTrigger">ReplaceTrigger</a></code> | <code>*string</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterPowerOn">RunToolsScriptsAfterPowerOn</a></code> | <code>interface{}</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterResume">RunToolsScriptsAfterResume</a></code> | <code>interface{}</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot">RunToolsScriptsBeforeGuestReboot</a></code> | <code>interface{}</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown">RunToolsScriptsBeforeGuestShutdown</a></code> | <code>interface{}</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby">RunToolsScriptsBeforeGuestStandby</a></code> | <code>interface{}</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.sataControllerCount">SataControllerCount</a></code> | <code>*f64</code> | The number of SATA controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiBusSharing">ScsiBusSharing</a></code> | <code>*string</code> | Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiControllerCount">ScsiControllerCount</a></code> | <code>*f64</code> | The number of SCSI controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiType">ScsiType</a></code> | <code>*string</code> | The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.shutdownWaitTimeout">ShutdownWaitTimeout</a></code> | <code>*f64</code> | The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.storagePolicyId">StoragePolicyId</a></code> | <code>*string</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.swapPlacementPolicy">SwapPlacementPolicy</a></code> | <code>*string</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHost">SyncTimeWithHost</a></code> | <code>interface{}</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHostPeriodically">SyncTimeWithHostPeriodically</a></code> | <code>interface{}</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.toolsUpgradePolicy">ToolsUpgradePolicy</a></code> | <code>*string</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vapp">Vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vbsEnabled">VbsEnabled</a></code> | <code>interface{}</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vvtdEnabled">VvtdEnabled</a></code> | <code>interface{}</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestIpTimeout">WaitForGuestIpTimeout</a></code> | <code>*f64</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetRoutable">WaitForGuestNetRoutable</a></code> | <code>interface{}</code> | Controls whether or not the guest network waiter waits for a routable address. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetTimeout">WaitForGuestNetTimeout</a></code> | <code>*f64</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#name VirtualMachine#name}

---

##### `ResourcePoolId`<sup>Required</sup> <a name="ResourcePoolId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.resourcePoolId"></a>

```go
ResourcePoolId *string
```

- *Type:* *string

The ID of a resource pool to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#resource_pool_id VirtualMachine#resource_pool_id}

---

##### `AlternateGuestName`<sup>Optional</sup> <a name="AlternateGuestName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.alternateGuestName"></a>

```go
AlternateGuestName *string
```

- *Type:* *string

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#alternate_guest_name VirtualMachine#alternate_guest_name}

---

##### `Annotation`<sup>Optional</sup> <a name="Annotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.annotation"></a>

```go
Annotation *string
```

- *Type:* *string

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#annotation VirtualMachine#annotation}

---

##### `BootDelay`<sup>Optional</sup> <a name="BootDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootDelay"></a>

```go
BootDelay *f64
```

- *Type:* *f64

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#boot_delay VirtualMachine#boot_delay}

---

##### `BootRetryDelay`<sup>Optional</sup> <a name="BootRetryDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryDelay"></a>

```go
BootRetryDelay *f64
```

- *Type:* *f64

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#boot_retry_delay VirtualMachine#boot_retry_delay}

---

##### `BootRetryEnabled`<sup>Optional</sup> <a name="BootRetryEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryEnabled"></a>

```go
BootRetryEnabled interface{}
```

- *Type:* interface{}

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#boot_retry_enabled VirtualMachine#boot_retry_enabled}

---

##### `Cdrom`<sup>Optional</sup> <a name="Cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cdrom"></a>

```go
Cdrom interface{}
```

- *Type:* interface{}

cdrom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#cdrom VirtualMachine#cdrom}

---

##### `Clone`<sup>Optional</sup> <a name="Clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.clone"></a>

```go
Clone VirtualMachineClone
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#clone VirtualMachine#clone}

---

##### `CpuHotAddEnabled`<sup>Optional</sup> <a name="CpuHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotAddEnabled"></a>

```go
CpuHotAddEnabled interface{}
```

- *Type:* interface{}

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#cpu_hot_add_enabled VirtualMachine#cpu_hot_add_enabled}

---

##### `CpuHotRemoveEnabled`<sup>Optional</sup> <a name="CpuHotRemoveEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotRemoveEnabled"></a>

```go
CpuHotRemoveEnabled interface{}
```

- *Type:* interface{}

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#cpu_hot_remove_enabled VirtualMachine#cpu_hot_remove_enabled}

---

##### `CpuLimit`<sup>Optional</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuLimit"></a>

```go
CpuLimit *f64
```

- *Type:* *f64

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#cpu_limit VirtualMachine#cpu_limit}

---

##### `CpuPerformanceCountersEnabled`<sup>Optional</sup> <a name="CpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuPerformanceCountersEnabled"></a>

```go
CpuPerformanceCountersEnabled interface{}
```

- *Type:* interface{}

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#cpu_performance_counters_enabled VirtualMachine#cpu_performance_counters_enabled}

---

##### `CpuReservation`<sup>Optional</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuReservation"></a>

```go
CpuReservation *f64
```

- *Type:* *f64

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#cpu_reservation VirtualMachine#cpu_reservation}

---

##### `CpuShareCount`<sup>Optional</sup> <a name="CpuShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareCount"></a>

```go
CpuShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#cpu_share_count VirtualMachine#cpu_share_count}

---

##### `CpuShareLevel`<sup>Optional</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareLevel"></a>

```go
CpuShareLevel *string
```

- *Type:* *string

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#cpu_share_level VirtualMachine#cpu_share_level}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.customAttributes"></a>

```go
CustomAttributes *map[string]*string
```

- *Type:* *map[string]*string

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#custom_attributes VirtualMachine#custom_attributes}

---

##### `DatacenterId`<sup>Optional</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

The ID of the datacenter where the VM is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#datacenter_id VirtualMachine#datacenter_id}

---

##### `DatastoreClusterId`<sup>Optional</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreClusterId"></a>

```go
DatastoreClusterId *string
```

- *Type:* *string

The ID of a datastore cluster to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#datastore_cluster_id VirtualMachine#datastore_cluster_id}

---

##### `DatastoreId`<sup>Optional</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreId"></a>

```go
DatastoreId *string
```

- *Type:* *string

The ID of the virtual machine's datastore.

The virtual machine configuration is placed here, along with any virtual disks that are created without datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `Disk`<sup>Optional</sup> <a name="Disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.disk"></a>

```go
Disk interface{}
```

- *Type:* interface{}

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#disk VirtualMachine#disk}

---

##### `EfiSecureBootEnabled`<sup>Optional</sup> <a name="EfiSecureBootEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.efiSecureBootEnabled"></a>

```go
EfiSecureBootEnabled interface{}
```

- *Type:* interface{}

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#efi_secure_boot_enabled VirtualMachine#efi_secure_boot_enabled}

---

##### `EnableDiskUuid`<sup>Optional</sup> <a name="EnableDiskUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableDiskUuid"></a>

```go
EnableDiskUuid interface{}
```

- *Type:* interface{}

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#enable_disk_uuid VirtualMachine#enable_disk_uuid}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableLogging"></a>

```go
EnableLogging interface{}
```

- *Type:* interface{}

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#enable_logging VirtualMachine#enable_logging}

---

##### `EptRviMode`<sup>Optional</sup> <a name="EptRviMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.eptRviMode"></a>

```go
EptRviMode *string
```

- *Type:* *string

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ept_rvi_mode VirtualMachine#ept_rvi_mode}

---

##### `ExtraConfig`<sup>Optional</sup> <a name="ExtraConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfig"></a>

```go
ExtraConfig *map[string]*string
```

- *Type:* *map[string]*string

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#extra_config VirtualMachine#extra_config}

---

##### `ExtraConfigRebootRequired`<sup>Optional</sup> <a name="ExtraConfigRebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfigRebootRequired"></a>

```go
ExtraConfigRebootRequired interface{}
```

- *Type:* interface{}

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#extra_config_reboot_required VirtualMachine#extra_config_reboot_required}

---

##### `Firmware`<sup>Optional</sup> <a name="Firmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.firmware"></a>

```go
Firmware *string
```

- *Type:* *string

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#firmware VirtualMachine#firmware}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The name of the folder to locate the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#folder VirtualMachine#folder}

---

##### `ForcePowerOff`<sup>Optional</sup> <a name="ForcePowerOff" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forcePowerOff"></a>

```go
ForcePowerOff interface{}
```

- *Type:* interface{}

Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#force_power_off VirtualMachine#force_power_off}

---

##### `GuestId`<sup>Optional</sup> <a name="GuestId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.guestId"></a>

```go
GuestId *string
```

- *Type:* *string

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#guest_id VirtualMachine#guest_id}

---

##### `HardwareVersion`<sup>Optional</sup> <a name="HardwareVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hardwareVersion"></a>

```go
HardwareVersion *f64
```

- *Type:* *f64

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#hardware_version VirtualMachine#hardware_version}

---

##### `HostSystemId`<sup>Optional</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hostSystemId"></a>

```go
HostSystemId *string
```

- *Type:* *string

The ID of an optional host system to pin the virtual machine to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#host_system_id VirtualMachine#host_system_id}

---

##### `HvMode`<sup>Optional</sup> <a name="HvMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hvMode"></a>

```go
HvMode *string
```

- *Type:* *string

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#hv_mode VirtualMachine#hv_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdeControllerCount`<sup>Optional</sup> <a name="IdeControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ideControllerCount"></a>

```go
IdeControllerCount *f64
```

- *Type:* *f64

The number of IDE controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ide_controller_count VirtualMachine#ide_controller_count}

---

##### `IgnoredGuestIps`<sup>Optional</sup> <a name="IgnoredGuestIps" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ignoredGuestIps"></a>

```go
IgnoredGuestIps *[]*string
```

- *Type:* *[]*string

List of IP addresses and CIDR networks to ignore while waiting for an IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ignored_guest_ips VirtualMachine#ignored_guest_ips}

---

##### `LatencySensitivity`<sup>Optional</sup> <a name="LatencySensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.latencySensitivity"></a>

```go
LatencySensitivity *string
```

- *Type:* *string

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#latency_sensitivity VirtualMachine#latency_sensitivity}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memory"></a>

```go
Memory *f64
```

- *Type:* *f64

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#memory VirtualMachine#memory}

---

##### `MemoryHotAddEnabled`<sup>Optional</sup> <a name="MemoryHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryHotAddEnabled"></a>

```go
MemoryHotAddEnabled interface{}
```

- *Type:* interface{}

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#memory_hot_add_enabled VirtualMachine#memory_hot_add_enabled}

---

##### `MemoryLimit`<sup>Optional</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryLimit"></a>

```go
MemoryLimit *f64
```

- *Type:* *f64

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#memory_limit VirtualMachine#memory_limit}

---

##### `MemoryReservation`<sup>Optional</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservation"></a>

```go
MemoryReservation *f64
```

- *Type:* *f64

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#memory_reservation VirtualMachine#memory_reservation}

---

##### `MemoryReservationLockedToMax`<sup>Optional</sup> <a name="MemoryReservationLockedToMax" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservationLockedToMax"></a>

```go
MemoryReservationLockedToMax interface{}
```

- *Type:* interface{}

If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#memory_reservation_locked_to_max VirtualMachine#memory_reservation_locked_to_max}

---

##### `MemoryShareCount`<sup>Optional</sup> <a name="MemoryShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareCount"></a>

```go
MemoryShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#memory_share_count VirtualMachine#memory_share_count}

---

##### `MemoryShareLevel`<sup>Optional</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareLevel"></a>

```go
MemoryShareLevel *string
```

- *Type:* *string

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#memory_share_level VirtualMachine#memory_share_level}

---

##### `MigrateWaitTimeout`<sup>Optional</sup> <a name="MigrateWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.migrateWaitTimeout"></a>

```go
MigrateWaitTimeout *f64
```

- *Type:* *f64

The amount of time, in minutes, to wait for a vMotion operation to complete before failing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#migrate_wait_timeout VirtualMachine#migrate_wait_timeout}

---

##### `NestedHvEnabled`<sup>Optional</sup> <a name="NestedHvEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.nestedHvEnabled"></a>

```go
NestedHvEnabled interface{}
```

- *Type:* interface{}

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#nested_hv_enabled VirtualMachine#nested_hv_enabled}

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}

---

##### `NumCoresPerSocket`<sup>Optional</sup> <a name="NumCoresPerSocket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCoresPerSocket"></a>

```go
NumCoresPerSocket *f64
```

- *Type:* *f64

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#num_cores_per_socket VirtualMachine#num_cores_per_socket}

---

##### `NumCpus`<sup>Optional</sup> <a name="NumCpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCpus"></a>

```go
NumCpus *f64
```

- *Type:* *f64

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#num_cpus VirtualMachine#num_cpus}

---

##### `OvfDeploy`<sup>Optional</sup> <a name="OvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ovfDeploy"></a>

```go
OvfDeploy VirtualMachineOvfDeploy
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

ovf_deploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ovf_deploy VirtualMachine#ovf_deploy}

---

##### `PciDeviceId`<sup>Optional</sup> <a name="PciDeviceId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.pciDeviceId"></a>

```go
PciDeviceId *[]*string
```

- *Type:* *[]*string

A list of PCI passthrough devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#pci_device_id VirtualMachine#pci_device_id}

---

##### `PoweronTimeout`<sup>Optional</sup> <a name="PoweronTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.poweronTimeout"></a>

```go
PoweronTimeout *f64
```

- *Type:* *f64

The amount of time, in seconds, that we will be trying to power on a VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#poweron_timeout VirtualMachine#poweron_timeout}

---

##### `ReplaceTrigger`<sup>Optional</sup> <a name="ReplaceTrigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.replaceTrigger"></a>

```go
ReplaceTrigger *string
```

- *Type:* *string

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#replace_trigger VirtualMachine#replace_trigger}

---

##### `RunToolsScriptsAfterPowerOn`<sup>Optional</sup> <a name="RunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterPowerOn"></a>

```go
RunToolsScriptsAfterPowerOn interface{}
```

- *Type:* interface{}

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#run_tools_scripts_after_power_on VirtualMachine#run_tools_scripts_after_power_on}

---

##### `RunToolsScriptsAfterResume`<sup>Optional</sup> <a name="RunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterResume"></a>

```go
RunToolsScriptsAfterResume interface{}
```

- *Type:* interface{}

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#run_tools_scripts_after_resume VirtualMachine#run_tools_scripts_after_resume}

---

##### `RunToolsScriptsBeforeGuestReboot`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot"></a>

```go
RunToolsScriptsBeforeGuestReboot interface{}
```

- *Type:* interface{}

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#run_tools_scripts_before_guest_reboot VirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `RunToolsScriptsBeforeGuestShutdown`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown"></a>

```go
RunToolsScriptsBeforeGuestShutdown interface{}
```

- *Type:* interface{}

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#run_tools_scripts_before_guest_shutdown VirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `RunToolsScriptsBeforeGuestStandby`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby"></a>

```go
RunToolsScriptsBeforeGuestStandby interface{}
```

- *Type:* interface{}

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#run_tools_scripts_before_guest_standby VirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `SataControllerCount`<sup>Optional</sup> <a name="SataControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.sataControllerCount"></a>

```go
SataControllerCount *f64
```

- *Type:* *f64

The number of SATA controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#sata_controller_count VirtualMachine#sata_controller_count}

---

##### `ScsiBusSharing`<sup>Optional</sup> <a name="ScsiBusSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiBusSharing"></a>

```go
ScsiBusSharing *string
```

- *Type:* *string

Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#scsi_bus_sharing VirtualMachine#scsi_bus_sharing}

---

##### `ScsiControllerCount`<sup>Optional</sup> <a name="ScsiControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiControllerCount"></a>

```go
ScsiControllerCount *f64
```

- *Type:* *f64

The number of SCSI controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#scsi_controller_count VirtualMachine#scsi_controller_count}

---

##### `ScsiType`<sup>Optional</sup> <a name="ScsiType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiType"></a>

```go
ScsiType *string
```

- *Type:* *string

The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#scsi_type VirtualMachine#scsi_type}

---

##### `ShutdownWaitTimeout`<sup>Optional</sup> <a name="ShutdownWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.shutdownWaitTimeout"></a>

```go
ShutdownWaitTimeout *f64
```

- *Type:* *f64

The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#shutdown_wait_timeout VirtualMachine#shutdown_wait_timeout}

---

##### `StoragePolicyId`<sup>Optional</sup> <a name="StoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.storagePolicyId"></a>

```go
StoragePolicyId *string
```

- *Type:* *string

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}

---

##### `SwapPlacementPolicy`<sup>Optional</sup> <a name="SwapPlacementPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.swapPlacementPolicy"></a>

```go
SwapPlacementPolicy *string
```

- *Type:* *string

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#swap_placement_policy VirtualMachine#swap_placement_policy}

---

##### `SyncTimeWithHost`<sup>Optional</sup> <a name="SyncTimeWithHost" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHost"></a>

```go
SyncTimeWithHost interface{}
```

- *Type:* interface{}

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#sync_time_with_host VirtualMachine#sync_time_with_host}

---

##### `SyncTimeWithHostPeriodically`<sup>Optional</sup> <a name="SyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHostPeriodically"></a>

```go
SyncTimeWithHostPeriodically interface{}
```

- *Type:* interface{}

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#sync_time_with_host_periodically VirtualMachine#sync_time_with_host_periodically}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#tags VirtualMachine#tags}

---

##### `ToolsUpgradePolicy`<sup>Optional</sup> <a name="ToolsUpgradePolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.toolsUpgradePolicy"></a>

```go
ToolsUpgradePolicy *string
```

- *Type:* *string

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#tools_upgrade_policy VirtualMachine#tools_upgrade_policy}

---

##### `Vapp`<sup>Optional</sup> <a name="Vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vapp"></a>

```go
Vapp VirtualMachineVapp
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#vapp VirtualMachine#vapp}

---

##### `VbsEnabled`<sup>Optional</sup> <a name="VbsEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vbsEnabled"></a>

```go
VbsEnabled interface{}
```

- *Type:* interface{}

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#vbs_enabled VirtualMachine#vbs_enabled}

---

##### `VvtdEnabled`<sup>Optional</sup> <a name="VvtdEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vvtdEnabled"></a>

```go
VvtdEnabled interface{}
```

- *Type:* interface{}

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#vvtd_enabled VirtualMachine#vvtd_enabled}

---

##### `WaitForGuestIpTimeout`<sup>Optional</sup> <a name="WaitForGuestIpTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestIpTimeout"></a>

```go
WaitForGuestIpTimeout *f64
```

- *Type:* *f64

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#wait_for_guest_ip_timeout VirtualMachine#wait_for_guest_ip_timeout}

---

##### `WaitForGuestNetRoutable`<sup>Optional</sup> <a name="WaitForGuestNetRoutable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetRoutable"></a>

```go
WaitForGuestNetRoutable interface{}
```

- *Type:* interface{}

Controls whether or not the guest network waiter waits for a routable address.

When false, the waiter does not wait for a default gateway, nor are IP addresses checked against any discovered default gateways as part of its success criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#wait_for_guest_net_routable VirtualMachine#wait_for_guest_net_routable}

---

##### `WaitForGuestNetTimeout`<sup>Optional</sup> <a name="WaitForGuestNetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetTimeout"></a>

```go
WaitForGuestNetTimeout *f64
```

- *Type:* *f64

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#wait_for_guest_net_timeout VirtualMachine#wait_for_guest_net_timeout}

---

### VirtualMachineDisk <a name="VirtualMachineDisk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

&virtualmachine.VirtualMachineDisk {
	Label: *string,
	Attach: interface{},
	ControllerType: *string,
	DatastoreId: *string,
	DiskMode: *string,
	DiskSharing: *string,
	EagerlyScrub: interface{},
	IoLimit: *f64,
	IoReservation: *f64,
	IoShareCount: *f64,
	IoShareLevel: *string,
	KeepOnRemove: interface{},
	Path: *string,
	Size: *f64,
	StoragePolicyId: *string,
	ThinProvisioned: interface{},
	UnitNumber: *f64,
	WriteThrough: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.label">Label</a></code> | <code>*string</code> | A unique label for this disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.attach">Attach</a></code> | <code>interface{}</code> | If this is true, the disk is attached instead of created. Implies keep_on_remove. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.controllerType">ControllerType</a></code> | <code>*string</code> | The type of controller the disk should be connected to. Must be 'scsi', 'sata', or 'ide'. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.datastoreId">DatastoreId</a></code> | <code>*string</code> | The datastore ID for this virtual disk, if different than the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskMode">DiskMode</a></code> | <code>*string</code> | The mode of this this virtual disk for purposes of writes and snapshotting. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskSharing">DiskSharing</a></code> | <code>*string</code> | The sharing mode of this virtual disk. Can be one of sharingMultiWriter or sharingNone. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.eagerlyScrub">EagerlyScrub</a></code> | <code>interface{}</code> | The virtual disk file zeroing policy when thin_provision is not true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioLimit">IoLimit</a></code> | <code>*f64</code> | The upper limit of IOPS that this disk can use. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioReservation">IoReservation</a></code> | <code>*f64</code> | The I/O guarantee that this disk has, in IOPS. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareCount">IoShareCount</a></code> | <code>*f64</code> | The share count for this disk when the share level is custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareLevel">IoShareLevel</a></code> | <code>*string</code> | The share allocation level for this disk. Can be one of low, normal, high, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.keepOnRemove">KeepOnRemove</a></code> | <code>interface{}</code> | Set to true to keep the underlying VMDK file when removing this virtual disk from configuration. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.path">Path</a></code> | <code>*string</code> | The full path of the virtual disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.size">Size</a></code> | <code>*f64</code> | The size of the disk, in GB. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.storagePolicyId">StoragePolicyId</a></code> | <code>*string</code> | The ID of the storage policy to assign to the virtual disk in VM. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.thinProvisioned">ThinProvisioned</a></code> | <code>interface{}</code> | If true, this disk is thin provisioned, with space for the file being allocated on an as-needed basis. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.unitNumber">UnitNumber</a></code> | <code>*f64</code> | The unique device number for this disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.writeThrough">WriteThrough</a></code> | <code>interface{}</code> | If true, writes for this disk are sent directly to the filesystem immediately instead of being buffered. |

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.label"></a>

```go
Label *string
```

- *Type:* *string

A unique label for this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#label VirtualMachine#label}

---

##### `Attach`<sup>Optional</sup> <a name="Attach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.attach"></a>

```go
Attach interface{}
```

- *Type:* interface{}

If this is true, the disk is attached instead of created. Implies keep_on_remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#attach VirtualMachine#attach}

---

##### `ControllerType`<sup>Optional</sup> <a name="ControllerType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.controllerType"></a>

```go
ControllerType *string
```

- *Type:* *string

The type of controller the disk should be connected to. Must be 'scsi', 'sata', or 'ide'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#controller_type VirtualMachine#controller_type}

---

##### `DatastoreId`<sup>Optional</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.datastoreId"></a>

```go
DatastoreId *string
```

- *Type:* *string

The datastore ID for this virtual disk, if different than the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `DiskMode`<sup>Optional</sup> <a name="DiskMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskMode"></a>

```go
DiskMode *string
```

- *Type:* *string

The mode of this this virtual disk for purposes of writes and snapshotting.

Can be one of append, independent_nonpersistent, independent_persistent, nonpersistent, persistent, or undoable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#disk_mode VirtualMachine#disk_mode}

---

##### `DiskSharing`<sup>Optional</sup> <a name="DiskSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskSharing"></a>

```go
DiskSharing *string
```

- *Type:* *string

The sharing mode of this virtual disk. Can be one of sharingMultiWriter or sharingNone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#disk_sharing VirtualMachine#disk_sharing}

---

##### `EagerlyScrub`<sup>Optional</sup> <a name="EagerlyScrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.eagerlyScrub"></a>

```go
EagerlyScrub interface{}
```

- *Type:* interface{}

The virtual disk file zeroing policy when thin_provision is not true.

The default is false, which lazily-zeros the disk, speeding up thick-provisioned disk creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#eagerly_scrub VirtualMachine#eagerly_scrub}

---

##### `IoLimit`<sup>Optional</sup> <a name="IoLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioLimit"></a>

```go
IoLimit *f64
```

- *Type:* *f64

The upper limit of IOPS that this disk can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#io_limit VirtualMachine#io_limit}

---

##### `IoReservation`<sup>Optional</sup> <a name="IoReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioReservation"></a>

```go
IoReservation *f64
```

- *Type:* *f64

The I/O guarantee that this disk has, in IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#io_reservation VirtualMachine#io_reservation}

---

##### `IoShareCount`<sup>Optional</sup> <a name="IoShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareCount"></a>

```go
IoShareCount *f64
```

- *Type:* *f64

The share count for this disk when the share level is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#io_share_count VirtualMachine#io_share_count}

---

##### `IoShareLevel`<sup>Optional</sup> <a name="IoShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareLevel"></a>

```go
IoShareLevel *string
```

- *Type:* *string

The share allocation level for this disk. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#io_share_level VirtualMachine#io_share_level}

---

##### `KeepOnRemove`<sup>Optional</sup> <a name="KeepOnRemove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.keepOnRemove"></a>

```go
KeepOnRemove interface{}
```

- *Type:* interface{}

Set to true to keep the underlying VMDK file when removing this virtual disk from configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#keep_on_remove VirtualMachine#keep_on_remove}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.path"></a>

```go
Path *string
```

- *Type:* *string

The full path of the virtual disk.

This can only be provided if attach is set to true, otherwise it is a read-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#path VirtualMachine#path}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

The size of the disk, in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#size VirtualMachine#size}

---

##### `StoragePolicyId`<sup>Optional</sup> <a name="StoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.storagePolicyId"></a>

```go
StoragePolicyId *string
```

- *Type:* *string

The ID of the storage policy to assign to the virtual disk in VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}

---

##### `ThinProvisioned`<sup>Optional</sup> <a name="ThinProvisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.thinProvisioned"></a>

```go
ThinProvisioned interface{}
```

- *Type:* interface{}

If true, this disk is thin provisioned, with space for the file being allocated on an as-needed basis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#thin_provisioned VirtualMachine#thin_provisioned}

---

##### `UnitNumber`<sup>Optional</sup> <a name="UnitNumber" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.unitNumber"></a>

```go
UnitNumber *f64
```

- *Type:* *f64

The unique device number for this disk.

This number determines where on the SCSI bus this device will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#unit_number VirtualMachine#unit_number}

---

##### `WriteThrough`<sup>Optional</sup> <a name="WriteThrough" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.writeThrough"></a>

```go
WriteThrough interface{}
```

- *Type:* interface{}

If true, writes for this disk are sent directly to the filesystem immediately instead of being buffered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#write_through VirtualMachine#write_through}

---

### VirtualMachineNetworkInterface <a name="VirtualMachineNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

&virtualmachine.VirtualMachineNetworkInterface {
	NetworkId: *string,
	AdapterType: *string,
	BandwidthLimit: *f64,
	BandwidthReservation: *f64,
	BandwidthShareCount: *f64,
	BandwidthShareLevel: *string,
	MacAddress: *string,
	OvfMapping: *string,
	PhysicalFunction: *string,
	UseStaticMac: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.networkId">NetworkId</a></code> | <code>*string</code> | The ID of the network to connect this network interface to. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.adapterType">AdapterType</a></code> | <code>*string</code> | The controller type. Can be one of e1000, e1000e, sriov, vmxnet3, or vrdma. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthLimit">BandwidthLimit</a></code> | <code>*f64</code> | The upper bandwidth limit of this network interface, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthReservation">BandwidthReservation</a></code> | <code>*f64</code> | The bandwidth reservation of this network interface, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareCount">BandwidthShareCount</a></code> | <code>*f64</code> | The share count for this network interface when the share level is custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareLevel">BandwidthShareLevel</a></code> | <code>*string</code> | The bandwidth share allocation level for this interface. Can be one of low, normal, high, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.macAddress">MacAddress</a></code> | <code>*string</code> | The MAC address of this network interface. Can only be manually set if use_static_mac is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.ovfMapping">OvfMapping</a></code> | <code>*string</code> | Mapping of network interface to OVF network. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.physicalFunction">PhysicalFunction</a></code> | <code>*string</code> | The ID of the Physical SR-IOV NIC to attach to, e.g. '0000:d8:00.0'. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.useStaticMac">UseStaticMac</a></code> | <code>interface{}</code> | If true, the mac_address field is treated as a static MAC address and set accordingly. |

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.networkId"></a>

```go
NetworkId *string
```

- *Type:* *string

The ID of the network to connect this network interface to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#network_id VirtualMachine#network_id}

---

##### `AdapterType`<sup>Optional</sup> <a name="AdapterType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.adapterType"></a>

```go
AdapterType *string
```

- *Type:* *string

The controller type. Can be one of e1000, e1000e, sriov, vmxnet3, or vrdma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#adapter_type VirtualMachine#adapter_type}

---

##### `BandwidthLimit`<sup>Optional</sup> <a name="BandwidthLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthLimit"></a>

```go
BandwidthLimit *f64
```

- *Type:* *f64

The upper bandwidth limit of this network interface, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#bandwidth_limit VirtualMachine#bandwidth_limit}

---

##### `BandwidthReservation`<sup>Optional</sup> <a name="BandwidthReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthReservation"></a>

```go
BandwidthReservation *f64
```

- *Type:* *f64

The bandwidth reservation of this network interface, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#bandwidth_reservation VirtualMachine#bandwidth_reservation}

---

##### `BandwidthShareCount`<sup>Optional</sup> <a name="BandwidthShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareCount"></a>

```go
BandwidthShareCount *f64
```

- *Type:* *f64

The share count for this network interface when the share level is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#bandwidth_share_count VirtualMachine#bandwidth_share_count}

---

##### `BandwidthShareLevel`<sup>Optional</sup> <a name="BandwidthShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareLevel"></a>

```go
BandwidthShareLevel *string
```

- *Type:* *string

The bandwidth share allocation level for this interface. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#bandwidth_share_level VirtualMachine#bandwidth_share_level}

---

##### `MacAddress`<sup>Optional</sup> <a name="MacAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.macAddress"></a>

```go
MacAddress *string
```

- *Type:* *string

The MAC address of this network interface. Can only be manually set if use_static_mac is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#mac_address VirtualMachine#mac_address}

---

##### `OvfMapping`<sup>Optional</sup> <a name="OvfMapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.ovfMapping"></a>

```go
OvfMapping *string
```

- *Type:* *string

Mapping of network interface to OVF network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ovf_mapping VirtualMachine#ovf_mapping}

---

##### `PhysicalFunction`<sup>Optional</sup> <a name="PhysicalFunction" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.physicalFunction"></a>

```go
PhysicalFunction *string
```

- *Type:* *string

The ID of the Physical SR-IOV NIC to attach to, e.g. '0000:d8:00.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#physical_function VirtualMachine#physical_function}

---

##### `UseStaticMac`<sup>Optional</sup> <a name="UseStaticMac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.useStaticMac"></a>

```go
UseStaticMac interface{}
```

- *Type:* interface{}

If true, the mac_address field is treated as a static MAC address and set accordingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#use_static_mac VirtualMachine#use_static_mac}

---

### VirtualMachineOvfDeploy <a name="VirtualMachineOvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

&virtualmachine.VirtualMachineOvfDeploy {
	AllowUnverifiedSslCert: interface{},
	DeploymentOption: *string,
	DiskProvisioning: *string,
	EnableHiddenProperties: interface{},
	IpAllocationPolicy: *string,
	IpProtocol: *string,
	LocalOvfPath: *string,
	OvfNetworkMap: *map[string]*string,
	RemoteOvfUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.allowUnverifiedSslCert">AllowUnverifiedSslCert</a></code> | <code>interface{}</code> | Allow unverified ssl certificates while deploying ovf/ova from url. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.deploymentOption">DeploymentOption</a></code> | <code>*string</code> | The Deployment option to be chosen. If empty, the default option is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.diskProvisioning">DiskProvisioning</a></code> | <code>*string</code> | An optional disk provisioning. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.enableHiddenProperties">EnableHiddenProperties</a></code> | <code>interface{}</code> | Allow properties with ovf:userConfigurable=false to be set. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code>*string</code> | The IP allocation policy. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | The IP protocol. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.localOvfPath">LocalOvfPath</a></code> | <code>*string</code> | The absolute path to the ovf/ova file in the local system. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ovfNetworkMap">OvfNetworkMap</a></code> | <code>*map[string]*string</code> | The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.remoteOvfUrl">RemoteOvfUrl</a></code> | <code>*string</code> | URL to the remote ovf/ova file to be deployed. |

---

##### `AllowUnverifiedSslCert`<sup>Optional</sup> <a name="AllowUnverifiedSslCert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.allowUnverifiedSslCert"></a>

```go
AllowUnverifiedSslCert interface{}
```

- *Type:* interface{}

Allow unverified ssl certificates while deploying ovf/ova from url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#allow_unverified_ssl_cert VirtualMachine#allow_unverified_ssl_cert}

---

##### `DeploymentOption`<sup>Optional</sup> <a name="DeploymentOption" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.deploymentOption"></a>

```go
DeploymentOption *string
```

- *Type:* *string

The Deployment option to be chosen. If empty, the default option is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#deployment_option VirtualMachine#deployment_option}

---

##### `DiskProvisioning`<sup>Optional</sup> <a name="DiskProvisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.diskProvisioning"></a>

```go
DiskProvisioning *string
```

- *Type:* *string

An optional disk provisioning.

If set, all the disks in the deployed ovf will have the same specified disk type (e.g., thin provisioned).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#disk_provisioning VirtualMachine#disk_provisioning}

---

##### `EnableHiddenProperties`<sup>Optional</sup> <a name="EnableHiddenProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.enableHiddenProperties"></a>

```go
EnableHiddenProperties interface{}
```

- *Type:* interface{}

Allow properties with ovf:userConfigurable=false to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#enable_hidden_properties VirtualMachine#enable_hidden_properties}

---

##### `IpAllocationPolicy`<sup>Optional</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipAllocationPolicy"></a>

```go
IpAllocationPolicy *string
```

- *Type:* *string

The IP allocation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ip_allocation_policy VirtualMachine#ip_allocation_policy}

---

##### `IpProtocol`<sup>Optional</sup> <a name="IpProtocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ip_protocol VirtualMachine#ip_protocol}

---

##### `LocalOvfPath`<sup>Optional</sup> <a name="LocalOvfPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.localOvfPath"></a>

```go
LocalOvfPath *string
```

- *Type:* *string

The absolute path to the ovf/ova file in the local system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#local_ovf_path VirtualMachine#local_ovf_path}

---

##### `OvfNetworkMap`<sup>Optional</sup> <a name="OvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ovfNetworkMap"></a>

```go
OvfNetworkMap *map[string]*string
```

- *Type:* *map[string]*string

The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}

---

##### `RemoteOvfUrl`<sup>Optional</sup> <a name="RemoteOvfUrl" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.remoteOvfUrl"></a>

```go
RemoteOvfUrl *string
```

- *Type:* *string

URL to the remote ovf/ova file to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#remote_ovf_url VirtualMachine#remote_ovf_url}

---

### VirtualMachineVapp <a name="VirtualMachineVapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

&virtualmachine.VirtualMachineVapp {
	Properties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.property.properties">Properties</a></code> | <code>*map[string]*string</code> | A map of customizable vApp properties and their values. |

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

A map of customizable vApp properties and their values.

Allows customization of VMs cloned from OVF templates which have customizable vApp properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/virtual_machine#properties VirtualMachine#properties}

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineCdromList <a name="VirtualMachineCdromList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineCdromList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineCdromList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get"></a>

```go
func Get(index *f64) VirtualMachineCdromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineCdromOutputReference <a name="VirtualMachineCdromOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineCdromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineCdromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientDevice` <a name="ResetClientDevice" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetClientDevice"></a>

```go
func ResetClientDevice()
```

##### `ResetDatastoreId` <a name="ResetDatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetDatastoreId"></a>

```go
func ResetDatastoreId()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.deviceAddress">DeviceAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.key">Key</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDeviceInput">ClientDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreIdInput">DatastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDevice">ClientDevice</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreId">DatastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceAddress`<sup>Required</sup> <a name="DeviceAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.deviceAddress"></a>

```go
func DeviceAddress() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.key"></a>

```go
func Key() *f64
```

- *Type:* *f64

---

##### `ClientDeviceInput`<sup>Optional</sup> <a name="ClientDeviceInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDeviceInput"></a>

```go
func ClientDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `DatastoreIdInput`<sup>Optional</sup> <a name="DatastoreIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreIdInput"></a>

```go
func DatastoreIdInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ClientDevice`<sup>Required</sup> <a name="ClientDevice" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDevice"></a>

```go
func ClientDevice() interface{}
```

- *Type:* interface{}

---

##### `DatastoreId`<sup>Required</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreId"></a>

```go
func DatastoreId() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineCloneCustomizationSpecOutputReference <a name="VirtualMachineCloneCustomizationSpecOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineCloneCustomizationSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineCloneCustomizationSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineCloneCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---


### VirtualMachineCloneCustomizeLinuxOptionsOutputReference <a name="VirtualMachineCloneCustomizeLinuxOptionsOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineCloneCustomizeLinuxOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineCloneCustomizeLinuxOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHwClockUtc` <a name="ResetHwClockUtc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetHwClockUtc"></a>

```go
func ResetHwClockUtc()
```

##### `ResetScriptText` <a name="ResetScriptText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetScriptText"></a>

```go
func ResetScriptText()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtcInput">HwClockUtcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptTextInput">ScriptTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtc">HwClockUtc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptText">ScriptText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `HwClockUtcInput`<sup>Optional</sup> <a name="HwClockUtcInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtcInput"></a>

```go
func HwClockUtcInput() interface{}
```

- *Type:* interface{}

---

##### `ScriptTextInput`<sup>Optional</sup> <a name="ScriptTextInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptTextInput"></a>

```go
func ScriptTextInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `HwClockUtc`<sup>Required</sup> <a name="HwClockUtc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtc"></a>

```go
func HwClockUtc() interface{}
```

- *Type:* interface{}

---

##### `ScriptText`<sup>Required</sup> <a name="ScriptText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptText"></a>

```go
func ScriptText() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineCloneCustomizeLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---


### VirtualMachineCloneCustomizeNetworkInterfaceList <a name="VirtualMachineCloneCustomizeNetworkInterfaceList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineCloneCustomizeNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineCloneCustomizeNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get"></a>

```go
func Get(index *f64) VirtualMachineCloneCustomizeNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineCloneCustomizeNetworkInterfaceOutputReference <a name="VirtualMachineCloneCustomizeNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineCloneCustomizeNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineCloneCustomizeNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsDomain` <a name="ResetDnsDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsDomain"></a>

```go
func ResetDnsDomain()
```

##### `ResetDnsServerList` <a name="ResetDnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsServerList"></a>

```go
func ResetDnsServerList()
```

##### `ResetIpv4Address` <a name="ResetIpv4Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Address"></a>

```go
func ResetIpv4Address()
```

##### `ResetIpv4Netmask` <a name="ResetIpv4Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Netmask"></a>

```go
func ResetIpv4Netmask()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Address"></a>

```go
func ResetIpv6Address()
```

##### `ResetIpv6Netmask` <a name="ResetIpv6Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Netmask"></a>

```go
func ResetIpv6Netmask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomainInput">DnsDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerListInput">DnsServerListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4NetmaskInput">Ipv4NetmaskInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6NetmaskInput">Ipv6NetmaskInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomain">DnsDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerList">DnsServerList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Netmask">Ipv4Netmask</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Netmask">Ipv6Netmask</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsDomainInput`<sup>Optional</sup> <a name="DnsDomainInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomainInput"></a>

```go
func DnsDomainInput() *string
```

- *Type:* *string

---

##### `DnsServerListInput`<sup>Optional</sup> <a name="DnsServerListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerListInput"></a>

```go
func DnsServerListInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4AddressInput"></a>

```go
func Ipv4AddressInput() *string
```

- *Type:* *string

---

##### `Ipv4NetmaskInput`<sup>Optional</sup> <a name="Ipv4NetmaskInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4NetmaskInput"></a>

```go
func Ipv4NetmaskInput() *f64
```

- *Type:* *f64

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```go
func Ipv6AddressInput() *string
```

- *Type:* *string

---

##### `Ipv6NetmaskInput`<sup>Optional</sup> <a name="Ipv6NetmaskInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6NetmaskInput"></a>

```go
func Ipv6NetmaskInput() *f64
```

- *Type:* *f64

---

##### `DnsDomain`<sup>Required</sup> <a name="DnsDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomain"></a>

```go
func DnsDomain() *string
```

- *Type:* *string

---

##### `DnsServerList`<sup>Required</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerList"></a>

```go
func DnsServerList() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `Ipv4Netmask`<sup>Required</sup> <a name="Ipv4Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Netmask"></a>

```go
func Ipv4Netmask() *f64
```

- *Type:* *f64

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Ipv6Netmask`<sup>Required</sup> <a name="Ipv6Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Netmask"></a>

```go
func Ipv6Netmask() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineCloneCustomizeOutputReference <a name="VirtualMachineCloneCustomizeOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineCloneCustomizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineCloneCustomizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinuxOptions` <a name="PutLinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions"></a>

```go
func PutLinuxOptions(value VirtualMachineCloneCustomizeLinuxOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWindowsOptions` <a name="PutWindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions"></a>

```go
func PutWindowsOptions(value VirtualMachineCloneCustomizeWindowsOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---

##### `ResetDnsServerList` <a name="ResetDnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsServerList"></a>

```go
func ResetDnsServerList()
```

##### `ResetDnsSuffixList` <a name="ResetDnsSuffixList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsSuffixList"></a>

```go
func ResetDnsSuffixList()
```

##### `ResetIpv4Gateway` <a name="ResetIpv4Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv4Gateway"></a>

```go
func ResetIpv4Gateway()
```

##### `ResetIpv6Gateway` <a name="ResetIpv6Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv6Gateway"></a>

```go
func ResetIpv6Gateway()
```

##### `ResetLinuxOptions` <a name="ResetLinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetLinuxOptions"></a>

```go
func ResetLinuxOptions()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetNetworkInterface"></a>

```go
func ResetNetworkInterface()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetWindowsOptions` <a name="ResetWindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsOptions"></a>

```go
func ResetWindowsOptions()
```

##### `ResetWindowsSysprepText` <a name="ResetWindowsSysprepText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsSysprepText"></a>

```go
func ResetWindowsSysprepText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptions">LinuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference">VirtualMachineCloneCustomizeLinuxOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList">VirtualMachineCloneCustomizeNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptions">WindowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference">VirtualMachineCloneCustomizeWindowsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerListInput">DnsServerListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixListInput">DnsSuffixListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4GatewayInput">Ipv4GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6GatewayInput">Ipv6GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptionsInput">LinuxOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptionsInput">WindowsOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepTextInput">WindowsSysprepTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerList">DnsServerList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixList">DnsSuffixList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4Gateway">Ipv4Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6Gateway">Ipv6Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepText">WindowsSysprepText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinuxOptions`<sup>Required</sup> <a name="LinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptions"></a>

```go
func LinuxOptions() VirtualMachineCloneCustomizeLinuxOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference">VirtualMachineCloneCustomizeLinuxOptionsOutputReference</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterface"></a>

```go
func NetworkInterface() VirtualMachineCloneCustomizeNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList">VirtualMachineCloneCustomizeNetworkInterfaceList</a>

---

##### `WindowsOptions`<sup>Required</sup> <a name="WindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptions"></a>

```go
func WindowsOptions() VirtualMachineCloneCustomizeWindowsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference">VirtualMachineCloneCustomizeWindowsOptionsOutputReference</a>

---

##### `DnsServerListInput`<sup>Optional</sup> <a name="DnsServerListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerListInput"></a>

```go
func DnsServerListInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsSuffixListInput`<sup>Optional</sup> <a name="DnsSuffixListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixListInput"></a>

```go
func DnsSuffixListInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4GatewayInput`<sup>Optional</sup> <a name="Ipv4GatewayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4GatewayInput"></a>

```go
func Ipv4GatewayInput() *string
```

- *Type:* *string

---

##### `Ipv6GatewayInput`<sup>Optional</sup> <a name="Ipv6GatewayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6GatewayInput"></a>

```go
func Ipv6GatewayInput() *string
```

- *Type:* *string

---

##### `LinuxOptionsInput`<sup>Optional</sup> <a name="LinuxOptionsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptionsInput"></a>

```go
func LinuxOptionsInput() VirtualMachineCloneCustomizeLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `WindowsOptionsInput`<sup>Optional</sup> <a name="WindowsOptionsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptionsInput"></a>

```go
func WindowsOptionsInput() VirtualMachineCloneCustomizeWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---

##### `WindowsSysprepTextInput`<sup>Optional</sup> <a name="WindowsSysprepTextInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepTextInput"></a>

```go
func WindowsSysprepTextInput() *string
```

- *Type:* *string

---

##### `DnsServerList`<sup>Required</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerList"></a>

```go
func DnsServerList() *[]*string
```

- *Type:* *[]*string

---

##### `DnsSuffixList`<sup>Required</sup> <a name="DnsSuffixList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixList"></a>

```go
func DnsSuffixList() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4Gateway`<sup>Required</sup> <a name="Ipv4Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4Gateway"></a>

```go
func Ipv4Gateway() *string
```

- *Type:* *string

---

##### `Ipv6Gateway`<sup>Required</sup> <a name="Ipv6Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6Gateway"></a>

```go
func Ipv6Gateway() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `WindowsSysprepText`<sup>Required</sup> <a name="WindowsSysprepText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepText"></a>

```go
func WindowsSysprepText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineCloneCustomize
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---


### VirtualMachineCloneCustomizeWindowsOptionsOutputReference <a name="VirtualMachineCloneCustomizeWindowsOptionsOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineCloneCustomizeWindowsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineCloneCustomizeWindowsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainOu">ResetDomainOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetJoinDomain">ResetJoinDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetProductKey">ResetProductKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetRunOnceCommandList">ResetRunOnceCommandList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetWorkgroup">ResetWorkgroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAdminPassword"></a>

```go
func ResetAdminPassword()
```

##### `ResetAutoLogon` <a name="ResetAutoLogon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogon"></a>

```go
func ResetAutoLogon()
```

##### `ResetAutoLogonCount` <a name="ResetAutoLogonCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogonCount"></a>

```go
func ResetAutoLogonCount()
```

##### `ResetDomainAdminPassword` <a name="ResetDomainAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminPassword"></a>

```go
func ResetDomainAdminPassword()
```

##### `ResetDomainAdminUser` <a name="ResetDomainAdminUser" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminUser"></a>

```go
func ResetDomainAdminUser()
```

##### `ResetDomainOu` <a name="ResetDomainOu" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainOu"></a>

```go
func ResetDomainOu()
```

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetFullName"></a>

```go
func ResetFullName()
```

##### `ResetJoinDomain` <a name="ResetJoinDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetJoinDomain"></a>

```go
func ResetJoinDomain()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

##### `ResetProductKey` <a name="ResetProductKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetProductKey"></a>

```go
func ResetProductKey()
```

##### `ResetRunOnceCommandList` <a name="ResetRunOnceCommandList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetRunOnceCommandList"></a>

```go
func ResetRunOnceCommandList()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```

##### `ResetWorkgroup` <a name="ResetWorkgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetWorkgroup"></a>

```go
func ResetWorkgroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCountInput">AutoLogonCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonInput">AutoLogonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerNameInput">ComputerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPasswordInput">DomainAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUserInput">DomainAdminUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainOuInput">DomainOuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomainInput">JoinDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKeyInput">ProductKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandListInput">RunOnceCommandListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroupInput">WorkgroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogon">AutoLogon</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCount">AutoLogonCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerName">ComputerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPassword">DomainAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUser">DomainAdminUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainOu">DomainOu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomain">JoinDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKey">ProductKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandList">RunOnceCommandList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZone">TimeZone</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroup">Workgroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPasswordInput"></a>

```go
func AdminPasswordInput() *string
```

- *Type:* *string

---

##### `AutoLogonCountInput`<sup>Optional</sup> <a name="AutoLogonCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCountInput"></a>

```go
func AutoLogonCountInput() *f64
```

- *Type:* *f64

---

##### `AutoLogonInput`<sup>Optional</sup> <a name="AutoLogonInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonInput"></a>

```go
func AutoLogonInput() interface{}
```

- *Type:* interface{}

---

##### `ComputerNameInput`<sup>Optional</sup> <a name="ComputerNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerNameInput"></a>

```go
func ComputerNameInput() *string
```

- *Type:* *string

---

##### `DomainAdminPasswordInput`<sup>Optional</sup> <a name="DomainAdminPasswordInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPasswordInput"></a>

```go
func DomainAdminPasswordInput() *string
```

- *Type:* *string

---

##### `DomainAdminUserInput`<sup>Optional</sup> <a name="DomainAdminUserInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUserInput"></a>

```go
func DomainAdminUserInput() *string
```

- *Type:* *string

---

##### `DomainOuInput`<sup>Optional</sup> <a name="DomainOuInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainOuInput"></a>

```go
func DomainOuInput() *string
```

- *Type:* *string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `JoinDomainInput`<sup>Optional</sup> <a name="JoinDomainInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomainInput"></a>

```go
func JoinDomainInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `ProductKeyInput`<sup>Optional</sup> <a name="ProductKeyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKeyInput"></a>

```go
func ProductKeyInput() *string
```

- *Type:* *string

---

##### `RunOnceCommandListInput`<sup>Optional</sup> <a name="RunOnceCommandListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandListInput"></a>

```go
func RunOnceCommandListInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *f64
```

- *Type:* *f64

---

##### `WorkgroupInput`<sup>Optional</sup> <a name="WorkgroupInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroupInput"></a>

```go
func WorkgroupInput() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AutoLogon`<sup>Required</sup> <a name="AutoLogon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogon"></a>

```go
func AutoLogon() interface{}
```

- *Type:* interface{}

---

##### `AutoLogonCount`<sup>Required</sup> <a name="AutoLogonCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCount"></a>

```go
func AutoLogonCount() *f64
```

- *Type:* *f64

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerName"></a>

```go
func ComputerName() *string
```

- *Type:* *string

---

##### `DomainAdminPassword`<sup>Required</sup> <a name="DomainAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPassword"></a>

```go
func DomainAdminPassword() *string
```

- *Type:* *string

---

##### `DomainAdminUser`<sup>Required</sup> <a name="DomainAdminUser" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUser"></a>

```go
func DomainAdminUser() *string
```

- *Type:* *string

---

##### `DomainOu`<sup>Required</sup> <a name="DomainOu" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainOu"></a>

```go
func DomainOu() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `JoinDomain`<sup>Required</sup> <a name="JoinDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomain"></a>

```go
func JoinDomain() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `ProductKey`<sup>Required</sup> <a name="ProductKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKey"></a>

```go
func ProductKey() *string
```

- *Type:* *string

---

##### `RunOnceCommandList`<sup>Required</sup> <a name="RunOnceCommandList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandList"></a>

```go
func RunOnceCommandList() *[]*string
```

- *Type:* *[]*string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZone"></a>

```go
func TimeZone() *f64
```

- *Type:* *f64

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroup"></a>

```go
func Workgroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineCloneCustomizeWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---


### VirtualMachineCloneOutputReference <a name="VirtualMachineCloneOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineCloneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineCloneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomizationSpec` <a name="PutCustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec"></a>

```go
func PutCustomizationSpec(value VirtualMachineCloneCustomizationSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---

##### `PutCustomize` <a name="PutCustomize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize"></a>

```go
func PutCustomize(value VirtualMachineCloneCustomize)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---

##### `ResetCustomizationSpec` <a name="ResetCustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomizationSpec"></a>

```go
func ResetCustomizationSpec()
```

##### `ResetCustomize` <a name="ResetCustomize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomize"></a>

```go
func ResetCustomize()
```

##### `ResetLinkedClone` <a name="ResetLinkedClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetLinkedClone"></a>

```go
func ResetLinkedClone()
```

##### `ResetOvfNetworkMap` <a name="ResetOvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfNetworkMap"></a>

```go
func ResetOvfNetworkMap()
```

##### `ResetOvfStorageMap` <a name="ResetOvfStorageMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfStorageMap"></a>

```go
func ResetOvfStorageMap()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpec">CustomizationSpec</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference">VirtualMachineCloneCustomizationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customize">Customize</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference">VirtualMachineCloneCustomizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpecInput">CustomizationSpecInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizeInput">CustomizeInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedCloneInput">LinkedCloneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMapInput">OvfNetworkMapInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMapInput">OvfStorageMapInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuidInput">TemplateUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedClone">LinkedClone</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMap">OvfNetworkMap</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMap">OvfStorageMap</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuid">TemplateUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomizationSpec`<sup>Required</sup> <a name="CustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpec"></a>

```go
func CustomizationSpec() VirtualMachineCloneCustomizationSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference">VirtualMachineCloneCustomizationSpecOutputReference</a>

---

##### `Customize`<sup>Required</sup> <a name="Customize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customize"></a>

```go
func Customize() VirtualMachineCloneCustomizeOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference">VirtualMachineCloneCustomizeOutputReference</a>

---

##### `CustomizationSpecInput`<sup>Optional</sup> <a name="CustomizationSpecInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpecInput"></a>

```go
func CustomizationSpecInput() VirtualMachineCloneCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---

##### `CustomizeInput`<sup>Optional</sup> <a name="CustomizeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizeInput"></a>

```go
func CustomizeInput() VirtualMachineCloneCustomize
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---

##### `LinkedCloneInput`<sup>Optional</sup> <a name="LinkedCloneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedCloneInput"></a>

```go
func LinkedCloneInput() interface{}
```

- *Type:* interface{}

---

##### `OvfNetworkMapInput`<sup>Optional</sup> <a name="OvfNetworkMapInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMapInput"></a>

```go
func OvfNetworkMapInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OvfStorageMapInput`<sup>Optional</sup> <a name="OvfStorageMapInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMapInput"></a>

```go
func OvfStorageMapInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateUuidInput`<sup>Optional</sup> <a name="TemplateUuidInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuidInput"></a>

```go
func TemplateUuidInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `LinkedClone`<sup>Required</sup> <a name="LinkedClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedClone"></a>

```go
func LinkedClone() interface{}
```

- *Type:* interface{}

---

##### `OvfNetworkMap`<sup>Required</sup> <a name="OvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMap"></a>

```go
func OvfNetworkMap() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OvfStorageMap`<sup>Required</sup> <a name="OvfStorageMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMap"></a>

```go
func OvfStorageMap() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateUuid`<sup>Required</sup> <a name="TemplateUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuid"></a>

```go
func TemplateUuid() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineClone
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---


### VirtualMachineDiskList <a name="VirtualMachineDiskList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get"></a>

```go
func Get(index *f64) VirtualMachineDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineDiskOutputReference <a name="VirtualMachineDiskOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttach` <a name="ResetAttach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetAttach"></a>

```go
func ResetAttach()
```

##### `ResetControllerType` <a name="ResetControllerType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetControllerType"></a>

```go
func ResetControllerType()
```

##### `ResetDatastoreId` <a name="ResetDatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDatastoreId"></a>

```go
func ResetDatastoreId()
```

##### `ResetDiskMode` <a name="ResetDiskMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskMode"></a>

```go
func ResetDiskMode()
```

##### `ResetDiskSharing` <a name="ResetDiskSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskSharing"></a>

```go
func ResetDiskSharing()
```

##### `ResetEagerlyScrub` <a name="ResetEagerlyScrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetEagerlyScrub"></a>

```go
func ResetEagerlyScrub()
```

##### `ResetIoLimit` <a name="ResetIoLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoLimit"></a>

```go
func ResetIoLimit()
```

##### `ResetIoReservation` <a name="ResetIoReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoReservation"></a>

```go
func ResetIoReservation()
```

##### `ResetIoShareCount` <a name="ResetIoShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareCount"></a>

```go
func ResetIoShareCount()
```

##### `ResetIoShareLevel` <a name="ResetIoShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareLevel"></a>

```go
func ResetIoShareLevel()
```

##### `ResetKeepOnRemove` <a name="ResetKeepOnRemove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetKeepOnRemove"></a>

```go
func ResetKeepOnRemove()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetSize"></a>

```go
func ResetSize()
```

##### `ResetStoragePolicyId` <a name="ResetStoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetStoragePolicyId"></a>

```go
func ResetStoragePolicyId()
```

##### `ResetThinProvisioned` <a name="ResetThinProvisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetThinProvisioned"></a>

```go
func ResetThinProvisioned()
```

##### `ResetUnitNumber` <a name="ResetUnitNumber" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetUnitNumber"></a>

```go
func ResetUnitNumber()
```

##### `ResetWriteThrough` <a name="ResetWriteThrough" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetWriteThrough"></a>

```go
func ResetWriteThrough()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.deviceAddress">DeviceAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.key">Key</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attachInput">AttachInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerTypeInput">ControllerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreIdInput">DatastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskModeInput">DiskModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharingInput">DiskSharingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrubInput">EagerlyScrubInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimitInput">IoLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservationInput">IoReservationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCountInput">IoShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevelInput">IoShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemoveInput">KeepOnRemoveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyIdInput">StoragePolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisionedInput">ThinProvisionedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumberInput">UnitNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThroughInput">WriteThroughInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attach">Attach</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerType">ControllerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreId">DatastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskMode">DiskMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharing">DiskSharing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrub">EagerlyScrub</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimit">IoLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservation">IoReservation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCount">IoShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevel">IoShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemove">KeepOnRemove</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyId">StoragePolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisioned">ThinProvisioned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumber">UnitNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThrough">WriteThrough</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceAddress`<sup>Required</sup> <a name="DeviceAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.deviceAddress"></a>

```go
func DeviceAddress() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.key"></a>

```go
func Key() *f64
```

- *Type:* *f64

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `AttachInput`<sup>Optional</sup> <a name="AttachInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attachInput"></a>

```go
func AttachInput() interface{}
```

- *Type:* interface{}

---

##### `ControllerTypeInput`<sup>Optional</sup> <a name="ControllerTypeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerTypeInput"></a>

```go
func ControllerTypeInput() *string
```

- *Type:* *string

---

##### `DatastoreIdInput`<sup>Optional</sup> <a name="DatastoreIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreIdInput"></a>

```go
func DatastoreIdInput() *string
```

- *Type:* *string

---

##### `DiskModeInput`<sup>Optional</sup> <a name="DiskModeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskModeInput"></a>

```go
func DiskModeInput() *string
```

- *Type:* *string

---

##### `DiskSharingInput`<sup>Optional</sup> <a name="DiskSharingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharingInput"></a>

```go
func DiskSharingInput() *string
```

- *Type:* *string

---

##### `EagerlyScrubInput`<sup>Optional</sup> <a name="EagerlyScrubInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrubInput"></a>

```go
func EagerlyScrubInput() interface{}
```

- *Type:* interface{}

---

##### `IoLimitInput`<sup>Optional</sup> <a name="IoLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimitInput"></a>

```go
func IoLimitInput() *f64
```

- *Type:* *f64

---

##### `IoReservationInput`<sup>Optional</sup> <a name="IoReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservationInput"></a>

```go
func IoReservationInput() *f64
```

- *Type:* *f64

---

##### `IoShareCountInput`<sup>Optional</sup> <a name="IoShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCountInput"></a>

```go
func IoShareCountInput() *f64
```

- *Type:* *f64

---

##### `IoShareLevelInput`<sup>Optional</sup> <a name="IoShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevelInput"></a>

```go
func IoShareLevelInput() *string
```

- *Type:* *string

---

##### `KeepOnRemoveInput`<sup>Optional</sup> <a name="KeepOnRemoveInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemoveInput"></a>

```go
func KeepOnRemoveInput() interface{}
```

- *Type:* interface{}

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `StoragePolicyIdInput`<sup>Optional</sup> <a name="StoragePolicyIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyIdInput"></a>

```go
func StoragePolicyIdInput() *string
```

- *Type:* *string

---

##### `ThinProvisionedInput`<sup>Optional</sup> <a name="ThinProvisionedInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisionedInput"></a>

```go
func ThinProvisionedInput() interface{}
```

- *Type:* interface{}

---

##### `UnitNumberInput`<sup>Optional</sup> <a name="UnitNumberInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumberInput"></a>

```go
func UnitNumberInput() *f64
```

- *Type:* *f64

---

##### `WriteThroughInput`<sup>Optional</sup> <a name="WriteThroughInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThroughInput"></a>

```go
func WriteThroughInput() interface{}
```

- *Type:* interface{}

---

##### `Attach`<sup>Required</sup> <a name="Attach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attach"></a>

```go
func Attach() interface{}
```

- *Type:* interface{}

---

##### `ControllerType`<sup>Required</sup> <a name="ControllerType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerType"></a>

```go
func ControllerType() *string
```

- *Type:* *string

---

##### `DatastoreId`<sup>Required</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreId"></a>

```go
func DatastoreId() *string
```

- *Type:* *string

---

##### `DiskMode`<sup>Required</sup> <a name="DiskMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskMode"></a>

```go
func DiskMode() *string
```

- *Type:* *string

---

##### `DiskSharing`<sup>Required</sup> <a name="DiskSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharing"></a>

```go
func DiskSharing() *string
```

- *Type:* *string

---

##### `EagerlyScrub`<sup>Required</sup> <a name="EagerlyScrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrub"></a>

```go
func EagerlyScrub() interface{}
```

- *Type:* interface{}

---

##### `IoLimit`<sup>Required</sup> <a name="IoLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimit"></a>

```go
func IoLimit() *f64
```

- *Type:* *f64

---

##### `IoReservation`<sup>Required</sup> <a name="IoReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservation"></a>

```go
func IoReservation() *f64
```

- *Type:* *f64

---

##### `IoShareCount`<sup>Required</sup> <a name="IoShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCount"></a>

```go
func IoShareCount() *f64
```

- *Type:* *f64

---

##### `IoShareLevel`<sup>Required</sup> <a name="IoShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevel"></a>

```go
func IoShareLevel() *string
```

- *Type:* *string

---

##### `KeepOnRemove`<sup>Required</sup> <a name="KeepOnRemove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemove"></a>

```go
func KeepOnRemove() interface{}
```

- *Type:* interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `StoragePolicyId`<sup>Required</sup> <a name="StoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyId"></a>

```go
func StoragePolicyId() *string
```

- *Type:* *string

---

##### `ThinProvisioned`<sup>Required</sup> <a name="ThinProvisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisioned"></a>

```go
func ThinProvisioned() interface{}
```

- *Type:* interface{}

---

##### `UnitNumber`<sup>Required</sup> <a name="UnitNumber" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumber"></a>

```go
func UnitNumber() *f64
```

- *Type:* *f64

---

##### `WriteThrough`<sup>Required</sup> <a name="WriteThrough" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThrough"></a>

```go
func WriteThrough() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineNetworkInterfaceList <a name="VirtualMachineNetworkInterfaceList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get"></a>

```go
func Get(index *f64) VirtualMachineNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineNetworkInterfaceOutputReference <a name="VirtualMachineNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdapterType` <a name="ResetAdapterType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetAdapterType"></a>

```go
func ResetAdapterType()
```

##### `ResetBandwidthLimit` <a name="ResetBandwidthLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthLimit"></a>

```go
func ResetBandwidthLimit()
```

##### `ResetBandwidthReservation` <a name="ResetBandwidthReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthReservation"></a>

```go
func ResetBandwidthReservation()
```

##### `ResetBandwidthShareCount` <a name="ResetBandwidthShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareCount"></a>

```go
func ResetBandwidthShareCount()
```

##### `ResetBandwidthShareLevel` <a name="ResetBandwidthShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareLevel"></a>

```go
func ResetBandwidthShareLevel()
```

##### `ResetMacAddress` <a name="ResetMacAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetMacAddress"></a>

```go
func ResetMacAddress()
```

##### `ResetOvfMapping` <a name="ResetOvfMapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetOvfMapping"></a>

```go
func ResetOvfMapping()
```

##### `ResetPhysicalFunction` <a name="ResetPhysicalFunction" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetPhysicalFunction"></a>

```go
func ResetPhysicalFunction()
```

##### `ResetUseStaticMac` <a name="ResetUseStaticMac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetUseStaticMac"></a>

```go
func ResetUseStaticMac()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.deviceAddress">DeviceAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.key">Key</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterTypeInput">AdapterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimitInput">BandwidthLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservationInput">BandwidthReservationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCountInput">BandwidthShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevelInput">BandwidthShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddressInput">MacAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkIdInput">NetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMappingInput">OvfMappingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunctionInput">PhysicalFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMacInput">UseStaticMacInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterType">AdapterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimit">BandwidthLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservation">BandwidthReservation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCount">BandwidthShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevel">BandwidthShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddress">MacAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkId">NetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMapping">OvfMapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunction">PhysicalFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMac">UseStaticMac</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceAddress`<sup>Required</sup> <a name="DeviceAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.deviceAddress"></a>

```go
func DeviceAddress() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.key"></a>

```go
func Key() *f64
```

- *Type:* *f64

---

##### `AdapterTypeInput`<sup>Optional</sup> <a name="AdapterTypeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterTypeInput"></a>

```go
func AdapterTypeInput() *string
```

- *Type:* *string

---

##### `BandwidthLimitInput`<sup>Optional</sup> <a name="BandwidthLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimitInput"></a>

```go
func BandwidthLimitInput() *f64
```

- *Type:* *f64

---

##### `BandwidthReservationInput`<sup>Optional</sup> <a name="BandwidthReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservationInput"></a>

```go
func BandwidthReservationInput() *f64
```

- *Type:* *f64

---

##### `BandwidthShareCountInput`<sup>Optional</sup> <a name="BandwidthShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCountInput"></a>

```go
func BandwidthShareCountInput() *f64
```

- *Type:* *f64

---

##### `BandwidthShareLevelInput`<sup>Optional</sup> <a name="BandwidthShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevelInput"></a>

```go
func BandwidthShareLevelInput() *string
```

- *Type:* *string

---

##### `MacAddressInput`<sup>Optional</sup> <a name="MacAddressInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddressInput"></a>

```go
func MacAddressInput() *string
```

- *Type:* *string

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkIdInput"></a>

```go
func NetworkIdInput() *string
```

- *Type:* *string

---

##### `OvfMappingInput`<sup>Optional</sup> <a name="OvfMappingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMappingInput"></a>

```go
func OvfMappingInput() *string
```

- *Type:* *string

---

##### `PhysicalFunctionInput`<sup>Optional</sup> <a name="PhysicalFunctionInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunctionInput"></a>

```go
func PhysicalFunctionInput() *string
```

- *Type:* *string

---

##### `UseStaticMacInput`<sup>Optional</sup> <a name="UseStaticMacInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMacInput"></a>

```go
func UseStaticMacInput() interface{}
```

- *Type:* interface{}

---

##### `AdapterType`<sup>Required</sup> <a name="AdapterType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterType"></a>

```go
func AdapterType() *string
```

- *Type:* *string

---

##### `BandwidthLimit`<sup>Required</sup> <a name="BandwidthLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimit"></a>

```go
func BandwidthLimit() *f64
```

- *Type:* *f64

---

##### `BandwidthReservation`<sup>Required</sup> <a name="BandwidthReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservation"></a>

```go
func BandwidthReservation() *f64
```

- *Type:* *f64

---

##### `BandwidthShareCount`<sup>Required</sup> <a name="BandwidthShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCount"></a>

```go
func BandwidthShareCount() *f64
```

- *Type:* *f64

---

##### `BandwidthShareLevel`<sup>Required</sup> <a name="BandwidthShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevel"></a>

```go
func BandwidthShareLevel() *string
```

- *Type:* *string

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddress"></a>

```go
func MacAddress() *string
```

- *Type:* *string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkId"></a>

```go
func NetworkId() *string
```

- *Type:* *string

---

##### `OvfMapping`<sup>Required</sup> <a name="OvfMapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMapping"></a>

```go
func OvfMapping() *string
```

- *Type:* *string

---

##### `PhysicalFunction`<sup>Required</sup> <a name="PhysicalFunction" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunction"></a>

```go
func PhysicalFunction() *string
```

- *Type:* *string

---

##### `UseStaticMac`<sup>Required</sup> <a name="UseStaticMac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMac"></a>

```go
func UseStaticMac() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineOvfDeployOutputReference <a name="VirtualMachineOvfDeployOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineOvfDeployOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineOvfDeployOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowUnverifiedSslCert` <a name="ResetAllowUnverifiedSslCert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetAllowUnverifiedSslCert"></a>

```go
func ResetAllowUnverifiedSslCert()
```

##### `ResetDeploymentOption` <a name="ResetDeploymentOption" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDeploymentOption"></a>

```go
func ResetDeploymentOption()
```

##### `ResetDiskProvisioning` <a name="ResetDiskProvisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDiskProvisioning"></a>

```go
func ResetDiskProvisioning()
```

##### `ResetEnableHiddenProperties` <a name="ResetEnableHiddenProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetEnableHiddenProperties"></a>

```go
func ResetEnableHiddenProperties()
```

##### `ResetIpAllocationPolicy` <a name="ResetIpAllocationPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpAllocationPolicy"></a>

```go
func ResetIpAllocationPolicy()
```

##### `ResetIpProtocol` <a name="ResetIpProtocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpProtocol"></a>

```go
func ResetIpProtocol()
```

##### `ResetLocalOvfPath` <a name="ResetLocalOvfPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetLocalOvfPath"></a>

```go
func ResetLocalOvfPath()
```

##### `ResetOvfNetworkMap` <a name="ResetOvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetOvfNetworkMap"></a>

```go
func ResetOvfNetworkMap()
```

##### `ResetRemoteOvfUrl` <a name="ResetRemoteOvfUrl" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetRemoteOvfUrl"></a>

```go
func ResetRemoteOvfUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCertInput">AllowUnverifiedSslCertInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOptionInput">DeploymentOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioningInput">DiskProvisioningInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenPropertiesInput">EnableHiddenPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicyInput">IpAllocationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPathInput">LocalOvfPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMapInput">OvfNetworkMapInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrlInput">RemoteOvfUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCert">AllowUnverifiedSslCert</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOption">DeploymentOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioning">DiskProvisioning</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenProperties">EnableHiddenProperties</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPath">LocalOvfPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMap">OvfNetworkMap</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrl">RemoteOvfUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowUnverifiedSslCertInput`<sup>Optional</sup> <a name="AllowUnverifiedSslCertInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCertInput"></a>

```go
func AllowUnverifiedSslCertInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentOptionInput`<sup>Optional</sup> <a name="DeploymentOptionInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOptionInput"></a>

```go
func DeploymentOptionInput() *string
```

- *Type:* *string

---

##### `DiskProvisioningInput`<sup>Optional</sup> <a name="DiskProvisioningInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioningInput"></a>

```go
func DiskProvisioningInput() *string
```

- *Type:* *string

---

##### `EnableHiddenPropertiesInput`<sup>Optional</sup> <a name="EnableHiddenPropertiesInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenPropertiesInput"></a>

```go
func EnableHiddenPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `IpAllocationPolicyInput`<sup>Optional</sup> <a name="IpAllocationPolicyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicyInput"></a>

```go
func IpAllocationPolicyInput() *string
```

- *Type:* *string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `LocalOvfPathInput`<sup>Optional</sup> <a name="LocalOvfPathInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPathInput"></a>

```go
func LocalOvfPathInput() *string
```

- *Type:* *string

---

##### `OvfNetworkMapInput`<sup>Optional</sup> <a name="OvfNetworkMapInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMapInput"></a>

```go
func OvfNetworkMapInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RemoteOvfUrlInput`<sup>Optional</sup> <a name="RemoteOvfUrlInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrlInput"></a>

```go
func RemoteOvfUrlInput() *string
```

- *Type:* *string

---

##### `AllowUnverifiedSslCert`<sup>Required</sup> <a name="AllowUnverifiedSslCert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCert"></a>

```go
func AllowUnverifiedSslCert() interface{}
```

- *Type:* interface{}

---

##### `DeploymentOption`<sup>Required</sup> <a name="DeploymentOption" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOption"></a>

```go
func DeploymentOption() *string
```

- *Type:* *string

---

##### `DiskProvisioning`<sup>Required</sup> <a name="DiskProvisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioning"></a>

```go
func DiskProvisioning() *string
```

- *Type:* *string

---

##### `EnableHiddenProperties`<sup>Required</sup> <a name="EnableHiddenProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenProperties"></a>

```go
func EnableHiddenProperties() interface{}
```

- *Type:* interface{}

---

##### `IpAllocationPolicy`<sup>Required</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicy"></a>

```go
func IpAllocationPolicy() *string
```

- *Type:* *string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `LocalOvfPath`<sup>Required</sup> <a name="LocalOvfPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPath"></a>

```go
func LocalOvfPath() *string
```

- *Type:* *string

---

##### `OvfNetworkMap`<sup>Required</sup> <a name="OvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMap"></a>

```go
func OvfNetworkMap() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RemoteOvfUrl`<sup>Required</sup> <a name="RemoteOvfUrl" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrl"></a>

```go
func RemoteOvfUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineOvfDeploy
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---


### VirtualMachineVappOutputReference <a name="VirtualMachineVappOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualmachine"

virtualmachine.NewVirtualMachineVappOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineVappOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineVapp
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---



