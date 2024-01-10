# `dataVsphereVirtualMachine` Submodule <a name="`dataVsphereVirtualMachine` Submodule" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereVirtualMachine <a name="DataVsphereVirtualMachine" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine vsphere_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

datavspherevirtualmachine.NewDataVsphereVirtualMachine(scope Construct, id *string, config DataVsphereVirtualMachineConfig) DataVsphereVirtualMachine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig">DataVsphereVirtualMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig">DataVsphereVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutVapp` <a name="PutVapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp"></a>

```go
func PutVapp(value DataVsphereVirtualMachineVapp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---

##### `ResetAlternateGuestName` <a name="ResetAlternateGuestName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAlternateGuestName"></a>

```go
func ResetAlternateGuestName()
```

##### `ResetAnnotation` <a name="ResetAnnotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAnnotation"></a>

```go
func ResetAnnotation()
```

##### `ResetBootDelay` <a name="ResetBootDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootDelay"></a>

```go
func ResetBootDelay()
```

##### `ResetBootRetryDelay` <a name="ResetBootRetryDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryDelay"></a>

```go
func ResetBootRetryDelay()
```

##### `ResetBootRetryEnabled` <a name="ResetBootRetryEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryEnabled"></a>

```go
func ResetBootRetryEnabled()
```

##### `ResetCpuHotAddEnabled` <a name="ResetCpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotAddEnabled"></a>

```go
func ResetCpuHotAddEnabled()
```

##### `ResetCpuHotRemoveEnabled` <a name="ResetCpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotRemoveEnabled"></a>

```go
func ResetCpuHotRemoveEnabled()
```

##### `ResetCpuLimit` <a name="ResetCpuLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuLimit"></a>

```go
func ResetCpuLimit()
```

##### `ResetCpuPerformanceCountersEnabled` <a name="ResetCpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuPerformanceCountersEnabled"></a>

```go
func ResetCpuPerformanceCountersEnabled()
```

##### `ResetCpuReservation` <a name="ResetCpuReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuReservation"></a>

```go
func ResetCpuReservation()
```

##### `ResetCpuShareCount` <a name="ResetCpuShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareCount"></a>

```go
func ResetCpuShareCount()
```

##### `ResetCpuShareLevel` <a name="ResetCpuShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareLevel"></a>

```go
func ResetCpuShareLevel()
```

##### `ResetDatacenterId` <a name="ResetDatacenterId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetDatacenterId"></a>

```go
func ResetDatacenterId()
```

##### `ResetEfiSecureBootEnabled` <a name="ResetEfiSecureBootEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEfiSecureBootEnabled"></a>

```go
func ResetEfiSecureBootEnabled()
```

##### `ResetEnableDiskUuid` <a name="ResetEnableDiskUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableDiskUuid"></a>

```go
func ResetEnableDiskUuid()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableLogging"></a>

```go
func ResetEnableLogging()
```

##### `ResetEptRviMode` <a name="ResetEptRviMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEptRviMode"></a>

```go
func ResetEptRviMode()
```

##### `ResetExtraConfig` <a name="ResetExtraConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfig"></a>

```go
func ResetExtraConfig()
```

##### `ResetExtraConfigRebootRequired` <a name="ResetExtraConfigRebootRequired" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfigRebootRequired"></a>

```go
func ResetExtraConfigRebootRequired()
```

##### `ResetFirmware` <a name="ResetFirmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFirmware"></a>

```go
func ResetFirmware()
```

##### `ResetGuestId` <a name="ResetGuestId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetGuestId"></a>

```go
func ResetGuestId()
```

##### `ResetHardwareVersion` <a name="ResetHardwareVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHardwareVersion"></a>

```go
func ResetHardwareVersion()
```

##### `ResetHvMode` <a name="ResetHvMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHvMode"></a>

```go
func ResetHvMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetId"></a>

```go
func ResetId()
```

##### `ResetIdeControllerScanCount` <a name="ResetIdeControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetIdeControllerScanCount"></a>

```go
func ResetIdeControllerScanCount()
```

##### `ResetLatencySensitivity` <a name="ResetLatencySensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetLatencySensitivity"></a>

```go
func ResetLatencySensitivity()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetMemoryHotAddEnabled` <a name="ResetMemoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryHotAddEnabled"></a>

```go
func ResetMemoryHotAddEnabled()
```

##### `ResetMemoryLimit` <a name="ResetMemoryLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryLimit"></a>

```go
func ResetMemoryLimit()
```

##### `ResetMemoryReservation` <a name="ResetMemoryReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservation"></a>

```go
func ResetMemoryReservation()
```

##### `ResetMemoryShareCount` <a name="ResetMemoryShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareCount"></a>

```go
func ResetMemoryShareCount()
```

##### `ResetMemoryShareLevel` <a name="ResetMemoryShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareLevel"></a>

```go
func ResetMemoryShareLevel()
```

##### `ResetMoid` <a name="ResetMoid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMoid"></a>

```go
func ResetMoid()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetName"></a>

```go
func ResetName()
```

##### `ResetNestedHvEnabled` <a name="ResetNestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNestedHvEnabled"></a>

```go
func ResetNestedHvEnabled()
```

##### `ResetNumCoresPerSocket` <a name="ResetNumCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCoresPerSocket"></a>

```go
func ResetNumCoresPerSocket()
```

##### `ResetNumCpus` <a name="ResetNumCpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCpus"></a>

```go
func ResetNumCpus()
```

##### `ResetReplaceTrigger` <a name="ResetReplaceTrigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetReplaceTrigger"></a>

```go
func ResetReplaceTrigger()
```

##### `ResetRunToolsScriptsAfterPowerOn` <a name="ResetRunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterPowerOn"></a>

```go
func ResetRunToolsScriptsAfterPowerOn()
```

##### `ResetRunToolsScriptsAfterResume` <a name="ResetRunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterResume"></a>

```go
func ResetRunToolsScriptsAfterResume()
```

##### `ResetRunToolsScriptsBeforeGuestReboot` <a name="ResetRunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestReboot"></a>

```go
func ResetRunToolsScriptsBeforeGuestReboot()
```

##### `ResetRunToolsScriptsBeforeGuestShutdown` <a name="ResetRunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestShutdown"></a>

```go
func ResetRunToolsScriptsBeforeGuestShutdown()
```

##### `ResetRunToolsScriptsBeforeGuestStandby` <a name="ResetRunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestStandby"></a>

```go
func ResetRunToolsScriptsBeforeGuestStandby()
```

##### `ResetSataControllerScanCount` <a name="ResetSataControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSataControllerScanCount"></a>

```go
func ResetSataControllerScanCount()
```

##### `ResetScsiControllerScanCount` <a name="ResetScsiControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetScsiControllerScanCount"></a>

```go
func ResetScsiControllerScanCount()
```

##### `ResetStoragePolicyId` <a name="ResetStoragePolicyId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetStoragePolicyId"></a>

```go
func ResetStoragePolicyId()
```

##### `ResetSwapPlacementPolicy` <a name="ResetSwapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSwapPlacementPolicy"></a>

```go
func ResetSwapPlacementPolicy()
```

##### `ResetSyncTimeWithHost` <a name="ResetSyncTimeWithHost" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHost"></a>

```go
func ResetSyncTimeWithHost()
```

##### `ResetSyncTimeWithHostPeriodically` <a name="ResetSyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHostPeriodically"></a>

```go
func ResetSyncTimeWithHostPeriodically()
```

##### `ResetToolsUpgradePolicy` <a name="ResetToolsUpgradePolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetToolsUpgradePolicy"></a>

```go
func ResetToolsUpgradePolicy()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetUuid"></a>

```go
func ResetUuid()
```

##### `ResetVapp` <a name="ResetVapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVapp"></a>

```go
func ResetVapp()
```

##### `ResetVbsEnabled` <a name="ResetVbsEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVbsEnabled"></a>

```go
func ResetVbsEnabled()
```

##### `ResetVvtdEnabled` <a name="ResetVvtdEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVvtdEnabled"></a>

```go
func ResetVvtdEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

datavspherevirtualmachine.DataVsphereVirtualMachine_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

datavspherevirtualmachine.DataVsphereVirtualMachine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

datavspherevirtualmachine.DataVsphereVirtualMachine_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

datavspherevirtualmachine.DataVsphereVirtualMachine_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVsphereVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVsphereVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVsphereVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.changeVersion">ChangeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.defaultIpAddress">DefaultIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.disks">Disks</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList">DataVsphereVirtualMachineDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIpAddresses">GuestIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList">DataVsphereVirtualMachineNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaceTypes">NetworkInterfaceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiBusSharing">ScsiBusSharing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiType">ScsiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vapp">Vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference">DataVsphereVirtualMachineVappOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappTransport">VappTransport</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestNameInput">AlternateGuestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotationInput">AnnotationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelayInput">BootDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelayInput">BootRetryDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabledInput">BootRetryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabledInput">CpuHotAddEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabledInput">CpuHotRemoveEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimitInput">CpuLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabledInput">CpuPerformanceCountersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservationInput">CpuReservationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCountInput">CpuShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevelInput">CpuShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabledInput">EfiSecureBootEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuidInput">EnableDiskUuidInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviModeInput">EptRviModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigInput">ExtraConfigInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequiredInput">ExtraConfigRebootRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmwareInput">FirmwareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIdInput">GuestIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersionInput">HardwareVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvModeInput">HvModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCountInput">IdeControllerScanCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivityInput">LatencySensitivityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabledInput">MemoryHotAddEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryInput">MemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimitInput">MemoryLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationInput">MemoryReservationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCountInput">MemoryShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevelInput">MemoryShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moidInput">MoidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabledInput">NestedHvEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocketInput">NumCoresPerSocketInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpusInput">NumCpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTriggerInput">ReplaceTriggerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOnInput">RunToolsScriptsAfterPowerOnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResumeInput">RunToolsScriptsAfterResumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestRebootInput">RunToolsScriptsBeforeGuestRebootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput">RunToolsScriptsBeforeGuestShutdownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput">RunToolsScriptsBeforeGuestStandbyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCountInput">SataControllerScanCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCountInput">ScsiControllerScanCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyIdInput">StoragePolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicyInput">SwapPlacementPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostInput">SyncTimeWithHostInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodicallyInput">SyncTimeWithHostPeriodicallyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicyInput">ToolsUpgradePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappInput">VappInput</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabledInput">VbsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabledInput">VvtdEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestName">AlternateGuestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotation">Annotation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelay">BootDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelay">BootRetryDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabled">BootRetryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabled">CpuHotAddEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabled">CpuHotRemoveEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimit">CpuLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabled">CpuPerformanceCountersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservation">CpuReservation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCount">CpuShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevel">CpuShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabled">EfiSecureBootEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuid">EnableDiskUuid</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviMode">EptRviMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfig">ExtraConfig</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequired">ExtraConfigRebootRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmware">Firmware</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestId">GuestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersion">HardwareVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvMode">HvMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCount">IdeControllerScanCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivity">LatencySensitivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabled">MemoryHotAddEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimit">MemoryLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservation">MemoryReservation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCount">MemoryShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moid">Moid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabled">NestedHvEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocket">NumCoresPerSocket</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpus">NumCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTrigger">ReplaceTrigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOn">RunToolsScriptsAfterPowerOn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResume">RunToolsScriptsAfterResume</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestReboot">RunToolsScriptsBeforeGuestReboot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdown">RunToolsScriptsBeforeGuestShutdown</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandby">RunToolsScriptsBeforeGuestStandby</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCount">SataControllerScanCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCount">ScsiControllerScanCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyId">StoragePolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicy">SwapPlacementPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHost">SyncTimeWithHost</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodically">SyncTimeWithHostPeriodically</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicy">ToolsUpgradePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabled">VbsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabled">VvtdEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ChangeVersion`<sup>Required</sup> <a name="ChangeVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.changeVersion"></a>

```go
func ChangeVersion() *string
```

- *Type:* *string

---

##### `DefaultIpAddress`<sup>Required</sup> <a name="DefaultIpAddress" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.defaultIpAddress"></a>

```go
func DefaultIpAddress() *string
```

- *Type:* *string

---

##### `Disks`<sup>Required</sup> <a name="Disks" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.disks"></a>

```go
func Disks() DataVsphereVirtualMachineDisksList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList">DataVsphereVirtualMachineDisksList</a>

---

##### `GuestIpAddresses`<sup>Required</sup> <a name="GuestIpAddresses" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIpAddresses"></a>

```go
func GuestIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaces"></a>

```go
func NetworkInterfaces() DataVsphereVirtualMachineNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList">DataVsphereVirtualMachineNetworkInterfacesList</a>

---

##### `NetworkInterfaceTypes`<sup>Required</sup> <a name="NetworkInterfaceTypes" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaceTypes"></a>

```go
func NetworkInterfaceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ScsiBusSharing`<sup>Required</sup> <a name="ScsiBusSharing" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiBusSharing"></a>

```go
func ScsiBusSharing() *string
```

- *Type:* *string

---

##### `ScsiType`<sup>Required</sup> <a name="ScsiType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiType"></a>

```go
func ScsiType() *string
```

- *Type:* *string

---

##### `Vapp`<sup>Required</sup> <a name="Vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vapp"></a>

```go
func Vapp() DataVsphereVirtualMachineVappOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference">DataVsphereVirtualMachineVappOutputReference</a>

---

##### `VappTransport`<sup>Required</sup> <a name="VappTransport" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappTransport"></a>

```go
func VappTransport() *[]*string
```

- *Type:* *[]*string

---

##### `AlternateGuestNameInput`<sup>Optional</sup> <a name="AlternateGuestNameInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestNameInput"></a>

```go
func AlternateGuestNameInput() *string
```

- *Type:* *string

---

##### `AnnotationInput`<sup>Optional</sup> <a name="AnnotationInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotationInput"></a>

```go
func AnnotationInput() *string
```

- *Type:* *string

---

##### `BootDelayInput`<sup>Optional</sup> <a name="BootDelayInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelayInput"></a>

```go
func BootDelayInput() *f64
```

- *Type:* *f64

---

##### `BootRetryDelayInput`<sup>Optional</sup> <a name="BootRetryDelayInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelayInput"></a>

```go
func BootRetryDelayInput() *f64
```

- *Type:* *f64

---

##### `BootRetryEnabledInput`<sup>Optional</sup> <a name="BootRetryEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabledInput"></a>

```go
func BootRetryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CpuHotAddEnabledInput`<sup>Optional</sup> <a name="CpuHotAddEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabledInput"></a>

```go
func CpuHotAddEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CpuHotRemoveEnabledInput`<sup>Optional</sup> <a name="CpuHotRemoveEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabledInput"></a>

```go
func CpuHotRemoveEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CpuLimitInput`<sup>Optional</sup> <a name="CpuLimitInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimitInput"></a>

```go
func CpuLimitInput() *f64
```

- *Type:* *f64

---

##### `CpuPerformanceCountersEnabledInput`<sup>Optional</sup> <a name="CpuPerformanceCountersEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabledInput"></a>

```go
func CpuPerformanceCountersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CpuReservationInput`<sup>Optional</sup> <a name="CpuReservationInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservationInput"></a>

```go
func CpuReservationInput() *f64
```

- *Type:* *f64

---

##### `CpuShareCountInput`<sup>Optional</sup> <a name="CpuShareCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCountInput"></a>

```go
func CpuShareCountInput() *f64
```

- *Type:* *f64

---

##### `CpuShareLevelInput`<sup>Optional</sup> <a name="CpuShareLevelInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevelInput"></a>

```go
func CpuShareLevelInput() *string
```

- *Type:* *string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `EfiSecureBootEnabledInput`<sup>Optional</sup> <a name="EfiSecureBootEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabledInput"></a>

```go
func EfiSecureBootEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDiskUuidInput`<sup>Optional</sup> <a name="EnableDiskUuidInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuidInput"></a>

```go
func EnableDiskUuidInput() interface{}
```

- *Type:* interface{}

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLoggingInput"></a>

```go
func EnableLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `EptRviModeInput`<sup>Optional</sup> <a name="EptRviModeInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviModeInput"></a>

```go
func EptRviModeInput() *string
```

- *Type:* *string

---

##### `ExtraConfigInput`<sup>Optional</sup> <a name="ExtraConfigInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigInput"></a>

```go
func ExtraConfigInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExtraConfigRebootRequiredInput`<sup>Optional</sup> <a name="ExtraConfigRebootRequiredInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequiredInput"></a>

```go
func ExtraConfigRebootRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `FirmwareInput`<sup>Optional</sup> <a name="FirmwareInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmwareInput"></a>

```go
func FirmwareInput() *string
```

- *Type:* *string

---

##### `GuestIdInput`<sup>Optional</sup> <a name="GuestIdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIdInput"></a>

```go
func GuestIdInput() *string
```

- *Type:* *string

---

##### `HardwareVersionInput`<sup>Optional</sup> <a name="HardwareVersionInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersionInput"></a>

```go
func HardwareVersionInput() *f64
```

- *Type:* *f64

---

##### `HvModeInput`<sup>Optional</sup> <a name="HvModeInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvModeInput"></a>

```go
func HvModeInput() *string
```

- *Type:* *string

---

##### `IdeControllerScanCountInput`<sup>Optional</sup> <a name="IdeControllerScanCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCountInput"></a>

```go
func IdeControllerScanCountInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LatencySensitivityInput`<sup>Optional</sup> <a name="LatencySensitivityInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivityInput"></a>

```go
func LatencySensitivityInput() *string
```

- *Type:* *string

---

##### `MemoryHotAddEnabledInput`<sup>Optional</sup> <a name="MemoryHotAddEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabledInput"></a>

```go
func MemoryHotAddEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryInput"></a>

```go
func MemoryInput() *f64
```

- *Type:* *f64

---

##### `MemoryLimitInput`<sup>Optional</sup> <a name="MemoryLimitInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimitInput"></a>

```go
func MemoryLimitInput() *f64
```

- *Type:* *f64

---

##### `MemoryReservationInput`<sup>Optional</sup> <a name="MemoryReservationInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationInput"></a>

```go
func MemoryReservationInput() *f64
```

- *Type:* *f64

---

##### `MemoryShareCountInput`<sup>Optional</sup> <a name="MemoryShareCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCountInput"></a>

```go
func MemoryShareCountInput() *f64
```

- *Type:* *f64

---

##### `MemoryShareLevelInput`<sup>Optional</sup> <a name="MemoryShareLevelInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevelInput"></a>

```go
func MemoryShareLevelInput() *string
```

- *Type:* *string

---

##### `MoidInput`<sup>Optional</sup> <a name="MoidInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moidInput"></a>

```go
func MoidInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NestedHvEnabledInput`<sup>Optional</sup> <a name="NestedHvEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabledInput"></a>

```go
func NestedHvEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NumCoresPerSocketInput`<sup>Optional</sup> <a name="NumCoresPerSocketInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocketInput"></a>

```go
func NumCoresPerSocketInput() *f64
```

- *Type:* *f64

---

##### `NumCpusInput`<sup>Optional</sup> <a name="NumCpusInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpusInput"></a>

```go
func NumCpusInput() *f64
```

- *Type:* *f64

---

##### `ReplaceTriggerInput`<sup>Optional</sup> <a name="ReplaceTriggerInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTriggerInput"></a>

```go
func ReplaceTriggerInput() *string
```

- *Type:* *string

---

##### `RunToolsScriptsAfterPowerOnInput`<sup>Optional</sup> <a name="RunToolsScriptsAfterPowerOnInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOnInput"></a>

```go
func RunToolsScriptsAfterPowerOnInput() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsAfterResumeInput`<sup>Optional</sup> <a name="RunToolsScriptsAfterResumeInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResumeInput"></a>

```go
func RunToolsScriptsAfterResumeInput() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsBeforeGuestRebootInput`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestRebootInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestRebootInput"></a>

```go
func RunToolsScriptsBeforeGuestRebootInput() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsBeforeGuestShutdownInput`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestShutdownInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput"></a>

```go
func RunToolsScriptsBeforeGuestShutdownInput() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsBeforeGuestStandbyInput`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestStandbyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput"></a>

```go
func RunToolsScriptsBeforeGuestStandbyInput() interface{}
```

- *Type:* interface{}

---

##### `SataControllerScanCountInput`<sup>Optional</sup> <a name="SataControllerScanCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCountInput"></a>

```go
func SataControllerScanCountInput() *f64
```

- *Type:* *f64

---

##### `ScsiControllerScanCountInput`<sup>Optional</sup> <a name="ScsiControllerScanCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCountInput"></a>

```go
func ScsiControllerScanCountInput() *f64
```

- *Type:* *f64

---

##### `StoragePolicyIdInput`<sup>Optional</sup> <a name="StoragePolicyIdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyIdInput"></a>

```go
func StoragePolicyIdInput() *string
```

- *Type:* *string

---

##### `SwapPlacementPolicyInput`<sup>Optional</sup> <a name="SwapPlacementPolicyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicyInput"></a>

```go
func SwapPlacementPolicyInput() *string
```

- *Type:* *string

---

##### `SyncTimeWithHostInput`<sup>Optional</sup> <a name="SyncTimeWithHostInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostInput"></a>

```go
func SyncTimeWithHostInput() interface{}
```

- *Type:* interface{}

---

##### `SyncTimeWithHostPeriodicallyInput`<sup>Optional</sup> <a name="SyncTimeWithHostPeriodicallyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodicallyInput"></a>

```go
func SyncTimeWithHostPeriodicallyInput() interface{}
```

- *Type:* interface{}

---

##### `ToolsUpgradePolicyInput`<sup>Optional</sup> <a name="ToolsUpgradePolicyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicyInput"></a>

```go
func ToolsUpgradePolicyInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `VappInput`<sup>Optional</sup> <a name="VappInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappInput"></a>

```go
func VappInput() DataVsphereVirtualMachineVapp
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---

##### `VbsEnabledInput`<sup>Optional</sup> <a name="VbsEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabledInput"></a>

```go
func VbsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VvtdEnabledInput`<sup>Optional</sup> <a name="VvtdEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabledInput"></a>

```go
func VvtdEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AlternateGuestName`<sup>Required</sup> <a name="AlternateGuestName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestName"></a>

```go
func AlternateGuestName() *string
```

- *Type:* *string

---

##### `Annotation`<sup>Required</sup> <a name="Annotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotation"></a>

```go
func Annotation() *string
```

- *Type:* *string

---

##### `BootDelay`<sup>Required</sup> <a name="BootDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelay"></a>

```go
func BootDelay() *f64
```

- *Type:* *f64

---

##### `BootRetryDelay`<sup>Required</sup> <a name="BootRetryDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelay"></a>

```go
func BootRetryDelay() *f64
```

- *Type:* *f64

---

##### `BootRetryEnabled`<sup>Required</sup> <a name="BootRetryEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabled"></a>

```go
func BootRetryEnabled() interface{}
```

- *Type:* interface{}

---

##### `CpuHotAddEnabled`<sup>Required</sup> <a name="CpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabled"></a>

```go
func CpuHotAddEnabled() interface{}
```

- *Type:* interface{}

---

##### `CpuHotRemoveEnabled`<sup>Required</sup> <a name="CpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabled"></a>

```go
func CpuHotRemoveEnabled() interface{}
```

- *Type:* interface{}

---

##### `CpuLimit`<sup>Required</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimit"></a>

```go
func CpuLimit() *f64
```

- *Type:* *f64

---

##### `CpuPerformanceCountersEnabled`<sup>Required</sup> <a name="CpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabled"></a>

```go
func CpuPerformanceCountersEnabled() interface{}
```

- *Type:* interface{}

---

##### `CpuReservation`<sup>Required</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservation"></a>

```go
func CpuReservation() *f64
```

- *Type:* *f64

---

##### `CpuShareCount`<sup>Required</sup> <a name="CpuShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCount"></a>

```go
func CpuShareCount() *f64
```

- *Type:* *f64

---

##### `CpuShareLevel`<sup>Required</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevel"></a>

```go
func CpuShareLevel() *string
```

- *Type:* *string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `EfiSecureBootEnabled`<sup>Required</sup> <a name="EfiSecureBootEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabled"></a>

```go
func EfiSecureBootEnabled() interface{}
```

- *Type:* interface{}

---

##### `EnableDiskUuid`<sup>Required</sup> <a name="EnableDiskUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuid"></a>

```go
func EnableDiskUuid() interface{}
```

- *Type:* interface{}

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLogging"></a>

```go
func EnableLogging() interface{}
```

- *Type:* interface{}

---

##### `EptRviMode`<sup>Required</sup> <a name="EptRviMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviMode"></a>

```go
func EptRviMode() *string
```

- *Type:* *string

---

##### `ExtraConfig`<sup>Required</sup> <a name="ExtraConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfig"></a>

```go
func ExtraConfig() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExtraConfigRebootRequired`<sup>Required</sup> <a name="ExtraConfigRebootRequired" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequired"></a>

```go
func ExtraConfigRebootRequired() interface{}
```

- *Type:* interface{}

---

##### `Firmware`<sup>Required</sup> <a name="Firmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmware"></a>

```go
func Firmware() *string
```

- *Type:* *string

---

##### `GuestId`<sup>Required</sup> <a name="GuestId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestId"></a>

```go
func GuestId() *string
```

- *Type:* *string

---

##### `HardwareVersion`<sup>Required</sup> <a name="HardwareVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersion"></a>

```go
func HardwareVersion() *f64
```

- *Type:* *f64

---

##### `HvMode`<sup>Required</sup> <a name="HvMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvMode"></a>

```go
func HvMode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdeControllerScanCount`<sup>Required</sup> <a name="IdeControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCount"></a>

```go
func IdeControllerScanCount() *f64
```

- *Type:* *f64

---

##### `LatencySensitivity`<sup>Required</sup> <a name="LatencySensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivity"></a>

```go
func LatencySensitivity() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `MemoryHotAddEnabled`<sup>Required</sup> <a name="MemoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabled"></a>

```go
func MemoryHotAddEnabled() interface{}
```

- *Type:* interface{}

---

##### `MemoryLimit`<sup>Required</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimit"></a>

```go
func MemoryLimit() *f64
```

- *Type:* *f64

---

##### `MemoryReservation`<sup>Required</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservation"></a>

```go
func MemoryReservation() *f64
```

- *Type:* *f64

---

##### `MemoryShareCount`<sup>Required</sup> <a name="MemoryShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCount"></a>

```go
func MemoryShareCount() *f64
```

- *Type:* *f64

---

##### `MemoryShareLevel`<sup>Required</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevel"></a>

```go
func MemoryShareLevel() *string
```

- *Type:* *string

---

##### `Moid`<sup>Required</sup> <a name="Moid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moid"></a>

```go
func Moid() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NestedHvEnabled`<sup>Required</sup> <a name="NestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabled"></a>

```go
func NestedHvEnabled() interface{}
```

- *Type:* interface{}

---

##### `NumCoresPerSocket`<sup>Required</sup> <a name="NumCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocket"></a>

```go
func NumCoresPerSocket() *f64
```

- *Type:* *f64

---

##### `NumCpus`<sup>Required</sup> <a name="NumCpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpus"></a>

```go
func NumCpus() *f64
```

- *Type:* *f64

---

##### `ReplaceTrigger`<sup>Required</sup> <a name="ReplaceTrigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTrigger"></a>

```go
func ReplaceTrigger() *string
```

- *Type:* *string

---

##### `RunToolsScriptsAfterPowerOn`<sup>Required</sup> <a name="RunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOn"></a>

```go
func RunToolsScriptsAfterPowerOn() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsAfterResume`<sup>Required</sup> <a name="RunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResume"></a>

```go
func RunToolsScriptsAfterResume() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsBeforeGuestReboot`<sup>Required</sup> <a name="RunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestReboot"></a>

```go
func RunToolsScriptsBeforeGuestReboot() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsBeforeGuestShutdown`<sup>Required</sup> <a name="RunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdown"></a>

```go
func RunToolsScriptsBeforeGuestShutdown() interface{}
```

- *Type:* interface{}

---

##### `RunToolsScriptsBeforeGuestStandby`<sup>Required</sup> <a name="RunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandby"></a>

```go
func RunToolsScriptsBeforeGuestStandby() interface{}
```

- *Type:* interface{}

---

##### `SataControllerScanCount`<sup>Required</sup> <a name="SataControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCount"></a>

```go
func SataControllerScanCount() *f64
```

- *Type:* *f64

---

##### `ScsiControllerScanCount`<sup>Required</sup> <a name="ScsiControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCount"></a>

```go
func ScsiControllerScanCount() *f64
```

- *Type:* *f64

---

##### `StoragePolicyId`<sup>Required</sup> <a name="StoragePolicyId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyId"></a>

```go
func StoragePolicyId() *string
```

- *Type:* *string

---

##### `SwapPlacementPolicy`<sup>Required</sup> <a name="SwapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicy"></a>

```go
func SwapPlacementPolicy() *string
```

- *Type:* *string

---

##### `SyncTimeWithHost`<sup>Required</sup> <a name="SyncTimeWithHost" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHost"></a>

```go
func SyncTimeWithHost() interface{}
```

- *Type:* interface{}

---

##### `SyncTimeWithHostPeriodically`<sup>Required</sup> <a name="SyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodically"></a>

```go
func SyncTimeWithHostPeriodically() interface{}
```

- *Type:* interface{}

---

##### `ToolsUpgradePolicy`<sup>Required</sup> <a name="ToolsUpgradePolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicy"></a>

```go
func ToolsUpgradePolicy() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `VbsEnabled`<sup>Required</sup> <a name="VbsEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabled"></a>

```go
func VbsEnabled() interface{}
```

- *Type:* interface{}

---

##### `VvtdEnabled`<sup>Required</sup> <a name="VvtdEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabled"></a>

```go
func VvtdEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereVirtualMachineConfig <a name="DataVsphereVirtualMachineConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

&datavspherevirtualmachine.DataVsphereVirtualMachineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AlternateGuestName: *string,
	Annotation: *string,
	BootDelay: *f64,
	BootRetryDelay: *f64,
	BootRetryEnabled: interface{},
	CpuHotAddEnabled: interface{},
	CpuHotRemoveEnabled: interface{},
	CpuLimit: *f64,
	CpuPerformanceCountersEnabled: interface{},
	CpuReservation: *f64,
	CpuShareCount: *f64,
	CpuShareLevel: *string,
	DatacenterId: *string,
	EfiSecureBootEnabled: interface{},
	EnableDiskUuid: interface{},
	EnableLogging: interface{},
	EptRviMode: *string,
	ExtraConfig: *map[string]*string,
	ExtraConfigRebootRequired: interface{},
	Firmware: *string,
	GuestId: *string,
	HardwareVersion: *f64,
	HvMode: *string,
	Id: *string,
	IdeControllerScanCount: *f64,
	LatencySensitivity: *string,
	Memory: *f64,
	MemoryHotAddEnabled: interface{},
	MemoryLimit: *f64,
	MemoryReservation: *f64,
	MemoryShareCount: *f64,
	MemoryShareLevel: *string,
	Moid: *string,
	Name: *string,
	NestedHvEnabled: interface{},
	NumCoresPerSocket: *f64,
	NumCpus: *f64,
	ReplaceTrigger: *string,
	RunToolsScriptsAfterPowerOn: interface{},
	RunToolsScriptsAfterResume: interface{},
	RunToolsScriptsBeforeGuestReboot: interface{},
	RunToolsScriptsBeforeGuestShutdown: interface{},
	RunToolsScriptsBeforeGuestStandby: interface{},
	SataControllerScanCount: *f64,
	ScsiControllerScanCount: *f64,
	StoragePolicyId: *string,
	SwapPlacementPolicy: *string,
	SyncTimeWithHost: interface{},
	SyncTimeWithHostPeriodically: interface{},
	ToolsUpgradePolicy: *string,
	Uuid: *string,
	Vapp: github.com/cdktf/cdktf-provider-vsphere-go/vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp,
	VbsEnabled: interface{},
	VvtdEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.alternateGuestName">AlternateGuestName</a></code> | <code>*string</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.annotation">Annotation</a></code> | <code>*string</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootDelay">BootDelay</a></code> | <code>*f64</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryDelay">BootRetryDelay</a></code> | <code>*f64</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryEnabled">BootRetryEnabled</a></code> | <code>interface{}</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotAddEnabled">CpuHotAddEnabled</a></code> | <code>interface{}</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotRemoveEnabled">CpuHotRemoveEnabled</a></code> | <code>interface{}</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuLimit">CpuLimit</a></code> | <code>*f64</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuPerformanceCountersEnabled">CpuPerformanceCountersEnabled</a></code> | <code>interface{}</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuReservation">CpuReservation</a></code> | <code>*f64</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareCount">CpuShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareLevel">CpuShareLevel</a></code> | <code>*string</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | The managed object ID of the datacenter the virtual machine is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.efiSecureBootEnabled">EfiSecureBootEnabled</a></code> | <code>interface{}</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableDiskUuid">EnableDiskUuid</a></code> | <code>interface{}</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.eptRviMode">EptRviMode</a></code> | <code>*string</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfig">ExtraConfig</a></code> | <code>*map[string]*string</code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfigRebootRequired">ExtraConfigRebootRequired</a></code> | <code>interface{}</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.firmware">Firmware</a></code> | <code>*string</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.guestId">GuestId</a></code> | <code>*string</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hardwareVersion">HardwareVersion</a></code> | <code>*f64</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hvMode">HvMode</a></code> | <code>*string</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.ideControllerScanCount">IdeControllerScanCount</a></code> | <code>*f64</code> | The number of IDE controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.latencySensitivity">LatencySensitivity</a></code> | <code>*string</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memory">Memory</a></code> | <code>*f64</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryHotAddEnabled">MemoryHotAddEnabled</a></code> | <code>interface{}</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryLimit">MemoryLimit</a></code> | <code>*f64</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservation">MemoryReservation</a></code> | <code>*f64</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareCount">MemoryShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>*string</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.moid">Moid</a></code> | <code>*string</code> | The machine object ID from VMware vSphere. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.name">Name</a></code> | <code>*string</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.nestedHvEnabled">NestedHvEnabled</a></code> | <code>interface{}</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCoresPerSocket">NumCoresPerSocket</a></code> | <code>*f64</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCpus">NumCpus</a></code> | <code>*f64</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.replaceTrigger">ReplaceTrigger</a></code> | <code>*string</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterPowerOn">RunToolsScriptsAfterPowerOn</a></code> | <code>interface{}</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterResume">RunToolsScriptsAfterResume</a></code> | <code>interface{}</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot">RunToolsScriptsBeforeGuestReboot</a></code> | <code>interface{}</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown">RunToolsScriptsBeforeGuestShutdown</a></code> | <code>interface{}</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby">RunToolsScriptsBeforeGuestStandby</a></code> | <code>interface{}</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.sataControllerScanCount">SataControllerScanCount</a></code> | <code>*f64</code> | The number of SATA controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.scsiControllerScanCount">ScsiControllerScanCount</a></code> | <code>*f64</code> | The number of SCSI controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.storagePolicyId">StoragePolicyId</a></code> | <code>*string</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.swapPlacementPolicy">SwapPlacementPolicy</a></code> | <code>*string</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHost">SyncTimeWithHost</a></code> | <code>interface{}</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHostPeriodically">SyncTimeWithHostPeriodically</a></code> | <code>interface{}</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.toolsUpgradePolicy">ToolsUpgradePolicy</a></code> | <code>*string</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.uuid">Uuid</a></code> | <code>*string</code> | The UUID of the virtual machine. Also exposed as the ID of the resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vapp">Vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vbsEnabled">VbsEnabled</a></code> | <code>interface{}</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vvtdEnabled">VvtdEnabled</a></code> | <code>interface{}</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlternateGuestName`<sup>Optional</sup> <a name="AlternateGuestName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.alternateGuestName"></a>

```go
AlternateGuestName *string
```

- *Type:* *string

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#alternate_guest_name DataVsphereVirtualMachine#alternate_guest_name}

---

##### `Annotation`<sup>Optional</sup> <a name="Annotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.annotation"></a>

```go
Annotation *string
```

- *Type:* *string

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#annotation DataVsphereVirtualMachine#annotation}

---

##### `BootDelay`<sup>Optional</sup> <a name="BootDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootDelay"></a>

```go
BootDelay *f64
```

- *Type:* *f64

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#boot_delay DataVsphereVirtualMachine#boot_delay}

---

##### `BootRetryDelay`<sup>Optional</sup> <a name="BootRetryDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryDelay"></a>

```go
BootRetryDelay *f64
```

- *Type:* *f64

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#boot_retry_delay DataVsphereVirtualMachine#boot_retry_delay}

---

##### `BootRetryEnabled`<sup>Optional</sup> <a name="BootRetryEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryEnabled"></a>

```go
BootRetryEnabled interface{}
```

- *Type:* interface{}

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#boot_retry_enabled DataVsphereVirtualMachine#boot_retry_enabled}

---

##### `CpuHotAddEnabled`<sup>Optional</sup> <a name="CpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotAddEnabled"></a>

```go
CpuHotAddEnabled interface{}
```

- *Type:* interface{}

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#cpu_hot_add_enabled DataVsphereVirtualMachine#cpu_hot_add_enabled}

---

##### `CpuHotRemoveEnabled`<sup>Optional</sup> <a name="CpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotRemoveEnabled"></a>

```go
CpuHotRemoveEnabled interface{}
```

- *Type:* interface{}

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#cpu_hot_remove_enabled DataVsphereVirtualMachine#cpu_hot_remove_enabled}

---

##### `CpuLimit`<sup>Optional</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuLimit"></a>

```go
CpuLimit *f64
```

- *Type:* *f64

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#cpu_limit DataVsphereVirtualMachine#cpu_limit}

---

##### `CpuPerformanceCountersEnabled`<sup>Optional</sup> <a name="CpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuPerformanceCountersEnabled"></a>

```go
CpuPerformanceCountersEnabled interface{}
```

- *Type:* interface{}

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#cpu_performance_counters_enabled DataVsphereVirtualMachine#cpu_performance_counters_enabled}

---

##### `CpuReservation`<sup>Optional</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuReservation"></a>

```go
CpuReservation *f64
```

- *Type:* *f64

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#cpu_reservation DataVsphereVirtualMachine#cpu_reservation}

---

##### `CpuShareCount`<sup>Optional</sup> <a name="CpuShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareCount"></a>

```go
CpuShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#cpu_share_count DataVsphereVirtualMachine#cpu_share_count}

---

##### `CpuShareLevel`<sup>Optional</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareLevel"></a>

```go
CpuShareLevel *string
```

- *Type:* *string

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#cpu_share_level DataVsphereVirtualMachine#cpu_share_level}

---

##### `DatacenterId`<sup>Optional</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

The managed object ID of the datacenter the virtual machine is in.

This is not required when using ESXi directly, or if there is only one datacenter in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#datacenter_id DataVsphereVirtualMachine#datacenter_id}

---

##### `EfiSecureBootEnabled`<sup>Optional</sup> <a name="EfiSecureBootEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.efiSecureBootEnabled"></a>

```go
EfiSecureBootEnabled interface{}
```

- *Type:* interface{}

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#efi_secure_boot_enabled DataVsphereVirtualMachine#efi_secure_boot_enabled}

---

##### `EnableDiskUuid`<sup>Optional</sup> <a name="EnableDiskUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableDiskUuid"></a>

```go
EnableDiskUuid interface{}
```

- *Type:* interface{}

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#enable_disk_uuid DataVsphereVirtualMachine#enable_disk_uuid}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableLogging"></a>

```go
EnableLogging interface{}
```

- *Type:* interface{}

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#enable_logging DataVsphereVirtualMachine#enable_logging}

---

##### `EptRviMode`<sup>Optional</sup> <a name="EptRviMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.eptRviMode"></a>

```go
EptRviMode *string
```

- *Type:* *string

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#ept_rvi_mode DataVsphereVirtualMachine#ept_rvi_mode}

---

##### `ExtraConfig`<sup>Optional</sup> <a name="ExtraConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfig"></a>

```go
ExtraConfig *map[string]*string
```

- *Type:* *map[string]*string

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#extra_config DataVsphereVirtualMachine#extra_config}

---

##### `ExtraConfigRebootRequired`<sup>Optional</sup> <a name="ExtraConfigRebootRequired" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfigRebootRequired"></a>

```go
ExtraConfigRebootRequired interface{}
```

- *Type:* interface{}

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#extra_config_reboot_required DataVsphereVirtualMachine#extra_config_reboot_required}

---

##### `Firmware`<sup>Optional</sup> <a name="Firmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.firmware"></a>

```go
Firmware *string
```

- *Type:* *string

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#firmware DataVsphereVirtualMachine#firmware}

---

##### `GuestId`<sup>Optional</sup> <a name="GuestId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.guestId"></a>

```go
GuestId *string
```

- *Type:* *string

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#guest_id DataVsphereVirtualMachine#guest_id}

---

##### `HardwareVersion`<sup>Optional</sup> <a name="HardwareVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hardwareVersion"></a>

```go
HardwareVersion *f64
```

- *Type:* *f64

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#hardware_version DataVsphereVirtualMachine#hardware_version}

---

##### `HvMode`<sup>Optional</sup> <a name="HvMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hvMode"></a>

```go
HvMode *string
```

- *Type:* *string

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#hv_mode DataVsphereVirtualMachine#hv_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdeControllerScanCount`<sup>Optional</sup> <a name="IdeControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.ideControllerScanCount"></a>

```go
IdeControllerScanCount *f64
```

- *Type:* *f64

The number of IDE controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#ide_controller_scan_count DataVsphereVirtualMachine#ide_controller_scan_count}

---

##### `LatencySensitivity`<sup>Optional</sup> <a name="LatencySensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.latencySensitivity"></a>

```go
LatencySensitivity *string
```

- *Type:* *string

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#latency_sensitivity DataVsphereVirtualMachine#latency_sensitivity}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memory"></a>

```go
Memory *f64
```

- *Type:* *f64

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#memory DataVsphereVirtualMachine#memory}

---

##### `MemoryHotAddEnabled`<sup>Optional</sup> <a name="MemoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryHotAddEnabled"></a>

```go
MemoryHotAddEnabled interface{}
```

- *Type:* interface{}

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#memory_hot_add_enabled DataVsphereVirtualMachine#memory_hot_add_enabled}

---

##### `MemoryLimit`<sup>Optional</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryLimit"></a>

```go
MemoryLimit *f64
```

- *Type:* *f64

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#memory_limit DataVsphereVirtualMachine#memory_limit}

---

##### `MemoryReservation`<sup>Optional</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservation"></a>

```go
MemoryReservation *f64
```

- *Type:* *f64

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#memory_reservation DataVsphereVirtualMachine#memory_reservation}

---

##### `MemoryShareCount`<sup>Optional</sup> <a name="MemoryShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareCount"></a>

```go
MemoryShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#memory_share_count DataVsphereVirtualMachine#memory_share_count}

---

##### `MemoryShareLevel`<sup>Optional</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareLevel"></a>

```go
MemoryShareLevel *string
```

- *Type:* *string

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#memory_share_level DataVsphereVirtualMachine#memory_share_level}

---

##### `Moid`<sup>Optional</sup> <a name="Moid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.moid"></a>

```go
Moid *string
```

- *Type:* *string

The machine object ID from VMware vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#moid DataVsphereVirtualMachine#moid}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#name DataVsphereVirtualMachine#name}

---

##### `NestedHvEnabled`<sup>Optional</sup> <a name="NestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.nestedHvEnabled"></a>

```go
NestedHvEnabled interface{}
```

- *Type:* interface{}

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#nested_hv_enabled DataVsphereVirtualMachine#nested_hv_enabled}

---

##### `NumCoresPerSocket`<sup>Optional</sup> <a name="NumCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCoresPerSocket"></a>

```go
NumCoresPerSocket *f64
```

- *Type:* *f64

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#num_cores_per_socket DataVsphereVirtualMachine#num_cores_per_socket}

---

##### `NumCpus`<sup>Optional</sup> <a name="NumCpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCpus"></a>

```go
NumCpus *f64
```

- *Type:* *f64

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#num_cpus DataVsphereVirtualMachine#num_cpus}

---

##### `ReplaceTrigger`<sup>Optional</sup> <a name="ReplaceTrigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.replaceTrigger"></a>

```go
ReplaceTrigger *string
```

- *Type:* *string

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#replace_trigger DataVsphereVirtualMachine#replace_trigger}

---

##### `RunToolsScriptsAfterPowerOn`<sup>Optional</sup> <a name="RunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterPowerOn"></a>

```go
RunToolsScriptsAfterPowerOn interface{}
```

- *Type:* interface{}

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#run_tools_scripts_after_power_on DataVsphereVirtualMachine#run_tools_scripts_after_power_on}

---

##### `RunToolsScriptsAfterResume`<sup>Optional</sup> <a name="RunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterResume"></a>

```go
RunToolsScriptsAfterResume interface{}
```

- *Type:* interface{}

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#run_tools_scripts_after_resume DataVsphereVirtualMachine#run_tools_scripts_after_resume}

---

##### `RunToolsScriptsBeforeGuestReboot`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot"></a>

```go
RunToolsScriptsBeforeGuestReboot interface{}
```

- *Type:* interface{}

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_reboot DataVsphereVirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `RunToolsScriptsBeforeGuestShutdown`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown"></a>

```go
RunToolsScriptsBeforeGuestShutdown interface{}
```

- *Type:* interface{}

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_shutdown DataVsphereVirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `RunToolsScriptsBeforeGuestStandby`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby"></a>

```go
RunToolsScriptsBeforeGuestStandby interface{}
```

- *Type:* interface{}

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_standby DataVsphereVirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `SataControllerScanCount`<sup>Optional</sup> <a name="SataControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.sataControllerScanCount"></a>

```go
SataControllerScanCount *f64
```

- *Type:* *f64

The number of SATA controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#sata_controller_scan_count DataVsphereVirtualMachine#sata_controller_scan_count}

---

##### `ScsiControllerScanCount`<sup>Optional</sup> <a name="ScsiControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.scsiControllerScanCount"></a>

```go
ScsiControllerScanCount *f64
```

- *Type:* *f64

The number of SCSI controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#scsi_controller_scan_count DataVsphereVirtualMachine#scsi_controller_scan_count}

---

##### `StoragePolicyId`<sup>Optional</sup> <a name="StoragePolicyId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.storagePolicyId"></a>

```go
StoragePolicyId *string
```

- *Type:* *string

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#storage_policy_id DataVsphereVirtualMachine#storage_policy_id}

---

##### `SwapPlacementPolicy`<sup>Optional</sup> <a name="SwapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.swapPlacementPolicy"></a>

```go
SwapPlacementPolicy *string
```

- *Type:* *string

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#swap_placement_policy DataVsphereVirtualMachine#swap_placement_policy}

---

##### `SyncTimeWithHost`<sup>Optional</sup> <a name="SyncTimeWithHost" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHost"></a>

```go
SyncTimeWithHost interface{}
```

- *Type:* interface{}

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#sync_time_with_host DataVsphereVirtualMachine#sync_time_with_host}

---

##### `SyncTimeWithHostPeriodically`<sup>Optional</sup> <a name="SyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHostPeriodically"></a>

```go
SyncTimeWithHostPeriodically interface{}
```

- *Type:* interface{}

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#sync_time_with_host_periodically DataVsphereVirtualMachine#sync_time_with_host_periodically}

---

##### `ToolsUpgradePolicy`<sup>Optional</sup> <a name="ToolsUpgradePolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.toolsUpgradePolicy"></a>

```go
ToolsUpgradePolicy *string
```

- *Type:* *string

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#tools_upgrade_policy DataVsphereVirtualMachine#tools_upgrade_policy}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

The UUID of the virtual machine. Also exposed as the ID of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#uuid DataVsphereVirtualMachine#uuid}

---

##### `Vapp`<sup>Optional</sup> <a name="Vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vapp"></a>

```go
Vapp DataVsphereVirtualMachineVapp
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#vapp DataVsphereVirtualMachine#vapp}

---

##### `VbsEnabled`<sup>Optional</sup> <a name="VbsEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vbsEnabled"></a>

```go
VbsEnabled interface{}
```

- *Type:* interface{}

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#vbs_enabled DataVsphereVirtualMachine#vbs_enabled}

---

##### `VvtdEnabled`<sup>Optional</sup> <a name="VvtdEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vvtdEnabled"></a>

```go
VvtdEnabled interface{}
```

- *Type:* interface{}

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#vvtd_enabled DataVsphereVirtualMachine#vvtd_enabled}

---

### DataVsphereVirtualMachineDisks <a name="DataVsphereVirtualMachineDisks" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

&datavspherevirtualmachine.DataVsphereVirtualMachineDisks {

}
```


### DataVsphereVirtualMachineNetworkInterfaces <a name="DataVsphereVirtualMachineNetworkInterfaces" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

&datavspherevirtualmachine.DataVsphereVirtualMachineNetworkInterfaces {

}
```


### DataVsphereVirtualMachineVapp <a name="DataVsphereVirtualMachineVapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

&datavspherevirtualmachine.DataVsphereVirtualMachineVapp {
	Properties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.property.properties">Properties</a></code> | <code>*map[string]*string</code> | A map of customizable vApp properties and their values. |

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

A map of customizable vApp properties and their values.

Allows customization of VMs cloned from OVF templates which have customizable vApp properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/virtual_machine#properties DataVsphereVirtualMachine#properties}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVsphereVirtualMachineDisksList <a name="DataVsphereVirtualMachineDisksList" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

datavspherevirtualmachine.NewDataVsphereVirtualMachineDisksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataVsphereVirtualMachineDisksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get"></a>

```go
func Get(index *f64) DataVsphereVirtualMachineDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataVsphereVirtualMachineDisksOutputReference <a name="DataVsphereVirtualMachineDisksOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

datavspherevirtualmachine.NewDataVsphereVirtualMachineDisksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataVsphereVirtualMachineDisksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.eagerlyScrub">EagerlyScrub</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.thinProvisioned">ThinProvisioned</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.unitNumber">UnitNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks">DataVsphereVirtualMachineDisks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EagerlyScrub`<sup>Required</sup> <a name="EagerlyScrub" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.eagerlyScrub"></a>

```go
func EagerlyScrub() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `ThinProvisioned`<sup>Required</sup> <a name="ThinProvisioned" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.thinProvisioned"></a>

```go
func ThinProvisioned() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UnitNumber`<sup>Required</sup> <a name="UnitNumber" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.unitNumber"></a>

```go
func UnitNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataVsphereVirtualMachineDisks
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks">DataVsphereVirtualMachineDisks</a>

---


### DataVsphereVirtualMachineNetworkInterfacesList <a name="DataVsphereVirtualMachineNetworkInterfacesList" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

datavspherevirtualmachine.NewDataVsphereVirtualMachineNetworkInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataVsphereVirtualMachineNetworkInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get"></a>

```go
func Get(index *f64) DataVsphereVirtualMachineNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataVsphereVirtualMachineNetworkInterfacesOutputReference <a name="DataVsphereVirtualMachineNetworkInterfacesOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

datavspherevirtualmachine.NewDataVsphereVirtualMachineNetworkInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataVsphereVirtualMachineNetworkInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.adapterType">AdapterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthLimit">BandwidthLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthReservation">BandwidthReservation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareCount">BandwidthShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareLevel">BandwidthShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.macAddress">MacAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.networkId">NetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.physicalFunction">PhysicalFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces">DataVsphereVirtualMachineNetworkInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdapterType`<sup>Required</sup> <a name="AdapterType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.adapterType"></a>

```go
func AdapterType() *string
```

- *Type:* *string

---

##### `BandwidthLimit`<sup>Required</sup> <a name="BandwidthLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthLimit"></a>

```go
func BandwidthLimit() *f64
```

- *Type:* *f64

---

##### `BandwidthReservation`<sup>Required</sup> <a name="BandwidthReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthReservation"></a>

```go
func BandwidthReservation() *f64
```

- *Type:* *f64

---

##### `BandwidthShareCount`<sup>Required</sup> <a name="BandwidthShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareCount"></a>

```go
func BandwidthShareCount() *f64
```

- *Type:* *f64

---

##### `BandwidthShareLevel`<sup>Required</sup> <a name="BandwidthShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareLevel"></a>

```go
func BandwidthShareLevel() *string
```

- *Type:* *string

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.macAddress"></a>

```go
func MacAddress() *string
```

- *Type:* *string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.networkId"></a>

```go
func NetworkId() *string
```

- *Type:* *string

---

##### `PhysicalFunction`<sup>Required</sup> <a name="PhysicalFunction" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.physicalFunction"></a>

```go
func PhysicalFunction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataVsphereVirtualMachineNetworkInterfaces
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces">DataVsphereVirtualMachineNetworkInterfaces</a>

---


### DataVsphereVirtualMachineVappOutputReference <a name="DataVsphereVirtualMachineVappOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherevirtualmachine"

datavspherevirtualmachine.NewDataVsphereVirtualMachineVappOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataVsphereVirtualMachineVappOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.internalValue"></a>

```go
func InternalValue() DataVsphereVirtualMachineVapp
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---



