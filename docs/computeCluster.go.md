# `computeCluster` Submodule <a name="`computeCluster` Submodule" id="@cdktf/provider-vsphere.computeCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeCluster <a name="ComputeCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster vsphere_compute_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.NewComputeCluster(scope Construct, id *string, config ComputeClusterConfig) ComputeCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig">ComputeClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig">ComputeClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putHostImage">PutHostImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanDiskGroup">PutVsanDiskGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanFaultDomains">PutVsanFaultDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster">PutVsanStretchedCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmAutomationLevel">ResetDpmAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmEnabled">ResetDpmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmThreshold">ResetDpmThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAdvancedOptions">ResetDrsAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAutomationLevel">ResetDrsAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnabled">ResetDrsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnablePredictiveDrs">ResetDrsEnablePredictiveDrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnableVmOverrides">ResetDrsEnableVmOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsMigrationThreshold">ResetDrsMigrationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsScaleDescendantsShares">ResetDrsScaleDescendantsShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetForceEvacuateOnDestroy">ResetForceEvacuateOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlFailoverHostSystemIds">ResetHaAdmissionControlFailoverHostSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlHostFailureTolerance">ResetHaAdmissionControlHostFailureTolerance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPerformanceTolerance">ResetHaAdmissionControlPerformanceTolerance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPolicy">ResetHaAdmissionControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageAutoCompute">ResetHaAdmissionControlResourcePercentageAutoCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageCpu">ResetHaAdmissionControlResourcePercentageCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageMemory">ResetHaAdmissionControlResourcePercentageMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitCpu">ResetHaAdmissionControlSlotPolicyExplicitCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitMemory">ResetHaAdmissionControlSlotPolicyExplicitMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyUseExplicitSize">ResetHaAdmissionControlSlotPolicyUseExplicitSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdvancedOptions">ResetHaAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdRecoveryAction">ResetHaDatastoreApdRecoveryAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponse">ResetHaDatastoreApdResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponseDelay">ResetHaDatastoreApdResponseDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastorePdlResponse">ResetHaDatastorePdlResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaEnabled">ResetHaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastoreIds">ResetHaHeartbeatDatastoreIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastorePolicy">ResetHaHeartbeatDatastorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostIsolationResponse">ResetHaHostIsolationResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostMonitoring">ResetHaHostMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmComponentProtection">ResetHaVmComponentProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmDependencyRestartCondition">ResetHaVmDependencyRestartCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmFailureInterval">ResetHaVmFailureInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumFailureWindow">ResetHaVmMaximumFailureWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumResets">ResetHaVmMaximumResets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMinimumUptime">ResetHaVmMinimumUptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMonitoring">ResetHaVmMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartAdditionalDelay">ResetHaVmRestartAdditionalDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartPriority">ResetHaVmRestartPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartTimeout">ResetHaVmRestartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostClusterExitTimeout">ResetHostClusterExitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostImage">ResetHostImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostManaged">ResetHostManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostSystemIds">ResetHostSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaAutomationLevel">ResetProactiveHaAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaEnabled">ResetProactiveHaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaModerateRemediation">ResetProactiveHaModerateRemediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaProviderIds">ResetProactiveHaProviderIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaSevereRemediation">ResetProactiveHaSevereRemediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanCompressionEnabled">ResetVsanCompressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDedupEnabled">ResetVsanDedupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDiskGroup">ResetVsanDiskGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitEncryptionEnabled">ResetVsanDitEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitRekeyInterval">ResetVsanDitRekeyInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEnabled">ResetVsanEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEsaEnabled">ResetVsanEsaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanFaultDomains">ResetVsanFaultDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanNetworkDiagnosticModeEnabled">ResetVsanNetworkDiagnosticModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanPerformanceEnabled">ResetVsanPerformanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanRemoteDatastoreIds">ResetVsanRemoteDatastoreIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanStretchedCluster">ResetVsanStretchedCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanUnmapEnabled">ResetVsanUnmapEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanVerboseModeEnabled">ResetVsanVerboseModeEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHostImage` <a name="PutHostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putHostImage"></a>

```go
func PutHostImage(value ComputeClusterHostImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putHostImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

---

##### `PutVsanDiskGroup` <a name="PutVsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanDiskGroup"></a>

```go
func PutVsanDiskGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanDiskGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVsanFaultDomains` <a name="PutVsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanFaultDomains"></a>

```go
func PutVsanFaultDomains(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanFaultDomains.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVsanStretchedCluster` <a name="PutVsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster"></a>

```go
func PutVsanStretchedCluster(value ComputeClusterVsanStretchedCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

---

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetCustomAttributes"></a>

```go
func ResetCustomAttributes()
```

##### `ResetDpmAutomationLevel` <a name="ResetDpmAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmAutomationLevel"></a>

```go
func ResetDpmAutomationLevel()
```

##### `ResetDpmEnabled` <a name="ResetDpmEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmEnabled"></a>

```go
func ResetDpmEnabled()
```

##### `ResetDpmThreshold` <a name="ResetDpmThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmThreshold"></a>

```go
func ResetDpmThreshold()
```

##### `ResetDrsAdvancedOptions` <a name="ResetDrsAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAdvancedOptions"></a>

```go
func ResetDrsAdvancedOptions()
```

##### `ResetDrsAutomationLevel` <a name="ResetDrsAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAutomationLevel"></a>

```go
func ResetDrsAutomationLevel()
```

##### `ResetDrsEnabled` <a name="ResetDrsEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnabled"></a>

```go
func ResetDrsEnabled()
```

##### `ResetDrsEnablePredictiveDrs` <a name="ResetDrsEnablePredictiveDrs" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnablePredictiveDrs"></a>

```go
func ResetDrsEnablePredictiveDrs()
```

##### `ResetDrsEnableVmOverrides` <a name="ResetDrsEnableVmOverrides" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnableVmOverrides"></a>

```go
func ResetDrsEnableVmOverrides()
```

##### `ResetDrsMigrationThreshold` <a name="ResetDrsMigrationThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsMigrationThreshold"></a>

```go
func ResetDrsMigrationThreshold()
```

##### `ResetDrsScaleDescendantsShares` <a name="ResetDrsScaleDescendantsShares" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsScaleDescendantsShares"></a>

```go
func ResetDrsScaleDescendantsShares()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetForceEvacuateOnDestroy` <a name="ResetForceEvacuateOnDestroy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetForceEvacuateOnDestroy"></a>

```go
func ResetForceEvacuateOnDestroy()
```

##### `ResetHaAdmissionControlFailoverHostSystemIds` <a name="ResetHaAdmissionControlFailoverHostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlFailoverHostSystemIds"></a>

```go
func ResetHaAdmissionControlFailoverHostSystemIds()
```

##### `ResetHaAdmissionControlHostFailureTolerance` <a name="ResetHaAdmissionControlHostFailureTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlHostFailureTolerance"></a>

```go
func ResetHaAdmissionControlHostFailureTolerance()
```

##### `ResetHaAdmissionControlPerformanceTolerance` <a name="ResetHaAdmissionControlPerformanceTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPerformanceTolerance"></a>

```go
func ResetHaAdmissionControlPerformanceTolerance()
```

##### `ResetHaAdmissionControlPolicy` <a name="ResetHaAdmissionControlPolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPolicy"></a>

```go
func ResetHaAdmissionControlPolicy()
```

##### `ResetHaAdmissionControlResourcePercentageAutoCompute` <a name="ResetHaAdmissionControlResourcePercentageAutoCompute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageAutoCompute"></a>

```go
func ResetHaAdmissionControlResourcePercentageAutoCompute()
```

##### `ResetHaAdmissionControlResourcePercentageCpu` <a name="ResetHaAdmissionControlResourcePercentageCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageCpu"></a>

```go
func ResetHaAdmissionControlResourcePercentageCpu()
```

##### `ResetHaAdmissionControlResourcePercentageMemory` <a name="ResetHaAdmissionControlResourcePercentageMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageMemory"></a>

```go
func ResetHaAdmissionControlResourcePercentageMemory()
```

##### `ResetHaAdmissionControlSlotPolicyExplicitCpu` <a name="ResetHaAdmissionControlSlotPolicyExplicitCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitCpu"></a>

```go
func ResetHaAdmissionControlSlotPolicyExplicitCpu()
```

##### `ResetHaAdmissionControlSlotPolicyExplicitMemory` <a name="ResetHaAdmissionControlSlotPolicyExplicitMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitMemory"></a>

```go
func ResetHaAdmissionControlSlotPolicyExplicitMemory()
```

##### `ResetHaAdmissionControlSlotPolicyUseExplicitSize` <a name="ResetHaAdmissionControlSlotPolicyUseExplicitSize" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyUseExplicitSize"></a>

```go
func ResetHaAdmissionControlSlotPolicyUseExplicitSize()
```

##### `ResetHaAdvancedOptions` <a name="ResetHaAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdvancedOptions"></a>

```go
func ResetHaAdvancedOptions()
```

##### `ResetHaDatastoreApdRecoveryAction` <a name="ResetHaDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdRecoveryAction"></a>

```go
func ResetHaDatastoreApdRecoveryAction()
```

##### `ResetHaDatastoreApdResponse` <a name="ResetHaDatastoreApdResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponse"></a>

```go
func ResetHaDatastoreApdResponse()
```

##### `ResetHaDatastoreApdResponseDelay` <a name="ResetHaDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponseDelay"></a>

```go
func ResetHaDatastoreApdResponseDelay()
```

##### `ResetHaDatastorePdlResponse` <a name="ResetHaDatastorePdlResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastorePdlResponse"></a>

```go
func ResetHaDatastorePdlResponse()
```

##### `ResetHaEnabled` <a name="ResetHaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaEnabled"></a>

```go
func ResetHaEnabled()
```

##### `ResetHaHeartbeatDatastoreIds` <a name="ResetHaHeartbeatDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastoreIds"></a>

```go
func ResetHaHeartbeatDatastoreIds()
```

##### `ResetHaHeartbeatDatastorePolicy` <a name="ResetHaHeartbeatDatastorePolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastorePolicy"></a>

```go
func ResetHaHeartbeatDatastorePolicy()
```

##### `ResetHaHostIsolationResponse` <a name="ResetHaHostIsolationResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostIsolationResponse"></a>

```go
func ResetHaHostIsolationResponse()
```

##### `ResetHaHostMonitoring` <a name="ResetHaHostMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostMonitoring"></a>

```go
func ResetHaHostMonitoring()
```

##### `ResetHaVmComponentProtection` <a name="ResetHaVmComponentProtection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmComponentProtection"></a>

```go
func ResetHaVmComponentProtection()
```

##### `ResetHaVmDependencyRestartCondition` <a name="ResetHaVmDependencyRestartCondition" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmDependencyRestartCondition"></a>

```go
func ResetHaVmDependencyRestartCondition()
```

##### `ResetHaVmFailureInterval` <a name="ResetHaVmFailureInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmFailureInterval"></a>

```go
func ResetHaVmFailureInterval()
```

##### `ResetHaVmMaximumFailureWindow` <a name="ResetHaVmMaximumFailureWindow" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumFailureWindow"></a>

```go
func ResetHaVmMaximumFailureWindow()
```

##### `ResetHaVmMaximumResets` <a name="ResetHaVmMaximumResets" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumResets"></a>

```go
func ResetHaVmMaximumResets()
```

##### `ResetHaVmMinimumUptime` <a name="ResetHaVmMinimumUptime" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMinimumUptime"></a>

```go
func ResetHaVmMinimumUptime()
```

##### `ResetHaVmMonitoring` <a name="ResetHaVmMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMonitoring"></a>

```go
func ResetHaVmMonitoring()
```

##### `ResetHaVmRestartAdditionalDelay` <a name="ResetHaVmRestartAdditionalDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartAdditionalDelay"></a>

```go
func ResetHaVmRestartAdditionalDelay()
```

##### `ResetHaVmRestartPriority` <a name="ResetHaVmRestartPriority" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartPriority"></a>

```go
func ResetHaVmRestartPriority()
```

##### `ResetHaVmRestartTimeout` <a name="ResetHaVmRestartTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartTimeout"></a>

```go
func ResetHaVmRestartTimeout()
```

##### `ResetHostClusterExitTimeout` <a name="ResetHostClusterExitTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostClusterExitTimeout"></a>

```go
func ResetHostClusterExitTimeout()
```

##### `ResetHostImage` <a name="ResetHostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostImage"></a>

```go
func ResetHostImage()
```

##### `ResetHostManaged` <a name="ResetHostManaged" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostManaged"></a>

```go
func ResetHostManaged()
```

##### `ResetHostSystemIds` <a name="ResetHostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostSystemIds"></a>

```go
func ResetHostSystemIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetProactiveHaAutomationLevel` <a name="ResetProactiveHaAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaAutomationLevel"></a>

```go
func ResetProactiveHaAutomationLevel()
```

##### `ResetProactiveHaEnabled` <a name="ResetProactiveHaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaEnabled"></a>

```go
func ResetProactiveHaEnabled()
```

##### `ResetProactiveHaModerateRemediation` <a name="ResetProactiveHaModerateRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaModerateRemediation"></a>

```go
func ResetProactiveHaModerateRemediation()
```

##### `ResetProactiveHaProviderIds` <a name="ResetProactiveHaProviderIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaProviderIds"></a>

```go
func ResetProactiveHaProviderIds()
```

##### `ResetProactiveHaSevereRemediation` <a name="ResetProactiveHaSevereRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaSevereRemediation"></a>

```go
func ResetProactiveHaSevereRemediation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVsanCompressionEnabled` <a name="ResetVsanCompressionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanCompressionEnabled"></a>

```go
func ResetVsanCompressionEnabled()
```

##### `ResetVsanDedupEnabled` <a name="ResetVsanDedupEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDedupEnabled"></a>

```go
func ResetVsanDedupEnabled()
```

##### `ResetVsanDiskGroup` <a name="ResetVsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDiskGroup"></a>

```go
func ResetVsanDiskGroup()
```

##### `ResetVsanDitEncryptionEnabled` <a name="ResetVsanDitEncryptionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitEncryptionEnabled"></a>

```go
func ResetVsanDitEncryptionEnabled()
```

##### `ResetVsanDitRekeyInterval` <a name="ResetVsanDitRekeyInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitRekeyInterval"></a>

```go
func ResetVsanDitRekeyInterval()
```

##### `ResetVsanEnabled` <a name="ResetVsanEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEnabled"></a>

```go
func ResetVsanEnabled()
```

##### `ResetVsanEsaEnabled` <a name="ResetVsanEsaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEsaEnabled"></a>

```go
func ResetVsanEsaEnabled()
```

##### `ResetVsanFaultDomains` <a name="ResetVsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanFaultDomains"></a>

```go
func ResetVsanFaultDomains()
```

##### `ResetVsanNetworkDiagnosticModeEnabled` <a name="ResetVsanNetworkDiagnosticModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanNetworkDiagnosticModeEnabled"></a>

```go
func ResetVsanNetworkDiagnosticModeEnabled()
```

##### `ResetVsanPerformanceEnabled` <a name="ResetVsanPerformanceEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanPerformanceEnabled"></a>

```go
func ResetVsanPerformanceEnabled()
```

##### `ResetVsanRemoteDatastoreIds` <a name="ResetVsanRemoteDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanRemoteDatastoreIds"></a>

```go
func ResetVsanRemoteDatastoreIds()
```

##### `ResetVsanStretchedCluster` <a name="ResetVsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanStretchedCluster"></a>

```go
func ResetVsanStretchedCluster()
```

##### `ResetVsanUnmapEnabled` <a name="ResetVsanUnmapEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanUnmapEnabled"></a>

```go
func ResetVsanUnmapEnabled()
```

##### `ResetVsanVerboseModeEnabled` <a name="ResetVsanVerboseModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanVerboseModeEnabled"></a>

```go
func ResetVsanVerboseModeEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.ComputeCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.ComputeCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.ComputeCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.ComputeCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImage">HostImage</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference">ComputeClusterHostImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.resourcePoolId">ResourcePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroup">VsanDiskGroup</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList">ComputeClusterVsanDiskGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomains">VsanFaultDomains</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList">ComputeClusterVsanFaultDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedCluster">VsanStretchedCluster</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference">ComputeClusterVsanStretchedClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributesInput">CustomAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevelInput">DpmAutomationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabledInput">DpmEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThresholdInput">DpmThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptionsInput">DrsAdvancedOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevelInput">DrsAutomationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabledInput">DrsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrsInput">DrsEnablePredictiveDrsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverridesInput">DrsEnableVmOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThresholdInput">DrsMigrationThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsSharesInput">DrsScaleDescendantsSharesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroyInput">ForceEvacuateOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIdsInput">HaAdmissionControlFailoverHostSystemIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureToleranceInput">HaAdmissionControlHostFailureToleranceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceToleranceInput">HaAdmissionControlPerformanceToleranceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicyInput">HaAdmissionControlPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoComputeInput">HaAdmissionControlResourcePercentageAutoComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpuInput">HaAdmissionControlResourcePercentageCpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemoryInput">HaAdmissionControlResourcePercentageMemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpuInput">HaAdmissionControlSlotPolicyExplicitCpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemoryInput">HaAdmissionControlSlotPolicyExplicitMemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSizeInput">HaAdmissionControlSlotPolicyUseExplicitSizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptionsInput">HaAdvancedOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryActionInput">HaDatastoreApdRecoveryActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelayInput">HaDatastoreApdResponseDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseInput">HaDatastoreApdResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponseInput">HaDatastorePdlResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabledInput">HaEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIdsInput">HaHeartbeatDatastoreIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicyInput">HaHeartbeatDatastorePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponseInput">HaHostIsolationResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoringInput">HaHostMonitoringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtectionInput">HaVmComponentProtectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartConditionInput">HaVmDependencyRestartConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureIntervalInput">HaVmFailureIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindowInput">HaVmMaximumFailureWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResetsInput">HaVmMaximumResetsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptimeInput">HaVmMinimumUptimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoringInput">HaVmMonitoringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelayInput">HaVmRestartAdditionalDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriorityInput">HaVmRestartPriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeoutInput">HaVmRestartTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeoutInput">HostClusterExitTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImageInput">HostImageInput</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManagedInput">HostManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIdsInput">HostSystemIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevelInput">ProactiveHaAutomationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabledInput">ProactiveHaEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediationInput">ProactiveHaModerateRemediationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIdsInput">ProactiveHaProviderIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediationInput">ProactiveHaSevereRemediationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabledInput">VsanCompressionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabledInput">VsanDedupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroupInput">VsanDiskGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabledInput">VsanDitEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyIntervalInput">VsanDitRekeyIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabledInput">VsanEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabledInput">VsanEsaEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomainsInput">VsanFaultDomainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabledInput">VsanNetworkDiagnosticModeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabledInput">VsanPerformanceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIdsInput">VsanRemoteDatastoreIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedClusterInput">VsanStretchedClusterInput</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabledInput">VsanUnmapEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabledInput">VsanVerboseModeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevel">DpmAutomationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabled">DpmEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThreshold">DpmThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptions">DrsAdvancedOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevel">DrsAutomationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabled">DrsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrs">DrsEnablePredictiveDrs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverrides">DrsEnableVmOverrides</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThreshold">DrsMigrationThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsShares">DrsScaleDescendantsShares</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroy">ForceEvacuateOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIds">HaAdmissionControlFailoverHostSystemIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureTolerance">HaAdmissionControlHostFailureTolerance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceTolerance">HaAdmissionControlPerformanceTolerance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicy">HaAdmissionControlPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoCompute">HaAdmissionControlResourcePercentageAutoCompute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpu">HaAdmissionControlResourcePercentageCpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemory">HaAdmissionControlResourcePercentageMemory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpu">HaAdmissionControlSlotPolicyExplicitCpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemory">HaAdmissionControlSlotPolicyExplicitMemory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSize">HaAdmissionControlSlotPolicyUseExplicitSize</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptions">HaAdvancedOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryAction">HaDatastoreApdRecoveryAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponse">HaDatastoreApdResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelay">HaDatastoreApdResponseDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponse">HaDatastorePdlResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabled">HaEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIds">HaHeartbeatDatastoreIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicy">HaHeartbeatDatastorePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponse">HaHostIsolationResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoring">HaHostMonitoring</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtection">HaVmComponentProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartCondition">HaVmDependencyRestartCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureInterval">HaVmFailureInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindow">HaVmMaximumFailureWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResets">HaVmMaximumResets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptime">HaVmMinimumUptime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoring">HaVmMonitoring</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelay">HaVmRestartAdditionalDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriority">HaVmRestartPriority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeout">HaVmRestartTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeout">HostClusterExitTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManaged">HostManaged</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIds">HostSystemIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevel">ProactiveHaAutomationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabled">ProactiveHaEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediation">ProactiveHaModerateRemediation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIds">ProactiveHaProviderIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediation">ProactiveHaSevereRemediation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabled">VsanCompressionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabled">VsanDedupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabled">VsanDitEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyInterval">VsanDitRekeyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabled">VsanEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabled">VsanEsaEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabled">VsanNetworkDiagnosticModeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabled">VsanPerformanceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIds">VsanRemoteDatastoreIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabled">VsanUnmapEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabled">VsanVerboseModeEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostImage`<sup>Required</sup> <a name="HostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImage"></a>

```go
func HostImage() ComputeClusterHostImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference">ComputeClusterHostImageOutputReference</a>

---

##### `ResourcePoolId`<sup>Required</sup> <a name="ResourcePoolId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.resourcePoolId"></a>

```go
func ResourcePoolId() *string
```

- *Type:* *string

---

##### `VsanDiskGroup`<sup>Required</sup> <a name="VsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroup"></a>

```go
func VsanDiskGroup() ComputeClusterVsanDiskGroupList
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList">ComputeClusterVsanDiskGroupList</a>

---

##### `VsanFaultDomains`<sup>Required</sup> <a name="VsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomains"></a>

```go
func VsanFaultDomains() ComputeClusterVsanFaultDomainsList
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList">ComputeClusterVsanFaultDomainsList</a>

---

##### `VsanStretchedCluster`<sup>Required</sup> <a name="VsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedCluster"></a>

```go
func VsanStretchedCluster() ComputeClusterVsanStretchedClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference">ComputeClusterVsanStretchedClusterOutputReference</a>

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributesInput"></a>

```go
func CustomAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `DpmAutomationLevelInput`<sup>Optional</sup> <a name="DpmAutomationLevelInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevelInput"></a>

```go
func DpmAutomationLevelInput() *string
```

- *Type:* *string

---

##### `DpmEnabledInput`<sup>Optional</sup> <a name="DpmEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabledInput"></a>

```go
func DpmEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DpmThresholdInput`<sup>Optional</sup> <a name="DpmThresholdInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThresholdInput"></a>

```go
func DpmThresholdInput() *f64
```

- *Type:* *f64

---

##### `DrsAdvancedOptionsInput`<sup>Optional</sup> <a name="DrsAdvancedOptionsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptionsInput"></a>

```go
func DrsAdvancedOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DrsAutomationLevelInput`<sup>Optional</sup> <a name="DrsAutomationLevelInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevelInput"></a>

```go
func DrsAutomationLevelInput() *string
```

- *Type:* *string

---

##### `DrsEnabledInput`<sup>Optional</sup> <a name="DrsEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabledInput"></a>

```go
func DrsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DrsEnablePredictiveDrsInput`<sup>Optional</sup> <a name="DrsEnablePredictiveDrsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrsInput"></a>

```go
func DrsEnablePredictiveDrsInput() interface{}
```

- *Type:* interface{}

---

##### `DrsEnableVmOverridesInput`<sup>Optional</sup> <a name="DrsEnableVmOverridesInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverridesInput"></a>

```go
func DrsEnableVmOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `DrsMigrationThresholdInput`<sup>Optional</sup> <a name="DrsMigrationThresholdInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThresholdInput"></a>

```go
func DrsMigrationThresholdInput() *f64
```

- *Type:* *f64

---

##### `DrsScaleDescendantsSharesInput`<sup>Optional</sup> <a name="DrsScaleDescendantsSharesInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsSharesInput"></a>

```go
func DrsScaleDescendantsSharesInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `ForceEvacuateOnDestroyInput`<sup>Optional</sup> <a name="ForceEvacuateOnDestroyInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroyInput"></a>

```go
func ForceEvacuateOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `HaAdmissionControlFailoverHostSystemIdsInput`<sup>Optional</sup> <a name="HaAdmissionControlFailoverHostSystemIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIdsInput"></a>

```go
func HaAdmissionControlFailoverHostSystemIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HaAdmissionControlHostFailureToleranceInput`<sup>Optional</sup> <a name="HaAdmissionControlHostFailureToleranceInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureToleranceInput"></a>

```go
func HaAdmissionControlHostFailureToleranceInput() *f64
```

- *Type:* *f64

---

##### `HaAdmissionControlPerformanceToleranceInput`<sup>Optional</sup> <a name="HaAdmissionControlPerformanceToleranceInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceToleranceInput"></a>

```go
func HaAdmissionControlPerformanceToleranceInput() *f64
```

- *Type:* *f64

---

##### `HaAdmissionControlPolicyInput`<sup>Optional</sup> <a name="HaAdmissionControlPolicyInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicyInput"></a>

```go
func HaAdmissionControlPolicyInput() *string
```

- *Type:* *string

---

##### `HaAdmissionControlResourcePercentageAutoComputeInput`<sup>Optional</sup> <a name="HaAdmissionControlResourcePercentageAutoComputeInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoComputeInput"></a>

```go
func HaAdmissionControlResourcePercentageAutoComputeInput() interface{}
```

- *Type:* interface{}

---

##### `HaAdmissionControlResourcePercentageCpuInput`<sup>Optional</sup> <a name="HaAdmissionControlResourcePercentageCpuInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpuInput"></a>

```go
func HaAdmissionControlResourcePercentageCpuInput() *f64
```

- *Type:* *f64

---

##### `HaAdmissionControlResourcePercentageMemoryInput`<sup>Optional</sup> <a name="HaAdmissionControlResourcePercentageMemoryInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemoryInput"></a>

```go
func HaAdmissionControlResourcePercentageMemoryInput() *f64
```

- *Type:* *f64

---

##### `HaAdmissionControlSlotPolicyExplicitCpuInput`<sup>Optional</sup> <a name="HaAdmissionControlSlotPolicyExplicitCpuInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpuInput"></a>

```go
func HaAdmissionControlSlotPolicyExplicitCpuInput() *f64
```

- *Type:* *f64

---

##### `HaAdmissionControlSlotPolicyExplicitMemoryInput`<sup>Optional</sup> <a name="HaAdmissionControlSlotPolicyExplicitMemoryInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemoryInput"></a>

```go
func HaAdmissionControlSlotPolicyExplicitMemoryInput() *f64
```

- *Type:* *f64

---

##### `HaAdmissionControlSlotPolicyUseExplicitSizeInput`<sup>Optional</sup> <a name="HaAdmissionControlSlotPolicyUseExplicitSizeInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSizeInput"></a>

```go
func HaAdmissionControlSlotPolicyUseExplicitSizeInput() interface{}
```

- *Type:* interface{}

---

##### `HaAdvancedOptionsInput`<sup>Optional</sup> <a name="HaAdvancedOptionsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptionsInput"></a>

```go
func HaAdvancedOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HaDatastoreApdRecoveryActionInput`<sup>Optional</sup> <a name="HaDatastoreApdRecoveryActionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryActionInput"></a>

```go
func HaDatastoreApdRecoveryActionInput() *string
```

- *Type:* *string

---

##### `HaDatastoreApdResponseDelayInput`<sup>Optional</sup> <a name="HaDatastoreApdResponseDelayInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelayInput"></a>

```go
func HaDatastoreApdResponseDelayInput() *f64
```

- *Type:* *f64

---

##### `HaDatastoreApdResponseInput`<sup>Optional</sup> <a name="HaDatastoreApdResponseInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseInput"></a>

```go
func HaDatastoreApdResponseInput() *string
```

- *Type:* *string

---

##### `HaDatastorePdlResponseInput`<sup>Optional</sup> <a name="HaDatastorePdlResponseInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponseInput"></a>

```go
func HaDatastorePdlResponseInput() *string
```

- *Type:* *string

---

##### `HaEnabledInput`<sup>Optional</sup> <a name="HaEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabledInput"></a>

```go
func HaEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HaHeartbeatDatastoreIdsInput`<sup>Optional</sup> <a name="HaHeartbeatDatastoreIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIdsInput"></a>

```go
func HaHeartbeatDatastoreIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HaHeartbeatDatastorePolicyInput`<sup>Optional</sup> <a name="HaHeartbeatDatastorePolicyInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicyInput"></a>

```go
func HaHeartbeatDatastorePolicyInput() *string
```

- *Type:* *string

---

##### `HaHostIsolationResponseInput`<sup>Optional</sup> <a name="HaHostIsolationResponseInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponseInput"></a>

```go
func HaHostIsolationResponseInput() *string
```

- *Type:* *string

---

##### `HaHostMonitoringInput`<sup>Optional</sup> <a name="HaHostMonitoringInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoringInput"></a>

```go
func HaHostMonitoringInput() *string
```

- *Type:* *string

---

##### `HaVmComponentProtectionInput`<sup>Optional</sup> <a name="HaVmComponentProtectionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtectionInput"></a>

```go
func HaVmComponentProtectionInput() *string
```

- *Type:* *string

---

##### `HaVmDependencyRestartConditionInput`<sup>Optional</sup> <a name="HaVmDependencyRestartConditionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartConditionInput"></a>

```go
func HaVmDependencyRestartConditionInput() *string
```

- *Type:* *string

---

##### `HaVmFailureIntervalInput`<sup>Optional</sup> <a name="HaVmFailureIntervalInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureIntervalInput"></a>

```go
func HaVmFailureIntervalInput() *f64
```

- *Type:* *f64

---

##### `HaVmMaximumFailureWindowInput`<sup>Optional</sup> <a name="HaVmMaximumFailureWindowInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindowInput"></a>

```go
func HaVmMaximumFailureWindowInput() *f64
```

- *Type:* *f64

---

##### `HaVmMaximumResetsInput`<sup>Optional</sup> <a name="HaVmMaximumResetsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResetsInput"></a>

```go
func HaVmMaximumResetsInput() *f64
```

- *Type:* *f64

---

##### `HaVmMinimumUptimeInput`<sup>Optional</sup> <a name="HaVmMinimumUptimeInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptimeInput"></a>

```go
func HaVmMinimumUptimeInput() *f64
```

- *Type:* *f64

---

##### `HaVmMonitoringInput`<sup>Optional</sup> <a name="HaVmMonitoringInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoringInput"></a>

```go
func HaVmMonitoringInput() *string
```

- *Type:* *string

---

##### `HaVmRestartAdditionalDelayInput`<sup>Optional</sup> <a name="HaVmRestartAdditionalDelayInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelayInput"></a>

```go
func HaVmRestartAdditionalDelayInput() *f64
```

- *Type:* *f64

---

##### `HaVmRestartPriorityInput`<sup>Optional</sup> <a name="HaVmRestartPriorityInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriorityInput"></a>

```go
func HaVmRestartPriorityInput() *string
```

- *Type:* *string

---

##### `HaVmRestartTimeoutInput`<sup>Optional</sup> <a name="HaVmRestartTimeoutInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeoutInput"></a>

```go
func HaVmRestartTimeoutInput() *f64
```

- *Type:* *f64

---

##### `HostClusterExitTimeoutInput`<sup>Optional</sup> <a name="HostClusterExitTimeoutInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeoutInput"></a>

```go
func HostClusterExitTimeoutInput() *f64
```

- *Type:* *f64

---

##### `HostImageInput`<sup>Optional</sup> <a name="HostImageInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImageInput"></a>

```go
func HostImageInput() ComputeClusterHostImage
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

---

##### `HostManagedInput`<sup>Optional</sup> <a name="HostManagedInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManagedInput"></a>

```go
func HostManagedInput() interface{}
```

- *Type:* interface{}

---

##### `HostSystemIdsInput`<sup>Optional</sup> <a name="HostSystemIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIdsInput"></a>

```go
func HostSystemIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProactiveHaAutomationLevelInput`<sup>Optional</sup> <a name="ProactiveHaAutomationLevelInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevelInput"></a>

```go
func ProactiveHaAutomationLevelInput() *string
```

- *Type:* *string

---

##### `ProactiveHaEnabledInput`<sup>Optional</sup> <a name="ProactiveHaEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabledInput"></a>

```go
func ProactiveHaEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProactiveHaModerateRemediationInput`<sup>Optional</sup> <a name="ProactiveHaModerateRemediationInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediationInput"></a>

```go
func ProactiveHaModerateRemediationInput() *string
```

- *Type:* *string

---

##### `ProactiveHaProviderIdsInput`<sup>Optional</sup> <a name="ProactiveHaProviderIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIdsInput"></a>

```go
func ProactiveHaProviderIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProactiveHaSevereRemediationInput`<sup>Optional</sup> <a name="ProactiveHaSevereRemediationInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediationInput"></a>

```go
func ProactiveHaSevereRemediationInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VsanCompressionEnabledInput`<sup>Optional</sup> <a name="VsanCompressionEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabledInput"></a>

```go
func VsanCompressionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VsanDedupEnabledInput`<sup>Optional</sup> <a name="VsanDedupEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabledInput"></a>

```go
func VsanDedupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VsanDiskGroupInput`<sup>Optional</sup> <a name="VsanDiskGroupInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroupInput"></a>

```go
func VsanDiskGroupInput() interface{}
```

- *Type:* interface{}

---

##### `VsanDitEncryptionEnabledInput`<sup>Optional</sup> <a name="VsanDitEncryptionEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabledInput"></a>

```go
func VsanDitEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VsanDitRekeyIntervalInput`<sup>Optional</sup> <a name="VsanDitRekeyIntervalInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyIntervalInput"></a>

```go
func VsanDitRekeyIntervalInput() *f64
```

- *Type:* *f64

---

##### `VsanEnabledInput`<sup>Optional</sup> <a name="VsanEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabledInput"></a>

```go
func VsanEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VsanEsaEnabledInput`<sup>Optional</sup> <a name="VsanEsaEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabledInput"></a>

```go
func VsanEsaEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VsanFaultDomainsInput`<sup>Optional</sup> <a name="VsanFaultDomainsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomainsInput"></a>

```go
func VsanFaultDomainsInput() interface{}
```

- *Type:* interface{}

---

##### `VsanNetworkDiagnosticModeEnabledInput`<sup>Optional</sup> <a name="VsanNetworkDiagnosticModeEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabledInput"></a>

```go
func VsanNetworkDiagnosticModeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VsanPerformanceEnabledInput`<sup>Optional</sup> <a name="VsanPerformanceEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabledInput"></a>

```go
func VsanPerformanceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VsanRemoteDatastoreIdsInput`<sup>Optional</sup> <a name="VsanRemoteDatastoreIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIdsInput"></a>

```go
func VsanRemoteDatastoreIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VsanStretchedClusterInput`<sup>Optional</sup> <a name="VsanStretchedClusterInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedClusterInput"></a>

```go
func VsanStretchedClusterInput() ComputeClusterVsanStretchedCluster
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

---

##### `VsanUnmapEnabledInput`<sup>Optional</sup> <a name="VsanUnmapEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabledInput"></a>

```go
func VsanUnmapEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VsanVerboseModeEnabledInput`<sup>Optional</sup> <a name="VsanVerboseModeEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabledInput"></a>

```go
func VsanVerboseModeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributes"></a>

```go
func CustomAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `DpmAutomationLevel`<sup>Required</sup> <a name="DpmAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevel"></a>

```go
func DpmAutomationLevel() *string
```

- *Type:* *string

---

##### `DpmEnabled`<sup>Required</sup> <a name="DpmEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabled"></a>

```go
func DpmEnabled() interface{}
```

- *Type:* interface{}

---

##### `DpmThreshold`<sup>Required</sup> <a name="DpmThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThreshold"></a>

```go
func DpmThreshold() *f64
```

- *Type:* *f64

---

##### `DrsAdvancedOptions`<sup>Required</sup> <a name="DrsAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptions"></a>

```go
func DrsAdvancedOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DrsAutomationLevel`<sup>Required</sup> <a name="DrsAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevel"></a>

```go
func DrsAutomationLevel() *string
```

- *Type:* *string

---

##### `DrsEnabled`<sup>Required</sup> <a name="DrsEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabled"></a>

```go
func DrsEnabled() interface{}
```

- *Type:* interface{}

---

##### `DrsEnablePredictiveDrs`<sup>Required</sup> <a name="DrsEnablePredictiveDrs" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrs"></a>

```go
func DrsEnablePredictiveDrs() interface{}
```

- *Type:* interface{}

---

##### `DrsEnableVmOverrides`<sup>Required</sup> <a name="DrsEnableVmOverrides" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverrides"></a>

```go
func DrsEnableVmOverrides() interface{}
```

- *Type:* interface{}

---

##### `DrsMigrationThreshold`<sup>Required</sup> <a name="DrsMigrationThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThreshold"></a>

```go
func DrsMigrationThreshold() *f64
```

- *Type:* *f64

---

##### `DrsScaleDescendantsShares`<sup>Required</sup> <a name="DrsScaleDescendantsShares" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsShares"></a>

```go
func DrsScaleDescendantsShares() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `ForceEvacuateOnDestroy`<sup>Required</sup> <a name="ForceEvacuateOnDestroy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroy"></a>

```go
func ForceEvacuateOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `HaAdmissionControlFailoverHostSystemIds`<sup>Required</sup> <a name="HaAdmissionControlFailoverHostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIds"></a>

```go
func HaAdmissionControlFailoverHostSystemIds() *[]*string
```

- *Type:* *[]*string

---

##### `HaAdmissionControlHostFailureTolerance`<sup>Required</sup> <a name="HaAdmissionControlHostFailureTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureTolerance"></a>

```go
func HaAdmissionControlHostFailureTolerance() *f64
```

- *Type:* *f64

---

##### `HaAdmissionControlPerformanceTolerance`<sup>Required</sup> <a name="HaAdmissionControlPerformanceTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceTolerance"></a>

```go
func HaAdmissionControlPerformanceTolerance() *f64
```

- *Type:* *f64

---

##### `HaAdmissionControlPolicy`<sup>Required</sup> <a name="HaAdmissionControlPolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicy"></a>

```go
func HaAdmissionControlPolicy() *string
```

- *Type:* *string

---

##### `HaAdmissionControlResourcePercentageAutoCompute`<sup>Required</sup> <a name="HaAdmissionControlResourcePercentageAutoCompute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoCompute"></a>

```go
func HaAdmissionControlResourcePercentageAutoCompute() interface{}
```

- *Type:* interface{}

---

##### `HaAdmissionControlResourcePercentageCpu`<sup>Required</sup> <a name="HaAdmissionControlResourcePercentageCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpu"></a>

```go
func HaAdmissionControlResourcePercentageCpu() *f64
```

- *Type:* *f64

---

##### `HaAdmissionControlResourcePercentageMemory`<sup>Required</sup> <a name="HaAdmissionControlResourcePercentageMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemory"></a>

```go
func HaAdmissionControlResourcePercentageMemory() *f64
```

- *Type:* *f64

---

##### `HaAdmissionControlSlotPolicyExplicitCpu`<sup>Required</sup> <a name="HaAdmissionControlSlotPolicyExplicitCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpu"></a>

```go
func HaAdmissionControlSlotPolicyExplicitCpu() *f64
```

- *Type:* *f64

---

##### `HaAdmissionControlSlotPolicyExplicitMemory`<sup>Required</sup> <a name="HaAdmissionControlSlotPolicyExplicitMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemory"></a>

```go
func HaAdmissionControlSlotPolicyExplicitMemory() *f64
```

- *Type:* *f64

---

##### `HaAdmissionControlSlotPolicyUseExplicitSize`<sup>Required</sup> <a name="HaAdmissionControlSlotPolicyUseExplicitSize" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSize"></a>

```go
func HaAdmissionControlSlotPolicyUseExplicitSize() interface{}
```

- *Type:* interface{}

---

##### `HaAdvancedOptions`<sup>Required</sup> <a name="HaAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptions"></a>

```go
func HaAdvancedOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HaDatastoreApdRecoveryAction`<sup>Required</sup> <a name="HaDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryAction"></a>

```go
func HaDatastoreApdRecoveryAction() *string
```

- *Type:* *string

---

##### `HaDatastoreApdResponse`<sup>Required</sup> <a name="HaDatastoreApdResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponse"></a>

```go
func HaDatastoreApdResponse() *string
```

- *Type:* *string

---

##### `HaDatastoreApdResponseDelay`<sup>Required</sup> <a name="HaDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelay"></a>

```go
func HaDatastoreApdResponseDelay() *f64
```

- *Type:* *f64

---

##### `HaDatastorePdlResponse`<sup>Required</sup> <a name="HaDatastorePdlResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponse"></a>

```go
func HaDatastorePdlResponse() *string
```

- *Type:* *string

---

##### `HaEnabled`<sup>Required</sup> <a name="HaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabled"></a>

```go
func HaEnabled() interface{}
```

- *Type:* interface{}

---

##### `HaHeartbeatDatastoreIds`<sup>Required</sup> <a name="HaHeartbeatDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIds"></a>

```go
func HaHeartbeatDatastoreIds() *[]*string
```

- *Type:* *[]*string

---

##### `HaHeartbeatDatastorePolicy`<sup>Required</sup> <a name="HaHeartbeatDatastorePolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicy"></a>

```go
func HaHeartbeatDatastorePolicy() *string
```

- *Type:* *string

---

##### `HaHostIsolationResponse`<sup>Required</sup> <a name="HaHostIsolationResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponse"></a>

```go
func HaHostIsolationResponse() *string
```

- *Type:* *string

---

##### `HaHostMonitoring`<sup>Required</sup> <a name="HaHostMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoring"></a>

```go
func HaHostMonitoring() *string
```

- *Type:* *string

---

##### `HaVmComponentProtection`<sup>Required</sup> <a name="HaVmComponentProtection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtection"></a>

```go
func HaVmComponentProtection() *string
```

- *Type:* *string

---

##### `HaVmDependencyRestartCondition`<sup>Required</sup> <a name="HaVmDependencyRestartCondition" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartCondition"></a>

```go
func HaVmDependencyRestartCondition() *string
```

- *Type:* *string

---

##### `HaVmFailureInterval`<sup>Required</sup> <a name="HaVmFailureInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureInterval"></a>

```go
func HaVmFailureInterval() *f64
```

- *Type:* *f64

---

##### `HaVmMaximumFailureWindow`<sup>Required</sup> <a name="HaVmMaximumFailureWindow" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindow"></a>

```go
func HaVmMaximumFailureWindow() *f64
```

- *Type:* *f64

---

##### `HaVmMaximumResets`<sup>Required</sup> <a name="HaVmMaximumResets" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResets"></a>

```go
func HaVmMaximumResets() *f64
```

- *Type:* *f64

---

##### `HaVmMinimumUptime`<sup>Required</sup> <a name="HaVmMinimumUptime" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptime"></a>

```go
func HaVmMinimumUptime() *f64
```

- *Type:* *f64

---

##### `HaVmMonitoring`<sup>Required</sup> <a name="HaVmMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoring"></a>

```go
func HaVmMonitoring() *string
```

- *Type:* *string

---

##### `HaVmRestartAdditionalDelay`<sup>Required</sup> <a name="HaVmRestartAdditionalDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelay"></a>

```go
func HaVmRestartAdditionalDelay() *f64
```

- *Type:* *f64

---

##### `HaVmRestartPriority`<sup>Required</sup> <a name="HaVmRestartPriority" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriority"></a>

```go
func HaVmRestartPriority() *string
```

- *Type:* *string

---

##### `HaVmRestartTimeout`<sup>Required</sup> <a name="HaVmRestartTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeout"></a>

```go
func HaVmRestartTimeout() *f64
```

- *Type:* *f64

---

##### `HostClusterExitTimeout`<sup>Required</sup> <a name="HostClusterExitTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeout"></a>

```go
func HostClusterExitTimeout() *f64
```

- *Type:* *f64

---

##### `HostManaged`<sup>Required</sup> <a name="HostManaged" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManaged"></a>

```go
func HostManaged() interface{}
```

- *Type:* interface{}

---

##### `HostSystemIds`<sup>Required</sup> <a name="HostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIds"></a>

```go
func HostSystemIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProactiveHaAutomationLevel`<sup>Required</sup> <a name="ProactiveHaAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevel"></a>

```go
func ProactiveHaAutomationLevel() *string
```

- *Type:* *string

---

##### `ProactiveHaEnabled`<sup>Required</sup> <a name="ProactiveHaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabled"></a>

```go
func ProactiveHaEnabled() interface{}
```

- *Type:* interface{}

---

##### `ProactiveHaModerateRemediation`<sup>Required</sup> <a name="ProactiveHaModerateRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediation"></a>

```go
func ProactiveHaModerateRemediation() *string
```

- *Type:* *string

---

##### `ProactiveHaProviderIds`<sup>Required</sup> <a name="ProactiveHaProviderIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIds"></a>

```go
func ProactiveHaProviderIds() *[]*string
```

- *Type:* *[]*string

---

##### `ProactiveHaSevereRemediation`<sup>Required</sup> <a name="ProactiveHaSevereRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediation"></a>

```go
func ProactiveHaSevereRemediation() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `VsanCompressionEnabled`<sup>Required</sup> <a name="VsanCompressionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabled"></a>

```go
func VsanCompressionEnabled() interface{}
```

- *Type:* interface{}

---

##### `VsanDedupEnabled`<sup>Required</sup> <a name="VsanDedupEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabled"></a>

```go
func VsanDedupEnabled() interface{}
```

- *Type:* interface{}

---

##### `VsanDitEncryptionEnabled`<sup>Required</sup> <a name="VsanDitEncryptionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabled"></a>

```go
func VsanDitEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `VsanDitRekeyInterval`<sup>Required</sup> <a name="VsanDitRekeyInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyInterval"></a>

```go
func VsanDitRekeyInterval() *f64
```

- *Type:* *f64

---

##### `VsanEnabled`<sup>Required</sup> <a name="VsanEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabled"></a>

```go
func VsanEnabled() interface{}
```

- *Type:* interface{}

---

##### `VsanEsaEnabled`<sup>Required</sup> <a name="VsanEsaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabled"></a>

```go
func VsanEsaEnabled() interface{}
```

- *Type:* interface{}

---

##### `VsanNetworkDiagnosticModeEnabled`<sup>Required</sup> <a name="VsanNetworkDiagnosticModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabled"></a>

```go
func VsanNetworkDiagnosticModeEnabled() interface{}
```

- *Type:* interface{}

---

##### `VsanPerformanceEnabled`<sup>Required</sup> <a name="VsanPerformanceEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabled"></a>

```go
func VsanPerformanceEnabled() interface{}
```

- *Type:* interface{}

---

##### `VsanRemoteDatastoreIds`<sup>Required</sup> <a name="VsanRemoteDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIds"></a>

```go
func VsanRemoteDatastoreIds() *[]*string
```

- *Type:* *[]*string

---

##### `VsanUnmapEnabled`<sup>Required</sup> <a name="VsanUnmapEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabled"></a>

```go
func VsanUnmapEnabled() interface{}
```

- *Type:* interface{}

---

##### `VsanVerboseModeEnabled`<sup>Required</sup> <a name="VsanVerboseModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabled"></a>

```go
func VsanVerboseModeEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterConfig <a name="ComputeClusterConfig" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

&computecluster.ComputeClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatacenterId: *string,
	Name: *string,
	CustomAttributes: *map[string]*string,
	DpmAutomationLevel: *string,
	DpmEnabled: interface{},
	DpmThreshold: *f64,
	DrsAdvancedOptions: *map[string]*string,
	DrsAutomationLevel: *string,
	DrsEnabled: interface{},
	DrsEnablePredictiveDrs: interface{},
	DrsEnableVmOverrides: interface{},
	DrsMigrationThreshold: *f64,
	DrsScaleDescendantsShares: *string,
	Folder: *string,
	ForceEvacuateOnDestroy: interface{},
	HaAdmissionControlFailoverHostSystemIds: *[]*string,
	HaAdmissionControlHostFailureTolerance: *f64,
	HaAdmissionControlPerformanceTolerance: *f64,
	HaAdmissionControlPolicy: *string,
	HaAdmissionControlResourcePercentageAutoCompute: interface{},
	HaAdmissionControlResourcePercentageCpu: *f64,
	HaAdmissionControlResourcePercentageMemory: *f64,
	HaAdmissionControlSlotPolicyExplicitCpu: *f64,
	HaAdmissionControlSlotPolicyExplicitMemory: *f64,
	HaAdmissionControlSlotPolicyUseExplicitSize: interface{},
	HaAdvancedOptions: *map[string]*string,
	HaDatastoreApdRecoveryAction: *string,
	HaDatastoreApdResponse: *string,
	HaDatastoreApdResponseDelay: *f64,
	HaDatastorePdlResponse: *string,
	HaEnabled: interface{},
	HaHeartbeatDatastoreIds: *[]*string,
	HaHeartbeatDatastorePolicy: *string,
	HaHostIsolationResponse: *string,
	HaHostMonitoring: *string,
	HaVmComponentProtection: *string,
	HaVmDependencyRestartCondition: *string,
	HaVmFailureInterval: *f64,
	HaVmMaximumFailureWindow: *f64,
	HaVmMaximumResets: *f64,
	HaVmMinimumUptime: *f64,
	HaVmMonitoring: *string,
	HaVmRestartAdditionalDelay: *f64,
	HaVmRestartPriority: *string,
	HaVmRestartTimeout: *f64,
	HostClusterExitTimeout: *f64,
	HostImage: github.com/cdktf/cdktf-provider-vsphere-go/vsphere.computeCluster.ComputeClusterHostImage,
	HostManaged: interface{},
	HostSystemIds: *[]*string,
	Id: *string,
	ProactiveHaAutomationLevel: *string,
	ProactiveHaEnabled: interface{},
	ProactiveHaModerateRemediation: *string,
	ProactiveHaProviderIds: *[]*string,
	ProactiveHaSevereRemediation: *string,
	Tags: *[]*string,
	VsanCompressionEnabled: interface{},
	VsanDedupEnabled: interface{},
	VsanDiskGroup: interface{},
	VsanDitEncryptionEnabled: interface{},
	VsanDitRekeyInterval: *f64,
	VsanEnabled: interface{},
	VsanEsaEnabled: interface{},
	VsanFaultDomains: interface{},
	VsanNetworkDiagnosticModeEnabled: interface{},
	VsanPerformanceEnabled: interface{},
	VsanRemoteDatastoreIds: *[]*string,
	VsanStretchedCluster: github.com/cdktf/cdktf-provider-vsphere-go/vsphere.computeCluster.ComputeClusterVsanStretchedCluster,
	VsanUnmapEnabled: interface{},
	VsanVerboseModeEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | The managed object ID of the datacenter to put the cluster in. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.name">Name</a></code> | <code>*string</code> | Name for the new cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmAutomationLevel">DpmAutomationLevel</a></code> | <code>*string</code> | The automation level for host power operations in this cluster. Can be one of manual or automated. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmEnabled">DpmEnabled</a></code> | <code>interface{}</code> | Enable DPM support for DRS. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmThreshold">DpmThreshold</a></code> | <code>*f64</code> | A value between 1 and 5 indicating the threshold of load within the cluster that influences host power operations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAdvancedOptions">DrsAdvancedOptions</a></code> | <code>*map[string]*string</code> | Advanced configuration options for DRS and DPM. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAutomationLevel">DrsAutomationLevel</a></code> | <code>*string</code> | The default automation level for all virtual machines in this cluster. Can be one of manual, partiallyAutomated, or fullyAutomated. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnabled">DrsEnabled</a></code> | <code>interface{}</code> | Enable DRS for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnablePredictiveDrs">DrsEnablePredictiveDrs</a></code> | <code>interface{}</code> | When true, enables DRS to use data from vRealize Operations Manager to make proactive DRS recommendations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnableVmOverrides">DrsEnableVmOverrides</a></code> | <code>interface{}</code> | When true, allows individual VM overrides within this cluster to be set. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsMigrationThreshold">DrsMigrationThreshold</a></code> | <code>*f64</code> | A value between 1 and 5 indicating the threshold of imbalance tolerated between hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsScaleDescendantsShares">DrsScaleDescendantsShares</a></code> | <code>*string</code> | Enable scalable shares for all descendants of this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.folder">Folder</a></code> | <code>*string</code> | The name of the folder to locate the cluster in. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forceEvacuateOnDestroy">ForceEvacuateOnDestroy</a></code> | <code>interface{}</code> | Force removal of all hosts in the cluster during destroy and make them standalone hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlFailoverHostSystemIds">HaAdmissionControlFailoverHostSystemIds</a></code> | <code>*[]*string</code> | When ha_admission_control_policy is failoverHosts, this defines the managed object IDs of hosts to use as dedicated failover hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlHostFailureTolerance">HaAdmissionControlHostFailureTolerance</a></code> | <code>*f64</code> | The maximum number of failed hosts that admission control tolerates when making decisions on whether to permit virtual machine operations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPerformanceTolerance">HaAdmissionControlPerformanceTolerance</a></code> | <code>*f64</code> | The percentage of resource reduction that a cluster of VMs can tolerate in case of a failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPolicy">HaAdmissionControlPolicy</a></code> | <code>*string</code> | The type of admission control policy to use with vSphere HA, which controls whether or not specific VM operations are permitted in the cluster in order to protect the reliability of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageAutoCompute">HaAdmissionControlResourcePercentageAutoCompute</a></code> | <code>interface{}</code> | When ha_admission_control_policy is resourcePercentage, automatically determine available resource percentages by subtracting the average number of host resources represented by the ha_admission_control_host_failure_tolerance setting from the total amount of resources in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageCpu">HaAdmissionControlResourcePercentageCpu</a></code> | <code>*f64</code> | When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of CPU resources in the cluster to reserve for failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageMemory">HaAdmissionControlResourcePercentageMemory</a></code> | <code>*f64</code> | When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of memory resources in the cluster to reserve for failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitCpu">HaAdmissionControlSlotPolicyExplicitCpu</a></code> | <code>*f64</code> | When ha_admission_control_policy is slotPolicy, this controls the user-defined CPU slot size, in MHz. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitMemory">HaAdmissionControlSlotPolicyExplicitMemory</a></code> | <code>*f64</code> | When ha_admission_control_policy is slotPolicy, this controls the user-defined memory slot size, in MB. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyUseExplicitSize">HaAdmissionControlSlotPolicyUseExplicitSize</a></code> | <code>interface{}</code> | When ha_admission_control_policy is slotPolicy, this setting controls whether or not you wish to supply explicit values to CPU and memory slot sizes. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdvancedOptions">HaAdvancedOptions</a></code> | <code>*map[string]*string</code> | Advanced configuration options for vSphere HA. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdRecoveryAction">HaDatastoreApdRecoveryAction</a></code> | <code>*string</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines if an APD status on an affected datastore clears in the middle of an APD event. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponse">HaDatastoreApdResponse</a></code> | <code>*string</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected loss to all paths to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponseDelay">HaDatastoreApdResponseDelay</a></code> | <code>*f64</code> | When ha_vm_component_protection is enabled, controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastorePdlResponse">HaDatastorePdlResponse</a></code> | <code>*string</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected a permanent device loss to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haEnabled">HaEnabled</a></code> | <code>interface{}</code> | Enable vSphere HA for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastoreIds">HaHeartbeatDatastoreIds</a></code> | <code>*[]*string</code> | The list of managed object IDs for preferred datastores to use for HA heartbeating. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastorePolicy">HaHeartbeatDatastorePolicy</a></code> | <code>*string</code> | The selection policy for HA heartbeat datastores. Can be one of allFeasibleDs, userSelectedDs, or allFeasibleDsWithUserPreference. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostIsolationResponse">HaHostIsolationResponse</a></code> | <code>*string</code> | The action to take on virtual machines when a host has detected that it has been isolated from the rest of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostMonitoring">HaHostMonitoring</a></code> | <code>*string</code> | Global setting that controls whether vSphere HA remediates VMs on host failure. Can be one of enabled or disabled. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmComponentProtection">HaVmComponentProtection</a></code> | <code>*string</code> | Controls vSphere VM component protection for virtual machines in this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmDependencyRestartCondition">HaVmDependencyRestartCondition</a></code> | <code>*string</code> | The condition used to determine whether or not VMs in a certain restart priority class are online, allowing HA to move on to restarting VMs on the next priority. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmFailureInterval">HaVmFailureInterval</a></code> | <code>*f64</code> | If a heartbeat from a virtual machine is not received within this configured interval, the virtual machine is marked as failed. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumFailureWindow">HaVmMaximumFailureWindow</a></code> | <code>*f64</code> | The length of the reset window in which ha_vm_maximum_resets can operate. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumResets">HaVmMaximumResets</a></code> | <code>*f64</code> | The maximum number of resets that HA will perform to a virtual machine when responding to a failure event. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMinimumUptime">HaVmMinimumUptime</a></code> | <code>*f64</code> | The time, in seconds, that HA waits after powering on a virtual machine before monitoring for heartbeats. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMonitoring">HaVmMonitoring</a></code> | <code>*string</code> | The type of virtual machine monitoring to use when HA is enabled in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartAdditionalDelay">HaVmRestartAdditionalDelay</a></code> | <code>*f64</code> | Additional delay in seconds after ready condition is met. A VM is considered ready at this point. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartPriority">HaVmRestartPriority</a></code> | <code>*string</code> | The default restart priority for affected VMs when vSphere detects a host failure. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartTimeout">HaVmRestartTimeout</a></code> | <code>*f64</code> | The maximum time, in seconds, that vSphere HA will wait for virtual machines in one priority to be ready before proceeding with the next priority. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostClusterExitTimeout">HostClusterExitTimeout</a></code> | <code>*f64</code> | The timeout for each host maintenance mode operation when removing hosts from a cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostImage">HostImage</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | host_image block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostManaged">HostManaged</a></code> | <code>interface{}</code> | Must be set if cluster enrollment is managed from host resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostSystemIds">HostSystemIds</a></code> | <code>*[]*string</code> | The managed object IDs of the hosts to put in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#id ComputeCluster#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaAutomationLevel">ProactiveHaAutomationLevel</a></code> | <code>*string</code> | The DRS behavior for proactive HA recommendations. Can be one of Automated or Manual. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaEnabled">ProactiveHaEnabled</a></code> | <code>interface{}</code> | Enables proactive HA, allowing for vSphere to get HA data from external providers and use DRS to perform remediation. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaModerateRemediation">ProactiveHaModerateRemediation</a></code> | <code>*string</code> | The configured remediation for moderately degraded hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaProviderIds">ProactiveHaProviderIds</a></code> | <code>*[]*string</code> | The list of IDs for health update providers configured for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaSevereRemediation">ProactiveHaSevereRemediation</a></code> | <code>*string</code> | The configured remediation for severely degraded hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanCompressionEnabled">VsanCompressionEnabled</a></code> | <code>interface{}</code> | Whether the vSAN compression service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDedupEnabled">VsanDedupEnabled</a></code> | <code>interface{}</code> | Whether the vSAN deduplication service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDiskGroup">VsanDiskGroup</a></code> | <code>interface{}</code> | vsan_disk_group block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitEncryptionEnabled">VsanDitEncryptionEnabled</a></code> | <code>interface{}</code> | Whether the vSAN data-in-transit encryption is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitRekeyInterval">VsanDitRekeyInterval</a></code> | <code>*f64</code> | When vsan_dit_encryption_enabled is enabled, sets the rekey interval of data-in-transit encryption (in minutes). |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEnabled">VsanEnabled</a></code> | <code>interface{}</code> | Whether the vSAN service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEsaEnabled">VsanEsaEnabled</a></code> | <code>interface{}</code> | Whether the vSAN ESA service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanFaultDomains">VsanFaultDomains</a></code> | <code>interface{}</code> | vsan_fault_domains block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanNetworkDiagnosticModeEnabled">VsanNetworkDiagnosticModeEnabled</a></code> | <code>interface{}</code> | Whether the vSAN network diagnostic mode is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanPerformanceEnabled">VsanPerformanceEnabled</a></code> | <code>interface{}</code> | Whether the vSAN performance service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanRemoteDatastoreIds">VsanRemoteDatastoreIds</a></code> | <code>*[]*string</code> | The managed object IDs of the vSAN datastore to be mounted on the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanStretchedCluster">VsanStretchedCluster</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | vsan_stretched_cluster block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanUnmapEnabled">VsanUnmapEnabled</a></code> | <code>interface{}</code> | Whether the vSAN unmap service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanVerboseModeEnabled">VsanVerboseModeEnabled</a></code> | <code>interface{}</code> | Whether the vSAN verbose mode is enabled for the cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

The managed object ID of the datacenter to put the cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#datacenter_id ComputeCluster#datacenter_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name for the new cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#name ComputeCluster#name}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.customAttributes"></a>

```go
CustomAttributes *map[string]*string
```

- *Type:* *map[string]*string

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#custom_attributes ComputeCluster#custom_attributes}

---

##### `DpmAutomationLevel`<sup>Optional</sup> <a name="DpmAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmAutomationLevel"></a>

```go
DpmAutomationLevel *string
```

- *Type:* *string

The automation level for host power operations in this cluster. Can be one of manual or automated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#dpm_automation_level ComputeCluster#dpm_automation_level}

---

##### `DpmEnabled`<sup>Optional</sup> <a name="DpmEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmEnabled"></a>

```go
DpmEnabled interface{}
```

- *Type:* interface{}

Enable DPM support for DRS.

This allows you to dynamically control the power of hosts depending on the needs of virtual machines in the cluster. Requires that DRS be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#dpm_enabled ComputeCluster#dpm_enabled}

---

##### `DpmThreshold`<sup>Optional</sup> <a name="DpmThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmThreshold"></a>

```go
DpmThreshold *f64
```

- *Type:* *f64

A value between 1 and 5 indicating the threshold of load within the cluster that influences host power operations.

This affects both power on and power off operations - a lower setting will tolerate more of a surplus/deficit than a higher setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#dpm_threshold ComputeCluster#dpm_threshold}

---

##### `DrsAdvancedOptions`<sup>Optional</sup> <a name="DrsAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAdvancedOptions"></a>

```go
DrsAdvancedOptions *map[string]*string
```

- *Type:* *map[string]*string

Advanced configuration options for DRS and DPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#drs_advanced_options ComputeCluster#drs_advanced_options}

---

##### `DrsAutomationLevel`<sup>Optional</sup> <a name="DrsAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAutomationLevel"></a>

```go
DrsAutomationLevel *string
```

- *Type:* *string

The default automation level for all virtual machines in this cluster. Can be one of manual, partiallyAutomated, or fullyAutomated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#drs_automation_level ComputeCluster#drs_automation_level}

---

##### `DrsEnabled`<sup>Optional</sup> <a name="DrsEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnabled"></a>

```go
DrsEnabled interface{}
```

- *Type:* interface{}

Enable DRS for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#drs_enabled ComputeCluster#drs_enabled}

---

##### `DrsEnablePredictiveDrs`<sup>Optional</sup> <a name="DrsEnablePredictiveDrs" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnablePredictiveDrs"></a>

```go
DrsEnablePredictiveDrs interface{}
```

- *Type:* interface{}

When true, enables DRS to use data from vRealize Operations Manager to make proactive DRS recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#drs_enable_predictive_drs ComputeCluster#drs_enable_predictive_drs}

---

##### `DrsEnableVmOverrides`<sup>Optional</sup> <a name="DrsEnableVmOverrides" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnableVmOverrides"></a>

```go
DrsEnableVmOverrides interface{}
```

- *Type:* interface{}

When true, allows individual VM overrides within this cluster to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#drs_enable_vm_overrides ComputeCluster#drs_enable_vm_overrides}

---

##### `DrsMigrationThreshold`<sup>Optional</sup> <a name="DrsMigrationThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsMigrationThreshold"></a>

```go
DrsMigrationThreshold *f64
```

- *Type:* *f64

A value between 1 and 5 indicating the threshold of imbalance tolerated between hosts.

A lower setting will tolerate more imbalance while a higher setting will tolerate less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#drs_migration_threshold ComputeCluster#drs_migration_threshold}

---

##### `DrsScaleDescendantsShares`<sup>Optional</sup> <a name="DrsScaleDescendantsShares" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsScaleDescendantsShares"></a>

```go
DrsScaleDescendantsShares *string
```

- *Type:* *string

Enable scalable shares for all descendants of this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#drs_scale_descendants_shares ComputeCluster#drs_scale_descendants_shares}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The name of the folder to locate the cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#folder ComputeCluster#folder}

---

##### `ForceEvacuateOnDestroy`<sup>Optional</sup> <a name="ForceEvacuateOnDestroy" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forceEvacuateOnDestroy"></a>

```go
ForceEvacuateOnDestroy interface{}
```

- *Type:* interface{}

Force removal of all hosts in the cluster during destroy and make them standalone hosts.

Use of this flag mainly exists for testing and is not recommended in normal use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#force_evacuate_on_destroy ComputeCluster#force_evacuate_on_destroy}

---

##### `HaAdmissionControlFailoverHostSystemIds`<sup>Optional</sup> <a name="HaAdmissionControlFailoverHostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlFailoverHostSystemIds"></a>

```go
HaAdmissionControlFailoverHostSystemIds *[]*string
```

- *Type:* *[]*string

When ha_admission_control_policy is failoverHosts, this defines the managed object IDs of hosts to use as dedicated failover hosts.

These hosts are kept as available as possible - admission control will block access to the host, and DRS will ignore the host when making recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_admission_control_failover_host_system_ids ComputeCluster#ha_admission_control_failover_host_system_ids}

---

##### `HaAdmissionControlHostFailureTolerance`<sup>Optional</sup> <a name="HaAdmissionControlHostFailureTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlHostFailureTolerance"></a>

```go
HaAdmissionControlHostFailureTolerance *f64
```

- *Type:* *f64

The maximum number of failed hosts that admission control tolerates when making decisions on whether to permit virtual machine operations.

The maximum is one less than the number of hosts in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_admission_control_host_failure_tolerance ComputeCluster#ha_admission_control_host_failure_tolerance}

---

##### `HaAdmissionControlPerformanceTolerance`<sup>Optional</sup> <a name="HaAdmissionControlPerformanceTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPerformanceTolerance"></a>

```go
HaAdmissionControlPerformanceTolerance *f64
```

- *Type:* *f64

The percentage of resource reduction that a cluster of VMs can tolerate in case of a failover.

A value of 0 produces warnings only, whereas a value of 100 disables the setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_admission_control_performance_tolerance ComputeCluster#ha_admission_control_performance_tolerance}

---

##### `HaAdmissionControlPolicy`<sup>Optional</sup> <a name="HaAdmissionControlPolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPolicy"></a>

```go
HaAdmissionControlPolicy *string
```

- *Type:* *string

The type of admission control policy to use with vSphere HA, which controls whether or not specific VM operations are permitted in the cluster in order to protect the reliability of the cluster.

Can be one of resourcePercentage, slotPolicy, failoverHosts, or disabled. Note that disabling admission control is not recommended and can lead to service issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_admission_control_policy ComputeCluster#ha_admission_control_policy}

---

##### `HaAdmissionControlResourcePercentageAutoCompute`<sup>Optional</sup> <a name="HaAdmissionControlResourcePercentageAutoCompute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageAutoCompute"></a>

```go
HaAdmissionControlResourcePercentageAutoCompute interface{}
```

- *Type:* interface{}

When ha_admission_control_policy is resourcePercentage, automatically determine available resource percentages by subtracting the average number of host resources represented by the ha_admission_control_host_failure_tolerance setting from the total amount of resources in the cluster.

Disable to supply user-defined values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_admission_control_resource_percentage_auto_compute ComputeCluster#ha_admission_control_resource_percentage_auto_compute}

---

##### `HaAdmissionControlResourcePercentageCpu`<sup>Optional</sup> <a name="HaAdmissionControlResourcePercentageCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageCpu"></a>

```go
HaAdmissionControlResourcePercentageCpu *f64
```

- *Type:* *f64

When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of CPU resources in the cluster to reserve for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_admission_control_resource_percentage_cpu ComputeCluster#ha_admission_control_resource_percentage_cpu}

---

##### `HaAdmissionControlResourcePercentageMemory`<sup>Optional</sup> <a name="HaAdmissionControlResourcePercentageMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageMemory"></a>

```go
HaAdmissionControlResourcePercentageMemory *f64
```

- *Type:* *f64

When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of memory resources in the cluster to reserve for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_admission_control_resource_percentage_memory ComputeCluster#ha_admission_control_resource_percentage_memory}

---

##### `HaAdmissionControlSlotPolicyExplicitCpu`<sup>Optional</sup> <a name="HaAdmissionControlSlotPolicyExplicitCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitCpu"></a>

```go
HaAdmissionControlSlotPolicyExplicitCpu *f64
```

- *Type:* *f64

When ha_admission_control_policy is slotPolicy, this controls the user-defined CPU slot size, in MHz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_cpu ComputeCluster#ha_admission_control_slot_policy_explicit_cpu}

---

##### `HaAdmissionControlSlotPolicyExplicitMemory`<sup>Optional</sup> <a name="HaAdmissionControlSlotPolicyExplicitMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitMemory"></a>

```go
HaAdmissionControlSlotPolicyExplicitMemory *f64
```

- *Type:* *f64

When ha_admission_control_policy is slotPolicy, this controls the user-defined memory slot size, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_memory ComputeCluster#ha_admission_control_slot_policy_explicit_memory}

---

##### `HaAdmissionControlSlotPolicyUseExplicitSize`<sup>Optional</sup> <a name="HaAdmissionControlSlotPolicyUseExplicitSize" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyUseExplicitSize"></a>

```go
HaAdmissionControlSlotPolicyUseExplicitSize interface{}
```

- *Type:* interface{}

When ha_admission_control_policy is slotPolicy, this setting controls whether or not you wish to supply explicit values to CPU and memory slot sizes.

The default is to gather a automatic average based on all powered-on virtual machines currently in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_admission_control_slot_policy_use_explicit_size ComputeCluster#ha_admission_control_slot_policy_use_explicit_size}

---

##### `HaAdvancedOptions`<sup>Optional</sup> <a name="HaAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdvancedOptions"></a>

```go
HaAdvancedOptions *map[string]*string
```

- *Type:* *map[string]*string

Advanced configuration options for vSphere HA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_advanced_options ComputeCluster#ha_advanced_options}

---

##### `HaDatastoreApdRecoveryAction`<sup>Optional</sup> <a name="HaDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdRecoveryAction"></a>

```go
HaDatastoreApdRecoveryAction *string
```

- *Type:* *string

When ha_vm_component_protection is enabled, controls the action to take on virtual machines if an APD status on an affected datastore clears in the middle of an APD event.

Can be one of none or reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_datastore_apd_recovery_action ComputeCluster#ha_datastore_apd_recovery_action}

---

##### `HaDatastoreApdResponse`<sup>Optional</sup> <a name="HaDatastoreApdResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponse"></a>

```go
HaDatastoreApdResponse *string
```

- *Type:* *string

When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected loss to all paths to a relevant datastore.

Can be one of disabled, warning, restartConservative, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_datastore_apd_response ComputeCluster#ha_datastore_apd_response}

---

##### `HaDatastoreApdResponseDelay`<sup>Optional</sup> <a name="HaDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponseDelay"></a>

```go
HaDatastoreApdResponseDelay *f64
```

- *Type:* *f64

When ha_vm_component_protection is enabled, controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_datastore_apd_response_delay ComputeCluster#ha_datastore_apd_response_delay}

---

##### `HaDatastorePdlResponse`<sup>Optional</sup> <a name="HaDatastorePdlResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastorePdlResponse"></a>

```go
HaDatastorePdlResponse *string
```

- *Type:* *string

When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected a permanent device loss to a relevant datastore.

Can be one of disabled, warning, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_datastore_pdl_response ComputeCluster#ha_datastore_pdl_response}

---

##### `HaEnabled`<sup>Optional</sup> <a name="HaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haEnabled"></a>

```go
HaEnabled interface{}
```

- *Type:* interface{}

Enable vSphere HA for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_enabled ComputeCluster#ha_enabled}

---

##### `HaHeartbeatDatastoreIds`<sup>Optional</sup> <a name="HaHeartbeatDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastoreIds"></a>

```go
HaHeartbeatDatastoreIds *[]*string
```

- *Type:* *[]*string

The list of managed object IDs for preferred datastores to use for HA heartbeating.

This setting is only useful when ha_heartbeat_datastore_policy is set to either userSelectedDs or allFeasibleDsWithUserPreference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_heartbeat_datastore_ids ComputeCluster#ha_heartbeat_datastore_ids}

---

##### `HaHeartbeatDatastorePolicy`<sup>Optional</sup> <a name="HaHeartbeatDatastorePolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastorePolicy"></a>

```go
HaHeartbeatDatastorePolicy *string
```

- *Type:* *string

The selection policy for HA heartbeat datastores. Can be one of allFeasibleDs, userSelectedDs, or allFeasibleDsWithUserPreference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_heartbeat_datastore_policy ComputeCluster#ha_heartbeat_datastore_policy}

---

##### `HaHostIsolationResponse`<sup>Optional</sup> <a name="HaHostIsolationResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostIsolationResponse"></a>

```go
HaHostIsolationResponse *string
```

- *Type:* *string

The action to take on virtual machines when a host has detected that it has been isolated from the rest of the cluster.

Can be one of none, powerOff, or shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_host_isolation_response ComputeCluster#ha_host_isolation_response}

---

##### `HaHostMonitoring`<sup>Optional</sup> <a name="HaHostMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostMonitoring"></a>

```go
HaHostMonitoring *string
```

- *Type:* *string

Global setting that controls whether vSphere HA remediates VMs on host failure. Can be one of enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_host_monitoring ComputeCluster#ha_host_monitoring}

---

##### `HaVmComponentProtection`<sup>Optional</sup> <a name="HaVmComponentProtection" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmComponentProtection"></a>

```go
HaVmComponentProtection *string
```

- *Type:* *string

Controls vSphere VM component protection for virtual machines in this cluster.

This allows vSphere HA to react to failures between hosts and specific virtual machine components, such as datastores. Can be one of enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_vm_component_protection ComputeCluster#ha_vm_component_protection}

---

##### `HaVmDependencyRestartCondition`<sup>Optional</sup> <a name="HaVmDependencyRestartCondition" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmDependencyRestartCondition"></a>

```go
HaVmDependencyRestartCondition *string
```

- *Type:* *string

The condition used to determine whether or not VMs in a certain restart priority class are online, allowing HA to move on to restarting VMs on the next priority.

Can be one of none, poweredOn, guestHbStatusGreen, or appHbStatusGreen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_vm_dependency_restart_condition ComputeCluster#ha_vm_dependency_restart_condition}

---

##### `HaVmFailureInterval`<sup>Optional</sup> <a name="HaVmFailureInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmFailureInterval"></a>

```go
HaVmFailureInterval *f64
```

- *Type:* *f64

If a heartbeat from a virtual machine is not received within this configured interval, the virtual machine is marked as failed.

The value is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_vm_failure_interval ComputeCluster#ha_vm_failure_interval}

---

##### `HaVmMaximumFailureWindow`<sup>Optional</sup> <a name="HaVmMaximumFailureWindow" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumFailureWindow"></a>

```go
HaVmMaximumFailureWindow *f64
```

- *Type:* *f64

The length of the reset window in which ha_vm_maximum_resets can operate.

When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_vm_maximum_failure_window ComputeCluster#ha_vm_maximum_failure_window}

---

##### `HaVmMaximumResets`<sup>Optional</sup> <a name="HaVmMaximumResets" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumResets"></a>

```go
HaVmMaximumResets *f64
```

- *Type:* *f64

The maximum number of resets that HA will perform to a virtual machine when responding to a failure event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_vm_maximum_resets ComputeCluster#ha_vm_maximum_resets}

---

##### `HaVmMinimumUptime`<sup>Optional</sup> <a name="HaVmMinimumUptime" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMinimumUptime"></a>

```go
HaVmMinimumUptime *f64
```

- *Type:* *f64

The time, in seconds, that HA waits after powering on a virtual machine before monitoring for heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_vm_minimum_uptime ComputeCluster#ha_vm_minimum_uptime}

---

##### `HaVmMonitoring`<sup>Optional</sup> <a name="HaVmMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMonitoring"></a>

```go
HaVmMonitoring *string
```

- *Type:* *string

The type of virtual machine monitoring to use when HA is enabled in the cluster.

Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_vm_monitoring ComputeCluster#ha_vm_monitoring}

---

##### `HaVmRestartAdditionalDelay`<sup>Optional</sup> <a name="HaVmRestartAdditionalDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartAdditionalDelay"></a>

```go
HaVmRestartAdditionalDelay *f64
```

- *Type:* *f64

Additional delay in seconds after ready condition is met. A VM is considered ready at this point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_vm_restart_additional_delay ComputeCluster#ha_vm_restart_additional_delay}

---

##### `HaVmRestartPriority`<sup>Optional</sup> <a name="HaVmRestartPriority" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartPriority"></a>

```go
HaVmRestartPriority *string
```

- *Type:* *string

The default restart priority for affected VMs when vSphere detects a host failure.

Can be one of lowest, low, medium, high, or highest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_vm_restart_priority ComputeCluster#ha_vm_restart_priority}

---

##### `HaVmRestartTimeout`<sup>Optional</sup> <a name="HaVmRestartTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartTimeout"></a>

```go
HaVmRestartTimeout *f64
```

- *Type:* *f64

The maximum time, in seconds, that vSphere HA will wait for virtual machines in one priority to be ready before proceeding with the next priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#ha_vm_restart_timeout ComputeCluster#ha_vm_restart_timeout}

---

##### `HostClusterExitTimeout`<sup>Optional</sup> <a name="HostClusterExitTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostClusterExitTimeout"></a>

```go
HostClusterExitTimeout *f64
```

- *Type:* *f64

The timeout for each host maintenance mode operation when removing hosts from a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#host_cluster_exit_timeout ComputeCluster#host_cluster_exit_timeout}

---

##### `HostImage`<sup>Optional</sup> <a name="HostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostImage"></a>

```go
HostImage ComputeClusterHostImage
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

host_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#host_image ComputeCluster#host_image}

---

##### `HostManaged`<sup>Optional</sup> <a name="HostManaged" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostManaged"></a>

```go
HostManaged interface{}
```

- *Type:* interface{}

Must be set if cluster enrollment is managed from host resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#host_managed ComputeCluster#host_managed}

---

##### `HostSystemIds`<sup>Optional</sup> <a name="HostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostSystemIds"></a>

```go
HostSystemIds *[]*string
```

- *Type:* *[]*string

The managed object IDs of the hosts to put in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#host_system_ids ComputeCluster#host_system_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#id ComputeCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProactiveHaAutomationLevel`<sup>Optional</sup> <a name="ProactiveHaAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaAutomationLevel"></a>

```go
ProactiveHaAutomationLevel *string
```

- *Type:* *string

The DRS behavior for proactive HA recommendations. Can be one of Automated or Manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#proactive_ha_automation_level ComputeCluster#proactive_ha_automation_level}

---

##### `ProactiveHaEnabled`<sup>Optional</sup> <a name="ProactiveHaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaEnabled"></a>

```go
ProactiveHaEnabled interface{}
```

- *Type:* interface{}

Enables proactive HA, allowing for vSphere to get HA data from external providers and use DRS to perform remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#proactive_ha_enabled ComputeCluster#proactive_ha_enabled}

---

##### `ProactiveHaModerateRemediation`<sup>Optional</sup> <a name="ProactiveHaModerateRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaModerateRemediation"></a>

```go
ProactiveHaModerateRemediation *string
```

- *Type:* *string

The configured remediation for moderately degraded hosts.

Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to MaintenanceMode when proactive_ha_severe_remediation is set to QuarantineMode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#proactive_ha_moderate_remediation ComputeCluster#proactive_ha_moderate_remediation}

---

##### `ProactiveHaProviderIds`<sup>Optional</sup> <a name="ProactiveHaProviderIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaProviderIds"></a>

```go
ProactiveHaProviderIds *[]*string
```

- *Type:* *[]*string

The list of IDs for health update providers configured for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#proactive_ha_provider_ids ComputeCluster#proactive_ha_provider_ids}

---

##### `ProactiveHaSevereRemediation`<sup>Optional</sup> <a name="ProactiveHaSevereRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaSevereRemediation"></a>

```go
ProactiveHaSevereRemediation *string
```

- *Type:* *string

The configured remediation for severely degraded hosts.

Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to QuarantineMode when proactive_ha_moderate_remediation is set to MaintenanceMode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#proactive_ha_severe_remediation ComputeCluster#proactive_ha_severe_remediation}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#tags ComputeCluster#tags}

---

##### `VsanCompressionEnabled`<sup>Optional</sup> <a name="VsanCompressionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanCompressionEnabled"></a>

```go
VsanCompressionEnabled interface{}
```

- *Type:* interface{}

Whether the vSAN compression service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_compression_enabled ComputeCluster#vsan_compression_enabled}

---

##### `VsanDedupEnabled`<sup>Optional</sup> <a name="VsanDedupEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDedupEnabled"></a>

```go
VsanDedupEnabled interface{}
```

- *Type:* interface{}

Whether the vSAN deduplication service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_dedup_enabled ComputeCluster#vsan_dedup_enabled}

---

##### `VsanDiskGroup`<sup>Optional</sup> <a name="VsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDiskGroup"></a>

```go
VsanDiskGroup interface{}
```

- *Type:* interface{}

vsan_disk_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_disk_group ComputeCluster#vsan_disk_group}

---

##### `VsanDitEncryptionEnabled`<sup>Optional</sup> <a name="VsanDitEncryptionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitEncryptionEnabled"></a>

```go
VsanDitEncryptionEnabled interface{}
```

- *Type:* interface{}

Whether the vSAN data-in-transit encryption is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_dit_encryption_enabled ComputeCluster#vsan_dit_encryption_enabled}

---

##### `VsanDitRekeyInterval`<sup>Optional</sup> <a name="VsanDitRekeyInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitRekeyInterval"></a>

```go
VsanDitRekeyInterval *f64
```

- *Type:* *f64

When vsan_dit_encryption_enabled is enabled, sets the rekey interval of data-in-transit encryption (in minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_dit_rekey_interval ComputeCluster#vsan_dit_rekey_interval}

---

##### `VsanEnabled`<sup>Optional</sup> <a name="VsanEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEnabled"></a>

```go
VsanEnabled interface{}
```

- *Type:* interface{}

Whether the vSAN service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_enabled ComputeCluster#vsan_enabled}

---

##### `VsanEsaEnabled`<sup>Optional</sup> <a name="VsanEsaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEsaEnabled"></a>

```go
VsanEsaEnabled interface{}
```

- *Type:* interface{}

Whether the vSAN ESA service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_esa_enabled ComputeCluster#vsan_esa_enabled}

---

##### `VsanFaultDomains`<sup>Optional</sup> <a name="VsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanFaultDomains"></a>

```go
VsanFaultDomains interface{}
```

- *Type:* interface{}

vsan_fault_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_fault_domains ComputeCluster#vsan_fault_domains}

---

##### `VsanNetworkDiagnosticModeEnabled`<sup>Optional</sup> <a name="VsanNetworkDiagnosticModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanNetworkDiagnosticModeEnabled"></a>

```go
VsanNetworkDiagnosticModeEnabled interface{}
```

- *Type:* interface{}

Whether the vSAN network diagnostic mode is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_network_diagnostic_mode_enabled ComputeCluster#vsan_network_diagnostic_mode_enabled}

---

##### `VsanPerformanceEnabled`<sup>Optional</sup> <a name="VsanPerformanceEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanPerformanceEnabled"></a>

```go
VsanPerformanceEnabled interface{}
```

- *Type:* interface{}

Whether the vSAN performance service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_performance_enabled ComputeCluster#vsan_performance_enabled}

---

##### `VsanRemoteDatastoreIds`<sup>Optional</sup> <a name="VsanRemoteDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanRemoteDatastoreIds"></a>

```go
VsanRemoteDatastoreIds *[]*string
```

- *Type:* *[]*string

The managed object IDs of the vSAN datastore to be mounted on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_remote_datastore_ids ComputeCluster#vsan_remote_datastore_ids}

---

##### `VsanStretchedCluster`<sup>Optional</sup> <a name="VsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanStretchedCluster"></a>

```go
VsanStretchedCluster ComputeClusterVsanStretchedCluster
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

vsan_stretched_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_stretched_cluster ComputeCluster#vsan_stretched_cluster}

---

##### `VsanUnmapEnabled`<sup>Optional</sup> <a name="VsanUnmapEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanUnmapEnabled"></a>

```go
VsanUnmapEnabled interface{}
```

- *Type:* interface{}

Whether the vSAN unmap service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_unmap_enabled ComputeCluster#vsan_unmap_enabled}

---

##### `VsanVerboseModeEnabled`<sup>Optional</sup> <a name="VsanVerboseModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanVerboseModeEnabled"></a>

```go
VsanVerboseModeEnabled interface{}
```

- *Type:* interface{}

Whether the vSAN verbose mode is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#vsan_verbose_mode_enabled ComputeCluster#vsan_verbose_mode_enabled}

---

### ComputeClusterHostImage <a name="ComputeClusterHostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

&computecluster.ComputeClusterHostImage {
	Component: interface{},
	EsxVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.component">Component</a></code> | <code>interface{}</code> | component block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.esxVersion">EsxVersion</a></code> | <code>*string</code> | The ESXi version which the image is based on. |

---

##### `Component`<sup>Optional</sup> <a name="Component" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.component"></a>

```go
Component interface{}
```

- *Type:* interface{}

component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#component ComputeCluster#component}

---

##### `EsxVersion`<sup>Optional</sup> <a name="EsxVersion" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.esxVersion"></a>

```go
EsxVersion *string
```

- *Type:* *string

The ESXi version which the image is based on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#esx_version ComputeCluster#esx_version}

---

### ComputeClusterHostImageComponent <a name="ComputeClusterHostImageComponent" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

&computecluster.ComputeClusterHostImageComponent {
	Key: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.key">Key</a></code> | <code>*string</code> | The identifier for the component. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.version">Version</a></code> | <code>*string</code> | The version to use. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.key"></a>

```go
Key *string
```

- *Type:* *string

The identifier for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#key ComputeCluster#key}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.version"></a>

```go
Version *string
```

- *Type:* *string

The version to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#version ComputeCluster#version}

---

### ComputeClusterVsanDiskGroup <a name="ComputeClusterVsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

&computecluster.ComputeClusterVsanDiskGroup {
	Cache: *string,
	Storage: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.cache">Cache</a></code> | <code>*string</code> | Cache disk. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.storage">Storage</a></code> | <code>*[]*string</code> | List of storage disks. |

---

##### `Cache`<sup>Optional</sup> <a name="Cache" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.cache"></a>

```go
Cache *string
```

- *Type:* *string

Cache disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#cache ComputeCluster#cache}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.storage"></a>

```go
Storage *[]*string
```

- *Type:* *[]*string

List of storage disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#storage ComputeCluster#storage}

---

### ComputeClusterVsanFaultDomains <a name="ComputeClusterVsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

&computecluster.ComputeClusterVsanFaultDomains {
	FaultDomain: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains.property.faultDomain">FaultDomain</a></code> | <code>interface{}</code> | fault_domain block. |

---

##### `FaultDomain`<sup>Optional</sup> <a name="FaultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains.property.faultDomain"></a>

```go
FaultDomain interface{}
```

- *Type:* interface{}

fault_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#fault_domain ComputeCluster#fault_domain}

---

### ComputeClusterVsanFaultDomainsFaultDomain <a name="ComputeClusterVsanFaultDomainsFaultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

&computecluster.ComputeClusterVsanFaultDomainsFaultDomain {
	HostIds: *[]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.hostIds">HostIds</a></code> | <code>*[]*string</code> | The managed object IDs of the hosts to put in the fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.name">Name</a></code> | <code>*string</code> | The name of fault domain. |

---

##### `HostIds`<sup>Required</sup> <a name="HostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.hostIds"></a>

```go
HostIds *[]*string
```

- *Type:* *[]*string

The managed object IDs of the hosts to put in the fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#host_ids ComputeCluster#host_ids}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#name ComputeCluster#name}

---

### ComputeClusterVsanStretchedCluster <a name="ComputeClusterVsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

&computecluster.ComputeClusterVsanStretchedCluster {
	PreferredFaultDomainHostIds: *[]*string,
	SecondaryFaultDomainHostIds: *[]*string,
	WitnessNode: *string,
	PreferredFaultDomainName: *string,
	SecondaryFaultDomainName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainHostIds">PreferredFaultDomainHostIds</a></code> | <code>*[]*string</code> | The managed object IDs of the hosts to put in the first fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainHostIds">SecondaryFaultDomainHostIds</a></code> | <code>*[]*string</code> | The managed object IDs of the hosts to put in the second fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.witnessNode">WitnessNode</a></code> | <code>*string</code> | The managed object IDs of the host selected as witness node when enable stretched cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainName">PreferredFaultDomainName</a></code> | <code>*string</code> | The name of prepferred fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainName">SecondaryFaultDomainName</a></code> | <code>*string</code> | The name of secondary fault domain. |

---

##### `PreferredFaultDomainHostIds`<sup>Required</sup> <a name="PreferredFaultDomainHostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainHostIds"></a>

```go
PreferredFaultDomainHostIds *[]*string
```

- *Type:* *[]*string

The managed object IDs of the hosts to put in the first fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#preferred_fault_domain_host_ids ComputeCluster#preferred_fault_domain_host_ids}

---

##### `SecondaryFaultDomainHostIds`<sup>Required</sup> <a name="SecondaryFaultDomainHostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainHostIds"></a>

```go
SecondaryFaultDomainHostIds *[]*string
```

- *Type:* *[]*string

The managed object IDs of the hosts to put in the second fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#secondary_fault_domain_host_ids ComputeCluster#secondary_fault_domain_host_ids}

---

##### `WitnessNode`<sup>Required</sup> <a name="WitnessNode" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.witnessNode"></a>

```go
WitnessNode *string
```

- *Type:* *string

The managed object IDs of the host selected as witness node when enable stretched cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#witness_node ComputeCluster#witness_node}

---

##### `PreferredFaultDomainName`<sup>Optional</sup> <a name="PreferredFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainName"></a>

```go
PreferredFaultDomainName *string
```

- *Type:* *string

The name of prepferred fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#preferred_fault_domain_name ComputeCluster#preferred_fault_domain_name}

---

##### `SecondaryFaultDomainName`<sup>Optional</sup> <a name="SecondaryFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainName"></a>

```go
SecondaryFaultDomainName *string
```

- *Type:* *string

The name of secondary fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/compute_cluster#secondary_fault_domain_name ComputeCluster#secondary_fault_domain_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeClusterHostImageComponentList <a name="ComputeClusterHostImageComponentList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.NewComputeClusterHostImageComponentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeClusterHostImageComponentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.get"></a>

```go
func Get(index *f64) ComputeClusterHostImageComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeClusterHostImageComponentOutputReference <a name="ComputeClusterHostImageComponentOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.NewComputeClusterHostImageComponentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeClusterHostImageComponentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeClusterHostImageOutputReference <a name="ComputeClusterHostImageOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.NewComputeClusterHostImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeClusterHostImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.putComponent">PutComponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetComponent">ResetComponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetEsxVersion">ResetEsxVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComponent` <a name="PutComponent" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.putComponent"></a>

```go
func PutComponent(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.putComponent.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComponent` <a name="ResetComponent" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetComponent"></a>

```go
func ResetComponent()
```

##### `ResetEsxVersion` <a name="ResetEsxVersion" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetEsxVersion"></a>

```go
func ResetEsxVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.component">Component</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList">ComputeClusterHostImageComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.componentInput">ComponentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersionInput">EsxVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersion">EsxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.component"></a>

```go
func Component() ComputeClusterHostImageComponentList
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList">ComputeClusterHostImageComponentList</a>

---

##### `ComponentInput`<sup>Optional</sup> <a name="ComponentInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.componentInput"></a>

```go
func ComponentInput() interface{}
```

- *Type:* interface{}

---

##### `EsxVersionInput`<sup>Optional</sup> <a name="EsxVersionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersionInput"></a>

```go
func EsxVersionInput() *string
```

- *Type:* *string

---

##### `EsxVersion`<sup>Required</sup> <a name="EsxVersion" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersion"></a>

```go
func EsxVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeClusterHostImage
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

---


### ComputeClusterVsanDiskGroupList <a name="ComputeClusterVsanDiskGroupList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.NewComputeClusterVsanDiskGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeClusterVsanDiskGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.get"></a>

```go
func Get(index *f64) ComputeClusterVsanDiskGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeClusterVsanDiskGroupOutputReference <a name="ComputeClusterVsanDiskGroupOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.NewComputeClusterVsanDiskGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeClusterVsanDiskGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetCache">ResetCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetStorage">ResetStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCache` <a name="ResetCache" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetCache"></a>

```go
func ResetCache()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetStorage"></a>

```go
func ResetStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cacheInput">CacheInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storageInput">StorageInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cache">Cache</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storage">Storage</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheInput`<sup>Optional</sup> <a name="CacheInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cacheInput"></a>

```go
func CacheInput() *string
```

- *Type:* *string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storageInput"></a>

```go
func StorageInput() *[]*string
```

- *Type:* *[]*string

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cache"></a>

```go
func Cache() *string
```

- *Type:* *string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storage"></a>

```go
func Storage() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeClusterVsanFaultDomainsFaultDomainList <a name="ComputeClusterVsanFaultDomainsFaultDomainList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.NewComputeClusterVsanFaultDomainsFaultDomainList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeClusterVsanFaultDomainsFaultDomainList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.get"></a>

```go
func Get(index *f64) ComputeClusterVsanFaultDomainsFaultDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeClusterVsanFaultDomainsFaultDomainOutputReference <a name="ComputeClusterVsanFaultDomainsFaultDomainOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.NewComputeClusterVsanFaultDomainsFaultDomainOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeClusterVsanFaultDomainsFaultDomainOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIdsInput">HostIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIds">HostIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostIdsInput`<sup>Optional</sup> <a name="HostIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIdsInput"></a>

```go
func HostIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `HostIds`<sup>Required</sup> <a name="HostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIds"></a>

```go
func HostIds() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeClusterVsanFaultDomainsList <a name="ComputeClusterVsanFaultDomainsList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.NewComputeClusterVsanFaultDomainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeClusterVsanFaultDomainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.get"></a>

```go
func Get(index *f64) ComputeClusterVsanFaultDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeClusterVsanFaultDomainsOutputReference <a name="ComputeClusterVsanFaultDomainsOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.NewComputeClusterVsanFaultDomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeClusterVsanFaultDomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.putFaultDomain">PutFaultDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resetFaultDomain">ResetFaultDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFaultDomain` <a name="PutFaultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.putFaultDomain"></a>

```go
func PutFaultDomain(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.putFaultDomain.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFaultDomain` <a name="ResetFaultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resetFaultDomain"></a>

```go
func ResetFaultDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomain">FaultDomain</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList">ComputeClusterVsanFaultDomainsFaultDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomainInput">FaultDomainInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomain"></a>

```go
func FaultDomain() ComputeClusterVsanFaultDomainsFaultDomainList
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList">ComputeClusterVsanFaultDomainsFaultDomainList</a>

---

##### `FaultDomainInput`<sup>Optional</sup> <a name="FaultDomainInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomainInput"></a>

```go
func FaultDomainInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeClusterVsanStretchedClusterOutputReference <a name="ComputeClusterVsanStretchedClusterOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computecluster"

computecluster.NewComputeClusterVsanStretchedClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeClusterVsanStretchedClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetPreferredFaultDomainName">ResetPreferredFaultDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetSecondaryFaultDomainName">ResetSecondaryFaultDomainName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreferredFaultDomainName` <a name="ResetPreferredFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetPreferredFaultDomainName"></a>

```go
func ResetPreferredFaultDomainName()
```

##### `ResetSecondaryFaultDomainName` <a name="ResetSecondaryFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetSecondaryFaultDomainName"></a>

```go
func ResetSecondaryFaultDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIdsInput">PreferredFaultDomainHostIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainNameInput">PreferredFaultDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIdsInput">SecondaryFaultDomainHostIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainNameInput">SecondaryFaultDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNodeInput">WitnessNodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIds">PreferredFaultDomainHostIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainName">PreferredFaultDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIds">SecondaryFaultDomainHostIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainName">SecondaryFaultDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNode">WitnessNode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreferredFaultDomainHostIdsInput`<sup>Optional</sup> <a name="PreferredFaultDomainHostIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIdsInput"></a>

```go
func PreferredFaultDomainHostIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredFaultDomainNameInput`<sup>Optional</sup> <a name="PreferredFaultDomainNameInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainNameInput"></a>

```go
func PreferredFaultDomainNameInput() *string
```

- *Type:* *string

---

##### `SecondaryFaultDomainHostIdsInput`<sup>Optional</sup> <a name="SecondaryFaultDomainHostIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIdsInput"></a>

```go
func SecondaryFaultDomainHostIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecondaryFaultDomainNameInput`<sup>Optional</sup> <a name="SecondaryFaultDomainNameInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainNameInput"></a>

```go
func SecondaryFaultDomainNameInput() *string
```

- *Type:* *string

---

##### `WitnessNodeInput`<sup>Optional</sup> <a name="WitnessNodeInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNodeInput"></a>

```go
func WitnessNodeInput() *string
```

- *Type:* *string

---

##### `PreferredFaultDomainHostIds`<sup>Required</sup> <a name="PreferredFaultDomainHostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIds"></a>

```go
func PreferredFaultDomainHostIds() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredFaultDomainName`<sup>Required</sup> <a name="PreferredFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainName"></a>

```go
func PreferredFaultDomainName() *string
```

- *Type:* *string

---

##### `SecondaryFaultDomainHostIds`<sup>Required</sup> <a name="SecondaryFaultDomainHostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIds"></a>

```go
func SecondaryFaultDomainHostIds() *[]*string
```

- *Type:* *[]*string

---

##### `SecondaryFaultDomainName`<sup>Required</sup> <a name="SecondaryFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainName"></a>

```go
func SecondaryFaultDomainName() *string
```

- *Type:* *string

---

##### `WitnessNode`<sup>Required</sup> <a name="WitnessNode" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNode"></a>

```go
func WitnessNode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeClusterVsanStretchedCluster
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

---



