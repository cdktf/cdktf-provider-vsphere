# `vsphere_distributed_virtual_switch`

Refer to the Terraform Registory for docs: [`vsphere_distributed_virtual_switch`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch).

# `distributedVirtualSwitch` Submodule <a name="`distributedVirtualSwitch` Submodule" id="@cdktf/provider-vsphere.distributedVirtualSwitch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DistributedVirtualSwitch <a name="DistributedVirtualSwitch" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch vsphere_distributed_virtual_switch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedVirtualSwitch(Construct Scope, string Id, DistributedVirtualSwitchConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig">DistributedVirtualSwitchConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutHost` <a name="PutHost" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putHost"></a>

```csharp
private void PutHost(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putHost.parameter.value"></a>

- *Type:* object

---

##### `PutPvlanMapping` <a name="PutPvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putPvlanMapping"></a>

```csharp
private void PutPvlanMapping(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putPvlanMapping.parameter.value"></a>

- *Type:* object

---

##### `PutVlanRange` <a name="PutVlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putVlanRange"></a>

```csharp
private void PutVlanRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putVlanRange.parameter.value"></a>

- *Type:* object

---

##### `ResetActiveUplinks` <a name="ResetActiveUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetActiveUplinks"></a>

```csharp
private void ResetActiveUplinks()
```

##### `ResetAllowForgedTransmits` <a name="ResetAllowForgedTransmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowForgedTransmits"></a>

```csharp
private void ResetAllowForgedTransmits()
```

##### `ResetAllowMacChanges` <a name="ResetAllowMacChanges" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowMacChanges"></a>

```csharp
private void ResetAllowMacChanges()
```

##### `ResetAllowPromiscuous` <a name="ResetAllowPromiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowPromiscuous"></a>

```csharp
private void ResetAllowPromiscuous()
```

##### `ResetBackupnfcMaximumMbit` <a name="ResetBackupnfcMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcMaximumMbit"></a>

```csharp
private void ResetBackupnfcMaximumMbit()
```

##### `ResetBackupnfcReservationMbit` <a name="ResetBackupnfcReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcReservationMbit"></a>

```csharp
private void ResetBackupnfcReservationMbit()
```

##### `ResetBackupnfcShareCount` <a name="ResetBackupnfcShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareCount"></a>

```csharp
private void ResetBackupnfcShareCount()
```

##### `ResetBackupnfcShareLevel` <a name="ResetBackupnfcShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareLevel"></a>

```csharp
private void ResetBackupnfcShareLevel()
```

##### `ResetBlockAllPorts` <a name="ResetBlockAllPorts" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBlockAllPorts"></a>

```csharp
private void ResetBlockAllPorts()
```

##### `ResetCheckBeacon` <a name="ResetCheckBeacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCheckBeacon"></a>

```csharp
private void ResetCheckBeacon()
```

##### `ResetContactDetail` <a name="ResetContactDetail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactDetail"></a>

```csharp
private void ResetContactDetail()
```

##### `ResetContactName` <a name="ResetContactName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactName"></a>

```csharp
private void ResetContactName()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCustomAttributes"></a>

```csharp
private void ResetCustomAttributes()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDirectpathGen2Allowed` <a name="ResetDirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDirectpathGen2Allowed"></a>

```csharp
private void ResetDirectpathGen2Allowed()
```

##### `ResetEgressShapingAverageBandwidth` <a name="ResetEgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingAverageBandwidth"></a>

```csharp
private void ResetEgressShapingAverageBandwidth()
```

##### `ResetEgressShapingBurstSize` <a name="ResetEgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingBurstSize"></a>

```csharp
private void ResetEgressShapingBurstSize()
```

##### `ResetEgressShapingEnabled` <a name="ResetEgressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingEnabled"></a>

```csharp
private void ResetEgressShapingEnabled()
```

##### `ResetEgressShapingPeakBandwidth` <a name="ResetEgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingPeakBandwidth"></a>

```csharp
private void ResetEgressShapingPeakBandwidth()
```

##### `ResetFailback` <a name="ResetFailback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFailback"></a>

```csharp
private void ResetFailback()
```

##### `ResetFaulttoleranceMaximumMbit` <a name="ResetFaulttoleranceMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceMaximumMbit"></a>

```csharp
private void ResetFaulttoleranceMaximumMbit()
```

##### `ResetFaulttoleranceReservationMbit` <a name="ResetFaulttoleranceReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceReservationMbit"></a>

```csharp
private void ResetFaulttoleranceReservationMbit()
```

##### `ResetFaulttoleranceShareCount` <a name="ResetFaulttoleranceShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareCount"></a>

```csharp
private void ResetFaulttoleranceShareCount()
```

##### `ResetFaulttoleranceShareLevel` <a name="ResetFaulttoleranceShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareLevel"></a>

```csharp
private void ResetFaulttoleranceShareLevel()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetHbrMaximumMbit` <a name="ResetHbrMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrMaximumMbit"></a>

```csharp
private void ResetHbrMaximumMbit()
```

##### `ResetHbrReservationMbit` <a name="ResetHbrReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrReservationMbit"></a>

```csharp
private void ResetHbrReservationMbit()
```

##### `ResetHbrShareCount` <a name="ResetHbrShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareCount"></a>

```csharp
private void ResetHbrShareCount()
```

##### `ResetHbrShareLevel` <a name="ResetHbrShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareLevel"></a>

```csharp
private void ResetHbrShareLevel()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreOtherPvlanMappings` <a name="ResetIgnoreOtherPvlanMappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIgnoreOtherPvlanMappings"></a>

```csharp
private void ResetIgnoreOtherPvlanMappings()
```

##### `ResetIngressShapingAverageBandwidth` <a name="ResetIngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingAverageBandwidth"></a>

```csharp
private void ResetIngressShapingAverageBandwidth()
```

##### `ResetIngressShapingBurstSize` <a name="ResetIngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingBurstSize"></a>

```csharp
private void ResetIngressShapingBurstSize()
```

##### `ResetIngressShapingEnabled` <a name="ResetIngressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingEnabled"></a>

```csharp
private void ResetIngressShapingEnabled()
```

##### `ResetIngressShapingPeakBandwidth` <a name="ResetIngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingPeakBandwidth"></a>

```csharp
private void ResetIngressShapingPeakBandwidth()
```

##### `ResetIpv4Address` <a name="ResetIpv4Address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIpv4Address"></a>

```csharp
private void ResetIpv4Address()
```

##### `ResetIscsiMaximumMbit` <a name="ResetIscsiMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiMaximumMbit"></a>

```csharp
private void ResetIscsiMaximumMbit()
```

##### `ResetIscsiReservationMbit` <a name="ResetIscsiReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiReservationMbit"></a>

```csharp
private void ResetIscsiReservationMbit()
```

##### `ResetIscsiShareCount` <a name="ResetIscsiShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareCount"></a>

```csharp
private void ResetIscsiShareCount()
```

##### `ResetIscsiShareLevel` <a name="ResetIscsiShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareLevel"></a>

```csharp
private void ResetIscsiShareLevel()
```

##### `ResetLacpApiVersion` <a name="ResetLacpApiVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpApiVersion"></a>

```csharp
private void ResetLacpApiVersion()
```

##### `ResetLacpEnabled` <a name="ResetLacpEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpEnabled"></a>

```csharp
private void ResetLacpEnabled()
```

##### `ResetLacpMode` <a name="ResetLacpMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpMode"></a>

```csharp
private void ResetLacpMode()
```

##### `ResetLinkDiscoveryOperation` <a name="ResetLinkDiscoveryOperation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryOperation"></a>

```csharp
private void ResetLinkDiscoveryOperation()
```

##### `ResetLinkDiscoveryProtocol` <a name="ResetLinkDiscoveryProtocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryProtocol"></a>

```csharp
private void ResetLinkDiscoveryProtocol()
```

##### `ResetManagementMaximumMbit` <a name="ResetManagementMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementMaximumMbit"></a>

```csharp
private void ResetManagementMaximumMbit()
```

##### `ResetManagementReservationMbit` <a name="ResetManagementReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementReservationMbit"></a>

```csharp
private void ResetManagementReservationMbit()
```

##### `ResetManagementShareCount` <a name="ResetManagementShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareCount"></a>

```csharp
private void ResetManagementShareCount()
```

##### `ResetManagementShareLevel` <a name="ResetManagementShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareLevel"></a>

```csharp
private void ResetManagementShareLevel()
```

##### `ResetMaxMtu` <a name="ResetMaxMtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMaxMtu"></a>

```csharp
private void ResetMaxMtu()
```

##### `ResetMulticastFilteringMode` <a name="ResetMulticastFilteringMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMulticastFilteringMode"></a>

```csharp
private void ResetMulticastFilteringMode()
```

##### `ResetNetflowActiveFlowTimeout` <a name="ResetNetflowActiveFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowActiveFlowTimeout"></a>

```csharp
private void ResetNetflowActiveFlowTimeout()
```

##### `ResetNetflowCollectorIpAddress` <a name="ResetNetflowCollectorIpAddress" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorIpAddress"></a>

```csharp
private void ResetNetflowCollectorIpAddress()
```

##### `ResetNetflowCollectorPort` <a name="ResetNetflowCollectorPort" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorPort"></a>

```csharp
private void ResetNetflowCollectorPort()
```

##### `ResetNetflowEnabled` <a name="ResetNetflowEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowEnabled"></a>

```csharp
private void ResetNetflowEnabled()
```

##### `ResetNetflowIdleFlowTimeout` <a name="ResetNetflowIdleFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowIdleFlowTimeout"></a>

```csharp
private void ResetNetflowIdleFlowTimeout()
```

##### `ResetNetflowInternalFlowsOnly` <a name="ResetNetflowInternalFlowsOnly" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowInternalFlowsOnly"></a>

```csharp
private void ResetNetflowInternalFlowsOnly()
```

##### `ResetNetflowObservationDomainId` <a name="ResetNetflowObservationDomainId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowObservationDomainId"></a>

```csharp
private void ResetNetflowObservationDomainId()
```

##### `ResetNetflowSamplingRate` <a name="ResetNetflowSamplingRate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowSamplingRate"></a>

```csharp
private void ResetNetflowSamplingRate()
```

##### `ResetNetworkResourceControlEnabled` <a name="ResetNetworkResourceControlEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlEnabled"></a>

```csharp
private void ResetNetworkResourceControlEnabled()
```

##### `ResetNetworkResourceControlVersion` <a name="ResetNetworkResourceControlVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlVersion"></a>

```csharp
private void ResetNetworkResourceControlVersion()
```

##### `ResetNfsMaximumMbit` <a name="ResetNfsMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsMaximumMbit"></a>

```csharp
private void ResetNfsMaximumMbit()
```

##### `ResetNfsReservationMbit` <a name="ResetNfsReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsReservationMbit"></a>

```csharp
private void ResetNfsReservationMbit()
```

##### `ResetNfsShareCount` <a name="ResetNfsShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareCount"></a>

```csharp
private void ResetNfsShareCount()
```

##### `ResetNfsShareLevel` <a name="ResetNfsShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareLevel"></a>

```csharp
private void ResetNfsShareLevel()
```

##### `ResetNotifySwitches` <a name="ResetNotifySwitches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNotifySwitches"></a>

```csharp
private void ResetNotifySwitches()
```

##### `ResetPortPrivateSecondaryVlanId` <a name="ResetPortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPortPrivateSecondaryVlanId"></a>

```csharp
private void ResetPortPrivateSecondaryVlanId()
```

##### `ResetPvlanMapping` <a name="ResetPvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPvlanMapping"></a>

```csharp
private void ResetPvlanMapping()
```

##### `ResetStandbyUplinks` <a name="ResetStandbyUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetStandbyUplinks"></a>

```csharp
private void ResetStandbyUplinks()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTeamingPolicy` <a name="ResetTeamingPolicy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTeamingPolicy"></a>

```csharp
private void ResetTeamingPolicy()
```

##### `ResetTxUplink` <a name="ResetTxUplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTxUplink"></a>

```csharp
private void ResetTxUplink()
```

##### `ResetUplinks` <a name="ResetUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetUplinks"></a>

```csharp
private void ResetUplinks()
```

##### `ResetVdpMaximumMbit` <a name="ResetVdpMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpMaximumMbit"></a>

```csharp
private void ResetVdpMaximumMbit()
```

##### `ResetVdpReservationMbit` <a name="ResetVdpReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpReservationMbit"></a>

```csharp
private void ResetVdpReservationMbit()
```

##### `ResetVdpShareCount` <a name="ResetVdpShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareCount"></a>

```csharp
private void ResetVdpShareCount()
```

##### `ResetVdpShareLevel` <a name="ResetVdpShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareLevel"></a>

```csharp
private void ResetVdpShareLevel()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetVirtualmachineMaximumMbit` <a name="ResetVirtualmachineMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineMaximumMbit"></a>

```csharp
private void ResetVirtualmachineMaximumMbit()
```

##### `ResetVirtualmachineReservationMbit` <a name="ResetVirtualmachineReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineReservationMbit"></a>

```csharp
private void ResetVirtualmachineReservationMbit()
```

##### `ResetVirtualmachineShareCount` <a name="ResetVirtualmachineShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareCount"></a>

```csharp
private void ResetVirtualmachineShareCount()
```

##### `ResetVirtualmachineShareLevel` <a name="ResetVirtualmachineShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareLevel"></a>

```csharp
private void ResetVirtualmachineShareLevel()
```

##### `ResetVlanId` <a name="ResetVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanId"></a>

```csharp
private void ResetVlanId()
```

##### `ResetVlanRange` <a name="ResetVlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanRange"></a>

```csharp
private void ResetVlanRange()
```

##### `ResetVmotionMaximumMbit` <a name="ResetVmotionMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionMaximumMbit"></a>

```csharp
private void ResetVmotionMaximumMbit()
```

##### `ResetVmotionReservationMbit` <a name="ResetVmotionReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionReservationMbit"></a>

```csharp
private void ResetVmotionReservationMbit()
```

##### `ResetVmotionShareCount` <a name="ResetVmotionShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareCount"></a>

```csharp
private void ResetVmotionShareCount()
```

##### `ResetVmotionShareLevel` <a name="ResetVmotionShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareLevel"></a>

```csharp
private void ResetVmotionShareLevel()
```

##### `ResetVsanMaximumMbit` <a name="ResetVsanMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanMaximumMbit"></a>

```csharp
private void ResetVsanMaximumMbit()
```

##### `ResetVsanReservationMbit` <a name="ResetVsanReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanReservationMbit"></a>

```csharp
private void ResetVsanReservationMbit()
```

##### `ResetVsanShareCount` <a name="ResetVsanShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareCount"></a>

```csharp
private void ResetVsanShareCount()
```

##### `ResetVsanShareLevel` <a name="ResetVsanShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareLevel"></a>

```csharp
private void ResetVsanShareLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DistributedVirtualSwitch.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DistributedVirtualSwitch.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DistributedVirtualSwitch.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.configVersion">ConfigVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.host">Host</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList">DistributedVirtualSwitchHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMapping">PvlanMapping</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList">DistributedVirtualSwitchPvlanMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRange">VlanRange</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList">DistributedVirtualSwitchVlanRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinksInput">ActiveUplinksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmitsInput">AllowForgedTransmitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChangesInput">AllowMacChangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuousInput">AllowPromiscuousInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbitInput">BackupnfcMaximumMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbitInput">BackupnfcReservationMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCountInput">BackupnfcShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevelInput">BackupnfcShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPortsInput">BlockAllPortsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeaconInput">CheckBeaconInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetailInput">ContactDetailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactNameInput">ContactNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributesInput">CustomAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2AllowedInput">DirectpathGen2AllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidthInput">EgressShapingAverageBandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSizeInput">EgressShapingBurstSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabledInput">EgressShapingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidthInput">EgressShapingPeakBandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failbackInput">FailbackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbitInput">FaulttoleranceMaximumMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbitInput">FaulttoleranceReservationMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCountInput">FaulttoleranceShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevelInput">FaulttoleranceShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbitInput">HbrMaximumMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbitInput">HbrReservationMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCountInput">HbrShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevelInput">HbrShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hostInput">HostInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappingsInput">IgnoreOtherPvlanMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidthInput">IngressShapingAverageBandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSizeInput">IngressShapingBurstSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabledInput">IngressShapingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidthInput">IngressShapingPeakBandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbitInput">IscsiMaximumMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbitInput">IscsiReservationMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCountInput">IscsiShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevelInput">IscsiShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersionInput">LacpApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabledInput">LacpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpModeInput">LacpModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperationInput">LinkDiscoveryOperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocolInput">LinkDiscoveryProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbitInput">ManagementMaximumMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbitInput">ManagementReservationMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCountInput">ManagementShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevelInput">ManagementShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtuInput">MaxMtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringModeInput">MulticastFilteringModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeoutInput">NetflowActiveFlowTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddressInput">NetflowCollectorIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPortInput">NetflowCollectorPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabledInput">NetflowEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeoutInput">NetflowIdleFlowTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnlyInput">NetflowInternalFlowsOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainIdInput">NetflowObservationDomainIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRateInput">NetflowSamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabledInput">NetworkResourceControlEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersionInput">NetworkResourceControlVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbitInput">NfsMaximumMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbitInput">NfsReservationMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCountInput">NfsShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevelInput">NfsShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitchesInput">NotifySwitchesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanIdInput">PortPrivateSecondaryVlanIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMappingInput">PvlanMappingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinksInput">StandbyUplinksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicyInput">TeamingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplinkInput">TxUplinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinksInput">UplinksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbitInput">VdpMaximumMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbitInput">VdpReservationMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCountInput">VdpShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevelInput">VdpShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbitInput">VirtualmachineMaximumMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbitInput">VirtualmachineReservationMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCountInput">VirtualmachineShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevelInput">VirtualmachineShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanIdInput">VlanIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRangeInput">VlanRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbitInput">VmotionMaximumMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbitInput">VmotionReservationMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCountInput">VmotionShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevelInput">VmotionShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbitInput">VsanMaximumMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbitInput">VsanReservationMbitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCountInput">VsanShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevelInput">VsanShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinks">ActiveUplinks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChanges">AllowMacChanges</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbit">BackupnfcMaximumMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbit">BackupnfcReservationMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCount">BackupnfcShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevel">BackupnfcShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPorts">BlockAllPorts</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeacon">CheckBeacon</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetail">ContactDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactName">ContactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterId">DatacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2Allowed">DirectpathGen2Allowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidth">EgressShapingAverageBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSize">EgressShapingBurstSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabled">EgressShapingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidth">EgressShapingPeakBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failback">Failback</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbit">FaulttoleranceMaximumMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbit">FaulttoleranceReservationMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCount">FaulttoleranceShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevel">FaulttoleranceShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbit">HbrMaximumMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbit">HbrReservationMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCount">HbrShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevel">HbrShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappings">IgnoreOtherPvlanMappings</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidth">IngressShapingAverageBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSize">IngressShapingBurstSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabled">IngressShapingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidth">IngressShapingPeakBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbit">IscsiMaximumMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbit">IscsiReservationMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCount">IscsiShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevel">IscsiShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersion">LacpApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabled">LacpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpMode">LacpMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperation">LinkDiscoveryOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocol">LinkDiscoveryProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbit">ManagementMaximumMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbit">ManagementReservationMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCount">ManagementShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevel">ManagementShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtu">MaxMtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringMode">MulticastFilteringMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeout">NetflowActiveFlowTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddress">NetflowCollectorIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPort">NetflowCollectorPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabled">NetflowEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeout">NetflowIdleFlowTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnly">NetflowInternalFlowsOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainId">NetflowObservationDomainId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRate">NetflowSamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabled">NetworkResourceControlEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersion">NetworkResourceControlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbit">NfsMaximumMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbit">NfsReservationMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCount">NfsShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevel">NfsShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitches">NotifySwitches</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanId">PortPrivateSecondaryVlanId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinks">StandbyUplinks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicy">TeamingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplink">TxUplink</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinks">Uplinks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbit">VdpMaximumMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbit">VdpReservationMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCount">VdpShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevel">VdpShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbit">VirtualmachineMaximumMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbit">VirtualmachineReservationMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCount">VirtualmachineShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevel">VirtualmachineShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanId">VlanId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbit">VmotionMaximumMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbit">VmotionReservationMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCount">VmotionShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevel">VmotionShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbit">VsanMaximumMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbit">VsanReservationMbit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCount">VsanShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevel">VsanShareLevel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConfigVersion`<sup>Required</sup> <a name="ConfigVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.configVersion"></a>

```csharp
public string ConfigVersion { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.host"></a>

```csharp
public DistributedVirtualSwitchHostList Host { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList">DistributedVirtualSwitchHostList</a>

---

##### `PvlanMapping`<sup>Required</sup> <a name="PvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMapping"></a>

```csharp
public DistributedVirtualSwitchPvlanMappingList PvlanMapping { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList">DistributedVirtualSwitchPvlanMappingList</a>

---

##### `VlanRange`<sup>Required</sup> <a name="VlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRange"></a>

```csharp
public DistributedVirtualSwitchVlanRangeList VlanRange { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList">DistributedVirtualSwitchVlanRangeList</a>

---

##### `ActiveUplinksInput`<sup>Optional</sup> <a name="ActiveUplinksInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinksInput"></a>

```csharp
public string[] ActiveUplinksInput { get; }
```

- *Type:* string[]

---

##### `AllowForgedTransmitsInput`<sup>Optional</sup> <a name="AllowForgedTransmitsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmitsInput"></a>

```csharp
public object AllowForgedTransmitsInput { get; }
```

- *Type:* object

---

##### `AllowMacChangesInput`<sup>Optional</sup> <a name="AllowMacChangesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChangesInput"></a>

```csharp
public object AllowMacChangesInput { get; }
```

- *Type:* object

---

##### `AllowPromiscuousInput`<sup>Optional</sup> <a name="AllowPromiscuousInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuousInput"></a>

```csharp
public object AllowPromiscuousInput { get; }
```

- *Type:* object

---

##### `BackupnfcMaximumMbitInput`<sup>Optional</sup> <a name="BackupnfcMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbitInput"></a>

```csharp
public double BackupnfcMaximumMbitInput { get; }
```

- *Type:* double

---

##### `BackupnfcReservationMbitInput`<sup>Optional</sup> <a name="BackupnfcReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbitInput"></a>

```csharp
public double BackupnfcReservationMbitInput { get; }
```

- *Type:* double

---

##### `BackupnfcShareCountInput`<sup>Optional</sup> <a name="BackupnfcShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCountInput"></a>

```csharp
public double BackupnfcShareCountInput { get; }
```

- *Type:* double

---

##### `BackupnfcShareLevelInput`<sup>Optional</sup> <a name="BackupnfcShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevelInput"></a>

```csharp
public string BackupnfcShareLevelInput { get; }
```

- *Type:* string

---

##### `BlockAllPortsInput`<sup>Optional</sup> <a name="BlockAllPortsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPortsInput"></a>

```csharp
public object BlockAllPortsInput { get; }
```

- *Type:* object

---

##### `CheckBeaconInput`<sup>Optional</sup> <a name="CheckBeaconInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeaconInput"></a>

```csharp
public object CheckBeaconInput { get; }
```

- *Type:* object

---

##### `ContactDetailInput`<sup>Optional</sup> <a name="ContactDetailInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetailInput"></a>

```csharp
public string ContactDetailInput { get; }
```

- *Type:* string

---

##### `ContactNameInput`<sup>Optional</sup> <a name="ContactNameInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactNameInput"></a>

```csharp
public string ContactNameInput { get; }
```

- *Type:* string

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterIdInput"></a>

```csharp
public string DatacenterIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DirectpathGen2AllowedInput`<sup>Optional</sup> <a name="DirectpathGen2AllowedInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2AllowedInput"></a>

```csharp
public object DirectpathGen2AllowedInput { get; }
```

- *Type:* object

---

##### `EgressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="EgressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidthInput"></a>

```csharp
public double EgressShapingAverageBandwidthInput { get; }
```

- *Type:* double

---

##### `EgressShapingBurstSizeInput`<sup>Optional</sup> <a name="EgressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSizeInput"></a>

```csharp
public double EgressShapingBurstSizeInput { get; }
```

- *Type:* double

---

##### `EgressShapingEnabledInput`<sup>Optional</sup> <a name="EgressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabledInput"></a>

```csharp
public object EgressShapingEnabledInput { get; }
```

- *Type:* object

---

##### `EgressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="EgressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidthInput"></a>

```csharp
public double EgressShapingPeakBandwidthInput { get; }
```

- *Type:* double

---

##### `FailbackInput`<sup>Optional</sup> <a name="FailbackInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failbackInput"></a>

```csharp
public object FailbackInput { get; }
```

- *Type:* object

---

##### `FaulttoleranceMaximumMbitInput`<sup>Optional</sup> <a name="FaulttoleranceMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbitInput"></a>

```csharp
public double FaulttoleranceMaximumMbitInput { get; }
```

- *Type:* double

---

##### `FaulttoleranceReservationMbitInput`<sup>Optional</sup> <a name="FaulttoleranceReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbitInput"></a>

```csharp
public double FaulttoleranceReservationMbitInput { get; }
```

- *Type:* double

---

##### `FaulttoleranceShareCountInput`<sup>Optional</sup> <a name="FaulttoleranceShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCountInput"></a>

```csharp
public double FaulttoleranceShareCountInput { get; }
```

- *Type:* double

---

##### `FaulttoleranceShareLevelInput`<sup>Optional</sup> <a name="FaulttoleranceShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevelInput"></a>

```csharp
public string FaulttoleranceShareLevelInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `HbrMaximumMbitInput`<sup>Optional</sup> <a name="HbrMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbitInput"></a>

```csharp
public double HbrMaximumMbitInput { get; }
```

- *Type:* double

---

##### `HbrReservationMbitInput`<sup>Optional</sup> <a name="HbrReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbitInput"></a>

```csharp
public double HbrReservationMbitInput { get; }
```

- *Type:* double

---

##### `HbrShareCountInput`<sup>Optional</sup> <a name="HbrShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCountInput"></a>

```csharp
public double HbrShareCountInput { get; }
```

- *Type:* double

---

##### `HbrShareLevelInput`<sup>Optional</sup> <a name="HbrShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevelInput"></a>

```csharp
public string HbrShareLevelInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hostInput"></a>

```csharp
public object HostInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreOtherPvlanMappingsInput`<sup>Optional</sup> <a name="IgnoreOtherPvlanMappingsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappingsInput"></a>

```csharp
public object IgnoreOtherPvlanMappingsInput { get; }
```

- *Type:* object

---

##### `IngressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="IngressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidthInput"></a>

```csharp
public double IngressShapingAverageBandwidthInput { get; }
```

- *Type:* double

---

##### `IngressShapingBurstSizeInput`<sup>Optional</sup> <a name="IngressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSizeInput"></a>

```csharp
public double IngressShapingBurstSizeInput { get; }
```

- *Type:* double

---

##### `IngressShapingEnabledInput`<sup>Optional</sup> <a name="IngressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabledInput"></a>

```csharp
public object IngressShapingEnabledInput { get; }
```

- *Type:* object

---

##### `IngressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="IngressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidthInput"></a>

```csharp
public double IngressShapingPeakBandwidthInput { get; }
```

- *Type:* double

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4AddressInput"></a>

```csharp
public string Ipv4AddressInput { get; }
```

- *Type:* string

---

##### `IscsiMaximumMbitInput`<sup>Optional</sup> <a name="IscsiMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbitInput"></a>

```csharp
public double IscsiMaximumMbitInput { get; }
```

- *Type:* double

---

##### `IscsiReservationMbitInput`<sup>Optional</sup> <a name="IscsiReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbitInput"></a>

```csharp
public double IscsiReservationMbitInput { get; }
```

- *Type:* double

---

##### `IscsiShareCountInput`<sup>Optional</sup> <a name="IscsiShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCountInput"></a>

```csharp
public double IscsiShareCountInput { get; }
```

- *Type:* double

---

##### `IscsiShareLevelInput`<sup>Optional</sup> <a name="IscsiShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevelInput"></a>

```csharp
public string IscsiShareLevelInput { get; }
```

- *Type:* string

---

##### `LacpApiVersionInput`<sup>Optional</sup> <a name="LacpApiVersionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersionInput"></a>

```csharp
public string LacpApiVersionInput { get; }
```

- *Type:* string

---

##### `LacpEnabledInput`<sup>Optional</sup> <a name="LacpEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabledInput"></a>

```csharp
public object LacpEnabledInput { get; }
```

- *Type:* object

---

##### `LacpModeInput`<sup>Optional</sup> <a name="LacpModeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpModeInput"></a>

```csharp
public string LacpModeInput { get; }
```

- *Type:* string

---

##### `LinkDiscoveryOperationInput`<sup>Optional</sup> <a name="LinkDiscoveryOperationInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperationInput"></a>

```csharp
public string LinkDiscoveryOperationInput { get; }
```

- *Type:* string

---

##### `LinkDiscoveryProtocolInput`<sup>Optional</sup> <a name="LinkDiscoveryProtocolInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocolInput"></a>

```csharp
public string LinkDiscoveryProtocolInput { get; }
```

- *Type:* string

---

##### `ManagementMaximumMbitInput`<sup>Optional</sup> <a name="ManagementMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbitInput"></a>

```csharp
public double ManagementMaximumMbitInput { get; }
```

- *Type:* double

---

##### `ManagementReservationMbitInput`<sup>Optional</sup> <a name="ManagementReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbitInput"></a>

```csharp
public double ManagementReservationMbitInput { get; }
```

- *Type:* double

---

##### `ManagementShareCountInput`<sup>Optional</sup> <a name="ManagementShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCountInput"></a>

```csharp
public double ManagementShareCountInput { get; }
```

- *Type:* double

---

##### `ManagementShareLevelInput`<sup>Optional</sup> <a name="ManagementShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevelInput"></a>

```csharp
public string ManagementShareLevelInput { get; }
```

- *Type:* string

---

##### `MaxMtuInput`<sup>Optional</sup> <a name="MaxMtuInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtuInput"></a>

```csharp
public double MaxMtuInput { get; }
```

- *Type:* double

---

##### `MulticastFilteringModeInput`<sup>Optional</sup> <a name="MulticastFilteringModeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringModeInput"></a>

```csharp
public string MulticastFilteringModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetflowActiveFlowTimeoutInput`<sup>Optional</sup> <a name="NetflowActiveFlowTimeoutInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeoutInput"></a>

```csharp
public double NetflowActiveFlowTimeoutInput { get; }
```

- *Type:* double

---

##### `NetflowCollectorIpAddressInput`<sup>Optional</sup> <a name="NetflowCollectorIpAddressInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddressInput"></a>

```csharp
public string NetflowCollectorIpAddressInput { get; }
```

- *Type:* string

---

##### `NetflowCollectorPortInput`<sup>Optional</sup> <a name="NetflowCollectorPortInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPortInput"></a>

```csharp
public double NetflowCollectorPortInput { get; }
```

- *Type:* double

---

##### `NetflowEnabledInput`<sup>Optional</sup> <a name="NetflowEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabledInput"></a>

```csharp
public object NetflowEnabledInput { get; }
```

- *Type:* object

---

##### `NetflowIdleFlowTimeoutInput`<sup>Optional</sup> <a name="NetflowIdleFlowTimeoutInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeoutInput"></a>

```csharp
public double NetflowIdleFlowTimeoutInput { get; }
```

- *Type:* double

---

##### `NetflowInternalFlowsOnlyInput`<sup>Optional</sup> <a name="NetflowInternalFlowsOnlyInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnlyInput"></a>

```csharp
public object NetflowInternalFlowsOnlyInput { get; }
```

- *Type:* object

---

##### `NetflowObservationDomainIdInput`<sup>Optional</sup> <a name="NetflowObservationDomainIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainIdInput"></a>

```csharp
public double NetflowObservationDomainIdInput { get; }
```

- *Type:* double

---

##### `NetflowSamplingRateInput`<sup>Optional</sup> <a name="NetflowSamplingRateInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRateInput"></a>

```csharp
public double NetflowSamplingRateInput { get; }
```

- *Type:* double

---

##### `NetworkResourceControlEnabledInput`<sup>Optional</sup> <a name="NetworkResourceControlEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabledInput"></a>

```csharp
public object NetworkResourceControlEnabledInput { get; }
```

- *Type:* object

---

##### `NetworkResourceControlVersionInput`<sup>Optional</sup> <a name="NetworkResourceControlVersionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersionInput"></a>

```csharp
public string NetworkResourceControlVersionInput { get; }
```

- *Type:* string

---

##### `NfsMaximumMbitInput`<sup>Optional</sup> <a name="NfsMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbitInput"></a>

```csharp
public double NfsMaximumMbitInput { get; }
```

- *Type:* double

---

##### `NfsReservationMbitInput`<sup>Optional</sup> <a name="NfsReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbitInput"></a>

```csharp
public double NfsReservationMbitInput { get; }
```

- *Type:* double

---

##### `NfsShareCountInput`<sup>Optional</sup> <a name="NfsShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCountInput"></a>

```csharp
public double NfsShareCountInput { get; }
```

- *Type:* double

---

##### `NfsShareLevelInput`<sup>Optional</sup> <a name="NfsShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevelInput"></a>

```csharp
public string NfsShareLevelInput { get; }
```

- *Type:* string

---

##### `NotifySwitchesInput`<sup>Optional</sup> <a name="NotifySwitchesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitchesInput"></a>

```csharp
public object NotifySwitchesInput { get; }
```

- *Type:* object

---

##### `PortPrivateSecondaryVlanIdInput`<sup>Optional</sup> <a name="PortPrivateSecondaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanIdInput"></a>

```csharp
public double PortPrivateSecondaryVlanIdInput { get; }
```

- *Type:* double

---

##### `PvlanMappingInput`<sup>Optional</sup> <a name="PvlanMappingInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMappingInput"></a>

```csharp
public object PvlanMappingInput { get; }
```

- *Type:* object

---

##### `StandbyUplinksInput`<sup>Optional</sup> <a name="StandbyUplinksInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinksInput"></a>

```csharp
public string[] StandbyUplinksInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TeamingPolicyInput`<sup>Optional</sup> <a name="TeamingPolicyInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicyInput"></a>

```csharp
public string TeamingPolicyInput { get; }
```

- *Type:* string

---

##### `TxUplinkInput`<sup>Optional</sup> <a name="TxUplinkInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplinkInput"></a>

```csharp
public object TxUplinkInput { get; }
```

- *Type:* object

---

##### `UplinksInput`<sup>Optional</sup> <a name="UplinksInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinksInput"></a>

```csharp
public string[] UplinksInput { get; }
```

- *Type:* string[]

---

##### `VdpMaximumMbitInput`<sup>Optional</sup> <a name="VdpMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbitInput"></a>

```csharp
public double VdpMaximumMbitInput { get; }
```

- *Type:* double

---

##### `VdpReservationMbitInput`<sup>Optional</sup> <a name="VdpReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbitInput"></a>

```csharp
public double VdpReservationMbitInput { get; }
```

- *Type:* double

---

##### `VdpShareCountInput`<sup>Optional</sup> <a name="VdpShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCountInput"></a>

```csharp
public double VdpShareCountInput { get; }
```

- *Type:* double

---

##### `VdpShareLevelInput`<sup>Optional</sup> <a name="VdpShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevelInput"></a>

```csharp
public string VdpShareLevelInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `VirtualmachineMaximumMbitInput`<sup>Optional</sup> <a name="VirtualmachineMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbitInput"></a>

```csharp
public double VirtualmachineMaximumMbitInput { get; }
```

- *Type:* double

---

##### `VirtualmachineReservationMbitInput`<sup>Optional</sup> <a name="VirtualmachineReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbitInput"></a>

```csharp
public double VirtualmachineReservationMbitInput { get; }
```

- *Type:* double

---

##### `VirtualmachineShareCountInput`<sup>Optional</sup> <a name="VirtualmachineShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCountInput"></a>

```csharp
public double VirtualmachineShareCountInput { get; }
```

- *Type:* double

---

##### `VirtualmachineShareLevelInput`<sup>Optional</sup> <a name="VirtualmachineShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevelInput"></a>

```csharp
public string VirtualmachineShareLevelInput { get; }
```

- *Type:* string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanIdInput"></a>

```csharp
public double VlanIdInput { get; }
```

- *Type:* double

---

##### `VlanRangeInput`<sup>Optional</sup> <a name="VlanRangeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRangeInput"></a>

```csharp
public object VlanRangeInput { get; }
```

- *Type:* object

---

##### `VmotionMaximumMbitInput`<sup>Optional</sup> <a name="VmotionMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbitInput"></a>

```csharp
public double VmotionMaximumMbitInput { get; }
```

- *Type:* double

---

##### `VmotionReservationMbitInput`<sup>Optional</sup> <a name="VmotionReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbitInput"></a>

```csharp
public double VmotionReservationMbitInput { get; }
```

- *Type:* double

---

##### `VmotionShareCountInput`<sup>Optional</sup> <a name="VmotionShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCountInput"></a>

```csharp
public double VmotionShareCountInput { get; }
```

- *Type:* double

---

##### `VmotionShareLevelInput`<sup>Optional</sup> <a name="VmotionShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevelInput"></a>

```csharp
public string VmotionShareLevelInput { get; }
```

- *Type:* string

---

##### `VsanMaximumMbitInput`<sup>Optional</sup> <a name="VsanMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbitInput"></a>

```csharp
public double VsanMaximumMbitInput { get; }
```

- *Type:* double

---

##### `VsanReservationMbitInput`<sup>Optional</sup> <a name="VsanReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbitInput"></a>

```csharp
public double VsanReservationMbitInput { get; }
```

- *Type:* double

---

##### `VsanShareCountInput`<sup>Optional</sup> <a name="VsanShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCountInput"></a>

```csharp
public double VsanShareCountInput { get; }
```

- *Type:* double

---

##### `VsanShareLevelInput`<sup>Optional</sup> <a name="VsanShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevelInput"></a>

```csharp
public string VsanShareLevelInput { get; }
```

- *Type:* string

---

##### `ActiveUplinks`<sup>Required</sup> <a name="ActiveUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinks"></a>

```csharp
public string[] ActiveUplinks { get; }
```

- *Type:* string[]

---

##### `AllowForgedTransmits`<sup>Required</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmits"></a>

```csharp
public object AllowForgedTransmits { get; }
```

- *Type:* object

---

##### `AllowMacChanges`<sup>Required</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChanges"></a>

```csharp
public object AllowMacChanges { get; }
```

- *Type:* object

---

##### `AllowPromiscuous`<sup>Required</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuous"></a>

```csharp
public object AllowPromiscuous { get; }
```

- *Type:* object

---

##### `BackupnfcMaximumMbit`<sup>Required</sup> <a name="BackupnfcMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbit"></a>

```csharp
public double BackupnfcMaximumMbit { get; }
```

- *Type:* double

---

##### `BackupnfcReservationMbit`<sup>Required</sup> <a name="BackupnfcReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbit"></a>

```csharp
public double BackupnfcReservationMbit { get; }
```

- *Type:* double

---

##### `BackupnfcShareCount`<sup>Required</sup> <a name="BackupnfcShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCount"></a>

```csharp
public double BackupnfcShareCount { get; }
```

- *Type:* double

---

##### `BackupnfcShareLevel`<sup>Required</sup> <a name="BackupnfcShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevel"></a>

```csharp
public string BackupnfcShareLevel { get; }
```

- *Type:* string

---

##### `BlockAllPorts`<sup>Required</sup> <a name="BlockAllPorts" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPorts"></a>

```csharp
public object BlockAllPorts { get; }
```

- *Type:* object

---

##### `CheckBeacon`<sup>Required</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeacon"></a>

```csharp
public object CheckBeacon { get; }
```

- *Type:* object

---

##### `ContactDetail`<sup>Required</sup> <a name="ContactDetail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetail"></a>

```csharp
public string ContactDetail { get; }
```

- *Type:* string

---

##### `ContactName`<sup>Required</sup> <a name="ContactName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactName"></a>

```csharp
public string ContactName { get; }
```

- *Type:* string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterId"></a>

```csharp
public string DatacenterId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DirectpathGen2Allowed`<sup>Required</sup> <a name="DirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2Allowed"></a>

```csharp
public object DirectpathGen2Allowed { get; }
```

- *Type:* object

---

##### `EgressShapingAverageBandwidth`<sup>Required</sup> <a name="EgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidth"></a>

```csharp
public double EgressShapingAverageBandwidth { get; }
```

- *Type:* double

---

##### `EgressShapingBurstSize`<sup>Required</sup> <a name="EgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSize"></a>

```csharp
public double EgressShapingBurstSize { get; }
```

- *Type:* double

---

##### `EgressShapingEnabled`<sup>Required</sup> <a name="EgressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabled"></a>

```csharp
public object EgressShapingEnabled { get; }
```

- *Type:* object

---

##### `EgressShapingPeakBandwidth`<sup>Required</sup> <a name="EgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidth"></a>

```csharp
public double EgressShapingPeakBandwidth { get; }
```

- *Type:* double

---

##### `Failback`<sup>Required</sup> <a name="Failback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failback"></a>

```csharp
public object Failback { get; }
```

- *Type:* object

---

##### `FaulttoleranceMaximumMbit`<sup>Required</sup> <a name="FaulttoleranceMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbit"></a>

```csharp
public double FaulttoleranceMaximumMbit { get; }
```

- *Type:* double

---

##### `FaulttoleranceReservationMbit`<sup>Required</sup> <a name="FaulttoleranceReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbit"></a>

```csharp
public double FaulttoleranceReservationMbit { get; }
```

- *Type:* double

---

##### `FaulttoleranceShareCount`<sup>Required</sup> <a name="FaulttoleranceShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCount"></a>

```csharp
public double FaulttoleranceShareCount { get; }
```

- *Type:* double

---

##### `FaulttoleranceShareLevel`<sup>Required</sup> <a name="FaulttoleranceShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevel"></a>

```csharp
public string FaulttoleranceShareLevel { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `HbrMaximumMbit`<sup>Required</sup> <a name="HbrMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbit"></a>

```csharp
public double HbrMaximumMbit { get; }
```

- *Type:* double

---

##### `HbrReservationMbit`<sup>Required</sup> <a name="HbrReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbit"></a>

```csharp
public double HbrReservationMbit { get; }
```

- *Type:* double

---

##### `HbrShareCount`<sup>Required</sup> <a name="HbrShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCount"></a>

```csharp
public double HbrShareCount { get; }
```

- *Type:* double

---

##### `HbrShareLevel`<sup>Required</sup> <a name="HbrShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevel"></a>

```csharp
public string HbrShareLevel { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreOtherPvlanMappings`<sup>Required</sup> <a name="IgnoreOtherPvlanMappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappings"></a>

```csharp
public object IgnoreOtherPvlanMappings { get; }
```

- *Type:* object

---

##### `IngressShapingAverageBandwidth`<sup>Required</sup> <a name="IngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidth"></a>

```csharp
public double IngressShapingAverageBandwidth { get; }
```

- *Type:* double

---

##### `IngressShapingBurstSize`<sup>Required</sup> <a name="IngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSize"></a>

```csharp
public double IngressShapingBurstSize { get; }
```

- *Type:* double

---

##### `IngressShapingEnabled`<sup>Required</sup> <a name="IngressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabled"></a>

```csharp
public object IngressShapingEnabled { get; }
```

- *Type:* object

---

##### `IngressShapingPeakBandwidth`<sup>Required</sup> <a name="IngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidth"></a>

```csharp
public double IngressShapingPeakBandwidth { get; }
```

- *Type:* double

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; }
```

- *Type:* string

---

##### `IscsiMaximumMbit`<sup>Required</sup> <a name="IscsiMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbit"></a>

```csharp
public double IscsiMaximumMbit { get; }
```

- *Type:* double

---

##### `IscsiReservationMbit`<sup>Required</sup> <a name="IscsiReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbit"></a>

```csharp
public double IscsiReservationMbit { get; }
```

- *Type:* double

---

##### `IscsiShareCount`<sup>Required</sup> <a name="IscsiShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCount"></a>

```csharp
public double IscsiShareCount { get; }
```

- *Type:* double

---

##### `IscsiShareLevel`<sup>Required</sup> <a name="IscsiShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevel"></a>

```csharp
public string IscsiShareLevel { get; }
```

- *Type:* string

---

##### `LacpApiVersion`<sup>Required</sup> <a name="LacpApiVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersion"></a>

```csharp
public string LacpApiVersion { get; }
```

- *Type:* string

---

##### `LacpEnabled`<sup>Required</sup> <a name="LacpEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabled"></a>

```csharp
public object LacpEnabled { get; }
```

- *Type:* object

---

##### `LacpMode`<sup>Required</sup> <a name="LacpMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpMode"></a>

```csharp
public string LacpMode { get; }
```

- *Type:* string

---

##### `LinkDiscoveryOperation`<sup>Required</sup> <a name="LinkDiscoveryOperation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperation"></a>

```csharp
public string LinkDiscoveryOperation { get; }
```

- *Type:* string

---

##### `LinkDiscoveryProtocol`<sup>Required</sup> <a name="LinkDiscoveryProtocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocol"></a>

```csharp
public string LinkDiscoveryProtocol { get; }
```

- *Type:* string

---

##### `ManagementMaximumMbit`<sup>Required</sup> <a name="ManagementMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbit"></a>

```csharp
public double ManagementMaximumMbit { get; }
```

- *Type:* double

---

##### `ManagementReservationMbit`<sup>Required</sup> <a name="ManagementReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbit"></a>

```csharp
public double ManagementReservationMbit { get; }
```

- *Type:* double

---

##### `ManagementShareCount`<sup>Required</sup> <a name="ManagementShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCount"></a>

```csharp
public double ManagementShareCount { get; }
```

- *Type:* double

---

##### `ManagementShareLevel`<sup>Required</sup> <a name="ManagementShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevel"></a>

```csharp
public string ManagementShareLevel { get; }
```

- *Type:* string

---

##### `MaxMtu`<sup>Required</sup> <a name="MaxMtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtu"></a>

```csharp
public double MaxMtu { get; }
```

- *Type:* double

---

##### `MulticastFilteringMode`<sup>Required</sup> <a name="MulticastFilteringMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringMode"></a>

```csharp
public string MulticastFilteringMode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetflowActiveFlowTimeout`<sup>Required</sup> <a name="NetflowActiveFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeout"></a>

```csharp
public double NetflowActiveFlowTimeout { get; }
```

- *Type:* double

---

##### `NetflowCollectorIpAddress`<sup>Required</sup> <a name="NetflowCollectorIpAddress" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddress"></a>

```csharp
public string NetflowCollectorIpAddress { get; }
```

- *Type:* string

---

##### `NetflowCollectorPort`<sup>Required</sup> <a name="NetflowCollectorPort" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPort"></a>

```csharp
public double NetflowCollectorPort { get; }
```

- *Type:* double

---

##### `NetflowEnabled`<sup>Required</sup> <a name="NetflowEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabled"></a>

```csharp
public object NetflowEnabled { get; }
```

- *Type:* object

---

##### `NetflowIdleFlowTimeout`<sup>Required</sup> <a name="NetflowIdleFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeout"></a>

```csharp
public double NetflowIdleFlowTimeout { get; }
```

- *Type:* double

---

##### `NetflowInternalFlowsOnly`<sup>Required</sup> <a name="NetflowInternalFlowsOnly" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnly"></a>

```csharp
public object NetflowInternalFlowsOnly { get; }
```

- *Type:* object

---

##### `NetflowObservationDomainId`<sup>Required</sup> <a name="NetflowObservationDomainId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainId"></a>

```csharp
public double NetflowObservationDomainId { get; }
```

- *Type:* double

---

##### `NetflowSamplingRate`<sup>Required</sup> <a name="NetflowSamplingRate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRate"></a>

```csharp
public double NetflowSamplingRate { get; }
```

- *Type:* double

---

##### `NetworkResourceControlEnabled`<sup>Required</sup> <a name="NetworkResourceControlEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabled"></a>

```csharp
public object NetworkResourceControlEnabled { get; }
```

- *Type:* object

---

##### `NetworkResourceControlVersion`<sup>Required</sup> <a name="NetworkResourceControlVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersion"></a>

```csharp
public string NetworkResourceControlVersion { get; }
```

- *Type:* string

---

##### `NfsMaximumMbit`<sup>Required</sup> <a name="NfsMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbit"></a>

```csharp
public double NfsMaximumMbit { get; }
```

- *Type:* double

---

##### `NfsReservationMbit`<sup>Required</sup> <a name="NfsReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbit"></a>

```csharp
public double NfsReservationMbit { get; }
```

- *Type:* double

---

##### `NfsShareCount`<sup>Required</sup> <a name="NfsShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCount"></a>

```csharp
public double NfsShareCount { get; }
```

- *Type:* double

---

##### `NfsShareLevel`<sup>Required</sup> <a name="NfsShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevel"></a>

```csharp
public string NfsShareLevel { get; }
```

- *Type:* string

---

##### `NotifySwitches`<sup>Required</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitches"></a>

```csharp
public object NotifySwitches { get; }
```

- *Type:* object

---

##### `PortPrivateSecondaryVlanId`<sup>Required</sup> <a name="PortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanId"></a>

```csharp
public double PortPrivateSecondaryVlanId { get; }
```

- *Type:* double

---

##### `StandbyUplinks`<sup>Required</sup> <a name="StandbyUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinks"></a>

```csharp
public string[] StandbyUplinks { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `TeamingPolicy`<sup>Required</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicy"></a>

```csharp
public string TeamingPolicy { get; }
```

- *Type:* string

---

##### `TxUplink`<sup>Required</sup> <a name="TxUplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplink"></a>

```csharp
public object TxUplink { get; }
```

- *Type:* object

---

##### `Uplinks`<sup>Required</sup> <a name="Uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinks"></a>

```csharp
public string[] Uplinks { get; }
```

- *Type:* string[]

---

##### `VdpMaximumMbit`<sup>Required</sup> <a name="VdpMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbit"></a>

```csharp
public double VdpMaximumMbit { get; }
```

- *Type:* double

---

##### `VdpReservationMbit`<sup>Required</sup> <a name="VdpReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbit"></a>

```csharp
public double VdpReservationMbit { get; }
```

- *Type:* double

---

##### `VdpShareCount`<sup>Required</sup> <a name="VdpShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCount"></a>

```csharp
public double VdpShareCount { get; }
```

- *Type:* double

---

##### `VdpShareLevel`<sup>Required</sup> <a name="VdpShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevel"></a>

```csharp
public string VdpShareLevel { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VirtualmachineMaximumMbit`<sup>Required</sup> <a name="VirtualmachineMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbit"></a>

```csharp
public double VirtualmachineMaximumMbit { get; }
```

- *Type:* double

---

##### `VirtualmachineReservationMbit`<sup>Required</sup> <a name="VirtualmachineReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbit"></a>

```csharp
public double VirtualmachineReservationMbit { get; }
```

- *Type:* double

---

##### `VirtualmachineShareCount`<sup>Required</sup> <a name="VirtualmachineShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCount"></a>

```csharp
public double VirtualmachineShareCount { get; }
```

- *Type:* double

---

##### `VirtualmachineShareLevel`<sup>Required</sup> <a name="VirtualmachineShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevel"></a>

```csharp
public string VirtualmachineShareLevel { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanId"></a>

```csharp
public double VlanId { get; }
```

- *Type:* double

---

##### `VmotionMaximumMbit`<sup>Required</sup> <a name="VmotionMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbit"></a>

```csharp
public double VmotionMaximumMbit { get; }
```

- *Type:* double

---

##### `VmotionReservationMbit`<sup>Required</sup> <a name="VmotionReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbit"></a>

```csharp
public double VmotionReservationMbit { get; }
```

- *Type:* double

---

##### `VmotionShareCount`<sup>Required</sup> <a name="VmotionShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCount"></a>

```csharp
public double VmotionShareCount { get; }
```

- *Type:* double

---

##### `VmotionShareLevel`<sup>Required</sup> <a name="VmotionShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevel"></a>

```csharp
public string VmotionShareLevel { get; }
```

- *Type:* string

---

##### `VsanMaximumMbit`<sup>Required</sup> <a name="VsanMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbit"></a>

```csharp
public double VsanMaximumMbit { get; }
```

- *Type:* double

---

##### `VsanReservationMbit`<sup>Required</sup> <a name="VsanReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbit"></a>

```csharp
public double VsanReservationMbit { get; }
```

- *Type:* double

---

##### `VsanShareCount`<sup>Required</sup> <a name="VsanShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCount"></a>

```csharp
public double VsanShareCount { get; }
```

- *Type:* double

---

##### `VsanShareLevel`<sup>Required</sup> <a name="VsanShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevel"></a>

```csharp
public string VsanShareLevel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DistributedVirtualSwitchConfig <a name="DistributedVirtualSwitchConfig" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedVirtualSwitchConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatacenterId,
    string Name,
    string[] ActiveUplinks = null,
    object AllowForgedTransmits = null,
    object AllowMacChanges = null,
    object AllowPromiscuous = null,
    double BackupnfcMaximumMbit = null,
    double BackupnfcReservationMbit = null,
    double BackupnfcShareCount = null,
    string BackupnfcShareLevel = null,
    object BlockAllPorts = null,
    object CheckBeacon = null,
    string ContactDetail = null,
    string ContactName = null,
    System.Collections.Generic.IDictionary<string, string> CustomAttributes = null,
    string Description = null,
    object DirectpathGen2Allowed = null,
    double EgressShapingAverageBandwidth = null,
    double EgressShapingBurstSize = null,
    object EgressShapingEnabled = null,
    double EgressShapingPeakBandwidth = null,
    object Failback = null,
    double FaulttoleranceMaximumMbit = null,
    double FaulttoleranceReservationMbit = null,
    double FaulttoleranceShareCount = null,
    string FaulttoleranceShareLevel = null,
    string Folder = null,
    double HbrMaximumMbit = null,
    double HbrReservationMbit = null,
    double HbrShareCount = null,
    string HbrShareLevel = null,
    object Host = null,
    string Id = null,
    object IgnoreOtherPvlanMappings = null,
    double IngressShapingAverageBandwidth = null,
    double IngressShapingBurstSize = null,
    object IngressShapingEnabled = null,
    double IngressShapingPeakBandwidth = null,
    string Ipv4Address = null,
    double IscsiMaximumMbit = null,
    double IscsiReservationMbit = null,
    double IscsiShareCount = null,
    string IscsiShareLevel = null,
    string LacpApiVersion = null,
    object LacpEnabled = null,
    string LacpMode = null,
    string LinkDiscoveryOperation = null,
    string LinkDiscoveryProtocol = null,
    double ManagementMaximumMbit = null,
    double ManagementReservationMbit = null,
    double ManagementShareCount = null,
    string ManagementShareLevel = null,
    double MaxMtu = null,
    string MulticastFilteringMode = null,
    double NetflowActiveFlowTimeout = null,
    string NetflowCollectorIpAddress = null,
    double NetflowCollectorPort = null,
    object NetflowEnabled = null,
    double NetflowIdleFlowTimeout = null,
    object NetflowInternalFlowsOnly = null,
    double NetflowObservationDomainId = null,
    double NetflowSamplingRate = null,
    object NetworkResourceControlEnabled = null,
    string NetworkResourceControlVersion = null,
    double NfsMaximumMbit = null,
    double NfsReservationMbit = null,
    double NfsShareCount = null,
    string NfsShareLevel = null,
    object NotifySwitches = null,
    double PortPrivateSecondaryVlanId = null,
    object PvlanMapping = null,
    string[] StandbyUplinks = null,
    string[] Tags = null,
    string TeamingPolicy = null,
    object TxUplink = null,
    string[] Uplinks = null,
    double VdpMaximumMbit = null,
    double VdpReservationMbit = null,
    double VdpShareCount = null,
    string VdpShareLevel = null,
    string Version = null,
    double VirtualmachineMaximumMbit = null,
    double VirtualmachineReservationMbit = null,
    double VirtualmachineShareCount = null,
    string VirtualmachineShareLevel = null,
    double VlanId = null,
    object VlanRange = null,
    double VmotionMaximumMbit = null,
    double VmotionReservationMbit = null,
    double VmotionShareCount = null,
    string VmotionShareLevel = null,
    double VsanMaximumMbit = null,
    double VsanReservationMbit = null,
    double VsanShareCount = null,
    string VsanShareLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.datacenterId">DatacenterId</a></code> | <code>string</code> | The ID of the datacenter to create this virtual switch in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.name">Name</a></code> | <code>string</code> | The name for the DVS. Must be unique in the folder that it is being created in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.activeUplinks">ActiveUplinks</a></code> | <code>string[]</code> | List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>object</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowMacChanges">AllowMacChanges</a></code> | <code>object</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>object</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcMaximumMbit">BackupnfcMaximumMbit</a></code> | <code>double</code> | The maximum allowed usage for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcReservationMbit">BackupnfcReservationMbit</a></code> | <code>double</code> | The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareCount">BackupnfcShareCount</a></code> | <code>double</code> | The amount of shares to allocate to the backupNfc traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareLevel">BackupnfcShareLevel</a></code> | <code>string</code> | The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.blockAllPorts">BlockAllPorts</a></code> | <code>object</code> | Indicates whether to block all ports by default. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.checkBeacon">CheckBeacon</a></code> | <code>object</code> | Enable beacon probing on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactDetail">ContactDetail</a></code> | <code>string</code> | The contact detail for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactName">ContactName</a></code> | <code>string</code> | The contact name for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.description">Description</a></code> | <code>string</code> | The description of the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.directpathGen2Allowed">DirectpathGen2Allowed</a></code> | <code>object</code> | Allow VMDirectPath Gen2 on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingAverageBandwidth">EgressShapingAverageBandwidth</a></code> | <code>double</code> | The average egress bandwidth in bits per second if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingBurstSize">EgressShapingBurstSize</a></code> | <code>double</code> | The maximum egress burst size allowed in bytes if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingEnabled">EgressShapingEnabled</a></code> | <code>object</code> | True if the traffic shaper is enabled for egress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingPeakBandwidth">EgressShapingPeakBandwidth</a></code> | <code>double</code> | The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.failback">Failback</a></code> | <code>object</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceMaximumMbit">FaulttoleranceMaximumMbit</a></code> | <code>double</code> | The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceReservationMbit">FaulttoleranceReservationMbit</a></code> | <code>double</code> | The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareCount">FaulttoleranceShareCount</a></code> | <code>double</code> | The amount of shares to allocate to the faultTolerance traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareLevel">FaulttoleranceShareLevel</a></code> | <code>string</code> | The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.folder">Folder</a></code> | <code>string</code> | The folder to create this virtual switch in, relative to the datacenter. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrMaximumMbit">HbrMaximumMbit</a></code> | <code>double</code> | The maximum allowed usage for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrReservationMbit">HbrReservationMbit</a></code> | <code>double</code> | The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareCount">HbrShareCount</a></code> | <code>double</code> | The amount of shares to allocate to the hbr traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareLevel">HbrShareLevel</a></code> | <code>string</code> | The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.host">Host</a></code> | <code>object</code> | host block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ignoreOtherPvlanMappings">IgnoreOtherPvlanMappings</a></code> | <code>object</code> | Whether to ignore existing PVLAN mappings not managed by this resource. Defaults to false. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingAverageBandwidth">IngressShapingAverageBandwidth</a></code> | <code>double</code> | The average ingress bandwidth in bits per second if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingBurstSize">IngressShapingBurstSize</a></code> | <code>double</code> | The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingEnabled">IngressShapingEnabled</a></code> | <code>object</code> | True if the traffic shaper is enabled for ingress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingPeakBandwidth">IngressShapingPeakBandwidth</a></code> | <code>double</code> | The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | The IPv4 address of the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiMaximumMbit">IscsiMaximumMbit</a></code> | <code>double</code> | The maximum allowed usage for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiReservationMbit">IscsiReservationMbit</a></code> | <code>double</code> | The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareCount">IscsiShareCount</a></code> | <code>double</code> | The amount of shares to allocate to the iSCSI traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareLevel">IscsiShareLevel</a></code> | <code>string</code> | The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpApiVersion">LacpApiVersion</a></code> | <code>string</code> | The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpEnabled">LacpEnabled</a></code> | <code>object</code> | Whether or not to enable LACP on all uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpMode">LacpMode</a></code> | <code>string</code> | The uplink LACP mode to use. Can be one of active or passive. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryOperation">LinkDiscoveryOperation</a></code> | <code>string</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryProtocol">LinkDiscoveryProtocol</a></code> | <code>string</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementMaximumMbit">ManagementMaximumMbit</a></code> | <code>double</code> | The maximum allowed usage for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementReservationMbit">ManagementReservationMbit</a></code> | <code>double</code> | The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareCount">ManagementShareCount</a></code> | <code>double</code> | The amount of shares to allocate to the management traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareLevel">ManagementShareLevel</a></code> | <code>string</code> | The allocation level for the management traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.maxMtu">MaxMtu</a></code> | <code>double</code> | The maximum MTU on the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.multicastFilteringMode">MulticastFilteringMode</a></code> | <code>string</code> | The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowActiveFlowTimeout">NetflowActiveFlowTimeout</a></code> | <code>double</code> | The number of seconds after which active flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorIpAddress">NetflowCollectorIpAddress</a></code> | <code>string</code> | IP address for the netflow collector, using IPv4 or IPv6. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorPort">NetflowCollectorPort</a></code> | <code>double</code> | The port for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowEnabled">NetflowEnabled</a></code> | <code>object</code> | Indicates whether to enable netflow on all ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowIdleFlowTimeout">NetflowIdleFlowTimeout</a></code> | <code>double</code> | The number of seconds after which idle flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowInternalFlowsOnly">NetflowInternalFlowsOnly</a></code> | <code>object</code> | Whether to limit analysis to traffic that has both source and destination served by the same host. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowObservationDomainId">NetflowObservationDomainId</a></code> | <code>double</code> | The observation Domain ID for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowSamplingRate">NetflowSamplingRate</a></code> | <code>double</code> | The ratio of total number of packets to the number of packets analyzed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlEnabled">NetworkResourceControlEnabled</a></code> | <code>object</code> | Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlVersion">NetworkResourceControlVersion</a></code> | <code>string</code> | The network I/O control version to use. Can be one of version2 or version3. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsMaximumMbit">NfsMaximumMbit</a></code> | <code>double</code> | The maximum allowed usage for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsReservationMbit">NfsReservationMbit</a></code> | <code>double</code> | The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareCount">NfsShareCount</a></code> | <code>double</code> | The amount of shares to allocate to the nfs traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareLevel">NfsShareLevel</a></code> | <code>string</code> | The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.notifySwitches">NotifySwitches</a></code> | <code>object</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.portPrivateSecondaryVlanId">PortPrivateSecondaryVlanId</a></code> | <code>double</code> | The secondary VLAN ID for this port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.pvlanMapping">PvlanMapping</a></code> | <code>object</code> | pvlan_mapping block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.standbyUplinks">StandbyUplinks</a></code> | <code>string[]</code> | List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.teamingPolicy">TeamingPolicy</a></code> | <code>string</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.txUplink">TxUplink</a></code> | <code>object</code> | If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.uplinks">Uplinks</a></code> | <code>string[]</code> | A list of uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpMaximumMbit">VdpMaximumMbit</a></code> | <code>double</code> | The maximum allowed usage for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpReservationMbit">VdpReservationMbit</a></code> | <code>double</code> | The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareCount">VdpShareCount</a></code> | <code>double</code> | The amount of shares to allocate to the vdp traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareLevel">VdpShareLevel</a></code> | <code>string</code> | The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.version">Version</a></code> | <code>string</code> | The version of this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineMaximumMbit">VirtualmachineMaximumMbit</a></code> | <code>double</code> | The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineReservationMbit">VirtualmachineReservationMbit</a></code> | <code>double</code> | The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareCount">VirtualmachineShareCount</a></code> | <code>double</code> | The amount of shares to allocate to the virtualMachine traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareLevel">VirtualmachineShareLevel</a></code> | <code>string</code> | The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanId">VlanId</a></code> | <code>double</code> | The VLAN ID for single VLAN mode. 0 denotes no VLAN. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanRange">VlanRange</a></code> | <code>object</code> | vlan_range block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionMaximumMbit">VmotionMaximumMbit</a></code> | <code>double</code> | The maximum allowed usage for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionReservationMbit">VmotionReservationMbit</a></code> | <code>double</code> | The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareCount">VmotionShareCount</a></code> | <code>double</code> | The amount of shares to allocate to the vmotion traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareLevel">VmotionShareLevel</a></code> | <code>string</code> | The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanMaximumMbit">VsanMaximumMbit</a></code> | <code>double</code> | The maximum allowed usage for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanReservationMbit">VsanReservationMbit</a></code> | <code>double</code> | The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareCount">VsanShareCount</a></code> | <code>double</code> | The amount of shares to allocate to the vsan traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareLevel">VsanShareLevel</a></code> | <code>string</code> | The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.datacenterId"></a>

```csharp
public string DatacenterId { get; set; }
```

- *Type:* string

The ID of the datacenter to create this virtual switch in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#datacenter_id DistributedVirtualSwitch#datacenter_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for the DVS. Must be unique in the folder that it is being created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#name DistributedVirtualSwitch#name}

---

##### `ActiveUplinks`<sup>Optional</sup> <a name="ActiveUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.activeUplinks"></a>

```csharp
public string[] ActiveUplinks { get; set; }
```

- *Type:* string[]

List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#active_uplinks DistributedVirtualSwitch#active_uplinks}

---

##### `AllowForgedTransmits`<sup>Optional</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowForgedTransmits"></a>

```csharp
public object AllowForgedTransmits { get; set; }
```

- *Type:* object

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#allow_forged_transmits DistributedVirtualSwitch#allow_forged_transmits}

---

##### `AllowMacChanges`<sup>Optional</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowMacChanges"></a>

```csharp
public object AllowMacChanges { get; set; }
```

- *Type:* object

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#allow_mac_changes DistributedVirtualSwitch#allow_mac_changes}

---

##### `AllowPromiscuous`<sup>Optional</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowPromiscuous"></a>

```csharp
public object AllowPromiscuous { get; set; }
```

- *Type:* object

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#allow_promiscuous DistributedVirtualSwitch#allow_promiscuous}

---

##### `BackupnfcMaximumMbit`<sup>Optional</sup> <a name="BackupnfcMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcMaximumMbit"></a>

```csharp
public double BackupnfcMaximumMbit { get; set; }
```

- *Type:* double

The maximum allowed usage for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#backupnfc_maximum_mbit DistributedVirtualSwitch#backupnfc_maximum_mbit}

---

##### `BackupnfcReservationMbit`<sup>Optional</sup> <a name="BackupnfcReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcReservationMbit"></a>

```csharp
public double BackupnfcReservationMbit { get; set; }
```

- *Type:* double

The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#backupnfc_reservation_mbit DistributedVirtualSwitch#backupnfc_reservation_mbit}

---

##### `BackupnfcShareCount`<sup>Optional</sup> <a name="BackupnfcShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareCount"></a>

```csharp
public double BackupnfcShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to the backupNfc traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#backupnfc_share_count DistributedVirtualSwitch#backupnfc_share_count}

---

##### `BackupnfcShareLevel`<sup>Optional</sup> <a name="BackupnfcShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareLevel"></a>

```csharp
public string BackupnfcShareLevel { get; set; }
```

- *Type:* string

The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#backupnfc_share_level DistributedVirtualSwitch#backupnfc_share_level}

---

##### `BlockAllPorts`<sup>Optional</sup> <a name="BlockAllPorts" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.blockAllPorts"></a>

```csharp
public object BlockAllPorts { get; set; }
```

- *Type:* object

Indicates whether to block all ports by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#block_all_ports DistributedVirtualSwitch#block_all_ports}

---

##### `CheckBeacon`<sup>Optional</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.checkBeacon"></a>

```csharp
public object CheckBeacon { get; set; }
```

- *Type:* object

Enable beacon probing on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#check_beacon DistributedVirtualSwitch#check_beacon}

---

##### `ContactDetail`<sup>Optional</sup> <a name="ContactDetail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactDetail"></a>

```csharp
public string ContactDetail { get; set; }
```

- *Type:* string

The contact detail for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#contact_detail DistributedVirtualSwitch#contact_detail}

---

##### `ContactName`<sup>Optional</sup> <a name="ContactName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactName"></a>

```csharp
public string ContactName { get; set; }
```

- *Type:* string

The contact name for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#contact_name DistributedVirtualSwitch#contact_name}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#custom_attributes DistributedVirtualSwitch#custom_attributes}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#description DistributedVirtualSwitch#description}

---

##### `DirectpathGen2Allowed`<sup>Optional</sup> <a name="DirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.directpathGen2Allowed"></a>

```csharp
public object DirectpathGen2Allowed { get; set; }
```

- *Type:* object

Allow VMDirectPath Gen2 on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#directpath_gen2_allowed DistributedVirtualSwitch#directpath_gen2_allowed}

---

##### `EgressShapingAverageBandwidth`<sup>Optional</sup> <a name="EgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingAverageBandwidth"></a>

```csharp
public double EgressShapingAverageBandwidth { get; set; }
```

- *Type:* double

The average egress bandwidth in bits per second if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#egress_shaping_average_bandwidth DistributedVirtualSwitch#egress_shaping_average_bandwidth}

---

##### `EgressShapingBurstSize`<sup>Optional</sup> <a name="EgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingBurstSize"></a>

```csharp
public double EgressShapingBurstSize { get; set; }
```

- *Type:* double

The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#egress_shaping_burst_size DistributedVirtualSwitch#egress_shaping_burst_size}

---

##### `EgressShapingEnabled`<sup>Optional</sup> <a name="EgressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingEnabled"></a>

```csharp
public object EgressShapingEnabled { get; set; }
```

- *Type:* object

True if the traffic shaper is enabled for egress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#egress_shaping_enabled DistributedVirtualSwitch#egress_shaping_enabled}

---

##### `EgressShapingPeakBandwidth`<sup>Optional</sup> <a name="EgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingPeakBandwidth"></a>

```csharp
public double EgressShapingPeakBandwidth { get; set; }
```

- *Type:* double

The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#egress_shaping_peak_bandwidth DistributedVirtualSwitch#egress_shaping_peak_bandwidth}

---

##### `Failback`<sup>Optional</sup> <a name="Failback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.failback"></a>

```csharp
public object Failback { get; set; }
```

- *Type:* object

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#failback DistributedVirtualSwitch#failback}

---

##### `FaulttoleranceMaximumMbit`<sup>Optional</sup> <a name="FaulttoleranceMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceMaximumMbit"></a>

```csharp
public double FaulttoleranceMaximumMbit { get; set; }
```

- *Type:* double

The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#faulttolerance_maximum_mbit DistributedVirtualSwitch#faulttolerance_maximum_mbit}

---

##### `FaulttoleranceReservationMbit`<sup>Optional</sup> <a name="FaulttoleranceReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceReservationMbit"></a>

```csharp
public double FaulttoleranceReservationMbit { get; set; }
```

- *Type:* double

The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#faulttolerance_reservation_mbit DistributedVirtualSwitch#faulttolerance_reservation_mbit}

---

##### `FaulttoleranceShareCount`<sup>Optional</sup> <a name="FaulttoleranceShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareCount"></a>

```csharp
public double FaulttoleranceShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to the faultTolerance traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#faulttolerance_share_count DistributedVirtualSwitch#faulttolerance_share_count}

---

##### `FaulttoleranceShareLevel`<sup>Optional</sup> <a name="FaulttoleranceShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareLevel"></a>

```csharp
public string FaulttoleranceShareLevel { get; set; }
```

- *Type:* string

The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#faulttolerance_share_level DistributedVirtualSwitch#faulttolerance_share_level}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The folder to create this virtual switch in, relative to the datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#folder DistributedVirtualSwitch#folder}

---

##### `HbrMaximumMbit`<sup>Optional</sup> <a name="HbrMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrMaximumMbit"></a>

```csharp
public double HbrMaximumMbit { get; set; }
```

- *Type:* double

The maximum allowed usage for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#hbr_maximum_mbit DistributedVirtualSwitch#hbr_maximum_mbit}

---

##### `HbrReservationMbit`<sup>Optional</sup> <a name="HbrReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrReservationMbit"></a>

```csharp
public double HbrReservationMbit { get; set; }
```

- *Type:* double

The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#hbr_reservation_mbit DistributedVirtualSwitch#hbr_reservation_mbit}

---

##### `HbrShareCount`<sup>Optional</sup> <a name="HbrShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareCount"></a>

```csharp
public double HbrShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to the hbr traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#hbr_share_count DistributedVirtualSwitch#hbr_share_count}

---

##### `HbrShareLevel`<sup>Optional</sup> <a name="HbrShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareLevel"></a>

```csharp
public string HbrShareLevel { get; set; }
```

- *Type:* string

The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#hbr_share_level DistributedVirtualSwitch#hbr_share_level}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.host"></a>

```csharp
public object Host { get; set; }
```

- *Type:* object

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#host DistributedVirtualSwitch#host}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreOtherPvlanMappings`<sup>Optional</sup> <a name="IgnoreOtherPvlanMappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ignoreOtherPvlanMappings"></a>

```csharp
public object IgnoreOtherPvlanMappings { get; set; }
```

- *Type:* object

Whether to ignore existing PVLAN mappings not managed by this resource. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#ignore_other_pvlan_mappings DistributedVirtualSwitch#ignore_other_pvlan_mappings}

---

##### `IngressShapingAverageBandwidth`<sup>Optional</sup> <a name="IngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingAverageBandwidth"></a>

```csharp
public double IngressShapingAverageBandwidth { get; set; }
```

- *Type:* double

The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#ingress_shaping_average_bandwidth DistributedVirtualSwitch#ingress_shaping_average_bandwidth}

---

##### `IngressShapingBurstSize`<sup>Optional</sup> <a name="IngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingBurstSize"></a>

```csharp
public double IngressShapingBurstSize { get; set; }
```

- *Type:* double

The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#ingress_shaping_burst_size DistributedVirtualSwitch#ingress_shaping_burst_size}

---

##### `IngressShapingEnabled`<sup>Optional</sup> <a name="IngressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingEnabled"></a>

```csharp
public object IngressShapingEnabled { get; set; }
```

- *Type:* object

True if the traffic shaper is enabled for ingress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#ingress_shaping_enabled DistributedVirtualSwitch#ingress_shaping_enabled}

---

##### `IngressShapingPeakBandwidth`<sup>Optional</sup> <a name="IngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingPeakBandwidth"></a>

```csharp
public double IngressShapingPeakBandwidth { get; set; }
```

- *Type:* double

The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#ingress_shaping_peak_bandwidth DistributedVirtualSwitch#ingress_shaping_peak_bandwidth}

---

##### `Ipv4Address`<sup>Optional</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; set; }
```

- *Type:* string

The IPv4 address of the switch.

This can be used to see the DVS as a unique device with NetFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#ipv4_address DistributedVirtualSwitch#ipv4_address}

---

##### `IscsiMaximumMbit`<sup>Optional</sup> <a name="IscsiMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiMaximumMbit"></a>

```csharp
public double IscsiMaximumMbit { get; set; }
```

- *Type:* double

The maximum allowed usage for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#iscsi_maximum_mbit DistributedVirtualSwitch#iscsi_maximum_mbit}

---

##### `IscsiReservationMbit`<sup>Optional</sup> <a name="IscsiReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiReservationMbit"></a>

```csharp
public double IscsiReservationMbit { get; set; }
```

- *Type:* double

The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#iscsi_reservation_mbit DistributedVirtualSwitch#iscsi_reservation_mbit}

---

##### `IscsiShareCount`<sup>Optional</sup> <a name="IscsiShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareCount"></a>

```csharp
public double IscsiShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to the iSCSI traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#iscsi_share_count DistributedVirtualSwitch#iscsi_share_count}

---

##### `IscsiShareLevel`<sup>Optional</sup> <a name="IscsiShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareLevel"></a>

```csharp
public string IscsiShareLevel { get; set; }
```

- *Type:* string

The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#iscsi_share_level DistributedVirtualSwitch#iscsi_share_level}

---

##### `LacpApiVersion`<sup>Optional</sup> <a name="LacpApiVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpApiVersion"></a>

```csharp
public string LacpApiVersion { get; set; }
```

- *Type:* string

The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#lacp_api_version DistributedVirtualSwitch#lacp_api_version}

---

##### `LacpEnabled`<sup>Optional</sup> <a name="LacpEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpEnabled"></a>

```csharp
public object LacpEnabled { get; set; }
```

- *Type:* object

Whether or not to enable LACP on all uplink ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#lacp_enabled DistributedVirtualSwitch#lacp_enabled}

---

##### `LacpMode`<sup>Optional</sup> <a name="LacpMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpMode"></a>

```csharp
public string LacpMode { get; set; }
```

- *Type:* string

The uplink LACP mode to use. Can be one of active or passive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#lacp_mode DistributedVirtualSwitch#lacp_mode}

---

##### `LinkDiscoveryOperation`<sup>Optional</sup> <a name="LinkDiscoveryOperation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryOperation"></a>

```csharp
public string LinkDiscoveryOperation { get; set; }
```

- *Type:* string

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#link_discovery_operation DistributedVirtualSwitch#link_discovery_operation}

---

##### `LinkDiscoveryProtocol`<sup>Optional</sup> <a name="LinkDiscoveryProtocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryProtocol"></a>

```csharp
public string LinkDiscoveryProtocol { get; set; }
```

- *Type:* string

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#link_discovery_protocol DistributedVirtualSwitch#link_discovery_protocol}

---

##### `ManagementMaximumMbit`<sup>Optional</sup> <a name="ManagementMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementMaximumMbit"></a>

```csharp
public double ManagementMaximumMbit { get; set; }
```

- *Type:* double

The maximum allowed usage for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#management_maximum_mbit DistributedVirtualSwitch#management_maximum_mbit}

---

##### `ManagementReservationMbit`<sup>Optional</sup> <a name="ManagementReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementReservationMbit"></a>

```csharp
public double ManagementReservationMbit { get; set; }
```

- *Type:* double

The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#management_reservation_mbit DistributedVirtualSwitch#management_reservation_mbit}

---

##### `ManagementShareCount`<sup>Optional</sup> <a name="ManagementShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareCount"></a>

```csharp
public double ManagementShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to the management traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#management_share_count DistributedVirtualSwitch#management_share_count}

---

##### `ManagementShareLevel`<sup>Optional</sup> <a name="ManagementShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareLevel"></a>

```csharp
public string ManagementShareLevel { get; set; }
```

- *Type:* string

The allocation level for the management traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#management_share_level DistributedVirtualSwitch#management_share_level}

---

##### `MaxMtu`<sup>Optional</sup> <a name="MaxMtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.maxMtu"></a>

```csharp
public double MaxMtu { get; set; }
```

- *Type:* double

The maximum MTU on the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#max_mtu DistributedVirtualSwitch#max_mtu}

---

##### `MulticastFilteringMode`<sup>Optional</sup> <a name="MulticastFilteringMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.multicastFilteringMode"></a>

```csharp
public string MulticastFilteringMode { get; set; }
```

- *Type:* string

The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#multicast_filtering_mode DistributedVirtualSwitch#multicast_filtering_mode}

---

##### `NetflowActiveFlowTimeout`<sup>Optional</sup> <a name="NetflowActiveFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowActiveFlowTimeout"></a>

```csharp
public double NetflowActiveFlowTimeout { get; set; }
```

- *Type:* double

The number of seconds after which active flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#netflow_active_flow_timeout DistributedVirtualSwitch#netflow_active_flow_timeout}

---

##### `NetflowCollectorIpAddress`<sup>Optional</sup> <a name="NetflowCollectorIpAddress" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorIpAddress"></a>

```csharp
public string NetflowCollectorIpAddress { get; set; }
```

- *Type:* string

IP address for the netflow collector, using IPv4 or IPv6.

IPv6 is supported in vSphere Distributed Switch Version 6.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#netflow_collector_ip_address DistributedVirtualSwitch#netflow_collector_ip_address}

---

##### `NetflowCollectorPort`<sup>Optional</sup> <a name="NetflowCollectorPort" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorPort"></a>

```csharp
public double NetflowCollectorPort { get; set; }
```

- *Type:* double

The port for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#netflow_collector_port DistributedVirtualSwitch#netflow_collector_port}

---

##### `NetflowEnabled`<sup>Optional</sup> <a name="NetflowEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowEnabled"></a>

```csharp
public object NetflowEnabled { get; set; }
```

- *Type:* object

Indicates whether to enable netflow on all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#netflow_enabled DistributedVirtualSwitch#netflow_enabled}

---

##### `NetflowIdleFlowTimeout`<sup>Optional</sup> <a name="NetflowIdleFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowIdleFlowTimeout"></a>

```csharp
public double NetflowIdleFlowTimeout { get; set; }
```

- *Type:* double

The number of seconds after which idle flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#netflow_idle_flow_timeout DistributedVirtualSwitch#netflow_idle_flow_timeout}

---

##### `NetflowInternalFlowsOnly`<sup>Optional</sup> <a name="NetflowInternalFlowsOnly" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowInternalFlowsOnly"></a>

```csharp
public object NetflowInternalFlowsOnly { get; set; }
```

- *Type:* object

Whether to limit analysis to traffic that has both source and destination served by the same host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#netflow_internal_flows_only DistributedVirtualSwitch#netflow_internal_flows_only}

---

##### `NetflowObservationDomainId`<sup>Optional</sup> <a name="NetflowObservationDomainId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowObservationDomainId"></a>

```csharp
public double NetflowObservationDomainId { get; set; }
```

- *Type:* double

The observation Domain ID for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#netflow_observation_domain_id DistributedVirtualSwitch#netflow_observation_domain_id}

---

##### `NetflowSamplingRate`<sup>Optional</sup> <a name="NetflowSamplingRate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowSamplingRate"></a>

```csharp
public double NetflowSamplingRate { get; set; }
```

- *Type:* double

The ratio of total number of packets to the number of packets analyzed.

Set to 0 to disable sampling, meaning that all packets are analyzed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#netflow_sampling_rate DistributedVirtualSwitch#netflow_sampling_rate}

---

##### `NetworkResourceControlEnabled`<sup>Optional</sup> <a name="NetworkResourceControlEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlEnabled"></a>

```csharp
public object NetworkResourceControlEnabled { get; set; }
```

- *Type:* object

Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#network_resource_control_enabled DistributedVirtualSwitch#network_resource_control_enabled}

---

##### `NetworkResourceControlVersion`<sup>Optional</sup> <a name="NetworkResourceControlVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlVersion"></a>

```csharp
public string NetworkResourceControlVersion { get; set; }
```

- *Type:* string

The network I/O control version to use. Can be one of version2 or version3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#network_resource_control_version DistributedVirtualSwitch#network_resource_control_version}

---

##### `NfsMaximumMbit`<sup>Optional</sup> <a name="NfsMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsMaximumMbit"></a>

```csharp
public double NfsMaximumMbit { get; set; }
```

- *Type:* double

The maximum allowed usage for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#nfs_maximum_mbit DistributedVirtualSwitch#nfs_maximum_mbit}

---

##### `NfsReservationMbit`<sup>Optional</sup> <a name="NfsReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsReservationMbit"></a>

```csharp
public double NfsReservationMbit { get; set; }
```

- *Type:* double

The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#nfs_reservation_mbit DistributedVirtualSwitch#nfs_reservation_mbit}

---

##### `NfsShareCount`<sup>Optional</sup> <a name="NfsShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareCount"></a>

```csharp
public double NfsShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to the nfs traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#nfs_share_count DistributedVirtualSwitch#nfs_share_count}

---

##### `NfsShareLevel`<sup>Optional</sup> <a name="NfsShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareLevel"></a>

```csharp
public string NfsShareLevel { get; set; }
```

- *Type:* string

The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#nfs_share_level DistributedVirtualSwitch#nfs_share_level}

---

##### `NotifySwitches`<sup>Optional</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.notifySwitches"></a>

```csharp
public object NotifySwitches { get; set; }
```

- *Type:* object

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#notify_switches DistributedVirtualSwitch#notify_switches}

---

##### `PortPrivateSecondaryVlanId`<sup>Optional</sup> <a name="PortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.portPrivateSecondaryVlanId"></a>

```csharp
public double PortPrivateSecondaryVlanId { get; set; }
```

- *Type:* double

The secondary VLAN ID for this port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#port_private_secondary_vlan_id DistributedVirtualSwitch#port_private_secondary_vlan_id}

---

##### `PvlanMapping`<sup>Optional</sup> <a name="PvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.pvlanMapping"></a>

```csharp
public object PvlanMapping { get; set; }
```

- *Type:* object

pvlan_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#pvlan_mapping DistributedVirtualSwitch#pvlan_mapping}

---

##### `StandbyUplinks`<sup>Optional</sup> <a name="StandbyUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.standbyUplinks"></a>

```csharp
public string[] StandbyUplinks { get; set; }
```

- *Type:* string[]

List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#standby_uplinks DistributedVirtualSwitch#standby_uplinks}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#tags DistributedVirtualSwitch#tags}

---

##### `TeamingPolicy`<sup>Optional</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.teamingPolicy"></a>

```csharp
public string TeamingPolicy { get; set; }
```

- *Type:* string

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#teaming_policy DistributedVirtualSwitch#teaming_policy}

---

##### `TxUplink`<sup>Optional</sup> <a name="TxUplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.txUplink"></a>

```csharp
public object TxUplink { get; set; }
```

- *Type:* object

If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#tx_uplink DistributedVirtualSwitch#tx_uplink}

---

##### `Uplinks`<sup>Optional</sup> <a name="Uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.uplinks"></a>

```csharp
public string[] Uplinks { get; set; }
```

- *Type:* string[]

A list of uplink ports.

The contents of this list control both the uplink count and names of the uplinks on the DVS across hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#uplinks DistributedVirtualSwitch#uplinks}

---

##### `VdpMaximumMbit`<sup>Optional</sup> <a name="VdpMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpMaximumMbit"></a>

```csharp
public double VdpMaximumMbit { get; set; }
```

- *Type:* double

The maximum allowed usage for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vdp_maximum_mbit DistributedVirtualSwitch#vdp_maximum_mbit}

---

##### `VdpReservationMbit`<sup>Optional</sup> <a name="VdpReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpReservationMbit"></a>

```csharp
public double VdpReservationMbit { get; set; }
```

- *Type:* double

The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vdp_reservation_mbit DistributedVirtualSwitch#vdp_reservation_mbit}

---

##### `VdpShareCount`<sup>Optional</sup> <a name="VdpShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareCount"></a>

```csharp
public double VdpShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to the vdp traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vdp_share_count DistributedVirtualSwitch#vdp_share_count}

---

##### `VdpShareLevel`<sup>Optional</sup> <a name="VdpShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareLevel"></a>

```csharp
public string VdpShareLevel { get; set; }
```

- *Type:* string

The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vdp_share_level DistributedVirtualSwitch#vdp_share_level}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version of this virtual switch.

Allowed versions are 8.0.0, 7.0.3, 7.0.2, 7.0.0, 6.6.0, 6.5.0, 6.0.0, 5.5.0, 5.1.0, and 5.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#version DistributedVirtualSwitch#version}

---

##### `VirtualmachineMaximumMbit`<sup>Optional</sup> <a name="VirtualmachineMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineMaximumMbit"></a>

```csharp
public double VirtualmachineMaximumMbit { get; set; }
```

- *Type:* double

The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#virtualmachine_maximum_mbit DistributedVirtualSwitch#virtualmachine_maximum_mbit}

---

##### `VirtualmachineReservationMbit`<sup>Optional</sup> <a name="VirtualmachineReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineReservationMbit"></a>

```csharp
public double VirtualmachineReservationMbit { get; set; }
```

- *Type:* double

The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#virtualmachine_reservation_mbit DistributedVirtualSwitch#virtualmachine_reservation_mbit}

---

##### `VirtualmachineShareCount`<sup>Optional</sup> <a name="VirtualmachineShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareCount"></a>

```csharp
public double VirtualmachineShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to the virtualMachine traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#virtualmachine_share_count DistributedVirtualSwitch#virtualmachine_share_count}

---

##### `VirtualmachineShareLevel`<sup>Optional</sup> <a name="VirtualmachineShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareLevel"></a>

```csharp
public string VirtualmachineShareLevel { get; set; }
```

- *Type:* string

The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#virtualmachine_share_level DistributedVirtualSwitch#virtualmachine_share_level}

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanId"></a>

```csharp
public double VlanId { get; set; }
```

- *Type:* double

The VLAN ID for single VLAN mode. 0 denotes no VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vlan_id DistributedVirtualSwitch#vlan_id}

---

##### `VlanRange`<sup>Optional</sup> <a name="VlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanRange"></a>

```csharp
public object VlanRange { get; set; }
```

- *Type:* object

vlan_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vlan_range DistributedVirtualSwitch#vlan_range}

---

##### `VmotionMaximumMbit`<sup>Optional</sup> <a name="VmotionMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionMaximumMbit"></a>

```csharp
public double VmotionMaximumMbit { get; set; }
```

- *Type:* double

The maximum allowed usage for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vmotion_maximum_mbit DistributedVirtualSwitch#vmotion_maximum_mbit}

---

##### `VmotionReservationMbit`<sup>Optional</sup> <a name="VmotionReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionReservationMbit"></a>

```csharp
public double VmotionReservationMbit { get; set; }
```

- *Type:* double

The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vmotion_reservation_mbit DistributedVirtualSwitch#vmotion_reservation_mbit}

---

##### `VmotionShareCount`<sup>Optional</sup> <a name="VmotionShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareCount"></a>

```csharp
public double VmotionShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to the vmotion traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vmotion_share_count DistributedVirtualSwitch#vmotion_share_count}

---

##### `VmotionShareLevel`<sup>Optional</sup> <a name="VmotionShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareLevel"></a>

```csharp
public string VmotionShareLevel { get; set; }
```

- *Type:* string

The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vmotion_share_level DistributedVirtualSwitch#vmotion_share_level}

---

##### `VsanMaximumMbit`<sup>Optional</sup> <a name="VsanMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanMaximumMbit"></a>

```csharp
public double VsanMaximumMbit { get; set; }
```

- *Type:* double

The maximum allowed usage for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vsan_maximum_mbit DistributedVirtualSwitch#vsan_maximum_mbit}

---

##### `VsanReservationMbit`<sup>Optional</sup> <a name="VsanReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanReservationMbit"></a>

```csharp
public double VsanReservationMbit { get; set; }
```

- *Type:* double

The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vsan_reservation_mbit DistributedVirtualSwitch#vsan_reservation_mbit}

---

##### `VsanShareCount`<sup>Optional</sup> <a name="VsanShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareCount"></a>

```csharp
public double VsanShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to the vsan traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vsan_share_count DistributedVirtualSwitch#vsan_share_count}

---

##### `VsanShareLevel`<sup>Optional</sup> <a name="VsanShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareLevel"></a>

```csharp
public string VsanShareLevel { get; set; }
```

- *Type:* string

The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#vsan_share_level DistributedVirtualSwitch#vsan_share_level}

---

### DistributedVirtualSwitchHost <a name="DistributedVirtualSwitchHost" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedVirtualSwitchHost {
    string HostSystemId,
    string[] Devices = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.hostSystemId">HostSystemId</a></code> | <code>string</code> | The managed object ID of the host this specification applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.devices">Devices</a></code> | <code>string[]</code> | Name of the physical NIC to be added to the proxy switch. |

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.hostSystemId"></a>

```csharp
public string HostSystemId { get; set; }
```

- *Type:* string

The managed object ID of the host this specification applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#host_system_id DistributedVirtualSwitch#host_system_id}

---

##### `Devices`<sup>Optional</sup> <a name="Devices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.devices"></a>

```csharp
public string[] Devices { get; set; }
```

- *Type:* string[]

Name of the physical NIC to be added to the proxy switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#devices DistributedVirtualSwitch#devices}

---

### DistributedVirtualSwitchPvlanMapping <a name="DistributedVirtualSwitchPvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedVirtualSwitchPvlanMapping {
    double PrimaryVlanId,
    string PvlanType,
    double SecondaryVlanId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.primaryVlanId">PrimaryVlanId</a></code> | <code>double</code> | The primary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.pvlanType">PvlanType</a></code> | <code>string</code> | The private VLAN type. Valid values are promiscuous, community and isolated. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.secondaryVlanId">SecondaryVlanId</a></code> | <code>double</code> | The secondary VLAN ID. |

---

##### `PrimaryVlanId`<sup>Required</sup> <a name="PrimaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.primaryVlanId"></a>

```csharp
public double PrimaryVlanId { get; set; }
```

- *Type:* double

The primary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#primary_vlan_id DistributedVirtualSwitch#primary_vlan_id}

---

##### `PvlanType`<sup>Required</sup> <a name="PvlanType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.pvlanType"></a>

```csharp
public string PvlanType { get; set; }
```

- *Type:* string

The private VLAN type. Valid values are promiscuous, community and isolated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#pvlan_type DistributedVirtualSwitch#pvlan_type}

---

##### `SecondaryVlanId`<sup>Required</sup> <a name="SecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.secondaryVlanId"></a>

```csharp
public double SecondaryVlanId { get; set; }
```

- *Type:* double

The secondary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#secondary_vlan_id DistributedVirtualSwitch#secondary_vlan_id}

---

### DistributedVirtualSwitchVlanRange <a name="DistributedVirtualSwitchVlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedVirtualSwitchVlanRange {
    double MaxVlan,
    double MinVlan
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.maxVlan">MaxVlan</a></code> | <code>double</code> | The minimum VLAN to use in the range. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.minVlan">MinVlan</a></code> | <code>double</code> | The minimum VLAN to use in the range. |

---

##### `MaxVlan`<sup>Required</sup> <a name="MaxVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.maxVlan"></a>

```csharp
public double MaxVlan { get; set; }
```

- *Type:* double

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#max_vlan DistributedVirtualSwitch#max_vlan}

---

##### `MinVlan`<sup>Required</sup> <a name="MinVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.minVlan"></a>

```csharp
public double MinVlan { get; set; }
```

- *Type:* double

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/distributed_virtual_switch#min_vlan DistributedVirtualSwitch#min_vlan}

---

## Classes <a name="Classes" id="Classes"></a>

### DistributedVirtualSwitchHostList <a name="DistributedVirtualSwitchHostList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedVirtualSwitchHostList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.get"></a>

```csharp
private DistributedVirtualSwitchHostOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DistributedVirtualSwitchHostOutputReference <a name="DistributedVirtualSwitchHostOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedVirtualSwitchHostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDevices` <a name="ResetDevices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resetDevices"></a>

```csharp
private void ResetDevices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devicesInput">DevicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemIdInput">HostSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devices">Devices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemId">HostSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DevicesInput`<sup>Optional</sup> <a name="DevicesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devicesInput"></a>

```csharp
public string[] DevicesInput { get; }
```

- *Type:* string[]

---

##### `HostSystemIdInput`<sup>Optional</sup> <a name="HostSystemIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemIdInput"></a>

```csharp
public string HostSystemIdInput { get; }
```

- *Type:* string

---

##### `Devices`<sup>Required</sup> <a name="Devices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devices"></a>

```csharp
public string[] Devices { get; }
```

- *Type:* string[]

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemId"></a>

```csharp
public string HostSystemId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DistributedVirtualSwitchPvlanMappingList <a name="DistributedVirtualSwitchPvlanMappingList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedVirtualSwitchPvlanMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.get"></a>

```csharp
private DistributedVirtualSwitchPvlanMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DistributedVirtualSwitchPvlanMappingOutputReference <a name="DistributedVirtualSwitchPvlanMappingOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedVirtualSwitchPvlanMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanIdInput">PrimaryVlanIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanTypeInput">PvlanTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanIdInput">SecondaryVlanIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanId">PrimaryVlanId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanType">PvlanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanId">SecondaryVlanId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimaryVlanIdInput`<sup>Optional</sup> <a name="PrimaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanIdInput"></a>

```csharp
public double PrimaryVlanIdInput { get; }
```

- *Type:* double

---

##### `PvlanTypeInput`<sup>Optional</sup> <a name="PvlanTypeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanTypeInput"></a>

```csharp
public string PvlanTypeInput { get; }
```

- *Type:* string

---

##### `SecondaryVlanIdInput`<sup>Optional</sup> <a name="SecondaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanIdInput"></a>

```csharp
public double SecondaryVlanIdInput { get; }
```

- *Type:* double

---

##### `PrimaryVlanId`<sup>Required</sup> <a name="PrimaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanId"></a>

```csharp
public double PrimaryVlanId { get; }
```

- *Type:* double

---

##### `PvlanType`<sup>Required</sup> <a name="PvlanType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanType"></a>

```csharp
public string PvlanType { get; }
```

- *Type:* string

---

##### `SecondaryVlanId`<sup>Required</sup> <a name="SecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanId"></a>

```csharp
public double SecondaryVlanId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DistributedVirtualSwitchVlanRangeList <a name="DistributedVirtualSwitchVlanRangeList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedVirtualSwitchVlanRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.get"></a>

```csharp
private DistributedVirtualSwitchVlanRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DistributedVirtualSwitchVlanRangeOutputReference <a name="DistributedVirtualSwitchVlanRangeOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedVirtualSwitchVlanRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlanInput">MaxVlanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlanInput">MinVlanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlan">MaxVlan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlan">MinVlan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxVlanInput`<sup>Optional</sup> <a name="MaxVlanInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlanInput"></a>

```csharp
public double MaxVlanInput { get; }
```

- *Type:* double

---

##### `MinVlanInput`<sup>Optional</sup> <a name="MinVlanInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlanInput"></a>

```csharp
public double MinVlanInput { get; }
```

- *Type:* double

---

##### `MaxVlan`<sup>Required</sup> <a name="MaxVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlan"></a>

```csharp
public double MaxVlan { get; }
```

- *Type:* double

---

##### `MinVlan`<sup>Required</sup> <a name="MinVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlan"></a>

```csharp
public double MinVlan { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



