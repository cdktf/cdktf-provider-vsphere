# `distributedVirtualSwitch` Submodule <a name="`distributedVirtualSwitch` Submodule" id="@cdktf/provider-vsphere.distributedVirtualSwitch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DistributedVirtualSwitch <a name="DistributedVirtualSwitch" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch vsphere_distributed_virtual_switch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitch;

DistributedVirtualSwitch.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .datacenterId(java.lang.String)
    .name(java.lang.String)
//  .activeUplinks(java.util.List<java.lang.String>)
//  .allowForgedTransmits(java.lang.Boolean)
//  .allowForgedTransmits(IResolvable)
//  .allowMacChanges(java.lang.Boolean)
//  .allowMacChanges(IResolvable)
//  .allowPromiscuous(java.lang.Boolean)
//  .allowPromiscuous(IResolvable)
//  .backupnfcMaximumMbit(java.lang.Number)
//  .backupnfcReservationMbit(java.lang.Number)
//  .backupnfcShareCount(java.lang.Number)
//  .backupnfcShareLevel(java.lang.String)
//  .blockAllPorts(java.lang.Boolean)
//  .blockAllPorts(IResolvable)
//  .checkBeacon(java.lang.Boolean)
//  .checkBeacon(IResolvable)
//  .contactDetail(java.lang.String)
//  .contactName(java.lang.String)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .directpathGen2Allowed(java.lang.Boolean)
//  .directpathGen2Allowed(IResolvable)
//  .egressShapingAverageBandwidth(java.lang.Number)
//  .egressShapingBurstSize(java.lang.Number)
//  .egressShapingEnabled(java.lang.Boolean)
//  .egressShapingEnabled(IResolvable)
//  .egressShapingPeakBandwidth(java.lang.Number)
//  .failback(java.lang.Boolean)
//  .failback(IResolvable)
//  .faulttoleranceMaximumMbit(java.lang.Number)
//  .faulttoleranceReservationMbit(java.lang.Number)
//  .faulttoleranceShareCount(java.lang.Number)
//  .faulttoleranceShareLevel(java.lang.String)
//  .folder(java.lang.String)
//  .hbrMaximumMbit(java.lang.Number)
//  .hbrReservationMbit(java.lang.Number)
//  .hbrShareCount(java.lang.Number)
//  .hbrShareLevel(java.lang.String)
//  .host(IResolvable)
//  .host(java.util.List<DistributedVirtualSwitchHost>)
//  .id(java.lang.String)
//  .ignoreOtherPvlanMappings(java.lang.Boolean)
//  .ignoreOtherPvlanMappings(IResolvable)
//  .ingressShapingAverageBandwidth(java.lang.Number)
//  .ingressShapingBurstSize(java.lang.Number)
//  .ingressShapingEnabled(java.lang.Boolean)
//  .ingressShapingEnabled(IResolvable)
//  .ingressShapingPeakBandwidth(java.lang.Number)
//  .ipv4Address(java.lang.String)
//  .iscsiMaximumMbit(java.lang.Number)
//  .iscsiReservationMbit(java.lang.Number)
//  .iscsiShareCount(java.lang.Number)
//  .iscsiShareLevel(java.lang.String)
//  .lacpApiVersion(java.lang.String)
//  .lacpEnabled(java.lang.Boolean)
//  .lacpEnabled(IResolvable)
//  .lacpMode(java.lang.String)
//  .linkDiscoveryOperation(java.lang.String)
//  .linkDiscoveryProtocol(java.lang.String)
//  .managementMaximumMbit(java.lang.Number)
//  .managementReservationMbit(java.lang.Number)
//  .managementShareCount(java.lang.Number)
//  .managementShareLevel(java.lang.String)
//  .maxMtu(java.lang.Number)
//  .multicastFilteringMode(java.lang.String)
//  .netflowActiveFlowTimeout(java.lang.Number)
//  .netflowCollectorIpAddress(java.lang.String)
//  .netflowCollectorPort(java.lang.Number)
//  .netflowEnabled(java.lang.Boolean)
//  .netflowEnabled(IResolvable)
//  .netflowIdleFlowTimeout(java.lang.Number)
//  .netflowInternalFlowsOnly(java.lang.Boolean)
//  .netflowInternalFlowsOnly(IResolvable)
//  .netflowObservationDomainId(java.lang.Number)
//  .netflowSamplingRate(java.lang.Number)
//  .networkResourceControlEnabled(java.lang.Boolean)
//  .networkResourceControlEnabled(IResolvable)
//  .networkResourceControlVersion(java.lang.String)
//  .nfsMaximumMbit(java.lang.Number)
//  .nfsReservationMbit(java.lang.Number)
//  .nfsShareCount(java.lang.Number)
//  .nfsShareLevel(java.lang.String)
//  .notifySwitches(java.lang.Boolean)
//  .notifySwitches(IResolvable)
//  .portPrivateSecondaryVlanId(java.lang.Number)
//  .pvlanMapping(IResolvable)
//  .pvlanMapping(java.util.List<DistributedVirtualSwitchPvlanMapping>)
//  .standbyUplinks(java.util.List<java.lang.String>)
//  .tags(java.util.List<java.lang.String>)
//  .teamingPolicy(java.lang.String)
//  .txUplink(java.lang.Boolean)
//  .txUplink(IResolvable)
//  .uplinks(java.util.List<java.lang.String>)
//  .vdpMaximumMbit(java.lang.Number)
//  .vdpReservationMbit(java.lang.Number)
//  .vdpShareCount(java.lang.Number)
//  .vdpShareLevel(java.lang.String)
//  .version(java.lang.String)
//  .virtualmachineMaximumMbit(java.lang.Number)
//  .virtualmachineReservationMbit(java.lang.Number)
//  .virtualmachineShareCount(java.lang.Number)
//  .virtualmachineShareLevel(java.lang.String)
//  .vlanId(java.lang.Number)
//  .vlanRange(IResolvable)
//  .vlanRange(java.util.List<DistributedVirtualSwitchVlanRange>)
//  .vmotionMaximumMbit(java.lang.Number)
//  .vmotionReservationMbit(java.lang.Number)
//  .vmotionShareCount(java.lang.Number)
//  .vmotionShareLevel(java.lang.String)
//  .vsanMaximumMbit(java.lang.Number)
//  .vsanReservationMbit(java.lang.Number)
//  .vsanShareCount(java.lang.Number)
//  .vsanShareLevel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The ID of the datacenter to create this virtual switch in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name for the DVS. Must be unique in the folder that it is being created in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.activeUplinks">activeUplinks</a></code> | <code>java.util.List<java.lang.String></code> | List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.allowForgedTransmits">allowForgedTransmits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.allowMacChanges">allowMacChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.allowPromiscuous">allowPromiscuous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcMaximumMbit">backupnfcMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcReservationMbit">backupnfcReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcShareCount">backupnfcShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the backupNfc traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcShareLevel">backupnfcShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.blockAllPorts">blockAllPorts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether to block all ports by default. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.checkBeacon">checkBeacon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable beacon probing on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.contactDetail">contactDetail</a></code> | <code>java.lang.String</code> | The contact detail for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.contactName">contactName</a></code> | <code>java.lang.String</code> | The contact name for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.directpathGen2Allowed">directpathGen2Allowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow VMDirectPath Gen2 on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingAverageBandwidth">egressShapingAverageBandwidth</a></code> | <code>java.lang.Number</code> | The average egress bandwidth in bits per second if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingBurstSize">egressShapingBurstSize</a></code> | <code>java.lang.Number</code> | The maximum egress burst size allowed in bytes if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingEnabled">egressShapingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if the traffic shaper is enabled for egress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingPeakBandwidth">egressShapingPeakBandwidth</a></code> | <code>java.lang.Number</code> | The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.failback">failback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceMaximumMbit">faulttoleranceMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceReservationMbit">faulttoleranceReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceShareCount">faulttoleranceShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the faultTolerance traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceShareLevel">faulttoleranceShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | The folder to create this virtual switch in, relative to the datacenter. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrMaximumMbit">hbrMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrReservationMbit">hbrReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrShareCount">hbrShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the hbr traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrShareLevel">hbrShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.host">host</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>></code> | host block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ignoreOtherPvlanMappings">ignoreOtherPvlanMappings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to ignore existing PVLAN mappings not managed by this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingAverageBandwidth">ingressShapingAverageBandwidth</a></code> | <code>java.lang.Number</code> | The average ingress bandwidth in bits per second if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingBurstSize">ingressShapingBurstSize</a></code> | <code>java.lang.Number</code> | The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingEnabled">ingressShapingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if the traffic shaper is enabled for ingress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingPeakBandwidth">ingressShapingPeakBandwidth</a></code> | <code>java.lang.Number</code> | The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | The IPv4 address of the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiMaximumMbit">iscsiMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiReservationMbit">iscsiReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiShareCount">iscsiShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the iSCSI traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiShareLevel">iscsiShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lacpApiVersion">lacpApiVersion</a></code> | <code>java.lang.String</code> | The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lacpEnabled">lacpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to enable LACP on all uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lacpMode">lacpMode</a></code> | <code>java.lang.String</code> | The uplink LACP mode to use. Can be one of active or passive. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.linkDiscoveryOperation">linkDiscoveryOperation</a></code> | <code>java.lang.String</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.linkDiscoveryProtocol">linkDiscoveryProtocol</a></code> | <code>java.lang.String</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementMaximumMbit">managementMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementReservationMbit">managementReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementShareCount">managementShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the management traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementShareLevel">managementShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the management traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.maxMtu">maxMtu</a></code> | <code>java.lang.Number</code> | The maximum MTU on the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.multicastFilteringMode">multicastFilteringMode</a></code> | <code>java.lang.String</code> | The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowActiveFlowTimeout">netflowActiveFlowTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds after which active flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowCollectorIpAddress">netflowCollectorIpAddress</a></code> | <code>java.lang.String</code> | IP address for the netflow collector, using IPv4 or IPv6. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowCollectorPort">netflowCollectorPort</a></code> | <code>java.lang.Number</code> | The port for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowEnabled">netflowEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether to enable netflow on all ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowIdleFlowTimeout">netflowIdleFlowTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds after which idle flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowInternalFlowsOnly">netflowInternalFlowsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to limit analysis to traffic that has both source and destination served by the same host. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowObservationDomainId">netflowObservationDomainId</a></code> | <code>java.lang.Number</code> | The observation Domain ID for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowSamplingRate">netflowSamplingRate</a></code> | <code>java.lang.Number</code> | The ratio of total number of packets to the number of packets analyzed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.networkResourceControlEnabled">networkResourceControlEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.networkResourceControlVersion">networkResourceControlVersion</a></code> | <code>java.lang.String</code> | The network I/O control version to use. Can be one of version2 or version3. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsMaximumMbit">nfsMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsReservationMbit">nfsReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsShareCount">nfsShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the nfs traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsShareLevel">nfsShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.notifySwitches">notifySwitches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.portPrivateSecondaryVlanId">portPrivateSecondaryVlanId</a></code> | <code>java.lang.Number</code> | The secondary VLAN ID for this port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.pvlanMapping">pvlanMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>></code> | pvlan_mapping block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.standbyUplinks">standbyUplinks</a></code> | <code>java.util.List<java.lang.String></code> | List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.teamingPolicy">teamingPolicy</a></code> | <code>java.lang.String</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.txUplink">txUplink</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.uplinks">uplinks</a></code> | <code>java.util.List<java.lang.String></code> | A list of uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpMaximumMbit">vdpMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpReservationMbit">vdpReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpShareCount">vdpShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the vdp traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpShareLevel">vdpShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The version of this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineMaximumMbit">virtualmachineMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineReservationMbit">virtualmachineReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineShareCount">virtualmachineShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the virtualMachine traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineShareLevel">virtualmachineShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vlanId">vlanId</a></code> | <code>java.lang.Number</code> | The VLAN ID for single VLAN mode. 0 denotes no VLAN. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vlanRange">vlanRange</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>></code> | vlan_range block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionMaximumMbit">vmotionMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionReservationMbit">vmotionReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionShareCount">vmotionShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the vmotion traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionShareLevel">vmotionShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanMaximumMbit">vsanMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanReservationMbit">vsanReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanShareCount">vsanShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the vsan traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanShareLevel">vsanShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

The ID of the datacenter to create this virtual switch in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#datacenter_id DistributedVirtualSwitch#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name for the DVS. Must be unique in the folder that it is being created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#name DistributedVirtualSwitch#name}

---

##### `activeUplinks`<sup>Optional</sup> <a name="activeUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.activeUplinks"></a>

- *Type:* java.util.List<java.lang.String>

List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#active_uplinks DistributedVirtualSwitch#active_uplinks}

---

##### `allowForgedTransmits`<sup>Optional</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.allowForgedTransmits"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#allow_forged_transmits DistributedVirtualSwitch#allow_forged_transmits}

---

##### `allowMacChanges`<sup>Optional</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.allowMacChanges"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#allow_mac_changes DistributedVirtualSwitch#allow_mac_changes}

---

##### `allowPromiscuous`<sup>Optional</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.allowPromiscuous"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#allow_promiscuous DistributedVirtualSwitch#allow_promiscuous}

---

##### `backupnfcMaximumMbit`<sup>Optional</sup> <a name="backupnfcMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcMaximumMbit"></a>

- *Type:* java.lang.Number

The maximum allowed usage for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#backupnfc_maximum_mbit DistributedVirtualSwitch#backupnfc_maximum_mbit}

---

##### `backupnfcReservationMbit`<sup>Optional</sup> <a name="backupnfcReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcReservationMbit"></a>

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#backupnfc_reservation_mbit DistributedVirtualSwitch#backupnfc_reservation_mbit}

---

##### `backupnfcShareCount`<sup>Optional</sup> <a name="backupnfcShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to the backupNfc traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#backupnfc_share_count DistributedVirtualSwitch#backupnfc_share_count}

---

##### `backupnfcShareLevel`<sup>Optional</sup> <a name="backupnfcShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcShareLevel"></a>

- *Type:* java.lang.String

The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#backupnfc_share_level DistributedVirtualSwitch#backupnfc_share_level}

---

##### `blockAllPorts`<sup>Optional</sup> <a name="blockAllPorts" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.blockAllPorts"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether to block all ports by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#block_all_ports DistributedVirtualSwitch#block_all_ports}

---

##### `checkBeacon`<sup>Optional</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.checkBeacon"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable beacon probing on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#check_beacon DistributedVirtualSwitch#check_beacon}

---

##### `contactDetail`<sup>Optional</sup> <a name="contactDetail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.contactDetail"></a>

- *Type:* java.lang.String

The contact detail for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#contact_detail DistributedVirtualSwitch#contact_detail}

---

##### `contactName`<sup>Optional</sup> <a name="contactName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.contactName"></a>

- *Type:* java.lang.String

The contact name for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#contact_name DistributedVirtualSwitch#contact_name}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.customAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#custom_attributes DistributedVirtualSwitch#custom_attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#description DistributedVirtualSwitch#description}

---

##### `directpathGen2Allowed`<sup>Optional</sup> <a name="directpathGen2Allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.directpathGen2Allowed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow VMDirectPath Gen2 on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#directpath_gen2_allowed DistributedVirtualSwitch#directpath_gen2_allowed}

---

##### `egressShapingAverageBandwidth`<sup>Optional</sup> <a name="egressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingAverageBandwidth"></a>

- *Type:* java.lang.Number

The average egress bandwidth in bits per second if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#egress_shaping_average_bandwidth DistributedVirtualSwitch#egress_shaping_average_bandwidth}

---

##### `egressShapingBurstSize`<sup>Optional</sup> <a name="egressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingBurstSize"></a>

- *Type:* java.lang.Number

The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#egress_shaping_burst_size DistributedVirtualSwitch#egress_shaping_burst_size}

---

##### `egressShapingEnabled`<sup>Optional</sup> <a name="egressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if the traffic shaper is enabled for egress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#egress_shaping_enabled DistributedVirtualSwitch#egress_shaping_enabled}

---

##### `egressShapingPeakBandwidth`<sup>Optional</sup> <a name="egressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingPeakBandwidth"></a>

- *Type:* java.lang.Number

The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#egress_shaping_peak_bandwidth DistributedVirtualSwitch#egress_shaping_peak_bandwidth}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.failback"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#failback DistributedVirtualSwitch#failback}

---

##### `faulttoleranceMaximumMbit`<sup>Optional</sup> <a name="faulttoleranceMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceMaximumMbit"></a>

- *Type:* java.lang.Number

The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#faulttolerance_maximum_mbit DistributedVirtualSwitch#faulttolerance_maximum_mbit}

---

##### `faulttoleranceReservationMbit`<sup>Optional</sup> <a name="faulttoleranceReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceReservationMbit"></a>

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#faulttolerance_reservation_mbit DistributedVirtualSwitch#faulttolerance_reservation_mbit}

---

##### `faulttoleranceShareCount`<sup>Optional</sup> <a name="faulttoleranceShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to the faultTolerance traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#faulttolerance_share_count DistributedVirtualSwitch#faulttolerance_share_count}

---

##### `faulttoleranceShareLevel`<sup>Optional</sup> <a name="faulttoleranceShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceShareLevel"></a>

- *Type:* java.lang.String

The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#faulttolerance_share_level DistributedVirtualSwitch#faulttolerance_share_level}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

The folder to create this virtual switch in, relative to the datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#folder DistributedVirtualSwitch#folder}

---

##### `hbrMaximumMbit`<sup>Optional</sup> <a name="hbrMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrMaximumMbit"></a>

- *Type:* java.lang.Number

The maximum allowed usage for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#hbr_maximum_mbit DistributedVirtualSwitch#hbr_maximum_mbit}

---

##### `hbrReservationMbit`<sup>Optional</sup> <a name="hbrReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrReservationMbit"></a>

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#hbr_reservation_mbit DistributedVirtualSwitch#hbr_reservation_mbit}

---

##### `hbrShareCount`<sup>Optional</sup> <a name="hbrShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to the hbr traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#hbr_share_count DistributedVirtualSwitch#hbr_share_count}

---

##### `hbrShareLevel`<sup>Optional</sup> <a name="hbrShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrShareLevel"></a>

- *Type:* java.lang.String

The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#hbr_share_level DistributedVirtualSwitch#hbr_share_level}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.host"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#host DistributedVirtualSwitch#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreOtherPvlanMappings`<sup>Optional</sup> <a name="ignoreOtherPvlanMappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ignoreOtherPvlanMappings"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to ignore existing PVLAN mappings not managed by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#ignore_other_pvlan_mappings DistributedVirtualSwitch#ignore_other_pvlan_mappings}

---

##### `ingressShapingAverageBandwidth`<sup>Optional</sup> <a name="ingressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingAverageBandwidth"></a>

- *Type:* java.lang.Number

The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#ingress_shaping_average_bandwidth DistributedVirtualSwitch#ingress_shaping_average_bandwidth}

---

##### `ingressShapingBurstSize`<sup>Optional</sup> <a name="ingressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingBurstSize"></a>

- *Type:* java.lang.Number

The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#ingress_shaping_burst_size DistributedVirtualSwitch#ingress_shaping_burst_size}

---

##### `ingressShapingEnabled`<sup>Optional</sup> <a name="ingressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if the traffic shaper is enabled for ingress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#ingress_shaping_enabled DistributedVirtualSwitch#ingress_shaping_enabled}

---

##### `ingressShapingPeakBandwidth`<sup>Optional</sup> <a name="ingressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingPeakBandwidth"></a>

- *Type:* java.lang.Number

The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#ingress_shaping_peak_bandwidth DistributedVirtualSwitch#ingress_shaping_peak_bandwidth}

---

##### `ipv4Address`<sup>Optional</sup> <a name="ipv4Address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ipv4Address"></a>

- *Type:* java.lang.String

The IPv4 address of the switch.

This can be used to see the DVS as a unique device with NetFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#ipv4_address DistributedVirtualSwitch#ipv4_address}

---

##### `iscsiMaximumMbit`<sup>Optional</sup> <a name="iscsiMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiMaximumMbit"></a>

- *Type:* java.lang.Number

The maximum allowed usage for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#iscsi_maximum_mbit DistributedVirtualSwitch#iscsi_maximum_mbit}

---

##### `iscsiReservationMbit`<sup>Optional</sup> <a name="iscsiReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiReservationMbit"></a>

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#iscsi_reservation_mbit DistributedVirtualSwitch#iscsi_reservation_mbit}

---

##### `iscsiShareCount`<sup>Optional</sup> <a name="iscsiShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to the iSCSI traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#iscsi_share_count DistributedVirtualSwitch#iscsi_share_count}

---

##### `iscsiShareLevel`<sup>Optional</sup> <a name="iscsiShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiShareLevel"></a>

- *Type:* java.lang.String

The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#iscsi_share_level DistributedVirtualSwitch#iscsi_share_level}

---

##### `lacpApiVersion`<sup>Optional</sup> <a name="lacpApiVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lacpApiVersion"></a>

- *Type:* java.lang.String

The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#lacp_api_version DistributedVirtualSwitch#lacp_api_version}

---

##### `lacpEnabled`<sup>Optional</sup> <a name="lacpEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lacpEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to enable LACP on all uplink ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#lacp_enabled DistributedVirtualSwitch#lacp_enabled}

---

##### `lacpMode`<sup>Optional</sup> <a name="lacpMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lacpMode"></a>

- *Type:* java.lang.String

The uplink LACP mode to use. Can be one of active or passive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#lacp_mode DistributedVirtualSwitch#lacp_mode}

---

##### `linkDiscoveryOperation`<sup>Optional</sup> <a name="linkDiscoveryOperation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.linkDiscoveryOperation"></a>

- *Type:* java.lang.String

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#link_discovery_operation DistributedVirtualSwitch#link_discovery_operation}

---

##### `linkDiscoveryProtocol`<sup>Optional</sup> <a name="linkDiscoveryProtocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.linkDiscoveryProtocol"></a>

- *Type:* java.lang.String

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#link_discovery_protocol DistributedVirtualSwitch#link_discovery_protocol}

---

##### `managementMaximumMbit`<sup>Optional</sup> <a name="managementMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementMaximumMbit"></a>

- *Type:* java.lang.Number

The maximum allowed usage for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#management_maximum_mbit DistributedVirtualSwitch#management_maximum_mbit}

---

##### `managementReservationMbit`<sup>Optional</sup> <a name="managementReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementReservationMbit"></a>

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#management_reservation_mbit DistributedVirtualSwitch#management_reservation_mbit}

---

##### `managementShareCount`<sup>Optional</sup> <a name="managementShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to the management traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#management_share_count DistributedVirtualSwitch#management_share_count}

---

##### `managementShareLevel`<sup>Optional</sup> <a name="managementShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementShareLevel"></a>

- *Type:* java.lang.String

The allocation level for the management traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#management_share_level DistributedVirtualSwitch#management_share_level}

---

##### `maxMtu`<sup>Optional</sup> <a name="maxMtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.maxMtu"></a>

- *Type:* java.lang.Number

The maximum MTU on the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#max_mtu DistributedVirtualSwitch#max_mtu}

---

##### `multicastFilteringMode`<sup>Optional</sup> <a name="multicastFilteringMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.multicastFilteringMode"></a>

- *Type:* java.lang.String

The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#multicast_filtering_mode DistributedVirtualSwitch#multicast_filtering_mode}

---

##### `netflowActiveFlowTimeout`<sup>Optional</sup> <a name="netflowActiveFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowActiveFlowTimeout"></a>

- *Type:* java.lang.Number

The number of seconds after which active flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_active_flow_timeout DistributedVirtualSwitch#netflow_active_flow_timeout}

---

##### `netflowCollectorIpAddress`<sup>Optional</sup> <a name="netflowCollectorIpAddress" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowCollectorIpAddress"></a>

- *Type:* java.lang.String

IP address for the netflow collector, using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_collector_ip_address DistributedVirtualSwitch#netflow_collector_ip_address}

---

##### `netflowCollectorPort`<sup>Optional</sup> <a name="netflowCollectorPort" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowCollectorPort"></a>

- *Type:* java.lang.Number

The port for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_collector_port DistributedVirtualSwitch#netflow_collector_port}

---

##### `netflowEnabled`<sup>Optional</sup> <a name="netflowEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether to enable netflow on all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_enabled DistributedVirtualSwitch#netflow_enabled}

---

##### `netflowIdleFlowTimeout`<sup>Optional</sup> <a name="netflowIdleFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowIdleFlowTimeout"></a>

- *Type:* java.lang.Number

The number of seconds after which idle flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_idle_flow_timeout DistributedVirtualSwitch#netflow_idle_flow_timeout}

---

##### `netflowInternalFlowsOnly`<sup>Optional</sup> <a name="netflowInternalFlowsOnly" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowInternalFlowsOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to limit analysis to traffic that has both source and destination served by the same host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_internal_flows_only DistributedVirtualSwitch#netflow_internal_flows_only}

---

##### `netflowObservationDomainId`<sup>Optional</sup> <a name="netflowObservationDomainId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowObservationDomainId"></a>

- *Type:* java.lang.Number

The observation Domain ID for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_observation_domain_id DistributedVirtualSwitch#netflow_observation_domain_id}

---

##### `netflowSamplingRate`<sup>Optional</sup> <a name="netflowSamplingRate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowSamplingRate"></a>

- *Type:* java.lang.Number

The ratio of total number of packets to the number of packets analyzed.

Set to 0 to disable sampling, meaning that all packets are analyzed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_sampling_rate DistributedVirtualSwitch#netflow_sampling_rate}

---

##### `networkResourceControlEnabled`<sup>Optional</sup> <a name="networkResourceControlEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.networkResourceControlEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#network_resource_control_enabled DistributedVirtualSwitch#network_resource_control_enabled}

---

##### `networkResourceControlVersion`<sup>Optional</sup> <a name="networkResourceControlVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.networkResourceControlVersion"></a>

- *Type:* java.lang.String

The network I/O control version to use. Can be one of version2 or version3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#network_resource_control_version DistributedVirtualSwitch#network_resource_control_version}

---

##### `nfsMaximumMbit`<sup>Optional</sup> <a name="nfsMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsMaximumMbit"></a>

- *Type:* java.lang.Number

The maximum allowed usage for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#nfs_maximum_mbit DistributedVirtualSwitch#nfs_maximum_mbit}

---

##### `nfsReservationMbit`<sup>Optional</sup> <a name="nfsReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsReservationMbit"></a>

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#nfs_reservation_mbit DistributedVirtualSwitch#nfs_reservation_mbit}

---

##### `nfsShareCount`<sup>Optional</sup> <a name="nfsShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to the nfs traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#nfs_share_count DistributedVirtualSwitch#nfs_share_count}

---

##### `nfsShareLevel`<sup>Optional</sup> <a name="nfsShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsShareLevel"></a>

- *Type:* java.lang.String

The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#nfs_share_level DistributedVirtualSwitch#nfs_share_level}

---

##### `notifySwitches`<sup>Optional</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.notifySwitches"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#notify_switches DistributedVirtualSwitch#notify_switches}

---

##### `portPrivateSecondaryVlanId`<sup>Optional</sup> <a name="portPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.portPrivateSecondaryVlanId"></a>

- *Type:* java.lang.Number

The secondary VLAN ID for this port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#port_private_secondary_vlan_id DistributedVirtualSwitch#port_private_secondary_vlan_id}

---

##### `pvlanMapping`<sup>Optional</sup> <a name="pvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.pvlanMapping"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>>

pvlan_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#pvlan_mapping DistributedVirtualSwitch#pvlan_mapping}

---

##### `standbyUplinks`<sup>Optional</sup> <a name="standbyUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.standbyUplinks"></a>

- *Type:* java.util.List<java.lang.String>

List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#standby_uplinks DistributedVirtualSwitch#standby_uplinks}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#tags DistributedVirtualSwitch#tags}

---

##### `teamingPolicy`<sup>Optional</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.teamingPolicy"></a>

- *Type:* java.lang.String

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#teaming_policy DistributedVirtualSwitch#teaming_policy}

---

##### `txUplink`<sup>Optional</sup> <a name="txUplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.txUplink"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#tx_uplink DistributedVirtualSwitch#tx_uplink}

---

##### `uplinks`<sup>Optional</sup> <a name="uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.uplinks"></a>

- *Type:* java.util.List<java.lang.String>

A list of uplink ports.

The contents of this list control both the uplink count and names of the uplinks on the DVS across hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#uplinks DistributedVirtualSwitch#uplinks}

---

##### `vdpMaximumMbit`<sup>Optional</sup> <a name="vdpMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpMaximumMbit"></a>

- *Type:* java.lang.Number

The maximum allowed usage for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vdp_maximum_mbit DistributedVirtualSwitch#vdp_maximum_mbit}

---

##### `vdpReservationMbit`<sup>Optional</sup> <a name="vdpReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpReservationMbit"></a>

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vdp_reservation_mbit DistributedVirtualSwitch#vdp_reservation_mbit}

---

##### `vdpShareCount`<sup>Optional</sup> <a name="vdpShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to the vdp traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vdp_share_count DistributedVirtualSwitch#vdp_share_count}

---

##### `vdpShareLevel`<sup>Optional</sup> <a name="vdpShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpShareLevel"></a>

- *Type:* java.lang.String

The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vdp_share_level DistributedVirtualSwitch#vdp_share_level}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The version of this virtual switch.

Allowed versions are 8.0.3, 8.0.0, 7.0.3, 7.0.2, 7.0.0, 6.6.0, 6.5.0, 6.0.0, 5.5.0, 5.1.0, and 5.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#version DistributedVirtualSwitch#version}

---

##### `virtualmachineMaximumMbit`<sup>Optional</sup> <a name="virtualmachineMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineMaximumMbit"></a>

- *Type:* java.lang.Number

The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#virtualmachine_maximum_mbit DistributedVirtualSwitch#virtualmachine_maximum_mbit}

---

##### `virtualmachineReservationMbit`<sup>Optional</sup> <a name="virtualmachineReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineReservationMbit"></a>

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#virtualmachine_reservation_mbit DistributedVirtualSwitch#virtualmachine_reservation_mbit}

---

##### `virtualmachineShareCount`<sup>Optional</sup> <a name="virtualmachineShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to the virtualMachine traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#virtualmachine_share_count DistributedVirtualSwitch#virtualmachine_share_count}

---

##### `virtualmachineShareLevel`<sup>Optional</sup> <a name="virtualmachineShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineShareLevel"></a>

- *Type:* java.lang.String

The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#virtualmachine_share_level DistributedVirtualSwitch#virtualmachine_share_level}

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vlanId"></a>

- *Type:* java.lang.Number

The VLAN ID for single VLAN mode. 0 denotes no VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vlan_id DistributedVirtualSwitch#vlan_id}

---

##### `vlanRange`<sup>Optional</sup> <a name="vlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vlanRange"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>>

vlan_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vlan_range DistributedVirtualSwitch#vlan_range}

---

##### `vmotionMaximumMbit`<sup>Optional</sup> <a name="vmotionMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionMaximumMbit"></a>

- *Type:* java.lang.Number

The maximum allowed usage for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vmotion_maximum_mbit DistributedVirtualSwitch#vmotion_maximum_mbit}

---

##### `vmotionReservationMbit`<sup>Optional</sup> <a name="vmotionReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionReservationMbit"></a>

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vmotion_reservation_mbit DistributedVirtualSwitch#vmotion_reservation_mbit}

---

##### `vmotionShareCount`<sup>Optional</sup> <a name="vmotionShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to the vmotion traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vmotion_share_count DistributedVirtualSwitch#vmotion_share_count}

---

##### `vmotionShareLevel`<sup>Optional</sup> <a name="vmotionShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionShareLevel"></a>

- *Type:* java.lang.String

The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vmotion_share_level DistributedVirtualSwitch#vmotion_share_level}

---

##### `vsanMaximumMbit`<sup>Optional</sup> <a name="vsanMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanMaximumMbit"></a>

- *Type:* java.lang.Number

The maximum allowed usage for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vsan_maximum_mbit DistributedVirtualSwitch#vsan_maximum_mbit}

---

##### `vsanReservationMbit`<sup>Optional</sup> <a name="vsanReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanReservationMbit"></a>

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vsan_reservation_mbit DistributedVirtualSwitch#vsan_reservation_mbit}

---

##### `vsanShareCount`<sup>Optional</sup> <a name="vsanShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to the vsan traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vsan_share_count DistributedVirtualSwitch#vsan_share_count}

---

##### `vsanShareLevel`<sup>Optional</sup> <a name="vsanShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanShareLevel"></a>

- *Type:* java.lang.String

The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vsan_share_level DistributedVirtualSwitch#vsan_share_level}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHost` <a name="putHost" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putHost"></a>

```java
public void putHost(IResolvable OR java.util.List<DistributedVirtualSwitchHost> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putHost.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>>

---

##### `putPvlanMapping` <a name="putPvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putPvlanMapping"></a>

```java
public void putPvlanMapping(IResolvable OR java.util.List<DistributedVirtualSwitchPvlanMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putPvlanMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>>

---

##### `putVlanRange` <a name="putVlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putVlanRange"></a>

```java
public void putVlanRange(IResolvable OR java.util.List<DistributedVirtualSwitchVlanRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putVlanRange.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>>

---

##### `resetActiveUplinks` <a name="resetActiveUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetActiveUplinks"></a>

```java
public void resetActiveUplinks()
```

##### `resetAllowForgedTransmits` <a name="resetAllowForgedTransmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowForgedTransmits"></a>

```java
public void resetAllowForgedTransmits()
```

##### `resetAllowMacChanges` <a name="resetAllowMacChanges" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowMacChanges"></a>

```java
public void resetAllowMacChanges()
```

##### `resetAllowPromiscuous` <a name="resetAllowPromiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowPromiscuous"></a>

```java
public void resetAllowPromiscuous()
```

##### `resetBackupnfcMaximumMbit` <a name="resetBackupnfcMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcMaximumMbit"></a>

```java
public void resetBackupnfcMaximumMbit()
```

##### `resetBackupnfcReservationMbit` <a name="resetBackupnfcReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcReservationMbit"></a>

```java
public void resetBackupnfcReservationMbit()
```

##### `resetBackupnfcShareCount` <a name="resetBackupnfcShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareCount"></a>

```java
public void resetBackupnfcShareCount()
```

##### `resetBackupnfcShareLevel` <a name="resetBackupnfcShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareLevel"></a>

```java
public void resetBackupnfcShareLevel()
```

##### `resetBlockAllPorts` <a name="resetBlockAllPorts" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBlockAllPorts"></a>

```java
public void resetBlockAllPorts()
```

##### `resetCheckBeacon` <a name="resetCheckBeacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCheckBeacon"></a>

```java
public void resetCheckBeacon()
```

##### `resetContactDetail` <a name="resetContactDetail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactDetail"></a>

```java
public void resetContactDetail()
```

##### `resetContactName` <a name="resetContactName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactName"></a>

```java
public void resetContactName()
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDirectpathGen2Allowed` <a name="resetDirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDirectpathGen2Allowed"></a>

```java
public void resetDirectpathGen2Allowed()
```

##### `resetEgressShapingAverageBandwidth` <a name="resetEgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingAverageBandwidth"></a>

```java
public void resetEgressShapingAverageBandwidth()
```

##### `resetEgressShapingBurstSize` <a name="resetEgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingBurstSize"></a>

```java
public void resetEgressShapingBurstSize()
```

##### `resetEgressShapingEnabled` <a name="resetEgressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingEnabled"></a>

```java
public void resetEgressShapingEnabled()
```

##### `resetEgressShapingPeakBandwidth` <a name="resetEgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingPeakBandwidth"></a>

```java
public void resetEgressShapingPeakBandwidth()
```

##### `resetFailback` <a name="resetFailback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFailback"></a>

```java
public void resetFailback()
```

##### `resetFaulttoleranceMaximumMbit` <a name="resetFaulttoleranceMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceMaximumMbit"></a>

```java
public void resetFaulttoleranceMaximumMbit()
```

##### `resetFaulttoleranceReservationMbit` <a name="resetFaulttoleranceReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceReservationMbit"></a>

```java
public void resetFaulttoleranceReservationMbit()
```

##### `resetFaulttoleranceShareCount` <a name="resetFaulttoleranceShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareCount"></a>

```java
public void resetFaulttoleranceShareCount()
```

##### `resetFaulttoleranceShareLevel` <a name="resetFaulttoleranceShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareLevel"></a>

```java
public void resetFaulttoleranceShareLevel()
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFolder"></a>

```java
public void resetFolder()
```

##### `resetHbrMaximumMbit` <a name="resetHbrMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrMaximumMbit"></a>

```java
public void resetHbrMaximumMbit()
```

##### `resetHbrReservationMbit` <a name="resetHbrReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrReservationMbit"></a>

```java
public void resetHbrReservationMbit()
```

##### `resetHbrShareCount` <a name="resetHbrShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareCount"></a>

```java
public void resetHbrShareCount()
```

##### `resetHbrShareLevel` <a name="resetHbrShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareLevel"></a>

```java
public void resetHbrShareLevel()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHost"></a>

```java
public void resetHost()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreOtherPvlanMappings` <a name="resetIgnoreOtherPvlanMappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIgnoreOtherPvlanMappings"></a>

```java
public void resetIgnoreOtherPvlanMappings()
```

##### `resetIngressShapingAverageBandwidth` <a name="resetIngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingAverageBandwidth"></a>

```java
public void resetIngressShapingAverageBandwidth()
```

##### `resetIngressShapingBurstSize` <a name="resetIngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingBurstSize"></a>

```java
public void resetIngressShapingBurstSize()
```

##### `resetIngressShapingEnabled` <a name="resetIngressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingEnabled"></a>

```java
public void resetIngressShapingEnabled()
```

##### `resetIngressShapingPeakBandwidth` <a name="resetIngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingPeakBandwidth"></a>

```java
public void resetIngressShapingPeakBandwidth()
```

##### `resetIpv4Address` <a name="resetIpv4Address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIpv4Address"></a>

```java
public void resetIpv4Address()
```

##### `resetIscsiMaximumMbit` <a name="resetIscsiMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiMaximumMbit"></a>

```java
public void resetIscsiMaximumMbit()
```

##### `resetIscsiReservationMbit` <a name="resetIscsiReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiReservationMbit"></a>

```java
public void resetIscsiReservationMbit()
```

##### `resetIscsiShareCount` <a name="resetIscsiShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareCount"></a>

```java
public void resetIscsiShareCount()
```

##### `resetIscsiShareLevel` <a name="resetIscsiShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareLevel"></a>

```java
public void resetIscsiShareLevel()
```

##### `resetLacpApiVersion` <a name="resetLacpApiVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpApiVersion"></a>

```java
public void resetLacpApiVersion()
```

##### `resetLacpEnabled` <a name="resetLacpEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpEnabled"></a>

```java
public void resetLacpEnabled()
```

##### `resetLacpMode` <a name="resetLacpMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpMode"></a>

```java
public void resetLacpMode()
```

##### `resetLinkDiscoveryOperation` <a name="resetLinkDiscoveryOperation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryOperation"></a>

```java
public void resetLinkDiscoveryOperation()
```

##### `resetLinkDiscoveryProtocol` <a name="resetLinkDiscoveryProtocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryProtocol"></a>

```java
public void resetLinkDiscoveryProtocol()
```

##### `resetManagementMaximumMbit` <a name="resetManagementMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementMaximumMbit"></a>

```java
public void resetManagementMaximumMbit()
```

##### `resetManagementReservationMbit` <a name="resetManagementReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementReservationMbit"></a>

```java
public void resetManagementReservationMbit()
```

##### `resetManagementShareCount` <a name="resetManagementShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareCount"></a>

```java
public void resetManagementShareCount()
```

##### `resetManagementShareLevel` <a name="resetManagementShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareLevel"></a>

```java
public void resetManagementShareLevel()
```

##### `resetMaxMtu` <a name="resetMaxMtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMaxMtu"></a>

```java
public void resetMaxMtu()
```

##### `resetMulticastFilteringMode` <a name="resetMulticastFilteringMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMulticastFilteringMode"></a>

```java
public void resetMulticastFilteringMode()
```

##### `resetNetflowActiveFlowTimeout` <a name="resetNetflowActiveFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowActiveFlowTimeout"></a>

```java
public void resetNetflowActiveFlowTimeout()
```

##### `resetNetflowCollectorIpAddress` <a name="resetNetflowCollectorIpAddress" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorIpAddress"></a>

```java
public void resetNetflowCollectorIpAddress()
```

##### `resetNetflowCollectorPort` <a name="resetNetflowCollectorPort" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorPort"></a>

```java
public void resetNetflowCollectorPort()
```

##### `resetNetflowEnabled` <a name="resetNetflowEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowEnabled"></a>

```java
public void resetNetflowEnabled()
```

##### `resetNetflowIdleFlowTimeout` <a name="resetNetflowIdleFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowIdleFlowTimeout"></a>

```java
public void resetNetflowIdleFlowTimeout()
```

##### `resetNetflowInternalFlowsOnly` <a name="resetNetflowInternalFlowsOnly" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowInternalFlowsOnly"></a>

```java
public void resetNetflowInternalFlowsOnly()
```

##### `resetNetflowObservationDomainId` <a name="resetNetflowObservationDomainId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowObservationDomainId"></a>

```java
public void resetNetflowObservationDomainId()
```

##### `resetNetflowSamplingRate` <a name="resetNetflowSamplingRate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowSamplingRate"></a>

```java
public void resetNetflowSamplingRate()
```

##### `resetNetworkResourceControlEnabled` <a name="resetNetworkResourceControlEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlEnabled"></a>

```java
public void resetNetworkResourceControlEnabled()
```

##### `resetNetworkResourceControlVersion` <a name="resetNetworkResourceControlVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlVersion"></a>

```java
public void resetNetworkResourceControlVersion()
```

##### `resetNfsMaximumMbit` <a name="resetNfsMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsMaximumMbit"></a>

```java
public void resetNfsMaximumMbit()
```

##### `resetNfsReservationMbit` <a name="resetNfsReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsReservationMbit"></a>

```java
public void resetNfsReservationMbit()
```

##### `resetNfsShareCount` <a name="resetNfsShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareCount"></a>

```java
public void resetNfsShareCount()
```

##### `resetNfsShareLevel` <a name="resetNfsShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareLevel"></a>

```java
public void resetNfsShareLevel()
```

##### `resetNotifySwitches` <a name="resetNotifySwitches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNotifySwitches"></a>

```java
public void resetNotifySwitches()
```

##### `resetPortPrivateSecondaryVlanId` <a name="resetPortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPortPrivateSecondaryVlanId"></a>

```java
public void resetPortPrivateSecondaryVlanId()
```

##### `resetPvlanMapping` <a name="resetPvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPvlanMapping"></a>

```java
public void resetPvlanMapping()
```

##### `resetStandbyUplinks` <a name="resetStandbyUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetStandbyUplinks"></a>

```java
public void resetStandbyUplinks()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTags"></a>

```java
public void resetTags()
```

##### `resetTeamingPolicy` <a name="resetTeamingPolicy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTeamingPolicy"></a>

```java
public void resetTeamingPolicy()
```

##### `resetTxUplink` <a name="resetTxUplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTxUplink"></a>

```java
public void resetTxUplink()
```

##### `resetUplinks` <a name="resetUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetUplinks"></a>

```java
public void resetUplinks()
```

##### `resetVdpMaximumMbit` <a name="resetVdpMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpMaximumMbit"></a>

```java
public void resetVdpMaximumMbit()
```

##### `resetVdpReservationMbit` <a name="resetVdpReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpReservationMbit"></a>

```java
public void resetVdpReservationMbit()
```

##### `resetVdpShareCount` <a name="resetVdpShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareCount"></a>

```java
public void resetVdpShareCount()
```

##### `resetVdpShareLevel` <a name="resetVdpShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareLevel"></a>

```java
public void resetVdpShareLevel()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVersion"></a>

```java
public void resetVersion()
```

##### `resetVirtualmachineMaximumMbit` <a name="resetVirtualmachineMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineMaximumMbit"></a>

```java
public void resetVirtualmachineMaximumMbit()
```

##### `resetVirtualmachineReservationMbit` <a name="resetVirtualmachineReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineReservationMbit"></a>

```java
public void resetVirtualmachineReservationMbit()
```

##### `resetVirtualmachineShareCount` <a name="resetVirtualmachineShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareCount"></a>

```java
public void resetVirtualmachineShareCount()
```

##### `resetVirtualmachineShareLevel` <a name="resetVirtualmachineShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareLevel"></a>

```java
public void resetVirtualmachineShareLevel()
```

##### `resetVlanId` <a name="resetVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanId"></a>

```java
public void resetVlanId()
```

##### `resetVlanRange` <a name="resetVlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanRange"></a>

```java
public void resetVlanRange()
```

##### `resetVmotionMaximumMbit` <a name="resetVmotionMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionMaximumMbit"></a>

```java
public void resetVmotionMaximumMbit()
```

##### `resetVmotionReservationMbit` <a name="resetVmotionReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionReservationMbit"></a>

```java
public void resetVmotionReservationMbit()
```

##### `resetVmotionShareCount` <a name="resetVmotionShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareCount"></a>

```java
public void resetVmotionShareCount()
```

##### `resetVmotionShareLevel` <a name="resetVmotionShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareLevel"></a>

```java
public void resetVmotionShareLevel()
```

##### `resetVsanMaximumMbit` <a name="resetVsanMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanMaximumMbit"></a>

```java
public void resetVsanMaximumMbit()
```

##### `resetVsanReservationMbit` <a name="resetVsanReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanReservationMbit"></a>

```java
public void resetVsanReservationMbit()
```

##### `resetVsanShareCount` <a name="resetVsanShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareCount"></a>

```java
public void resetVsanShareCount()
```

##### `resetVsanShareLevel` <a name="resetVsanShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareLevel"></a>

```java
public void resetVsanShareLevel()
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

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitch;

DistributedVirtualSwitch.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitch;

DistributedVirtualSwitch.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitch;

DistributedVirtualSwitch.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitch;

DistributedVirtualSwitch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DistributedVirtualSwitch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DistributedVirtualSwitch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DistributedVirtualSwitch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DistributedVirtualSwitch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DistributedVirtualSwitch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.configVersion">configVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.host">host</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList">DistributedVirtualSwitchHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMapping">pvlanMapping</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList">DistributedVirtualSwitchPvlanMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRange">vlanRange</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList">DistributedVirtualSwitchVlanRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinksInput">activeUplinksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmitsInput">allowForgedTransmitsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChangesInput">allowMacChangesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuousInput">allowPromiscuousInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbitInput">backupnfcMaximumMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbitInput">backupnfcReservationMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCountInput">backupnfcShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevelInput">backupnfcShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPortsInput">blockAllPortsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeaconInput">checkBeaconInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetailInput">contactDetailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactNameInput">contactNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributesInput">customAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2AllowedInput">directpathGen2AllowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidthInput">egressShapingAverageBandwidthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSizeInput">egressShapingBurstSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabledInput">egressShapingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidthInput">egressShapingPeakBandwidthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failbackInput">failbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbitInput">faulttoleranceMaximumMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbitInput">faulttoleranceReservationMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCountInput">faulttoleranceShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevelInput">faulttoleranceShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbitInput">hbrMaximumMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbitInput">hbrReservationMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCountInput">hbrShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevelInput">hbrShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hostInput">hostInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappingsInput">ignoreOtherPvlanMappingsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidthInput">ingressShapingAverageBandwidthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSizeInput">ingressShapingBurstSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabledInput">ingressShapingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidthInput">ingressShapingPeakBandwidthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4AddressInput">ipv4AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbitInput">iscsiMaximumMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbitInput">iscsiReservationMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCountInput">iscsiShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevelInput">iscsiShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersionInput">lacpApiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabledInput">lacpEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpModeInput">lacpModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperationInput">linkDiscoveryOperationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocolInput">linkDiscoveryProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbitInput">managementMaximumMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbitInput">managementReservationMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCountInput">managementShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevelInput">managementShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtuInput">maxMtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringModeInput">multicastFilteringModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeoutInput">netflowActiveFlowTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddressInput">netflowCollectorIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPortInput">netflowCollectorPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabledInput">netflowEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeoutInput">netflowIdleFlowTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnlyInput">netflowInternalFlowsOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainIdInput">netflowObservationDomainIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRateInput">netflowSamplingRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabledInput">networkResourceControlEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersionInput">networkResourceControlVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbitInput">nfsMaximumMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbitInput">nfsReservationMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCountInput">nfsShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevelInput">nfsShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitchesInput">notifySwitchesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanIdInput">portPrivateSecondaryVlanIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMappingInput">pvlanMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinksInput">standbyUplinksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicyInput">teamingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplinkInput">txUplinkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinksInput">uplinksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbitInput">vdpMaximumMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbitInput">vdpReservationMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCountInput">vdpShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevelInput">vdpShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbitInput">virtualmachineMaximumMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbitInput">virtualmachineReservationMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCountInput">virtualmachineShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevelInput">virtualmachineShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanIdInput">vlanIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRangeInput">vlanRangeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbitInput">vmotionMaximumMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbitInput">vmotionReservationMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCountInput">vmotionShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevelInput">vmotionShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbitInput">vsanMaximumMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbitInput">vsanReservationMbitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCountInput">vsanShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevelInput">vsanShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinks">activeUplinks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChanges">allowMacChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuous">allowPromiscuous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbit">backupnfcMaximumMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbit">backupnfcReservationMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCount">backupnfcShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevel">backupnfcShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPorts">blockAllPorts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeacon">checkBeacon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetail">contactDetail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactName">contactName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2Allowed">directpathGen2Allowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidth">egressShapingAverageBandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSize">egressShapingBurstSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabled">egressShapingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidth">egressShapingPeakBandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failback">failback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbit">faulttoleranceMaximumMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbit">faulttoleranceReservationMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCount">faulttoleranceShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevel">faulttoleranceShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbit">hbrMaximumMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbit">hbrReservationMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCount">hbrShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevel">hbrShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappings">ignoreOtherPvlanMappings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidth">ingressShapingAverageBandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSize">ingressShapingBurstSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabled">ingressShapingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidth">ingressShapingPeakBandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbit">iscsiMaximumMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbit">iscsiReservationMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCount">iscsiShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevel">iscsiShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersion">lacpApiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabled">lacpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpMode">lacpMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperation">linkDiscoveryOperation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocol">linkDiscoveryProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbit">managementMaximumMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbit">managementReservationMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCount">managementShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevel">managementShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtu">maxMtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringMode">multicastFilteringMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeout">netflowActiveFlowTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddress">netflowCollectorIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPort">netflowCollectorPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabled">netflowEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeout">netflowIdleFlowTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnly">netflowInternalFlowsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainId">netflowObservationDomainId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRate">netflowSamplingRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabled">networkResourceControlEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersion">networkResourceControlVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbit">nfsMaximumMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbit">nfsReservationMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCount">nfsShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevel">nfsShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitches">notifySwitches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanId">portPrivateSecondaryVlanId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinks">standbyUplinks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicy">teamingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplink">txUplink</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinks">uplinks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbit">vdpMaximumMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbit">vdpReservationMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCount">vdpShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevel">vdpShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbit">virtualmachineMaximumMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbit">virtualmachineReservationMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCount">virtualmachineShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevel">virtualmachineShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanId">vlanId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbit">vmotionMaximumMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbit">vmotionReservationMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCount">vmotionShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevel">vmotionShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbit">vsanMaximumMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbit">vsanReservationMbit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCount">vsanShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevel">vsanShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configVersion`<sup>Required</sup> <a name="configVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.configVersion"></a>

```java
public java.lang.String getConfigVersion();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.host"></a>

```java
public DistributedVirtualSwitchHostList getHost();
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList">DistributedVirtualSwitchHostList</a>

---

##### `pvlanMapping`<sup>Required</sup> <a name="pvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMapping"></a>

```java
public DistributedVirtualSwitchPvlanMappingList getPvlanMapping();
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList">DistributedVirtualSwitchPvlanMappingList</a>

---

##### `vlanRange`<sup>Required</sup> <a name="vlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRange"></a>

```java
public DistributedVirtualSwitchVlanRangeList getVlanRange();
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList">DistributedVirtualSwitchVlanRangeList</a>

---

##### `activeUplinksInput`<sup>Optional</sup> <a name="activeUplinksInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinksInput"></a>

```java
public java.util.List<java.lang.String> getActiveUplinksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowForgedTransmitsInput`<sup>Optional</sup> <a name="allowForgedTransmitsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmitsInput"></a>

```java
public java.lang.Object getAllowForgedTransmitsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowMacChangesInput`<sup>Optional</sup> <a name="allowMacChangesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChangesInput"></a>

```java
public java.lang.Object getAllowMacChangesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowPromiscuousInput`<sup>Optional</sup> <a name="allowPromiscuousInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuousInput"></a>

```java
public java.lang.Object getAllowPromiscuousInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupnfcMaximumMbitInput`<sup>Optional</sup> <a name="backupnfcMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbitInput"></a>

```java
public java.lang.Number getBackupnfcMaximumMbitInput();
```

- *Type:* java.lang.Number

---

##### `backupnfcReservationMbitInput`<sup>Optional</sup> <a name="backupnfcReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbitInput"></a>

```java
public java.lang.Number getBackupnfcReservationMbitInput();
```

- *Type:* java.lang.Number

---

##### `backupnfcShareCountInput`<sup>Optional</sup> <a name="backupnfcShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCountInput"></a>

```java
public java.lang.Number getBackupnfcShareCountInput();
```

- *Type:* java.lang.Number

---

##### `backupnfcShareLevelInput`<sup>Optional</sup> <a name="backupnfcShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevelInput"></a>

```java
public java.lang.String getBackupnfcShareLevelInput();
```

- *Type:* java.lang.String

---

##### `blockAllPortsInput`<sup>Optional</sup> <a name="blockAllPortsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPortsInput"></a>

```java
public java.lang.Object getBlockAllPortsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `checkBeaconInput`<sup>Optional</sup> <a name="checkBeaconInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeaconInput"></a>

```java
public java.lang.Object getCheckBeaconInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contactDetailInput`<sup>Optional</sup> <a name="contactDetailInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetailInput"></a>

```java
public java.lang.String getContactDetailInput();
```

- *Type:* java.lang.String

---

##### `contactNameInput`<sup>Optional</sup> <a name="contactNameInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactNameInput"></a>

```java
public java.lang.String getContactNameInput();
```

- *Type:* java.lang.String

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `directpathGen2AllowedInput`<sup>Optional</sup> <a name="directpathGen2AllowedInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2AllowedInput"></a>

```java
public java.lang.Object getDirectpathGen2AllowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `egressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="egressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidthInput"></a>

```java
public java.lang.Number getEgressShapingAverageBandwidthInput();
```

- *Type:* java.lang.Number

---

##### `egressShapingBurstSizeInput`<sup>Optional</sup> <a name="egressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSizeInput"></a>

```java
public java.lang.Number getEgressShapingBurstSizeInput();
```

- *Type:* java.lang.Number

---

##### `egressShapingEnabledInput`<sup>Optional</sup> <a name="egressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabledInput"></a>

```java
public java.lang.Object getEgressShapingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `egressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="egressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidthInput"></a>

```java
public java.lang.Number getEgressShapingPeakBandwidthInput();
```

- *Type:* java.lang.Number

---

##### `failbackInput`<sup>Optional</sup> <a name="failbackInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failbackInput"></a>

```java
public java.lang.Object getFailbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `faulttoleranceMaximumMbitInput`<sup>Optional</sup> <a name="faulttoleranceMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbitInput"></a>

```java
public java.lang.Number getFaulttoleranceMaximumMbitInput();
```

- *Type:* java.lang.Number

---

##### `faulttoleranceReservationMbitInput`<sup>Optional</sup> <a name="faulttoleranceReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbitInput"></a>

```java
public java.lang.Number getFaulttoleranceReservationMbitInput();
```

- *Type:* java.lang.Number

---

##### `faulttoleranceShareCountInput`<sup>Optional</sup> <a name="faulttoleranceShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCountInput"></a>

```java
public java.lang.Number getFaulttoleranceShareCountInput();
```

- *Type:* java.lang.Number

---

##### `faulttoleranceShareLevelInput`<sup>Optional</sup> <a name="faulttoleranceShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevelInput"></a>

```java
public java.lang.String getFaulttoleranceShareLevelInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `hbrMaximumMbitInput`<sup>Optional</sup> <a name="hbrMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbitInput"></a>

```java
public java.lang.Number getHbrMaximumMbitInput();
```

- *Type:* java.lang.Number

---

##### `hbrReservationMbitInput`<sup>Optional</sup> <a name="hbrReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbitInput"></a>

```java
public java.lang.Number getHbrReservationMbitInput();
```

- *Type:* java.lang.Number

---

##### `hbrShareCountInput`<sup>Optional</sup> <a name="hbrShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCountInput"></a>

```java
public java.lang.Number getHbrShareCountInput();
```

- *Type:* java.lang.Number

---

##### `hbrShareLevelInput`<sup>Optional</sup> <a name="hbrShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevelInput"></a>

```java
public java.lang.String getHbrShareLevelInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hostInput"></a>

```java
public java.lang.Object getHostInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreOtherPvlanMappingsInput`<sup>Optional</sup> <a name="ignoreOtherPvlanMappingsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappingsInput"></a>

```java
public java.lang.Object getIgnoreOtherPvlanMappingsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ingressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="ingressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidthInput"></a>

```java
public java.lang.Number getIngressShapingAverageBandwidthInput();
```

- *Type:* java.lang.Number

---

##### `ingressShapingBurstSizeInput`<sup>Optional</sup> <a name="ingressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSizeInput"></a>

```java
public java.lang.Number getIngressShapingBurstSizeInput();
```

- *Type:* java.lang.Number

---

##### `ingressShapingEnabledInput`<sup>Optional</sup> <a name="ingressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabledInput"></a>

```java
public java.lang.Object getIngressShapingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ingressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="ingressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidthInput"></a>

```java
public java.lang.Number getIngressShapingPeakBandwidthInput();
```

- *Type:* java.lang.Number

---

##### `ipv4AddressInput`<sup>Optional</sup> <a name="ipv4AddressInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4AddressInput"></a>

```java
public java.lang.String getIpv4AddressInput();
```

- *Type:* java.lang.String

---

##### `iscsiMaximumMbitInput`<sup>Optional</sup> <a name="iscsiMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbitInput"></a>

```java
public java.lang.Number getIscsiMaximumMbitInput();
```

- *Type:* java.lang.Number

---

##### `iscsiReservationMbitInput`<sup>Optional</sup> <a name="iscsiReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbitInput"></a>

```java
public java.lang.Number getIscsiReservationMbitInput();
```

- *Type:* java.lang.Number

---

##### `iscsiShareCountInput`<sup>Optional</sup> <a name="iscsiShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCountInput"></a>

```java
public java.lang.Number getIscsiShareCountInput();
```

- *Type:* java.lang.Number

---

##### `iscsiShareLevelInput`<sup>Optional</sup> <a name="iscsiShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevelInput"></a>

```java
public java.lang.String getIscsiShareLevelInput();
```

- *Type:* java.lang.String

---

##### `lacpApiVersionInput`<sup>Optional</sup> <a name="lacpApiVersionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersionInput"></a>

```java
public java.lang.String getLacpApiVersionInput();
```

- *Type:* java.lang.String

---

##### `lacpEnabledInput`<sup>Optional</sup> <a name="lacpEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabledInput"></a>

```java
public java.lang.Object getLacpEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lacpModeInput`<sup>Optional</sup> <a name="lacpModeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpModeInput"></a>

```java
public java.lang.String getLacpModeInput();
```

- *Type:* java.lang.String

---

##### `linkDiscoveryOperationInput`<sup>Optional</sup> <a name="linkDiscoveryOperationInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperationInput"></a>

```java
public java.lang.String getLinkDiscoveryOperationInput();
```

- *Type:* java.lang.String

---

##### `linkDiscoveryProtocolInput`<sup>Optional</sup> <a name="linkDiscoveryProtocolInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocolInput"></a>

```java
public java.lang.String getLinkDiscoveryProtocolInput();
```

- *Type:* java.lang.String

---

##### `managementMaximumMbitInput`<sup>Optional</sup> <a name="managementMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbitInput"></a>

```java
public java.lang.Number getManagementMaximumMbitInput();
```

- *Type:* java.lang.Number

---

##### `managementReservationMbitInput`<sup>Optional</sup> <a name="managementReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbitInput"></a>

```java
public java.lang.Number getManagementReservationMbitInput();
```

- *Type:* java.lang.Number

---

##### `managementShareCountInput`<sup>Optional</sup> <a name="managementShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCountInput"></a>

```java
public java.lang.Number getManagementShareCountInput();
```

- *Type:* java.lang.Number

---

##### `managementShareLevelInput`<sup>Optional</sup> <a name="managementShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevelInput"></a>

```java
public java.lang.String getManagementShareLevelInput();
```

- *Type:* java.lang.String

---

##### `maxMtuInput`<sup>Optional</sup> <a name="maxMtuInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtuInput"></a>

```java
public java.lang.Number getMaxMtuInput();
```

- *Type:* java.lang.Number

---

##### `multicastFilteringModeInput`<sup>Optional</sup> <a name="multicastFilteringModeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringModeInput"></a>

```java
public java.lang.String getMulticastFilteringModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `netflowActiveFlowTimeoutInput`<sup>Optional</sup> <a name="netflowActiveFlowTimeoutInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeoutInput"></a>

```java
public java.lang.Number getNetflowActiveFlowTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `netflowCollectorIpAddressInput`<sup>Optional</sup> <a name="netflowCollectorIpAddressInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddressInput"></a>

```java
public java.lang.String getNetflowCollectorIpAddressInput();
```

- *Type:* java.lang.String

---

##### `netflowCollectorPortInput`<sup>Optional</sup> <a name="netflowCollectorPortInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPortInput"></a>

```java
public java.lang.Number getNetflowCollectorPortInput();
```

- *Type:* java.lang.Number

---

##### `netflowEnabledInput`<sup>Optional</sup> <a name="netflowEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabledInput"></a>

```java
public java.lang.Object getNetflowEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `netflowIdleFlowTimeoutInput`<sup>Optional</sup> <a name="netflowIdleFlowTimeoutInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeoutInput"></a>

```java
public java.lang.Number getNetflowIdleFlowTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `netflowInternalFlowsOnlyInput`<sup>Optional</sup> <a name="netflowInternalFlowsOnlyInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnlyInput"></a>

```java
public java.lang.Object getNetflowInternalFlowsOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `netflowObservationDomainIdInput`<sup>Optional</sup> <a name="netflowObservationDomainIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainIdInput"></a>

```java
public java.lang.Number getNetflowObservationDomainIdInput();
```

- *Type:* java.lang.Number

---

##### `netflowSamplingRateInput`<sup>Optional</sup> <a name="netflowSamplingRateInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRateInput"></a>

```java
public java.lang.Number getNetflowSamplingRateInput();
```

- *Type:* java.lang.Number

---

##### `networkResourceControlEnabledInput`<sup>Optional</sup> <a name="networkResourceControlEnabledInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabledInput"></a>

```java
public java.lang.Object getNetworkResourceControlEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkResourceControlVersionInput`<sup>Optional</sup> <a name="networkResourceControlVersionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersionInput"></a>

```java
public java.lang.String getNetworkResourceControlVersionInput();
```

- *Type:* java.lang.String

---

##### `nfsMaximumMbitInput`<sup>Optional</sup> <a name="nfsMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbitInput"></a>

```java
public java.lang.Number getNfsMaximumMbitInput();
```

- *Type:* java.lang.Number

---

##### `nfsReservationMbitInput`<sup>Optional</sup> <a name="nfsReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbitInput"></a>

```java
public java.lang.Number getNfsReservationMbitInput();
```

- *Type:* java.lang.Number

---

##### `nfsShareCountInput`<sup>Optional</sup> <a name="nfsShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCountInput"></a>

```java
public java.lang.Number getNfsShareCountInput();
```

- *Type:* java.lang.Number

---

##### `nfsShareLevelInput`<sup>Optional</sup> <a name="nfsShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevelInput"></a>

```java
public java.lang.String getNfsShareLevelInput();
```

- *Type:* java.lang.String

---

##### `notifySwitchesInput`<sup>Optional</sup> <a name="notifySwitchesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitchesInput"></a>

```java
public java.lang.Object getNotifySwitchesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `portPrivateSecondaryVlanIdInput`<sup>Optional</sup> <a name="portPrivateSecondaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanIdInput"></a>

```java
public java.lang.Number getPortPrivateSecondaryVlanIdInput();
```

- *Type:* java.lang.Number

---

##### `pvlanMappingInput`<sup>Optional</sup> <a name="pvlanMappingInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMappingInput"></a>

```java
public java.lang.Object getPvlanMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>>

---

##### `standbyUplinksInput`<sup>Optional</sup> <a name="standbyUplinksInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinksInput"></a>

```java
public java.util.List<java.lang.String> getStandbyUplinksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `teamingPolicyInput`<sup>Optional</sup> <a name="teamingPolicyInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicyInput"></a>

```java
public java.lang.String getTeamingPolicyInput();
```

- *Type:* java.lang.String

---

##### `txUplinkInput`<sup>Optional</sup> <a name="txUplinkInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplinkInput"></a>

```java
public java.lang.Object getTxUplinkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `uplinksInput`<sup>Optional</sup> <a name="uplinksInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinksInput"></a>

```java
public java.util.List<java.lang.String> getUplinksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vdpMaximumMbitInput`<sup>Optional</sup> <a name="vdpMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbitInput"></a>

```java
public java.lang.Number getVdpMaximumMbitInput();
```

- *Type:* java.lang.Number

---

##### `vdpReservationMbitInput`<sup>Optional</sup> <a name="vdpReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbitInput"></a>

```java
public java.lang.Number getVdpReservationMbitInput();
```

- *Type:* java.lang.Number

---

##### `vdpShareCountInput`<sup>Optional</sup> <a name="vdpShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCountInput"></a>

```java
public java.lang.Number getVdpShareCountInput();
```

- *Type:* java.lang.Number

---

##### `vdpShareLevelInput`<sup>Optional</sup> <a name="vdpShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevelInput"></a>

```java
public java.lang.String getVdpShareLevelInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `virtualmachineMaximumMbitInput`<sup>Optional</sup> <a name="virtualmachineMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbitInput"></a>

```java
public java.lang.Number getVirtualmachineMaximumMbitInput();
```

- *Type:* java.lang.Number

---

##### `virtualmachineReservationMbitInput`<sup>Optional</sup> <a name="virtualmachineReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbitInput"></a>

```java
public java.lang.Number getVirtualmachineReservationMbitInput();
```

- *Type:* java.lang.Number

---

##### `virtualmachineShareCountInput`<sup>Optional</sup> <a name="virtualmachineShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCountInput"></a>

```java
public java.lang.Number getVirtualmachineShareCountInput();
```

- *Type:* java.lang.Number

---

##### `virtualmachineShareLevelInput`<sup>Optional</sup> <a name="virtualmachineShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevelInput"></a>

```java
public java.lang.String getVirtualmachineShareLevelInput();
```

- *Type:* java.lang.String

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanIdInput"></a>

```java
public java.lang.Number getVlanIdInput();
```

- *Type:* java.lang.Number

---

##### `vlanRangeInput`<sup>Optional</sup> <a name="vlanRangeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRangeInput"></a>

```java
public java.lang.Object getVlanRangeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>>

---

##### `vmotionMaximumMbitInput`<sup>Optional</sup> <a name="vmotionMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbitInput"></a>

```java
public java.lang.Number getVmotionMaximumMbitInput();
```

- *Type:* java.lang.Number

---

##### `vmotionReservationMbitInput`<sup>Optional</sup> <a name="vmotionReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbitInput"></a>

```java
public java.lang.Number getVmotionReservationMbitInput();
```

- *Type:* java.lang.Number

---

##### `vmotionShareCountInput`<sup>Optional</sup> <a name="vmotionShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCountInput"></a>

```java
public java.lang.Number getVmotionShareCountInput();
```

- *Type:* java.lang.Number

---

##### `vmotionShareLevelInput`<sup>Optional</sup> <a name="vmotionShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevelInput"></a>

```java
public java.lang.String getVmotionShareLevelInput();
```

- *Type:* java.lang.String

---

##### `vsanMaximumMbitInput`<sup>Optional</sup> <a name="vsanMaximumMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbitInput"></a>

```java
public java.lang.Number getVsanMaximumMbitInput();
```

- *Type:* java.lang.Number

---

##### `vsanReservationMbitInput`<sup>Optional</sup> <a name="vsanReservationMbitInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbitInput"></a>

```java
public java.lang.Number getVsanReservationMbitInput();
```

- *Type:* java.lang.Number

---

##### `vsanShareCountInput`<sup>Optional</sup> <a name="vsanShareCountInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCountInput"></a>

```java
public java.lang.Number getVsanShareCountInput();
```

- *Type:* java.lang.Number

---

##### `vsanShareLevelInput`<sup>Optional</sup> <a name="vsanShareLevelInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevelInput"></a>

```java
public java.lang.String getVsanShareLevelInput();
```

- *Type:* java.lang.String

---

##### `activeUplinks`<sup>Required</sup> <a name="activeUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinks"></a>

```java
public java.util.List<java.lang.String> getActiveUplinks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowForgedTransmits`<sup>Required</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmits"></a>

```java
public java.lang.Object getAllowForgedTransmits();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowMacChanges`<sup>Required</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChanges"></a>

```java
public java.lang.Object getAllowMacChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowPromiscuous`<sup>Required</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuous"></a>

```java
public java.lang.Object getAllowPromiscuous();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupnfcMaximumMbit`<sup>Required</sup> <a name="backupnfcMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbit"></a>

```java
public java.lang.Number getBackupnfcMaximumMbit();
```

- *Type:* java.lang.Number

---

##### `backupnfcReservationMbit`<sup>Required</sup> <a name="backupnfcReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbit"></a>

```java
public java.lang.Number getBackupnfcReservationMbit();
```

- *Type:* java.lang.Number

---

##### `backupnfcShareCount`<sup>Required</sup> <a name="backupnfcShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCount"></a>

```java
public java.lang.Number getBackupnfcShareCount();
```

- *Type:* java.lang.Number

---

##### `backupnfcShareLevel`<sup>Required</sup> <a name="backupnfcShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevel"></a>

```java
public java.lang.String getBackupnfcShareLevel();
```

- *Type:* java.lang.String

---

##### `blockAllPorts`<sup>Required</sup> <a name="blockAllPorts" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPorts"></a>

```java
public java.lang.Object getBlockAllPorts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `checkBeacon`<sup>Required</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeacon"></a>

```java
public java.lang.Object getCheckBeacon();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contactDetail`<sup>Required</sup> <a name="contactDetail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetail"></a>

```java
public java.lang.String getContactDetail();
```

- *Type:* java.lang.String

---

##### `contactName`<sup>Required</sup> <a name="contactName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactName"></a>

```java
public java.lang.String getContactName();
```

- *Type:* java.lang.String

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `directpathGen2Allowed`<sup>Required</sup> <a name="directpathGen2Allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2Allowed"></a>

```java
public java.lang.Object getDirectpathGen2Allowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `egressShapingAverageBandwidth`<sup>Required</sup> <a name="egressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidth"></a>

```java
public java.lang.Number getEgressShapingAverageBandwidth();
```

- *Type:* java.lang.Number

---

##### `egressShapingBurstSize`<sup>Required</sup> <a name="egressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSize"></a>

```java
public java.lang.Number getEgressShapingBurstSize();
```

- *Type:* java.lang.Number

---

##### `egressShapingEnabled`<sup>Required</sup> <a name="egressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabled"></a>

```java
public java.lang.Object getEgressShapingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `egressShapingPeakBandwidth`<sup>Required</sup> <a name="egressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidth"></a>

```java
public java.lang.Number getEgressShapingPeakBandwidth();
```

- *Type:* java.lang.Number

---

##### `failback`<sup>Required</sup> <a name="failback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failback"></a>

```java
public java.lang.Object getFailback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `faulttoleranceMaximumMbit`<sup>Required</sup> <a name="faulttoleranceMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbit"></a>

```java
public java.lang.Number getFaulttoleranceMaximumMbit();
```

- *Type:* java.lang.Number

---

##### `faulttoleranceReservationMbit`<sup>Required</sup> <a name="faulttoleranceReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbit"></a>

```java
public java.lang.Number getFaulttoleranceReservationMbit();
```

- *Type:* java.lang.Number

---

##### `faulttoleranceShareCount`<sup>Required</sup> <a name="faulttoleranceShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCount"></a>

```java
public java.lang.Number getFaulttoleranceShareCount();
```

- *Type:* java.lang.Number

---

##### `faulttoleranceShareLevel`<sup>Required</sup> <a name="faulttoleranceShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevel"></a>

```java
public java.lang.String getFaulttoleranceShareLevel();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `hbrMaximumMbit`<sup>Required</sup> <a name="hbrMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbit"></a>

```java
public java.lang.Number getHbrMaximumMbit();
```

- *Type:* java.lang.Number

---

##### `hbrReservationMbit`<sup>Required</sup> <a name="hbrReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbit"></a>

```java
public java.lang.Number getHbrReservationMbit();
```

- *Type:* java.lang.Number

---

##### `hbrShareCount`<sup>Required</sup> <a name="hbrShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCount"></a>

```java
public java.lang.Number getHbrShareCount();
```

- *Type:* java.lang.Number

---

##### `hbrShareLevel`<sup>Required</sup> <a name="hbrShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevel"></a>

```java
public java.lang.String getHbrShareLevel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreOtherPvlanMappings`<sup>Required</sup> <a name="ignoreOtherPvlanMappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappings"></a>

```java
public java.lang.Object getIgnoreOtherPvlanMappings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ingressShapingAverageBandwidth`<sup>Required</sup> <a name="ingressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidth"></a>

```java
public java.lang.Number getIngressShapingAverageBandwidth();
```

- *Type:* java.lang.Number

---

##### `ingressShapingBurstSize`<sup>Required</sup> <a name="ingressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSize"></a>

```java
public java.lang.Number getIngressShapingBurstSize();
```

- *Type:* java.lang.Number

---

##### `ingressShapingEnabled`<sup>Required</sup> <a name="ingressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabled"></a>

```java
public java.lang.Object getIngressShapingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ingressShapingPeakBandwidth`<sup>Required</sup> <a name="ingressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidth"></a>

```java
public java.lang.Number getIngressShapingPeakBandwidth();
```

- *Type:* java.lang.Number

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

---

##### `iscsiMaximumMbit`<sup>Required</sup> <a name="iscsiMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbit"></a>

```java
public java.lang.Number getIscsiMaximumMbit();
```

- *Type:* java.lang.Number

---

##### `iscsiReservationMbit`<sup>Required</sup> <a name="iscsiReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbit"></a>

```java
public java.lang.Number getIscsiReservationMbit();
```

- *Type:* java.lang.Number

---

##### `iscsiShareCount`<sup>Required</sup> <a name="iscsiShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCount"></a>

```java
public java.lang.Number getIscsiShareCount();
```

- *Type:* java.lang.Number

---

##### `iscsiShareLevel`<sup>Required</sup> <a name="iscsiShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevel"></a>

```java
public java.lang.String getIscsiShareLevel();
```

- *Type:* java.lang.String

---

##### `lacpApiVersion`<sup>Required</sup> <a name="lacpApiVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersion"></a>

```java
public java.lang.String getLacpApiVersion();
```

- *Type:* java.lang.String

---

##### `lacpEnabled`<sup>Required</sup> <a name="lacpEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabled"></a>

```java
public java.lang.Object getLacpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lacpMode`<sup>Required</sup> <a name="lacpMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpMode"></a>

```java
public java.lang.String getLacpMode();
```

- *Type:* java.lang.String

---

##### `linkDiscoveryOperation`<sup>Required</sup> <a name="linkDiscoveryOperation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperation"></a>

```java
public java.lang.String getLinkDiscoveryOperation();
```

- *Type:* java.lang.String

---

##### `linkDiscoveryProtocol`<sup>Required</sup> <a name="linkDiscoveryProtocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocol"></a>

```java
public java.lang.String getLinkDiscoveryProtocol();
```

- *Type:* java.lang.String

---

##### `managementMaximumMbit`<sup>Required</sup> <a name="managementMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbit"></a>

```java
public java.lang.Number getManagementMaximumMbit();
```

- *Type:* java.lang.Number

---

##### `managementReservationMbit`<sup>Required</sup> <a name="managementReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbit"></a>

```java
public java.lang.Number getManagementReservationMbit();
```

- *Type:* java.lang.Number

---

##### `managementShareCount`<sup>Required</sup> <a name="managementShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCount"></a>

```java
public java.lang.Number getManagementShareCount();
```

- *Type:* java.lang.Number

---

##### `managementShareLevel`<sup>Required</sup> <a name="managementShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevel"></a>

```java
public java.lang.String getManagementShareLevel();
```

- *Type:* java.lang.String

---

##### `maxMtu`<sup>Required</sup> <a name="maxMtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtu"></a>

```java
public java.lang.Number getMaxMtu();
```

- *Type:* java.lang.Number

---

##### `multicastFilteringMode`<sup>Required</sup> <a name="multicastFilteringMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringMode"></a>

```java
public java.lang.String getMulticastFilteringMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `netflowActiveFlowTimeout`<sup>Required</sup> <a name="netflowActiveFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeout"></a>

```java
public java.lang.Number getNetflowActiveFlowTimeout();
```

- *Type:* java.lang.Number

---

##### `netflowCollectorIpAddress`<sup>Required</sup> <a name="netflowCollectorIpAddress" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddress"></a>

```java
public java.lang.String getNetflowCollectorIpAddress();
```

- *Type:* java.lang.String

---

##### `netflowCollectorPort`<sup>Required</sup> <a name="netflowCollectorPort" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPort"></a>

```java
public java.lang.Number getNetflowCollectorPort();
```

- *Type:* java.lang.Number

---

##### `netflowEnabled`<sup>Required</sup> <a name="netflowEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabled"></a>

```java
public java.lang.Object getNetflowEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `netflowIdleFlowTimeout`<sup>Required</sup> <a name="netflowIdleFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeout"></a>

```java
public java.lang.Number getNetflowIdleFlowTimeout();
```

- *Type:* java.lang.Number

---

##### `netflowInternalFlowsOnly`<sup>Required</sup> <a name="netflowInternalFlowsOnly" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnly"></a>

```java
public java.lang.Object getNetflowInternalFlowsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `netflowObservationDomainId`<sup>Required</sup> <a name="netflowObservationDomainId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainId"></a>

```java
public java.lang.Number getNetflowObservationDomainId();
```

- *Type:* java.lang.Number

---

##### `netflowSamplingRate`<sup>Required</sup> <a name="netflowSamplingRate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRate"></a>

```java
public java.lang.Number getNetflowSamplingRate();
```

- *Type:* java.lang.Number

---

##### `networkResourceControlEnabled`<sup>Required</sup> <a name="networkResourceControlEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabled"></a>

```java
public java.lang.Object getNetworkResourceControlEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkResourceControlVersion`<sup>Required</sup> <a name="networkResourceControlVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersion"></a>

```java
public java.lang.String getNetworkResourceControlVersion();
```

- *Type:* java.lang.String

---

##### `nfsMaximumMbit`<sup>Required</sup> <a name="nfsMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbit"></a>

```java
public java.lang.Number getNfsMaximumMbit();
```

- *Type:* java.lang.Number

---

##### `nfsReservationMbit`<sup>Required</sup> <a name="nfsReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbit"></a>

```java
public java.lang.Number getNfsReservationMbit();
```

- *Type:* java.lang.Number

---

##### `nfsShareCount`<sup>Required</sup> <a name="nfsShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCount"></a>

```java
public java.lang.Number getNfsShareCount();
```

- *Type:* java.lang.Number

---

##### `nfsShareLevel`<sup>Required</sup> <a name="nfsShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevel"></a>

```java
public java.lang.String getNfsShareLevel();
```

- *Type:* java.lang.String

---

##### `notifySwitches`<sup>Required</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitches"></a>

```java
public java.lang.Object getNotifySwitches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `portPrivateSecondaryVlanId`<sup>Required</sup> <a name="portPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanId"></a>

```java
public java.lang.Number getPortPrivateSecondaryVlanId();
```

- *Type:* java.lang.Number

---

##### `standbyUplinks`<sup>Required</sup> <a name="standbyUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinks"></a>

```java
public java.util.List<java.lang.String> getStandbyUplinks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `teamingPolicy`<sup>Required</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicy"></a>

```java
public java.lang.String getTeamingPolicy();
```

- *Type:* java.lang.String

---

##### `txUplink`<sup>Required</sup> <a name="txUplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplink"></a>

```java
public java.lang.Object getTxUplink();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `uplinks`<sup>Required</sup> <a name="uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinks"></a>

```java
public java.util.List<java.lang.String> getUplinks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vdpMaximumMbit`<sup>Required</sup> <a name="vdpMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbit"></a>

```java
public java.lang.Number getVdpMaximumMbit();
```

- *Type:* java.lang.Number

---

##### `vdpReservationMbit`<sup>Required</sup> <a name="vdpReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbit"></a>

```java
public java.lang.Number getVdpReservationMbit();
```

- *Type:* java.lang.Number

---

##### `vdpShareCount`<sup>Required</sup> <a name="vdpShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCount"></a>

```java
public java.lang.Number getVdpShareCount();
```

- *Type:* java.lang.Number

---

##### `vdpShareLevel`<sup>Required</sup> <a name="vdpShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevel"></a>

```java
public java.lang.String getVdpShareLevel();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `virtualmachineMaximumMbit`<sup>Required</sup> <a name="virtualmachineMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbit"></a>

```java
public java.lang.Number getVirtualmachineMaximumMbit();
```

- *Type:* java.lang.Number

---

##### `virtualmachineReservationMbit`<sup>Required</sup> <a name="virtualmachineReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbit"></a>

```java
public java.lang.Number getVirtualmachineReservationMbit();
```

- *Type:* java.lang.Number

---

##### `virtualmachineShareCount`<sup>Required</sup> <a name="virtualmachineShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCount"></a>

```java
public java.lang.Number getVirtualmachineShareCount();
```

- *Type:* java.lang.Number

---

##### `virtualmachineShareLevel`<sup>Required</sup> <a name="virtualmachineShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevel"></a>

```java
public java.lang.String getVirtualmachineShareLevel();
```

- *Type:* java.lang.String

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanId"></a>

```java
public java.lang.Number getVlanId();
```

- *Type:* java.lang.Number

---

##### `vmotionMaximumMbit`<sup>Required</sup> <a name="vmotionMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbit"></a>

```java
public java.lang.Number getVmotionMaximumMbit();
```

- *Type:* java.lang.Number

---

##### `vmotionReservationMbit`<sup>Required</sup> <a name="vmotionReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbit"></a>

```java
public java.lang.Number getVmotionReservationMbit();
```

- *Type:* java.lang.Number

---

##### `vmotionShareCount`<sup>Required</sup> <a name="vmotionShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCount"></a>

```java
public java.lang.Number getVmotionShareCount();
```

- *Type:* java.lang.Number

---

##### `vmotionShareLevel`<sup>Required</sup> <a name="vmotionShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevel"></a>

```java
public java.lang.String getVmotionShareLevel();
```

- *Type:* java.lang.String

---

##### `vsanMaximumMbit`<sup>Required</sup> <a name="vsanMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbit"></a>

```java
public java.lang.Number getVsanMaximumMbit();
```

- *Type:* java.lang.Number

---

##### `vsanReservationMbit`<sup>Required</sup> <a name="vsanReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbit"></a>

```java
public java.lang.Number getVsanReservationMbit();
```

- *Type:* java.lang.Number

---

##### `vsanShareCount`<sup>Required</sup> <a name="vsanShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCount"></a>

```java
public java.lang.Number getVsanShareCount();
```

- *Type:* java.lang.Number

---

##### `vsanShareLevel`<sup>Required</sup> <a name="vsanShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevel"></a>

```java
public java.lang.String getVsanShareLevel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DistributedVirtualSwitchConfig <a name="DistributedVirtualSwitchConfig" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitchConfig;

DistributedVirtualSwitchConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .datacenterId(java.lang.String)
    .name(java.lang.String)
//  .activeUplinks(java.util.List<java.lang.String>)
//  .allowForgedTransmits(java.lang.Boolean)
//  .allowForgedTransmits(IResolvable)
//  .allowMacChanges(java.lang.Boolean)
//  .allowMacChanges(IResolvable)
//  .allowPromiscuous(java.lang.Boolean)
//  .allowPromiscuous(IResolvable)
//  .backupnfcMaximumMbit(java.lang.Number)
//  .backupnfcReservationMbit(java.lang.Number)
//  .backupnfcShareCount(java.lang.Number)
//  .backupnfcShareLevel(java.lang.String)
//  .blockAllPorts(java.lang.Boolean)
//  .blockAllPorts(IResolvable)
//  .checkBeacon(java.lang.Boolean)
//  .checkBeacon(IResolvable)
//  .contactDetail(java.lang.String)
//  .contactName(java.lang.String)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .directpathGen2Allowed(java.lang.Boolean)
//  .directpathGen2Allowed(IResolvable)
//  .egressShapingAverageBandwidth(java.lang.Number)
//  .egressShapingBurstSize(java.lang.Number)
//  .egressShapingEnabled(java.lang.Boolean)
//  .egressShapingEnabled(IResolvable)
//  .egressShapingPeakBandwidth(java.lang.Number)
//  .failback(java.lang.Boolean)
//  .failback(IResolvable)
//  .faulttoleranceMaximumMbit(java.lang.Number)
//  .faulttoleranceReservationMbit(java.lang.Number)
//  .faulttoleranceShareCount(java.lang.Number)
//  .faulttoleranceShareLevel(java.lang.String)
//  .folder(java.lang.String)
//  .hbrMaximumMbit(java.lang.Number)
//  .hbrReservationMbit(java.lang.Number)
//  .hbrShareCount(java.lang.Number)
//  .hbrShareLevel(java.lang.String)
//  .host(IResolvable)
//  .host(java.util.List<DistributedVirtualSwitchHost>)
//  .id(java.lang.String)
//  .ignoreOtherPvlanMappings(java.lang.Boolean)
//  .ignoreOtherPvlanMappings(IResolvable)
//  .ingressShapingAverageBandwidth(java.lang.Number)
//  .ingressShapingBurstSize(java.lang.Number)
//  .ingressShapingEnabled(java.lang.Boolean)
//  .ingressShapingEnabled(IResolvable)
//  .ingressShapingPeakBandwidth(java.lang.Number)
//  .ipv4Address(java.lang.String)
//  .iscsiMaximumMbit(java.lang.Number)
//  .iscsiReservationMbit(java.lang.Number)
//  .iscsiShareCount(java.lang.Number)
//  .iscsiShareLevel(java.lang.String)
//  .lacpApiVersion(java.lang.String)
//  .lacpEnabled(java.lang.Boolean)
//  .lacpEnabled(IResolvable)
//  .lacpMode(java.lang.String)
//  .linkDiscoveryOperation(java.lang.String)
//  .linkDiscoveryProtocol(java.lang.String)
//  .managementMaximumMbit(java.lang.Number)
//  .managementReservationMbit(java.lang.Number)
//  .managementShareCount(java.lang.Number)
//  .managementShareLevel(java.lang.String)
//  .maxMtu(java.lang.Number)
//  .multicastFilteringMode(java.lang.String)
//  .netflowActiveFlowTimeout(java.lang.Number)
//  .netflowCollectorIpAddress(java.lang.String)
//  .netflowCollectorPort(java.lang.Number)
//  .netflowEnabled(java.lang.Boolean)
//  .netflowEnabled(IResolvable)
//  .netflowIdleFlowTimeout(java.lang.Number)
//  .netflowInternalFlowsOnly(java.lang.Boolean)
//  .netflowInternalFlowsOnly(IResolvable)
//  .netflowObservationDomainId(java.lang.Number)
//  .netflowSamplingRate(java.lang.Number)
//  .networkResourceControlEnabled(java.lang.Boolean)
//  .networkResourceControlEnabled(IResolvable)
//  .networkResourceControlVersion(java.lang.String)
//  .nfsMaximumMbit(java.lang.Number)
//  .nfsReservationMbit(java.lang.Number)
//  .nfsShareCount(java.lang.Number)
//  .nfsShareLevel(java.lang.String)
//  .notifySwitches(java.lang.Boolean)
//  .notifySwitches(IResolvable)
//  .portPrivateSecondaryVlanId(java.lang.Number)
//  .pvlanMapping(IResolvable)
//  .pvlanMapping(java.util.List<DistributedVirtualSwitchPvlanMapping>)
//  .standbyUplinks(java.util.List<java.lang.String>)
//  .tags(java.util.List<java.lang.String>)
//  .teamingPolicy(java.lang.String)
//  .txUplink(java.lang.Boolean)
//  .txUplink(IResolvable)
//  .uplinks(java.util.List<java.lang.String>)
//  .vdpMaximumMbit(java.lang.Number)
//  .vdpReservationMbit(java.lang.Number)
//  .vdpShareCount(java.lang.Number)
//  .vdpShareLevel(java.lang.String)
//  .version(java.lang.String)
//  .virtualmachineMaximumMbit(java.lang.Number)
//  .virtualmachineReservationMbit(java.lang.Number)
//  .virtualmachineShareCount(java.lang.Number)
//  .virtualmachineShareLevel(java.lang.String)
//  .vlanId(java.lang.Number)
//  .vlanRange(IResolvable)
//  .vlanRange(java.util.List<DistributedVirtualSwitchVlanRange>)
//  .vmotionMaximumMbit(java.lang.Number)
//  .vmotionReservationMbit(java.lang.Number)
//  .vmotionShareCount(java.lang.Number)
//  .vmotionShareLevel(java.lang.String)
//  .vsanMaximumMbit(java.lang.Number)
//  .vsanReservationMbit(java.lang.Number)
//  .vsanShareCount(java.lang.Number)
//  .vsanShareLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The ID of the datacenter to create this virtual switch in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name for the DVS. Must be unique in the folder that it is being created in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.activeUplinks">activeUplinks</a></code> | <code>java.util.List<java.lang.String></code> | List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowMacChanges">allowMacChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowPromiscuous">allowPromiscuous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcMaximumMbit">backupnfcMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcReservationMbit">backupnfcReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareCount">backupnfcShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the backupNfc traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareLevel">backupnfcShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.blockAllPorts">blockAllPorts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether to block all ports by default. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.checkBeacon">checkBeacon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable beacon probing on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactDetail">contactDetail</a></code> | <code>java.lang.String</code> | The contact detail for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactName">contactName</a></code> | <code>java.lang.String</code> | The contact name for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.directpathGen2Allowed">directpathGen2Allowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow VMDirectPath Gen2 on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingAverageBandwidth">egressShapingAverageBandwidth</a></code> | <code>java.lang.Number</code> | The average egress bandwidth in bits per second if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingBurstSize">egressShapingBurstSize</a></code> | <code>java.lang.Number</code> | The maximum egress burst size allowed in bytes if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingEnabled">egressShapingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if the traffic shaper is enabled for egress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingPeakBandwidth">egressShapingPeakBandwidth</a></code> | <code>java.lang.Number</code> | The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.failback">failback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceMaximumMbit">faulttoleranceMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceReservationMbit">faulttoleranceReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareCount">faulttoleranceShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the faultTolerance traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareLevel">faulttoleranceShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | The folder to create this virtual switch in, relative to the datacenter. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrMaximumMbit">hbrMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrReservationMbit">hbrReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareCount">hbrShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the hbr traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareLevel">hbrShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.host">host</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>></code> | host block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ignoreOtherPvlanMappings">ignoreOtherPvlanMappings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to ignore existing PVLAN mappings not managed by this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingAverageBandwidth">ingressShapingAverageBandwidth</a></code> | <code>java.lang.Number</code> | The average ingress bandwidth in bits per second if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingBurstSize">ingressShapingBurstSize</a></code> | <code>java.lang.Number</code> | The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingEnabled">ingressShapingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if the traffic shaper is enabled for ingress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingPeakBandwidth">ingressShapingPeakBandwidth</a></code> | <code>java.lang.Number</code> | The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | The IPv4 address of the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiMaximumMbit">iscsiMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiReservationMbit">iscsiReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareCount">iscsiShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the iSCSI traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareLevel">iscsiShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpApiVersion">lacpApiVersion</a></code> | <code>java.lang.String</code> | The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpEnabled">lacpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to enable LACP on all uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpMode">lacpMode</a></code> | <code>java.lang.String</code> | The uplink LACP mode to use. Can be one of active or passive. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryOperation">linkDiscoveryOperation</a></code> | <code>java.lang.String</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryProtocol">linkDiscoveryProtocol</a></code> | <code>java.lang.String</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementMaximumMbit">managementMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementReservationMbit">managementReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareCount">managementShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the management traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareLevel">managementShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the management traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.maxMtu">maxMtu</a></code> | <code>java.lang.Number</code> | The maximum MTU on the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.multicastFilteringMode">multicastFilteringMode</a></code> | <code>java.lang.String</code> | The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowActiveFlowTimeout">netflowActiveFlowTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds after which active flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorIpAddress">netflowCollectorIpAddress</a></code> | <code>java.lang.String</code> | IP address for the netflow collector, using IPv4 or IPv6. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorPort">netflowCollectorPort</a></code> | <code>java.lang.Number</code> | The port for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowEnabled">netflowEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether to enable netflow on all ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowIdleFlowTimeout">netflowIdleFlowTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds after which idle flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowInternalFlowsOnly">netflowInternalFlowsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to limit analysis to traffic that has both source and destination served by the same host. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowObservationDomainId">netflowObservationDomainId</a></code> | <code>java.lang.Number</code> | The observation Domain ID for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowSamplingRate">netflowSamplingRate</a></code> | <code>java.lang.Number</code> | The ratio of total number of packets to the number of packets analyzed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlEnabled">networkResourceControlEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlVersion">networkResourceControlVersion</a></code> | <code>java.lang.String</code> | The network I/O control version to use. Can be one of version2 or version3. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsMaximumMbit">nfsMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsReservationMbit">nfsReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareCount">nfsShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the nfs traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareLevel">nfsShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.notifySwitches">notifySwitches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.portPrivateSecondaryVlanId">portPrivateSecondaryVlanId</a></code> | <code>java.lang.Number</code> | The secondary VLAN ID for this port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.pvlanMapping">pvlanMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>></code> | pvlan_mapping block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.standbyUplinks">standbyUplinks</a></code> | <code>java.util.List<java.lang.String></code> | List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.teamingPolicy">teamingPolicy</a></code> | <code>java.lang.String</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.txUplink">txUplink</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.uplinks">uplinks</a></code> | <code>java.util.List<java.lang.String></code> | A list of uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpMaximumMbit">vdpMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpReservationMbit">vdpReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareCount">vdpShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the vdp traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareLevel">vdpShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.version">version</a></code> | <code>java.lang.String</code> | The version of this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineMaximumMbit">virtualmachineMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineReservationMbit">virtualmachineReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareCount">virtualmachineShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the virtualMachine traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareLevel">virtualmachineShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanId">vlanId</a></code> | <code>java.lang.Number</code> | The VLAN ID for single VLAN mode. 0 denotes no VLAN. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanRange">vlanRange</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>></code> | vlan_range block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionMaximumMbit">vmotionMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionReservationMbit">vmotionReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareCount">vmotionShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the vmotion traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareLevel">vmotionShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanMaximumMbit">vsanMaximumMbit</a></code> | <code>java.lang.Number</code> | The maximum allowed usage for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanReservationMbit">vsanReservationMbit</a></code> | <code>java.lang.Number</code> | The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareCount">vsanShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to the vsan traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareLevel">vsanShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

The ID of the datacenter to create this virtual switch in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#datacenter_id DistributedVirtualSwitch#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for the DVS. Must be unique in the folder that it is being created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#name DistributedVirtualSwitch#name}

---

##### `activeUplinks`<sup>Optional</sup> <a name="activeUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.activeUplinks"></a>

```java
public java.util.List<java.lang.String> getActiveUplinks();
```

- *Type:* java.util.List<java.lang.String>

List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#active_uplinks DistributedVirtualSwitch#active_uplinks}

---

##### `allowForgedTransmits`<sup>Optional</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowForgedTransmits"></a>

```java
public java.lang.Object getAllowForgedTransmits();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#allow_forged_transmits DistributedVirtualSwitch#allow_forged_transmits}

---

##### `allowMacChanges`<sup>Optional</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowMacChanges"></a>

```java
public java.lang.Object getAllowMacChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#allow_mac_changes DistributedVirtualSwitch#allow_mac_changes}

---

##### `allowPromiscuous`<sup>Optional</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowPromiscuous"></a>

```java
public java.lang.Object getAllowPromiscuous();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#allow_promiscuous DistributedVirtualSwitch#allow_promiscuous}

---

##### `backupnfcMaximumMbit`<sup>Optional</sup> <a name="backupnfcMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcMaximumMbit"></a>

```java
public java.lang.Number getBackupnfcMaximumMbit();
```

- *Type:* java.lang.Number

The maximum allowed usage for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#backupnfc_maximum_mbit DistributedVirtualSwitch#backupnfc_maximum_mbit}

---

##### `backupnfcReservationMbit`<sup>Optional</sup> <a name="backupnfcReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcReservationMbit"></a>

```java
public java.lang.Number getBackupnfcReservationMbit();
```

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#backupnfc_reservation_mbit DistributedVirtualSwitch#backupnfc_reservation_mbit}

---

##### `backupnfcShareCount`<sup>Optional</sup> <a name="backupnfcShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareCount"></a>

```java
public java.lang.Number getBackupnfcShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to the backupNfc traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#backupnfc_share_count DistributedVirtualSwitch#backupnfc_share_count}

---

##### `backupnfcShareLevel`<sup>Optional</sup> <a name="backupnfcShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareLevel"></a>

```java
public java.lang.String getBackupnfcShareLevel();
```

- *Type:* java.lang.String

The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#backupnfc_share_level DistributedVirtualSwitch#backupnfc_share_level}

---

##### `blockAllPorts`<sup>Optional</sup> <a name="blockAllPorts" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.blockAllPorts"></a>

```java
public java.lang.Object getBlockAllPorts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether to block all ports by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#block_all_ports DistributedVirtualSwitch#block_all_ports}

---

##### `checkBeacon`<sup>Optional</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.checkBeacon"></a>

```java
public java.lang.Object getCheckBeacon();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable beacon probing on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#check_beacon DistributedVirtualSwitch#check_beacon}

---

##### `contactDetail`<sup>Optional</sup> <a name="contactDetail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactDetail"></a>

```java
public java.lang.String getContactDetail();
```

- *Type:* java.lang.String

The contact detail for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#contact_detail DistributedVirtualSwitch#contact_detail}

---

##### `contactName`<sup>Optional</sup> <a name="contactName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactName"></a>

```java
public java.lang.String getContactName();
```

- *Type:* java.lang.String

The contact name for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#contact_name DistributedVirtualSwitch#contact_name}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#custom_attributes DistributedVirtualSwitch#custom_attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#description DistributedVirtualSwitch#description}

---

##### `directpathGen2Allowed`<sup>Optional</sup> <a name="directpathGen2Allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.directpathGen2Allowed"></a>

```java
public java.lang.Object getDirectpathGen2Allowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow VMDirectPath Gen2 on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#directpath_gen2_allowed DistributedVirtualSwitch#directpath_gen2_allowed}

---

##### `egressShapingAverageBandwidth`<sup>Optional</sup> <a name="egressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingAverageBandwidth"></a>

```java
public java.lang.Number getEgressShapingAverageBandwidth();
```

- *Type:* java.lang.Number

The average egress bandwidth in bits per second if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#egress_shaping_average_bandwidth DistributedVirtualSwitch#egress_shaping_average_bandwidth}

---

##### `egressShapingBurstSize`<sup>Optional</sup> <a name="egressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingBurstSize"></a>

```java
public java.lang.Number getEgressShapingBurstSize();
```

- *Type:* java.lang.Number

The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#egress_shaping_burst_size DistributedVirtualSwitch#egress_shaping_burst_size}

---

##### `egressShapingEnabled`<sup>Optional</sup> <a name="egressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingEnabled"></a>

```java
public java.lang.Object getEgressShapingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if the traffic shaper is enabled for egress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#egress_shaping_enabled DistributedVirtualSwitch#egress_shaping_enabled}

---

##### `egressShapingPeakBandwidth`<sup>Optional</sup> <a name="egressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingPeakBandwidth"></a>

```java
public java.lang.Number getEgressShapingPeakBandwidth();
```

- *Type:* java.lang.Number

The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#egress_shaping_peak_bandwidth DistributedVirtualSwitch#egress_shaping_peak_bandwidth}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.failback"></a>

```java
public java.lang.Object getFailback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#failback DistributedVirtualSwitch#failback}

---

##### `faulttoleranceMaximumMbit`<sup>Optional</sup> <a name="faulttoleranceMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceMaximumMbit"></a>

```java
public java.lang.Number getFaulttoleranceMaximumMbit();
```

- *Type:* java.lang.Number

The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#faulttolerance_maximum_mbit DistributedVirtualSwitch#faulttolerance_maximum_mbit}

---

##### `faulttoleranceReservationMbit`<sup>Optional</sup> <a name="faulttoleranceReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceReservationMbit"></a>

```java
public java.lang.Number getFaulttoleranceReservationMbit();
```

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#faulttolerance_reservation_mbit DistributedVirtualSwitch#faulttolerance_reservation_mbit}

---

##### `faulttoleranceShareCount`<sup>Optional</sup> <a name="faulttoleranceShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareCount"></a>

```java
public java.lang.Number getFaulttoleranceShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to the faultTolerance traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#faulttolerance_share_count DistributedVirtualSwitch#faulttolerance_share_count}

---

##### `faulttoleranceShareLevel`<sup>Optional</sup> <a name="faulttoleranceShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareLevel"></a>

```java
public java.lang.String getFaulttoleranceShareLevel();
```

- *Type:* java.lang.String

The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#faulttolerance_share_level DistributedVirtualSwitch#faulttolerance_share_level}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The folder to create this virtual switch in, relative to the datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#folder DistributedVirtualSwitch#folder}

---

##### `hbrMaximumMbit`<sup>Optional</sup> <a name="hbrMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrMaximumMbit"></a>

```java
public java.lang.Number getHbrMaximumMbit();
```

- *Type:* java.lang.Number

The maximum allowed usage for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#hbr_maximum_mbit DistributedVirtualSwitch#hbr_maximum_mbit}

---

##### `hbrReservationMbit`<sup>Optional</sup> <a name="hbrReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrReservationMbit"></a>

```java
public java.lang.Number getHbrReservationMbit();
```

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#hbr_reservation_mbit DistributedVirtualSwitch#hbr_reservation_mbit}

---

##### `hbrShareCount`<sup>Optional</sup> <a name="hbrShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareCount"></a>

```java
public java.lang.Number getHbrShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to the hbr traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#hbr_share_count DistributedVirtualSwitch#hbr_share_count}

---

##### `hbrShareLevel`<sup>Optional</sup> <a name="hbrShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareLevel"></a>

```java
public java.lang.String getHbrShareLevel();
```

- *Type:* java.lang.String

The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#hbr_share_level DistributedVirtualSwitch#hbr_share_level}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.host"></a>

```java
public java.lang.Object getHost();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#host DistributedVirtualSwitch#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreOtherPvlanMappings`<sup>Optional</sup> <a name="ignoreOtherPvlanMappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ignoreOtherPvlanMappings"></a>

```java
public java.lang.Object getIgnoreOtherPvlanMappings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to ignore existing PVLAN mappings not managed by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#ignore_other_pvlan_mappings DistributedVirtualSwitch#ignore_other_pvlan_mappings}

---

##### `ingressShapingAverageBandwidth`<sup>Optional</sup> <a name="ingressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingAverageBandwidth"></a>

```java
public java.lang.Number getIngressShapingAverageBandwidth();
```

- *Type:* java.lang.Number

The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#ingress_shaping_average_bandwidth DistributedVirtualSwitch#ingress_shaping_average_bandwidth}

---

##### `ingressShapingBurstSize`<sup>Optional</sup> <a name="ingressShapingBurstSize" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingBurstSize"></a>

```java
public java.lang.Number getIngressShapingBurstSize();
```

- *Type:* java.lang.Number

The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#ingress_shaping_burst_size DistributedVirtualSwitch#ingress_shaping_burst_size}

---

##### `ingressShapingEnabled`<sup>Optional</sup> <a name="ingressShapingEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingEnabled"></a>

```java
public java.lang.Object getIngressShapingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if the traffic shaper is enabled for ingress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#ingress_shaping_enabled DistributedVirtualSwitch#ingress_shaping_enabled}

---

##### `ingressShapingPeakBandwidth`<sup>Optional</sup> <a name="ingressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingPeakBandwidth"></a>

```java
public java.lang.Number getIngressShapingPeakBandwidth();
```

- *Type:* java.lang.Number

The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#ingress_shaping_peak_bandwidth DistributedVirtualSwitch#ingress_shaping_peak_bandwidth}

---

##### `ipv4Address`<sup>Optional</sup> <a name="ipv4Address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

The IPv4 address of the switch.

This can be used to see the DVS as a unique device with NetFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#ipv4_address DistributedVirtualSwitch#ipv4_address}

---

##### `iscsiMaximumMbit`<sup>Optional</sup> <a name="iscsiMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiMaximumMbit"></a>

```java
public java.lang.Number getIscsiMaximumMbit();
```

- *Type:* java.lang.Number

The maximum allowed usage for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#iscsi_maximum_mbit DistributedVirtualSwitch#iscsi_maximum_mbit}

---

##### `iscsiReservationMbit`<sup>Optional</sup> <a name="iscsiReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiReservationMbit"></a>

```java
public java.lang.Number getIscsiReservationMbit();
```

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#iscsi_reservation_mbit DistributedVirtualSwitch#iscsi_reservation_mbit}

---

##### `iscsiShareCount`<sup>Optional</sup> <a name="iscsiShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareCount"></a>

```java
public java.lang.Number getIscsiShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to the iSCSI traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#iscsi_share_count DistributedVirtualSwitch#iscsi_share_count}

---

##### `iscsiShareLevel`<sup>Optional</sup> <a name="iscsiShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareLevel"></a>

```java
public java.lang.String getIscsiShareLevel();
```

- *Type:* java.lang.String

The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#iscsi_share_level DistributedVirtualSwitch#iscsi_share_level}

---

##### `lacpApiVersion`<sup>Optional</sup> <a name="lacpApiVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpApiVersion"></a>

```java
public java.lang.String getLacpApiVersion();
```

- *Type:* java.lang.String

The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#lacp_api_version DistributedVirtualSwitch#lacp_api_version}

---

##### `lacpEnabled`<sup>Optional</sup> <a name="lacpEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpEnabled"></a>

```java
public java.lang.Object getLacpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to enable LACP on all uplink ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#lacp_enabled DistributedVirtualSwitch#lacp_enabled}

---

##### `lacpMode`<sup>Optional</sup> <a name="lacpMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpMode"></a>

```java
public java.lang.String getLacpMode();
```

- *Type:* java.lang.String

The uplink LACP mode to use. Can be one of active or passive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#lacp_mode DistributedVirtualSwitch#lacp_mode}

---

##### `linkDiscoveryOperation`<sup>Optional</sup> <a name="linkDiscoveryOperation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryOperation"></a>

```java
public java.lang.String getLinkDiscoveryOperation();
```

- *Type:* java.lang.String

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#link_discovery_operation DistributedVirtualSwitch#link_discovery_operation}

---

##### `linkDiscoveryProtocol`<sup>Optional</sup> <a name="linkDiscoveryProtocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryProtocol"></a>

```java
public java.lang.String getLinkDiscoveryProtocol();
```

- *Type:* java.lang.String

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#link_discovery_protocol DistributedVirtualSwitch#link_discovery_protocol}

---

##### `managementMaximumMbit`<sup>Optional</sup> <a name="managementMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementMaximumMbit"></a>

```java
public java.lang.Number getManagementMaximumMbit();
```

- *Type:* java.lang.Number

The maximum allowed usage for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#management_maximum_mbit DistributedVirtualSwitch#management_maximum_mbit}

---

##### `managementReservationMbit`<sup>Optional</sup> <a name="managementReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementReservationMbit"></a>

```java
public java.lang.Number getManagementReservationMbit();
```

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#management_reservation_mbit DistributedVirtualSwitch#management_reservation_mbit}

---

##### `managementShareCount`<sup>Optional</sup> <a name="managementShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareCount"></a>

```java
public java.lang.Number getManagementShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to the management traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#management_share_count DistributedVirtualSwitch#management_share_count}

---

##### `managementShareLevel`<sup>Optional</sup> <a name="managementShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareLevel"></a>

```java
public java.lang.String getManagementShareLevel();
```

- *Type:* java.lang.String

The allocation level for the management traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#management_share_level DistributedVirtualSwitch#management_share_level}

---

##### `maxMtu`<sup>Optional</sup> <a name="maxMtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.maxMtu"></a>

```java
public java.lang.Number getMaxMtu();
```

- *Type:* java.lang.Number

The maximum MTU on the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#max_mtu DistributedVirtualSwitch#max_mtu}

---

##### `multicastFilteringMode`<sup>Optional</sup> <a name="multicastFilteringMode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.multicastFilteringMode"></a>

```java
public java.lang.String getMulticastFilteringMode();
```

- *Type:* java.lang.String

The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#multicast_filtering_mode DistributedVirtualSwitch#multicast_filtering_mode}

---

##### `netflowActiveFlowTimeout`<sup>Optional</sup> <a name="netflowActiveFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowActiveFlowTimeout"></a>

```java
public java.lang.Number getNetflowActiveFlowTimeout();
```

- *Type:* java.lang.Number

The number of seconds after which active flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_active_flow_timeout DistributedVirtualSwitch#netflow_active_flow_timeout}

---

##### `netflowCollectorIpAddress`<sup>Optional</sup> <a name="netflowCollectorIpAddress" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorIpAddress"></a>

```java
public java.lang.String getNetflowCollectorIpAddress();
```

- *Type:* java.lang.String

IP address for the netflow collector, using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_collector_ip_address DistributedVirtualSwitch#netflow_collector_ip_address}

---

##### `netflowCollectorPort`<sup>Optional</sup> <a name="netflowCollectorPort" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorPort"></a>

```java
public java.lang.Number getNetflowCollectorPort();
```

- *Type:* java.lang.Number

The port for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_collector_port DistributedVirtualSwitch#netflow_collector_port}

---

##### `netflowEnabled`<sup>Optional</sup> <a name="netflowEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowEnabled"></a>

```java
public java.lang.Object getNetflowEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether to enable netflow on all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_enabled DistributedVirtualSwitch#netflow_enabled}

---

##### `netflowIdleFlowTimeout`<sup>Optional</sup> <a name="netflowIdleFlowTimeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowIdleFlowTimeout"></a>

```java
public java.lang.Number getNetflowIdleFlowTimeout();
```

- *Type:* java.lang.Number

The number of seconds after which idle flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_idle_flow_timeout DistributedVirtualSwitch#netflow_idle_flow_timeout}

---

##### `netflowInternalFlowsOnly`<sup>Optional</sup> <a name="netflowInternalFlowsOnly" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowInternalFlowsOnly"></a>

```java
public java.lang.Object getNetflowInternalFlowsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to limit analysis to traffic that has both source and destination served by the same host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_internal_flows_only DistributedVirtualSwitch#netflow_internal_flows_only}

---

##### `netflowObservationDomainId`<sup>Optional</sup> <a name="netflowObservationDomainId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowObservationDomainId"></a>

```java
public java.lang.Number getNetflowObservationDomainId();
```

- *Type:* java.lang.Number

The observation Domain ID for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_observation_domain_id DistributedVirtualSwitch#netflow_observation_domain_id}

---

##### `netflowSamplingRate`<sup>Optional</sup> <a name="netflowSamplingRate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowSamplingRate"></a>

```java
public java.lang.Number getNetflowSamplingRate();
```

- *Type:* java.lang.Number

The ratio of total number of packets to the number of packets analyzed.

Set to 0 to disable sampling, meaning that all packets are analyzed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#netflow_sampling_rate DistributedVirtualSwitch#netflow_sampling_rate}

---

##### `networkResourceControlEnabled`<sup>Optional</sup> <a name="networkResourceControlEnabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlEnabled"></a>

```java
public java.lang.Object getNetworkResourceControlEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#network_resource_control_enabled DistributedVirtualSwitch#network_resource_control_enabled}

---

##### `networkResourceControlVersion`<sup>Optional</sup> <a name="networkResourceControlVersion" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlVersion"></a>

```java
public java.lang.String getNetworkResourceControlVersion();
```

- *Type:* java.lang.String

The network I/O control version to use. Can be one of version2 or version3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#network_resource_control_version DistributedVirtualSwitch#network_resource_control_version}

---

##### `nfsMaximumMbit`<sup>Optional</sup> <a name="nfsMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsMaximumMbit"></a>

```java
public java.lang.Number getNfsMaximumMbit();
```

- *Type:* java.lang.Number

The maximum allowed usage for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#nfs_maximum_mbit DistributedVirtualSwitch#nfs_maximum_mbit}

---

##### `nfsReservationMbit`<sup>Optional</sup> <a name="nfsReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsReservationMbit"></a>

```java
public java.lang.Number getNfsReservationMbit();
```

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#nfs_reservation_mbit DistributedVirtualSwitch#nfs_reservation_mbit}

---

##### `nfsShareCount`<sup>Optional</sup> <a name="nfsShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareCount"></a>

```java
public java.lang.Number getNfsShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to the nfs traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#nfs_share_count DistributedVirtualSwitch#nfs_share_count}

---

##### `nfsShareLevel`<sup>Optional</sup> <a name="nfsShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareLevel"></a>

```java
public java.lang.String getNfsShareLevel();
```

- *Type:* java.lang.String

The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#nfs_share_level DistributedVirtualSwitch#nfs_share_level}

---

##### `notifySwitches`<sup>Optional</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.notifySwitches"></a>

```java
public java.lang.Object getNotifySwitches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#notify_switches DistributedVirtualSwitch#notify_switches}

---

##### `portPrivateSecondaryVlanId`<sup>Optional</sup> <a name="portPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.portPrivateSecondaryVlanId"></a>

```java
public java.lang.Number getPortPrivateSecondaryVlanId();
```

- *Type:* java.lang.Number

The secondary VLAN ID for this port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#port_private_secondary_vlan_id DistributedVirtualSwitch#port_private_secondary_vlan_id}

---

##### `pvlanMapping`<sup>Optional</sup> <a name="pvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.pvlanMapping"></a>

```java
public java.lang.Object getPvlanMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>>

pvlan_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#pvlan_mapping DistributedVirtualSwitch#pvlan_mapping}

---

##### `standbyUplinks`<sup>Optional</sup> <a name="standbyUplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.standbyUplinks"></a>

```java
public java.util.List<java.lang.String> getStandbyUplinks();
```

- *Type:* java.util.List<java.lang.String>

List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#standby_uplinks DistributedVirtualSwitch#standby_uplinks}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#tags DistributedVirtualSwitch#tags}

---

##### `teamingPolicy`<sup>Optional</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.teamingPolicy"></a>

```java
public java.lang.String getTeamingPolicy();
```

- *Type:* java.lang.String

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#teaming_policy DistributedVirtualSwitch#teaming_policy}

---

##### `txUplink`<sup>Optional</sup> <a name="txUplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.txUplink"></a>

```java
public java.lang.Object getTxUplink();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#tx_uplink DistributedVirtualSwitch#tx_uplink}

---

##### `uplinks`<sup>Optional</sup> <a name="uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.uplinks"></a>

```java
public java.util.List<java.lang.String> getUplinks();
```

- *Type:* java.util.List<java.lang.String>

A list of uplink ports.

The contents of this list control both the uplink count and names of the uplinks on the DVS across hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#uplinks DistributedVirtualSwitch#uplinks}

---

##### `vdpMaximumMbit`<sup>Optional</sup> <a name="vdpMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpMaximumMbit"></a>

```java
public java.lang.Number getVdpMaximumMbit();
```

- *Type:* java.lang.Number

The maximum allowed usage for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vdp_maximum_mbit DistributedVirtualSwitch#vdp_maximum_mbit}

---

##### `vdpReservationMbit`<sup>Optional</sup> <a name="vdpReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpReservationMbit"></a>

```java
public java.lang.Number getVdpReservationMbit();
```

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vdp_reservation_mbit DistributedVirtualSwitch#vdp_reservation_mbit}

---

##### `vdpShareCount`<sup>Optional</sup> <a name="vdpShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareCount"></a>

```java
public java.lang.Number getVdpShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to the vdp traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vdp_share_count DistributedVirtualSwitch#vdp_share_count}

---

##### `vdpShareLevel`<sup>Optional</sup> <a name="vdpShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareLevel"></a>

```java
public java.lang.String getVdpShareLevel();
```

- *Type:* java.lang.String

The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vdp_share_level DistributedVirtualSwitch#vdp_share_level}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of this virtual switch.

Allowed versions are 8.0.3, 8.0.0, 7.0.3, 7.0.2, 7.0.0, 6.6.0, 6.5.0, 6.0.0, 5.5.0, 5.1.0, and 5.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#version DistributedVirtualSwitch#version}

---

##### `virtualmachineMaximumMbit`<sup>Optional</sup> <a name="virtualmachineMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineMaximumMbit"></a>

```java
public java.lang.Number getVirtualmachineMaximumMbit();
```

- *Type:* java.lang.Number

The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#virtualmachine_maximum_mbit DistributedVirtualSwitch#virtualmachine_maximum_mbit}

---

##### `virtualmachineReservationMbit`<sup>Optional</sup> <a name="virtualmachineReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineReservationMbit"></a>

```java
public java.lang.Number getVirtualmachineReservationMbit();
```

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#virtualmachine_reservation_mbit DistributedVirtualSwitch#virtualmachine_reservation_mbit}

---

##### `virtualmachineShareCount`<sup>Optional</sup> <a name="virtualmachineShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareCount"></a>

```java
public java.lang.Number getVirtualmachineShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to the virtualMachine traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#virtualmachine_share_count DistributedVirtualSwitch#virtualmachine_share_count}

---

##### `virtualmachineShareLevel`<sup>Optional</sup> <a name="virtualmachineShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareLevel"></a>

```java
public java.lang.String getVirtualmachineShareLevel();
```

- *Type:* java.lang.String

The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#virtualmachine_share_level DistributedVirtualSwitch#virtualmachine_share_level}

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanId"></a>

```java
public java.lang.Number getVlanId();
```

- *Type:* java.lang.Number

The VLAN ID for single VLAN mode. 0 denotes no VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vlan_id DistributedVirtualSwitch#vlan_id}

---

##### `vlanRange`<sup>Optional</sup> <a name="vlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanRange"></a>

```java
public java.lang.Object getVlanRange();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>>

vlan_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vlan_range DistributedVirtualSwitch#vlan_range}

---

##### `vmotionMaximumMbit`<sup>Optional</sup> <a name="vmotionMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionMaximumMbit"></a>

```java
public java.lang.Number getVmotionMaximumMbit();
```

- *Type:* java.lang.Number

The maximum allowed usage for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vmotion_maximum_mbit DistributedVirtualSwitch#vmotion_maximum_mbit}

---

##### `vmotionReservationMbit`<sup>Optional</sup> <a name="vmotionReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionReservationMbit"></a>

```java
public java.lang.Number getVmotionReservationMbit();
```

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vmotion_reservation_mbit DistributedVirtualSwitch#vmotion_reservation_mbit}

---

##### `vmotionShareCount`<sup>Optional</sup> <a name="vmotionShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareCount"></a>

```java
public java.lang.Number getVmotionShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to the vmotion traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vmotion_share_count DistributedVirtualSwitch#vmotion_share_count}

---

##### `vmotionShareLevel`<sup>Optional</sup> <a name="vmotionShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareLevel"></a>

```java
public java.lang.String getVmotionShareLevel();
```

- *Type:* java.lang.String

The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vmotion_share_level DistributedVirtualSwitch#vmotion_share_level}

---

##### `vsanMaximumMbit`<sup>Optional</sup> <a name="vsanMaximumMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanMaximumMbit"></a>

```java
public java.lang.Number getVsanMaximumMbit();
```

- *Type:* java.lang.Number

The maximum allowed usage for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vsan_maximum_mbit DistributedVirtualSwitch#vsan_maximum_mbit}

---

##### `vsanReservationMbit`<sup>Optional</sup> <a name="vsanReservationMbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanReservationMbit"></a>

```java
public java.lang.Number getVsanReservationMbit();
```

- *Type:* java.lang.Number

The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vsan_reservation_mbit DistributedVirtualSwitch#vsan_reservation_mbit}

---

##### `vsanShareCount`<sup>Optional</sup> <a name="vsanShareCount" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareCount"></a>

```java
public java.lang.Number getVsanShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to the vsan traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vsan_share_count DistributedVirtualSwitch#vsan_share_count}

---

##### `vsanShareLevel`<sup>Optional</sup> <a name="vsanShareLevel" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareLevel"></a>

```java
public java.lang.String getVsanShareLevel();
```

- *Type:* java.lang.String

The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#vsan_share_level DistributedVirtualSwitch#vsan_share_level}

---

### DistributedVirtualSwitchHost <a name="DistributedVirtualSwitchHost" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitchHost;

DistributedVirtualSwitchHost.builder()
    .hostSystemId(java.lang.String)
//  .devices(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | The managed object ID of the host this specification applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.devices">devices</a></code> | <code>java.util.List<java.lang.String></code> | Name of the physical NIC to be added to the proxy switch. |

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.hostSystemId"></a>

```java
public java.lang.String getHostSystemId();
```

- *Type:* java.lang.String

The managed object ID of the host this specification applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#host_system_id DistributedVirtualSwitch#host_system_id}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.devices"></a>

```java
public java.util.List<java.lang.String> getDevices();
```

- *Type:* java.util.List<java.lang.String>

Name of the physical NIC to be added to the proxy switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#devices DistributedVirtualSwitch#devices}

---

### DistributedVirtualSwitchPvlanMapping <a name="DistributedVirtualSwitchPvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitchPvlanMapping;

DistributedVirtualSwitchPvlanMapping.builder()
    .primaryVlanId(java.lang.Number)
    .pvlanType(java.lang.String)
    .secondaryVlanId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.primaryVlanId">primaryVlanId</a></code> | <code>java.lang.Number</code> | The primary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.pvlanType">pvlanType</a></code> | <code>java.lang.String</code> | The private VLAN type. Valid values are promiscuous, community and isolated. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.secondaryVlanId">secondaryVlanId</a></code> | <code>java.lang.Number</code> | The secondary VLAN ID. |

---

##### `primaryVlanId`<sup>Required</sup> <a name="primaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.primaryVlanId"></a>

```java
public java.lang.Number getPrimaryVlanId();
```

- *Type:* java.lang.Number

The primary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#primary_vlan_id DistributedVirtualSwitch#primary_vlan_id}

---

##### `pvlanType`<sup>Required</sup> <a name="pvlanType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.pvlanType"></a>

```java
public java.lang.String getPvlanType();
```

- *Type:* java.lang.String

The private VLAN type. Valid values are promiscuous, community and isolated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#pvlan_type DistributedVirtualSwitch#pvlan_type}

---

##### `secondaryVlanId`<sup>Required</sup> <a name="secondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.secondaryVlanId"></a>

```java
public java.lang.Number getSecondaryVlanId();
```

- *Type:* java.lang.Number

The secondary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#secondary_vlan_id DistributedVirtualSwitch#secondary_vlan_id}

---

### DistributedVirtualSwitchVlanRange <a name="DistributedVirtualSwitchVlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitchVlanRange;

DistributedVirtualSwitchVlanRange.builder()
    .maxVlan(java.lang.Number)
    .minVlan(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.maxVlan">maxVlan</a></code> | <code>java.lang.Number</code> | The minimum VLAN to use in the range. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.minVlan">minVlan</a></code> | <code>java.lang.Number</code> | The minimum VLAN to use in the range. |

---

##### `maxVlan`<sup>Required</sup> <a name="maxVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.maxVlan"></a>

```java
public java.lang.Number getMaxVlan();
```

- *Type:* java.lang.Number

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#max_vlan DistributedVirtualSwitch#max_vlan}

---

##### `minVlan`<sup>Required</sup> <a name="minVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.minVlan"></a>

```java
public java.lang.Number getMinVlan();
```

- *Type:* java.lang.Number

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch#min_vlan DistributedVirtualSwitch#min_vlan}

---

## Classes <a name="Classes" id="Classes"></a>

### DistributedVirtualSwitchHostList <a name="DistributedVirtualSwitchHostList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitchHostList;

new DistributedVirtualSwitchHostList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.get"></a>

```java
public DistributedVirtualSwitchHostOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>>

---


### DistributedVirtualSwitchHostOutputReference <a name="DistributedVirtualSwitchHostOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitchHostOutputReference;

new DistributedVirtualSwitchHostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDevices` <a name="resetDevices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resetDevices"></a>

```java
public void resetDevices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devicesInput">devicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemIdInput">hostSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devices">devices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `devicesInput`<sup>Optional</sup> <a name="devicesInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devicesInput"></a>

```java
public java.util.List<java.lang.String> getDevicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostSystemIdInput`<sup>Optional</sup> <a name="hostSystemIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemIdInput"></a>

```java
public java.lang.String getHostSystemIdInput();
```

- *Type:* java.lang.String

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devices"></a>

```java
public java.util.List<java.lang.String> getDevices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemId"></a>

```java
public java.lang.String getHostSystemId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>

---


### DistributedVirtualSwitchPvlanMappingList <a name="DistributedVirtualSwitchPvlanMappingList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitchPvlanMappingList;

new DistributedVirtualSwitchPvlanMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.get"></a>

```java
public DistributedVirtualSwitchPvlanMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>>

---


### DistributedVirtualSwitchPvlanMappingOutputReference <a name="DistributedVirtualSwitchPvlanMappingOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitchPvlanMappingOutputReference;

new DistributedVirtualSwitchPvlanMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanIdInput">primaryVlanIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanTypeInput">pvlanTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanIdInput">secondaryVlanIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanId">primaryVlanId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanType">pvlanType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanId">secondaryVlanId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryVlanIdInput`<sup>Optional</sup> <a name="primaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanIdInput"></a>

```java
public java.lang.Number getPrimaryVlanIdInput();
```

- *Type:* java.lang.Number

---

##### `pvlanTypeInput`<sup>Optional</sup> <a name="pvlanTypeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanTypeInput"></a>

```java
public java.lang.String getPvlanTypeInput();
```

- *Type:* java.lang.String

---

##### `secondaryVlanIdInput`<sup>Optional</sup> <a name="secondaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanIdInput"></a>

```java
public java.lang.Number getSecondaryVlanIdInput();
```

- *Type:* java.lang.Number

---

##### `primaryVlanId`<sup>Required</sup> <a name="primaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanId"></a>

```java
public java.lang.Number getPrimaryVlanId();
```

- *Type:* java.lang.Number

---

##### `pvlanType`<sup>Required</sup> <a name="pvlanType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanType"></a>

```java
public java.lang.String getPvlanType();
```

- *Type:* java.lang.String

---

##### `secondaryVlanId`<sup>Required</sup> <a name="secondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanId"></a>

```java
public java.lang.Number getSecondaryVlanId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>

---


### DistributedVirtualSwitchVlanRangeList <a name="DistributedVirtualSwitchVlanRangeList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitchVlanRangeList;

new DistributedVirtualSwitchVlanRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.get"></a>

```java
public DistributedVirtualSwitchVlanRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>>

---


### DistributedVirtualSwitchVlanRangeOutputReference <a name="DistributedVirtualSwitchVlanRangeOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch.DistributedVirtualSwitchVlanRangeOutputReference;

new DistributedVirtualSwitchVlanRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlanInput">maxVlanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlanInput">minVlanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlan">maxVlan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlan">minVlan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxVlanInput`<sup>Optional</sup> <a name="maxVlanInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlanInput"></a>

```java
public java.lang.Number getMaxVlanInput();
```

- *Type:* java.lang.Number

---

##### `minVlanInput`<sup>Optional</sup> <a name="minVlanInput" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlanInput"></a>

```java
public java.lang.Number getMinVlanInput();
```

- *Type:* java.lang.Number

---

##### `maxVlan`<sup>Required</sup> <a name="maxVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlan"></a>

```java
public java.lang.Number getMaxVlan();
```

- *Type:* java.lang.Number

---

##### `minVlan`<sup>Required</sup> <a name="minVlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlan"></a>

```java
public java.lang.Number getMinVlan();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>

---



