# `distributedVirtualSwitch` Submodule <a name="`distributedVirtualSwitch` Submodule" id="@cdktf/provider-vsphere.distributedVirtualSwitch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DistributedVirtualSwitch <a name="DistributedVirtualSwitch" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch vsphere_distributed_virtual_switch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

distributedvirtualswitch.NewDistributedVirtualSwitch(scope Construct, id *string, config DistributedVirtualSwitchConfig) DistributedVirtualSwitch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig">DistributedVirtualSwitchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig">DistributedVirtualSwitchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putHost">PutHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putPvlanMapping">PutPvlanMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putVlanRange">PutVlanRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetActiveUplinks">ResetActiveUplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowForgedTransmits">ResetAllowForgedTransmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowMacChanges">ResetAllowMacChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowPromiscuous">ResetAllowPromiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcMaximumMbit">ResetBackupnfcMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcReservationMbit">ResetBackupnfcReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareCount">ResetBackupnfcShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareLevel">ResetBackupnfcShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBlockAllPorts">ResetBlockAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCheckBeacon">ResetCheckBeacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactDetail">ResetContactDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactName">ResetContactName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDirectpathGen2Allowed">ResetDirectpathGen2Allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingAverageBandwidth">ResetEgressShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingBurstSize">ResetEgressShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingEnabled">ResetEgressShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingPeakBandwidth">ResetEgressShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFailback">ResetFailback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceMaximumMbit">ResetFaulttoleranceMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceReservationMbit">ResetFaulttoleranceReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareCount">ResetFaulttoleranceShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareLevel">ResetFaulttoleranceShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrMaximumMbit">ResetHbrMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrReservationMbit">ResetHbrReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareCount">ResetHbrShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareLevel">ResetHbrShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIgnoreOtherPvlanMappings">ResetIgnoreOtherPvlanMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingAverageBandwidth">ResetIngressShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingBurstSize">ResetIngressShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingEnabled">ResetIngressShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingPeakBandwidth">ResetIngressShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIpv4Address">ResetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiMaximumMbit">ResetIscsiMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiReservationMbit">ResetIscsiReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareCount">ResetIscsiShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareLevel">ResetIscsiShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpApiVersion">ResetLacpApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpEnabled">ResetLacpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpMode">ResetLacpMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryOperation">ResetLinkDiscoveryOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryProtocol">ResetLinkDiscoveryProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementMaximumMbit">ResetManagementMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementReservationMbit">ResetManagementReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareCount">ResetManagementShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareLevel">ResetManagementShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMaxMtu">ResetMaxMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMulticastFilteringMode">ResetMulticastFilteringMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowActiveFlowTimeout">ResetNetflowActiveFlowTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorIpAddress">ResetNetflowCollectorIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorPort">ResetNetflowCollectorPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowEnabled">ResetNetflowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowIdleFlowTimeout">ResetNetflowIdleFlowTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowInternalFlowsOnly">ResetNetflowInternalFlowsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowObservationDomainId">ResetNetflowObservationDomainId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowSamplingRate">ResetNetflowSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlEnabled">ResetNetworkResourceControlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlVersion">ResetNetworkResourceControlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsMaximumMbit">ResetNfsMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsReservationMbit">ResetNfsReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareCount">ResetNfsShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareLevel">ResetNfsShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNotifySwitches">ResetNotifySwitches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPortPrivateSecondaryVlanId">ResetPortPrivateSecondaryVlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPvlanMapping">ResetPvlanMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetStandbyUplinks">ResetStandbyUplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTeamingPolicy">ResetTeamingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTxUplink">ResetTxUplink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetUplinks">ResetUplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpMaximumMbit">ResetVdpMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpReservationMbit">ResetVdpReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareCount">ResetVdpShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareLevel">ResetVdpShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineMaximumMbit">ResetVirtualmachineMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineReservationMbit">ResetVirtualmachineReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareCount">ResetVirtualmachineShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareLevel">ResetVirtualmachineShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanId">ResetVlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanRange">ResetVlanRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionMaximumMbit">ResetVmotionMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionReservationMbit">ResetVmotionReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareCount">ResetVmotionShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareLevel">ResetVmotionShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanMaximumMbit">ResetVsanMaximumMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanReservationMbit">ResetVsanReservationMbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareCount">ResetVsanShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareLevel">ResetVsanShareLevel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHost` <a name="PutHost" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putHost"></a>

```go
func PutHost(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putHost.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPvlanMapping` <a name="PutPvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putPvlanMapping"></a>

```go
func PutPvlanMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putPvlanMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVlanRange` <a name="PutVlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putVlanRange"></a>

```go
func PutVlanRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putVlanRange.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActiveUplinks` <a name="ResetActiveUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetActiveUplinks"></a>

```go
func ResetActiveUplinks()
```

##### `ResetAllowForgedTransmits` <a name="ResetAllowForgedTransmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowForgedTransmits"></a>

```go
func ResetAllowForgedTransmits()
```

##### `ResetAllowMacChanges` <a name="ResetAllowMacChanges" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowMacChanges"></a>

```go
func ResetAllowMacChanges()
```

##### `ResetAllowPromiscuous` <a name="ResetAllowPromiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowPromiscuous"></a>

```go
func ResetAllowPromiscuous()
```

##### `ResetBackupnfcMaximumMbit` <a name="ResetBackupnfcMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcMaximumMbit"></a>

```go
func ResetBackupnfcMaximumMbit()
```

##### `ResetBackupnfcReservationMbit` <a name="ResetBackupnfcReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcReservationMbit"></a>

```go
func ResetBackupnfcReservationMbit()
```

##### `ResetBackupnfcShareCount` <a name="ResetBackupnfcShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareCount"></a>

```go
func ResetBackupnfcShareCount()
```

##### `ResetBackupnfcShareLevel` <a name="ResetBackupnfcShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareLevel"></a>

```go
func ResetBackupnfcShareLevel()
```

##### `ResetBlockAllPorts` <a name="ResetBlockAllPorts" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBlockAllPorts"></a>

```go
func ResetBlockAllPorts()
```

##### `ResetCheckBeacon` <a name="ResetCheckBeacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCheckBeacon"></a>

```go
func ResetCheckBeacon()
```

##### `ResetContactDetail` <a name="ResetContactDetail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactDetail"></a>

```go
func ResetContactDetail()
```

##### `ResetContactName` <a name="ResetContactName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactName"></a>

```go
func ResetContactName()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCustomAttributes"></a>

```go
func ResetCustomAttributes()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDirectpathGen2Allowed` <a name="ResetDirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDirectpathGen2Allowed"></a>

```go
func ResetDirectpathGen2Allowed()
```

##### `ResetEgressShapingAverageBandwidth` <a name="ResetEgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingAverageBandwidth"></a>

```go
func ResetEgressShapingAverageBandwidth()
```

##### `ResetEgressShapingBurstSize` <a name="ResetEgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingBurstSize"></a>

```go
func ResetEgressShapingBurstSize()
```

##### `ResetEgressShapingEnabled` <a name="ResetEgressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingEnabled"></a>

```go
func ResetEgressShapingEnabled()
```

##### `ResetEgressShapingPeakBandwidth` <a name="ResetEgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingPeakBandwidth"></a>

```go
func ResetEgressShapingPeakBandwidth()
```

##### `ResetFailback` <a name="ResetFailback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFailback"></a>

```go
func ResetFailback()
```

##### `ResetFaulttoleranceMaximumMbit` <a name="ResetFaulttoleranceMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceMaximumMbit"></a>

```go
func ResetFaulttoleranceMaximumMbit()
```

##### `ResetFaulttoleranceReservationMbit` <a name="ResetFaulttoleranceReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceReservationMbit"></a>

```go
func ResetFaulttoleranceReservationMbit()
```

##### `ResetFaulttoleranceShareCount` <a name="ResetFaulttoleranceShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareCount"></a>

```go
func ResetFaulttoleranceShareCount()
```

##### `ResetFaulttoleranceShareLevel` <a name="ResetFaulttoleranceShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareLevel"></a>

```go
func ResetFaulttoleranceShareLevel()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetHbrMaximumMbit` <a name="ResetHbrMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrMaximumMbit"></a>

```go
func ResetHbrMaximumMbit()
```

##### `ResetHbrReservationMbit` <a name="ResetHbrReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrReservationMbit"></a>

```go
func ResetHbrReservationMbit()
```

##### `ResetHbrShareCount` <a name="ResetHbrShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareCount"></a>

```go
func ResetHbrShareCount()
```

##### `ResetHbrShareLevel` <a name="ResetHbrShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareLevel"></a>

```go
func ResetHbrShareLevel()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHost"></a>

```go
func ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreOtherPvlanMappings` <a name="ResetIgnoreOtherPvlanMappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIgnoreOtherPvlanMappings"></a>

```go
func ResetIgnoreOtherPvlanMappings()
```

##### `ResetIngressShapingAverageBandwidth` <a name="ResetIngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingAverageBandwidth"></a>

```go
func ResetIngressShapingAverageBandwidth()
```

##### `ResetIngressShapingBurstSize` <a name="ResetIngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingBurstSize"></a>

```go
func ResetIngressShapingBurstSize()
```

##### `ResetIngressShapingEnabled` <a name="ResetIngressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingEnabled"></a>

```go
func ResetIngressShapingEnabled()
```

##### `ResetIngressShapingPeakBandwidth` <a name="ResetIngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingPeakBandwidth"></a>

```go
func ResetIngressShapingPeakBandwidth()
```

##### `ResetIpv4Address` <a name="ResetIpv4Address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIpv4Address"></a>

```go
func ResetIpv4Address()
```

##### `ResetIscsiMaximumMbit` <a name="ResetIscsiMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiMaximumMbit"></a>

```go
func ResetIscsiMaximumMbit()
```

##### `ResetIscsiReservationMbit` <a name="ResetIscsiReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiReservationMbit"></a>

```go
func ResetIscsiReservationMbit()
```

##### `ResetIscsiShareCount` <a name="ResetIscsiShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareCount"></a>

```go
func ResetIscsiShareCount()
```

##### `ResetIscsiShareLevel` <a name="ResetIscsiShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareLevel"></a>

```go
func ResetIscsiShareLevel()
```

##### `ResetLacpApiVersion` <a name="ResetLacpApiVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpApiVersion"></a>

```go
func ResetLacpApiVersion()
```

##### `ResetLacpEnabled` <a name="ResetLacpEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpEnabled"></a>

```go
func ResetLacpEnabled()
```

##### `ResetLacpMode` <a name="ResetLacpMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpMode"></a>

```go
func ResetLacpMode()
```

##### `ResetLinkDiscoveryOperation` <a name="ResetLinkDiscoveryOperation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryOperation"></a>

```go
func ResetLinkDiscoveryOperation()
```

##### `ResetLinkDiscoveryProtocol` <a name="ResetLinkDiscoveryProtocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryProtocol"></a>

```go
func ResetLinkDiscoveryProtocol()
```

##### `ResetManagementMaximumMbit` <a name="ResetManagementMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementMaximumMbit"></a>

```go
func ResetManagementMaximumMbit()
```

##### `ResetManagementReservationMbit` <a name="ResetManagementReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementReservationMbit"></a>

```go
func ResetManagementReservationMbit()
```

##### `ResetManagementShareCount` <a name="ResetManagementShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareCount"></a>

```go
func ResetManagementShareCount()
```

##### `ResetManagementShareLevel` <a name="ResetManagementShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareLevel"></a>

```go
func ResetManagementShareLevel()
```

##### `ResetMaxMtu` <a name="ResetMaxMtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMaxMtu"></a>

```go
func ResetMaxMtu()
```

##### `ResetMulticastFilteringMode` <a name="ResetMulticastFilteringMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMulticastFilteringMode"></a>

```go
func ResetMulticastFilteringMode()
```

##### `ResetNetflowActiveFlowTimeout` <a name="ResetNetflowActiveFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowActiveFlowTimeout"></a>

```go
func ResetNetflowActiveFlowTimeout()
```

##### `ResetNetflowCollectorIpAddress` <a name="ResetNetflowCollectorIpAddress" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorIpAddress"></a>

```go
func ResetNetflowCollectorIpAddress()
```

##### `ResetNetflowCollectorPort` <a name="ResetNetflowCollectorPort" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorPort"></a>

```go
func ResetNetflowCollectorPort()
```

##### `ResetNetflowEnabled` <a name="ResetNetflowEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowEnabled"></a>

```go
func ResetNetflowEnabled()
```

##### `ResetNetflowIdleFlowTimeout` <a name="ResetNetflowIdleFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowIdleFlowTimeout"></a>

```go
func ResetNetflowIdleFlowTimeout()
```

##### `ResetNetflowInternalFlowsOnly` <a name="ResetNetflowInternalFlowsOnly" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowInternalFlowsOnly"></a>

```go
func ResetNetflowInternalFlowsOnly()
```

##### `ResetNetflowObservationDomainId` <a name="ResetNetflowObservationDomainId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowObservationDomainId"></a>

```go
func ResetNetflowObservationDomainId()
```

##### `ResetNetflowSamplingRate` <a name="ResetNetflowSamplingRate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowSamplingRate"></a>

```go
func ResetNetflowSamplingRate()
```

##### `ResetNetworkResourceControlEnabled` <a name="ResetNetworkResourceControlEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlEnabled"></a>

```go
func ResetNetworkResourceControlEnabled()
```

##### `ResetNetworkResourceControlVersion` <a name="ResetNetworkResourceControlVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlVersion"></a>

```go
func ResetNetworkResourceControlVersion()
```

##### `ResetNfsMaximumMbit` <a name="ResetNfsMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsMaximumMbit"></a>

```go
func ResetNfsMaximumMbit()
```

##### `ResetNfsReservationMbit` <a name="ResetNfsReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsReservationMbit"></a>

```go
func ResetNfsReservationMbit()
```

##### `ResetNfsShareCount` <a name="ResetNfsShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareCount"></a>

```go
func ResetNfsShareCount()
```

##### `ResetNfsShareLevel` <a name="ResetNfsShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareLevel"></a>

```go
func ResetNfsShareLevel()
```

##### `ResetNotifySwitches` <a name="ResetNotifySwitches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNotifySwitches"></a>

```go
func ResetNotifySwitches()
```

##### `ResetPortPrivateSecondaryVlanId` <a name="ResetPortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPortPrivateSecondaryVlanId"></a>

```go
func ResetPortPrivateSecondaryVlanId()
```

##### `ResetPvlanMapping` <a name="ResetPvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPvlanMapping"></a>

```go
func ResetPvlanMapping()
```

##### `ResetStandbyUplinks` <a name="ResetStandbyUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetStandbyUplinks"></a>

```go
func ResetStandbyUplinks()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTeamingPolicy` <a name="ResetTeamingPolicy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTeamingPolicy"></a>

```go
func ResetTeamingPolicy()
```

##### `ResetTxUplink` <a name="ResetTxUplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTxUplink"></a>

```go
func ResetTxUplink()
```

##### `ResetUplinks` <a name="ResetUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetUplinks"></a>

```go
func ResetUplinks()
```

##### `ResetVdpMaximumMbit` <a name="ResetVdpMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpMaximumMbit"></a>

```go
func ResetVdpMaximumMbit()
```

##### `ResetVdpReservationMbit` <a name="ResetVdpReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpReservationMbit"></a>

```go
func ResetVdpReservationMbit()
```

##### `ResetVdpShareCount` <a name="ResetVdpShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareCount"></a>

```go
func ResetVdpShareCount()
```

##### `ResetVdpShareLevel` <a name="ResetVdpShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareLevel"></a>

```go
func ResetVdpShareLevel()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVersion"></a>

```go
func ResetVersion()
```

##### `ResetVirtualmachineMaximumMbit` <a name="ResetVirtualmachineMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineMaximumMbit"></a>

```go
func ResetVirtualmachineMaximumMbit()
```

##### `ResetVirtualmachineReservationMbit` <a name="ResetVirtualmachineReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineReservationMbit"></a>

```go
func ResetVirtualmachineReservationMbit()
```

##### `ResetVirtualmachineShareCount` <a name="ResetVirtualmachineShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareCount"></a>

```go
func ResetVirtualmachineShareCount()
```

##### `ResetVirtualmachineShareLevel` <a name="ResetVirtualmachineShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareLevel"></a>

```go
func ResetVirtualmachineShareLevel()
```

##### `ResetVlanId` <a name="ResetVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanId"></a>

```go
func ResetVlanId()
```

##### `ResetVlanRange` <a name="ResetVlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanRange"></a>

```go
func ResetVlanRange()
```

##### `ResetVmotionMaximumMbit` <a name="ResetVmotionMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionMaximumMbit"></a>

```go
func ResetVmotionMaximumMbit()
```

##### `ResetVmotionReservationMbit` <a name="ResetVmotionReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionReservationMbit"></a>

```go
func ResetVmotionReservationMbit()
```

##### `ResetVmotionShareCount` <a name="ResetVmotionShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareCount"></a>

```go
func ResetVmotionShareCount()
```

##### `ResetVmotionShareLevel` <a name="ResetVmotionShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareLevel"></a>

```go
func ResetVmotionShareLevel()
```

##### `ResetVsanMaximumMbit` <a name="ResetVsanMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanMaximumMbit"></a>

```go
func ResetVsanMaximumMbit()
```

##### `ResetVsanReservationMbit` <a name="ResetVsanReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanReservationMbit"></a>

```go
func ResetVsanReservationMbit()
```

##### `ResetVsanShareCount` <a name="ResetVsanShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareCount"></a>

```go
func ResetVsanShareCount()
```

##### `ResetVsanShareLevel` <a name="ResetVsanShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareLevel"></a>

```go
func ResetVsanShareLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DistributedVirtualSwitch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

distributedvirtualswitch.DistributedVirtualSwitch_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

distributedvirtualswitch.DistributedVirtualSwitch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

distributedvirtualswitch.DistributedVirtualSwitch_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

distributedvirtualswitch.DistributedVirtualSwitch_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DistributedVirtualSwitch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DistributedVirtualSwitch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DistributedVirtualSwitch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DistributedVirtualSwitch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.configVersion">ConfigVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.host">Host</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList">DistributedVirtualSwitchHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMapping">PvlanMapping</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList">DistributedVirtualSwitchPvlanMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRange">VlanRange</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList">DistributedVirtualSwitchVlanRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinksInput">ActiveUplinksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmitsInput">AllowForgedTransmitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChangesInput">AllowMacChangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuousInput">AllowPromiscuousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbitInput">BackupnfcMaximumMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbitInput">BackupnfcReservationMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCountInput">BackupnfcShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevelInput">BackupnfcShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPortsInput">BlockAllPortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeaconInput">CheckBeaconInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetailInput">ContactDetailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactNameInput">ContactNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributesInput">CustomAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2AllowedInput">DirectpathGen2AllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidthInput">EgressShapingAverageBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSizeInput">EgressShapingBurstSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabledInput">EgressShapingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidthInput">EgressShapingPeakBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failbackInput">FailbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbitInput">FaulttoleranceMaximumMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbitInput">FaulttoleranceReservationMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCountInput">FaulttoleranceShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevelInput">FaulttoleranceShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbitInput">HbrMaximumMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbitInput">HbrReservationMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCountInput">HbrShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevelInput">HbrShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hostInput">HostInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappingsInput">IgnoreOtherPvlanMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidthInput">IngressShapingAverageBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSizeInput">IngressShapingBurstSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabledInput">IngressShapingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidthInput">IngressShapingPeakBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbitInput">IscsiMaximumMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbitInput">IscsiReservationMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCountInput">IscsiShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevelInput">IscsiShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersionInput">LacpApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabledInput">LacpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpModeInput">LacpModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperationInput">LinkDiscoveryOperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocolInput">LinkDiscoveryProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbitInput">ManagementMaximumMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbitInput">ManagementReservationMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCountInput">ManagementShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevelInput">ManagementShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtuInput">MaxMtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringModeInput">MulticastFilteringModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeoutInput">NetflowActiveFlowTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddressInput">NetflowCollectorIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPortInput">NetflowCollectorPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabledInput">NetflowEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeoutInput">NetflowIdleFlowTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnlyInput">NetflowInternalFlowsOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainIdInput">NetflowObservationDomainIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRateInput">NetflowSamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabledInput">NetworkResourceControlEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersionInput">NetworkResourceControlVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbitInput">NfsMaximumMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbitInput">NfsReservationMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCountInput">NfsShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevelInput">NfsShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitchesInput">NotifySwitchesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanIdInput">PortPrivateSecondaryVlanIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMappingInput">PvlanMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinksInput">StandbyUplinksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicyInput">TeamingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplinkInput">TxUplinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinksInput">UplinksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbitInput">VdpMaximumMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbitInput">VdpReservationMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCountInput">VdpShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevelInput">VdpShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbitInput">VirtualmachineMaximumMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbitInput">VirtualmachineReservationMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCountInput">VirtualmachineShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevelInput">VirtualmachineShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanIdInput">VlanIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRangeInput">VlanRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbitInput">VmotionMaximumMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbitInput">VmotionReservationMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCountInput">VmotionShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevelInput">VmotionShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbitInput">VsanMaximumMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbitInput">VsanReservationMbitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCountInput">VsanShareCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevelInput">VsanShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinks">ActiveUplinks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChanges">AllowMacChanges</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbit">BackupnfcMaximumMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbit">BackupnfcReservationMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCount">BackupnfcShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevel">BackupnfcShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPorts">BlockAllPorts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeacon">CheckBeacon</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetail">ContactDetail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactName">ContactName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2Allowed">DirectpathGen2Allowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidth">EgressShapingAverageBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSize">EgressShapingBurstSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabled">EgressShapingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidth">EgressShapingPeakBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failback">Failback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbit">FaulttoleranceMaximumMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbit">FaulttoleranceReservationMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCount">FaulttoleranceShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevel">FaulttoleranceShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbit">HbrMaximumMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbit">HbrReservationMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCount">HbrShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevel">HbrShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappings">IgnoreOtherPvlanMappings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidth">IngressShapingAverageBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSize">IngressShapingBurstSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabled">IngressShapingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidth">IngressShapingPeakBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbit">IscsiMaximumMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbit">IscsiReservationMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCount">IscsiShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevel">IscsiShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersion">LacpApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabled">LacpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpMode">LacpMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperation">LinkDiscoveryOperation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocol">LinkDiscoveryProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbit">ManagementMaximumMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbit">ManagementReservationMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCount">ManagementShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevel">ManagementShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtu">MaxMtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringMode">MulticastFilteringMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeout">NetflowActiveFlowTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddress">NetflowCollectorIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPort">NetflowCollectorPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabled">NetflowEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeout">NetflowIdleFlowTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnly">NetflowInternalFlowsOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainId">NetflowObservationDomainId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRate">NetflowSamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabled">NetworkResourceControlEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersion">NetworkResourceControlVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbit">NfsMaximumMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbit">NfsReservationMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCount">NfsShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevel">NfsShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitches">NotifySwitches</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanId">PortPrivateSecondaryVlanId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinks">StandbyUplinks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicy">TeamingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplink">TxUplink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinks">Uplinks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbit">VdpMaximumMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbit">VdpReservationMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCount">VdpShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevel">VdpShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbit">VirtualmachineMaximumMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbit">VirtualmachineReservationMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCount">VirtualmachineShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevel">VirtualmachineShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanId">VlanId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbit">VmotionMaximumMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbit">VmotionReservationMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCount">VmotionShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevel">VmotionShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbit">VsanMaximumMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbit">VsanReservationMbit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCount">VsanShareCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevel">VsanShareLevel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigVersion`<sup>Required</sup> <a name="ConfigVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.configVersion"></a>

```go
func ConfigVersion() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.host"></a>

```go
func Host() DistributedVirtualSwitchHostList
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList">DistributedVirtualSwitchHostList</a>

---

##### `PvlanMapping`<sup>Required</sup> <a name="PvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMapping"></a>

```go
func PvlanMapping() DistributedVirtualSwitchPvlanMappingList
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList">DistributedVirtualSwitchPvlanMappingList</a>

---

##### `VlanRange`<sup>Required</sup> <a name="VlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRange"></a>

```go
func VlanRange() DistributedVirtualSwitchVlanRangeList
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList">DistributedVirtualSwitchVlanRangeList</a>

---

##### `ActiveUplinksInput`<sup>Optional</sup> <a name="ActiveUplinksInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinksInput"></a>

```go
func ActiveUplinksInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowForgedTransmitsInput`<sup>Optional</sup> <a name="AllowForgedTransmitsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmitsInput"></a>

```go
func AllowForgedTransmitsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowMacChangesInput`<sup>Optional</sup> <a name="AllowMacChangesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChangesInput"></a>

```go
func AllowMacChangesInput() interface{}
```

- *Type:* interface{}

---

##### `AllowPromiscuousInput`<sup>Optional</sup> <a name="AllowPromiscuousInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuousInput"></a>

```go
func AllowPromiscuousInput() interface{}
```

- *Type:* interface{}

---

##### `BackupnfcMaximumMbitInput`<sup>Optional</sup> <a name="BackupnfcMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbitInput"></a>

```go
func BackupnfcMaximumMbitInput() *f64
```

- *Type:* *f64

---

##### `BackupnfcReservationMbitInput`<sup>Optional</sup> <a name="BackupnfcReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbitInput"></a>

```go
func BackupnfcReservationMbitInput() *f64
```

- *Type:* *f64

---

##### `BackupnfcShareCountInput`<sup>Optional</sup> <a name="BackupnfcShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCountInput"></a>

```go
func BackupnfcShareCountInput() *f64
```

- *Type:* *f64

---

##### `BackupnfcShareLevelInput`<sup>Optional</sup> <a name="BackupnfcShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevelInput"></a>

```go
func BackupnfcShareLevelInput() *string
```

- *Type:* *string

---

##### `BlockAllPortsInput`<sup>Optional</sup> <a name="BlockAllPortsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPortsInput"></a>

```go
func BlockAllPortsInput() interface{}
```

- *Type:* interface{}

---

##### `CheckBeaconInput`<sup>Optional</sup> <a name="CheckBeaconInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeaconInput"></a>

```go
func CheckBeaconInput() interface{}
```

- *Type:* interface{}

---

##### `ContactDetailInput`<sup>Optional</sup> <a name="ContactDetailInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetailInput"></a>

```go
func ContactDetailInput() *string
```

- *Type:* *string

---

##### `ContactNameInput`<sup>Optional</sup> <a name="ContactNameInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactNameInput"></a>

```go
func ContactNameInput() *string
```

- *Type:* *string

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributesInput"></a>

```go
func CustomAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DirectpathGen2AllowedInput`<sup>Optional</sup> <a name="DirectpathGen2AllowedInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2AllowedInput"></a>

```go
func DirectpathGen2AllowedInput() interface{}
```

- *Type:* interface{}

---

##### `EgressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="EgressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidthInput"></a>

```go
func EgressShapingAverageBandwidthInput() *f64
```

- *Type:* *f64

---

##### `EgressShapingBurstSizeInput`<sup>Optional</sup> <a name="EgressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSizeInput"></a>

```go
func EgressShapingBurstSizeInput() *f64
```

- *Type:* *f64

---

##### `EgressShapingEnabledInput`<sup>Optional</sup> <a name="EgressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabledInput"></a>

```go
func EgressShapingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EgressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="EgressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidthInput"></a>

```go
func EgressShapingPeakBandwidthInput() *f64
```

- *Type:* *f64

---

##### `FailbackInput`<sup>Optional</sup> <a name="FailbackInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failbackInput"></a>

```go
func FailbackInput() interface{}
```

- *Type:* interface{}

---

##### `FaulttoleranceMaximumMbitInput`<sup>Optional</sup> <a name="FaulttoleranceMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbitInput"></a>

```go
func FaulttoleranceMaximumMbitInput() *f64
```

- *Type:* *f64

---

##### `FaulttoleranceReservationMbitInput`<sup>Optional</sup> <a name="FaulttoleranceReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbitInput"></a>

```go
func FaulttoleranceReservationMbitInput() *f64
```

- *Type:* *f64

---

##### `FaulttoleranceShareCountInput`<sup>Optional</sup> <a name="FaulttoleranceShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCountInput"></a>

```go
func FaulttoleranceShareCountInput() *f64
```

- *Type:* *f64

---

##### `FaulttoleranceShareLevelInput`<sup>Optional</sup> <a name="FaulttoleranceShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevelInput"></a>

```go
func FaulttoleranceShareLevelInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `HbrMaximumMbitInput`<sup>Optional</sup> <a name="HbrMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbitInput"></a>

```go
func HbrMaximumMbitInput() *f64
```

- *Type:* *f64

---

##### `HbrReservationMbitInput`<sup>Optional</sup> <a name="HbrReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbitInput"></a>

```go
func HbrReservationMbitInput() *f64
```

- *Type:* *f64

---

##### `HbrShareCountInput`<sup>Optional</sup> <a name="HbrShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCountInput"></a>

```go
func HbrShareCountInput() *f64
```

- *Type:* *f64

---

##### `HbrShareLevelInput`<sup>Optional</sup> <a name="HbrShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevelInput"></a>

```go
func HbrShareLevelInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hostInput"></a>

```go
func HostInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreOtherPvlanMappingsInput`<sup>Optional</sup> <a name="IgnoreOtherPvlanMappingsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappingsInput"></a>

```go
func IgnoreOtherPvlanMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `IngressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="IngressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidthInput"></a>

```go
func IngressShapingAverageBandwidthInput() *f64
```

- *Type:* *f64

---

##### `IngressShapingBurstSizeInput`<sup>Optional</sup> <a name="IngressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSizeInput"></a>

```go
func IngressShapingBurstSizeInput() *f64
```

- *Type:* *f64

---

##### `IngressShapingEnabledInput`<sup>Optional</sup> <a name="IngressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabledInput"></a>

```go
func IngressShapingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IngressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="IngressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidthInput"></a>

```go
func IngressShapingPeakBandwidthInput() *f64
```

- *Type:* *f64

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4AddressInput"></a>

```go
func Ipv4AddressInput() *string
```

- *Type:* *string

---

##### `IscsiMaximumMbitInput`<sup>Optional</sup> <a name="IscsiMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbitInput"></a>

```go
func IscsiMaximumMbitInput() *f64
```

- *Type:* *f64

---

##### `IscsiReservationMbitInput`<sup>Optional</sup> <a name="IscsiReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbitInput"></a>

```go
func IscsiReservationMbitInput() *f64
```

- *Type:* *f64

---

##### `IscsiShareCountInput`<sup>Optional</sup> <a name="IscsiShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCountInput"></a>

```go
func IscsiShareCountInput() *f64
```

- *Type:* *f64

---

##### `IscsiShareLevelInput`<sup>Optional</sup> <a name="IscsiShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevelInput"></a>

```go
func IscsiShareLevelInput() *string
```

- *Type:* *string

---

##### `LacpApiVersionInput`<sup>Optional</sup> <a name="LacpApiVersionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersionInput"></a>

```go
func LacpApiVersionInput() *string
```

- *Type:* *string

---

##### `LacpEnabledInput`<sup>Optional</sup> <a name="LacpEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabledInput"></a>

```go
func LacpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LacpModeInput`<sup>Optional</sup> <a name="LacpModeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpModeInput"></a>

```go
func LacpModeInput() *string
```

- *Type:* *string

---

##### `LinkDiscoveryOperationInput`<sup>Optional</sup> <a name="LinkDiscoveryOperationInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperationInput"></a>

```go
func LinkDiscoveryOperationInput() *string
```

- *Type:* *string

---

##### `LinkDiscoveryProtocolInput`<sup>Optional</sup> <a name="LinkDiscoveryProtocolInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocolInput"></a>

```go
func LinkDiscoveryProtocolInput() *string
```

- *Type:* *string

---

##### `ManagementMaximumMbitInput`<sup>Optional</sup> <a name="ManagementMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbitInput"></a>

```go
func ManagementMaximumMbitInput() *f64
```

- *Type:* *f64

---

##### `ManagementReservationMbitInput`<sup>Optional</sup> <a name="ManagementReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbitInput"></a>

```go
func ManagementReservationMbitInput() *f64
```

- *Type:* *f64

---

##### `ManagementShareCountInput`<sup>Optional</sup> <a name="ManagementShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCountInput"></a>

```go
func ManagementShareCountInput() *f64
```

- *Type:* *f64

---

##### `ManagementShareLevelInput`<sup>Optional</sup> <a name="ManagementShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevelInput"></a>

```go
func ManagementShareLevelInput() *string
```

- *Type:* *string

---

##### `MaxMtuInput`<sup>Optional</sup> <a name="MaxMtuInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtuInput"></a>

```go
func MaxMtuInput() *f64
```

- *Type:* *f64

---

##### `MulticastFilteringModeInput`<sup>Optional</sup> <a name="MulticastFilteringModeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringModeInput"></a>

```go
func MulticastFilteringModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetflowActiveFlowTimeoutInput`<sup>Optional</sup> <a name="NetflowActiveFlowTimeoutInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeoutInput"></a>

```go
func NetflowActiveFlowTimeoutInput() *f64
```

- *Type:* *f64

---

##### `NetflowCollectorIpAddressInput`<sup>Optional</sup> <a name="NetflowCollectorIpAddressInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddressInput"></a>

```go
func NetflowCollectorIpAddressInput() *string
```

- *Type:* *string

---

##### `NetflowCollectorPortInput`<sup>Optional</sup> <a name="NetflowCollectorPortInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPortInput"></a>

```go
func NetflowCollectorPortInput() *f64
```

- *Type:* *f64

---

##### `NetflowEnabledInput`<sup>Optional</sup> <a name="NetflowEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabledInput"></a>

```go
func NetflowEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NetflowIdleFlowTimeoutInput`<sup>Optional</sup> <a name="NetflowIdleFlowTimeoutInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeoutInput"></a>

```go
func NetflowIdleFlowTimeoutInput() *f64
```

- *Type:* *f64

---

##### `NetflowInternalFlowsOnlyInput`<sup>Optional</sup> <a name="NetflowInternalFlowsOnlyInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnlyInput"></a>

```go
func NetflowInternalFlowsOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `NetflowObservationDomainIdInput`<sup>Optional</sup> <a name="NetflowObservationDomainIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainIdInput"></a>

```go
func NetflowObservationDomainIdInput() *f64
```

- *Type:* *f64

---

##### `NetflowSamplingRateInput`<sup>Optional</sup> <a name="NetflowSamplingRateInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRateInput"></a>

```go
func NetflowSamplingRateInput() *f64
```

- *Type:* *f64

---

##### `NetworkResourceControlEnabledInput`<sup>Optional</sup> <a name="NetworkResourceControlEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabledInput"></a>

```go
func NetworkResourceControlEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkResourceControlVersionInput`<sup>Optional</sup> <a name="NetworkResourceControlVersionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersionInput"></a>

```go
func NetworkResourceControlVersionInput() *string
```

- *Type:* *string

---

##### `NfsMaximumMbitInput`<sup>Optional</sup> <a name="NfsMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbitInput"></a>

```go
func NfsMaximumMbitInput() *f64
```

- *Type:* *f64

---

##### `NfsReservationMbitInput`<sup>Optional</sup> <a name="NfsReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbitInput"></a>

```go
func NfsReservationMbitInput() *f64
```

- *Type:* *f64

---

##### `NfsShareCountInput`<sup>Optional</sup> <a name="NfsShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCountInput"></a>

```go
func NfsShareCountInput() *f64
```

- *Type:* *f64

---

##### `NfsShareLevelInput`<sup>Optional</sup> <a name="NfsShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevelInput"></a>

```go
func NfsShareLevelInput() *string
```

- *Type:* *string

---

##### `NotifySwitchesInput`<sup>Optional</sup> <a name="NotifySwitchesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitchesInput"></a>

```go
func NotifySwitchesInput() interface{}
```

- *Type:* interface{}

---

##### `PortPrivateSecondaryVlanIdInput`<sup>Optional</sup> <a name="PortPrivateSecondaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanIdInput"></a>

```go
func PortPrivateSecondaryVlanIdInput() *f64
```

- *Type:* *f64

---

##### `PvlanMappingInput`<sup>Optional</sup> <a name="PvlanMappingInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMappingInput"></a>

```go
func PvlanMappingInput() interface{}
```

- *Type:* interface{}

---

##### `StandbyUplinksInput`<sup>Optional</sup> <a name="StandbyUplinksInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinksInput"></a>

```go
func StandbyUplinksInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TeamingPolicyInput`<sup>Optional</sup> <a name="TeamingPolicyInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicyInput"></a>

```go
func TeamingPolicyInput() *string
```

- *Type:* *string

---

##### `TxUplinkInput`<sup>Optional</sup> <a name="TxUplinkInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplinkInput"></a>

```go
func TxUplinkInput() interface{}
```

- *Type:* interface{}

---

##### `UplinksInput`<sup>Optional</sup> <a name="UplinksInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinksInput"></a>

```go
func UplinksInput() *[]*string
```

- *Type:* *[]*string

---

##### `VdpMaximumMbitInput`<sup>Optional</sup> <a name="VdpMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbitInput"></a>

```go
func VdpMaximumMbitInput() *f64
```

- *Type:* *f64

---

##### `VdpReservationMbitInput`<sup>Optional</sup> <a name="VdpReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbitInput"></a>

```go
func VdpReservationMbitInput() *f64
```

- *Type:* *f64

---

##### `VdpShareCountInput`<sup>Optional</sup> <a name="VdpShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCountInput"></a>

```go
func VdpShareCountInput() *f64
```

- *Type:* *f64

---

##### `VdpShareLevelInput`<sup>Optional</sup> <a name="VdpShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevelInput"></a>

```go
func VdpShareLevelInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `VirtualmachineMaximumMbitInput`<sup>Optional</sup> <a name="VirtualmachineMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbitInput"></a>

```go
func VirtualmachineMaximumMbitInput() *f64
```

- *Type:* *f64

---

##### `VirtualmachineReservationMbitInput`<sup>Optional</sup> <a name="VirtualmachineReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbitInput"></a>

```go
func VirtualmachineReservationMbitInput() *f64
```

- *Type:* *f64

---

##### `VirtualmachineShareCountInput`<sup>Optional</sup> <a name="VirtualmachineShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCountInput"></a>

```go
func VirtualmachineShareCountInput() *f64
```

- *Type:* *f64

---

##### `VirtualmachineShareLevelInput`<sup>Optional</sup> <a name="VirtualmachineShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevelInput"></a>

```go
func VirtualmachineShareLevelInput() *string
```

- *Type:* *string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanIdInput"></a>

```go
func VlanIdInput() *f64
```

- *Type:* *f64

---

##### `VlanRangeInput`<sup>Optional</sup> <a name="VlanRangeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRangeInput"></a>

```go
func VlanRangeInput() interface{}
```

- *Type:* interface{}

---

##### `VmotionMaximumMbitInput`<sup>Optional</sup> <a name="VmotionMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbitInput"></a>

```go
func VmotionMaximumMbitInput() *f64
```

- *Type:* *f64

---

##### `VmotionReservationMbitInput`<sup>Optional</sup> <a name="VmotionReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbitInput"></a>

```go
func VmotionReservationMbitInput() *f64
```

- *Type:* *f64

---

##### `VmotionShareCountInput`<sup>Optional</sup> <a name="VmotionShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCountInput"></a>

```go
func VmotionShareCountInput() *f64
```

- *Type:* *f64

---

##### `VmotionShareLevelInput`<sup>Optional</sup> <a name="VmotionShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevelInput"></a>

```go
func VmotionShareLevelInput() *string
```

- *Type:* *string

---

##### `VsanMaximumMbitInput`<sup>Optional</sup> <a name="VsanMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbitInput"></a>

```go
func VsanMaximumMbitInput() *f64
```

- *Type:* *f64

---

##### `VsanReservationMbitInput`<sup>Optional</sup> <a name="VsanReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbitInput"></a>

```go
func VsanReservationMbitInput() *f64
```

- *Type:* *f64

---

##### `VsanShareCountInput`<sup>Optional</sup> <a name="VsanShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCountInput"></a>

```go
func VsanShareCountInput() *f64
```

- *Type:* *f64

---

##### `VsanShareLevelInput`<sup>Optional</sup> <a name="VsanShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevelInput"></a>

```go
func VsanShareLevelInput() *string
```

- *Type:* *string

---

##### `ActiveUplinks`<sup>Required</sup> <a name="ActiveUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinks"></a>

```go
func ActiveUplinks() *[]*string
```

- *Type:* *[]*string

---

##### `AllowForgedTransmits`<sup>Required</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmits"></a>

```go
func AllowForgedTransmits() interface{}
```

- *Type:* interface{}

---

##### `AllowMacChanges`<sup>Required</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChanges"></a>

```go
func AllowMacChanges() interface{}
```

- *Type:* interface{}

---

##### `AllowPromiscuous`<sup>Required</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuous"></a>

```go
func AllowPromiscuous() interface{}
```

- *Type:* interface{}

---

##### `BackupnfcMaximumMbit`<sup>Required</sup> <a name="BackupnfcMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbit"></a>

```go
func BackupnfcMaximumMbit() *f64
```

- *Type:* *f64

---

##### `BackupnfcReservationMbit`<sup>Required</sup> <a name="BackupnfcReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbit"></a>

```go
func BackupnfcReservationMbit() *f64
```

- *Type:* *f64

---

##### `BackupnfcShareCount`<sup>Required</sup> <a name="BackupnfcShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCount"></a>

```go
func BackupnfcShareCount() *f64
```

- *Type:* *f64

---

##### `BackupnfcShareLevel`<sup>Required</sup> <a name="BackupnfcShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevel"></a>

```go
func BackupnfcShareLevel() *string
```

- *Type:* *string

---

##### `BlockAllPorts`<sup>Required</sup> <a name="BlockAllPorts" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPorts"></a>

```go
func BlockAllPorts() interface{}
```

- *Type:* interface{}

---

##### `CheckBeacon`<sup>Required</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeacon"></a>

```go
func CheckBeacon() interface{}
```

- *Type:* interface{}

---

##### `ContactDetail`<sup>Required</sup> <a name="ContactDetail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetail"></a>

```go
func ContactDetail() *string
```

- *Type:* *string

---

##### `ContactName`<sup>Required</sup> <a name="ContactName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactName"></a>

```go
func ContactName() *string
```

- *Type:* *string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributes"></a>

```go
func CustomAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DirectpathGen2Allowed`<sup>Required</sup> <a name="DirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2Allowed"></a>

```go
func DirectpathGen2Allowed() interface{}
```

- *Type:* interface{}

---

##### `EgressShapingAverageBandwidth`<sup>Required</sup> <a name="EgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidth"></a>

```go
func EgressShapingAverageBandwidth() *f64
```

- *Type:* *f64

---

##### `EgressShapingBurstSize`<sup>Required</sup> <a name="EgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSize"></a>

```go
func EgressShapingBurstSize() *f64
```

- *Type:* *f64

---

##### `EgressShapingEnabled`<sup>Required</sup> <a name="EgressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabled"></a>

```go
func EgressShapingEnabled() interface{}
```

- *Type:* interface{}

---

##### `EgressShapingPeakBandwidth`<sup>Required</sup> <a name="EgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidth"></a>

```go
func EgressShapingPeakBandwidth() *f64
```

- *Type:* *f64

---

##### `Failback`<sup>Required</sup> <a name="Failback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failback"></a>

```go
func Failback() interface{}
```

- *Type:* interface{}

---

##### `FaulttoleranceMaximumMbit`<sup>Required</sup> <a name="FaulttoleranceMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbit"></a>

```go
func FaulttoleranceMaximumMbit() *f64
```

- *Type:* *f64

---

##### `FaulttoleranceReservationMbit`<sup>Required</sup> <a name="FaulttoleranceReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbit"></a>

```go
func FaulttoleranceReservationMbit() *f64
```

- *Type:* *f64

---

##### `FaulttoleranceShareCount`<sup>Required</sup> <a name="FaulttoleranceShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCount"></a>

```go
func FaulttoleranceShareCount() *f64
```

- *Type:* *f64

---

##### `FaulttoleranceShareLevel`<sup>Required</sup> <a name="FaulttoleranceShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevel"></a>

```go
func FaulttoleranceShareLevel() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `HbrMaximumMbit`<sup>Required</sup> <a name="HbrMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbit"></a>

```go
func HbrMaximumMbit() *f64
```

- *Type:* *f64

---

##### `HbrReservationMbit`<sup>Required</sup> <a name="HbrReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbit"></a>

```go
func HbrReservationMbit() *f64
```

- *Type:* *f64

---

##### `HbrShareCount`<sup>Required</sup> <a name="HbrShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCount"></a>

```go
func HbrShareCount() *f64
```

- *Type:* *f64

---

##### `HbrShareLevel`<sup>Required</sup> <a name="HbrShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevel"></a>

```go
func HbrShareLevel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreOtherPvlanMappings`<sup>Required</sup> <a name="IgnoreOtherPvlanMappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappings"></a>

```go
func IgnoreOtherPvlanMappings() interface{}
```

- *Type:* interface{}

---

##### `IngressShapingAverageBandwidth`<sup>Required</sup> <a name="IngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidth"></a>

```go
func IngressShapingAverageBandwidth() *f64
```

- *Type:* *f64

---

##### `IngressShapingBurstSize`<sup>Required</sup> <a name="IngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSize"></a>

```go
func IngressShapingBurstSize() *f64
```

- *Type:* *f64

---

##### `IngressShapingEnabled`<sup>Required</sup> <a name="IngressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabled"></a>

```go
func IngressShapingEnabled() interface{}
```

- *Type:* interface{}

---

##### `IngressShapingPeakBandwidth`<sup>Required</sup> <a name="IngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidth"></a>

```go
func IngressShapingPeakBandwidth() *f64
```

- *Type:* *f64

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `IscsiMaximumMbit`<sup>Required</sup> <a name="IscsiMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbit"></a>

```go
func IscsiMaximumMbit() *f64
```

- *Type:* *f64

---

##### `IscsiReservationMbit`<sup>Required</sup> <a name="IscsiReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbit"></a>

```go
func IscsiReservationMbit() *f64
```

- *Type:* *f64

---

##### `IscsiShareCount`<sup>Required</sup> <a name="IscsiShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCount"></a>

```go
func IscsiShareCount() *f64
```

- *Type:* *f64

---

##### `IscsiShareLevel`<sup>Required</sup> <a name="IscsiShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevel"></a>

```go
func IscsiShareLevel() *string
```

- *Type:* *string

---

##### `LacpApiVersion`<sup>Required</sup> <a name="LacpApiVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersion"></a>

```go
func LacpApiVersion() *string
```

- *Type:* *string

---

##### `LacpEnabled`<sup>Required</sup> <a name="LacpEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabled"></a>

```go
func LacpEnabled() interface{}
```

- *Type:* interface{}

---

##### `LacpMode`<sup>Required</sup> <a name="LacpMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpMode"></a>

```go
func LacpMode() *string
```

- *Type:* *string

---

##### `LinkDiscoveryOperation`<sup>Required</sup> <a name="LinkDiscoveryOperation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperation"></a>

```go
func LinkDiscoveryOperation() *string
```

- *Type:* *string

---

##### `LinkDiscoveryProtocol`<sup>Required</sup> <a name="LinkDiscoveryProtocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocol"></a>

```go
func LinkDiscoveryProtocol() *string
```

- *Type:* *string

---

##### `ManagementMaximumMbit`<sup>Required</sup> <a name="ManagementMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbit"></a>

```go
func ManagementMaximumMbit() *f64
```

- *Type:* *f64

---

##### `ManagementReservationMbit`<sup>Required</sup> <a name="ManagementReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbit"></a>

```go
func ManagementReservationMbit() *f64
```

- *Type:* *f64

---

##### `ManagementShareCount`<sup>Required</sup> <a name="ManagementShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCount"></a>

```go
func ManagementShareCount() *f64
```

- *Type:* *f64

---

##### `ManagementShareLevel`<sup>Required</sup> <a name="ManagementShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevel"></a>

```go
func ManagementShareLevel() *string
```

- *Type:* *string

---

##### `MaxMtu`<sup>Required</sup> <a name="MaxMtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtu"></a>

```go
func MaxMtu() *f64
```

- *Type:* *f64

---

##### `MulticastFilteringMode`<sup>Required</sup> <a name="MulticastFilteringMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringMode"></a>

```go
func MulticastFilteringMode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetflowActiveFlowTimeout`<sup>Required</sup> <a name="NetflowActiveFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeout"></a>

```go
func NetflowActiveFlowTimeout() *f64
```

- *Type:* *f64

---

##### `NetflowCollectorIpAddress`<sup>Required</sup> <a name="NetflowCollectorIpAddress" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddress"></a>

```go
func NetflowCollectorIpAddress() *string
```

- *Type:* *string

---

##### `NetflowCollectorPort`<sup>Required</sup> <a name="NetflowCollectorPort" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPort"></a>

```go
func NetflowCollectorPort() *f64
```

- *Type:* *f64

---

##### `NetflowEnabled`<sup>Required</sup> <a name="NetflowEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabled"></a>

```go
func NetflowEnabled() interface{}
```

- *Type:* interface{}

---

##### `NetflowIdleFlowTimeout`<sup>Required</sup> <a name="NetflowIdleFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeout"></a>

```go
func NetflowIdleFlowTimeout() *f64
```

- *Type:* *f64

---

##### `NetflowInternalFlowsOnly`<sup>Required</sup> <a name="NetflowInternalFlowsOnly" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnly"></a>

```go
func NetflowInternalFlowsOnly() interface{}
```

- *Type:* interface{}

---

##### `NetflowObservationDomainId`<sup>Required</sup> <a name="NetflowObservationDomainId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainId"></a>

```go
func NetflowObservationDomainId() *f64
```

- *Type:* *f64

---

##### `NetflowSamplingRate`<sup>Required</sup> <a name="NetflowSamplingRate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRate"></a>

```go
func NetflowSamplingRate() *f64
```

- *Type:* *f64

---

##### `NetworkResourceControlEnabled`<sup>Required</sup> <a name="NetworkResourceControlEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabled"></a>

```go
func NetworkResourceControlEnabled() interface{}
```

- *Type:* interface{}

---

##### `NetworkResourceControlVersion`<sup>Required</sup> <a name="NetworkResourceControlVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersion"></a>

```go
func NetworkResourceControlVersion() *string
```

- *Type:* *string

---

##### `NfsMaximumMbit`<sup>Required</sup> <a name="NfsMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbit"></a>

```go
func NfsMaximumMbit() *f64
```

- *Type:* *f64

---

##### `NfsReservationMbit`<sup>Required</sup> <a name="NfsReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbit"></a>

```go
func NfsReservationMbit() *f64
```

- *Type:* *f64

---

##### `NfsShareCount`<sup>Required</sup> <a name="NfsShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCount"></a>

```go
func NfsShareCount() *f64
```

- *Type:* *f64

---

##### `NfsShareLevel`<sup>Required</sup> <a name="NfsShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevel"></a>

```go
func NfsShareLevel() *string
```

- *Type:* *string

---

##### `NotifySwitches`<sup>Required</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitches"></a>

```go
func NotifySwitches() interface{}
```

- *Type:* interface{}

---

##### `PortPrivateSecondaryVlanId`<sup>Required</sup> <a name="PortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanId"></a>

```go
func PortPrivateSecondaryVlanId() *f64
```

- *Type:* *f64

---

##### `StandbyUplinks`<sup>Required</sup> <a name="StandbyUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinks"></a>

```go
func StandbyUplinks() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `TeamingPolicy`<sup>Required</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicy"></a>

```go
func TeamingPolicy() *string
```

- *Type:* *string

---

##### `TxUplink`<sup>Required</sup> <a name="TxUplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplink"></a>

```go
func TxUplink() interface{}
```

- *Type:* interface{}

---

##### `Uplinks`<sup>Required</sup> <a name="Uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinks"></a>

```go
func Uplinks() *[]*string
```

- *Type:* *[]*string

---

##### `VdpMaximumMbit`<sup>Required</sup> <a name="VdpMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbit"></a>

```go
func VdpMaximumMbit() *f64
```

- *Type:* *f64

---

##### `VdpReservationMbit`<sup>Required</sup> <a name="VdpReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbit"></a>

```go
func VdpReservationMbit() *f64
```

- *Type:* *f64

---

##### `VdpShareCount`<sup>Required</sup> <a name="VdpShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCount"></a>

```go
func VdpShareCount() *f64
```

- *Type:* *f64

---

##### `VdpShareLevel`<sup>Required</sup> <a name="VdpShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevel"></a>

```go
func VdpShareLevel() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VirtualmachineMaximumMbit`<sup>Required</sup> <a name="VirtualmachineMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbit"></a>

```go
func VirtualmachineMaximumMbit() *f64
```

- *Type:* *f64

---

##### `VirtualmachineReservationMbit`<sup>Required</sup> <a name="VirtualmachineReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbit"></a>

```go
func VirtualmachineReservationMbit() *f64
```

- *Type:* *f64

---

##### `VirtualmachineShareCount`<sup>Required</sup> <a name="VirtualmachineShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCount"></a>

```go
func VirtualmachineShareCount() *f64
```

- *Type:* *f64

---

##### `VirtualmachineShareLevel`<sup>Required</sup> <a name="VirtualmachineShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevel"></a>

```go
func VirtualmachineShareLevel() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanId"></a>

```go
func VlanId() *f64
```

- *Type:* *f64

---

##### `VmotionMaximumMbit`<sup>Required</sup> <a name="VmotionMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbit"></a>

```go
func VmotionMaximumMbit() *f64
```

- *Type:* *f64

---

##### `VmotionReservationMbit`<sup>Required</sup> <a name="VmotionReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbit"></a>

```go
func VmotionReservationMbit() *f64
```

- *Type:* *f64

---

##### `VmotionShareCount`<sup>Required</sup> <a name="VmotionShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCount"></a>

```go
func VmotionShareCount() *f64
```

- *Type:* *f64

---

##### `VmotionShareLevel`<sup>Required</sup> <a name="VmotionShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevel"></a>

```go
func VmotionShareLevel() *string
```

- *Type:* *string

---

##### `VsanMaximumMbit`<sup>Required</sup> <a name="VsanMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbit"></a>

```go
func VsanMaximumMbit() *f64
```

- *Type:* *f64

---

##### `VsanReservationMbit`<sup>Required</sup> <a name="VsanReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbit"></a>

```go
func VsanReservationMbit() *f64
```

- *Type:* *f64

---

##### `VsanShareCount`<sup>Required</sup> <a name="VsanShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCount"></a>

```go
func VsanShareCount() *f64
```

- *Type:* *f64

---

##### `VsanShareLevel`<sup>Required</sup> <a name="VsanShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevel"></a>

```go
func VsanShareLevel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DistributedVirtualSwitchConfig <a name="DistributedVirtualSwitchConfig" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

&distributedvirtualswitch.DistributedVirtualSwitchConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatacenterId: *string,
	Name: *string,
	ActiveUplinks: *[]*string,
	AllowForgedTransmits: interface{},
	AllowMacChanges: interface{},
	AllowPromiscuous: interface{},
	BackupnfcMaximumMbit: *f64,
	BackupnfcReservationMbit: *f64,
	BackupnfcShareCount: *f64,
	BackupnfcShareLevel: *string,
	BlockAllPorts: interface{},
	CheckBeacon: interface{},
	ContactDetail: *string,
	ContactName: *string,
	CustomAttributes: *map[string]*string,
	Description: *string,
	DirectpathGen2Allowed: interface{},
	EgressShapingAverageBandwidth: *f64,
	EgressShapingBurstSize: *f64,
	EgressShapingEnabled: interface{},
	EgressShapingPeakBandwidth: *f64,
	Failback: interface{},
	FaulttoleranceMaximumMbit: *f64,
	FaulttoleranceReservationMbit: *f64,
	FaulttoleranceShareCount: *f64,
	FaulttoleranceShareLevel: *string,
	Folder: *string,
	HbrMaximumMbit: *f64,
	HbrReservationMbit: *f64,
	HbrShareCount: *f64,
	HbrShareLevel: *string,
	Host: interface{},
	Id: *string,
	IgnoreOtherPvlanMappings: interface{},
	IngressShapingAverageBandwidth: *f64,
	IngressShapingBurstSize: *f64,
	IngressShapingEnabled: interface{},
	IngressShapingPeakBandwidth: *f64,
	Ipv4Address: *string,
	IscsiMaximumMbit: *f64,
	IscsiReservationMbit: *f64,
	IscsiShareCount: *f64,
	IscsiShareLevel: *string,
	LacpApiVersion: *string,
	LacpEnabled: interface{},
	LacpMode: *string,
	LinkDiscoveryOperation: *string,
	LinkDiscoveryProtocol: *string,
	ManagementMaximumMbit: *f64,
	ManagementReservationMbit: *f64,
	ManagementShareCount: *f64,
	ManagementShareLevel: *string,
	MaxMtu: *f64,
	MulticastFilteringMode: *string,
	NetflowActiveFlowTimeout: *f64,
	NetflowCollectorIpAddress: *string,
	NetflowCollectorPort: *f64,
	NetflowEnabled: interface{},
	NetflowIdleFlowTimeout: *f64,
	NetflowInternalFlowsOnly: interface{},
	NetflowObservationDomainId: *f64,
	NetflowSamplingRate: *f64,
	NetworkResourceControlEnabled: interface{},
	NetworkResourceControlVersion: *string,
	NfsMaximumMbit: *f64,
	NfsReservationMbit: *f64,
	NfsShareCount: *f64,
	NfsShareLevel: *string,
	NotifySwitches: interface{},
	PortPrivateSecondaryVlanId: *f64,
	PvlanMapping: interface{},
	StandbyUplinks: *[]*string,
	Tags: *[]*string,
	TeamingPolicy: *string,
	TxUplink: interface{},
	Uplinks: *[]*string,
	VdpMaximumMbit: *f64,
	VdpReservationMbit: *f64,
	VdpShareCount: *f64,
	VdpShareLevel: *string,
	Version: *string,
	VirtualmachineMaximumMbit: *f64,
	VirtualmachineReservationMbit: *f64,
	VirtualmachineShareCount: *f64,
	VirtualmachineShareLevel: *string,
	VlanId: *f64,
	VlanRange: interface{},
	VmotionMaximumMbit: *f64,
	VmotionReservationMbit: *f64,
	VmotionShareCount: *f64,
	VmotionShareLevel: *string,
	VsanMaximumMbit: *f64,
	VsanReservationMbit: *f64,
	VsanShareCount: *f64,
	VsanShareLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | The ID of the datacenter to create this virtual switch in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.name">Name</a></code> | <code>*string</code> | The name for the DVS. Must be unique in the folder that it is being created in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.activeUplinks">ActiveUplinks</a></code> | <code>*[]*string</code> | List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>interface{}</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowMacChanges">AllowMacChanges</a></code> | <code>interface{}</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>interface{}</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcMaximumMbit">BackupnfcMaximumMbit</a></code> | <code>*f64</code> | The maximum allowed usage for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcReservationMbit">BackupnfcReservationMbit</a></code> | <code>*f64</code> | The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareCount">BackupnfcShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to the backupNfc traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareLevel">BackupnfcShareLevel</a></code> | <code>*string</code> | The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.blockAllPorts">BlockAllPorts</a></code> | <code>interface{}</code> | Indicates whether to block all ports by default. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.checkBeacon">CheckBeacon</a></code> | <code>interface{}</code> | Enable beacon probing on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactDetail">ContactDetail</a></code> | <code>*string</code> | The contact detail for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactName">ContactName</a></code> | <code>*string</code> | The contact name for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.description">Description</a></code> | <code>*string</code> | The description of the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.directpathGen2Allowed">DirectpathGen2Allowed</a></code> | <code>interface{}</code> | Allow VMDirectPath Gen2 on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingAverageBandwidth">EgressShapingAverageBandwidth</a></code> | <code>*f64</code> | The average egress bandwidth in bits per second if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingBurstSize">EgressShapingBurstSize</a></code> | <code>*f64</code> | The maximum egress burst size allowed in bytes if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingEnabled">EgressShapingEnabled</a></code> | <code>interface{}</code> | True if the traffic shaper is enabled for egress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingPeakBandwidth">EgressShapingPeakBandwidth</a></code> | <code>*f64</code> | The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.failback">Failback</a></code> | <code>interface{}</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceMaximumMbit">FaulttoleranceMaximumMbit</a></code> | <code>*f64</code> | The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceReservationMbit">FaulttoleranceReservationMbit</a></code> | <code>*f64</code> | The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareCount">FaulttoleranceShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to the faultTolerance traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareLevel">FaulttoleranceShareLevel</a></code> | <code>*string</code> | The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.folder">Folder</a></code> | <code>*string</code> | The folder to create this virtual switch in, relative to the datacenter. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrMaximumMbit">HbrMaximumMbit</a></code> | <code>*f64</code> | The maximum allowed usage for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrReservationMbit">HbrReservationMbit</a></code> | <code>*f64</code> | The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareCount">HbrShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to the hbr traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareLevel">HbrShareLevel</a></code> | <code>*string</code> | The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.host">Host</a></code> | <code>interface{}</code> | host block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ignoreOtherPvlanMappings">IgnoreOtherPvlanMappings</a></code> | <code>interface{}</code> | Whether to ignore existing PVLAN mappings not managed by this resource. Defaults to false. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingAverageBandwidth">IngressShapingAverageBandwidth</a></code> | <code>*f64</code> | The average ingress bandwidth in bits per second if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingBurstSize">IngressShapingBurstSize</a></code> | <code>*f64</code> | The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingEnabled">IngressShapingEnabled</a></code> | <code>interface{}</code> | True if the traffic shaper is enabled for ingress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingPeakBandwidth">IngressShapingPeakBandwidth</a></code> | <code>*f64</code> | The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | The IPv4 address of the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiMaximumMbit">IscsiMaximumMbit</a></code> | <code>*f64</code> | The maximum allowed usage for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiReservationMbit">IscsiReservationMbit</a></code> | <code>*f64</code> | The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareCount">IscsiShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to the iSCSI traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareLevel">IscsiShareLevel</a></code> | <code>*string</code> | The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpApiVersion">LacpApiVersion</a></code> | <code>*string</code> | The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpEnabled">LacpEnabled</a></code> | <code>interface{}</code> | Whether or not to enable LACP on all uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpMode">LacpMode</a></code> | <code>*string</code> | The uplink LACP mode to use. Can be one of active or passive. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryOperation">LinkDiscoveryOperation</a></code> | <code>*string</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryProtocol">LinkDiscoveryProtocol</a></code> | <code>*string</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementMaximumMbit">ManagementMaximumMbit</a></code> | <code>*f64</code> | The maximum allowed usage for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementReservationMbit">ManagementReservationMbit</a></code> | <code>*f64</code> | The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareCount">ManagementShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to the management traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareLevel">ManagementShareLevel</a></code> | <code>*string</code> | The allocation level for the management traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.maxMtu">MaxMtu</a></code> | <code>*f64</code> | The maximum MTU on the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.multicastFilteringMode">MulticastFilteringMode</a></code> | <code>*string</code> | The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowActiveFlowTimeout">NetflowActiveFlowTimeout</a></code> | <code>*f64</code> | The number of seconds after which active flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorIpAddress">NetflowCollectorIpAddress</a></code> | <code>*string</code> | IP address for the netflow collector, using IPv4 or IPv6. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorPort">NetflowCollectorPort</a></code> | <code>*f64</code> | The port for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowEnabled">NetflowEnabled</a></code> | <code>interface{}</code> | Indicates whether to enable netflow on all ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowIdleFlowTimeout">NetflowIdleFlowTimeout</a></code> | <code>*f64</code> | The number of seconds after which idle flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowInternalFlowsOnly">NetflowInternalFlowsOnly</a></code> | <code>interface{}</code> | Whether to limit analysis to traffic that has both source and destination served by the same host. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowObservationDomainId">NetflowObservationDomainId</a></code> | <code>*f64</code> | The observation Domain ID for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowSamplingRate">NetflowSamplingRate</a></code> | <code>*f64</code> | The ratio of total number of packets to the number of packets analyzed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlEnabled">NetworkResourceControlEnabled</a></code> | <code>interface{}</code> | Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlVersion">NetworkResourceControlVersion</a></code> | <code>*string</code> | The network I/O control version to use. Can be one of version2 or version3. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsMaximumMbit">NfsMaximumMbit</a></code> | <code>*f64</code> | The maximum allowed usage for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsReservationMbit">NfsReservationMbit</a></code> | <code>*f64</code> | The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareCount">NfsShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to the nfs traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareLevel">NfsShareLevel</a></code> | <code>*string</code> | The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.notifySwitches">NotifySwitches</a></code> | <code>interface{}</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.portPrivateSecondaryVlanId">PortPrivateSecondaryVlanId</a></code> | <code>*f64</code> | The secondary VLAN ID for this port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.pvlanMapping">PvlanMapping</a></code> | <code>interface{}</code> | pvlan_mapping block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.standbyUplinks">StandbyUplinks</a></code> | <code>*[]*string</code> | List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.teamingPolicy">TeamingPolicy</a></code> | <code>*string</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.txUplink">TxUplink</a></code> | <code>interface{}</code> | If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.uplinks">Uplinks</a></code> | <code>*[]*string</code> | A list of uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpMaximumMbit">VdpMaximumMbit</a></code> | <code>*f64</code> | The maximum allowed usage for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpReservationMbit">VdpReservationMbit</a></code> | <code>*f64</code> | The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareCount">VdpShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to the vdp traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareLevel">VdpShareLevel</a></code> | <code>*string</code> | The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.version">Version</a></code> | <code>*string</code> | The version of this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineMaximumMbit">VirtualmachineMaximumMbit</a></code> | <code>*f64</code> | The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineReservationMbit">VirtualmachineReservationMbit</a></code> | <code>*f64</code> | The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareCount">VirtualmachineShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to the virtualMachine traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareLevel">VirtualmachineShareLevel</a></code> | <code>*string</code> | The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanId">VlanId</a></code> | <code>*f64</code> | The VLAN ID for single VLAN mode. 0 denotes no VLAN. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanRange">VlanRange</a></code> | <code>interface{}</code> | vlan_range block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionMaximumMbit">VmotionMaximumMbit</a></code> | <code>*f64</code> | The maximum allowed usage for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionReservationMbit">VmotionReservationMbit</a></code> | <code>*f64</code> | The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareCount">VmotionShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to the vmotion traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareLevel">VmotionShareLevel</a></code> | <code>*string</code> | The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanMaximumMbit">VsanMaximumMbit</a></code> | <code>*f64</code> | The maximum allowed usage for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanReservationMbit">VsanReservationMbit</a></code> | <code>*f64</code> | The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareCount">VsanShareCount</a></code> | <code>*f64</code> | The amount of shares to allocate to the vsan traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareLevel">VsanShareLevel</a></code> | <code>*string</code> | The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

The ID of the datacenter to create this virtual switch in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#datacenter_id DistributedVirtualSwitch#datacenter_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for the DVS. Must be unique in the folder that it is being created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#name DistributedVirtualSwitch#name}

---

##### `ActiveUplinks`<sup>Optional</sup> <a name="ActiveUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.activeUplinks"></a>

```go
ActiveUplinks *[]*string
```

- *Type:* *[]*string

List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#active_uplinks DistributedVirtualSwitch#active_uplinks}

---

##### `AllowForgedTransmits`<sup>Optional</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowForgedTransmits"></a>

```go
AllowForgedTransmits interface{}
```

- *Type:* interface{}

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#allow_forged_transmits DistributedVirtualSwitch#allow_forged_transmits}

---

##### `AllowMacChanges`<sup>Optional</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowMacChanges"></a>

```go
AllowMacChanges interface{}
```

- *Type:* interface{}

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#allow_mac_changes DistributedVirtualSwitch#allow_mac_changes}

---

##### `AllowPromiscuous`<sup>Optional</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowPromiscuous"></a>

```go
AllowPromiscuous interface{}
```

- *Type:* interface{}

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#allow_promiscuous DistributedVirtualSwitch#allow_promiscuous}

---

##### `BackupnfcMaximumMbit`<sup>Optional</sup> <a name="BackupnfcMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcMaximumMbit"></a>

```go
BackupnfcMaximumMbit *f64
```

- *Type:* *f64

The maximum allowed usage for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#backupnfc_maximum_mbit DistributedVirtualSwitch#backupnfc_maximum_mbit}

---

##### `BackupnfcReservationMbit`<sup>Optional</sup> <a name="BackupnfcReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcReservationMbit"></a>

```go
BackupnfcReservationMbit *f64
```

- *Type:* *f64

The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#backupnfc_reservation_mbit DistributedVirtualSwitch#backupnfc_reservation_mbit}

---

##### `BackupnfcShareCount`<sup>Optional</sup> <a name="BackupnfcShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareCount"></a>

```go
BackupnfcShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to the backupNfc traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#backupnfc_share_count DistributedVirtualSwitch#backupnfc_share_count}

---

##### `BackupnfcShareLevel`<sup>Optional</sup> <a name="BackupnfcShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareLevel"></a>

```go
BackupnfcShareLevel *string
```

- *Type:* *string

The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#backupnfc_share_level DistributedVirtualSwitch#backupnfc_share_level}

---

##### `BlockAllPorts`<sup>Optional</sup> <a name="BlockAllPorts" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.blockAllPorts"></a>

```go
BlockAllPorts interface{}
```

- *Type:* interface{}

Indicates whether to block all ports by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#block_all_ports DistributedVirtualSwitch#block_all_ports}

---

##### `CheckBeacon`<sup>Optional</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.checkBeacon"></a>

```go
CheckBeacon interface{}
```

- *Type:* interface{}

Enable beacon probing on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#check_beacon DistributedVirtualSwitch#check_beacon}

---

##### `ContactDetail`<sup>Optional</sup> <a name="ContactDetail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactDetail"></a>

```go
ContactDetail *string
```

- *Type:* *string

The contact detail for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#contact_detail DistributedVirtualSwitch#contact_detail}

---

##### `ContactName`<sup>Optional</sup> <a name="ContactName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactName"></a>

```go
ContactName *string
```

- *Type:* *string

The contact name for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#contact_name DistributedVirtualSwitch#contact_name}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.customAttributes"></a>

```go
CustomAttributes *map[string]*string
```

- *Type:* *map[string]*string

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#custom_attributes DistributedVirtualSwitch#custom_attributes}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#description DistributedVirtualSwitch#description}

---

##### `DirectpathGen2Allowed`<sup>Optional</sup> <a name="DirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.directpathGen2Allowed"></a>

```go
DirectpathGen2Allowed interface{}
```

- *Type:* interface{}

Allow VMDirectPath Gen2 on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#directpath_gen2_allowed DistributedVirtualSwitch#directpath_gen2_allowed}

---

##### `EgressShapingAverageBandwidth`<sup>Optional</sup> <a name="EgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingAverageBandwidth"></a>

```go
EgressShapingAverageBandwidth *f64
```

- *Type:* *f64

The average egress bandwidth in bits per second if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#egress_shaping_average_bandwidth DistributedVirtualSwitch#egress_shaping_average_bandwidth}

---

##### `EgressShapingBurstSize`<sup>Optional</sup> <a name="EgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingBurstSize"></a>

```go
EgressShapingBurstSize *f64
```

- *Type:* *f64

The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#egress_shaping_burst_size DistributedVirtualSwitch#egress_shaping_burst_size}

---

##### `EgressShapingEnabled`<sup>Optional</sup> <a name="EgressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingEnabled"></a>

```go
EgressShapingEnabled interface{}
```

- *Type:* interface{}

True if the traffic shaper is enabled for egress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#egress_shaping_enabled DistributedVirtualSwitch#egress_shaping_enabled}

---

##### `EgressShapingPeakBandwidth`<sup>Optional</sup> <a name="EgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingPeakBandwidth"></a>

```go
EgressShapingPeakBandwidth *f64
```

- *Type:* *f64

The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#egress_shaping_peak_bandwidth DistributedVirtualSwitch#egress_shaping_peak_bandwidth}

---

##### `Failback`<sup>Optional</sup> <a name="Failback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.failback"></a>

```go
Failback interface{}
```

- *Type:* interface{}

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#failback DistributedVirtualSwitch#failback}

---

##### `FaulttoleranceMaximumMbit`<sup>Optional</sup> <a name="FaulttoleranceMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceMaximumMbit"></a>

```go
FaulttoleranceMaximumMbit *f64
```

- *Type:* *f64

The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#faulttolerance_maximum_mbit DistributedVirtualSwitch#faulttolerance_maximum_mbit}

---

##### `FaulttoleranceReservationMbit`<sup>Optional</sup> <a name="FaulttoleranceReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceReservationMbit"></a>

```go
FaulttoleranceReservationMbit *f64
```

- *Type:* *f64

The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#faulttolerance_reservation_mbit DistributedVirtualSwitch#faulttolerance_reservation_mbit}

---

##### `FaulttoleranceShareCount`<sup>Optional</sup> <a name="FaulttoleranceShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareCount"></a>

```go
FaulttoleranceShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to the faultTolerance traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#faulttolerance_share_count DistributedVirtualSwitch#faulttolerance_share_count}

---

##### `FaulttoleranceShareLevel`<sup>Optional</sup> <a name="FaulttoleranceShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareLevel"></a>

```go
FaulttoleranceShareLevel *string
```

- *Type:* *string

The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#faulttolerance_share_level DistributedVirtualSwitch#faulttolerance_share_level}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The folder to create this virtual switch in, relative to the datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#folder DistributedVirtualSwitch#folder}

---

##### `HbrMaximumMbit`<sup>Optional</sup> <a name="HbrMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrMaximumMbit"></a>

```go
HbrMaximumMbit *f64
```

- *Type:* *f64

The maximum allowed usage for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#hbr_maximum_mbit DistributedVirtualSwitch#hbr_maximum_mbit}

---

##### `HbrReservationMbit`<sup>Optional</sup> <a name="HbrReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrReservationMbit"></a>

```go
HbrReservationMbit *f64
```

- *Type:* *f64

The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#hbr_reservation_mbit DistributedVirtualSwitch#hbr_reservation_mbit}

---

##### `HbrShareCount`<sup>Optional</sup> <a name="HbrShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareCount"></a>

```go
HbrShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to the hbr traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#hbr_share_count DistributedVirtualSwitch#hbr_share_count}

---

##### `HbrShareLevel`<sup>Optional</sup> <a name="HbrShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareLevel"></a>

```go
HbrShareLevel *string
```

- *Type:* *string

The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#hbr_share_level DistributedVirtualSwitch#hbr_share_level}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.host"></a>

```go
Host interface{}
```

- *Type:* interface{}

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#host DistributedVirtualSwitch#host}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreOtherPvlanMappings`<sup>Optional</sup> <a name="IgnoreOtherPvlanMappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ignoreOtherPvlanMappings"></a>

```go
IgnoreOtherPvlanMappings interface{}
```

- *Type:* interface{}

Whether to ignore existing PVLAN mappings not managed by this resource. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#ignore_other_pvlan_mappings DistributedVirtualSwitch#ignore_other_pvlan_mappings}

---

##### `IngressShapingAverageBandwidth`<sup>Optional</sup> <a name="IngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingAverageBandwidth"></a>

```go
IngressShapingAverageBandwidth *f64
```

- *Type:* *f64

The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#ingress_shaping_average_bandwidth DistributedVirtualSwitch#ingress_shaping_average_bandwidth}

---

##### `IngressShapingBurstSize`<sup>Optional</sup> <a name="IngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingBurstSize"></a>

```go
IngressShapingBurstSize *f64
```

- *Type:* *f64

The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#ingress_shaping_burst_size DistributedVirtualSwitch#ingress_shaping_burst_size}

---

##### `IngressShapingEnabled`<sup>Optional</sup> <a name="IngressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingEnabled"></a>

```go
IngressShapingEnabled interface{}
```

- *Type:* interface{}

True if the traffic shaper is enabled for ingress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#ingress_shaping_enabled DistributedVirtualSwitch#ingress_shaping_enabled}

---

##### `IngressShapingPeakBandwidth`<sup>Optional</sup> <a name="IngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingPeakBandwidth"></a>

```go
IngressShapingPeakBandwidth *f64
```

- *Type:* *f64

The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#ingress_shaping_peak_bandwidth DistributedVirtualSwitch#ingress_shaping_peak_bandwidth}

---

##### `Ipv4Address`<sup>Optional</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ipv4Address"></a>

```go
Ipv4Address *string
```

- *Type:* *string

The IPv4 address of the switch.

This can be used to see the DVS as a unique device with NetFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#ipv4_address DistributedVirtualSwitch#ipv4_address}

---

##### `IscsiMaximumMbit`<sup>Optional</sup> <a name="IscsiMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiMaximumMbit"></a>

```go
IscsiMaximumMbit *f64
```

- *Type:* *f64

The maximum allowed usage for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#iscsi_maximum_mbit DistributedVirtualSwitch#iscsi_maximum_mbit}

---

##### `IscsiReservationMbit`<sup>Optional</sup> <a name="IscsiReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiReservationMbit"></a>

```go
IscsiReservationMbit *f64
```

- *Type:* *f64

The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#iscsi_reservation_mbit DistributedVirtualSwitch#iscsi_reservation_mbit}

---

##### `IscsiShareCount`<sup>Optional</sup> <a name="IscsiShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareCount"></a>

```go
IscsiShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to the iSCSI traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#iscsi_share_count DistributedVirtualSwitch#iscsi_share_count}

---

##### `IscsiShareLevel`<sup>Optional</sup> <a name="IscsiShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareLevel"></a>

```go
IscsiShareLevel *string
```

- *Type:* *string

The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#iscsi_share_level DistributedVirtualSwitch#iscsi_share_level}

---

##### `LacpApiVersion`<sup>Optional</sup> <a name="LacpApiVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpApiVersion"></a>

```go
LacpApiVersion *string
```

- *Type:* *string

The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#lacp_api_version DistributedVirtualSwitch#lacp_api_version}

---

##### `LacpEnabled`<sup>Optional</sup> <a name="LacpEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpEnabled"></a>

```go
LacpEnabled interface{}
```

- *Type:* interface{}

Whether or not to enable LACP on all uplink ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#lacp_enabled DistributedVirtualSwitch#lacp_enabled}

---

##### `LacpMode`<sup>Optional</sup> <a name="LacpMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpMode"></a>

```go
LacpMode *string
```

- *Type:* *string

The uplink LACP mode to use. Can be one of active or passive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#lacp_mode DistributedVirtualSwitch#lacp_mode}

---

##### `LinkDiscoveryOperation`<sup>Optional</sup> <a name="LinkDiscoveryOperation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryOperation"></a>

```go
LinkDiscoveryOperation *string
```

- *Type:* *string

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#link_discovery_operation DistributedVirtualSwitch#link_discovery_operation}

---

##### `LinkDiscoveryProtocol`<sup>Optional</sup> <a name="LinkDiscoveryProtocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryProtocol"></a>

```go
LinkDiscoveryProtocol *string
```

- *Type:* *string

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#link_discovery_protocol DistributedVirtualSwitch#link_discovery_protocol}

---

##### `ManagementMaximumMbit`<sup>Optional</sup> <a name="ManagementMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementMaximumMbit"></a>

```go
ManagementMaximumMbit *f64
```

- *Type:* *f64

The maximum allowed usage for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#management_maximum_mbit DistributedVirtualSwitch#management_maximum_mbit}

---

##### `ManagementReservationMbit`<sup>Optional</sup> <a name="ManagementReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementReservationMbit"></a>

```go
ManagementReservationMbit *f64
```

- *Type:* *f64

The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#management_reservation_mbit DistributedVirtualSwitch#management_reservation_mbit}

---

##### `ManagementShareCount`<sup>Optional</sup> <a name="ManagementShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareCount"></a>

```go
ManagementShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to the management traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#management_share_count DistributedVirtualSwitch#management_share_count}

---

##### `ManagementShareLevel`<sup>Optional</sup> <a name="ManagementShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareLevel"></a>

```go
ManagementShareLevel *string
```

- *Type:* *string

The allocation level for the management traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#management_share_level DistributedVirtualSwitch#management_share_level}

---

##### `MaxMtu`<sup>Optional</sup> <a name="MaxMtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.maxMtu"></a>

```go
MaxMtu *f64
```

- *Type:* *f64

The maximum MTU on the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#max_mtu DistributedVirtualSwitch#max_mtu}

---

##### `MulticastFilteringMode`<sup>Optional</sup> <a name="MulticastFilteringMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.multicastFilteringMode"></a>

```go
MulticastFilteringMode *string
```

- *Type:* *string

The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#multicast_filtering_mode DistributedVirtualSwitch#multicast_filtering_mode}

---

##### `NetflowActiveFlowTimeout`<sup>Optional</sup> <a name="NetflowActiveFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowActiveFlowTimeout"></a>

```go
NetflowActiveFlowTimeout *f64
```

- *Type:* *f64

The number of seconds after which active flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#netflow_active_flow_timeout DistributedVirtualSwitch#netflow_active_flow_timeout}

---

##### `NetflowCollectorIpAddress`<sup>Optional</sup> <a name="NetflowCollectorIpAddress" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorIpAddress"></a>

```go
NetflowCollectorIpAddress *string
```

- *Type:* *string

IP address for the netflow collector, using IPv4 or IPv6.

IPv6 is supported in vSphere Distributed Switch Version 6.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#netflow_collector_ip_address DistributedVirtualSwitch#netflow_collector_ip_address}

---

##### `NetflowCollectorPort`<sup>Optional</sup> <a name="NetflowCollectorPort" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorPort"></a>

```go
NetflowCollectorPort *f64
```

- *Type:* *f64

The port for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#netflow_collector_port DistributedVirtualSwitch#netflow_collector_port}

---

##### `NetflowEnabled`<sup>Optional</sup> <a name="NetflowEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowEnabled"></a>

```go
NetflowEnabled interface{}
```

- *Type:* interface{}

Indicates whether to enable netflow on all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#netflow_enabled DistributedVirtualSwitch#netflow_enabled}

---

##### `NetflowIdleFlowTimeout`<sup>Optional</sup> <a name="NetflowIdleFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowIdleFlowTimeout"></a>

```go
NetflowIdleFlowTimeout *f64
```

- *Type:* *f64

The number of seconds after which idle flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#netflow_idle_flow_timeout DistributedVirtualSwitch#netflow_idle_flow_timeout}

---

##### `NetflowInternalFlowsOnly`<sup>Optional</sup> <a name="NetflowInternalFlowsOnly" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowInternalFlowsOnly"></a>

```go
NetflowInternalFlowsOnly interface{}
```

- *Type:* interface{}

Whether to limit analysis to traffic that has both source and destination served by the same host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#netflow_internal_flows_only DistributedVirtualSwitch#netflow_internal_flows_only}

---

##### `NetflowObservationDomainId`<sup>Optional</sup> <a name="NetflowObservationDomainId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowObservationDomainId"></a>

```go
NetflowObservationDomainId *f64
```

- *Type:* *f64

The observation Domain ID for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#netflow_observation_domain_id DistributedVirtualSwitch#netflow_observation_domain_id}

---

##### `NetflowSamplingRate`<sup>Optional</sup> <a name="NetflowSamplingRate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowSamplingRate"></a>

```go
NetflowSamplingRate *f64
```

- *Type:* *f64

The ratio of total number of packets to the number of packets analyzed.

Set to 0 to disable sampling, meaning that all packets are analyzed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#netflow_sampling_rate DistributedVirtualSwitch#netflow_sampling_rate}

---

##### `NetworkResourceControlEnabled`<sup>Optional</sup> <a name="NetworkResourceControlEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlEnabled"></a>

```go
NetworkResourceControlEnabled interface{}
```

- *Type:* interface{}

Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#network_resource_control_enabled DistributedVirtualSwitch#network_resource_control_enabled}

---

##### `NetworkResourceControlVersion`<sup>Optional</sup> <a name="NetworkResourceControlVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlVersion"></a>

```go
NetworkResourceControlVersion *string
```

- *Type:* *string

The network I/O control version to use. Can be one of version2 or version3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#network_resource_control_version DistributedVirtualSwitch#network_resource_control_version}

---

##### `NfsMaximumMbit`<sup>Optional</sup> <a name="NfsMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsMaximumMbit"></a>

```go
NfsMaximumMbit *f64
```

- *Type:* *f64

The maximum allowed usage for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#nfs_maximum_mbit DistributedVirtualSwitch#nfs_maximum_mbit}

---

##### `NfsReservationMbit`<sup>Optional</sup> <a name="NfsReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsReservationMbit"></a>

```go
NfsReservationMbit *f64
```

- *Type:* *f64

The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#nfs_reservation_mbit DistributedVirtualSwitch#nfs_reservation_mbit}

---

##### `NfsShareCount`<sup>Optional</sup> <a name="NfsShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareCount"></a>

```go
NfsShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to the nfs traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#nfs_share_count DistributedVirtualSwitch#nfs_share_count}

---

##### `NfsShareLevel`<sup>Optional</sup> <a name="NfsShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareLevel"></a>

```go
NfsShareLevel *string
```

- *Type:* *string

The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#nfs_share_level DistributedVirtualSwitch#nfs_share_level}

---

##### `NotifySwitches`<sup>Optional</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.notifySwitches"></a>

```go
NotifySwitches interface{}
```

- *Type:* interface{}

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#notify_switches DistributedVirtualSwitch#notify_switches}

---

##### `PortPrivateSecondaryVlanId`<sup>Optional</sup> <a name="PortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.portPrivateSecondaryVlanId"></a>

```go
PortPrivateSecondaryVlanId *f64
```

- *Type:* *f64

The secondary VLAN ID for this port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#port_private_secondary_vlan_id DistributedVirtualSwitch#port_private_secondary_vlan_id}

---

##### `PvlanMapping`<sup>Optional</sup> <a name="PvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.pvlanMapping"></a>

```go
PvlanMapping interface{}
```

- *Type:* interface{}

pvlan_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#pvlan_mapping DistributedVirtualSwitch#pvlan_mapping}

---

##### `StandbyUplinks`<sup>Optional</sup> <a name="StandbyUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.standbyUplinks"></a>

```go
StandbyUplinks *[]*string
```

- *Type:* *[]*string

List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#standby_uplinks DistributedVirtualSwitch#standby_uplinks}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#tags DistributedVirtualSwitch#tags}

---

##### `TeamingPolicy`<sup>Optional</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.teamingPolicy"></a>

```go
TeamingPolicy *string
```

- *Type:* *string

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#teaming_policy DistributedVirtualSwitch#teaming_policy}

---

##### `TxUplink`<sup>Optional</sup> <a name="TxUplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.txUplink"></a>

```go
TxUplink interface{}
```

- *Type:* interface{}

If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#tx_uplink DistributedVirtualSwitch#tx_uplink}

---

##### `Uplinks`<sup>Optional</sup> <a name="Uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.uplinks"></a>

```go
Uplinks *[]*string
```

- *Type:* *[]*string

A list of uplink ports.

The contents of this list control both the uplink count and names of the uplinks on the DVS across hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#uplinks DistributedVirtualSwitch#uplinks}

---

##### `VdpMaximumMbit`<sup>Optional</sup> <a name="VdpMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpMaximumMbit"></a>

```go
VdpMaximumMbit *f64
```

- *Type:* *f64

The maximum allowed usage for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vdp_maximum_mbit DistributedVirtualSwitch#vdp_maximum_mbit}

---

##### `VdpReservationMbit`<sup>Optional</sup> <a name="VdpReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpReservationMbit"></a>

```go
VdpReservationMbit *f64
```

- *Type:* *f64

The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vdp_reservation_mbit DistributedVirtualSwitch#vdp_reservation_mbit}

---

##### `VdpShareCount`<sup>Optional</sup> <a name="VdpShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareCount"></a>

```go
VdpShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to the vdp traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vdp_share_count DistributedVirtualSwitch#vdp_share_count}

---

##### `VdpShareLevel`<sup>Optional</sup> <a name="VdpShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareLevel"></a>

```go
VdpShareLevel *string
```

- *Type:* *string

The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vdp_share_level DistributedVirtualSwitch#vdp_share_level}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The version of this virtual switch.

Allowed versions are 8.0.0, 7.0.3, 7.0.2, 7.0.0, 6.6.0, 6.5.0, 6.0.0, 5.5.0, 5.1.0, and 5.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#version DistributedVirtualSwitch#version}

---

##### `VirtualmachineMaximumMbit`<sup>Optional</sup> <a name="VirtualmachineMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineMaximumMbit"></a>

```go
VirtualmachineMaximumMbit *f64
```

- *Type:* *f64

The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#virtualmachine_maximum_mbit DistributedVirtualSwitch#virtualmachine_maximum_mbit}

---

##### `VirtualmachineReservationMbit`<sup>Optional</sup> <a name="VirtualmachineReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineReservationMbit"></a>

```go
VirtualmachineReservationMbit *f64
```

- *Type:* *f64

The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#virtualmachine_reservation_mbit DistributedVirtualSwitch#virtualmachine_reservation_mbit}

---

##### `VirtualmachineShareCount`<sup>Optional</sup> <a name="VirtualmachineShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareCount"></a>

```go
VirtualmachineShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to the virtualMachine traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#virtualmachine_share_count DistributedVirtualSwitch#virtualmachine_share_count}

---

##### `VirtualmachineShareLevel`<sup>Optional</sup> <a name="VirtualmachineShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareLevel"></a>

```go
VirtualmachineShareLevel *string
```

- *Type:* *string

The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#virtualmachine_share_level DistributedVirtualSwitch#virtualmachine_share_level}

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanId"></a>

```go
VlanId *f64
```

- *Type:* *f64

The VLAN ID for single VLAN mode. 0 denotes no VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vlan_id DistributedVirtualSwitch#vlan_id}

---

##### `VlanRange`<sup>Optional</sup> <a name="VlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanRange"></a>

```go
VlanRange interface{}
```

- *Type:* interface{}

vlan_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vlan_range DistributedVirtualSwitch#vlan_range}

---

##### `VmotionMaximumMbit`<sup>Optional</sup> <a name="VmotionMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionMaximumMbit"></a>

```go
VmotionMaximumMbit *f64
```

- *Type:* *f64

The maximum allowed usage for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vmotion_maximum_mbit DistributedVirtualSwitch#vmotion_maximum_mbit}

---

##### `VmotionReservationMbit`<sup>Optional</sup> <a name="VmotionReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionReservationMbit"></a>

```go
VmotionReservationMbit *f64
```

- *Type:* *f64

The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vmotion_reservation_mbit DistributedVirtualSwitch#vmotion_reservation_mbit}

---

##### `VmotionShareCount`<sup>Optional</sup> <a name="VmotionShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareCount"></a>

```go
VmotionShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to the vmotion traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vmotion_share_count DistributedVirtualSwitch#vmotion_share_count}

---

##### `VmotionShareLevel`<sup>Optional</sup> <a name="VmotionShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareLevel"></a>

```go
VmotionShareLevel *string
```

- *Type:* *string

The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vmotion_share_level DistributedVirtualSwitch#vmotion_share_level}

---

##### `VsanMaximumMbit`<sup>Optional</sup> <a name="VsanMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanMaximumMbit"></a>

```go
VsanMaximumMbit *f64
```

- *Type:* *f64

The maximum allowed usage for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vsan_maximum_mbit DistributedVirtualSwitch#vsan_maximum_mbit}

---

##### `VsanReservationMbit`<sup>Optional</sup> <a name="VsanReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanReservationMbit"></a>

```go
VsanReservationMbit *f64
```

- *Type:* *f64

The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vsan_reservation_mbit DistributedVirtualSwitch#vsan_reservation_mbit}

---

##### `VsanShareCount`<sup>Optional</sup> <a name="VsanShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareCount"></a>

```go
VsanShareCount *f64
```

- *Type:* *f64

The amount of shares to allocate to the vsan traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vsan_share_count DistributedVirtualSwitch#vsan_share_count}

---

##### `VsanShareLevel`<sup>Optional</sup> <a name="VsanShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareLevel"></a>

```go
VsanShareLevel *string
```

- *Type:* *string

The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#vsan_share_level DistributedVirtualSwitch#vsan_share_level}

---

### DistributedVirtualSwitchHost <a name="DistributedVirtualSwitchHost" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

&distributedvirtualswitch.DistributedVirtualSwitchHost {
	HostSystemId: *string,
	Devices: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.hostSystemId">HostSystemId</a></code> | <code>*string</code> | The managed object ID of the host this specification applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.devices">Devices</a></code> | <code>*[]*string</code> | Name of the physical NIC to be added to the proxy switch. |

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.hostSystemId"></a>

```go
HostSystemId *string
```

- *Type:* *string

The managed object ID of the host this specification applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#host_system_id DistributedVirtualSwitch#host_system_id}

---

##### `Devices`<sup>Optional</sup> <a name="Devices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.devices"></a>

```go
Devices *[]*string
```

- *Type:* *[]*string

Name of the physical NIC to be added to the proxy switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#devices DistributedVirtualSwitch#devices}

---

### DistributedVirtualSwitchPvlanMapping <a name="DistributedVirtualSwitchPvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

&distributedvirtualswitch.DistributedVirtualSwitchPvlanMapping {
	PrimaryVlanId: *f64,
	PvlanType: *string,
	SecondaryVlanId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.primaryVlanId">PrimaryVlanId</a></code> | <code>*f64</code> | The primary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.pvlanType">PvlanType</a></code> | <code>*string</code> | The private VLAN type. Valid values are promiscuous, community and isolated. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.secondaryVlanId">SecondaryVlanId</a></code> | <code>*f64</code> | The secondary VLAN ID. |

---

##### `PrimaryVlanId`<sup>Required</sup> <a name="PrimaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.primaryVlanId"></a>

```go
PrimaryVlanId *f64
```

- *Type:* *f64

The primary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#primary_vlan_id DistributedVirtualSwitch#primary_vlan_id}

---

##### `PvlanType`<sup>Required</sup> <a name="PvlanType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.pvlanType"></a>

```go
PvlanType *string
```

- *Type:* *string

The private VLAN type. Valid values are promiscuous, community and isolated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#pvlan_type DistributedVirtualSwitch#pvlan_type}

---

##### `SecondaryVlanId`<sup>Required</sup> <a name="SecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.secondaryVlanId"></a>

```go
SecondaryVlanId *f64
```

- *Type:* *f64

The secondary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#secondary_vlan_id DistributedVirtualSwitch#secondary_vlan_id}

---

### DistributedVirtualSwitchVlanRange <a name="DistributedVirtualSwitchVlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

&distributedvirtualswitch.DistributedVirtualSwitchVlanRange {
	MaxVlan: *f64,
	MinVlan: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.maxVlan">MaxVlan</a></code> | <code>*f64</code> | The minimum VLAN to use in the range. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.minVlan">MinVlan</a></code> | <code>*f64</code> | The minimum VLAN to use in the range. |

---

##### `MaxVlan`<sup>Required</sup> <a name="MaxVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.maxVlan"></a>

```go
MaxVlan *f64
```

- *Type:* *f64

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#max_vlan DistributedVirtualSwitch#max_vlan}

---

##### `MinVlan`<sup>Required</sup> <a name="MinVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.minVlan"></a>

```go
MinVlan *f64
```

- *Type:* *f64

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/distributed_virtual_switch#min_vlan DistributedVirtualSwitch#min_vlan}

---

## Classes <a name="Classes" id="Classes"></a>

### DistributedVirtualSwitchHostList <a name="DistributedVirtualSwitchHostList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

distributedvirtualswitch.NewDistributedVirtualSwitchHostList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DistributedVirtualSwitchHostList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.get"></a>

```go
func Get(index *f64) DistributedVirtualSwitchHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DistributedVirtualSwitchHostOutputReference <a name="DistributedVirtualSwitchHostOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

distributedvirtualswitch.NewDistributedVirtualSwitchHostOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DistributedVirtualSwitchHostOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resetDevices">ResetDevices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDevices` <a name="ResetDevices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resetDevices"></a>

```go
func ResetDevices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devicesInput">DevicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemIdInput">HostSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devices">Devices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemId">HostSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DevicesInput`<sup>Optional</sup> <a name="DevicesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devicesInput"></a>

```go
func DevicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `HostSystemIdInput`<sup>Optional</sup> <a name="HostSystemIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemIdInput"></a>

```go
func HostSystemIdInput() *string
```

- *Type:* *string

---

##### `Devices`<sup>Required</sup> <a name="Devices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devices"></a>

```go
func Devices() *[]*string
```

- *Type:* *[]*string

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemId"></a>

```go
func HostSystemId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DistributedVirtualSwitchPvlanMappingList <a name="DistributedVirtualSwitchPvlanMappingList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

distributedvirtualswitch.NewDistributedVirtualSwitchPvlanMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DistributedVirtualSwitchPvlanMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.get"></a>

```go
func Get(index *f64) DistributedVirtualSwitchPvlanMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DistributedVirtualSwitchPvlanMappingOutputReference <a name="DistributedVirtualSwitchPvlanMappingOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

distributedvirtualswitch.NewDistributedVirtualSwitchPvlanMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DistributedVirtualSwitchPvlanMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanIdInput">PrimaryVlanIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanTypeInput">PvlanTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanIdInput">SecondaryVlanIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanId">PrimaryVlanId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanType">PvlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanId">SecondaryVlanId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryVlanIdInput`<sup>Optional</sup> <a name="PrimaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanIdInput"></a>

```go
func PrimaryVlanIdInput() *f64
```

- *Type:* *f64

---

##### `PvlanTypeInput`<sup>Optional</sup> <a name="PvlanTypeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanTypeInput"></a>

```go
func PvlanTypeInput() *string
```

- *Type:* *string

---

##### `SecondaryVlanIdInput`<sup>Optional</sup> <a name="SecondaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanIdInput"></a>

```go
func SecondaryVlanIdInput() *f64
```

- *Type:* *f64

---

##### `PrimaryVlanId`<sup>Required</sup> <a name="PrimaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanId"></a>

```go
func PrimaryVlanId() *f64
```

- *Type:* *f64

---

##### `PvlanType`<sup>Required</sup> <a name="PvlanType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanType"></a>

```go
func PvlanType() *string
```

- *Type:* *string

---

##### `SecondaryVlanId`<sup>Required</sup> <a name="SecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanId"></a>

```go
func SecondaryVlanId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DistributedVirtualSwitchVlanRangeList <a name="DistributedVirtualSwitchVlanRangeList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

distributedvirtualswitch.NewDistributedVirtualSwitchVlanRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DistributedVirtualSwitchVlanRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.get"></a>

```go
func Get(index *f64) DistributedVirtualSwitchVlanRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DistributedVirtualSwitchVlanRangeOutputReference <a name="DistributedVirtualSwitchVlanRangeOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitch"

distributedvirtualswitch.NewDistributedVirtualSwitchVlanRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DistributedVirtualSwitchVlanRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlanInput">MaxVlanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlanInput">MinVlanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlan">MaxVlan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlan">MinVlan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxVlanInput`<sup>Optional</sup> <a name="MaxVlanInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlanInput"></a>

```go
func MaxVlanInput() *f64
```

- *Type:* *f64

---

##### `MinVlanInput`<sup>Optional</sup> <a name="MinVlanInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlanInput"></a>

```go
func MinVlanInput() *f64
```

- *Type:* *f64

---

##### `MaxVlan`<sup>Required</sup> <a name="MaxVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlan"></a>

```go
func MaxVlan() *f64
```

- *Type:* *f64

---

##### `MinVlan`<sup>Required</sup> <a name="MinVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlan"></a>

```go
func MinVlan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



