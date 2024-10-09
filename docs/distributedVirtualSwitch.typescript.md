# `distributedVirtualSwitch` Submodule <a name="`distributedVirtualSwitch` Submodule" id="@cdktf/provider-vsphere.distributedVirtualSwitch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DistributedVirtualSwitch <a name="DistributedVirtualSwitch" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch vsphere_distributed_virtual_switch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

new distributedVirtualSwitch.DistributedVirtualSwitch(scope: Construct, id: string, config: DistributedVirtualSwitchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig">DistributedVirtualSwitchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig">DistributedVirtualSwitchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putHost">putHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putPvlanMapping">putPvlanMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putVlanRange">putVlanRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetActiveUplinks">resetActiveUplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowForgedTransmits">resetAllowForgedTransmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowMacChanges">resetAllowMacChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowPromiscuous">resetAllowPromiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcMaximumMbit">resetBackupnfcMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcReservationMbit">resetBackupnfcReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareCount">resetBackupnfcShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareLevel">resetBackupnfcShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBlockAllPorts">resetBlockAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCheckBeacon">resetCheckBeacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactDetail">resetContactDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactName">resetContactName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDirectpathGen2Allowed">resetDirectpathGen2Allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingAverageBandwidth">resetEgressShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingBurstSize">resetEgressShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingEnabled">resetEgressShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingPeakBandwidth">resetEgressShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFailback">resetFailback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceMaximumMbit">resetFaulttoleranceMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceReservationMbit">resetFaulttoleranceReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareCount">resetFaulttoleranceShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareLevel">resetFaulttoleranceShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrMaximumMbit">resetHbrMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrReservationMbit">resetHbrReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareCount">resetHbrShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareLevel">resetHbrShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIgnoreOtherPvlanMappings">resetIgnoreOtherPvlanMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingAverageBandwidth">resetIngressShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingBurstSize">resetIngressShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingEnabled">resetIngressShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingPeakBandwidth">resetIngressShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIpv4Address">resetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiMaximumMbit">resetIscsiMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiReservationMbit">resetIscsiReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareCount">resetIscsiShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareLevel">resetIscsiShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpApiVersion">resetLacpApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpEnabled">resetLacpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpMode">resetLacpMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryOperation">resetLinkDiscoveryOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryProtocol">resetLinkDiscoveryProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementMaximumMbit">resetManagementMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementReservationMbit">resetManagementReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareCount">resetManagementShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareLevel">resetManagementShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMaxMtu">resetMaxMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMulticastFilteringMode">resetMulticastFilteringMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowActiveFlowTimeout">resetNetflowActiveFlowTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorIpAddress">resetNetflowCollectorIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorPort">resetNetflowCollectorPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowEnabled">resetNetflowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowIdleFlowTimeout">resetNetflowIdleFlowTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowInternalFlowsOnly">resetNetflowInternalFlowsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowObservationDomainId">resetNetflowObservationDomainId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowSamplingRate">resetNetflowSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlEnabled">resetNetworkResourceControlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlVersion">resetNetworkResourceControlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsMaximumMbit">resetNfsMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsReservationMbit">resetNfsReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareCount">resetNfsShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareLevel">resetNfsShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNotifySwitches">resetNotifySwitches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPortPrivateSecondaryVlanId">resetPortPrivateSecondaryVlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPvlanMapping">resetPvlanMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetStandbyUplinks">resetStandbyUplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTeamingPolicy">resetTeamingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTxUplink">resetTxUplink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetUplinks">resetUplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpMaximumMbit">resetVdpMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpReservationMbit">resetVdpReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareCount">resetVdpShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareLevel">resetVdpShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineMaximumMbit">resetVirtualmachineMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineReservationMbit">resetVirtualmachineReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareCount">resetVirtualmachineShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareLevel">resetVirtualmachineShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanId">resetVlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanRange">resetVlanRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionMaximumMbit">resetVmotionMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionReservationMbit">resetVmotionReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareCount">resetVmotionShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareLevel">resetVmotionShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanMaximumMbit">resetVsanMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanReservationMbit">resetVsanReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareCount">resetVsanShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareLevel">resetVsanShareLevel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHost` <a name="putHost" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putHost"></a>

```typescript
public putHost(value: IResolvable | DistributedVirtualSwitchHost[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putHost.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>[]

---

##### `putPvlanMapping` <a name="putPvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putPvlanMapping"></a>

```typescript
public putPvlanMapping(value: IResolvable | DistributedVirtualSwitchPvlanMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putPvlanMapping.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>[]

---

##### `putVlanRange` <a name="putVlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putVlanRange"></a>

```typescript
public putVlanRange(value: IResolvable | DistributedVirtualSwitchVlanRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putVlanRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>[]

---

##### `resetActiveUplinks` <a name="resetActiveUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetActiveUplinks"></a>

```typescript
public resetActiveUplinks(): void
```

##### `resetAllowForgedTransmits` <a name="resetAllowForgedTransmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowForgedTransmits"></a>

```typescript
public resetAllowForgedTransmits(): void
```

##### `resetAllowMacChanges` <a name="resetAllowMacChanges" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowMacChanges"></a>

```typescript
public resetAllowMacChanges(): void
```

##### `resetAllowPromiscuous` <a name="resetAllowPromiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowPromiscuous"></a>

```typescript
public resetAllowPromiscuous(): void
```

##### `resetBackupnfcMaximumMbit` <a name="resetBackupnfcMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcMaximumMbit"></a>

```typescript
public resetBackupnfcMaximumMbit(): void
```

##### `resetBackupnfcReservationMbit` <a name="resetBackupnfcReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcReservationMbit"></a>

```typescript
public resetBackupnfcReservationMbit(): void
```

##### `resetBackupnfcShareCount` <a name="resetBackupnfcShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareCount"></a>

```typescript
public resetBackupnfcShareCount(): void
```

##### `resetBackupnfcShareLevel` <a name="resetBackupnfcShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareLevel"></a>

```typescript
public resetBackupnfcShareLevel(): void
```

##### `resetBlockAllPorts` <a name="resetBlockAllPorts" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBlockAllPorts"></a>

```typescript
public resetBlockAllPorts(): void
```

##### `resetCheckBeacon` <a name="resetCheckBeacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCheckBeacon"></a>

```typescript
public resetCheckBeacon(): void
```

##### `resetContactDetail` <a name="resetContactDetail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactDetail"></a>

```typescript
public resetContactDetail(): void
```

##### `resetContactName` <a name="resetContactName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactName"></a>

```typescript
public resetContactName(): void
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDirectpathGen2Allowed` <a name="resetDirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDirectpathGen2Allowed"></a>

```typescript
public resetDirectpathGen2Allowed(): void
```

##### `resetEgressShapingAverageBandwidth` <a name="resetEgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingAverageBandwidth"></a>

```typescript
public resetEgressShapingAverageBandwidth(): void
```

##### `resetEgressShapingBurstSize` <a name="resetEgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingBurstSize"></a>

```typescript
public resetEgressShapingBurstSize(): void
```

##### `resetEgressShapingEnabled` <a name="resetEgressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingEnabled"></a>

```typescript
public resetEgressShapingEnabled(): void
```

##### `resetEgressShapingPeakBandwidth` <a name="resetEgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingPeakBandwidth"></a>

```typescript
public resetEgressShapingPeakBandwidth(): void
```

##### `resetFailback` <a name="resetFailback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFailback"></a>

```typescript
public resetFailback(): void
```

##### `resetFaulttoleranceMaximumMbit` <a name="resetFaulttoleranceMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceMaximumMbit"></a>

```typescript
public resetFaulttoleranceMaximumMbit(): void
```

##### `resetFaulttoleranceReservationMbit` <a name="resetFaulttoleranceReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceReservationMbit"></a>

```typescript
public resetFaulttoleranceReservationMbit(): void
```

##### `resetFaulttoleranceShareCount` <a name="resetFaulttoleranceShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareCount"></a>

```typescript
public resetFaulttoleranceShareCount(): void
```

##### `resetFaulttoleranceShareLevel` <a name="resetFaulttoleranceShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareLevel"></a>

```typescript
public resetFaulttoleranceShareLevel(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetHbrMaximumMbit` <a name="resetHbrMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrMaximumMbit"></a>

```typescript
public resetHbrMaximumMbit(): void
```

##### `resetHbrReservationMbit` <a name="resetHbrReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrReservationMbit"></a>

```typescript
public resetHbrReservationMbit(): void
```

##### `resetHbrShareCount` <a name="resetHbrShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareCount"></a>

```typescript
public resetHbrShareCount(): void
```

##### `resetHbrShareLevel` <a name="resetHbrShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareLevel"></a>

```typescript
public resetHbrShareLevel(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreOtherPvlanMappings` <a name="resetIgnoreOtherPvlanMappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIgnoreOtherPvlanMappings"></a>

```typescript
public resetIgnoreOtherPvlanMappings(): void
```

##### `resetIngressShapingAverageBandwidth` <a name="resetIngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingAverageBandwidth"></a>

```typescript
public resetIngressShapingAverageBandwidth(): void
```

##### `resetIngressShapingBurstSize` <a name="resetIngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingBurstSize"></a>

```typescript
public resetIngressShapingBurstSize(): void
```

##### `resetIngressShapingEnabled` <a name="resetIngressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingEnabled"></a>

```typescript
public resetIngressShapingEnabled(): void
```

##### `resetIngressShapingPeakBandwidth` <a name="resetIngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingPeakBandwidth"></a>

```typescript
public resetIngressShapingPeakBandwidth(): void
```

##### `resetIpv4Address` <a name="resetIpv4Address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIpv4Address"></a>

```typescript
public resetIpv4Address(): void
```

##### `resetIscsiMaximumMbit` <a name="resetIscsiMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiMaximumMbit"></a>

```typescript
public resetIscsiMaximumMbit(): void
```

##### `resetIscsiReservationMbit` <a name="resetIscsiReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiReservationMbit"></a>

```typescript
public resetIscsiReservationMbit(): void
```

##### `resetIscsiShareCount` <a name="resetIscsiShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareCount"></a>

```typescript
public resetIscsiShareCount(): void
```

##### `resetIscsiShareLevel` <a name="resetIscsiShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareLevel"></a>

```typescript
public resetIscsiShareLevel(): void
```

##### `resetLacpApiVersion` <a name="resetLacpApiVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpApiVersion"></a>

```typescript
public resetLacpApiVersion(): void
```

##### `resetLacpEnabled` <a name="resetLacpEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpEnabled"></a>

```typescript
public resetLacpEnabled(): void
```

##### `resetLacpMode` <a name="resetLacpMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpMode"></a>

```typescript
public resetLacpMode(): void
```

##### `resetLinkDiscoveryOperation` <a name="resetLinkDiscoveryOperation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryOperation"></a>

```typescript
public resetLinkDiscoveryOperation(): void
```

##### `resetLinkDiscoveryProtocol` <a name="resetLinkDiscoveryProtocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryProtocol"></a>

```typescript
public resetLinkDiscoveryProtocol(): void
```

##### `resetManagementMaximumMbit` <a name="resetManagementMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementMaximumMbit"></a>

```typescript
public resetManagementMaximumMbit(): void
```

##### `resetManagementReservationMbit` <a name="resetManagementReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementReservationMbit"></a>

```typescript
public resetManagementReservationMbit(): void
```

##### `resetManagementShareCount` <a name="resetManagementShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareCount"></a>

```typescript
public resetManagementShareCount(): void
```

##### `resetManagementShareLevel` <a name="resetManagementShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareLevel"></a>

```typescript
public resetManagementShareLevel(): void
```

##### `resetMaxMtu` <a name="resetMaxMtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMaxMtu"></a>

```typescript
public resetMaxMtu(): void
```

##### `resetMulticastFilteringMode` <a name="resetMulticastFilteringMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMulticastFilteringMode"></a>

```typescript
public resetMulticastFilteringMode(): void
```

##### `resetNetflowActiveFlowTimeout` <a name="resetNetflowActiveFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowActiveFlowTimeout"></a>

```typescript
public resetNetflowActiveFlowTimeout(): void
```

##### `resetNetflowCollectorIpAddress` <a name="resetNetflowCollectorIpAddress" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorIpAddress"></a>

```typescript
public resetNetflowCollectorIpAddress(): void
```

##### `resetNetflowCollectorPort` <a name="resetNetflowCollectorPort" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorPort"></a>

```typescript
public resetNetflowCollectorPort(): void
```

##### `resetNetflowEnabled` <a name="resetNetflowEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowEnabled"></a>

```typescript
public resetNetflowEnabled(): void
```

##### `resetNetflowIdleFlowTimeout` <a name="resetNetflowIdleFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowIdleFlowTimeout"></a>

```typescript
public resetNetflowIdleFlowTimeout(): void
```

##### `resetNetflowInternalFlowsOnly` <a name="resetNetflowInternalFlowsOnly" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowInternalFlowsOnly"></a>

```typescript
public resetNetflowInternalFlowsOnly(): void
```

##### `resetNetflowObservationDomainId` <a name="resetNetflowObservationDomainId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowObservationDomainId"></a>

```typescript
public resetNetflowObservationDomainId(): void
```

##### `resetNetflowSamplingRate` <a name="resetNetflowSamplingRate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowSamplingRate"></a>

```typescript
public resetNetflowSamplingRate(): void
```

##### `resetNetworkResourceControlEnabled` <a name="resetNetworkResourceControlEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlEnabled"></a>

```typescript
public resetNetworkResourceControlEnabled(): void
```

##### `resetNetworkResourceControlVersion` <a name="resetNetworkResourceControlVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlVersion"></a>

```typescript
public resetNetworkResourceControlVersion(): void
```

##### `resetNfsMaximumMbit` <a name="resetNfsMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsMaximumMbit"></a>

```typescript
public resetNfsMaximumMbit(): void
```

##### `resetNfsReservationMbit` <a name="resetNfsReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsReservationMbit"></a>

```typescript
public resetNfsReservationMbit(): void
```

##### `resetNfsShareCount` <a name="resetNfsShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareCount"></a>

```typescript
public resetNfsShareCount(): void
```

##### `resetNfsShareLevel` <a name="resetNfsShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareLevel"></a>

```typescript
public resetNfsShareLevel(): void
```

##### `resetNotifySwitches` <a name="resetNotifySwitches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNotifySwitches"></a>

```typescript
public resetNotifySwitches(): void
```

##### `resetPortPrivateSecondaryVlanId` <a name="resetPortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPortPrivateSecondaryVlanId"></a>

```typescript
public resetPortPrivateSecondaryVlanId(): void
```

##### `resetPvlanMapping` <a name="resetPvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPvlanMapping"></a>

```typescript
public resetPvlanMapping(): void
```

##### `resetStandbyUplinks` <a name="resetStandbyUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetStandbyUplinks"></a>

```typescript
public resetStandbyUplinks(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTeamingPolicy` <a name="resetTeamingPolicy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTeamingPolicy"></a>

```typescript
public resetTeamingPolicy(): void
```

##### `resetTxUplink` <a name="resetTxUplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTxUplink"></a>

```typescript
public resetTxUplink(): void
```

##### `resetUplinks` <a name="resetUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetUplinks"></a>

```typescript
public resetUplinks(): void
```

##### `resetVdpMaximumMbit` <a name="resetVdpMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpMaximumMbit"></a>

```typescript
public resetVdpMaximumMbit(): void
```

##### `resetVdpReservationMbit` <a name="resetVdpReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpReservationMbit"></a>

```typescript
public resetVdpReservationMbit(): void
```

##### `resetVdpShareCount` <a name="resetVdpShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareCount"></a>

```typescript
public resetVdpShareCount(): void
```

##### `resetVdpShareLevel` <a name="resetVdpShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareLevel"></a>

```typescript
public resetVdpShareLevel(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetVirtualmachineMaximumMbit` <a name="resetVirtualmachineMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineMaximumMbit"></a>

```typescript
public resetVirtualmachineMaximumMbit(): void
```

##### `resetVirtualmachineReservationMbit` <a name="resetVirtualmachineReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineReservationMbit"></a>

```typescript
public resetVirtualmachineReservationMbit(): void
```

##### `resetVirtualmachineShareCount` <a name="resetVirtualmachineShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareCount"></a>

```typescript
public resetVirtualmachineShareCount(): void
```

##### `resetVirtualmachineShareLevel` <a name="resetVirtualmachineShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareLevel"></a>

```typescript
public resetVirtualmachineShareLevel(): void
```

##### `resetVlanId` <a name="resetVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanId"></a>

```typescript
public resetVlanId(): void
```

##### `resetVlanRange` <a name="resetVlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanRange"></a>

```typescript
public resetVlanRange(): void
```

##### `resetVmotionMaximumMbit` <a name="resetVmotionMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionMaximumMbit"></a>

```typescript
public resetVmotionMaximumMbit(): void
```

##### `resetVmotionReservationMbit` <a name="resetVmotionReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionReservationMbit"></a>

```typescript
public resetVmotionReservationMbit(): void
```

##### `resetVmotionShareCount` <a name="resetVmotionShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareCount"></a>

```typescript
public resetVmotionShareCount(): void
```

##### `resetVmotionShareLevel` <a name="resetVmotionShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareLevel"></a>

```typescript
public resetVmotionShareLevel(): void
```

##### `resetVsanMaximumMbit` <a name="resetVsanMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanMaximumMbit"></a>

```typescript
public resetVsanMaximumMbit(): void
```

##### `resetVsanReservationMbit` <a name="resetVsanReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanReservationMbit"></a>

```typescript
public resetVsanReservationMbit(): void
```

##### `resetVsanShareCount` <a name="resetVsanShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareCount"></a>

```typescript
public resetVsanShareCount(): void
```

##### `resetVsanShareLevel` <a name="resetVsanShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareLevel"></a>

```typescript
public resetVsanShareLevel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DistributedVirtualSwitch resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isConstruct"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

distributedVirtualSwitch.DistributedVirtualSwitch.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DistributedVirtualSwitch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DistributedVirtualSwitch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DistributedVirtualSwitch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DistributedVirtualSwitch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.configVersion">configVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.host">host</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList">DistributedVirtualSwitchHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMapping">pvlanMapping</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList">DistributedVirtualSwitchPvlanMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRange">vlanRange</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList">DistributedVirtualSwitchVlanRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinksInput">activeUplinksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmitsInput">allowForgedTransmitsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChangesInput">allowMacChangesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuousInput">allowPromiscuousInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbitInput">backupnfcMaximumMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbitInput">backupnfcReservationMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCountInput">backupnfcShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevelInput">backupnfcShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPortsInput">blockAllPortsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeaconInput">checkBeaconInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetailInput">contactDetailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactNameInput">contactNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributesInput">customAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2AllowedInput">directpathGen2AllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidthInput">egressShapingAverageBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSizeInput">egressShapingBurstSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabledInput">egressShapingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidthInput">egressShapingPeakBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failbackInput">failbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbitInput">faulttoleranceMaximumMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbitInput">faulttoleranceReservationMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCountInput">faulttoleranceShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevelInput">faulttoleranceShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbitInput">hbrMaximumMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbitInput">hbrReservationMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCountInput">hbrShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevelInput">hbrShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hostInput">hostInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappingsInput">ignoreOtherPvlanMappingsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidthInput">ingressShapingAverageBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSizeInput">ingressShapingBurstSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabledInput">ingressShapingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidthInput">ingressShapingPeakBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4AddressInput">ipv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbitInput">iscsiMaximumMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbitInput">iscsiReservationMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCountInput">iscsiShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevelInput">iscsiShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersionInput">lacpApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabledInput">lacpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpModeInput">lacpModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperationInput">linkDiscoveryOperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocolInput">linkDiscoveryProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbitInput">managementMaximumMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbitInput">managementReservationMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCountInput">managementShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevelInput">managementShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtuInput">maxMtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringModeInput">multicastFilteringModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeoutInput">netflowActiveFlowTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddressInput">netflowCollectorIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPortInput">netflowCollectorPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabledInput">netflowEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeoutInput">netflowIdleFlowTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnlyInput">netflowInternalFlowsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainIdInput">netflowObservationDomainIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRateInput">netflowSamplingRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabledInput">networkResourceControlEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersionInput">networkResourceControlVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbitInput">nfsMaximumMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbitInput">nfsReservationMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCountInput">nfsShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevelInput">nfsShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitchesInput">notifySwitchesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanIdInput">portPrivateSecondaryVlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMappingInput">pvlanMappingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinksInput">standbyUplinksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicyInput">teamingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplinkInput">txUplinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinksInput">uplinksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbitInput">vdpMaximumMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbitInput">vdpReservationMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCountInput">vdpShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevelInput">vdpShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbitInput">virtualmachineMaximumMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbitInput">virtualmachineReservationMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCountInput">virtualmachineShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevelInput">virtualmachineShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanIdInput">vlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRangeInput">vlanRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbitInput">vmotionMaximumMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbitInput">vmotionReservationMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCountInput">vmotionShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevelInput">vmotionShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbitInput">vsanMaximumMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbitInput">vsanReservationMbitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCountInput">vsanShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevelInput">vsanShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinks">activeUplinks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChanges">allowMacChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuous">allowPromiscuous</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbit">backupnfcMaximumMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbit">backupnfcReservationMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCount">backupnfcShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevel">backupnfcShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPorts">blockAllPorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeacon">checkBeacon</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetail">contactDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactName">contactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2Allowed">directpathGen2Allowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidth">egressShapingAverageBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSize">egressShapingBurstSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabled">egressShapingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidth">egressShapingPeakBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failback">failback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbit">faulttoleranceMaximumMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbit">faulttoleranceReservationMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCount">faulttoleranceShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevel">faulttoleranceShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbit">hbrMaximumMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbit">hbrReservationMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCount">hbrShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevel">hbrShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappings">ignoreOtherPvlanMappings</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidth">ingressShapingAverageBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSize">ingressShapingBurstSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabled">ingressShapingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidth">ingressShapingPeakBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbit">iscsiMaximumMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbit">iscsiReservationMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCount">iscsiShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevel">iscsiShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersion">lacpApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabled">lacpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpMode">lacpMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperation">linkDiscoveryOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocol">linkDiscoveryProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbit">managementMaximumMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbit">managementReservationMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCount">managementShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevel">managementShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtu">maxMtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringMode">multicastFilteringMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeout">netflowActiveFlowTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddress">netflowCollectorIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPort">netflowCollectorPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabled">netflowEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeout">netflowIdleFlowTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnly">netflowInternalFlowsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainId">netflowObservationDomainId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRate">netflowSamplingRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabled">networkResourceControlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersion">networkResourceControlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbit">nfsMaximumMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbit">nfsReservationMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCount">nfsShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevel">nfsShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitches">notifySwitches</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanId">portPrivateSecondaryVlanId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinks">standbyUplinks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicy">teamingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplink">txUplink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinks">uplinks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbit">vdpMaximumMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbit">vdpReservationMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCount">vdpShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevel">vdpShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbit">virtualmachineMaximumMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbit">virtualmachineReservationMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCount">virtualmachineShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevel">virtualmachineShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbit">vmotionMaximumMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbit">vmotionReservationMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCount">vmotionShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevel">vmotionShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbit">vsanMaximumMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbit">vsanReservationMbit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCount">vsanShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevel">vsanShareLevel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configVersion`<sup>Required</sup> <a name="configVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.configVersion"></a>

```typescript
public readonly configVersion: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.host"></a>

```typescript
public readonly host: DistributedVirtualSwitchHostList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList">DistributedVirtualSwitchHostList</a>

---

##### `pvlanMapping`<sup>Required</sup> <a name="pvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMapping"></a>

```typescript
public readonly pvlanMapping: DistributedVirtualSwitchPvlanMappingList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList">DistributedVirtualSwitchPvlanMappingList</a>

---

##### `vlanRange`<sup>Required</sup> <a name="vlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRange"></a>

```typescript
public readonly vlanRange: DistributedVirtualSwitchVlanRangeList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList">DistributedVirtualSwitchVlanRangeList</a>

---

##### `activeUplinksInput`<sup>Optional</sup> <a name="activeUplinksInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinksInput"></a>

```typescript
public readonly activeUplinksInput: string[];
```

- *Type:* string[]

---

##### `allowForgedTransmitsInput`<sup>Optional</sup> <a name="allowForgedTransmitsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmitsInput"></a>

```typescript
public readonly allowForgedTransmitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowMacChangesInput`<sup>Optional</sup> <a name="allowMacChangesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChangesInput"></a>

```typescript
public readonly allowMacChangesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPromiscuousInput`<sup>Optional</sup> <a name="allowPromiscuousInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuousInput"></a>

```typescript
public readonly allowPromiscuousInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupnfcMaximumMbitInput`<sup>Optional</sup> <a name="backupnfcMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbitInput"></a>

```typescript
public readonly backupnfcMaximumMbitInput: number;
```

- *Type:* number

---

##### `backupnfcReservationMbitInput`<sup>Optional</sup> <a name="backupnfcReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbitInput"></a>

```typescript
public readonly backupnfcReservationMbitInput: number;
```

- *Type:* number

---

##### `backupnfcShareCountInput`<sup>Optional</sup> <a name="backupnfcShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCountInput"></a>

```typescript
public readonly backupnfcShareCountInput: number;
```

- *Type:* number

---

##### `backupnfcShareLevelInput`<sup>Optional</sup> <a name="backupnfcShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevelInput"></a>

```typescript
public readonly backupnfcShareLevelInput: string;
```

- *Type:* string

---

##### `blockAllPortsInput`<sup>Optional</sup> <a name="blockAllPortsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPortsInput"></a>

```typescript
public readonly blockAllPortsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkBeaconInput`<sup>Optional</sup> <a name="checkBeaconInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeaconInput"></a>

```typescript
public readonly checkBeaconInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contactDetailInput`<sup>Optional</sup> <a name="contactDetailInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetailInput"></a>

```typescript
public readonly contactDetailInput: string;
```

- *Type:* string

---

##### `contactNameInput`<sup>Optional</sup> <a name="contactNameInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactNameInput"></a>

```typescript
public readonly contactNameInput: string;
```

- *Type:* string

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directpathGen2AllowedInput`<sup>Optional</sup> <a name="directpathGen2AllowedInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2AllowedInput"></a>

```typescript
public readonly directpathGen2AllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `egressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="egressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidthInput"></a>

```typescript
public readonly egressShapingAverageBandwidthInput: number;
```

- *Type:* number

---

##### `egressShapingBurstSizeInput`<sup>Optional</sup> <a name="egressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSizeInput"></a>

```typescript
public readonly egressShapingBurstSizeInput: number;
```

- *Type:* number

---

##### `egressShapingEnabledInput`<sup>Optional</sup> <a name="egressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabledInput"></a>

```typescript
public readonly egressShapingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `egressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="egressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidthInput"></a>

```typescript
public readonly egressShapingPeakBandwidthInput: number;
```

- *Type:* number

---

##### `failbackInput`<sup>Optional</sup> <a name="failbackInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failbackInput"></a>

```typescript
public readonly failbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `faulttoleranceMaximumMbitInput`<sup>Optional</sup> <a name="faulttoleranceMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbitInput"></a>

```typescript
public readonly faulttoleranceMaximumMbitInput: number;
```

- *Type:* number

---

##### `faulttoleranceReservationMbitInput`<sup>Optional</sup> <a name="faulttoleranceReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbitInput"></a>

```typescript
public readonly faulttoleranceReservationMbitInput: number;
```

- *Type:* number

---

##### `faulttoleranceShareCountInput`<sup>Optional</sup> <a name="faulttoleranceShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCountInput"></a>

```typescript
public readonly faulttoleranceShareCountInput: number;
```

- *Type:* number

---

##### `faulttoleranceShareLevelInput`<sup>Optional</sup> <a name="faulttoleranceShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevelInput"></a>

```typescript
public readonly faulttoleranceShareLevelInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `hbrMaximumMbitInput`<sup>Optional</sup> <a name="hbrMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbitInput"></a>

```typescript
public readonly hbrMaximumMbitInput: number;
```

- *Type:* number

---

##### `hbrReservationMbitInput`<sup>Optional</sup> <a name="hbrReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbitInput"></a>

```typescript
public readonly hbrReservationMbitInput: number;
```

- *Type:* number

---

##### `hbrShareCountInput`<sup>Optional</sup> <a name="hbrShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCountInput"></a>

```typescript
public readonly hbrShareCountInput: number;
```

- *Type:* number

---

##### `hbrShareLevelInput`<sup>Optional</sup> <a name="hbrShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevelInput"></a>

```typescript
public readonly hbrShareLevelInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hostInput"></a>

```typescript
public readonly hostInput: IResolvable | DistributedVirtualSwitchHost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreOtherPvlanMappingsInput`<sup>Optional</sup> <a name="ignoreOtherPvlanMappingsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappingsInput"></a>

```typescript
public readonly ignoreOtherPvlanMappingsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ingressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="ingressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidthInput"></a>

```typescript
public readonly ingressShapingAverageBandwidthInput: number;
```

- *Type:* number

---

##### `ingressShapingBurstSizeInput`<sup>Optional</sup> <a name="ingressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSizeInput"></a>

```typescript
public readonly ingressShapingBurstSizeInput: number;
```

- *Type:* number

---

##### `ingressShapingEnabledInput`<sup>Optional</sup> <a name="ingressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabledInput"></a>

```typescript
public readonly ingressShapingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ingressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="ingressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidthInput"></a>

```typescript
public readonly ingressShapingPeakBandwidthInput: number;
```

- *Type:* number

---

##### `ipv4AddressInput`<sup>Optional</sup> <a name="ipv4AddressInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4AddressInput"></a>

```typescript
public readonly ipv4AddressInput: string;
```

- *Type:* string

---

##### `iscsiMaximumMbitInput`<sup>Optional</sup> <a name="iscsiMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbitInput"></a>

```typescript
public readonly iscsiMaximumMbitInput: number;
```

- *Type:* number

---

##### `iscsiReservationMbitInput`<sup>Optional</sup> <a name="iscsiReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbitInput"></a>

```typescript
public readonly iscsiReservationMbitInput: number;
```

- *Type:* number

---

##### `iscsiShareCountInput`<sup>Optional</sup> <a name="iscsiShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCountInput"></a>

```typescript
public readonly iscsiShareCountInput: number;
```

- *Type:* number

---

##### `iscsiShareLevelInput`<sup>Optional</sup> <a name="iscsiShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevelInput"></a>

```typescript
public readonly iscsiShareLevelInput: string;
```

- *Type:* string

---

##### `lacpApiVersionInput`<sup>Optional</sup> <a name="lacpApiVersionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersionInput"></a>

```typescript
public readonly lacpApiVersionInput: string;
```

- *Type:* string

---

##### `lacpEnabledInput`<sup>Optional</sup> <a name="lacpEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabledInput"></a>

```typescript
public readonly lacpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lacpModeInput`<sup>Optional</sup> <a name="lacpModeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpModeInput"></a>

```typescript
public readonly lacpModeInput: string;
```

- *Type:* string

---

##### `linkDiscoveryOperationInput`<sup>Optional</sup> <a name="linkDiscoveryOperationInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperationInput"></a>

```typescript
public readonly linkDiscoveryOperationInput: string;
```

- *Type:* string

---

##### `linkDiscoveryProtocolInput`<sup>Optional</sup> <a name="linkDiscoveryProtocolInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocolInput"></a>

```typescript
public readonly linkDiscoveryProtocolInput: string;
```

- *Type:* string

---

##### `managementMaximumMbitInput`<sup>Optional</sup> <a name="managementMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbitInput"></a>

```typescript
public readonly managementMaximumMbitInput: number;
```

- *Type:* number

---

##### `managementReservationMbitInput`<sup>Optional</sup> <a name="managementReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbitInput"></a>

```typescript
public readonly managementReservationMbitInput: number;
```

- *Type:* number

---

##### `managementShareCountInput`<sup>Optional</sup> <a name="managementShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCountInput"></a>

```typescript
public readonly managementShareCountInput: number;
```

- *Type:* number

---

##### `managementShareLevelInput`<sup>Optional</sup> <a name="managementShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevelInput"></a>

```typescript
public readonly managementShareLevelInput: string;
```

- *Type:* string

---

##### `maxMtuInput`<sup>Optional</sup> <a name="maxMtuInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtuInput"></a>

```typescript
public readonly maxMtuInput: number;
```

- *Type:* number

---

##### `multicastFilteringModeInput`<sup>Optional</sup> <a name="multicastFilteringModeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringModeInput"></a>

```typescript
public readonly multicastFilteringModeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `netflowActiveFlowTimeoutInput`<sup>Optional</sup> <a name="netflowActiveFlowTimeoutInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeoutInput"></a>

```typescript
public readonly netflowActiveFlowTimeoutInput: number;
```

- *Type:* number

---

##### `netflowCollectorIpAddressInput`<sup>Optional</sup> <a name="netflowCollectorIpAddressInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddressInput"></a>

```typescript
public readonly netflowCollectorIpAddressInput: string;
```

- *Type:* string

---

##### `netflowCollectorPortInput`<sup>Optional</sup> <a name="netflowCollectorPortInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPortInput"></a>

```typescript
public readonly netflowCollectorPortInput: number;
```

- *Type:* number

---

##### `netflowEnabledInput`<sup>Optional</sup> <a name="netflowEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabledInput"></a>

```typescript
public readonly netflowEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `netflowIdleFlowTimeoutInput`<sup>Optional</sup> <a name="netflowIdleFlowTimeoutInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeoutInput"></a>

```typescript
public readonly netflowIdleFlowTimeoutInput: number;
```

- *Type:* number

---

##### `netflowInternalFlowsOnlyInput`<sup>Optional</sup> <a name="netflowInternalFlowsOnlyInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnlyInput"></a>

```typescript
public readonly netflowInternalFlowsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `netflowObservationDomainIdInput`<sup>Optional</sup> <a name="netflowObservationDomainIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainIdInput"></a>

```typescript
public readonly netflowObservationDomainIdInput: number;
```

- *Type:* number

---

##### `netflowSamplingRateInput`<sup>Optional</sup> <a name="netflowSamplingRateInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRateInput"></a>

```typescript
public readonly netflowSamplingRateInput: number;
```

- *Type:* number

---

##### `networkResourceControlEnabledInput`<sup>Optional</sup> <a name="networkResourceControlEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabledInput"></a>

```typescript
public readonly networkResourceControlEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkResourceControlVersionInput`<sup>Optional</sup> <a name="networkResourceControlVersionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersionInput"></a>

```typescript
public readonly networkResourceControlVersionInput: string;
```

- *Type:* string

---

##### `nfsMaximumMbitInput`<sup>Optional</sup> <a name="nfsMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbitInput"></a>

```typescript
public readonly nfsMaximumMbitInput: number;
```

- *Type:* number

---

##### `nfsReservationMbitInput`<sup>Optional</sup> <a name="nfsReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbitInput"></a>

```typescript
public readonly nfsReservationMbitInput: number;
```

- *Type:* number

---

##### `nfsShareCountInput`<sup>Optional</sup> <a name="nfsShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCountInput"></a>

```typescript
public readonly nfsShareCountInput: number;
```

- *Type:* number

---

##### `nfsShareLevelInput`<sup>Optional</sup> <a name="nfsShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevelInput"></a>

```typescript
public readonly nfsShareLevelInput: string;
```

- *Type:* string

---

##### `notifySwitchesInput`<sup>Optional</sup> <a name="notifySwitchesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitchesInput"></a>

```typescript
public readonly notifySwitchesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `portPrivateSecondaryVlanIdInput`<sup>Optional</sup> <a name="portPrivateSecondaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanIdInput"></a>

```typescript
public readonly portPrivateSecondaryVlanIdInput: number;
```

- *Type:* number

---

##### `pvlanMappingInput`<sup>Optional</sup> <a name="pvlanMappingInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMappingInput"></a>

```typescript
public readonly pvlanMappingInput: IResolvable | DistributedVirtualSwitchPvlanMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>[]

---

##### `standbyUplinksInput`<sup>Optional</sup> <a name="standbyUplinksInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinksInput"></a>

```typescript
public readonly standbyUplinksInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `teamingPolicyInput`<sup>Optional</sup> <a name="teamingPolicyInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicyInput"></a>

```typescript
public readonly teamingPolicyInput: string;
```

- *Type:* string

---

##### `txUplinkInput`<sup>Optional</sup> <a name="txUplinkInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplinkInput"></a>

```typescript
public readonly txUplinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uplinksInput`<sup>Optional</sup> <a name="uplinksInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinksInput"></a>

```typescript
public readonly uplinksInput: string[];
```

- *Type:* string[]

---

##### `vdpMaximumMbitInput`<sup>Optional</sup> <a name="vdpMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbitInput"></a>

```typescript
public readonly vdpMaximumMbitInput: number;
```

- *Type:* number

---

##### `vdpReservationMbitInput`<sup>Optional</sup> <a name="vdpReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbitInput"></a>

```typescript
public readonly vdpReservationMbitInput: number;
```

- *Type:* number

---

##### `vdpShareCountInput`<sup>Optional</sup> <a name="vdpShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCountInput"></a>

```typescript
public readonly vdpShareCountInput: number;
```

- *Type:* number

---

##### `vdpShareLevelInput`<sup>Optional</sup> <a name="vdpShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevelInput"></a>

```typescript
public readonly vdpShareLevelInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `virtualmachineMaximumMbitInput`<sup>Optional</sup> <a name="virtualmachineMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbitInput"></a>

```typescript
public readonly virtualmachineMaximumMbitInput: number;
```

- *Type:* number

---

##### `virtualmachineReservationMbitInput`<sup>Optional</sup> <a name="virtualmachineReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbitInput"></a>

```typescript
public readonly virtualmachineReservationMbitInput: number;
```

- *Type:* number

---

##### `virtualmachineShareCountInput`<sup>Optional</sup> <a name="virtualmachineShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCountInput"></a>

```typescript
public readonly virtualmachineShareCountInput: number;
```

- *Type:* number

---

##### `virtualmachineShareLevelInput`<sup>Optional</sup> <a name="virtualmachineShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevelInput"></a>

```typescript
public readonly virtualmachineShareLevelInput: string;
```

- *Type:* string

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: number;
```

- *Type:* number

---

##### `vlanRangeInput`<sup>Optional</sup> <a name="vlanRangeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRangeInput"></a>

```typescript
public readonly vlanRangeInput: IResolvable | DistributedVirtualSwitchVlanRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>[]

---

##### `vmotionMaximumMbitInput`<sup>Optional</sup> <a name="vmotionMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbitInput"></a>

```typescript
public readonly vmotionMaximumMbitInput: number;
```

- *Type:* number

---

##### `vmotionReservationMbitInput`<sup>Optional</sup> <a name="vmotionReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbitInput"></a>

```typescript
public readonly vmotionReservationMbitInput: number;
```

- *Type:* number

---

##### `vmotionShareCountInput`<sup>Optional</sup> <a name="vmotionShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCountInput"></a>

```typescript
public readonly vmotionShareCountInput: number;
```

- *Type:* number

---

##### `vmotionShareLevelInput`<sup>Optional</sup> <a name="vmotionShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevelInput"></a>

```typescript
public readonly vmotionShareLevelInput: string;
```

- *Type:* string

---

##### `vsanMaximumMbitInput`<sup>Optional</sup> <a name="vsanMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbitInput"></a>

```typescript
public readonly vsanMaximumMbitInput: number;
```

- *Type:* number

---

##### `vsanReservationMbitInput`<sup>Optional</sup> <a name="vsanReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbitInput"></a>

```typescript
public readonly vsanReservationMbitInput: number;
```

- *Type:* number

---

##### `vsanShareCountInput`<sup>Optional</sup> <a name="vsanShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCountInput"></a>

```typescript
public readonly vsanShareCountInput: number;
```

- *Type:* number

---

##### `vsanShareLevelInput`<sup>Optional</sup> <a name="vsanShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevelInput"></a>

```typescript
public readonly vsanShareLevelInput: string;
```

- *Type:* string

---

##### `activeUplinks`<sup>Required</sup> <a name="activeUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinks"></a>

```typescript
public readonly activeUplinks: string[];
```

- *Type:* string[]

---

##### `allowForgedTransmits`<sup>Required</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmits"></a>

```typescript
public readonly allowForgedTransmits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowMacChanges`<sup>Required</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChanges"></a>

```typescript
public readonly allowMacChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPromiscuous`<sup>Required</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuous"></a>

```typescript
public readonly allowPromiscuous: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupnfcMaximumMbit`<sup>Required</sup> <a name="backupnfcMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbit"></a>

```typescript
public readonly backupnfcMaximumMbit: number;
```

- *Type:* number

---

##### `backupnfcReservationMbit`<sup>Required</sup> <a name="backupnfcReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbit"></a>

```typescript
public readonly backupnfcReservationMbit: number;
```

- *Type:* number

---

##### `backupnfcShareCount`<sup>Required</sup> <a name="backupnfcShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCount"></a>

```typescript
public readonly backupnfcShareCount: number;
```

- *Type:* number

---

##### `backupnfcShareLevel`<sup>Required</sup> <a name="backupnfcShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevel"></a>

```typescript
public readonly backupnfcShareLevel: string;
```

- *Type:* string

---

##### `blockAllPorts`<sup>Required</sup> <a name="blockAllPorts" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPorts"></a>

```typescript
public readonly blockAllPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkBeacon`<sup>Required</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeacon"></a>

```typescript
public readonly checkBeacon: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contactDetail`<sup>Required</sup> <a name="contactDetail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetail"></a>

```typescript
public readonly contactDetail: string;
```

- *Type:* string

---

##### `contactName`<sup>Required</sup> <a name="contactName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactName"></a>

```typescript
public readonly contactName: string;
```

- *Type:* string

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `directpathGen2Allowed`<sup>Required</sup> <a name="directpathGen2Allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2Allowed"></a>

```typescript
public readonly directpathGen2Allowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `egressShapingAverageBandwidth`<sup>Required</sup> <a name="egressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidth"></a>

```typescript
public readonly egressShapingAverageBandwidth: number;
```

- *Type:* number

---

##### `egressShapingBurstSize`<sup>Required</sup> <a name="egressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSize"></a>

```typescript
public readonly egressShapingBurstSize: number;
```

- *Type:* number

---

##### `egressShapingEnabled`<sup>Required</sup> <a name="egressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabled"></a>

```typescript
public readonly egressShapingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `egressShapingPeakBandwidth`<sup>Required</sup> <a name="egressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidth"></a>

```typescript
public readonly egressShapingPeakBandwidth: number;
```

- *Type:* number

---

##### `failback`<sup>Required</sup> <a name="failback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failback"></a>

```typescript
public readonly failback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `faulttoleranceMaximumMbit`<sup>Required</sup> <a name="faulttoleranceMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbit"></a>

```typescript
public readonly faulttoleranceMaximumMbit: number;
```

- *Type:* number

---

##### `faulttoleranceReservationMbit`<sup>Required</sup> <a name="faulttoleranceReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbit"></a>

```typescript
public readonly faulttoleranceReservationMbit: number;
```

- *Type:* number

---

##### `faulttoleranceShareCount`<sup>Required</sup> <a name="faulttoleranceShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCount"></a>

```typescript
public readonly faulttoleranceShareCount: number;
```

- *Type:* number

---

##### `faulttoleranceShareLevel`<sup>Required</sup> <a name="faulttoleranceShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevel"></a>

```typescript
public readonly faulttoleranceShareLevel: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `hbrMaximumMbit`<sup>Required</sup> <a name="hbrMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbit"></a>

```typescript
public readonly hbrMaximumMbit: number;
```

- *Type:* number

---

##### `hbrReservationMbit`<sup>Required</sup> <a name="hbrReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbit"></a>

```typescript
public readonly hbrReservationMbit: number;
```

- *Type:* number

---

##### `hbrShareCount`<sup>Required</sup> <a name="hbrShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCount"></a>

```typescript
public readonly hbrShareCount: number;
```

- *Type:* number

---

##### `hbrShareLevel`<sup>Required</sup> <a name="hbrShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevel"></a>

```typescript
public readonly hbrShareLevel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreOtherPvlanMappings`<sup>Required</sup> <a name="ignoreOtherPvlanMappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappings"></a>

```typescript
public readonly ignoreOtherPvlanMappings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ingressShapingAverageBandwidth`<sup>Required</sup> <a name="ingressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidth"></a>

```typescript
public readonly ingressShapingAverageBandwidth: number;
```

- *Type:* number

---

##### `ingressShapingBurstSize`<sup>Required</sup> <a name="ingressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSize"></a>

```typescript
public readonly ingressShapingBurstSize: number;
```

- *Type:* number

---

##### `ingressShapingEnabled`<sup>Required</sup> <a name="ingressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabled"></a>

```typescript
public readonly ingressShapingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ingressShapingPeakBandwidth`<sup>Required</sup> <a name="ingressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidth"></a>

```typescript
public readonly ingressShapingPeakBandwidth: number;
```

- *Type:* number

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

---

##### `iscsiMaximumMbit`<sup>Required</sup> <a name="iscsiMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbit"></a>

```typescript
public readonly iscsiMaximumMbit: number;
```

- *Type:* number

---

##### `iscsiReservationMbit`<sup>Required</sup> <a name="iscsiReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbit"></a>

```typescript
public readonly iscsiReservationMbit: number;
```

- *Type:* number

---

##### `iscsiShareCount`<sup>Required</sup> <a name="iscsiShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCount"></a>

```typescript
public readonly iscsiShareCount: number;
```

- *Type:* number

---

##### `iscsiShareLevel`<sup>Required</sup> <a name="iscsiShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevel"></a>

```typescript
public readonly iscsiShareLevel: string;
```

- *Type:* string

---

##### `lacpApiVersion`<sup>Required</sup> <a name="lacpApiVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersion"></a>

```typescript
public readonly lacpApiVersion: string;
```

- *Type:* string

---

##### `lacpEnabled`<sup>Required</sup> <a name="lacpEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabled"></a>

```typescript
public readonly lacpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lacpMode`<sup>Required</sup> <a name="lacpMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpMode"></a>

```typescript
public readonly lacpMode: string;
```

- *Type:* string

---

##### `linkDiscoveryOperation`<sup>Required</sup> <a name="linkDiscoveryOperation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperation"></a>

```typescript
public readonly linkDiscoveryOperation: string;
```

- *Type:* string

---

##### `linkDiscoveryProtocol`<sup>Required</sup> <a name="linkDiscoveryProtocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocol"></a>

```typescript
public readonly linkDiscoveryProtocol: string;
```

- *Type:* string

---

##### `managementMaximumMbit`<sup>Required</sup> <a name="managementMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbit"></a>

```typescript
public readonly managementMaximumMbit: number;
```

- *Type:* number

---

##### `managementReservationMbit`<sup>Required</sup> <a name="managementReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbit"></a>

```typescript
public readonly managementReservationMbit: number;
```

- *Type:* number

---

##### `managementShareCount`<sup>Required</sup> <a name="managementShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCount"></a>

```typescript
public readonly managementShareCount: number;
```

- *Type:* number

---

##### `managementShareLevel`<sup>Required</sup> <a name="managementShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevel"></a>

```typescript
public readonly managementShareLevel: string;
```

- *Type:* string

---

##### `maxMtu`<sup>Required</sup> <a name="maxMtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtu"></a>

```typescript
public readonly maxMtu: number;
```

- *Type:* number

---

##### `multicastFilteringMode`<sup>Required</sup> <a name="multicastFilteringMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringMode"></a>

```typescript
public readonly multicastFilteringMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `netflowActiveFlowTimeout`<sup>Required</sup> <a name="netflowActiveFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeout"></a>

```typescript
public readonly netflowActiveFlowTimeout: number;
```

- *Type:* number

---

##### `netflowCollectorIpAddress`<sup>Required</sup> <a name="netflowCollectorIpAddress" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddress"></a>

```typescript
public readonly netflowCollectorIpAddress: string;
```

- *Type:* string

---

##### `netflowCollectorPort`<sup>Required</sup> <a name="netflowCollectorPort" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPort"></a>

```typescript
public readonly netflowCollectorPort: number;
```

- *Type:* number

---

##### `netflowEnabled`<sup>Required</sup> <a name="netflowEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabled"></a>

```typescript
public readonly netflowEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `netflowIdleFlowTimeout`<sup>Required</sup> <a name="netflowIdleFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeout"></a>

```typescript
public readonly netflowIdleFlowTimeout: number;
```

- *Type:* number

---

##### `netflowInternalFlowsOnly`<sup>Required</sup> <a name="netflowInternalFlowsOnly" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnly"></a>

```typescript
public readonly netflowInternalFlowsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `netflowObservationDomainId`<sup>Required</sup> <a name="netflowObservationDomainId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainId"></a>

```typescript
public readonly netflowObservationDomainId: number;
```

- *Type:* number

---

##### `netflowSamplingRate`<sup>Required</sup> <a name="netflowSamplingRate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRate"></a>

```typescript
public readonly netflowSamplingRate: number;
```

- *Type:* number

---

##### `networkResourceControlEnabled`<sup>Required</sup> <a name="networkResourceControlEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabled"></a>

```typescript
public readonly networkResourceControlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkResourceControlVersion`<sup>Required</sup> <a name="networkResourceControlVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersion"></a>

```typescript
public readonly networkResourceControlVersion: string;
```

- *Type:* string

---

##### `nfsMaximumMbit`<sup>Required</sup> <a name="nfsMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbit"></a>

```typescript
public readonly nfsMaximumMbit: number;
```

- *Type:* number

---

##### `nfsReservationMbit`<sup>Required</sup> <a name="nfsReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbit"></a>

```typescript
public readonly nfsReservationMbit: number;
```

- *Type:* number

---

##### `nfsShareCount`<sup>Required</sup> <a name="nfsShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCount"></a>

```typescript
public readonly nfsShareCount: number;
```

- *Type:* number

---

##### `nfsShareLevel`<sup>Required</sup> <a name="nfsShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevel"></a>

```typescript
public readonly nfsShareLevel: string;
```

- *Type:* string

---

##### `notifySwitches`<sup>Required</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitches"></a>

```typescript
public readonly notifySwitches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `portPrivateSecondaryVlanId`<sup>Required</sup> <a name="portPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanId"></a>

```typescript
public readonly portPrivateSecondaryVlanId: number;
```

- *Type:* number

---

##### `standbyUplinks`<sup>Required</sup> <a name="standbyUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinks"></a>

```typescript
public readonly standbyUplinks: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `teamingPolicy`<sup>Required</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicy"></a>

```typescript
public readonly teamingPolicy: string;
```

- *Type:* string

---

##### `txUplink`<sup>Required</sup> <a name="txUplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplink"></a>

```typescript
public readonly txUplink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uplinks`<sup>Required</sup> <a name="uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinks"></a>

```typescript
public readonly uplinks: string[];
```

- *Type:* string[]

---

##### `vdpMaximumMbit`<sup>Required</sup> <a name="vdpMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbit"></a>

```typescript
public readonly vdpMaximumMbit: number;
```

- *Type:* number

---

##### `vdpReservationMbit`<sup>Required</sup> <a name="vdpReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbit"></a>

```typescript
public readonly vdpReservationMbit: number;
```

- *Type:* number

---

##### `vdpShareCount`<sup>Required</sup> <a name="vdpShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCount"></a>

```typescript
public readonly vdpShareCount: number;
```

- *Type:* number

---

##### `vdpShareLevel`<sup>Required</sup> <a name="vdpShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevel"></a>

```typescript
public readonly vdpShareLevel: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `virtualmachineMaximumMbit`<sup>Required</sup> <a name="virtualmachineMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbit"></a>

```typescript
public readonly virtualmachineMaximumMbit: number;
```

- *Type:* number

---

##### `virtualmachineReservationMbit`<sup>Required</sup> <a name="virtualmachineReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbit"></a>

```typescript
public readonly virtualmachineReservationMbit: number;
```

- *Type:* number

---

##### `virtualmachineShareCount`<sup>Required</sup> <a name="virtualmachineShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCount"></a>

```typescript
public readonly virtualmachineShareCount: number;
```

- *Type:* number

---

##### `virtualmachineShareLevel`<sup>Required</sup> <a name="virtualmachineShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevel"></a>

```typescript
public readonly virtualmachineShareLevel: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

##### `vmotionMaximumMbit`<sup>Required</sup> <a name="vmotionMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbit"></a>

```typescript
public readonly vmotionMaximumMbit: number;
```

- *Type:* number

---

##### `vmotionReservationMbit`<sup>Required</sup> <a name="vmotionReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbit"></a>

```typescript
public readonly vmotionReservationMbit: number;
```

- *Type:* number

---

##### `vmotionShareCount`<sup>Required</sup> <a name="vmotionShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCount"></a>

```typescript
public readonly vmotionShareCount: number;
```

- *Type:* number

---

##### `vmotionShareLevel`<sup>Required</sup> <a name="vmotionShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevel"></a>

```typescript
public readonly vmotionShareLevel: string;
```

- *Type:* string

---

##### `vsanMaximumMbit`<sup>Required</sup> <a name="vsanMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbit"></a>

```typescript
public readonly vsanMaximumMbit: number;
```

- *Type:* number

---

##### `vsanReservationMbit`<sup>Required</sup> <a name="vsanReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbit"></a>

```typescript
public readonly vsanReservationMbit: number;
```

- *Type:* number

---

##### `vsanShareCount`<sup>Required</sup> <a name="vsanShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCount"></a>

```typescript
public readonly vsanShareCount: number;
```

- *Type:* number

---

##### `vsanShareLevel`<sup>Required</sup> <a name="vsanShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevel"></a>

```typescript
public readonly vsanShareLevel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DistributedVirtualSwitchConfig <a name="DistributedVirtualSwitchConfig" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.Initializer"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

const distributedVirtualSwitchConfig: distributedVirtualSwitch.DistributedVirtualSwitchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | The ID of the datacenter to create this virtual switch in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.name">name</a></code> | <code>string</code> | The name for the DVS. Must be unique in the folder that it is being created in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.activeUplinks">activeUplinks</a></code> | <code>string[]</code> | List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowMacChanges">allowMacChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowPromiscuous">allowPromiscuous</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcMaximumMbit">backupnfcMaximumMbit</a></code> | <code>number</code> | The maximum allowed usage for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcReservationMbit">backupnfcReservationMbit</a></code> | <code>number</code> | The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareCount">backupnfcShareCount</a></code> | <code>number</code> | The amount of shares to allocate to the backupNfc traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareLevel">backupnfcShareLevel</a></code> | <code>string</code> | The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.blockAllPorts">blockAllPorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether to block all ports by default. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.checkBeacon">checkBeacon</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable beacon probing on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactDetail">contactDetail</a></code> | <code>string</code> | The contact detail for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactName">contactName</a></code> | <code>string</code> | The contact name for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.description">description</a></code> | <code>string</code> | The description of the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.directpathGen2Allowed">directpathGen2Allowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow VMDirectPath Gen2 on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingAverageBandwidth">egressShapingAverageBandwidth</a></code> | <code>number</code> | The average egress bandwidth in bits per second if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingBurstSize">egressShapingBurstSize</a></code> | <code>number</code> | The maximum egress burst size allowed in bytes if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingEnabled">egressShapingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if the traffic shaper is enabled for egress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingPeakBandwidth">egressShapingPeakBandwidth</a></code> | <code>number</code> | The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.failback">failback</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceMaximumMbit">faulttoleranceMaximumMbit</a></code> | <code>number</code> | The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceReservationMbit">faulttoleranceReservationMbit</a></code> | <code>number</code> | The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareCount">faulttoleranceShareCount</a></code> | <code>number</code> | The amount of shares to allocate to the faultTolerance traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareLevel">faulttoleranceShareLevel</a></code> | <code>string</code> | The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.folder">folder</a></code> | <code>string</code> | The folder to create this virtual switch in, relative to the datacenter. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrMaximumMbit">hbrMaximumMbit</a></code> | <code>number</code> | The maximum allowed usage for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrReservationMbit">hbrReservationMbit</a></code> | <code>number</code> | The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareCount">hbrShareCount</a></code> | <code>number</code> | The amount of shares to allocate to the hbr traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareLevel">hbrShareLevel</a></code> | <code>string</code> | The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.host">host</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>[]</code> | host block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ignoreOtherPvlanMappings">ignoreOtherPvlanMappings</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to ignore existing PVLAN mappings not managed by this resource. Defaults to false. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingAverageBandwidth">ingressShapingAverageBandwidth</a></code> | <code>number</code> | The average ingress bandwidth in bits per second if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingBurstSize">ingressShapingBurstSize</a></code> | <code>number</code> | The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingEnabled">ingressShapingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if the traffic shaper is enabled for ingress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingPeakBandwidth">ingressShapingPeakBandwidth</a></code> | <code>number</code> | The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | The IPv4 address of the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiMaximumMbit">iscsiMaximumMbit</a></code> | <code>number</code> | The maximum allowed usage for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiReservationMbit">iscsiReservationMbit</a></code> | <code>number</code> | The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareCount">iscsiShareCount</a></code> | <code>number</code> | The amount of shares to allocate to the iSCSI traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareLevel">iscsiShareLevel</a></code> | <code>string</code> | The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpApiVersion">lacpApiVersion</a></code> | <code>string</code> | The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpEnabled">lacpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to enable LACP on all uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpMode">lacpMode</a></code> | <code>string</code> | The uplink LACP mode to use. Can be one of active or passive. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryOperation">linkDiscoveryOperation</a></code> | <code>string</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryProtocol">linkDiscoveryProtocol</a></code> | <code>string</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementMaximumMbit">managementMaximumMbit</a></code> | <code>number</code> | The maximum allowed usage for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementReservationMbit">managementReservationMbit</a></code> | <code>number</code> | The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareCount">managementShareCount</a></code> | <code>number</code> | The amount of shares to allocate to the management traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareLevel">managementShareLevel</a></code> | <code>string</code> | The allocation level for the management traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.maxMtu">maxMtu</a></code> | <code>number</code> | The maximum MTU on the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.multicastFilteringMode">multicastFilteringMode</a></code> | <code>string</code> | The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowActiveFlowTimeout">netflowActiveFlowTimeout</a></code> | <code>number</code> | The number of seconds after which active flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorIpAddress">netflowCollectorIpAddress</a></code> | <code>string</code> | IP address for the netflow collector, using IPv4 or IPv6. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorPort">netflowCollectorPort</a></code> | <code>number</code> | The port for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowEnabled">netflowEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether to enable netflow on all ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowIdleFlowTimeout">netflowIdleFlowTimeout</a></code> | <code>number</code> | The number of seconds after which idle flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowInternalFlowsOnly">netflowInternalFlowsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to limit analysis to traffic that has both source and destination served by the same host. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowObservationDomainId">netflowObservationDomainId</a></code> | <code>number</code> | The observation Domain ID for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowSamplingRate">netflowSamplingRate</a></code> | <code>number</code> | The ratio of total number of packets to the number of packets analyzed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlEnabled">networkResourceControlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlVersion">networkResourceControlVersion</a></code> | <code>string</code> | The network I/O control version to use. Can be one of version2 or version3. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsMaximumMbit">nfsMaximumMbit</a></code> | <code>number</code> | The maximum allowed usage for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsReservationMbit">nfsReservationMbit</a></code> | <code>number</code> | The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareCount">nfsShareCount</a></code> | <code>number</code> | The amount of shares to allocate to the nfs traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareLevel">nfsShareLevel</a></code> | <code>string</code> | The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.notifySwitches">notifySwitches</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.portPrivateSecondaryVlanId">portPrivateSecondaryVlanId</a></code> | <code>number</code> | The secondary VLAN ID for this port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.pvlanMapping">pvlanMapping</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>[]</code> | pvlan_mapping block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.standbyUplinks">standbyUplinks</a></code> | <code>string[]</code> | List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.teamingPolicy">teamingPolicy</a></code> | <code>string</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.txUplink">txUplink</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.uplinks">uplinks</a></code> | <code>string[]</code> | A list of uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpMaximumMbit">vdpMaximumMbit</a></code> | <code>number</code> | The maximum allowed usage for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpReservationMbit">vdpReservationMbit</a></code> | <code>number</code> | The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareCount">vdpShareCount</a></code> | <code>number</code> | The amount of shares to allocate to the vdp traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareLevel">vdpShareLevel</a></code> | <code>string</code> | The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.version">version</a></code> | <code>string</code> | The version of this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineMaximumMbit">virtualmachineMaximumMbit</a></code> | <code>number</code> | The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineReservationMbit">virtualmachineReservationMbit</a></code> | <code>number</code> | The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareCount">virtualmachineShareCount</a></code> | <code>number</code> | The amount of shares to allocate to the virtualMachine traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareLevel">virtualmachineShareLevel</a></code> | <code>string</code> | The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanId">vlanId</a></code> | <code>number</code> | The VLAN ID for single VLAN mode. 0 denotes no VLAN. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanRange">vlanRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>[]</code> | vlan_range block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionMaximumMbit">vmotionMaximumMbit</a></code> | <code>number</code> | The maximum allowed usage for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionReservationMbit">vmotionReservationMbit</a></code> | <code>number</code> | The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareCount">vmotionShareCount</a></code> | <code>number</code> | The amount of shares to allocate to the vmotion traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareLevel">vmotionShareLevel</a></code> | <code>string</code> | The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanMaximumMbit">vsanMaximumMbit</a></code> | <code>number</code> | The maximum allowed usage for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanReservationMbit">vsanReservationMbit</a></code> | <code>number</code> | The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareCount">vsanShareCount</a></code> | <code>number</code> | The amount of shares to allocate to the vsan traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareLevel">vsanShareLevel</a></code> | <code>string</code> | The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

The ID of the datacenter to create this virtual switch in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#datacenter_id DistributedVirtualSwitch#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for the DVS. Must be unique in the folder that it is being created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#name DistributedVirtualSwitch#name}

---

##### `activeUplinks`<sup>Optional</sup> <a name="activeUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.activeUplinks"></a>

```typescript
public readonly activeUplinks: string[];
```

- *Type:* string[]

List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#active_uplinks DistributedVirtualSwitch#active_uplinks}

---

##### `allowForgedTransmits`<sup>Optional</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowForgedTransmits"></a>

```typescript
public readonly allowForgedTransmits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#allow_forged_transmits DistributedVirtualSwitch#allow_forged_transmits}

---

##### `allowMacChanges`<sup>Optional</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowMacChanges"></a>

```typescript
public readonly allowMacChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#allow_mac_changes DistributedVirtualSwitch#allow_mac_changes}

---

##### `allowPromiscuous`<sup>Optional</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowPromiscuous"></a>

```typescript
public readonly allowPromiscuous: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#allow_promiscuous DistributedVirtualSwitch#allow_promiscuous}

---

##### `backupnfcMaximumMbit`<sup>Optional</sup> <a name="backupnfcMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcMaximumMbit"></a>

```typescript
public readonly backupnfcMaximumMbit: number;
```

- *Type:* number

The maximum allowed usage for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#backupnfc_maximum_mbit DistributedVirtualSwitch#backupnfc_maximum_mbit}

---

##### `backupnfcReservationMbit`<sup>Optional</sup> <a name="backupnfcReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcReservationMbit"></a>

```typescript
public readonly backupnfcReservationMbit: number;
```

- *Type:* number

The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#backupnfc_reservation_mbit DistributedVirtualSwitch#backupnfc_reservation_mbit}

---

##### `backupnfcShareCount`<sup>Optional</sup> <a name="backupnfcShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareCount"></a>

```typescript
public readonly backupnfcShareCount: number;
```

- *Type:* number

The amount of shares to allocate to the backupNfc traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#backupnfc_share_count DistributedVirtualSwitch#backupnfc_share_count}

---

##### `backupnfcShareLevel`<sup>Optional</sup> <a name="backupnfcShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareLevel"></a>

```typescript
public readonly backupnfcShareLevel: string;
```

- *Type:* string

The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#backupnfc_share_level DistributedVirtualSwitch#backupnfc_share_level}

---

##### `blockAllPorts`<sup>Optional</sup> <a name="blockAllPorts" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.blockAllPorts"></a>

```typescript
public readonly blockAllPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether to block all ports by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#block_all_ports DistributedVirtualSwitch#block_all_ports}

---

##### `checkBeacon`<sup>Optional</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.checkBeacon"></a>

```typescript
public readonly checkBeacon: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable beacon probing on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#check_beacon DistributedVirtualSwitch#check_beacon}

---

##### `contactDetail`<sup>Optional</sup> <a name="contactDetail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactDetail"></a>

```typescript
public readonly contactDetail: string;
```

- *Type:* string

The contact detail for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#contact_detail DistributedVirtualSwitch#contact_detail}

---

##### `contactName`<sup>Optional</sup> <a name="contactName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactName"></a>

```typescript
public readonly contactName: string;
```

- *Type:* string

The contact name for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#contact_name DistributedVirtualSwitch#contact_name}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#custom_attributes DistributedVirtualSwitch#custom_attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#description DistributedVirtualSwitch#description}

---

##### `directpathGen2Allowed`<sup>Optional</sup> <a name="directpathGen2Allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.directpathGen2Allowed"></a>

```typescript
public readonly directpathGen2Allowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow VMDirectPath Gen2 on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#directpath_gen2_allowed DistributedVirtualSwitch#directpath_gen2_allowed}

---

##### `egressShapingAverageBandwidth`<sup>Optional</sup> <a name="egressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingAverageBandwidth"></a>

```typescript
public readonly egressShapingAverageBandwidth: number;
```

- *Type:* number

The average egress bandwidth in bits per second if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#egress_shaping_average_bandwidth DistributedVirtualSwitch#egress_shaping_average_bandwidth}

---

##### `egressShapingBurstSize`<sup>Optional</sup> <a name="egressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingBurstSize"></a>

```typescript
public readonly egressShapingBurstSize: number;
```

- *Type:* number

The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#egress_shaping_burst_size DistributedVirtualSwitch#egress_shaping_burst_size}

---

##### `egressShapingEnabled`<sup>Optional</sup> <a name="egressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingEnabled"></a>

```typescript
public readonly egressShapingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if the traffic shaper is enabled for egress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#egress_shaping_enabled DistributedVirtualSwitch#egress_shaping_enabled}

---

##### `egressShapingPeakBandwidth`<sup>Optional</sup> <a name="egressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingPeakBandwidth"></a>

```typescript
public readonly egressShapingPeakBandwidth: number;
```

- *Type:* number

The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#egress_shaping_peak_bandwidth DistributedVirtualSwitch#egress_shaping_peak_bandwidth}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.failback"></a>

```typescript
public readonly failback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#failback DistributedVirtualSwitch#failback}

---

##### `faulttoleranceMaximumMbit`<sup>Optional</sup> <a name="faulttoleranceMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceMaximumMbit"></a>

```typescript
public readonly faulttoleranceMaximumMbit: number;
```

- *Type:* number

The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#faulttolerance_maximum_mbit DistributedVirtualSwitch#faulttolerance_maximum_mbit}

---

##### `faulttoleranceReservationMbit`<sup>Optional</sup> <a name="faulttoleranceReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceReservationMbit"></a>

```typescript
public readonly faulttoleranceReservationMbit: number;
```

- *Type:* number

The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#faulttolerance_reservation_mbit DistributedVirtualSwitch#faulttolerance_reservation_mbit}

---

##### `faulttoleranceShareCount`<sup>Optional</sup> <a name="faulttoleranceShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareCount"></a>

```typescript
public readonly faulttoleranceShareCount: number;
```

- *Type:* number

The amount of shares to allocate to the faultTolerance traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#faulttolerance_share_count DistributedVirtualSwitch#faulttolerance_share_count}

---

##### `faulttoleranceShareLevel`<sup>Optional</sup> <a name="faulttoleranceShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareLevel"></a>

```typescript
public readonly faulttoleranceShareLevel: string;
```

- *Type:* string

The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#faulttolerance_share_level DistributedVirtualSwitch#faulttolerance_share_level}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The folder to create this virtual switch in, relative to the datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#folder DistributedVirtualSwitch#folder}

---

##### `hbrMaximumMbit`<sup>Optional</sup> <a name="hbrMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrMaximumMbit"></a>

```typescript
public readonly hbrMaximumMbit: number;
```

- *Type:* number

The maximum allowed usage for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#hbr_maximum_mbit DistributedVirtualSwitch#hbr_maximum_mbit}

---

##### `hbrReservationMbit`<sup>Optional</sup> <a name="hbrReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrReservationMbit"></a>

```typescript
public readonly hbrReservationMbit: number;
```

- *Type:* number

The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#hbr_reservation_mbit DistributedVirtualSwitch#hbr_reservation_mbit}

---

##### `hbrShareCount`<sup>Optional</sup> <a name="hbrShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareCount"></a>

```typescript
public readonly hbrShareCount: number;
```

- *Type:* number

The amount of shares to allocate to the hbr traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#hbr_share_count DistributedVirtualSwitch#hbr_share_count}

---

##### `hbrShareLevel`<sup>Optional</sup> <a name="hbrShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareLevel"></a>

```typescript
public readonly hbrShareLevel: string;
```

- *Type:* string

The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#hbr_share_level DistributedVirtualSwitch#hbr_share_level}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.host"></a>

```typescript
public readonly host: IResolvable | DistributedVirtualSwitchHost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>[]

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#host DistributedVirtualSwitch#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreOtherPvlanMappings`<sup>Optional</sup> <a name="ignoreOtherPvlanMappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ignoreOtherPvlanMappings"></a>

```typescript
public readonly ignoreOtherPvlanMappings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to ignore existing PVLAN mappings not managed by this resource. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#ignore_other_pvlan_mappings DistributedVirtualSwitch#ignore_other_pvlan_mappings}

---

##### `ingressShapingAverageBandwidth`<sup>Optional</sup> <a name="ingressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingAverageBandwidth"></a>

```typescript
public readonly ingressShapingAverageBandwidth: number;
```

- *Type:* number

The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#ingress_shaping_average_bandwidth DistributedVirtualSwitch#ingress_shaping_average_bandwidth}

---

##### `ingressShapingBurstSize`<sup>Optional</sup> <a name="ingressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingBurstSize"></a>

```typescript
public readonly ingressShapingBurstSize: number;
```

- *Type:* number

The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#ingress_shaping_burst_size DistributedVirtualSwitch#ingress_shaping_burst_size}

---

##### `ingressShapingEnabled`<sup>Optional</sup> <a name="ingressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingEnabled"></a>

```typescript
public readonly ingressShapingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if the traffic shaper is enabled for ingress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#ingress_shaping_enabled DistributedVirtualSwitch#ingress_shaping_enabled}

---

##### `ingressShapingPeakBandwidth`<sup>Optional</sup> <a name="ingressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingPeakBandwidth"></a>

```typescript
public readonly ingressShapingPeakBandwidth: number;
```

- *Type:* number

The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#ingress_shaping_peak_bandwidth DistributedVirtualSwitch#ingress_shaping_peak_bandwidth}

---

##### `ipv4Address`<sup>Optional</sup> <a name="ipv4Address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

The IPv4 address of the switch.

This can be used to see the DVS as a unique device with NetFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#ipv4_address DistributedVirtualSwitch#ipv4_address}

---

##### `iscsiMaximumMbit`<sup>Optional</sup> <a name="iscsiMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiMaximumMbit"></a>

```typescript
public readonly iscsiMaximumMbit: number;
```

- *Type:* number

The maximum allowed usage for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#iscsi_maximum_mbit DistributedVirtualSwitch#iscsi_maximum_mbit}

---

##### `iscsiReservationMbit`<sup>Optional</sup> <a name="iscsiReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiReservationMbit"></a>

```typescript
public readonly iscsiReservationMbit: number;
```

- *Type:* number

The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#iscsi_reservation_mbit DistributedVirtualSwitch#iscsi_reservation_mbit}

---

##### `iscsiShareCount`<sup>Optional</sup> <a name="iscsiShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareCount"></a>

```typescript
public readonly iscsiShareCount: number;
```

- *Type:* number

The amount of shares to allocate to the iSCSI traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#iscsi_share_count DistributedVirtualSwitch#iscsi_share_count}

---

##### `iscsiShareLevel`<sup>Optional</sup> <a name="iscsiShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareLevel"></a>

```typescript
public readonly iscsiShareLevel: string;
```

- *Type:* string

The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#iscsi_share_level DistributedVirtualSwitch#iscsi_share_level}

---

##### `lacpApiVersion`<sup>Optional</sup> <a name="lacpApiVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpApiVersion"></a>

```typescript
public readonly lacpApiVersion: string;
```

- *Type:* string

The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#lacp_api_version DistributedVirtualSwitch#lacp_api_version}

---

##### `lacpEnabled`<sup>Optional</sup> <a name="lacpEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpEnabled"></a>

```typescript
public readonly lacpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to enable LACP on all uplink ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#lacp_enabled DistributedVirtualSwitch#lacp_enabled}

---

##### `lacpMode`<sup>Optional</sup> <a name="lacpMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpMode"></a>

```typescript
public readonly lacpMode: string;
```

- *Type:* string

The uplink LACP mode to use. Can be one of active or passive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#lacp_mode DistributedVirtualSwitch#lacp_mode}

---

##### `linkDiscoveryOperation`<sup>Optional</sup> <a name="linkDiscoveryOperation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryOperation"></a>

```typescript
public readonly linkDiscoveryOperation: string;
```

- *Type:* string

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#link_discovery_operation DistributedVirtualSwitch#link_discovery_operation}

---

##### `linkDiscoveryProtocol`<sup>Optional</sup> <a name="linkDiscoveryProtocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryProtocol"></a>

```typescript
public readonly linkDiscoveryProtocol: string;
```

- *Type:* string

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#link_discovery_protocol DistributedVirtualSwitch#link_discovery_protocol}

---

##### `managementMaximumMbit`<sup>Optional</sup> <a name="managementMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementMaximumMbit"></a>

```typescript
public readonly managementMaximumMbit: number;
```

- *Type:* number

The maximum allowed usage for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#management_maximum_mbit DistributedVirtualSwitch#management_maximum_mbit}

---

##### `managementReservationMbit`<sup>Optional</sup> <a name="managementReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementReservationMbit"></a>

```typescript
public readonly managementReservationMbit: number;
```

- *Type:* number

The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#management_reservation_mbit DistributedVirtualSwitch#management_reservation_mbit}

---

##### `managementShareCount`<sup>Optional</sup> <a name="managementShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareCount"></a>

```typescript
public readonly managementShareCount: number;
```

- *Type:* number

The amount of shares to allocate to the management traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#management_share_count DistributedVirtualSwitch#management_share_count}

---

##### `managementShareLevel`<sup>Optional</sup> <a name="managementShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareLevel"></a>

```typescript
public readonly managementShareLevel: string;
```

- *Type:* string

The allocation level for the management traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#management_share_level DistributedVirtualSwitch#management_share_level}

---

##### `maxMtu`<sup>Optional</sup> <a name="maxMtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.maxMtu"></a>

```typescript
public readonly maxMtu: number;
```

- *Type:* number

The maximum MTU on the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#max_mtu DistributedVirtualSwitch#max_mtu}

---

##### `multicastFilteringMode`<sup>Optional</sup> <a name="multicastFilteringMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.multicastFilteringMode"></a>

```typescript
public readonly multicastFilteringMode: string;
```

- *Type:* string

The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#multicast_filtering_mode DistributedVirtualSwitch#multicast_filtering_mode}

---

##### `netflowActiveFlowTimeout`<sup>Optional</sup> <a name="netflowActiveFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowActiveFlowTimeout"></a>

```typescript
public readonly netflowActiveFlowTimeout: number;
```

- *Type:* number

The number of seconds after which active flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#netflow_active_flow_timeout DistributedVirtualSwitch#netflow_active_flow_timeout}

---

##### `netflowCollectorIpAddress`<sup>Optional</sup> <a name="netflowCollectorIpAddress" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorIpAddress"></a>

```typescript
public readonly netflowCollectorIpAddress: string;
```

- *Type:* string

IP address for the netflow collector, using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#netflow_collector_ip_address DistributedVirtualSwitch#netflow_collector_ip_address}

---

##### `netflowCollectorPort`<sup>Optional</sup> <a name="netflowCollectorPort" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorPort"></a>

```typescript
public readonly netflowCollectorPort: number;
```

- *Type:* number

The port for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#netflow_collector_port DistributedVirtualSwitch#netflow_collector_port}

---

##### `netflowEnabled`<sup>Optional</sup> <a name="netflowEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowEnabled"></a>

```typescript
public readonly netflowEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether to enable netflow on all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#netflow_enabled DistributedVirtualSwitch#netflow_enabled}

---

##### `netflowIdleFlowTimeout`<sup>Optional</sup> <a name="netflowIdleFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowIdleFlowTimeout"></a>

```typescript
public readonly netflowIdleFlowTimeout: number;
```

- *Type:* number

The number of seconds after which idle flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#netflow_idle_flow_timeout DistributedVirtualSwitch#netflow_idle_flow_timeout}

---

##### `netflowInternalFlowsOnly`<sup>Optional</sup> <a name="netflowInternalFlowsOnly" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowInternalFlowsOnly"></a>

```typescript
public readonly netflowInternalFlowsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to limit analysis to traffic that has both source and destination served by the same host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#netflow_internal_flows_only DistributedVirtualSwitch#netflow_internal_flows_only}

---

##### `netflowObservationDomainId`<sup>Optional</sup> <a name="netflowObservationDomainId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowObservationDomainId"></a>

```typescript
public readonly netflowObservationDomainId: number;
```

- *Type:* number

The observation Domain ID for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#netflow_observation_domain_id DistributedVirtualSwitch#netflow_observation_domain_id}

---

##### `netflowSamplingRate`<sup>Optional</sup> <a name="netflowSamplingRate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowSamplingRate"></a>

```typescript
public readonly netflowSamplingRate: number;
```

- *Type:* number

The ratio of total number of packets to the number of packets analyzed.

Set to 0 to disable sampling, meaning that all packets are analyzed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#netflow_sampling_rate DistributedVirtualSwitch#netflow_sampling_rate}

---

##### `networkResourceControlEnabled`<sup>Optional</sup> <a name="networkResourceControlEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlEnabled"></a>

```typescript
public readonly networkResourceControlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#network_resource_control_enabled DistributedVirtualSwitch#network_resource_control_enabled}

---

##### `networkResourceControlVersion`<sup>Optional</sup> <a name="networkResourceControlVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlVersion"></a>

```typescript
public readonly networkResourceControlVersion: string;
```

- *Type:* string

The network I/O control version to use. Can be one of version2 or version3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#network_resource_control_version DistributedVirtualSwitch#network_resource_control_version}

---

##### `nfsMaximumMbit`<sup>Optional</sup> <a name="nfsMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsMaximumMbit"></a>

```typescript
public readonly nfsMaximumMbit: number;
```

- *Type:* number

The maximum allowed usage for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#nfs_maximum_mbit DistributedVirtualSwitch#nfs_maximum_mbit}

---

##### `nfsReservationMbit`<sup>Optional</sup> <a name="nfsReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsReservationMbit"></a>

```typescript
public readonly nfsReservationMbit: number;
```

- *Type:* number

The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#nfs_reservation_mbit DistributedVirtualSwitch#nfs_reservation_mbit}

---

##### `nfsShareCount`<sup>Optional</sup> <a name="nfsShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareCount"></a>

```typescript
public readonly nfsShareCount: number;
```

- *Type:* number

The amount of shares to allocate to the nfs traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#nfs_share_count DistributedVirtualSwitch#nfs_share_count}

---

##### `nfsShareLevel`<sup>Optional</sup> <a name="nfsShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareLevel"></a>

```typescript
public readonly nfsShareLevel: string;
```

- *Type:* string

The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#nfs_share_level DistributedVirtualSwitch#nfs_share_level}

---

##### `notifySwitches`<sup>Optional</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.notifySwitches"></a>

```typescript
public readonly notifySwitches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#notify_switches DistributedVirtualSwitch#notify_switches}

---

##### `portPrivateSecondaryVlanId`<sup>Optional</sup> <a name="portPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.portPrivateSecondaryVlanId"></a>

```typescript
public readonly portPrivateSecondaryVlanId: number;
```

- *Type:* number

The secondary VLAN ID for this port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#port_private_secondary_vlan_id DistributedVirtualSwitch#port_private_secondary_vlan_id}

---

##### `pvlanMapping`<sup>Optional</sup> <a name="pvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.pvlanMapping"></a>

```typescript
public readonly pvlanMapping: IResolvable | DistributedVirtualSwitchPvlanMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>[]

pvlan_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#pvlan_mapping DistributedVirtualSwitch#pvlan_mapping}

---

##### `standbyUplinks`<sup>Optional</sup> <a name="standbyUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.standbyUplinks"></a>

```typescript
public readonly standbyUplinks: string[];
```

- *Type:* string[]

List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#standby_uplinks DistributedVirtualSwitch#standby_uplinks}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#tags DistributedVirtualSwitch#tags}

---

##### `teamingPolicy`<sup>Optional</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.teamingPolicy"></a>

```typescript
public readonly teamingPolicy: string;
```

- *Type:* string

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#teaming_policy DistributedVirtualSwitch#teaming_policy}

---

##### `txUplink`<sup>Optional</sup> <a name="txUplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.txUplink"></a>

```typescript
public readonly txUplink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#tx_uplink DistributedVirtualSwitch#tx_uplink}

---

##### `uplinks`<sup>Optional</sup> <a name="uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.uplinks"></a>

```typescript
public readonly uplinks: string[];
```

- *Type:* string[]

A list of uplink ports.

The contents of this list control both the uplink count and names of the uplinks on the DVS across hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#uplinks DistributedVirtualSwitch#uplinks}

---

##### `vdpMaximumMbit`<sup>Optional</sup> <a name="vdpMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpMaximumMbit"></a>

```typescript
public readonly vdpMaximumMbit: number;
```

- *Type:* number

The maximum allowed usage for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vdp_maximum_mbit DistributedVirtualSwitch#vdp_maximum_mbit}

---

##### `vdpReservationMbit`<sup>Optional</sup> <a name="vdpReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpReservationMbit"></a>

```typescript
public readonly vdpReservationMbit: number;
```

- *Type:* number

The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vdp_reservation_mbit DistributedVirtualSwitch#vdp_reservation_mbit}

---

##### `vdpShareCount`<sup>Optional</sup> <a name="vdpShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareCount"></a>

```typescript
public readonly vdpShareCount: number;
```

- *Type:* number

The amount of shares to allocate to the vdp traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vdp_share_count DistributedVirtualSwitch#vdp_share_count}

---

##### `vdpShareLevel`<sup>Optional</sup> <a name="vdpShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareLevel"></a>

```typescript
public readonly vdpShareLevel: string;
```

- *Type:* string

The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vdp_share_level DistributedVirtualSwitch#vdp_share_level}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of this virtual switch.

Allowed versions are 8.0.0, 7.0.3, 7.0.2, 7.0.0, 6.6.0, 6.5.0, 6.0.0, 5.5.0, 5.1.0, and 5.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#version DistributedVirtualSwitch#version}

---

##### `virtualmachineMaximumMbit`<sup>Optional</sup> <a name="virtualmachineMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineMaximumMbit"></a>

```typescript
public readonly virtualmachineMaximumMbit: number;
```

- *Type:* number

The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#virtualmachine_maximum_mbit DistributedVirtualSwitch#virtualmachine_maximum_mbit}

---

##### `virtualmachineReservationMbit`<sup>Optional</sup> <a name="virtualmachineReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineReservationMbit"></a>

```typescript
public readonly virtualmachineReservationMbit: number;
```

- *Type:* number

The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#virtualmachine_reservation_mbit DistributedVirtualSwitch#virtualmachine_reservation_mbit}

---

##### `virtualmachineShareCount`<sup>Optional</sup> <a name="virtualmachineShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareCount"></a>

```typescript
public readonly virtualmachineShareCount: number;
```

- *Type:* number

The amount of shares to allocate to the virtualMachine traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#virtualmachine_share_count DistributedVirtualSwitch#virtualmachine_share_count}

---

##### `virtualmachineShareLevel`<sup>Optional</sup> <a name="virtualmachineShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareLevel"></a>

```typescript
public readonly virtualmachineShareLevel: string;
```

- *Type:* string

The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#virtualmachine_share_level DistributedVirtualSwitch#virtualmachine_share_level}

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

The VLAN ID for single VLAN mode. 0 denotes no VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vlan_id DistributedVirtualSwitch#vlan_id}

---

##### `vlanRange`<sup>Optional</sup> <a name="vlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanRange"></a>

```typescript
public readonly vlanRange: IResolvable | DistributedVirtualSwitchVlanRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>[]

vlan_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vlan_range DistributedVirtualSwitch#vlan_range}

---

##### `vmotionMaximumMbit`<sup>Optional</sup> <a name="vmotionMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionMaximumMbit"></a>

```typescript
public readonly vmotionMaximumMbit: number;
```

- *Type:* number

The maximum allowed usage for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vmotion_maximum_mbit DistributedVirtualSwitch#vmotion_maximum_mbit}

---

##### `vmotionReservationMbit`<sup>Optional</sup> <a name="vmotionReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionReservationMbit"></a>

```typescript
public readonly vmotionReservationMbit: number;
```

- *Type:* number

The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vmotion_reservation_mbit DistributedVirtualSwitch#vmotion_reservation_mbit}

---

##### `vmotionShareCount`<sup>Optional</sup> <a name="vmotionShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareCount"></a>

```typescript
public readonly vmotionShareCount: number;
```

- *Type:* number

The amount of shares to allocate to the vmotion traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vmotion_share_count DistributedVirtualSwitch#vmotion_share_count}

---

##### `vmotionShareLevel`<sup>Optional</sup> <a name="vmotionShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareLevel"></a>

```typescript
public readonly vmotionShareLevel: string;
```

- *Type:* string

The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vmotion_share_level DistributedVirtualSwitch#vmotion_share_level}

---

##### `vsanMaximumMbit`<sup>Optional</sup> <a name="vsanMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanMaximumMbit"></a>

```typescript
public readonly vsanMaximumMbit: number;
```

- *Type:* number

The maximum allowed usage for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vsan_maximum_mbit DistributedVirtualSwitch#vsan_maximum_mbit}

---

##### `vsanReservationMbit`<sup>Optional</sup> <a name="vsanReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanReservationMbit"></a>

```typescript
public readonly vsanReservationMbit: number;
```

- *Type:* number

The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vsan_reservation_mbit DistributedVirtualSwitch#vsan_reservation_mbit}

---

##### `vsanShareCount`<sup>Optional</sup> <a name="vsanShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareCount"></a>

```typescript
public readonly vsanShareCount: number;
```

- *Type:* number

The amount of shares to allocate to the vsan traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vsan_share_count DistributedVirtualSwitch#vsan_share_count}

---

##### `vsanShareLevel`<sup>Optional</sup> <a name="vsanShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareLevel"></a>

```typescript
public readonly vsanShareLevel: string;
```

- *Type:* string

The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#vsan_share_level DistributedVirtualSwitch#vsan_share_level}

---

### DistributedVirtualSwitchHost <a name="DistributedVirtualSwitchHost" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.Initializer"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

const distributedVirtualSwitchHost: distributedVirtualSwitch.DistributedVirtualSwitchHost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.hostSystemId">hostSystemId</a></code> | <code>string</code> | The managed object ID of the host this specification applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.devices">devices</a></code> | <code>string[]</code> | Name of the physical NIC to be added to the proxy switch. |

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.hostSystemId"></a>

```typescript
public readonly hostSystemId: string;
```

- *Type:* string

The managed object ID of the host this specification applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#host_system_id DistributedVirtualSwitch#host_system_id}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.devices"></a>

```typescript
public readonly devices: string[];
```

- *Type:* string[]

Name of the physical NIC to be added to the proxy switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#devices DistributedVirtualSwitch#devices}

---

### DistributedVirtualSwitchPvlanMapping <a name="DistributedVirtualSwitchPvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.Initializer"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

const distributedVirtualSwitchPvlanMapping: distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.primaryVlanId">primaryVlanId</a></code> | <code>number</code> | The primary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.pvlanType">pvlanType</a></code> | <code>string</code> | The private VLAN type. Valid values are promiscuous, community and isolated. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.secondaryVlanId">secondaryVlanId</a></code> | <code>number</code> | The secondary VLAN ID. |

---

##### `primaryVlanId`<sup>Required</sup> <a name="primaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.primaryVlanId"></a>

```typescript
public readonly primaryVlanId: number;
```

- *Type:* number

The primary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#primary_vlan_id DistributedVirtualSwitch#primary_vlan_id}

---

##### `pvlanType`<sup>Required</sup> <a name="pvlanType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.pvlanType"></a>

```typescript
public readonly pvlanType: string;
```

- *Type:* string

The private VLAN type. Valid values are promiscuous, community and isolated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#pvlan_type DistributedVirtualSwitch#pvlan_type}

---

##### `secondaryVlanId`<sup>Required</sup> <a name="secondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.secondaryVlanId"></a>

```typescript
public readonly secondaryVlanId: number;
```

- *Type:* number

The secondary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#secondary_vlan_id DistributedVirtualSwitch#secondary_vlan_id}

---

### DistributedVirtualSwitchVlanRange <a name="DistributedVirtualSwitchVlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.Initializer"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

const distributedVirtualSwitchVlanRange: distributedVirtualSwitch.DistributedVirtualSwitchVlanRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.maxVlan">maxVlan</a></code> | <code>number</code> | The minimum VLAN to use in the range. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.minVlan">minVlan</a></code> | <code>number</code> | The minimum VLAN to use in the range. |

---

##### `maxVlan`<sup>Required</sup> <a name="maxVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.maxVlan"></a>

```typescript
public readonly maxVlan: number;
```

- *Type:* number

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#max_vlan DistributedVirtualSwitch#max_vlan}

---

##### `minVlan`<sup>Required</sup> <a name="minVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.minVlan"></a>

```typescript
public readonly minVlan: number;
```

- *Type:* number

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/distributed_virtual_switch#min_vlan DistributedVirtualSwitch#min_vlan}

---

## Classes <a name="Classes" id="Classes"></a>

### DistributedVirtualSwitchHostList <a name="DistributedVirtualSwitchHostList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

new distributedVirtualSwitch.DistributedVirtualSwitchHostList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.get"></a>

```typescript
public get(index: number): DistributedVirtualSwitchHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DistributedVirtualSwitchHost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>[]

---


### DistributedVirtualSwitchHostOutputReference <a name="DistributedVirtualSwitchHostOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

new distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resetDevices">resetDevices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDevices` <a name="resetDevices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resetDevices"></a>

```typescript
public resetDevices(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devicesInput">devicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemIdInput">hostSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devices">devices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemId">hostSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `devicesInput`<sup>Optional</sup> <a name="devicesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devicesInput"></a>

```typescript
public readonly devicesInput: string[];
```

- *Type:* string[]

---

##### `hostSystemIdInput`<sup>Optional</sup> <a name="hostSystemIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemIdInput"></a>

```typescript
public readonly hostSystemIdInput: string;
```

- *Type:* string

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devices"></a>

```typescript
public readonly devices: string[];
```

- *Type:* string[]

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemId"></a>

```typescript
public readonly hostSystemId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DistributedVirtualSwitchHost;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>

---


### DistributedVirtualSwitchPvlanMappingList <a name="DistributedVirtualSwitchPvlanMappingList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

new distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.get"></a>

```typescript
public get(index: number): DistributedVirtualSwitchPvlanMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DistributedVirtualSwitchPvlanMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>[]

---


### DistributedVirtualSwitchPvlanMappingOutputReference <a name="DistributedVirtualSwitchPvlanMappingOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

new distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanIdInput">primaryVlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanTypeInput">pvlanTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanIdInput">secondaryVlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanId">primaryVlanId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanType">pvlanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanId">secondaryVlanId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryVlanIdInput`<sup>Optional</sup> <a name="primaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanIdInput"></a>

```typescript
public readonly primaryVlanIdInput: number;
```

- *Type:* number

---

##### `pvlanTypeInput`<sup>Optional</sup> <a name="pvlanTypeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanTypeInput"></a>

```typescript
public readonly pvlanTypeInput: string;
```

- *Type:* string

---

##### `secondaryVlanIdInput`<sup>Optional</sup> <a name="secondaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanIdInput"></a>

```typescript
public readonly secondaryVlanIdInput: number;
```

- *Type:* number

---

##### `primaryVlanId`<sup>Required</sup> <a name="primaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanId"></a>

```typescript
public readonly primaryVlanId: number;
```

- *Type:* number

---

##### `pvlanType`<sup>Required</sup> <a name="pvlanType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanType"></a>

```typescript
public readonly pvlanType: string;
```

- *Type:* string

---

##### `secondaryVlanId`<sup>Required</sup> <a name="secondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanId"></a>

```typescript
public readonly secondaryVlanId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DistributedVirtualSwitchPvlanMapping;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>

---


### DistributedVirtualSwitchVlanRangeList <a name="DistributedVirtualSwitchVlanRangeList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

new distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.get"></a>

```typescript
public get(index: number): DistributedVirtualSwitchVlanRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DistributedVirtualSwitchVlanRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>[]

---


### DistributedVirtualSwitchVlanRangeOutputReference <a name="DistributedVirtualSwitchVlanRangeOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer"></a>

```typescript
import { distributedVirtualSwitch } from '@cdktf/provider-vsphere'

new distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlanInput">maxVlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlanInput">minVlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlan">maxVlan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlan">minVlan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxVlanInput`<sup>Optional</sup> <a name="maxVlanInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlanInput"></a>

```typescript
public readonly maxVlanInput: number;
```

- *Type:* number

---

##### `minVlanInput`<sup>Optional</sup> <a name="minVlanInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlanInput"></a>

```typescript
public readonly minVlanInput: number;
```

- *Type:* number

---

##### `maxVlan`<sup>Required</sup> <a name="maxVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlan"></a>

```typescript
public readonly maxVlan: number;
```

- *Type:* number

---

##### `minVlan`<sup>Required</sup> <a name="minVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlan"></a>

```typescript
public readonly minVlan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DistributedVirtualSwitchVlanRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>

---



