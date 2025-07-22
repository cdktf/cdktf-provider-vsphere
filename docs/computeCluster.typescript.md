# `computeCluster` Submodule <a name="`computeCluster` Submodule" id="@cdktf/provider-vsphere.computeCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeCluster <a name="ComputeCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster vsphere_compute_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

new computeCluster.ComputeCluster(scope: Construct, id: string, config: ComputeClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig">ComputeClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig">ComputeClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putHostImage">putHostImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanDiskGroup">putVsanDiskGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanFaultDomains">putVsanFaultDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster">putVsanStretchedCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmAutomationLevel">resetDpmAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmEnabled">resetDpmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmThreshold">resetDpmThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAdvancedOptions">resetDrsAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAutomationLevel">resetDrsAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnabled">resetDrsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnablePredictiveDrs">resetDrsEnablePredictiveDrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnableVmOverrides">resetDrsEnableVmOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsMigrationThreshold">resetDrsMigrationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsScaleDescendantsShares">resetDrsScaleDescendantsShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetForceEvacuateOnDestroy">resetForceEvacuateOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlFailoverHostSystemIds">resetHaAdmissionControlFailoverHostSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlHostFailureTolerance">resetHaAdmissionControlHostFailureTolerance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPerformanceTolerance">resetHaAdmissionControlPerformanceTolerance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPolicy">resetHaAdmissionControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageAutoCompute">resetHaAdmissionControlResourcePercentageAutoCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageCpu">resetHaAdmissionControlResourcePercentageCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageMemory">resetHaAdmissionControlResourcePercentageMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitCpu">resetHaAdmissionControlSlotPolicyExplicitCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitMemory">resetHaAdmissionControlSlotPolicyExplicitMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyUseExplicitSize">resetHaAdmissionControlSlotPolicyUseExplicitSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdvancedOptions">resetHaAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdRecoveryAction">resetHaDatastoreApdRecoveryAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponse">resetHaDatastoreApdResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponseDelay">resetHaDatastoreApdResponseDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastorePdlResponse">resetHaDatastorePdlResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaEnabled">resetHaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastoreIds">resetHaHeartbeatDatastoreIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastorePolicy">resetHaHeartbeatDatastorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostIsolationResponse">resetHaHostIsolationResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostMonitoring">resetHaHostMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmComponentProtection">resetHaVmComponentProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmDependencyRestartCondition">resetHaVmDependencyRestartCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmFailureInterval">resetHaVmFailureInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumFailureWindow">resetHaVmMaximumFailureWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumResets">resetHaVmMaximumResets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMinimumUptime">resetHaVmMinimumUptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMonitoring">resetHaVmMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartAdditionalDelay">resetHaVmRestartAdditionalDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartPriority">resetHaVmRestartPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartTimeout">resetHaVmRestartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostClusterExitTimeout">resetHostClusterExitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostImage">resetHostImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostManaged">resetHostManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostSystemIds">resetHostSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaAutomationLevel">resetProactiveHaAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaEnabled">resetProactiveHaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaModerateRemediation">resetProactiveHaModerateRemediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaProviderIds">resetProactiveHaProviderIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaSevereRemediation">resetProactiveHaSevereRemediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanCompressionEnabled">resetVsanCompressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDedupEnabled">resetVsanDedupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDiskGroup">resetVsanDiskGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitEncryptionEnabled">resetVsanDitEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitRekeyInterval">resetVsanDitRekeyInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEnabled">resetVsanEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEsaEnabled">resetVsanEsaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanFaultDomains">resetVsanFaultDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanNetworkDiagnosticModeEnabled">resetVsanNetworkDiagnosticModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanPerformanceEnabled">resetVsanPerformanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanRemoteDatastoreIds">resetVsanRemoteDatastoreIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanStretchedCluster">resetVsanStretchedCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanUnmapEnabled">resetVsanUnmapEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanVerboseModeEnabled">resetVsanVerboseModeEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHostImage` <a name="putHostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putHostImage"></a>

```typescript
public putHostImage(value: ComputeClusterHostImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putHostImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

---

##### `putVsanDiskGroup` <a name="putVsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanDiskGroup"></a>

```typescript
public putVsanDiskGroup(value: IResolvable | ComputeClusterVsanDiskGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanDiskGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>[]

---

##### `putVsanFaultDomains` <a name="putVsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanFaultDomains"></a>

```typescript
public putVsanFaultDomains(value: IResolvable | ComputeClusterVsanFaultDomains[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanFaultDomains.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>[]

---

##### `putVsanStretchedCluster` <a name="putVsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster"></a>

```typescript
public putVsanStretchedCluster(value: ComputeClusterVsanStretchedCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

---

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetDpmAutomationLevel` <a name="resetDpmAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmAutomationLevel"></a>

```typescript
public resetDpmAutomationLevel(): void
```

##### `resetDpmEnabled` <a name="resetDpmEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmEnabled"></a>

```typescript
public resetDpmEnabled(): void
```

##### `resetDpmThreshold` <a name="resetDpmThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmThreshold"></a>

```typescript
public resetDpmThreshold(): void
```

##### `resetDrsAdvancedOptions` <a name="resetDrsAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAdvancedOptions"></a>

```typescript
public resetDrsAdvancedOptions(): void
```

##### `resetDrsAutomationLevel` <a name="resetDrsAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAutomationLevel"></a>

```typescript
public resetDrsAutomationLevel(): void
```

##### `resetDrsEnabled` <a name="resetDrsEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnabled"></a>

```typescript
public resetDrsEnabled(): void
```

##### `resetDrsEnablePredictiveDrs` <a name="resetDrsEnablePredictiveDrs" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnablePredictiveDrs"></a>

```typescript
public resetDrsEnablePredictiveDrs(): void
```

##### `resetDrsEnableVmOverrides` <a name="resetDrsEnableVmOverrides" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnableVmOverrides"></a>

```typescript
public resetDrsEnableVmOverrides(): void
```

##### `resetDrsMigrationThreshold` <a name="resetDrsMigrationThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsMigrationThreshold"></a>

```typescript
public resetDrsMigrationThreshold(): void
```

##### `resetDrsScaleDescendantsShares` <a name="resetDrsScaleDescendantsShares" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsScaleDescendantsShares"></a>

```typescript
public resetDrsScaleDescendantsShares(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetForceEvacuateOnDestroy` <a name="resetForceEvacuateOnDestroy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetForceEvacuateOnDestroy"></a>

```typescript
public resetForceEvacuateOnDestroy(): void
```

##### `resetHaAdmissionControlFailoverHostSystemIds` <a name="resetHaAdmissionControlFailoverHostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlFailoverHostSystemIds"></a>

```typescript
public resetHaAdmissionControlFailoverHostSystemIds(): void
```

##### `resetHaAdmissionControlHostFailureTolerance` <a name="resetHaAdmissionControlHostFailureTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlHostFailureTolerance"></a>

```typescript
public resetHaAdmissionControlHostFailureTolerance(): void
```

##### `resetHaAdmissionControlPerformanceTolerance` <a name="resetHaAdmissionControlPerformanceTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPerformanceTolerance"></a>

```typescript
public resetHaAdmissionControlPerformanceTolerance(): void
```

##### `resetHaAdmissionControlPolicy` <a name="resetHaAdmissionControlPolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPolicy"></a>

```typescript
public resetHaAdmissionControlPolicy(): void
```

##### `resetHaAdmissionControlResourcePercentageAutoCompute` <a name="resetHaAdmissionControlResourcePercentageAutoCompute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageAutoCompute"></a>

```typescript
public resetHaAdmissionControlResourcePercentageAutoCompute(): void
```

##### `resetHaAdmissionControlResourcePercentageCpu` <a name="resetHaAdmissionControlResourcePercentageCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageCpu"></a>

```typescript
public resetHaAdmissionControlResourcePercentageCpu(): void
```

##### `resetHaAdmissionControlResourcePercentageMemory` <a name="resetHaAdmissionControlResourcePercentageMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageMemory"></a>

```typescript
public resetHaAdmissionControlResourcePercentageMemory(): void
```

##### `resetHaAdmissionControlSlotPolicyExplicitCpu` <a name="resetHaAdmissionControlSlotPolicyExplicitCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitCpu"></a>

```typescript
public resetHaAdmissionControlSlotPolicyExplicitCpu(): void
```

##### `resetHaAdmissionControlSlotPolicyExplicitMemory` <a name="resetHaAdmissionControlSlotPolicyExplicitMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitMemory"></a>

```typescript
public resetHaAdmissionControlSlotPolicyExplicitMemory(): void
```

##### `resetHaAdmissionControlSlotPolicyUseExplicitSize` <a name="resetHaAdmissionControlSlotPolicyUseExplicitSize" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyUseExplicitSize"></a>

```typescript
public resetHaAdmissionControlSlotPolicyUseExplicitSize(): void
```

##### `resetHaAdvancedOptions` <a name="resetHaAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdvancedOptions"></a>

```typescript
public resetHaAdvancedOptions(): void
```

##### `resetHaDatastoreApdRecoveryAction` <a name="resetHaDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdRecoveryAction"></a>

```typescript
public resetHaDatastoreApdRecoveryAction(): void
```

##### `resetHaDatastoreApdResponse` <a name="resetHaDatastoreApdResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponse"></a>

```typescript
public resetHaDatastoreApdResponse(): void
```

##### `resetHaDatastoreApdResponseDelay` <a name="resetHaDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponseDelay"></a>

```typescript
public resetHaDatastoreApdResponseDelay(): void
```

##### `resetHaDatastorePdlResponse` <a name="resetHaDatastorePdlResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastorePdlResponse"></a>

```typescript
public resetHaDatastorePdlResponse(): void
```

##### `resetHaEnabled` <a name="resetHaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaEnabled"></a>

```typescript
public resetHaEnabled(): void
```

##### `resetHaHeartbeatDatastoreIds` <a name="resetHaHeartbeatDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastoreIds"></a>

```typescript
public resetHaHeartbeatDatastoreIds(): void
```

##### `resetHaHeartbeatDatastorePolicy` <a name="resetHaHeartbeatDatastorePolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastorePolicy"></a>

```typescript
public resetHaHeartbeatDatastorePolicy(): void
```

##### `resetHaHostIsolationResponse` <a name="resetHaHostIsolationResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostIsolationResponse"></a>

```typescript
public resetHaHostIsolationResponse(): void
```

##### `resetHaHostMonitoring` <a name="resetHaHostMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostMonitoring"></a>

```typescript
public resetHaHostMonitoring(): void
```

##### `resetHaVmComponentProtection` <a name="resetHaVmComponentProtection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmComponentProtection"></a>

```typescript
public resetHaVmComponentProtection(): void
```

##### `resetHaVmDependencyRestartCondition` <a name="resetHaVmDependencyRestartCondition" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmDependencyRestartCondition"></a>

```typescript
public resetHaVmDependencyRestartCondition(): void
```

##### `resetHaVmFailureInterval` <a name="resetHaVmFailureInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmFailureInterval"></a>

```typescript
public resetHaVmFailureInterval(): void
```

##### `resetHaVmMaximumFailureWindow` <a name="resetHaVmMaximumFailureWindow" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumFailureWindow"></a>

```typescript
public resetHaVmMaximumFailureWindow(): void
```

##### `resetHaVmMaximumResets` <a name="resetHaVmMaximumResets" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumResets"></a>

```typescript
public resetHaVmMaximumResets(): void
```

##### `resetHaVmMinimumUptime` <a name="resetHaVmMinimumUptime" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMinimumUptime"></a>

```typescript
public resetHaVmMinimumUptime(): void
```

##### `resetHaVmMonitoring` <a name="resetHaVmMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMonitoring"></a>

```typescript
public resetHaVmMonitoring(): void
```

##### `resetHaVmRestartAdditionalDelay` <a name="resetHaVmRestartAdditionalDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartAdditionalDelay"></a>

```typescript
public resetHaVmRestartAdditionalDelay(): void
```

##### `resetHaVmRestartPriority` <a name="resetHaVmRestartPriority" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartPriority"></a>

```typescript
public resetHaVmRestartPriority(): void
```

##### `resetHaVmRestartTimeout` <a name="resetHaVmRestartTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartTimeout"></a>

```typescript
public resetHaVmRestartTimeout(): void
```

##### `resetHostClusterExitTimeout` <a name="resetHostClusterExitTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostClusterExitTimeout"></a>

```typescript
public resetHostClusterExitTimeout(): void
```

##### `resetHostImage` <a name="resetHostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostImage"></a>

```typescript
public resetHostImage(): void
```

##### `resetHostManaged` <a name="resetHostManaged" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostManaged"></a>

```typescript
public resetHostManaged(): void
```

##### `resetHostSystemIds` <a name="resetHostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostSystemIds"></a>

```typescript
public resetHostSystemIds(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProactiveHaAutomationLevel` <a name="resetProactiveHaAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaAutomationLevel"></a>

```typescript
public resetProactiveHaAutomationLevel(): void
```

##### `resetProactiveHaEnabled` <a name="resetProactiveHaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaEnabled"></a>

```typescript
public resetProactiveHaEnabled(): void
```

##### `resetProactiveHaModerateRemediation` <a name="resetProactiveHaModerateRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaModerateRemediation"></a>

```typescript
public resetProactiveHaModerateRemediation(): void
```

##### `resetProactiveHaProviderIds` <a name="resetProactiveHaProviderIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaProviderIds"></a>

```typescript
public resetProactiveHaProviderIds(): void
```

##### `resetProactiveHaSevereRemediation` <a name="resetProactiveHaSevereRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaSevereRemediation"></a>

```typescript
public resetProactiveHaSevereRemediation(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVsanCompressionEnabled` <a name="resetVsanCompressionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanCompressionEnabled"></a>

```typescript
public resetVsanCompressionEnabled(): void
```

##### `resetVsanDedupEnabled` <a name="resetVsanDedupEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDedupEnabled"></a>

```typescript
public resetVsanDedupEnabled(): void
```

##### `resetVsanDiskGroup` <a name="resetVsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDiskGroup"></a>

```typescript
public resetVsanDiskGroup(): void
```

##### `resetVsanDitEncryptionEnabled` <a name="resetVsanDitEncryptionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitEncryptionEnabled"></a>

```typescript
public resetVsanDitEncryptionEnabled(): void
```

##### `resetVsanDitRekeyInterval` <a name="resetVsanDitRekeyInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitRekeyInterval"></a>

```typescript
public resetVsanDitRekeyInterval(): void
```

##### `resetVsanEnabled` <a name="resetVsanEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEnabled"></a>

```typescript
public resetVsanEnabled(): void
```

##### `resetVsanEsaEnabled` <a name="resetVsanEsaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEsaEnabled"></a>

```typescript
public resetVsanEsaEnabled(): void
```

##### `resetVsanFaultDomains` <a name="resetVsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanFaultDomains"></a>

```typescript
public resetVsanFaultDomains(): void
```

##### `resetVsanNetworkDiagnosticModeEnabled` <a name="resetVsanNetworkDiagnosticModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanNetworkDiagnosticModeEnabled"></a>

```typescript
public resetVsanNetworkDiagnosticModeEnabled(): void
```

##### `resetVsanPerformanceEnabled` <a name="resetVsanPerformanceEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanPerformanceEnabled"></a>

```typescript
public resetVsanPerformanceEnabled(): void
```

##### `resetVsanRemoteDatastoreIds` <a name="resetVsanRemoteDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanRemoteDatastoreIds"></a>

```typescript
public resetVsanRemoteDatastoreIds(): void
```

##### `resetVsanStretchedCluster` <a name="resetVsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanStretchedCluster"></a>

```typescript
public resetVsanStretchedCluster(): void
```

##### `resetVsanUnmapEnabled` <a name="resetVsanUnmapEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanUnmapEnabled"></a>

```typescript
public resetVsanUnmapEnabled(): void
```

##### `resetVsanVerboseModeEnabled` <a name="resetVsanVerboseModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanVerboseModeEnabled"></a>

```typescript
public resetVsanVerboseModeEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isConstruct"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

computeCluster.ComputeCluster.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformElement"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

computeCluster.ComputeCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformResource"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

computeCluster.ComputeCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

computeCluster.ComputeCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImage">hostImage</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference">ComputeClusterHostImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.resourcePoolId">resourcePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroup">vsanDiskGroup</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList">ComputeClusterVsanDiskGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomains">vsanFaultDomains</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList">ComputeClusterVsanFaultDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedCluster">vsanStretchedCluster</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference">ComputeClusterVsanStretchedClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributesInput">customAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevelInput">dpmAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabledInput">dpmEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThresholdInput">dpmThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptionsInput">drsAdvancedOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevelInput">drsAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabledInput">drsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrsInput">drsEnablePredictiveDrsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverridesInput">drsEnableVmOverridesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThresholdInput">drsMigrationThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsSharesInput">drsScaleDescendantsSharesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroyInput">forceEvacuateOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIdsInput">haAdmissionControlFailoverHostSystemIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureToleranceInput">haAdmissionControlHostFailureToleranceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceToleranceInput">haAdmissionControlPerformanceToleranceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicyInput">haAdmissionControlPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoComputeInput">haAdmissionControlResourcePercentageAutoComputeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpuInput">haAdmissionControlResourcePercentageCpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemoryInput">haAdmissionControlResourcePercentageMemoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpuInput">haAdmissionControlSlotPolicyExplicitCpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemoryInput">haAdmissionControlSlotPolicyExplicitMemoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSizeInput">haAdmissionControlSlotPolicyUseExplicitSizeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptionsInput">haAdvancedOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryActionInput">haDatastoreApdRecoveryActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelayInput">haDatastoreApdResponseDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseInput">haDatastoreApdResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponseInput">haDatastorePdlResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabledInput">haEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIdsInput">haHeartbeatDatastoreIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicyInput">haHeartbeatDatastorePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponseInput">haHostIsolationResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoringInput">haHostMonitoringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtectionInput">haVmComponentProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartConditionInput">haVmDependencyRestartConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureIntervalInput">haVmFailureIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindowInput">haVmMaximumFailureWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResetsInput">haVmMaximumResetsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptimeInput">haVmMinimumUptimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoringInput">haVmMonitoringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelayInput">haVmRestartAdditionalDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriorityInput">haVmRestartPriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeoutInput">haVmRestartTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeoutInput">hostClusterExitTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImageInput">hostImageInput</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManagedInput">hostManagedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIdsInput">hostSystemIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevelInput">proactiveHaAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabledInput">proactiveHaEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediationInput">proactiveHaModerateRemediationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIdsInput">proactiveHaProviderIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediationInput">proactiveHaSevereRemediationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabledInput">vsanCompressionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabledInput">vsanDedupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroupInput">vsanDiskGroupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabledInput">vsanDitEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyIntervalInput">vsanDitRekeyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabledInput">vsanEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabledInput">vsanEsaEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomainsInput">vsanFaultDomainsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabledInput">vsanNetworkDiagnosticModeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabledInput">vsanPerformanceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIdsInput">vsanRemoteDatastoreIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedClusterInput">vsanStretchedClusterInput</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabledInput">vsanUnmapEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabledInput">vsanVerboseModeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevel">dpmAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabled">dpmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThreshold">dpmThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptions">drsAdvancedOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevel">drsAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabled">drsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrs">drsEnablePredictiveDrs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverrides">drsEnableVmOverrides</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThreshold">drsMigrationThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsShares">drsScaleDescendantsShares</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroy">forceEvacuateOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIds">haAdmissionControlFailoverHostSystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureTolerance">haAdmissionControlHostFailureTolerance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceTolerance">haAdmissionControlPerformanceTolerance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicy">haAdmissionControlPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoCompute">haAdmissionControlResourcePercentageAutoCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpu">haAdmissionControlResourcePercentageCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemory">haAdmissionControlResourcePercentageMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpu">haAdmissionControlSlotPolicyExplicitCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemory">haAdmissionControlSlotPolicyExplicitMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSize">haAdmissionControlSlotPolicyUseExplicitSize</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptions">haAdvancedOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryAction">haDatastoreApdRecoveryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponse">haDatastoreApdResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelay">haDatastoreApdResponseDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponse">haDatastorePdlResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabled">haEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIds">haHeartbeatDatastoreIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicy">haHeartbeatDatastorePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponse">haHostIsolationResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoring">haHostMonitoring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtection">haVmComponentProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartCondition">haVmDependencyRestartCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureInterval">haVmFailureInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindow">haVmMaximumFailureWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResets">haVmMaximumResets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptime">haVmMinimumUptime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoring">haVmMonitoring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelay">haVmRestartAdditionalDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriority">haVmRestartPriority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeout">haVmRestartTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeout">hostClusterExitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManaged">hostManaged</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIds">hostSystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevel">proactiveHaAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabled">proactiveHaEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediation">proactiveHaModerateRemediation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIds">proactiveHaProviderIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediation">proactiveHaSevereRemediation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabled">vsanCompressionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabled">vsanDedupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabled">vsanDitEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyInterval">vsanDitRekeyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabled">vsanEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabled">vsanEsaEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabled">vsanNetworkDiagnosticModeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabled">vsanPerformanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIds">vsanRemoteDatastoreIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabled">vsanUnmapEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabled">vsanVerboseModeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostImage`<sup>Required</sup> <a name="hostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImage"></a>

```typescript
public readonly hostImage: ComputeClusterHostImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference">ComputeClusterHostImageOutputReference</a>

---

##### `resourcePoolId`<sup>Required</sup> <a name="resourcePoolId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.resourcePoolId"></a>

```typescript
public readonly resourcePoolId: string;
```

- *Type:* string

---

##### `vsanDiskGroup`<sup>Required</sup> <a name="vsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroup"></a>

```typescript
public readonly vsanDiskGroup: ComputeClusterVsanDiskGroupList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList">ComputeClusterVsanDiskGroupList</a>

---

##### `vsanFaultDomains`<sup>Required</sup> <a name="vsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomains"></a>

```typescript
public readonly vsanFaultDomains: ComputeClusterVsanFaultDomainsList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList">ComputeClusterVsanFaultDomainsList</a>

---

##### `vsanStretchedCluster`<sup>Required</sup> <a name="vsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedCluster"></a>

```typescript
public readonly vsanStretchedCluster: ComputeClusterVsanStretchedClusterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference">ComputeClusterVsanStretchedClusterOutputReference</a>

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `dpmAutomationLevelInput`<sup>Optional</sup> <a name="dpmAutomationLevelInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevelInput"></a>

```typescript
public readonly dpmAutomationLevelInput: string;
```

- *Type:* string

---

##### `dpmEnabledInput`<sup>Optional</sup> <a name="dpmEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabledInput"></a>

```typescript
public readonly dpmEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dpmThresholdInput`<sup>Optional</sup> <a name="dpmThresholdInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThresholdInput"></a>

```typescript
public readonly dpmThresholdInput: number;
```

- *Type:* number

---

##### `drsAdvancedOptionsInput`<sup>Optional</sup> <a name="drsAdvancedOptionsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptionsInput"></a>

```typescript
public readonly drsAdvancedOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `drsAutomationLevelInput`<sup>Optional</sup> <a name="drsAutomationLevelInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevelInput"></a>

```typescript
public readonly drsAutomationLevelInput: string;
```

- *Type:* string

---

##### `drsEnabledInput`<sup>Optional</sup> <a name="drsEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabledInput"></a>

```typescript
public readonly drsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `drsEnablePredictiveDrsInput`<sup>Optional</sup> <a name="drsEnablePredictiveDrsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrsInput"></a>

```typescript
public readonly drsEnablePredictiveDrsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `drsEnableVmOverridesInput`<sup>Optional</sup> <a name="drsEnableVmOverridesInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverridesInput"></a>

```typescript
public readonly drsEnableVmOverridesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `drsMigrationThresholdInput`<sup>Optional</sup> <a name="drsMigrationThresholdInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThresholdInput"></a>

```typescript
public readonly drsMigrationThresholdInput: number;
```

- *Type:* number

---

##### `drsScaleDescendantsSharesInput`<sup>Optional</sup> <a name="drsScaleDescendantsSharesInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsSharesInput"></a>

```typescript
public readonly drsScaleDescendantsSharesInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `forceEvacuateOnDestroyInput`<sup>Optional</sup> <a name="forceEvacuateOnDestroyInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroyInput"></a>

```typescript
public readonly forceEvacuateOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `haAdmissionControlFailoverHostSystemIdsInput`<sup>Optional</sup> <a name="haAdmissionControlFailoverHostSystemIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIdsInput"></a>

```typescript
public readonly haAdmissionControlFailoverHostSystemIdsInput: string[];
```

- *Type:* string[]

---

##### `haAdmissionControlHostFailureToleranceInput`<sup>Optional</sup> <a name="haAdmissionControlHostFailureToleranceInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureToleranceInput"></a>

```typescript
public readonly haAdmissionControlHostFailureToleranceInput: number;
```

- *Type:* number

---

##### `haAdmissionControlPerformanceToleranceInput`<sup>Optional</sup> <a name="haAdmissionControlPerformanceToleranceInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceToleranceInput"></a>

```typescript
public readonly haAdmissionControlPerformanceToleranceInput: number;
```

- *Type:* number

---

##### `haAdmissionControlPolicyInput`<sup>Optional</sup> <a name="haAdmissionControlPolicyInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicyInput"></a>

```typescript
public readonly haAdmissionControlPolicyInput: string;
```

- *Type:* string

---

##### `haAdmissionControlResourcePercentageAutoComputeInput`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageAutoComputeInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoComputeInput"></a>

```typescript
public readonly haAdmissionControlResourcePercentageAutoComputeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `haAdmissionControlResourcePercentageCpuInput`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageCpuInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpuInput"></a>

```typescript
public readonly haAdmissionControlResourcePercentageCpuInput: number;
```

- *Type:* number

---

##### `haAdmissionControlResourcePercentageMemoryInput`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageMemoryInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemoryInput"></a>

```typescript
public readonly haAdmissionControlResourcePercentageMemoryInput: number;
```

- *Type:* number

---

##### `haAdmissionControlSlotPolicyExplicitCpuInput`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyExplicitCpuInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpuInput"></a>

```typescript
public readonly haAdmissionControlSlotPolicyExplicitCpuInput: number;
```

- *Type:* number

---

##### `haAdmissionControlSlotPolicyExplicitMemoryInput`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyExplicitMemoryInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemoryInput"></a>

```typescript
public readonly haAdmissionControlSlotPolicyExplicitMemoryInput: number;
```

- *Type:* number

---

##### `haAdmissionControlSlotPolicyUseExplicitSizeInput`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyUseExplicitSizeInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSizeInput"></a>

```typescript
public readonly haAdmissionControlSlotPolicyUseExplicitSizeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `haAdvancedOptionsInput`<sup>Optional</sup> <a name="haAdvancedOptionsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptionsInput"></a>

```typescript
public readonly haAdvancedOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `haDatastoreApdRecoveryActionInput`<sup>Optional</sup> <a name="haDatastoreApdRecoveryActionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryActionInput"></a>

```typescript
public readonly haDatastoreApdRecoveryActionInput: string;
```

- *Type:* string

---

##### `haDatastoreApdResponseDelayInput`<sup>Optional</sup> <a name="haDatastoreApdResponseDelayInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelayInput"></a>

```typescript
public readonly haDatastoreApdResponseDelayInput: number;
```

- *Type:* number

---

##### `haDatastoreApdResponseInput`<sup>Optional</sup> <a name="haDatastoreApdResponseInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseInput"></a>

```typescript
public readonly haDatastoreApdResponseInput: string;
```

- *Type:* string

---

##### `haDatastorePdlResponseInput`<sup>Optional</sup> <a name="haDatastorePdlResponseInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponseInput"></a>

```typescript
public readonly haDatastorePdlResponseInput: string;
```

- *Type:* string

---

##### `haEnabledInput`<sup>Optional</sup> <a name="haEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabledInput"></a>

```typescript
public readonly haEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `haHeartbeatDatastoreIdsInput`<sup>Optional</sup> <a name="haHeartbeatDatastoreIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIdsInput"></a>

```typescript
public readonly haHeartbeatDatastoreIdsInput: string[];
```

- *Type:* string[]

---

##### `haHeartbeatDatastorePolicyInput`<sup>Optional</sup> <a name="haHeartbeatDatastorePolicyInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicyInput"></a>

```typescript
public readonly haHeartbeatDatastorePolicyInput: string;
```

- *Type:* string

---

##### `haHostIsolationResponseInput`<sup>Optional</sup> <a name="haHostIsolationResponseInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponseInput"></a>

```typescript
public readonly haHostIsolationResponseInput: string;
```

- *Type:* string

---

##### `haHostMonitoringInput`<sup>Optional</sup> <a name="haHostMonitoringInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoringInput"></a>

```typescript
public readonly haHostMonitoringInput: string;
```

- *Type:* string

---

##### `haVmComponentProtectionInput`<sup>Optional</sup> <a name="haVmComponentProtectionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtectionInput"></a>

```typescript
public readonly haVmComponentProtectionInput: string;
```

- *Type:* string

---

##### `haVmDependencyRestartConditionInput`<sup>Optional</sup> <a name="haVmDependencyRestartConditionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartConditionInput"></a>

```typescript
public readonly haVmDependencyRestartConditionInput: string;
```

- *Type:* string

---

##### `haVmFailureIntervalInput`<sup>Optional</sup> <a name="haVmFailureIntervalInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureIntervalInput"></a>

```typescript
public readonly haVmFailureIntervalInput: number;
```

- *Type:* number

---

##### `haVmMaximumFailureWindowInput`<sup>Optional</sup> <a name="haVmMaximumFailureWindowInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindowInput"></a>

```typescript
public readonly haVmMaximumFailureWindowInput: number;
```

- *Type:* number

---

##### `haVmMaximumResetsInput`<sup>Optional</sup> <a name="haVmMaximumResetsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResetsInput"></a>

```typescript
public readonly haVmMaximumResetsInput: number;
```

- *Type:* number

---

##### `haVmMinimumUptimeInput`<sup>Optional</sup> <a name="haVmMinimumUptimeInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptimeInput"></a>

```typescript
public readonly haVmMinimumUptimeInput: number;
```

- *Type:* number

---

##### `haVmMonitoringInput`<sup>Optional</sup> <a name="haVmMonitoringInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoringInput"></a>

```typescript
public readonly haVmMonitoringInput: string;
```

- *Type:* string

---

##### `haVmRestartAdditionalDelayInput`<sup>Optional</sup> <a name="haVmRestartAdditionalDelayInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelayInput"></a>

```typescript
public readonly haVmRestartAdditionalDelayInput: number;
```

- *Type:* number

---

##### `haVmRestartPriorityInput`<sup>Optional</sup> <a name="haVmRestartPriorityInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriorityInput"></a>

```typescript
public readonly haVmRestartPriorityInput: string;
```

- *Type:* string

---

##### `haVmRestartTimeoutInput`<sup>Optional</sup> <a name="haVmRestartTimeoutInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeoutInput"></a>

```typescript
public readonly haVmRestartTimeoutInput: number;
```

- *Type:* number

---

##### `hostClusterExitTimeoutInput`<sup>Optional</sup> <a name="hostClusterExitTimeoutInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeoutInput"></a>

```typescript
public readonly hostClusterExitTimeoutInput: number;
```

- *Type:* number

---

##### `hostImageInput`<sup>Optional</sup> <a name="hostImageInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImageInput"></a>

```typescript
public readonly hostImageInput: ComputeClusterHostImage;
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

---

##### `hostManagedInput`<sup>Optional</sup> <a name="hostManagedInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManagedInput"></a>

```typescript
public readonly hostManagedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSystemIdsInput`<sup>Optional</sup> <a name="hostSystemIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIdsInput"></a>

```typescript
public readonly hostSystemIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `proactiveHaAutomationLevelInput`<sup>Optional</sup> <a name="proactiveHaAutomationLevelInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevelInput"></a>

```typescript
public readonly proactiveHaAutomationLevelInput: string;
```

- *Type:* string

---

##### `proactiveHaEnabledInput`<sup>Optional</sup> <a name="proactiveHaEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabledInput"></a>

```typescript
public readonly proactiveHaEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `proactiveHaModerateRemediationInput`<sup>Optional</sup> <a name="proactiveHaModerateRemediationInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediationInput"></a>

```typescript
public readonly proactiveHaModerateRemediationInput: string;
```

- *Type:* string

---

##### `proactiveHaProviderIdsInput`<sup>Optional</sup> <a name="proactiveHaProviderIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIdsInput"></a>

```typescript
public readonly proactiveHaProviderIdsInput: string[];
```

- *Type:* string[]

---

##### `proactiveHaSevereRemediationInput`<sup>Optional</sup> <a name="proactiveHaSevereRemediationInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediationInput"></a>

```typescript
public readonly proactiveHaSevereRemediationInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `vsanCompressionEnabledInput`<sup>Optional</sup> <a name="vsanCompressionEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabledInput"></a>

```typescript
public readonly vsanCompressionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanDedupEnabledInput`<sup>Optional</sup> <a name="vsanDedupEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabledInput"></a>

```typescript
public readonly vsanDedupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanDiskGroupInput`<sup>Optional</sup> <a name="vsanDiskGroupInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroupInput"></a>

```typescript
public readonly vsanDiskGroupInput: IResolvable | ComputeClusterVsanDiskGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>[]

---

##### `vsanDitEncryptionEnabledInput`<sup>Optional</sup> <a name="vsanDitEncryptionEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabledInput"></a>

```typescript
public readonly vsanDitEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanDitRekeyIntervalInput`<sup>Optional</sup> <a name="vsanDitRekeyIntervalInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyIntervalInput"></a>

```typescript
public readonly vsanDitRekeyIntervalInput: number;
```

- *Type:* number

---

##### `vsanEnabledInput`<sup>Optional</sup> <a name="vsanEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabledInput"></a>

```typescript
public readonly vsanEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanEsaEnabledInput`<sup>Optional</sup> <a name="vsanEsaEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabledInput"></a>

```typescript
public readonly vsanEsaEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanFaultDomainsInput`<sup>Optional</sup> <a name="vsanFaultDomainsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomainsInput"></a>

```typescript
public readonly vsanFaultDomainsInput: IResolvable | ComputeClusterVsanFaultDomains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>[]

---

##### `vsanNetworkDiagnosticModeEnabledInput`<sup>Optional</sup> <a name="vsanNetworkDiagnosticModeEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabledInput"></a>

```typescript
public readonly vsanNetworkDiagnosticModeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanPerformanceEnabledInput`<sup>Optional</sup> <a name="vsanPerformanceEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabledInput"></a>

```typescript
public readonly vsanPerformanceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanRemoteDatastoreIdsInput`<sup>Optional</sup> <a name="vsanRemoteDatastoreIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIdsInput"></a>

```typescript
public readonly vsanRemoteDatastoreIdsInput: string[];
```

- *Type:* string[]

---

##### `vsanStretchedClusterInput`<sup>Optional</sup> <a name="vsanStretchedClusterInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedClusterInput"></a>

```typescript
public readonly vsanStretchedClusterInput: ComputeClusterVsanStretchedCluster;
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

---

##### `vsanUnmapEnabledInput`<sup>Optional</sup> <a name="vsanUnmapEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabledInput"></a>

```typescript
public readonly vsanUnmapEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanVerboseModeEnabledInput`<sup>Optional</sup> <a name="vsanVerboseModeEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabledInput"></a>

```typescript
public readonly vsanVerboseModeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `dpmAutomationLevel`<sup>Required</sup> <a name="dpmAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevel"></a>

```typescript
public readonly dpmAutomationLevel: string;
```

- *Type:* string

---

##### `dpmEnabled`<sup>Required</sup> <a name="dpmEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabled"></a>

```typescript
public readonly dpmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dpmThreshold`<sup>Required</sup> <a name="dpmThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThreshold"></a>

```typescript
public readonly dpmThreshold: number;
```

- *Type:* number

---

##### `drsAdvancedOptions`<sup>Required</sup> <a name="drsAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptions"></a>

```typescript
public readonly drsAdvancedOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `drsAutomationLevel`<sup>Required</sup> <a name="drsAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevel"></a>

```typescript
public readonly drsAutomationLevel: string;
```

- *Type:* string

---

##### `drsEnabled`<sup>Required</sup> <a name="drsEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabled"></a>

```typescript
public readonly drsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `drsEnablePredictiveDrs`<sup>Required</sup> <a name="drsEnablePredictiveDrs" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrs"></a>

```typescript
public readonly drsEnablePredictiveDrs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `drsEnableVmOverrides`<sup>Required</sup> <a name="drsEnableVmOverrides" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverrides"></a>

```typescript
public readonly drsEnableVmOverrides: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `drsMigrationThreshold`<sup>Required</sup> <a name="drsMigrationThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThreshold"></a>

```typescript
public readonly drsMigrationThreshold: number;
```

- *Type:* number

---

##### `drsScaleDescendantsShares`<sup>Required</sup> <a name="drsScaleDescendantsShares" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsShares"></a>

```typescript
public readonly drsScaleDescendantsShares: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `forceEvacuateOnDestroy`<sup>Required</sup> <a name="forceEvacuateOnDestroy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroy"></a>

```typescript
public readonly forceEvacuateOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `haAdmissionControlFailoverHostSystemIds`<sup>Required</sup> <a name="haAdmissionControlFailoverHostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIds"></a>

```typescript
public readonly haAdmissionControlFailoverHostSystemIds: string[];
```

- *Type:* string[]

---

##### `haAdmissionControlHostFailureTolerance`<sup>Required</sup> <a name="haAdmissionControlHostFailureTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureTolerance"></a>

```typescript
public readonly haAdmissionControlHostFailureTolerance: number;
```

- *Type:* number

---

##### `haAdmissionControlPerformanceTolerance`<sup>Required</sup> <a name="haAdmissionControlPerformanceTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceTolerance"></a>

```typescript
public readonly haAdmissionControlPerformanceTolerance: number;
```

- *Type:* number

---

##### `haAdmissionControlPolicy`<sup>Required</sup> <a name="haAdmissionControlPolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicy"></a>

```typescript
public readonly haAdmissionControlPolicy: string;
```

- *Type:* string

---

##### `haAdmissionControlResourcePercentageAutoCompute`<sup>Required</sup> <a name="haAdmissionControlResourcePercentageAutoCompute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoCompute"></a>

```typescript
public readonly haAdmissionControlResourcePercentageAutoCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `haAdmissionControlResourcePercentageCpu`<sup>Required</sup> <a name="haAdmissionControlResourcePercentageCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpu"></a>

```typescript
public readonly haAdmissionControlResourcePercentageCpu: number;
```

- *Type:* number

---

##### `haAdmissionControlResourcePercentageMemory`<sup>Required</sup> <a name="haAdmissionControlResourcePercentageMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemory"></a>

```typescript
public readonly haAdmissionControlResourcePercentageMemory: number;
```

- *Type:* number

---

##### `haAdmissionControlSlotPolicyExplicitCpu`<sup>Required</sup> <a name="haAdmissionControlSlotPolicyExplicitCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpu"></a>

```typescript
public readonly haAdmissionControlSlotPolicyExplicitCpu: number;
```

- *Type:* number

---

##### `haAdmissionControlSlotPolicyExplicitMemory`<sup>Required</sup> <a name="haAdmissionControlSlotPolicyExplicitMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemory"></a>

```typescript
public readonly haAdmissionControlSlotPolicyExplicitMemory: number;
```

- *Type:* number

---

##### `haAdmissionControlSlotPolicyUseExplicitSize`<sup>Required</sup> <a name="haAdmissionControlSlotPolicyUseExplicitSize" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSize"></a>

```typescript
public readonly haAdmissionControlSlotPolicyUseExplicitSize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `haAdvancedOptions`<sup>Required</sup> <a name="haAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptions"></a>

```typescript
public readonly haAdvancedOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `haDatastoreApdRecoveryAction`<sup>Required</sup> <a name="haDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryAction"></a>

```typescript
public readonly haDatastoreApdRecoveryAction: string;
```

- *Type:* string

---

##### `haDatastoreApdResponse`<sup>Required</sup> <a name="haDatastoreApdResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponse"></a>

```typescript
public readonly haDatastoreApdResponse: string;
```

- *Type:* string

---

##### `haDatastoreApdResponseDelay`<sup>Required</sup> <a name="haDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelay"></a>

```typescript
public readonly haDatastoreApdResponseDelay: number;
```

- *Type:* number

---

##### `haDatastorePdlResponse`<sup>Required</sup> <a name="haDatastorePdlResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponse"></a>

```typescript
public readonly haDatastorePdlResponse: string;
```

- *Type:* string

---

##### `haEnabled`<sup>Required</sup> <a name="haEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabled"></a>

```typescript
public readonly haEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `haHeartbeatDatastoreIds`<sup>Required</sup> <a name="haHeartbeatDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIds"></a>

```typescript
public readonly haHeartbeatDatastoreIds: string[];
```

- *Type:* string[]

---

##### `haHeartbeatDatastorePolicy`<sup>Required</sup> <a name="haHeartbeatDatastorePolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicy"></a>

```typescript
public readonly haHeartbeatDatastorePolicy: string;
```

- *Type:* string

---

##### `haHostIsolationResponse`<sup>Required</sup> <a name="haHostIsolationResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponse"></a>

```typescript
public readonly haHostIsolationResponse: string;
```

- *Type:* string

---

##### `haHostMonitoring`<sup>Required</sup> <a name="haHostMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoring"></a>

```typescript
public readonly haHostMonitoring: string;
```

- *Type:* string

---

##### `haVmComponentProtection`<sup>Required</sup> <a name="haVmComponentProtection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtection"></a>

```typescript
public readonly haVmComponentProtection: string;
```

- *Type:* string

---

##### `haVmDependencyRestartCondition`<sup>Required</sup> <a name="haVmDependencyRestartCondition" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartCondition"></a>

```typescript
public readonly haVmDependencyRestartCondition: string;
```

- *Type:* string

---

##### `haVmFailureInterval`<sup>Required</sup> <a name="haVmFailureInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureInterval"></a>

```typescript
public readonly haVmFailureInterval: number;
```

- *Type:* number

---

##### `haVmMaximumFailureWindow`<sup>Required</sup> <a name="haVmMaximumFailureWindow" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindow"></a>

```typescript
public readonly haVmMaximumFailureWindow: number;
```

- *Type:* number

---

##### `haVmMaximumResets`<sup>Required</sup> <a name="haVmMaximumResets" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResets"></a>

```typescript
public readonly haVmMaximumResets: number;
```

- *Type:* number

---

##### `haVmMinimumUptime`<sup>Required</sup> <a name="haVmMinimumUptime" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptime"></a>

```typescript
public readonly haVmMinimumUptime: number;
```

- *Type:* number

---

##### `haVmMonitoring`<sup>Required</sup> <a name="haVmMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoring"></a>

```typescript
public readonly haVmMonitoring: string;
```

- *Type:* string

---

##### `haVmRestartAdditionalDelay`<sup>Required</sup> <a name="haVmRestartAdditionalDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelay"></a>

```typescript
public readonly haVmRestartAdditionalDelay: number;
```

- *Type:* number

---

##### `haVmRestartPriority`<sup>Required</sup> <a name="haVmRestartPriority" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriority"></a>

```typescript
public readonly haVmRestartPriority: string;
```

- *Type:* string

---

##### `haVmRestartTimeout`<sup>Required</sup> <a name="haVmRestartTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeout"></a>

```typescript
public readonly haVmRestartTimeout: number;
```

- *Type:* number

---

##### `hostClusterExitTimeout`<sup>Required</sup> <a name="hostClusterExitTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeout"></a>

```typescript
public readonly hostClusterExitTimeout: number;
```

- *Type:* number

---

##### `hostManaged`<sup>Required</sup> <a name="hostManaged" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManaged"></a>

```typescript
public readonly hostManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSystemIds`<sup>Required</sup> <a name="hostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIds"></a>

```typescript
public readonly hostSystemIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `proactiveHaAutomationLevel`<sup>Required</sup> <a name="proactiveHaAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevel"></a>

```typescript
public readonly proactiveHaAutomationLevel: string;
```

- *Type:* string

---

##### `proactiveHaEnabled`<sup>Required</sup> <a name="proactiveHaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabled"></a>

```typescript
public readonly proactiveHaEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `proactiveHaModerateRemediation`<sup>Required</sup> <a name="proactiveHaModerateRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediation"></a>

```typescript
public readonly proactiveHaModerateRemediation: string;
```

- *Type:* string

---

##### `proactiveHaProviderIds`<sup>Required</sup> <a name="proactiveHaProviderIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIds"></a>

```typescript
public readonly proactiveHaProviderIds: string[];
```

- *Type:* string[]

---

##### `proactiveHaSevereRemediation`<sup>Required</sup> <a name="proactiveHaSevereRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediation"></a>

```typescript
public readonly proactiveHaSevereRemediation: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `vsanCompressionEnabled`<sup>Required</sup> <a name="vsanCompressionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabled"></a>

```typescript
public readonly vsanCompressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanDedupEnabled`<sup>Required</sup> <a name="vsanDedupEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabled"></a>

```typescript
public readonly vsanDedupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanDitEncryptionEnabled`<sup>Required</sup> <a name="vsanDitEncryptionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabled"></a>

```typescript
public readonly vsanDitEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanDitRekeyInterval`<sup>Required</sup> <a name="vsanDitRekeyInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyInterval"></a>

```typescript
public readonly vsanDitRekeyInterval: number;
```

- *Type:* number

---

##### `vsanEnabled`<sup>Required</sup> <a name="vsanEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabled"></a>

```typescript
public readonly vsanEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanEsaEnabled`<sup>Required</sup> <a name="vsanEsaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabled"></a>

```typescript
public readonly vsanEsaEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanNetworkDiagnosticModeEnabled`<sup>Required</sup> <a name="vsanNetworkDiagnosticModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabled"></a>

```typescript
public readonly vsanNetworkDiagnosticModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanPerformanceEnabled`<sup>Required</sup> <a name="vsanPerformanceEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabled"></a>

```typescript
public readonly vsanPerformanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanRemoteDatastoreIds`<sup>Required</sup> <a name="vsanRemoteDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIds"></a>

```typescript
public readonly vsanRemoteDatastoreIds: string[];
```

- *Type:* string[]

---

##### `vsanUnmapEnabled`<sup>Required</sup> <a name="vsanUnmapEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabled"></a>

```typescript
public readonly vsanUnmapEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsanVerboseModeEnabled`<sup>Required</sup> <a name="vsanVerboseModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabled"></a>

```typescript
public readonly vsanVerboseModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterConfig <a name="ComputeClusterConfig" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

const computeClusterConfig: computeCluster.ComputeClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | The managed object ID of the datacenter to put the cluster in. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.name">name</a></code> | <code>string</code> | Name for the new cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmAutomationLevel">dpmAutomationLevel</a></code> | <code>string</code> | The automation level for host power operations in this cluster. Can be one of manual or automated. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmEnabled">dpmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable DPM support for DRS. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmThreshold">dpmThreshold</a></code> | <code>number</code> | A value between 1 and 5 indicating the threshold of load within the cluster that influences host power operations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAdvancedOptions">drsAdvancedOptions</a></code> | <code>{[ key: string ]: string}</code> | Advanced configuration options for DRS and DPM. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAutomationLevel">drsAutomationLevel</a></code> | <code>string</code> | The default automation level for all virtual machines in this cluster. Can be one of manual, partiallyAutomated, or fullyAutomated. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnabled">drsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable DRS for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnablePredictiveDrs">drsEnablePredictiveDrs</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, enables DRS to use data from vRealize Operations Manager to make proactive DRS recommendations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnableVmOverrides">drsEnableVmOverrides</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, allows individual VM overrides within this cluster to be set. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsMigrationThreshold">drsMigrationThreshold</a></code> | <code>number</code> | A value between 1 and 5 indicating the threshold of imbalance tolerated between hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsScaleDescendantsShares">drsScaleDescendantsShares</a></code> | <code>string</code> | Enable scalable shares for all descendants of this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.folder">folder</a></code> | <code>string</code> | The name of the folder to locate the cluster in. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forceEvacuateOnDestroy">forceEvacuateOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Force removal of all hosts in the cluster during destroy and make them standalone hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlFailoverHostSystemIds">haAdmissionControlFailoverHostSystemIds</a></code> | <code>string[]</code> | When ha_admission_control_policy is failoverHosts, this defines the managed object IDs of hosts to use as dedicated failover hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlHostFailureTolerance">haAdmissionControlHostFailureTolerance</a></code> | <code>number</code> | The maximum number of failed hosts that admission control tolerates when making decisions on whether to permit virtual machine operations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPerformanceTolerance">haAdmissionControlPerformanceTolerance</a></code> | <code>number</code> | The percentage of resource reduction that a cluster of VMs can tolerate in case of a failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPolicy">haAdmissionControlPolicy</a></code> | <code>string</code> | The type of admission control policy to use with vSphere HA, which controls whether or not specific VM operations are permitted in the cluster in order to protect the reliability of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageAutoCompute">haAdmissionControlResourcePercentageAutoCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | When ha_admission_control_policy is resourcePercentage, automatically determine available resource percentages by subtracting the average number of host resources represented by the ha_admission_control_host_failure_tolerance setting from the total amount of resources in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageCpu">haAdmissionControlResourcePercentageCpu</a></code> | <code>number</code> | When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of CPU resources in the cluster to reserve for failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageMemory">haAdmissionControlResourcePercentageMemory</a></code> | <code>number</code> | When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of memory resources in the cluster to reserve for failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitCpu">haAdmissionControlSlotPolicyExplicitCpu</a></code> | <code>number</code> | When ha_admission_control_policy is slotPolicy, this controls the user-defined CPU slot size, in MHz. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitMemory">haAdmissionControlSlotPolicyExplicitMemory</a></code> | <code>number</code> | When ha_admission_control_policy is slotPolicy, this controls the user-defined memory slot size, in MB. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyUseExplicitSize">haAdmissionControlSlotPolicyUseExplicitSize</a></code> | <code>boolean \| cdktf.IResolvable</code> | When ha_admission_control_policy is slotPolicy, this setting controls whether or not you wish to supply explicit values to CPU and memory slot sizes. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdvancedOptions">haAdvancedOptions</a></code> | <code>{[ key: string ]: string}</code> | Advanced configuration options for vSphere HA. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdRecoveryAction">haDatastoreApdRecoveryAction</a></code> | <code>string</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines if an APD status on an affected datastore clears in the middle of an APD event. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponse">haDatastoreApdResponse</a></code> | <code>string</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected loss to all paths to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponseDelay">haDatastoreApdResponseDelay</a></code> | <code>number</code> | When ha_vm_component_protection is enabled, controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastorePdlResponse">haDatastorePdlResponse</a></code> | <code>string</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected a permanent device loss to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haEnabled">haEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable vSphere HA for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastoreIds">haHeartbeatDatastoreIds</a></code> | <code>string[]</code> | The list of managed object IDs for preferred datastores to use for HA heartbeating. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastorePolicy">haHeartbeatDatastorePolicy</a></code> | <code>string</code> | The selection policy for HA heartbeat datastores. Can be one of allFeasibleDs, userSelectedDs, or allFeasibleDsWithUserPreference. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostIsolationResponse">haHostIsolationResponse</a></code> | <code>string</code> | The action to take on virtual machines when a host has detected that it has been isolated from the rest of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostMonitoring">haHostMonitoring</a></code> | <code>string</code> | Global setting that controls whether vSphere HA remediates VMs on host failure. Can be one of enabled or disabled. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmComponentProtection">haVmComponentProtection</a></code> | <code>string</code> | Controls vSphere VM component protection for virtual machines in this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmDependencyRestartCondition">haVmDependencyRestartCondition</a></code> | <code>string</code> | The condition used to determine whether or not VMs in a certain restart priority class are online, allowing HA to move on to restarting VMs on the next priority. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmFailureInterval">haVmFailureInterval</a></code> | <code>number</code> | If a heartbeat from a virtual machine is not received within this configured interval, the virtual machine is marked as failed. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumFailureWindow">haVmMaximumFailureWindow</a></code> | <code>number</code> | The length of the reset window in which ha_vm_maximum_resets can operate. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumResets">haVmMaximumResets</a></code> | <code>number</code> | The maximum number of resets that HA will perform to a virtual machine when responding to a failure event. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMinimumUptime">haVmMinimumUptime</a></code> | <code>number</code> | The time, in seconds, that HA waits after powering on a virtual machine before monitoring for heartbeats. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMonitoring">haVmMonitoring</a></code> | <code>string</code> | The type of virtual machine monitoring to use when HA is enabled in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartAdditionalDelay">haVmRestartAdditionalDelay</a></code> | <code>number</code> | Additional delay in seconds after ready condition is met. A VM is considered ready at this point. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartPriority">haVmRestartPriority</a></code> | <code>string</code> | The default restart priority for affected VMs when vSphere detects a host failure. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartTimeout">haVmRestartTimeout</a></code> | <code>number</code> | The maximum time, in seconds, that vSphere HA will wait for virtual machines in one priority to be ready before proceeding with the next priority. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostClusterExitTimeout">hostClusterExitTimeout</a></code> | <code>number</code> | The timeout for each host maintenance mode operation when removing hosts from a cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostImage">hostImage</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | host_image block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostManaged">hostManaged</a></code> | <code>boolean \| cdktf.IResolvable</code> | Must be set if cluster enrollment is managed from host resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostSystemIds">hostSystemIds</a></code> | <code>string[]</code> | The managed object IDs of the hosts to put in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#id ComputeCluster#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaAutomationLevel">proactiveHaAutomationLevel</a></code> | <code>string</code> | The DRS behavior for proactive HA recommendations. Can be one of Automated or Manual. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaEnabled">proactiveHaEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables proactive HA, allowing for vSphere to get HA data from external providers and use DRS to perform remediation. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaModerateRemediation">proactiveHaModerateRemediation</a></code> | <code>string</code> | The configured remediation for moderately degraded hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaProviderIds">proactiveHaProviderIds</a></code> | <code>string[]</code> | The list of IDs for health update providers configured for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaSevereRemediation">proactiveHaSevereRemediation</a></code> | <code>string</code> | The configured remediation for severely degraded hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanCompressionEnabled">vsanCompressionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the vSAN compression service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDedupEnabled">vsanDedupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the vSAN deduplication service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDiskGroup">vsanDiskGroup</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>[]</code> | vsan_disk_group block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitEncryptionEnabled">vsanDitEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the vSAN data-in-transit encryption is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitRekeyInterval">vsanDitRekeyInterval</a></code> | <code>number</code> | When vsan_dit_encryption_enabled is enabled, sets the rekey interval of data-in-transit encryption (in minutes). |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEnabled">vsanEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the vSAN service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEsaEnabled">vsanEsaEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the vSAN ESA service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanFaultDomains">vsanFaultDomains</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>[]</code> | vsan_fault_domains block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanNetworkDiagnosticModeEnabled">vsanNetworkDiagnosticModeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the vSAN network diagnostic mode is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanPerformanceEnabled">vsanPerformanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the vSAN performance service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanRemoteDatastoreIds">vsanRemoteDatastoreIds</a></code> | <code>string[]</code> | The managed object IDs of the vSAN datastore to be mounted on the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanStretchedCluster">vsanStretchedCluster</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | vsan_stretched_cluster block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanUnmapEnabled">vsanUnmapEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the vSAN unmap service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanVerboseModeEnabled">vsanVerboseModeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the vSAN verbose mode is enabled for the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

The managed object ID of the datacenter to put the cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#datacenter_id ComputeCluster#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name for the new cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#name ComputeCluster#name}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#custom_attributes ComputeCluster#custom_attributes}

---

##### `dpmAutomationLevel`<sup>Optional</sup> <a name="dpmAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmAutomationLevel"></a>

```typescript
public readonly dpmAutomationLevel: string;
```

- *Type:* string

The automation level for host power operations in this cluster. Can be one of manual or automated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#dpm_automation_level ComputeCluster#dpm_automation_level}

---

##### `dpmEnabled`<sup>Optional</sup> <a name="dpmEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmEnabled"></a>

```typescript
public readonly dpmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable DPM support for DRS.

This allows you to dynamically control the power of hosts depending on the needs of virtual machines in the cluster. Requires that DRS be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#dpm_enabled ComputeCluster#dpm_enabled}

---

##### `dpmThreshold`<sup>Optional</sup> <a name="dpmThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmThreshold"></a>

```typescript
public readonly dpmThreshold: number;
```

- *Type:* number

A value between 1 and 5 indicating the threshold of load within the cluster that influences host power operations.

This affects both power on and power off operations - a lower setting will tolerate more of a surplus/deficit than a higher setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#dpm_threshold ComputeCluster#dpm_threshold}

---

##### `drsAdvancedOptions`<sup>Optional</sup> <a name="drsAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAdvancedOptions"></a>

```typescript
public readonly drsAdvancedOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Advanced configuration options for DRS and DPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#drs_advanced_options ComputeCluster#drs_advanced_options}

---

##### `drsAutomationLevel`<sup>Optional</sup> <a name="drsAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAutomationLevel"></a>

```typescript
public readonly drsAutomationLevel: string;
```

- *Type:* string

The default automation level for all virtual machines in this cluster. Can be one of manual, partiallyAutomated, or fullyAutomated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#drs_automation_level ComputeCluster#drs_automation_level}

---

##### `drsEnabled`<sup>Optional</sup> <a name="drsEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnabled"></a>

```typescript
public readonly drsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable DRS for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#drs_enabled ComputeCluster#drs_enabled}

---

##### `drsEnablePredictiveDrs`<sup>Optional</sup> <a name="drsEnablePredictiveDrs" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnablePredictiveDrs"></a>

```typescript
public readonly drsEnablePredictiveDrs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, enables DRS to use data from vRealize Operations Manager to make proactive DRS recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#drs_enable_predictive_drs ComputeCluster#drs_enable_predictive_drs}

---

##### `drsEnableVmOverrides`<sup>Optional</sup> <a name="drsEnableVmOverrides" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnableVmOverrides"></a>

```typescript
public readonly drsEnableVmOverrides: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, allows individual VM overrides within this cluster to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#drs_enable_vm_overrides ComputeCluster#drs_enable_vm_overrides}

---

##### `drsMigrationThreshold`<sup>Optional</sup> <a name="drsMigrationThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsMigrationThreshold"></a>

```typescript
public readonly drsMigrationThreshold: number;
```

- *Type:* number

A value between 1 and 5 indicating the threshold of imbalance tolerated between hosts.

A lower setting will tolerate more imbalance while a higher setting will tolerate less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#drs_migration_threshold ComputeCluster#drs_migration_threshold}

---

##### `drsScaleDescendantsShares`<sup>Optional</sup> <a name="drsScaleDescendantsShares" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsScaleDescendantsShares"></a>

```typescript
public readonly drsScaleDescendantsShares: string;
```

- *Type:* string

Enable scalable shares for all descendants of this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#drs_scale_descendants_shares ComputeCluster#drs_scale_descendants_shares}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The name of the folder to locate the cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#folder ComputeCluster#folder}

---

##### `forceEvacuateOnDestroy`<sup>Optional</sup> <a name="forceEvacuateOnDestroy" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forceEvacuateOnDestroy"></a>

```typescript
public readonly forceEvacuateOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Force removal of all hosts in the cluster during destroy and make them standalone hosts.

Use of this flag mainly exists for testing and is not recommended in normal use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#force_evacuate_on_destroy ComputeCluster#force_evacuate_on_destroy}

---

##### `haAdmissionControlFailoverHostSystemIds`<sup>Optional</sup> <a name="haAdmissionControlFailoverHostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlFailoverHostSystemIds"></a>

```typescript
public readonly haAdmissionControlFailoverHostSystemIds: string[];
```

- *Type:* string[]

When ha_admission_control_policy is failoverHosts, this defines the managed object IDs of hosts to use as dedicated failover hosts.

These hosts are kept as available as possible - admission control will block access to the host, and DRS will ignore the host when making recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_admission_control_failover_host_system_ids ComputeCluster#ha_admission_control_failover_host_system_ids}

---

##### `haAdmissionControlHostFailureTolerance`<sup>Optional</sup> <a name="haAdmissionControlHostFailureTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlHostFailureTolerance"></a>

```typescript
public readonly haAdmissionControlHostFailureTolerance: number;
```

- *Type:* number

The maximum number of failed hosts that admission control tolerates when making decisions on whether to permit virtual machine operations.

The maximum is one less than the number of hosts in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_admission_control_host_failure_tolerance ComputeCluster#ha_admission_control_host_failure_tolerance}

---

##### `haAdmissionControlPerformanceTolerance`<sup>Optional</sup> <a name="haAdmissionControlPerformanceTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPerformanceTolerance"></a>

```typescript
public readonly haAdmissionControlPerformanceTolerance: number;
```

- *Type:* number

The percentage of resource reduction that a cluster of VMs can tolerate in case of a failover.

A value of 0 produces warnings only, whereas a value of 100 disables the setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_admission_control_performance_tolerance ComputeCluster#ha_admission_control_performance_tolerance}

---

##### `haAdmissionControlPolicy`<sup>Optional</sup> <a name="haAdmissionControlPolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPolicy"></a>

```typescript
public readonly haAdmissionControlPolicy: string;
```

- *Type:* string

The type of admission control policy to use with vSphere HA, which controls whether or not specific VM operations are permitted in the cluster in order to protect the reliability of the cluster.

Can be one of resourcePercentage, slotPolicy, failoverHosts, or disabled. Note that disabling admission control is not recommended and can lead to service issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_admission_control_policy ComputeCluster#ha_admission_control_policy}

---

##### `haAdmissionControlResourcePercentageAutoCompute`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageAutoCompute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageAutoCompute"></a>

```typescript
public readonly haAdmissionControlResourcePercentageAutoCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When ha_admission_control_policy is resourcePercentage, automatically determine available resource percentages by subtracting the average number of host resources represented by the ha_admission_control_host_failure_tolerance setting from the total amount of resources in the cluster.

Disable to supply user-defined values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_admission_control_resource_percentage_auto_compute ComputeCluster#ha_admission_control_resource_percentage_auto_compute}

---

##### `haAdmissionControlResourcePercentageCpu`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageCpu"></a>

```typescript
public readonly haAdmissionControlResourcePercentageCpu: number;
```

- *Type:* number

When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of CPU resources in the cluster to reserve for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_admission_control_resource_percentage_cpu ComputeCluster#ha_admission_control_resource_percentage_cpu}

---

##### `haAdmissionControlResourcePercentageMemory`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageMemory"></a>

```typescript
public readonly haAdmissionControlResourcePercentageMemory: number;
```

- *Type:* number

When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of memory resources in the cluster to reserve for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_admission_control_resource_percentage_memory ComputeCluster#ha_admission_control_resource_percentage_memory}

---

##### `haAdmissionControlSlotPolicyExplicitCpu`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyExplicitCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitCpu"></a>

```typescript
public readonly haAdmissionControlSlotPolicyExplicitCpu: number;
```

- *Type:* number

When ha_admission_control_policy is slotPolicy, this controls the user-defined CPU slot size, in MHz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_cpu ComputeCluster#ha_admission_control_slot_policy_explicit_cpu}

---

##### `haAdmissionControlSlotPolicyExplicitMemory`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyExplicitMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitMemory"></a>

```typescript
public readonly haAdmissionControlSlotPolicyExplicitMemory: number;
```

- *Type:* number

When ha_admission_control_policy is slotPolicy, this controls the user-defined memory slot size, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_memory ComputeCluster#ha_admission_control_slot_policy_explicit_memory}

---

##### `haAdmissionControlSlotPolicyUseExplicitSize`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyUseExplicitSize" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyUseExplicitSize"></a>

```typescript
public readonly haAdmissionControlSlotPolicyUseExplicitSize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When ha_admission_control_policy is slotPolicy, this setting controls whether or not you wish to supply explicit values to CPU and memory slot sizes.

The default is to gather a automatic average based on all powered-on virtual machines currently in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_admission_control_slot_policy_use_explicit_size ComputeCluster#ha_admission_control_slot_policy_use_explicit_size}

---

##### `haAdvancedOptions`<sup>Optional</sup> <a name="haAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdvancedOptions"></a>

```typescript
public readonly haAdvancedOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Advanced configuration options for vSphere HA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_advanced_options ComputeCluster#ha_advanced_options}

---

##### `haDatastoreApdRecoveryAction`<sup>Optional</sup> <a name="haDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdRecoveryAction"></a>

```typescript
public readonly haDatastoreApdRecoveryAction: string;
```

- *Type:* string

When ha_vm_component_protection is enabled, controls the action to take on virtual machines if an APD status on an affected datastore clears in the middle of an APD event.

Can be one of none or reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_datastore_apd_recovery_action ComputeCluster#ha_datastore_apd_recovery_action}

---

##### `haDatastoreApdResponse`<sup>Optional</sup> <a name="haDatastoreApdResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponse"></a>

```typescript
public readonly haDatastoreApdResponse: string;
```

- *Type:* string

When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected loss to all paths to a relevant datastore.

Can be one of disabled, warning, restartConservative, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_datastore_apd_response ComputeCluster#ha_datastore_apd_response}

---

##### `haDatastoreApdResponseDelay`<sup>Optional</sup> <a name="haDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponseDelay"></a>

```typescript
public readonly haDatastoreApdResponseDelay: number;
```

- *Type:* number

When ha_vm_component_protection is enabled, controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_datastore_apd_response_delay ComputeCluster#ha_datastore_apd_response_delay}

---

##### `haDatastorePdlResponse`<sup>Optional</sup> <a name="haDatastorePdlResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastorePdlResponse"></a>

```typescript
public readonly haDatastorePdlResponse: string;
```

- *Type:* string

When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected a permanent device loss to a relevant datastore.

Can be one of disabled, warning, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_datastore_pdl_response ComputeCluster#ha_datastore_pdl_response}

---

##### `haEnabled`<sup>Optional</sup> <a name="haEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haEnabled"></a>

```typescript
public readonly haEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable vSphere HA for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_enabled ComputeCluster#ha_enabled}

---

##### `haHeartbeatDatastoreIds`<sup>Optional</sup> <a name="haHeartbeatDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastoreIds"></a>

```typescript
public readonly haHeartbeatDatastoreIds: string[];
```

- *Type:* string[]

The list of managed object IDs for preferred datastores to use for HA heartbeating.

This setting is only useful when ha_heartbeat_datastore_policy is set to either userSelectedDs or allFeasibleDsWithUserPreference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_heartbeat_datastore_ids ComputeCluster#ha_heartbeat_datastore_ids}

---

##### `haHeartbeatDatastorePolicy`<sup>Optional</sup> <a name="haHeartbeatDatastorePolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastorePolicy"></a>

```typescript
public readonly haHeartbeatDatastorePolicy: string;
```

- *Type:* string

The selection policy for HA heartbeat datastores. Can be one of allFeasibleDs, userSelectedDs, or allFeasibleDsWithUserPreference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_heartbeat_datastore_policy ComputeCluster#ha_heartbeat_datastore_policy}

---

##### `haHostIsolationResponse`<sup>Optional</sup> <a name="haHostIsolationResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostIsolationResponse"></a>

```typescript
public readonly haHostIsolationResponse: string;
```

- *Type:* string

The action to take on virtual machines when a host has detected that it has been isolated from the rest of the cluster.

Can be one of none, powerOff, or shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_host_isolation_response ComputeCluster#ha_host_isolation_response}

---

##### `haHostMonitoring`<sup>Optional</sup> <a name="haHostMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostMonitoring"></a>

```typescript
public readonly haHostMonitoring: string;
```

- *Type:* string

Global setting that controls whether vSphere HA remediates VMs on host failure. Can be one of enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_host_monitoring ComputeCluster#ha_host_monitoring}

---

##### `haVmComponentProtection`<sup>Optional</sup> <a name="haVmComponentProtection" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmComponentProtection"></a>

```typescript
public readonly haVmComponentProtection: string;
```

- *Type:* string

Controls vSphere VM component protection for virtual machines in this cluster.

This allows vSphere HA to react to failures between hosts and specific virtual machine components, such as datastores. Can be one of enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_vm_component_protection ComputeCluster#ha_vm_component_protection}

---

##### `haVmDependencyRestartCondition`<sup>Optional</sup> <a name="haVmDependencyRestartCondition" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmDependencyRestartCondition"></a>

```typescript
public readonly haVmDependencyRestartCondition: string;
```

- *Type:* string

The condition used to determine whether or not VMs in a certain restart priority class are online, allowing HA to move on to restarting VMs on the next priority.

Can be one of none, poweredOn, guestHbStatusGreen, or appHbStatusGreen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_vm_dependency_restart_condition ComputeCluster#ha_vm_dependency_restart_condition}

---

##### `haVmFailureInterval`<sup>Optional</sup> <a name="haVmFailureInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmFailureInterval"></a>

```typescript
public readonly haVmFailureInterval: number;
```

- *Type:* number

If a heartbeat from a virtual machine is not received within this configured interval, the virtual machine is marked as failed.

The value is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_vm_failure_interval ComputeCluster#ha_vm_failure_interval}

---

##### `haVmMaximumFailureWindow`<sup>Optional</sup> <a name="haVmMaximumFailureWindow" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumFailureWindow"></a>

```typescript
public readonly haVmMaximumFailureWindow: number;
```

- *Type:* number

The length of the reset window in which ha_vm_maximum_resets can operate.

When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_vm_maximum_failure_window ComputeCluster#ha_vm_maximum_failure_window}

---

##### `haVmMaximumResets`<sup>Optional</sup> <a name="haVmMaximumResets" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumResets"></a>

```typescript
public readonly haVmMaximumResets: number;
```

- *Type:* number

The maximum number of resets that HA will perform to a virtual machine when responding to a failure event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_vm_maximum_resets ComputeCluster#ha_vm_maximum_resets}

---

##### `haVmMinimumUptime`<sup>Optional</sup> <a name="haVmMinimumUptime" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMinimumUptime"></a>

```typescript
public readonly haVmMinimumUptime: number;
```

- *Type:* number

The time, in seconds, that HA waits after powering on a virtual machine before monitoring for heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_vm_minimum_uptime ComputeCluster#ha_vm_minimum_uptime}

---

##### `haVmMonitoring`<sup>Optional</sup> <a name="haVmMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMonitoring"></a>

```typescript
public readonly haVmMonitoring: string;
```

- *Type:* string

The type of virtual machine monitoring to use when HA is enabled in the cluster.

Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_vm_monitoring ComputeCluster#ha_vm_monitoring}

---

##### `haVmRestartAdditionalDelay`<sup>Optional</sup> <a name="haVmRestartAdditionalDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartAdditionalDelay"></a>

```typescript
public readonly haVmRestartAdditionalDelay: number;
```

- *Type:* number

Additional delay in seconds after ready condition is met. A VM is considered ready at this point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_vm_restart_additional_delay ComputeCluster#ha_vm_restart_additional_delay}

---

##### `haVmRestartPriority`<sup>Optional</sup> <a name="haVmRestartPriority" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartPriority"></a>

```typescript
public readonly haVmRestartPriority: string;
```

- *Type:* string

The default restart priority for affected VMs when vSphere detects a host failure.

Can be one of lowest, low, medium, high, or highest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_vm_restart_priority ComputeCluster#ha_vm_restart_priority}

---

##### `haVmRestartTimeout`<sup>Optional</sup> <a name="haVmRestartTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartTimeout"></a>

```typescript
public readonly haVmRestartTimeout: number;
```

- *Type:* number

The maximum time, in seconds, that vSphere HA will wait for virtual machines in one priority to be ready before proceeding with the next priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#ha_vm_restart_timeout ComputeCluster#ha_vm_restart_timeout}

---

##### `hostClusterExitTimeout`<sup>Optional</sup> <a name="hostClusterExitTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostClusterExitTimeout"></a>

```typescript
public readonly hostClusterExitTimeout: number;
```

- *Type:* number

The timeout for each host maintenance mode operation when removing hosts from a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#host_cluster_exit_timeout ComputeCluster#host_cluster_exit_timeout}

---

##### `hostImage`<sup>Optional</sup> <a name="hostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostImage"></a>

```typescript
public readonly hostImage: ComputeClusterHostImage;
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

host_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#host_image ComputeCluster#host_image}

---

##### `hostManaged`<sup>Optional</sup> <a name="hostManaged" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostManaged"></a>

```typescript
public readonly hostManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Must be set if cluster enrollment is managed from host resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#host_managed ComputeCluster#host_managed}

---

##### `hostSystemIds`<sup>Optional</sup> <a name="hostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostSystemIds"></a>

```typescript
public readonly hostSystemIds: string[];
```

- *Type:* string[]

The managed object IDs of the hosts to put in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#host_system_ids ComputeCluster#host_system_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#id ComputeCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `proactiveHaAutomationLevel`<sup>Optional</sup> <a name="proactiveHaAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaAutomationLevel"></a>

```typescript
public readonly proactiveHaAutomationLevel: string;
```

- *Type:* string

The DRS behavior for proactive HA recommendations. Can be one of Automated or Manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#proactive_ha_automation_level ComputeCluster#proactive_ha_automation_level}

---

##### `proactiveHaEnabled`<sup>Optional</sup> <a name="proactiveHaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaEnabled"></a>

```typescript
public readonly proactiveHaEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables proactive HA, allowing for vSphere to get HA data from external providers and use DRS to perform remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#proactive_ha_enabled ComputeCluster#proactive_ha_enabled}

---

##### `proactiveHaModerateRemediation`<sup>Optional</sup> <a name="proactiveHaModerateRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaModerateRemediation"></a>

```typescript
public readonly proactiveHaModerateRemediation: string;
```

- *Type:* string

The configured remediation for moderately degraded hosts.

Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to MaintenanceMode when proactive_ha_severe_remediation is set to QuarantineMode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#proactive_ha_moderate_remediation ComputeCluster#proactive_ha_moderate_remediation}

---

##### `proactiveHaProviderIds`<sup>Optional</sup> <a name="proactiveHaProviderIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaProviderIds"></a>

```typescript
public readonly proactiveHaProviderIds: string[];
```

- *Type:* string[]

The list of IDs for health update providers configured for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#proactive_ha_provider_ids ComputeCluster#proactive_ha_provider_ids}

---

##### `proactiveHaSevereRemediation`<sup>Optional</sup> <a name="proactiveHaSevereRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaSevereRemediation"></a>

```typescript
public readonly proactiveHaSevereRemediation: string;
```

- *Type:* string

The configured remediation for severely degraded hosts.

Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to QuarantineMode when proactive_ha_moderate_remediation is set to MaintenanceMode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#proactive_ha_severe_remediation ComputeCluster#proactive_ha_severe_remediation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#tags ComputeCluster#tags}

---

##### `vsanCompressionEnabled`<sup>Optional</sup> <a name="vsanCompressionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanCompressionEnabled"></a>

```typescript
public readonly vsanCompressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the vSAN compression service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_compression_enabled ComputeCluster#vsan_compression_enabled}

---

##### `vsanDedupEnabled`<sup>Optional</sup> <a name="vsanDedupEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDedupEnabled"></a>

```typescript
public readonly vsanDedupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the vSAN deduplication service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_dedup_enabled ComputeCluster#vsan_dedup_enabled}

---

##### `vsanDiskGroup`<sup>Optional</sup> <a name="vsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDiskGroup"></a>

```typescript
public readonly vsanDiskGroup: IResolvable | ComputeClusterVsanDiskGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>[]

vsan_disk_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_disk_group ComputeCluster#vsan_disk_group}

---

##### `vsanDitEncryptionEnabled`<sup>Optional</sup> <a name="vsanDitEncryptionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitEncryptionEnabled"></a>

```typescript
public readonly vsanDitEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the vSAN data-in-transit encryption is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_dit_encryption_enabled ComputeCluster#vsan_dit_encryption_enabled}

---

##### `vsanDitRekeyInterval`<sup>Optional</sup> <a name="vsanDitRekeyInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitRekeyInterval"></a>

```typescript
public readonly vsanDitRekeyInterval: number;
```

- *Type:* number

When vsan_dit_encryption_enabled is enabled, sets the rekey interval of data-in-transit encryption (in minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_dit_rekey_interval ComputeCluster#vsan_dit_rekey_interval}

---

##### `vsanEnabled`<sup>Optional</sup> <a name="vsanEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEnabled"></a>

```typescript
public readonly vsanEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the vSAN service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_enabled ComputeCluster#vsan_enabled}

---

##### `vsanEsaEnabled`<sup>Optional</sup> <a name="vsanEsaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEsaEnabled"></a>

```typescript
public readonly vsanEsaEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the vSAN ESA service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_esa_enabled ComputeCluster#vsan_esa_enabled}

---

##### `vsanFaultDomains`<sup>Optional</sup> <a name="vsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanFaultDomains"></a>

```typescript
public readonly vsanFaultDomains: IResolvable | ComputeClusterVsanFaultDomains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>[]

vsan_fault_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_fault_domains ComputeCluster#vsan_fault_domains}

---

##### `vsanNetworkDiagnosticModeEnabled`<sup>Optional</sup> <a name="vsanNetworkDiagnosticModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanNetworkDiagnosticModeEnabled"></a>

```typescript
public readonly vsanNetworkDiagnosticModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the vSAN network diagnostic mode is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_network_diagnostic_mode_enabled ComputeCluster#vsan_network_diagnostic_mode_enabled}

---

##### `vsanPerformanceEnabled`<sup>Optional</sup> <a name="vsanPerformanceEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanPerformanceEnabled"></a>

```typescript
public readonly vsanPerformanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the vSAN performance service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_performance_enabled ComputeCluster#vsan_performance_enabled}

---

##### `vsanRemoteDatastoreIds`<sup>Optional</sup> <a name="vsanRemoteDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanRemoteDatastoreIds"></a>

```typescript
public readonly vsanRemoteDatastoreIds: string[];
```

- *Type:* string[]

The managed object IDs of the vSAN datastore to be mounted on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_remote_datastore_ids ComputeCluster#vsan_remote_datastore_ids}

---

##### `vsanStretchedCluster`<sup>Optional</sup> <a name="vsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanStretchedCluster"></a>

```typescript
public readonly vsanStretchedCluster: ComputeClusterVsanStretchedCluster;
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

vsan_stretched_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_stretched_cluster ComputeCluster#vsan_stretched_cluster}

---

##### `vsanUnmapEnabled`<sup>Optional</sup> <a name="vsanUnmapEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanUnmapEnabled"></a>

```typescript
public readonly vsanUnmapEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the vSAN unmap service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_unmap_enabled ComputeCluster#vsan_unmap_enabled}

---

##### `vsanVerboseModeEnabled`<sup>Optional</sup> <a name="vsanVerboseModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanVerboseModeEnabled"></a>

```typescript
public readonly vsanVerboseModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the vSAN verbose mode is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#vsan_verbose_mode_enabled ComputeCluster#vsan_verbose_mode_enabled}

---

### ComputeClusterHostImage <a name="ComputeClusterHostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

const computeClusterHostImage: computeCluster.ComputeClusterHostImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.component">component</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>[]</code> | component block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.esxVersion">esxVersion</a></code> | <code>string</code> | The ESXi version which the image is based on. |

---

##### `component`<sup>Optional</sup> <a name="component" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.component"></a>

```typescript
public readonly component: IResolvable | ComputeClusterHostImageComponent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>[]

component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#component ComputeCluster#component}

---

##### `esxVersion`<sup>Optional</sup> <a name="esxVersion" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.esxVersion"></a>

```typescript
public readonly esxVersion: string;
```

- *Type:* string

The ESXi version which the image is based on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#esx_version ComputeCluster#esx_version}

---

### ComputeClusterHostImageComponent <a name="ComputeClusterHostImageComponent" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

const computeClusterHostImageComponent: computeCluster.ComputeClusterHostImageComponent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.key">key</a></code> | <code>string</code> | The identifier for the component. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.version">version</a></code> | <code>string</code> | The version to use. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The identifier for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#key ComputeCluster#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#version ComputeCluster#version}

---

### ComputeClusterVsanDiskGroup <a name="ComputeClusterVsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

const computeClusterVsanDiskGroup: computeCluster.ComputeClusterVsanDiskGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.cache">cache</a></code> | <code>string</code> | Cache disk. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.storage">storage</a></code> | <code>string[]</code> | List of storage disks. |

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.cache"></a>

```typescript
public readonly cache: string;
```

- *Type:* string

Cache disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#cache ComputeCluster#cache}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.storage"></a>

```typescript
public readonly storage: string[];
```

- *Type:* string[]

List of storage disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#storage ComputeCluster#storage}

---

### ComputeClusterVsanFaultDomains <a name="ComputeClusterVsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

const computeClusterVsanFaultDomains: computeCluster.ComputeClusterVsanFaultDomains = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains.property.faultDomain">faultDomain</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>[]</code> | fault_domain block. |

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains.property.faultDomain"></a>

```typescript
public readonly faultDomain: IResolvable | ComputeClusterVsanFaultDomainsFaultDomain[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>[]

fault_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#fault_domain ComputeCluster#fault_domain}

---

### ComputeClusterVsanFaultDomainsFaultDomain <a name="ComputeClusterVsanFaultDomainsFaultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

const computeClusterVsanFaultDomainsFaultDomain: computeCluster.ComputeClusterVsanFaultDomainsFaultDomain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.hostIds">hostIds</a></code> | <code>string[]</code> | The managed object IDs of the hosts to put in the fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.name">name</a></code> | <code>string</code> | The name of fault domain. |

---

##### `hostIds`<sup>Required</sup> <a name="hostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.hostIds"></a>

```typescript
public readonly hostIds: string[];
```

- *Type:* string[]

The managed object IDs of the hosts to put in the fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#host_ids ComputeCluster#host_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#name ComputeCluster#name}

---

### ComputeClusterVsanStretchedCluster <a name="ComputeClusterVsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

const computeClusterVsanStretchedCluster: computeCluster.ComputeClusterVsanStretchedCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainHostIds">preferredFaultDomainHostIds</a></code> | <code>string[]</code> | The managed object IDs of the hosts to put in the first fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainHostIds">secondaryFaultDomainHostIds</a></code> | <code>string[]</code> | The managed object IDs of the hosts to put in the second fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.witnessNode">witnessNode</a></code> | <code>string</code> | The managed object IDs of the host selected as witness node when enable stretched cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainName">preferredFaultDomainName</a></code> | <code>string</code> | The name of prepferred fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainName">secondaryFaultDomainName</a></code> | <code>string</code> | The name of secondary fault domain. |

---

##### `preferredFaultDomainHostIds`<sup>Required</sup> <a name="preferredFaultDomainHostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainHostIds"></a>

```typescript
public readonly preferredFaultDomainHostIds: string[];
```

- *Type:* string[]

The managed object IDs of the hosts to put in the first fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#preferred_fault_domain_host_ids ComputeCluster#preferred_fault_domain_host_ids}

---

##### `secondaryFaultDomainHostIds`<sup>Required</sup> <a name="secondaryFaultDomainHostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainHostIds"></a>

```typescript
public readonly secondaryFaultDomainHostIds: string[];
```

- *Type:* string[]

The managed object IDs of the hosts to put in the second fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#secondary_fault_domain_host_ids ComputeCluster#secondary_fault_domain_host_ids}

---

##### `witnessNode`<sup>Required</sup> <a name="witnessNode" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.witnessNode"></a>

```typescript
public readonly witnessNode: string;
```

- *Type:* string

The managed object IDs of the host selected as witness node when enable stretched cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#witness_node ComputeCluster#witness_node}

---

##### `preferredFaultDomainName`<sup>Optional</sup> <a name="preferredFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainName"></a>

```typescript
public readonly preferredFaultDomainName: string;
```

- *Type:* string

The name of prepferred fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#preferred_fault_domain_name ComputeCluster#preferred_fault_domain_name}

---

##### `secondaryFaultDomainName`<sup>Optional</sup> <a name="secondaryFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainName"></a>

```typescript
public readonly secondaryFaultDomainName: string;
```

- *Type:* string

The name of secondary fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/compute_cluster#secondary_fault_domain_name ComputeCluster#secondary_fault_domain_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeClusterHostImageComponentList <a name="ComputeClusterHostImageComponentList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

new computeCluster.ComputeClusterHostImageComponentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.get"></a>

```typescript
public get(index: number): ComputeClusterHostImageComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeClusterHostImageComponent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>[]

---


### ComputeClusterHostImageComponentOutputReference <a name="ComputeClusterHostImageComponentOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

new computeCluster.ComputeClusterHostImageComponentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeClusterHostImageComponent;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>

---


### ComputeClusterHostImageOutputReference <a name="ComputeClusterHostImageOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

new computeCluster.ComputeClusterHostImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.putComponent">putComponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetComponent">resetComponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetEsxVersion">resetEsxVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComponent` <a name="putComponent" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.putComponent"></a>

```typescript
public putComponent(value: IResolvable | ComputeClusterHostImageComponent[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.putComponent.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>[]

---

##### `resetComponent` <a name="resetComponent" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetComponent"></a>

```typescript
public resetComponent(): void
```

##### `resetEsxVersion` <a name="resetEsxVersion" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetEsxVersion"></a>

```typescript
public resetEsxVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.component">component</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList">ComputeClusterHostImageComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.componentInput">componentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersionInput">esxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersion">esxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.component"></a>

```typescript
public readonly component: ComputeClusterHostImageComponentList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList">ComputeClusterHostImageComponentList</a>

---

##### `componentInput`<sup>Optional</sup> <a name="componentInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.componentInput"></a>

```typescript
public readonly componentInput: IResolvable | ComputeClusterHostImageComponent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>[]

---

##### `esxVersionInput`<sup>Optional</sup> <a name="esxVersionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersionInput"></a>

```typescript
public readonly esxVersionInput: string;
```

- *Type:* string

---

##### `esxVersion`<sup>Required</sup> <a name="esxVersion" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersion"></a>

```typescript
public readonly esxVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeClusterHostImage;
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

---


### ComputeClusterVsanDiskGroupList <a name="ComputeClusterVsanDiskGroupList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

new computeCluster.ComputeClusterVsanDiskGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.get"></a>

```typescript
public get(index: number): ComputeClusterVsanDiskGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeClusterVsanDiskGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>[]

---


### ComputeClusterVsanDiskGroupOutputReference <a name="ComputeClusterVsanDiskGroupOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

new computeCluster.ComputeClusterVsanDiskGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetCache">resetCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetStorage">resetStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCache` <a name="resetCache" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetCache"></a>

```typescript
public resetCache(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetStorage"></a>

```typescript
public resetStorage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cacheInput">cacheInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storageInput">storageInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cache">cache</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storage">storage</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheInput`<sup>Optional</sup> <a name="cacheInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cacheInput"></a>

```typescript
public readonly cacheInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storageInput"></a>

```typescript
public readonly storageInput: string[];
```

- *Type:* string[]

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cache"></a>

```typescript
public readonly cache: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storage"></a>

```typescript
public readonly storage: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeClusterVsanDiskGroup;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>

---


### ComputeClusterVsanFaultDomainsFaultDomainList <a name="ComputeClusterVsanFaultDomainsFaultDomainList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

new computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.get"></a>

```typescript
public get(index: number): ComputeClusterVsanFaultDomainsFaultDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeClusterVsanFaultDomainsFaultDomain[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>[]

---


### ComputeClusterVsanFaultDomainsFaultDomainOutputReference <a name="ComputeClusterVsanFaultDomainsFaultDomainOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

new computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIdsInput">hostIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIds">hostIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostIdsInput`<sup>Optional</sup> <a name="hostIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIdsInput"></a>

```typescript
public readonly hostIdsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `hostIds`<sup>Required</sup> <a name="hostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIds"></a>

```typescript
public readonly hostIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeClusterVsanFaultDomainsFaultDomain;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>

---


### ComputeClusterVsanFaultDomainsList <a name="ComputeClusterVsanFaultDomainsList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

new computeCluster.ComputeClusterVsanFaultDomainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.get"></a>

```typescript
public get(index: number): ComputeClusterVsanFaultDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeClusterVsanFaultDomains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>[]

---


### ComputeClusterVsanFaultDomainsOutputReference <a name="ComputeClusterVsanFaultDomainsOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

new computeCluster.ComputeClusterVsanFaultDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.putFaultDomain">putFaultDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resetFaultDomain">resetFaultDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFaultDomain` <a name="putFaultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.putFaultDomain"></a>

```typescript
public putFaultDomain(value: IResolvable | ComputeClusterVsanFaultDomainsFaultDomain[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.putFaultDomain.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>[]

---

##### `resetFaultDomain` <a name="resetFaultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resetFaultDomain"></a>

```typescript
public resetFaultDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomain">faultDomain</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList">ComputeClusterVsanFaultDomainsFaultDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomainInput">faultDomainInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: ComputeClusterVsanFaultDomainsFaultDomainList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList">ComputeClusterVsanFaultDomainsFaultDomainList</a>

---

##### `faultDomainInput`<sup>Optional</sup> <a name="faultDomainInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomainInput"></a>

```typescript
public readonly faultDomainInput: IResolvable | ComputeClusterVsanFaultDomainsFaultDomain[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeClusterVsanFaultDomains;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>

---


### ComputeClusterVsanStretchedClusterOutputReference <a name="ComputeClusterVsanStretchedClusterOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer"></a>

```typescript
import { computeCluster } from '@cdktf/provider-vsphere'

new computeCluster.ComputeClusterVsanStretchedClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetPreferredFaultDomainName">resetPreferredFaultDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetSecondaryFaultDomainName">resetSecondaryFaultDomainName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreferredFaultDomainName` <a name="resetPreferredFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetPreferredFaultDomainName"></a>

```typescript
public resetPreferredFaultDomainName(): void
```

##### `resetSecondaryFaultDomainName` <a name="resetSecondaryFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetSecondaryFaultDomainName"></a>

```typescript
public resetSecondaryFaultDomainName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIdsInput">preferredFaultDomainHostIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainNameInput">preferredFaultDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIdsInput">secondaryFaultDomainHostIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainNameInput">secondaryFaultDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNodeInput">witnessNodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIds">preferredFaultDomainHostIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainName">preferredFaultDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIds">secondaryFaultDomainHostIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainName">secondaryFaultDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNode">witnessNode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preferredFaultDomainHostIdsInput`<sup>Optional</sup> <a name="preferredFaultDomainHostIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIdsInput"></a>

```typescript
public readonly preferredFaultDomainHostIdsInput: string[];
```

- *Type:* string[]

---

##### `preferredFaultDomainNameInput`<sup>Optional</sup> <a name="preferredFaultDomainNameInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainNameInput"></a>

```typescript
public readonly preferredFaultDomainNameInput: string;
```

- *Type:* string

---

##### `secondaryFaultDomainHostIdsInput`<sup>Optional</sup> <a name="secondaryFaultDomainHostIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIdsInput"></a>

```typescript
public readonly secondaryFaultDomainHostIdsInput: string[];
```

- *Type:* string[]

---

##### `secondaryFaultDomainNameInput`<sup>Optional</sup> <a name="secondaryFaultDomainNameInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainNameInput"></a>

```typescript
public readonly secondaryFaultDomainNameInput: string;
```

- *Type:* string

---

##### `witnessNodeInput`<sup>Optional</sup> <a name="witnessNodeInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNodeInput"></a>

```typescript
public readonly witnessNodeInput: string;
```

- *Type:* string

---

##### `preferredFaultDomainHostIds`<sup>Required</sup> <a name="preferredFaultDomainHostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIds"></a>

```typescript
public readonly preferredFaultDomainHostIds: string[];
```

- *Type:* string[]

---

##### `preferredFaultDomainName`<sup>Required</sup> <a name="preferredFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainName"></a>

```typescript
public readonly preferredFaultDomainName: string;
```

- *Type:* string

---

##### `secondaryFaultDomainHostIds`<sup>Required</sup> <a name="secondaryFaultDomainHostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIds"></a>

```typescript
public readonly secondaryFaultDomainHostIds: string[];
```

- *Type:* string[]

---

##### `secondaryFaultDomainName`<sup>Required</sup> <a name="secondaryFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainName"></a>

```typescript
public readonly secondaryFaultDomainName: string;
```

- *Type:* string

---

##### `witnessNode`<sup>Required</sup> <a name="witnessNode" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNode"></a>

```typescript
public readonly witnessNode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeClusterVsanStretchedCluster;
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

---



