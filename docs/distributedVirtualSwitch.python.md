# `vsphere_distributed_virtual_switch`

Refer to the Terraform Registory for docs: [`vsphere_distributed_virtual_switch`](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch).

# `distributedVirtualSwitch` Submodule <a name="`distributedVirtualSwitch` Submodule" id="@cdktf/provider-vsphere.distributedVirtualSwitch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DistributedVirtualSwitch <a name="DistributedVirtualSwitch" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch vsphere_distributed_virtual_switch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitch(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  name: str,
  active_uplinks: typing.List[str] = None,
  allow_forged_transmits: typing.Union[bool, IResolvable] = None,
  allow_mac_changes: typing.Union[bool, IResolvable] = None,
  allow_promiscuous: typing.Union[bool, IResolvable] = None,
  backupnfc_maximum_mbit: typing.Union[int, float] = None,
  backupnfc_reservation_mbit: typing.Union[int, float] = None,
  backupnfc_share_count: typing.Union[int, float] = None,
  backupnfc_share_level: str = None,
  block_all_ports: typing.Union[bool, IResolvable] = None,
  check_beacon: typing.Union[bool, IResolvable] = None,
  contact_detail: str = None,
  contact_name: str = None,
  custom_attributes: typing.Mapping[str] = None,
  description: str = None,
  directpath_gen2_allowed: typing.Union[bool, IResolvable] = None,
  egress_shaping_average_bandwidth: typing.Union[int, float] = None,
  egress_shaping_burst_size: typing.Union[int, float] = None,
  egress_shaping_enabled: typing.Union[bool, IResolvable] = None,
  egress_shaping_peak_bandwidth: typing.Union[int, float] = None,
  failback: typing.Union[bool, IResolvable] = None,
  faulttolerance_maximum_mbit: typing.Union[int, float] = None,
  faulttolerance_reservation_mbit: typing.Union[int, float] = None,
  faulttolerance_share_count: typing.Union[int, float] = None,
  faulttolerance_share_level: str = None,
  folder: str = None,
  hbr_maximum_mbit: typing.Union[int, float] = None,
  hbr_reservation_mbit: typing.Union[int, float] = None,
  hbr_share_count: typing.Union[int, float] = None,
  hbr_share_level: str = None,
  host: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchHost]] = None,
  id: str = None,
  ignore_other_pvlan_mappings: typing.Union[bool, IResolvable] = None,
  ingress_shaping_average_bandwidth: typing.Union[int, float] = None,
  ingress_shaping_burst_size: typing.Union[int, float] = None,
  ingress_shaping_enabled: typing.Union[bool, IResolvable] = None,
  ingress_shaping_peak_bandwidth: typing.Union[int, float] = None,
  ipv4_address: str = None,
  iscsi_maximum_mbit: typing.Union[int, float] = None,
  iscsi_reservation_mbit: typing.Union[int, float] = None,
  iscsi_share_count: typing.Union[int, float] = None,
  iscsi_share_level: str = None,
  lacp_api_version: str = None,
  lacp_enabled: typing.Union[bool, IResolvable] = None,
  lacp_mode: str = None,
  link_discovery_operation: str = None,
  link_discovery_protocol: str = None,
  management_maximum_mbit: typing.Union[int, float] = None,
  management_reservation_mbit: typing.Union[int, float] = None,
  management_share_count: typing.Union[int, float] = None,
  management_share_level: str = None,
  max_mtu: typing.Union[int, float] = None,
  multicast_filtering_mode: str = None,
  netflow_active_flow_timeout: typing.Union[int, float] = None,
  netflow_collector_ip_address: str = None,
  netflow_collector_port: typing.Union[int, float] = None,
  netflow_enabled: typing.Union[bool, IResolvable] = None,
  netflow_idle_flow_timeout: typing.Union[int, float] = None,
  netflow_internal_flows_only: typing.Union[bool, IResolvable] = None,
  netflow_observation_domain_id: typing.Union[int, float] = None,
  netflow_sampling_rate: typing.Union[int, float] = None,
  network_resource_control_enabled: typing.Union[bool, IResolvable] = None,
  network_resource_control_version: str = None,
  nfs_maximum_mbit: typing.Union[int, float] = None,
  nfs_reservation_mbit: typing.Union[int, float] = None,
  nfs_share_count: typing.Union[int, float] = None,
  nfs_share_level: str = None,
  notify_switches: typing.Union[bool, IResolvable] = None,
  port_private_secondary_vlan_id: typing.Union[int, float] = None,
  pvlan_mapping: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchPvlanMapping]] = None,
  standby_uplinks: typing.List[str] = None,
  tags: typing.List[str] = None,
  teaming_policy: str = None,
  tx_uplink: typing.Union[bool, IResolvable] = None,
  uplinks: typing.List[str] = None,
  vdp_maximum_mbit: typing.Union[int, float] = None,
  vdp_reservation_mbit: typing.Union[int, float] = None,
  vdp_share_count: typing.Union[int, float] = None,
  vdp_share_level: str = None,
  version: str = None,
  virtualmachine_maximum_mbit: typing.Union[int, float] = None,
  virtualmachine_reservation_mbit: typing.Union[int, float] = None,
  virtualmachine_share_count: typing.Union[int, float] = None,
  virtualmachine_share_level: str = None,
  vlan_id: typing.Union[int, float] = None,
  vlan_range: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchVlanRange]] = None,
  vmotion_maximum_mbit: typing.Union[int, float] = None,
  vmotion_reservation_mbit: typing.Union[int, float] = None,
  vmotion_share_count: typing.Union[int, float] = None,
  vmotion_share_level: str = None,
  vsan_maximum_mbit: typing.Union[int, float] = None,
  vsan_reservation_mbit: typing.Union[int, float] = None,
  vsan_share_count: typing.Union[int, float] = None,
  vsan_share_level: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | The ID of the datacenter to create this virtual switch in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for the DVS. Must be unique in the folder that it is being created in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.activeUplinks">active_uplinks</a></code> | <code>typing.List[str]</code> | List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.allowForgedTransmits">allow_forged_transmits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.allowMacChanges">allow_mac_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.allowPromiscuous">allow_promiscuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcMaximumMbit">backupnfc_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcReservationMbit">backupnfc_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcShareCount">backupnfc_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the backupNfc traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcShareLevel">backupnfc_share_level</a></code> | <code>str</code> | The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.blockAllPorts">block_all_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to block all ports by default. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.checkBeacon">check_beacon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable beacon probing on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.contactDetail">contact_detail</a></code> | <code>str</code> | The contact detail for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.contactName">contact_name</a></code> | <code>str</code> | The contact name for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.directpathGen2Allowed">directpath_gen2_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow VMDirectPath Gen2 on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingAverageBandwidth">egress_shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The average egress bandwidth in bits per second if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingBurstSize">egress_shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | The maximum egress burst size allowed in bytes if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingEnabled">egress_shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if the traffic shaper is enabled for egress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingPeakBandwidth">egress_shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.failback">failback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceMaximumMbit">faulttolerance_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceReservationMbit">faulttolerance_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceShareCount">faulttolerance_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the faultTolerance traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceShareLevel">faulttolerance_share_level</a></code> | <code>str</code> | The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The folder to create this virtual switch in, relative to the datacenter. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrMaximumMbit">hbr_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrReservationMbit">hbr_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrShareCount">hbr_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the hbr traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrShareLevel">hbr_share_level</a></code> | <code>str</code> | The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.host">host</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>]]</code> | host block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ignoreOtherPvlanMappings">ignore_other_pvlan_mappings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to ignore existing PVLAN mappings not managed by this resource. Defaults to false. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingAverageBandwidth">ingress_shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The average ingress bandwidth in bits per second if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingBurstSize">ingress_shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingEnabled">ingress_shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if the traffic shaper is enabled for ingress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingPeakBandwidth">ingress_shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ipv4Address">ipv4_address</a></code> | <code>str</code> | The IPv4 address of the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiMaximumMbit">iscsi_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiReservationMbit">iscsi_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiShareCount">iscsi_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the iSCSI traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiShareLevel">iscsi_share_level</a></code> | <code>str</code> | The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lacpApiVersion">lacp_api_version</a></code> | <code>str</code> | The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lacpEnabled">lacp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to enable LACP on all uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lacpMode">lacp_mode</a></code> | <code>str</code> | The uplink LACP mode to use. Can be one of active or passive. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.linkDiscoveryOperation">link_discovery_operation</a></code> | <code>str</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.linkDiscoveryProtocol">link_discovery_protocol</a></code> | <code>str</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementMaximumMbit">management_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementReservationMbit">management_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementShareCount">management_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the management traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementShareLevel">management_share_level</a></code> | <code>str</code> | The allocation level for the management traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.maxMtu">max_mtu</a></code> | <code>typing.Union[int, float]</code> | The maximum MTU on the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.multicastFilteringMode">multicast_filtering_mode</a></code> | <code>str</code> | The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowActiveFlowTimeout">netflow_active_flow_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds after which active flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowCollectorIpAddress">netflow_collector_ip_address</a></code> | <code>str</code> | IP address for the netflow collector, using IPv4 or IPv6. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowCollectorPort">netflow_collector_port</a></code> | <code>typing.Union[int, float]</code> | The port for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowEnabled">netflow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to enable netflow on all ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowIdleFlowTimeout">netflow_idle_flow_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds after which idle flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowInternalFlowsOnly">netflow_internal_flows_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to limit analysis to traffic that has both source and destination served by the same host. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowObservationDomainId">netflow_observation_domain_id</a></code> | <code>typing.Union[int, float]</code> | The observation Domain ID for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowSamplingRate">netflow_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | The ratio of total number of packets to the number of packets analyzed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.networkResourceControlEnabled">network_resource_control_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.networkResourceControlVersion">network_resource_control_version</a></code> | <code>str</code> | The network I/O control version to use. Can be one of version2 or version3. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsMaximumMbit">nfs_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsReservationMbit">nfs_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsShareCount">nfs_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the nfs traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsShareLevel">nfs_share_level</a></code> | <code>str</code> | The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.notifySwitches">notify_switches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.portPrivateSecondaryVlanId">port_private_secondary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | The secondary VLAN ID for this port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.pvlanMapping">pvlan_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>]]</code> | pvlan_mapping block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.standbyUplinks">standby_uplinks</a></code> | <code>typing.List[str]</code> | List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.teamingPolicy">teaming_policy</a></code> | <code>str</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.txUplink">tx_uplink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.uplinks">uplinks</a></code> | <code>typing.List[str]</code> | A list of uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpMaximumMbit">vdp_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpReservationMbit">vdp_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpShareCount">vdp_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the vdp traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpShareLevel">vdp_share_level</a></code> | <code>str</code> | The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.version">version</a></code> | <code>str</code> | The version of this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineMaximumMbit">virtualmachine_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineReservationMbit">virtualmachine_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineShareCount">virtualmachine_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the virtualMachine traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineShareLevel">virtualmachine_share_level</a></code> | <code>str</code> | The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | The VLAN ID for single VLAN mode. 0 denotes no VLAN. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vlanRange">vlan_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>]]</code> | vlan_range block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionMaximumMbit">vmotion_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionReservationMbit">vmotion_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionShareCount">vmotion_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the vmotion traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionShareLevel">vmotion_share_level</a></code> | <code>str</code> | The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanMaximumMbit">vsan_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanReservationMbit">vsan_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanShareCount">vsan_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the vsan traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanShareLevel">vsan_share_level</a></code> | <code>str</code> | The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.datacenterId"></a>

- *Type:* str

The ID of the datacenter to create this virtual switch in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#datacenter_id DistributedVirtualSwitch#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.name"></a>

- *Type:* str

The name for the DVS. Must be unique in the folder that it is being created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#name DistributedVirtualSwitch#name}

---

##### `active_uplinks`<sup>Optional</sup> <a name="active_uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.activeUplinks"></a>

- *Type:* typing.List[str]

List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#active_uplinks DistributedVirtualSwitch#active_uplinks}

---

##### `allow_forged_transmits`<sup>Optional</sup> <a name="allow_forged_transmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.allowForgedTransmits"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#allow_forged_transmits DistributedVirtualSwitch#allow_forged_transmits}

---

##### `allow_mac_changes`<sup>Optional</sup> <a name="allow_mac_changes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.allowMacChanges"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#allow_mac_changes DistributedVirtualSwitch#allow_mac_changes}

---

##### `allow_promiscuous`<sup>Optional</sup> <a name="allow_promiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.allowPromiscuous"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#allow_promiscuous DistributedVirtualSwitch#allow_promiscuous}

---

##### `backupnfc_maximum_mbit`<sup>Optional</sup> <a name="backupnfc_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcMaximumMbit"></a>

- *Type:* typing.Union[int, float]

The maximum allowed usage for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#backupnfc_maximum_mbit DistributedVirtualSwitch#backupnfc_maximum_mbit}

---

##### `backupnfc_reservation_mbit`<sup>Optional</sup> <a name="backupnfc_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcReservationMbit"></a>

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#backupnfc_reservation_mbit DistributedVirtualSwitch#backupnfc_reservation_mbit}

---

##### `backupnfc_share_count`<sup>Optional</sup> <a name="backupnfc_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the backupNfc traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#backupnfc_share_count DistributedVirtualSwitch#backupnfc_share_count}

---

##### `backupnfc_share_level`<sup>Optional</sup> <a name="backupnfc_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.backupnfcShareLevel"></a>

- *Type:* str

The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#backupnfc_share_level DistributedVirtualSwitch#backupnfc_share_level}

---

##### `block_all_ports`<sup>Optional</sup> <a name="block_all_ports" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.blockAllPorts"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to block all ports by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#block_all_ports DistributedVirtualSwitch#block_all_ports}

---

##### `check_beacon`<sup>Optional</sup> <a name="check_beacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.checkBeacon"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable beacon probing on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#check_beacon DistributedVirtualSwitch#check_beacon}

---

##### `contact_detail`<sup>Optional</sup> <a name="contact_detail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.contactDetail"></a>

- *Type:* str

The contact detail for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#contact_detail DistributedVirtualSwitch#contact_detail}

---

##### `contact_name`<sup>Optional</sup> <a name="contact_name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.contactName"></a>

- *Type:* str

The contact name for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#contact_name DistributedVirtualSwitch#contact_name}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.customAttributes"></a>

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#custom_attributes DistributedVirtualSwitch#custom_attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.description"></a>

- *Type:* str

The description of the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#description DistributedVirtualSwitch#description}

---

##### `directpath_gen2_allowed`<sup>Optional</sup> <a name="directpath_gen2_allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.directpathGen2Allowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow VMDirectPath Gen2 on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#directpath_gen2_allowed DistributedVirtualSwitch#directpath_gen2_allowed}

---

##### `egress_shaping_average_bandwidth`<sup>Optional</sup> <a name="egress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingAverageBandwidth"></a>

- *Type:* typing.Union[int, float]

The average egress bandwidth in bits per second if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#egress_shaping_average_bandwidth DistributedVirtualSwitch#egress_shaping_average_bandwidth}

---

##### `egress_shaping_burst_size`<sup>Optional</sup> <a name="egress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingBurstSize"></a>

- *Type:* typing.Union[int, float]

The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#egress_shaping_burst_size DistributedVirtualSwitch#egress_shaping_burst_size}

---

##### `egress_shaping_enabled`<sup>Optional</sup> <a name="egress_shaping_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the traffic shaper is enabled for egress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#egress_shaping_enabled DistributedVirtualSwitch#egress_shaping_enabled}

---

##### `egress_shaping_peak_bandwidth`<sup>Optional</sup> <a name="egress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.egressShapingPeakBandwidth"></a>

- *Type:* typing.Union[int, float]

The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#egress_shaping_peak_bandwidth DistributedVirtualSwitch#egress_shaping_peak_bandwidth}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.failback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#failback DistributedVirtualSwitch#failback}

---

##### `faulttolerance_maximum_mbit`<sup>Optional</sup> <a name="faulttolerance_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceMaximumMbit"></a>

- *Type:* typing.Union[int, float]

The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#faulttolerance_maximum_mbit DistributedVirtualSwitch#faulttolerance_maximum_mbit}

---

##### `faulttolerance_reservation_mbit`<sup>Optional</sup> <a name="faulttolerance_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceReservationMbit"></a>

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#faulttolerance_reservation_mbit DistributedVirtualSwitch#faulttolerance_reservation_mbit}

---

##### `faulttolerance_share_count`<sup>Optional</sup> <a name="faulttolerance_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the faultTolerance traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#faulttolerance_share_count DistributedVirtualSwitch#faulttolerance_share_count}

---

##### `faulttolerance_share_level`<sup>Optional</sup> <a name="faulttolerance_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.faulttoleranceShareLevel"></a>

- *Type:* str

The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#faulttolerance_share_level DistributedVirtualSwitch#faulttolerance_share_level}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.folder"></a>

- *Type:* str

The folder to create this virtual switch in, relative to the datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#folder DistributedVirtualSwitch#folder}

---

##### `hbr_maximum_mbit`<sup>Optional</sup> <a name="hbr_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrMaximumMbit"></a>

- *Type:* typing.Union[int, float]

The maximum allowed usage for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#hbr_maximum_mbit DistributedVirtualSwitch#hbr_maximum_mbit}

---

##### `hbr_reservation_mbit`<sup>Optional</sup> <a name="hbr_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrReservationMbit"></a>

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#hbr_reservation_mbit DistributedVirtualSwitch#hbr_reservation_mbit}

---

##### `hbr_share_count`<sup>Optional</sup> <a name="hbr_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the hbr traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#hbr_share_count DistributedVirtualSwitch#hbr_share_count}

---

##### `hbr_share_level`<sup>Optional</sup> <a name="hbr_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.hbrShareLevel"></a>

- *Type:* str

The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#hbr_share_level DistributedVirtualSwitch#hbr_share_level}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.host"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>]]

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#host DistributedVirtualSwitch#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_other_pvlan_mappings`<sup>Optional</sup> <a name="ignore_other_pvlan_mappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ignoreOtherPvlanMappings"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to ignore existing PVLAN mappings not managed by this resource. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#ignore_other_pvlan_mappings DistributedVirtualSwitch#ignore_other_pvlan_mappings}

---

##### `ingress_shaping_average_bandwidth`<sup>Optional</sup> <a name="ingress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingAverageBandwidth"></a>

- *Type:* typing.Union[int, float]

The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#ingress_shaping_average_bandwidth DistributedVirtualSwitch#ingress_shaping_average_bandwidth}

---

##### `ingress_shaping_burst_size`<sup>Optional</sup> <a name="ingress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingBurstSize"></a>

- *Type:* typing.Union[int, float]

The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#ingress_shaping_burst_size DistributedVirtualSwitch#ingress_shaping_burst_size}

---

##### `ingress_shaping_enabled`<sup>Optional</sup> <a name="ingress_shaping_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the traffic shaper is enabled for ingress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#ingress_shaping_enabled DistributedVirtualSwitch#ingress_shaping_enabled}

---

##### `ingress_shaping_peak_bandwidth`<sup>Optional</sup> <a name="ingress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ingressShapingPeakBandwidth"></a>

- *Type:* typing.Union[int, float]

The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#ingress_shaping_peak_bandwidth DistributedVirtualSwitch#ingress_shaping_peak_bandwidth}

---

##### `ipv4_address`<sup>Optional</sup> <a name="ipv4_address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.ipv4Address"></a>

- *Type:* str

The IPv4 address of the switch.

This can be used to see the DVS as a unique device with NetFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#ipv4_address DistributedVirtualSwitch#ipv4_address}

---

##### `iscsi_maximum_mbit`<sup>Optional</sup> <a name="iscsi_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiMaximumMbit"></a>

- *Type:* typing.Union[int, float]

The maximum allowed usage for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#iscsi_maximum_mbit DistributedVirtualSwitch#iscsi_maximum_mbit}

---

##### `iscsi_reservation_mbit`<sup>Optional</sup> <a name="iscsi_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiReservationMbit"></a>

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#iscsi_reservation_mbit DistributedVirtualSwitch#iscsi_reservation_mbit}

---

##### `iscsi_share_count`<sup>Optional</sup> <a name="iscsi_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the iSCSI traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#iscsi_share_count DistributedVirtualSwitch#iscsi_share_count}

---

##### `iscsi_share_level`<sup>Optional</sup> <a name="iscsi_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.iscsiShareLevel"></a>

- *Type:* str

The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#iscsi_share_level DistributedVirtualSwitch#iscsi_share_level}

---

##### `lacp_api_version`<sup>Optional</sup> <a name="lacp_api_version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lacpApiVersion"></a>

- *Type:* str

The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#lacp_api_version DistributedVirtualSwitch#lacp_api_version}

---

##### `lacp_enabled`<sup>Optional</sup> <a name="lacp_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lacpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to enable LACP on all uplink ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#lacp_enabled DistributedVirtualSwitch#lacp_enabled}

---

##### `lacp_mode`<sup>Optional</sup> <a name="lacp_mode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.lacpMode"></a>

- *Type:* str

The uplink LACP mode to use. Can be one of active or passive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#lacp_mode DistributedVirtualSwitch#lacp_mode}

---

##### `link_discovery_operation`<sup>Optional</sup> <a name="link_discovery_operation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.linkDiscoveryOperation"></a>

- *Type:* str

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#link_discovery_operation DistributedVirtualSwitch#link_discovery_operation}

---

##### `link_discovery_protocol`<sup>Optional</sup> <a name="link_discovery_protocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.linkDiscoveryProtocol"></a>

- *Type:* str

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#link_discovery_protocol DistributedVirtualSwitch#link_discovery_protocol}

---

##### `management_maximum_mbit`<sup>Optional</sup> <a name="management_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementMaximumMbit"></a>

- *Type:* typing.Union[int, float]

The maximum allowed usage for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#management_maximum_mbit DistributedVirtualSwitch#management_maximum_mbit}

---

##### `management_reservation_mbit`<sup>Optional</sup> <a name="management_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementReservationMbit"></a>

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#management_reservation_mbit DistributedVirtualSwitch#management_reservation_mbit}

---

##### `management_share_count`<sup>Optional</sup> <a name="management_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the management traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#management_share_count DistributedVirtualSwitch#management_share_count}

---

##### `management_share_level`<sup>Optional</sup> <a name="management_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.managementShareLevel"></a>

- *Type:* str

The allocation level for the management traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#management_share_level DistributedVirtualSwitch#management_share_level}

---

##### `max_mtu`<sup>Optional</sup> <a name="max_mtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.maxMtu"></a>

- *Type:* typing.Union[int, float]

The maximum MTU on the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#max_mtu DistributedVirtualSwitch#max_mtu}

---

##### `multicast_filtering_mode`<sup>Optional</sup> <a name="multicast_filtering_mode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.multicastFilteringMode"></a>

- *Type:* str

The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#multicast_filtering_mode DistributedVirtualSwitch#multicast_filtering_mode}

---

##### `netflow_active_flow_timeout`<sup>Optional</sup> <a name="netflow_active_flow_timeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowActiveFlowTimeout"></a>

- *Type:* typing.Union[int, float]

The number of seconds after which active flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_active_flow_timeout DistributedVirtualSwitch#netflow_active_flow_timeout}

---

##### `netflow_collector_ip_address`<sup>Optional</sup> <a name="netflow_collector_ip_address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowCollectorIpAddress"></a>

- *Type:* str

IP address for the netflow collector, using IPv4 or IPv6.

IPv6 is supported in vSphere Distributed Switch Version 6.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_collector_ip_address DistributedVirtualSwitch#netflow_collector_ip_address}

---

##### `netflow_collector_port`<sup>Optional</sup> <a name="netflow_collector_port" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowCollectorPort"></a>

- *Type:* typing.Union[int, float]

The port for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_collector_port DistributedVirtualSwitch#netflow_collector_port}

---

##### `netflow_enabled`<sup>Optional</sup> <a name="netflow_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to enable netflow on all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_enabled DistributedVirtualSwitch#netflow_enabled}

---

##### `netflow_idle_flow_timeout`<sup>Optional</sup> <a name="netflow_idle_flow_timeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowIdleFlowTimeout"></a>

- *Type:* typing.Union[int, float]

The number of seconds after which idle flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_idle_flow_timeout DistributedVirtualSwitch#netflow_idle_flow_timeout}

---

##### `netflow_internal_flows_only`<sup>Optional</sup> <a name="netflow_internal_flows_only" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowInternalFlowsOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to limit analysis to traffic that has both source and destination served by the same host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_internal_flows_only DistributedVirtualSwitch#netflow_internal_flows_only}

---

##### `netflow_observation_domain_id`<sup>Optional</sup> <a name="netflow_observation_domain_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowObservationDomainId"></a>

- *Type:* typing.Union[int, float]

The observation Domain ID for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_observation_domain_id DistributedVirtualSwitch#netflow_observation_domain_id}

---

##### `netflow_sampling_rate`<sup>Optional</sup> <a name="netflow_sampling_rate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.netflowSamplingRate"></a>

- *Type:* typing.Union[int, float]

The ratio of total number of packets to the number of packets analyzed.

Set to 0 to disable sampling, meaning that all packets are analyzed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_sampling_rate DistributedVirtualSwitch#netflow_sampling_rate}

---

##### `network_resource_control_enabled`<sup>Optional</sup> <a name="network_resource_control_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.networkResourceControlEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#network_resource_control_enabled DistributedVirtualSwitch#network_resource_control_enabled}

---

##### `network_resource_control_version`<sup>Optional</sup> <a name="network_resource_control_version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.networkResourceControlVersion"></a>

- *Type:* str

The network I/O control version to use. Can be one of version2 or version3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#network_resource_control_version DistributedVirtualSwitch#network_resource_control_version}

---

##### `nfs_maximum_mbit`<sup>Optional</sup> <a name="nfs_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsMaximumMbit"></a>

- *Type:* typing.Union[int, float]

The maximum allowed usage for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#nfs_maximum_mbit DistributedVirtualSwitch#nfs_maximum_mbit}

---

##### `nfs_reservation_mbit`<sup>Optional</sup> <a name="nfs_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsReservationMbit"></a>

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#nfs_reservation_mbit DistributedVirtualSwitch#nfs_reservation_mbit}

---

##### `nfs_share_count`<sup>Optional</sup> <a name="nfs_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the nfs traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#nfs_share_count DistributedVirtualSwitch#nfs_share_count}

---

##### `nfs_share_level`<sup>Optional</sup> <a name="nfs_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.nfsShareLevel"></a>

- *Type:* str

The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#nfs_share_level DistributedVirtualSwitch#nfs_share_level}

---

##### `notify_switches`<sup>Optional</sup> <a name="notify_switches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.notifySwitches"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#notify_switches DistributedVirtualSwitch#notify_switches}

---

##### `port_private_secondary_vlan_id`<sup>Optional</sup> <a name="port_private_secondary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.portPrivateSecondaryVlanId"></a>

- *Type:* typing.Union[int, float]

The secondary VLAN ID for this port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#port_private_secondary_vlan_id DistributedVirtualSwitch#port_private_secondary_vlan_id}

---

##### `pvlan_mapping`<sup>Optional</sup> <a name="pvlan_mapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.pvlanMapping"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>]]

pvlan_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#pvlan_mapping DistributedVirtualSwitch#pvlan_mapping}

---

##### `standby_uplinks`<sup>Optional</sup> <a name="standby_uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.standbyUplinks"></a>

- *Type:* typing.List[str]

List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#standby_uplinks DistributedVirtualSwitch#standby_uplinks}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#tags DistributedVirtualSwitch#tags}

---

##### `teaming_policy`<sup>Optional</sup> <a name="teaming_policy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.teamingPolicy"></a>

- *Type:* str

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#teaming_policy DistributedVirtualSwitch#teaming_policy}

---

##### `tx_uplink`<sup>Optional</sup> <a name="tx_uplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.txUplink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#tx_uplink DistributedVirtualSwitch#tx_uplink}

---

##### `uplinks`<sup>Optional</sup> <a name="uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.uplinks"></a>

- *Type:* typing.List[str]

A list of uplink ports.

The contents of this list control both the uplink count and names of the uplinks on the DVS across hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#uplinks DistributedVirtualSwitch#uplinks}

---

##### `vdp_maximum_mbit`<sup>Optional</sup> <a name="vdp_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpMaximumMbit"></a>

- *Type:* typing.Union[int, float]

The maximum allowed usage for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vdp_maximum_mbit DistributedVirtualSwitch#vdp_maximum_mbit}

---

##### `vdp_reservation_mbit`<sup>Optional</sup> <a name="vdp_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpReservationMbit"></a>

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vdp_reservation_mbit DistributedVirtualSwitch#vdp_reservation_mbit}

---

##### `vdp_share_count`<sup>Optional</sup> <a name="vdp_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the vdp traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vdp_share_count DistributedVirtualSwitch#vdp_share_count}

---

##### `vdp_share_level`<sup>Optional</sup> <a name="vdp_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vdpShareLevel"></a>

- *Type:* str

The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vdp_share_level DistributedVirtualSwitch#vdp_share_level}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.version"></a>

- *Type:* str

The version of this virtual switch.

Allowed versions are 8.0.0, 7.0.3, 7.0.2, 7.0.0, 6.6.0, 6.5.0, 6.0.0, 5.5.0, 5.1.0, and 5.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#version DistributedVirtualSwitch#version}

---

##### `virtualmachine_maximum_mbit`<sup>Optional</sup> <a name="virtualmachine_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineMaximumMbit"></a>

- *Type:* typing.Union[int, float]

The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#virtualmachine_maximum_mbit DistributedVirtualSwitch#virtualmachine_maximum_mbit}

---

##### `virtualmachine_reservation_mbit`<sup>Optional</sup> <a name="virtualmachine_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineReservationMbit"></a>

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#virtualmachine_reservation_mbit DistributedVirtualSwitch#virtualmachine_reservation_mbit}

---

##### `virtualmachine_share_count`<sup>Optional</sup> <a name="virtualmachine_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the virtualMachine traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#virtualmachine_share_count DistributedVirtualSwitch#virtualmachine_share_count}

---

##### `virtualmachine_share_level`<sup>Optional</sup> <a name="virtualmachine_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.virtualmachineShareLevel"></a>

- *Type:* str

The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#virtualmachine_share_level DistributedVirtualSwitch#virtualmachine_share_level}

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vlanId"></a>

- *Type:* typing.Union[int, float]

The VLAN ID for single VLAN mode. 0 denotes no VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vlan_id DistributedVirtualSwitch#vlan_id}

---

##### `vlan_range`<sup>Optional</sup> <a name="vlan_range" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vlanRange"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>]]

vlan_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vlan_range DistributedVirtualSwitch#vlan_range}

---

##### `vmotion_maximum_mbit`<sup>Optional</sup> <a name="vmotion_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionMaximumMbit"></a>

- *Type:* typing.Union[int, float]

The maximum allowed usage for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vmotion_maximum_mbit DistributedVirtualSwitch#vmotion_maximum_mbit}

---

##### `vmotion_reservation_mbit`<sup>Optional</sup> <a name="vmotion_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionReservationMbit"></a>

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vmotion_reservation_mbit DistributedVirtualSwitch#vmotion_reservation_mbit}

---

##### `vmotion_share_count`<sup>Optional</sup> <a name="vmotion_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the vmotion traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vmotion_share_count DistributedVirtualSwitch#vmotion_share_count}

---

##### `vmotion_share_level`<sup>Optional</sup> <a name="vmotion_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vmotionShareLevel"></a>

- *Type:* str

The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vmotion_share_level DistributedVirtualSwitch#vmotion_share_level}

---

##### `vsan_maximum_mbit`<sup>Optional</sup> <a name="vsan_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanMaximumMbit"></a>

- *Type:* typing.Union[int, float]

The maximum allowed usage for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vsan_maximum_mbit DistributedVirtualSwitch#vsan_maximum_mbit}

---

##### `vsan_reservation_mbit`<sup>Optional</sup> <a name="vsan_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanReservationMbit"></a>

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vsan_reservation_mbit DistributedVirtualSwitch#vsan_reservation_mbit}

---

##### `vsan_share_count`<sup>Optional</sup> <a name="vsan_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the vsan traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vsan_share_count DistributedVirtualSwitch#vsan_share_count}

---

##### `vsan_share_level`<sup>Optional</sup> <a name="vsan_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.Initializer.parameter.vsanShareLevel"></a>

- *Type:* str

The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vsan_share_level DistributedVirtualSwitch#vsan_share_level}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putHost">put_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putPvlanMapping">put_pvlan_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putVlanRange">put_vlan_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetActiveUplinks">reset_active_uplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowForgedTransmits">reset_allow_forged_transmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowMacChanges">reset_allow_mac_changes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowPromiscuous">reset_allow_promiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcMaximumMbit">reset_backupnfc_maximum_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcReservationMbit">reset_backupnfc_reservation_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareCount">reset_backupnfc_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareLevel">reset_backupnfc_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBlockAllPorts">reset_block_all_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCheckBeacon">reset_check_beacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactDetail">reset_contact_detail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactName">reset_contact_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDirectpathGen2Allowed">reset_directpath_gen2_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingAverageBandwidth">reset_egress_shaping_average_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingBurstSize">reset_egress_shaping_burst_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingEnabled">reset_egress_shaping_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingPeakBandwidth">reset_egress_shaping_peak_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFailback">reset_failback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceMaximumMbit">reset_faulttolerance_maximum_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceReservationMbit">reset_faulttolerance_reservation_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareCount">reset_faulttolerance_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareLevel">reset_faulttolerance_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrMaximumMbit">reset_hbr_maximum_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrReservationMbit">reset_hbr_reservation_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareCount">reset_hbr_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareLevel">reset_hbr_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIgnoreOtherPvlanMappings">reset_ignore_other_pvlan_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingAverageBandwidth">reset_ingress_shaping_average_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingBurstSize">reset_ingress_shaping_burst_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingEnabled">reset_ingress_shaping_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingPeakBandwidth">reset_ingress_shaping_peak_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIpv4Address">reset_ipv4_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiMaximumMbit">reset_iscsi_maximum_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiReservationMbit">reset_iscsi_reservation_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareCount">reset_iscsi_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareLevel">reset_iscsi_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpApiVersion">reset_lacp_api_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpEnabled">reset_lacp_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpMode">reset_lacp_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryOperation">reset_link_discovery_operation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryProtocol">reset_link_discovery_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementMaximumMbit">reset_management_maximum_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementReservationMbit">reset_management_reservation_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareCount">reset_management_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareLevel">reset_management_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMaxMtu">reset_max_mtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMulticastFilteringMode">reset_multicast_filtering_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowActiveFlowTimeout">reset_netflow_active_flow_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorIpAddress">reset_netflow_collector_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorPort">reset_netflow_collector_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowEnabled">reset_netflow_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowIdleFlowTimeout">reset_netflow_idle_flow_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowInternalFlowsOnly">reset_netflow_internal_flows_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowObservationDomainId">reset_netflow_observation_domain_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowSamplingRate">reset_netflow_sampling_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlEnabled">reset_network_resource_control_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlVersion">reset_network_resource_control_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsMaximumMbit">reset_nfs_maximum_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsReservationMbit">reset_nfs_reservation_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareCount">reset_nfs_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareLevel">reset_nfs_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNotifySwitches">reset_notify_switches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPortPrivateSecondaryVlanId">reset_port_private_secondary_vlan_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPvlanMapping">reset_pvlan_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetStandbyUplinks">reset_standby_uplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTeamingPolicy">reset_teaming_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTxUplink">reset_tx_uplink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetUplinks">reset_uplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpMaximumMbit">reset_vdp_maximum_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpReservationMbit">reset_vdp_reservation_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareCount">reset_vdp_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareLevel">reset_vdp_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineMaximumMbit">reset_virtualmachine_maximum_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineReservationMbit">reset_virtualmachine_reservation_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareCount">reset_virtualmachine_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareLevel">reset_virtualmachine_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanId">reset_vlan_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanRange">reset_vlan_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionMaximumMbit">reset_vmotion_maximum_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionReservationMbit">reset_vmotion_reservation_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareCount">reset_vmotion_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareLevel">reset_vmotion_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanMaximumMbit">reset_vsan_maximum_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanReservationMbit">reset_vsan_reservation_mbit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareCount">reset_vsan_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareLevel">reset_vsan_share_level</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_host` <a name="put_host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putHost"></a>

```python
def put_host(
  value: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchHost]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putHost.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>]]

---

##### `put_pvlan_mapping` <a name="put_pvlan_mapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putPvlanMapping"></a>

```python
def put_pvlan_mapping(
  value: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchPvlanMapping]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putPvlanMapping.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>]]

---

##### `put_vlan_range` <a name="put_vlan_range" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putVlanRange"></a>

```python
def put_vlan_range(
  value: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchVlanRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.putVlanRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>]]

---

##### `reset_active_uplinks` <a name="reset_active_uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetActiveUplinks"></a>

```python
def reset_active_uplinks() -> None
```

##### `reset_allow_forged_transmits` <a name="reset_allow_forged_transmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowForgedTransmits"></a>

```python
def reset_allow_forged_transmits() -> None
```

##### `reset_allow_mac_changes` <a name="reset_allow_mac_changes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowMacChanges"></a>

```python
def reset_allow_mac_changes() -> None
```

##### `reset_allow_promiscuous` <a name="reset_allow_promiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetAllowPromiscuous"></a>

```python
def reset_allow_promiscuous() -> None
```

##### `reset_backupnfc_maximum_mbit` <a name="reset_backupnfc_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcMaximumMbit"></a>

```python
def reset_backupnfc_maximum_mbit() -> None
```

##### `reset_backupnfc_reservation_mbit` <a name="reset_backupnfc_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcReservationMbit"></a>

```python
def reset_backupnfc_reservation_mbit() -> None
```

##### `reset_backupnfc_share_count` <a name="reset_backupnfc_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareCount"></a>

```python
def reset_backupnfc_share_count() -> None
```

##### `reset_backupnfc_share_level` <a name="reset_backupnfc_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBackupnfcShareLevel"></a>

```python
def reset_backupnfc_share_level() -> None
```

##### `reset_block_all_ports` <a name="reset_block_all_ports" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetBlockAllPorts"></a>

```python
def reset_block_all_ports() -> None
```

##### `reset_check_beacon` <a name="reset_check_beacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCheckBeacon"></a>

```python
def reset_check_beacon() -> None
```

##### `reset_contact_detail` <a name="reset_contact_detail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactDetail"></a>

```python
def reset_contact_detail() -> None
```

##### `reset_contact_name` <a name="reset_contact_name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetContactName"></a>

```python
def reset_contact_name() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_directpath_gen2_allowed` <a name="reset_directpath_gen2_allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetDirectpathGen2Allowed"></a>

```python
def reset_directpath_gen2_allowed() -> None
```

##### `reset_egress_shaping_average_bandwidth` <a name="reset_egress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingAverageBandwidth"></a>

```python
def reset_egress_shaping_average_bandwidth() -> None
```

##### `reset_egress_shaping_burst_size` <a name="reset_egress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingBurstSize"></a>

```python
def reset_egress_shaping_burst_size() -> None
```

##### `reset_egress_shaping_enabled` <a name="reset_egress_shaping_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingEnabled"></a>

```python
def reset_egress_shaping_enabled() -> None
```

##### `reset_egress_shaping_peak_bandwidth` <a name="reset_egress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetEgressShapingPeakBandwidth"></a>

```python
def reset_egress_shaping_peak_bandwidth() -> None
```

##### `reset_failback` <a name="reset_failback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFailback"></a>

```python
def reset_failback() -> None
```

##### `reset_faulttolerance_maximum_mbit` <a name="reset_faulttolerance_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceMaximumMbit"></a>

```python
def reset_faulttolerance_maximum_mbit() -> None
```

##### `reset_faulttolerance_reservation_mbit` <a name="reset_faulttolerance_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceReservationMbit"></a>

```python
def reset_faulttolerance_reservation_mbit() -> None
```

##### `reset_faulttolerance_share_count` <a name="reset_faulttolerance_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareCount"></a>

```python
def reset_faulttolerance_share_count() -> None
```

##### `reset_faulttolerance_share_level` <a name="reset_faulttolerance_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFaulttoleranceShareLevel"></a>

```python
def reset_faulttolerance_share_level() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_hbr_maximum_mbit` <a name="reset_hbr_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrMaximumMbit"></a>

```python
def reset_hbr_maximum_mbit() -> None
```

##### `reset_hbr_reservation_mbit` <a name="reset_hbr_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrReservationMbit"></a>

```python
def reset_hbr_reservation_mbit() -> None
```

##### `reset_hbr_share_count` <a name="reset_hbr_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareCount"></a>

```python
def reset_hbr_share_count() -> None
```

##### `reset_hbr_share_level` <a name="reset_hbr_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHbrShareLevel"></a>

```python
def reset_hbr_share_level() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_other_pvlan_mappings` <a name="reset_ignore_other_pvlan_mappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIgnoreOtherPvlanMappings"></a>

```python
def reset_ignore_other_pvlan_mappings() -> None
```

##### `reset_ingress_shaping_average_bandwidth` <a name="reset_ingress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingAverageBandwidth"></a>

```python
def reset_ingress_shaping_average_bandwidth() -> None
```

##### `reset_ingress_shaping_burst_size` <a name="reset_ingress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingBurstSize"></a>

```python
def reset_ingress_shaping_burst_size() -> None
```

##### `reset_ingress_shaping_enabled` <a name="reset_ingress_shaping_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingEnabled"></a>

```python
def reset_ingress_shaping_enabled() -> None
```

##### `reset_ingress_shaping_peak_bandwidth` <a name="reset_ingress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIngressShapingPeakBandwidth"></a>

```python
def reset_ingress_shaping_peak_bandwidth() -> None
```

##### `reset_ipv4_address` <a name="reset_ipv4_address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIpv4Address"></a>

```python
def reset_ipv4_address() -> None
```

##### `reset_iscsi_maximum_mbit` <a name="reset_iscsi_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiMaximumMbit"></a>

```python
def reset_iscsi_maximum_mbit() -> None
```

##### `reset_iscsi_reservation_mbit` <a name="reset_iscsi_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiReservationMbit"></a>

```python
def reset_iscsi_reservation_mbit() -> None
```

##### `reset_iscsi_share_count` <a name="reset_iscsi_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareCount"></a>

```python
def reset_iscsi_share_count() -> None
```

##### `reset_iscsi_share_level` <a name="reset_iscsi_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetIscsiShareLevel"></a>

```python
def reset_iscsi_share_level() -> None
```

##### `reset_lacp_api_version` <a name="reset_lacp_api_version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpApiVersion"></a>

```python
def reset_lacp_api_version() -> None
```

##### `reset_lacp_enabled` <a name="reset_lacp_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpEnabled"></a>

```python
def reset_lacp_enabled() -> None
```

##### `reset_lacp_mode` <a name="reset_lacp_mode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLacpMode"></a>

```python
def reset_lacp_mode() -> None
```

##### `reset_link_discovery_operation` <a name="reset_link_discovery_operation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryOperation"></a>

```python
def reset_link_discovery_operation() -> None
```

##### `reset_link_discovery_protocol` <a name="reset_link_discovery_protocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetLinkDiscoveryProtocol"></a>

```python
def reset_link_discovery_protocol() -> None
```

##### `reset_management_maximum_mbit` <a name="reset_management_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementMaximumMbit"></a>

```python
def reset_management_maximum_mbit() -> None
```

##### `reset_management_reservation_mbit` <a name="reset_management_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementReservationMbit"></a>

```python
def reset_management_reservation_mbit() -> None
```

##### `reset_management_share_count` <a name="reset_management_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareCount"></a>

```python
def reset_management_share_count() -> None
```

##### `reset_management_share_level` <a name="reset_management_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetManagementShareLevel"></a>

```python
def reset_management_share_level() -> None
```

##### `reset_max_mtu` <a name="reset_max_mtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMaxMtu"></a>

```python
def reset_max_mtu() -> None
```

##### `reset_multicast_filtering_mode` <a name="reset_multicast_filtering_mode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetMulticastFilteringMode"></a>

```python
def reset_multicast_filtering_mode() -> None
```

##### `reset_netflow_active_flow_timeout` <a name="reset_netflow_active_flow_timeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowActiveFlowTimeout"></a>

```python
def reset_netflow_active_flow_timeout() -> None
```

##### `reset_netflow_collector_ip_address` <a name="reset_netflow_collector_ip_address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorIpAddress"></a>

```python
def reset_netflow_collector_ip_address() -> None
```

##### `reset_netflow_collector_port` <a name="reset_netflow_collector_port" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowCollectorPort"></a>

```python
def reset_netflow_collector_port() -> None
```

##### `reset_netflow_enabled` <a name="reset_netflow_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowEnabled"></a>

```python
def reset_netflow_enabled() -> None
```

##### `reset_netflow_idle_flow_timeout` <a name="reset_netflow_idle_flow_timeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowIdleFlowTimeout"></a>

```python
def reset_netflow_idle_flow_timeout() -> None
```

##### `reset_netflow_internal_flows_only` <a name="reset_netflow_internal_flows_only" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowInternalFlowsOnly"></a>

```python
def reset_netflow_internal_flows_only() -> None
```

##### `reset_netflow_observation_domain_id` <a name="reset_netflow_observation_domain_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowObservationDomainId"></a>

```python
def reset_netflow_observation_domain_id() -> None
```

##### `reset_netflow_sampling_rate` <a name="reset_netflow_sampling_rate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetflowSamplingRate"></a>

```python
def reset_netflow_sampling_rate() -> None
```

##### `reset_network_resource_control_enabled` <a name="reset_network_resource_control_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlEnabled"></a>

```python
def reset_network_resource_control_enabled() -> None
```

##### `reset_network_resource_control_version` <a name="reset_network_resource_control_version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNetworkResourceControlVersion"></a>

```python
def reset_network_resource_control_version() -> None
```

##### `reset_nfs_maximum_mbit` <a name="reset_nfs_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsMaximumMbit"></a>

```python
def reset_nfs_maximum_mbit() -> None
```

##### `reset_nfs_reservation_mbit` <a name="reset_nfs_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsReservationMbit"></a>

```python
def reset_nfs_reservation_mbit() -> None
```

##### `reset_nfs_share_count` <a name="reset_nfs_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareCount"></a>

```python
def reset_nfs_share_count() -> None
```

##### `reset_nfs_share_level` <a name="reset_nfs_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNfsShareLevel"></a>

```python
def reset_nfs_share_level() -> None
```

##### `reset_notify_switches` <a name="reset_notify_switches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetNotifySwitches"></a>

```python
def reset_notify_switches() -> None
```

##### `reset_port_private_secondary_vlan_id` <a name="reset_port_private_secondary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPortPrivateSecondaryVlanId"></a>

```python
def reset_port_private_secondary_vlan_id() -> None
```

##### `reset_pvlan_mapping` <a name="reset_pvlan_mapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetPvlanMapping"></a>

```python
def reset_pvlan_mapping() -> None
```

##### `reset_standby_uplinks` <a name="reset_standby_uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetStandbyUplinks"></a>

```python
def reset_standby_uplinks() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_teaming_policy` <a name="reset_teaming_policy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTeamingPolicy"></a>

```python
def reset_teaming_policy() -> None
```

##### `reset_tx_uplink` <a name="reset_tx_uplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetTxUplink"></a>

```python
def reset_tx_uplink() -> None
```

##### `reset_uplinks` <a name="reset_uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetUplinks"></a>

```python
def reset_uplinks() -> None
```

##### `reset_vdp_maximum_mbit` <a name="reset_vdp_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpMaximumMbit"></a>

```python
def reset_vdp_maximum_mbit() -> None
```

##### `reset_vdp_reservation_mbit` <a name="reset_vdp_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpReservationMbit"></a>

```python
def reset_vdp_reservation_mbit() -> None
```

##### `reset_vdp_share_count` <a name="reset_vdp_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareCount"></a>

```python
def reset_vdp_share_count() -> None
```

##### `reset_vdp_share_level` <a name="reset_vdp_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVdpShareLevel"></a>

```python
def reset_vdp_share_level() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_virtualmachine_maximum_mbit` <a name="reset_virtualmachine_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineMaximumMbit"></a>

```python
def reset_virtualmachine_maximum_mbit() -> None
```

##### `reset_virtualmachine_reservation_mbit` <a name="reset_virtualmachine_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineReservationMbit"></a>

```python
def reset_virtualmachine_reservation_mbit() -> None
```

##### `reset_virtualmachine_share_count` <a name="reset_virtualmachine_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareCount"></a>

```python
def reset_virtualmachine_share_count() -> None
```

##### `reset_virtualmachine_share_level` <a name="reset_virtualmachine_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVirtualmachineShareLevel"></a>

```python
def reset_virtualmachine_share_level() -> None
```

##### `reset_vlan_id` <a name="reset_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanId"></a>

```python
def reset_vlan_id() -> None
```

##### `reset_vlan_range` <a name="reset_vlan_range" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVlanRange"></a>

```python
def reset_vlan_range() -> None
```

##### `reset_vmotion_maximum_mbit` <a name="reset_vmotion_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionMaximumMbit"></a>

```python
def reset_vmotion_maximum_mbit() -> None
```

##### `reset_vmotion_reservation_mbit` <a name="reset_vmotion_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionReservationMbit"></a>

```python
def reset_vmotion_reservation_mbit() -> None
```

##### `reset_vmotion_share_count` <a name="reset_vmotion_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareCount"></a>

```python
def reset_vmotion_share_count() -> None
```

##### `reset_vmotion_share_level` <a name="reset_vmotion_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVmotionShareLevel"></a>

```python
def reset_vmotion_share_level() -> None
```

##### `reset_vsan_maximum_mbit` <a name="reset_vsan_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanMaximumMbit"></a>

```python
def reset_vsan_maximum_mbit() -> None
```

##### `reset_vsan_reservation_mbit` <a name="reset_vsan_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanReservationMbit"></a>

```python
def reset_vsan_reservation_mbit() -> None
```

##### `reset_vsan_share_count` <a name="reset_vsan_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareCount"></a>

```python
def reset_vsan_share_count() -> None
```

##### `reset_vsan_share_level` <a name="reset_vsan_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.resetVsanShareLevel"></a>

```python
def reset_vsan_share_level() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitch.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.configVersion">config_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.host">host</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList">DistributedVirtualSwitchHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMapping">pvlan_mapping</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList">DistributedVirtualSwitchPvlanMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRange">vlan_range</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList">DistributedVirtualSwitchVlanRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinksInput">active_uplinks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmitsInput">allow_forged_transmits_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChangesInput">allow_mac_changes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuousInput">allow_promiscuous_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbitInput">backupnfc_maximum_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbitInput">backupnfc_reservation_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCountInput">backupnfc_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevelInput">backupnfc_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPortsInput">block_all_ports_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeaconInput">check_beacon_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetailInput">contact_detail_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactNameInput">contact_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributesInput">custom_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2AllowedInput">directpath_gen2_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidthInput">egress_shaping_average_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSizeInput">egress_shaping_burst_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabledInput">egress_shaping_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidthInput">egress_shaping_peak_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failbackInput">failback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbitInput">faulttolerance_maximum_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbitInput">faulttolerance_reservation_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCountInput">faulttolerance_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevelInput">faulttolerance_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbitInput">hbr_maximum_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbitInput">hbr_reservation_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCountInput">hbr_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevelInput">hbr_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hostInput">host_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappingsInput">ignore_other_pvlan_mappings_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidthInput">ingress_shaping_average_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSizeInput">ingress_shaping_burst_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabledInput">ingress_shaping_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidthInput">ingress_shaping_peak_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4AddressInput">ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbitInput">iscsi_maximum_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbitInput">iscsi_reservation_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCountInput">iscsi_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevelInput">iscsi_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersionInput">lacp_api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabledInput">lacp_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpModeInput">lacp_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperationInput">link_discovery_operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocolInput">link_discovery_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbitInput">management_maximum_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbitInput">management_reservation_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCountInput">management_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevelInput">management_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtuInput">max_mtu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringModeInput">multicast_filtering_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeoutInput">netflow_active_flow_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddressInput">netflow_collector_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPortInput">netflow_collector_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabledInput">netflow_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeoutInput">netflow_idle_flow_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnlyInput">netflow_internal_flows_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainIdInput">netflow_observation_domain_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRateInput">netflow_sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabledInput">network_resource_control_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersionInput">network_resource_control_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbitInput">nfs_maximum_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbitInput">nfs_reservation_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCountInput">nfs_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevelInput">nfs_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitchesInput">notify_switches_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanIdInput">port_private_secondary_vlan_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMappingInput">pvlan_mapping_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinksInput">standby_uplinks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicyInput">teaming_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplinkInput">tx_uplink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinksInput">uplinks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbitInput">vdp_maximum_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbitInput">vdp_reservation_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCountInput">vdp_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevelInput">vdp_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbitInput">virtualmachine_maximum_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbitInput">virtualmachine_reservation_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCountInput">virtualmachine_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevelInput">virtualmachine_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanIdInput">vlan_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRangeInput">vlan_range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbitInput">vmotion_maximum_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbitInput">vmotion_reservation_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCountInput">vmotion_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevelInput">vmotion_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbitInput">vsan_maximum_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbitInput">vsan_reservation_mbit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCountInput">vsan_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevelInput">vsan_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinks">active_uplinks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmits">allow_forged_transmits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChanges">allow_mac_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuous">allow_promiscuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbit">backupnfc_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbit">backupnfc_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCount">backupnfc_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevel">backupnfc_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPorts">block_all_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeacon">check_beacon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetail">contact_detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactName">contact_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2Allowed">directpath_gen2_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidth">egress_shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSize">egress_shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabled">egress_shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidth">egress_shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failback">failback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbit">faulttolerance_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbit">faulttolerance_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCount">faulttolerance_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevel">faulttolerance_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbit">hbr_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbit">hbr_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCount">hbr_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevel">hbr_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappings">ignore_other_pvlan_mappings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidth">ingress_shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSize">ingress_shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabled">ingress_shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidth">ingress_shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbit">iscsi_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbit">iscsi_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCount">iscsi_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevel">iscsi_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersion">lacp_api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabled">lacp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpMode">lacp_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperation">link_discovery_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocol">link_discovery_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbit">management_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbit">management_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCount">management_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevel">management_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtu">max_mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringMode">multicast_filtering_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeout">netflow_active_flow_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddress">netflow_collector_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPort">netflow_collector_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabled">netflow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeout">netflow_idle_flow_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnly">netflow_internal_flows_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainId">netflow_observation_domain_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRate">netflow_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabled">network_resource_control_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersion">network_resource_control_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbit">nfs_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbit">nfs_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCount">nfs_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevel">nfs_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitches">notify_switches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanId">port_private_secondary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinks">standby_uplinks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicy">teaming_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplink">tx_uplink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinks">uplinks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbit">vdp_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbit">vdp_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCount">vdp_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevel">vdp_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbit">virtualmachine_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbit">virtualmachine_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCount">virtualmachine_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevel">virtualmachine_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbit">vmotion_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbit">vmotion_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCount">vmotion_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevel">vmotion_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbit">vsan_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbit">vsan_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCount">vsan_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevel">vsan_share_level</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_version`<sup>Required</sup> <a name="config_version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.configVersion"></a>

```python
config_version: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.host"></a>

```python
host: DistributedVirtualSwitchHostList
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList">DistributedVirtualSwitchHostList</a>

---

##### `pvlan_mapping`<sup>Required</sup> <a name="pvlan_mapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMapping"></a>

```python
pvlan_mapping: DistributedVirtualSwitchPvlanMappingList
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList">DistributedVirtualSwitchPvlanMappingList</a>

---

##### `vlan_range`<sup>Required</sup> <a name="vlan_range" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRange"></a>

```python
vlan_range: DistributedVirtualSwitchVlanRangeList
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList">DistributedVirtualSwitchVlanRangeList</a>

---

##### `active_uplinks_input`<sup>Optional</sup> <a name="active_uplinks_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinksInput"></a>

```python
active_uplinks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_forged_transmits_input`<sup>Optional</sup> <a name="allow_forged_transmits_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmitsInput"></a>

```python
allow_forged_transmits_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_mac_changes_input`<sup>Optional</sup> <a name="allow_mac_changes_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChangesInput"></a>

```python
allow_mac_changes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_promiscuous_input`<sup>Optional</sup> <a name="allow_promiscuous_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuousInput"></a>

```python
allow_promiscuous_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backupnfc_maximum_mbit_input`<sup>Optional</sup> <a name="backupnfc_maximum_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbitInput"></a>

```python
backupnfc_maximum_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backupnfc_reservation_mbit_input`<sup>Optional</sup> <a name="backupnfc_reservation_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbitInput"></a>

```python
backupnfc_reservation_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backupnfc_share_count_input`<sup>Optional</sup> <a name="backupnfc_share_count_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCountInput"></a>

```python
backupnfc_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backupnfc_share_level_input`<sup>Optional</sup> <a name="backupnfc_share_level_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevelInput"></a>

```python
backupnfc_share_level_input: str
```

- *Type:* str

---

##### `block_all_ports_input`<sup>Optional</sup> <a name="block_all_ports_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPortsInput"></a>

```python
block_all_ports_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_beacon_input`<sup>Optional</sup> <a name="check_beacon_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeaconInput"></a>

```python
check_beacon_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `contact_detail_input`<sup>Optional</sup> <a name="contact_detail_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetailInput"></a>

```python
contact_detail_input: str
```

- *Type:* str

---

##### `contact_name_input`<sup>Optional</sup> <a name="contact_name_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactNameInput"></a>

```python
contact_name_input: str
```

- *Type:* str

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributesInput"></a>

```python
custom_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `directpath_gen2_allowed_input`<sup>Optional</sup> <a name="directpath_gen2_allowed_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2AllowedInput"></a>

```python
directpath_gen2_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `egress_shaping_average_bandwidth_input`<sup>Optional</sup> <a name="egress_shaping_average_bandwidth_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidthInput"></a>

```python
egress_shaping_average_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `egress_shaping_burst_size_input`<sup>Optional</sup> <a name="egress_shaping_burst_size_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSizeInput"></a>

```python
egress_shaping_burst_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `egress_shaping_enabled_input`<sup>Optional</sup> <a name="egress_shaping_enabled_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabledInput"></a>

```python
egress_shaping_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `egress_shaping_peak_bandwidth_input`<sup>Optional</sup> <a name="egress_shaping_peak_bandwidth_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidthInput"></a>

```python
egress_shaping_peak_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failback_input`<sup>Optional</sup> <a name="failback_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failbackInput"></a>

```python
failback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `faulttolerance_maximum_mbit_input`<sup>Optional</sup> <a name="faulttolerance_maximum_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbitInput"></a>

```python
faulttolerance_maximum_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `faulttolerance_reservation_mbit_input`<sup>Optional</sup> <a name="faulttolerance_reservation_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbitInput"></a>

```python
faulttolerance_reservation_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `faulttolerance_share_count_input`<sup>Optional</sup> <a name="faulttolerance_share_count_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCountInput"></a>

```python
faulttolerance_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `faulttolerance_share_level_input`<sup>Optional</sup> <a name="faulttolerance_share_level_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevelInput"></a>

```python
faulttolerance_share_level_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `hbr_maximum_mbit_input`<sup>Optional</sup> <a name="hbr_maximum_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbitInput"></a>

```python
hbr_maximum_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hbr_reservation_mbit_input`<sup>Optional</sup> <a name="hbr_reservation_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbitInput"></a>

```python
hbr_reservation_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hbr_share_count_input`<sup>Optional</sup> <a name="hbr_share_count_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCountInput"></a>

```python
hbr_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hbr_share_level_input`<sup>Optional</sup> <a name="hbr_share_level_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevelInput"></a>

```python
hbr_share_level_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hostInput"></a>

```python
host_input: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchHost]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_other_pvlan_mappings_input`<sup>Optional</sup> <a name="ignore_other_pvlan_mappings_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappingsInput"></a>

```python
ignore_other_pvlan_mappings_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ingress_shaping_average_bandwidth_input`<sup>Optional</sup> <a name="ingress_shaping_average_bandwidth_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidthInput"></a>

```python
ingress_shaping_average_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingress_shaping_burst_size_input`<sup>Optional</sup> <a name="ingress_shaping_burst_size_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSizeInput"></a>

```python
ingress_shaping_burst_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingress_shaping_enabled_input`<sup>Optional</sup> <a name="ingress_shaping_enabled_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabledInput"></a>

```python
ingress_shaping_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ingress_shaping_peak_bandwidth_input`<sup>Optional</sup> <a name="ingress_shaping_peak_bandwidth_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidthInput"></a>

```python
ingress_shaping_peak_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv4_address_input`<sup>Optional</sup> <a name="ipv4_address_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4AddressInput"></a>

```python
ipv4_address_input: str
```

- *Type:* str

---

##### `iscsi_maximum_mbit_input`<sup>Optional</sup> <a name="iscsi_maximum_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbitInput"></a>

```python
iscsi_maximum_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iscsi_reservation_mbit_input`<sup>Optional</sup> <a name="iscsi_reservation_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbitInput"></a>

```python
iscsi_reservation_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iscsi_share_count_input`<sup>Optional</sup> <a name="iscsi_share_count_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCountInput"></a>

```python
iscsi_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iscsi_share_level_input`<sup>Optional</sup> <a name="iscsi_share_level_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevelInput"></a>

```python
iscsi_share_level_input: str
```

- *Type:* str

---

##### `lacp_api_version_input`<sup>Optional</sup> <a name="lacp_api_version_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersionInput"></a>

```python
lacp_api_version_input: str
```

- *Type:* str

---

##### `lacp_enabled_input`<sup>Optional</sup> <a name="lacp_enabled_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabledInput"></a>

```python
lacp_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lacp_mode_input`<sup>Optional</sup> <a name="lacp_mode_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpModeInput"></a>

```python
lacp_mode_input: str
```

- *Type:* str

---

##### `link_discovery_operation_input`<sup>Optional</sup> <a name="link_discovery_operation_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperationInput"></a>

```python
link_discovery_operation_input: str
```

- *Type:* str

---

##### `link_discovery_protocol_input`<sup>Optional</sup> <a name="link_discovery_protocol_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocolInput"></a>

```python
link_discovery_protocol_input: str
```

- *Type:* str

---

##### `management_maximum_mbit_input`<sup>Optional</sup> <a name="management_maximum_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbitInput"></a>

```python
management_maximum_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `management_reservation_mbit_input`<sup>Optional</sup> <a name="management_reservation_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbitInput"></a>

```python
management_reservation_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `management_share_count_input`<sup>Optional</sup> <a name="management_share_count_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCountInput"></a>

```python
management_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `management_share_level_input`<sup>Optional</sup> <a name="management_share_level_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevelInput"></a>

```python
management_share_level_input: str
```

- *Type:* str

---

##### `max_mtu_input`<sup>Optional</sup> <a name="max_mtu_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtuInput"></a>

```python
max_mtu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multicast_filtering_mode_input`<sup>Optional</sup> <a name="multicast_filtering_mode_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringModeInput"></a>

```python
multicast_filtering_mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `netflow_active_flow_timeout_input`<sup>Optional</sup> <a name="netflow_active_flow_timeout_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeoutInput"></a>

```python
netflow_active_flow_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `netflow_collector_ip_address_input`<sup>Optional</sup> <a name="netflow_collector_ip_address_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddressInput"></a>

```python
netflow_collector_ip_address_input: str
```

- *Type:* str

---

##### `netflow_collector_port_input`<sup>Optional</sup> <a name="netflow_collector_port_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPortInput"></a>

```python
netflow_collector_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `netflow_enabled_input`<sup>Optional</sup> <a name="netflow_enabled_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabledInput"></a>

```python
netflow_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `netflow_idle_flow_timeout_input`<sup>Optional</sup> <a name="netflow_idle_flow_timeout_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeoutInput"></a>

```python
netflow_idle_flow_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `netflow_internal_flows_only_input`<sup>Optional</sup> <a name="netflow_internal_flows_only_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnlyInput"></a>

```python
netflow_internal_flows_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `netflow_observation_domain_id_input`<sup>Optional</sup> <a name="netflow_observation_domain_id_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainIdInput"></a>

```python
netflow_observation_domain_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `netflow_sampling_rate_input`<sup>Optional</sup> <a name="netflow_sampling_rate_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRateInput"></a>

```python
netflow_sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_resource_control_enabled_input`<sup>Optional</sup> <a name="network_resource_control_enabled_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabledInput"></a>

```python
network_resource_control_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_resource_control_version_input`<sup>Optional</sup> <a name="network_resource_control_version_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersionInput"></a>

```python
network_resource_control_version_input: str
```

- *Type:* str

---

##### `nfs_maximum_mbit_input`<sup>Optional</sup> <a name="nfs_maximum_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbitInput"></a>

```python
nfs_maximum_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nfs_reservation_mbit_input`<sup>Optional</sup> <a name="nfs_reservation_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbitInput"></a>

```python
nfs_reservation_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nfs_share_count_input`<sup>Optional</sup> <a name="nfs_share_count_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCountInput"></a>

```python
nfs_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nfs_share_level_input`<sup>Optional</sup> <a name="nfs_share_level_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevelInput"></a>

```python
nfs_share_level_input: str
```

- *Type:* str

---

##### `notify_switches_input`<sup>Optional</sup> <a name="notify_switches_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitchesInput"></a>

```python
notify_switches_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port_private_secondary_vlan_id_input`<sup>Optional</sup> <a name="port_private_secondary_vlan_id_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanIdInput"></a>

```python
port_private_secondary_vlan_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pvlan_mapping_input`<sup>Optional</sup> <a name="pvlan_mapping_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.pvlanMappingInput"></a>

```python
pvlan_mapping_input: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchPvlanMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>]]

---

##### `standby_uplinks_input`<sup>Optional</sup> <a name="standby_uplinks_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinksInput"></a>

```python
standby_uplinks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `teaming_policy_input`<sup>Optional</sup> <a name="teaming_policy_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicyInput"></a>

```python
teaming_policy_input: str
```

- *Type:* str

---

##### `tx_uplink_input`<sup>Optional</sup> <a name="tx_uplink_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplinkInput"></a>

```python
tx_uplink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `uplinks_input`<sup>Optional</sup> <a name="uplinks_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinksInput"></a>

```python
uplinks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vdp_maximum_mbit_input`<sup>Optional</sup> <a name="vdp_maximum_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbitInput"></a>

```python
vdp_maximum_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vdp_reservation_mbit_input`<sup>Optional</sup> <a name="vdp_reservation_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbitInput"></a>

```python
vdp_reservation_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vdp_share_count_input`<sup>Optional</sup> <a name="vdp_share_count_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCountInput"></a>

```python
vdp_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vdp_share_level_input`<sup>Optional</sup> <a name="vdp_share_level_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevelInput"></a>

```python
vdp_share_level_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `virtualmachine_maximum_mbit_input`<sup>Optional</sup> <a name="virtualmachine_maximum_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbitInput"></a>

```python
virtualmachine_maximum_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtualmachine_reservation_mbit_input`<sup>Optional</sup> <a name="virtualmachine_reservation_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbitInput"></a>

```python
virtualmachine_reservation_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtualmachine_share_count_input`<sup>Optional</sup> <a name="virtualmachine_share_count_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCountInput"></a>

```python
virtualmachine_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtualmachine_share_level_input`<sup>Optional</sup> <a name="virtualmachine_share_level_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevelInput"></a>

```python
virtualmachine_share_level_input: str
```

- *Type:* str

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanIdInput"></a>

```python
vlan_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vlan_range_input`<sup>Optional</sup> <a name="vlan_range_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanRangeInput"></a>

```python
vlan_range_input: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchVlanRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>]]

---

##### `vmotion_maximum_mbit_input`<sup>Optional</sup> <a name="vmotion_maximum_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbitInput"></a>

```python
vmotion_maximum_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vmotion_reservation_mbit_input`<sup>Optional</sup> <a name="vmotion_reservation_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbitInput"></a>

```python
vmotion_reservation_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vmotion_share_count_input`<sup>Optional</sup> <a name="vmotion_share_count_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCountInput"></a>

```python
vmotion_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vmotion_share_level_input`<sup>Optional</sup> <a name="vmotion_share_level_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevelInput"></a>

```python
vmotion_share_level_input: str
```

- *Type:* str

---

##### `vsan_maximum_mbit_input`<sup>Optional</sup> <a name="vsan_maximum_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbitInput"></a>

```python
vsan_maximum_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vsan_reservation_mbit_input`<sup>Optional</sup> <a name="vsan_reservation_mbit_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbitInput"></a>

```python
vsan_reservation_mbit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vsan_share_count_input`<sup>Optional</sup> <a name="vsan_share_count_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCountInput"></a>

```python
vsan_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vsan_share_level_input`<sup>Optional</sup> <a name="vsan_share_level_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevelInput"></a>

```python
vsan_share_level_input: str
```

- *Type:* str

---

##### `active_uplinks`<sup>Required</sup> <a name="active_uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.activeUplinks"></a>

```python
active_uplinks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_forged_transmits`<sup>Required</sup> <a name="allow_forged_transmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowForgedTransmits"></a>

```python
allow_forged_transmits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_mac_changes`<sup>Required</sup> <a name="allow_mac_changes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowMacChanges"></a>

```python
allow_mac_changes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_promiscuous`<sup>Required</sup> <a name="allow_promiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.allowPromiscuous"></a>

```python
allow_promiscuous: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backupnfc_maximum_mbit`<sup>Required</sup> <a name="backupnfc_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcMaximumMbit"></a>

```python
backupnfc_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backupnfc_reservation_mbit`<sup>Required</sup> <a name="backupnfc_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcReservationMbit"></a>

```python
backupnfc_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backupnfc_share_count`<sup>Required</sup> <a name="backupnfc_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareCount"></a>

```python
backupnfc_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backupnfc_share_level`<sup>Required</sup> <a name="backupnfc_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.backupnfcShareLevel"></a>

```python
backupnfc_share_level: str
```

- *Type:* str

---

##### `block_all_ports`<sup>Required</sup> <a name="block_all_ports" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.blockAllPorts"></a>

```python
block_all_ports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_beacon`<sup>Required</sup> <a name="check_beacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.checkBeacon"></a>

```python
check_beacon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `contact_detail`<sup>Required</sup> <a name="contact_detail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactDetail"></a>

```python
contact_detail: str
```

- *Type:* str

---

##### `contact_name`<sup>Required</sup> <a name="contact_name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.contactName"></a>

```python
contact_name: str
```

- *Type:* str

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `directpath_gen2_allowed`<sup>Required</sup> <a name="directpath_gen2_allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.directpathGen2Allowed"></a>

```python
directpath_gen2_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `egress_shaping_average_bandwidth`<sup>Required</sup> <a name="egress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingAverageBandwidth"></a>

```python
egress_shaping_average_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `egress_shaping_burst_size`<sup>Required</sup> <a name="egress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingBurstSize"></a>

```python
egress_shaping_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `egress_shaping_enabled`<sup>Required</sup> <a name="egress_shaping_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingEnabled"></a>

```python
egress_shaping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `egress_shaping_peak_bandwidth`<sup>Required</sup> <a name="egress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.egressShapingPeakBandwidth"></a>

```python
egress_shaping_peak_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failback`<sup>Required</sup> <a name="failback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.failback"></a>

```python
failback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `faulttolerance_maximum_mbit`<sup>Required</sup> <a name="faulttolerance_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceMaximumMbit"></a>

```python
faulttolerance_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `faulttolerance_reservation_mbit`<sup>Required</sup> <a name="faulttolerance_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceReservationMbit"></a>

```python
faulttolerance_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `faulttolerance_share_count`<sup>Required</sup> <a name="faulttolerance_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareCount"></a>

```python
faulttolerance_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `faulttolerance_share_level`<sup>Required</sup> <a name="faulttolerance_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.faulttoleranceShareLevel"></a>

```python
faulttolerance_share_level: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `hbr_maximum_mbit`<sup>Required</sup> <a name="hbr_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrMaximumMbit"></a>

```python
hbr_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hbr_reservation_mbit`<sup>Required</sup> <a name="hbr_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrReservationMbit"></a>

```python
hbr_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hbr_share_count`<sup>Required</sup> <a name="hbr_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareCount"></a>

```python
hbr_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hbr_share_level`<sup>Required</sup> <a name="hbr_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.hbrShareLevel"></a>

```python
hbr_share_level: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_other_pvlan_mappings`<sup>Required</sup> <a name="ignore_other_pvlan_mappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ignoreOtherPvlanMappings"></a>

```python
ignore_other_pvlan_mappings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ingress_shaping_average_bandwidth`<sup>Required</sup> <a name="ingress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingAverageBandwidth"></a>

```python
ingress_shaping_average_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingress_shaping_burst_size`<sup>Required</sup> <a name="ingress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingBurstSize"></a>

```python
ingress_shaping_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingress_shaping_enabled`<sup>Required</sup> <a name="ingress_shaping_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingEnabled"></a>

```python
ingress_shaping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ingress_shaping_peak_bandwidth`<sup>Required</sup> <a name="ingress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ingressShapingPeakBandwidth"></a>

```python
ingress_shaping_peak_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `iscsi_maximum_mbit`<sup>Required</sup> <a name="iscsi_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiMaximumMbit"></a>

```python
iscsi_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iscsi_reservation_mbit`<sup>Required</sup> <a name="iscsi_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiReservationMbit"></a>

```python
iscsi_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iscsi_share_count`<sup>Required</sup> <a name="iscsi_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareCount"></a>

```python
iscsi_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iscsi_share_level`<sup>Required</sup> <a name="iscsi_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.iscsiShareLevel"></a>

```python
iscsi_share_level: str
```

- *Type:* str

---

##### `lacp_api_version`<sup>Required</sup> <a name="lacp_api_version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpApiVersion"></a>

```python
lacp_api_version: str
```

- *Type:* str

---

##### `lacp_enabled`<sup>Required</sup> <a name="lacp_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpEnabled"></a>

```python
lacp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lacp_mode`<sup>Required</sup> <a name="lacp_mode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.lacpMode"></a>

```python
lacp_mode: str
```

- *Type:* str

---

##### `link_discovery_operation`<sup>Required</sup> <a name="link_discovery_operation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryOperation"></a>

```python
link_discovery_operation: str
```

- *Type:* str

---

##### `link_discovery_protocol`<sup>Required</sup> <a name="link_discovery_protocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.linkDiscoveryProtocol"></a>

```python
link_discovery_protocol: str
```

- *Type:* str

---

##### `management_maximum_mbit`<sup>Required</sup> <a name="management_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementMaximumMbit"></a>

```python
management_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `management_reservation_mbit`<sup>Required</sup> <a name="management_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementReservationMbit"></a>

```python
management_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `management_share_count`<sup>Required</sup> <a name="management_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareCount"></a>

```python
management_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `management_share_level`<sup>Required</sup> <a name="management_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.managementShareLevel"></a>

```python
management_share_level: str
```

- *Type:* str

---

##### `max_mtu`<sup>Required</sup> <a name="max_mtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.maxMtu"></a>

```python
max_mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multicast_filtering_mode`<sup>Required</sup> <a name="multicast_filtering_mode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.multicastFilteringMode"></a>

```python
multicast_filtering_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `netflow_active_flow_timeout`<sup>Required</sup> <a name="netflow_active_flow_timeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowActiveFlowTimeout"></a>

```python
netflow_active_flow_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `netflow_collector_ip_address`<sup>Required</sup> <a name="netflow_collector_ip_address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorIpAddress"></a>

```python
netflow_collector_ip_address: str
```

- *Type:* str

---

##### `netflow_collector_port`<sup>Required</sup> <a name="netflow_collector_port" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowCollectorPort"></a>

```python
netflow_collector_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `netflow_enabled`<sup>Required</sup> <a name="netflow_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowEnabled"></a>

```python
netflow_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `netflow_idle_flow_timeout`<sup>Required</sup> <a name="netflow_idle_flow_timeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowIdleFlowTimeout"></a>

```python
netflow_idle_flow_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `netflow_internal_flows_only`<sup>Required</sup> <a name="netflow_internal_flows_only" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowInternalFlowsOnly"></a>

```python
netflow_internal_flows_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `netflow_observation_domain_id`<sup>Required</sup> <a name="netflow_observation_domain_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowObservationDomainId"></a>

```python
netflow_observation_domain_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `netflow_sampling_rate`<sup>Required</sup> <a name="netflow_sampling_rate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.netflowSamplingRate"></a>

```python
netflow_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_resource_control_enabled`<sup>Required</sup> <a name="network_resource_control_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlEnabled"></a>

```python
network_resource_control_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_resource_control_version`<sup>Required</sup> <a name="network_resource_control_version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.networkResourceControlVersion"></a>

```python
network_resource_control_version: str
```

- *Type:* str

---

##### `nfs_maximum_mbit`<sup>Required</sup> <a name="nfs_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsMaximumMbit"></a>

```python
nfs_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nfs_reservation_mbit`<sup>Required</sup> <a name="nfs_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsReservationMbit"></a>

```python
nfs_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nfs_share_count`<sup>Required</sup> <a name="nfs_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareCount"></a>

```python
nfs_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nfs_share_level`<sup>Required</sup> <a name="nfs_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.nfsShareLevel"></a>

```python
nfs_share_level: str
```

- *Type:* str

---

##### `notify_switches`<sup>Required</sup> <a name="notify_switches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.notifySwitches"></a>

```python
notify_switches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port_private_secondary_vlan_id`<sup>Required</sup> <a name="port_private_secondary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.portPrivateSecondaryVlanId"></a>

```python
port_private_secondary_vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `standby_uplinks`<sup>Required</sup> <a name="standby_uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.standbyUplinks"></a>

```python
standby_uplinks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `teaming_policy`<sup>Required</sup> <a name="teaming_policy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.teamingPolicy"></a>

```python
teaming_policy: str
```

- *Type:* str

---

##### `tx_uplink`<sup>Required</sup> <a name="tx_uplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.txUplink"></a>

```python
tx_uplink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `uplinks`<sup>Required</sup> <a name="uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.uplinks"></a>

```python
uplinks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vdp_maximum_mbit`<sup>Required</sup> <a name="vdp_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpMaximumMbit"></a>

```python
vdp_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vdp_reservation_mbit`<sup>Required</sup> <a name="vdp_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpReservationMbit"></a>

```python
vdp_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vdp_share_count`<sup>Required</sup> <a name="vdp_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareCount"></a>

```python
vdp_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vdp_share_level`<sup>Required</sup> <a name="vdp_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vdpShareLevel"></a>

```python
vdp_share_level: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `virtualmachine_maximum_mbit`<sup>Required</sup> <a name="virtualmachine_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineMaximumMbit"></a>

```python
virtualmachine_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtualmachine_reservation_mbit`<sup>Required</sup> <a name="virtualmachine_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineReservationMbit"></a>

```python
virtualmachine_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtualmachine_share_count`<sup>Required</sup> <a name="virtualmachine_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareCount"></a>

```python
virtualmachine_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtualmachine_share_level`<sup>Required</sup> <a name="virtualmachine_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.virtualmachineShareLevel"></a>

```python
virtualmachine_share_level: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vlanId"></a>

```python
vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vmotion_maximum_mbit`<sup>Required</sup> <a name="vmotion_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionMaximumMbit"></a>

```python
vmotion_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vmotion_reservation_mbit`<sup>Required</sup> <a name="vmotion_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionReservationMbit"></a>

```python
vmotion_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vmotion_share_count`<sup>Required</sup> <a name="vmotion_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareCount"></a>

```python
vmotion_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vmotion_share_level`<sup>Required</sup> <a name="vmotion_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vmotionShareLevel"></a>

```python
vmotion_share_level: str
```

- *Type:* str

---

##### `vsan_maximum_mbit`<sup>Required</sup> <a name="vsan_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanMaximumMbit"></a>

```python
vsan_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vsan_reservation_mbit`<sup>Required</sup> <a name="vsan_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanReservationMbit"></a>

```python
vsan_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vsan_share_count`<sup>Required</sup> <a name="vsan_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareCount"></a>

```python
vsan_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vsan_share_level`<sup>Required</sup> <a name="vsan_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.vsanShareLevel"></a>

```python
vsan_share_level: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DistributedVirtualSwitchConfig <a name="DistributedVirtualSwitchConfig" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitchConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  name: str,
  active_uplinks: typing.List[str] = None,
  allow_forged_transmits: typing.Union[bool, IResolvable] = None,
  allow_mac_changes: typing.Union[bool, IResolvable] = None,
  allow_promiscuous: typing.Union[bool, IResolvable] = None,
  backupnfc_maximum_mbit: typing.Union[int, float] = None,
  backupnfc_reservation_mbit: typing.Union[int, float] = None,
  backupnfc_share_count: typing.Union[int, float] = None,
  backupnfc_share_level: str = None,
  block_all_ports: typing.Union[bool, IResolvable] = None,
  check_beacon: typing.Union[bool, IResolvable] = None,
  contact_detail: str = None,
  contact_name: str = None,
  custom_attributes: typing.Mapping[str] = None,
  description: str = None,
  directpath_gen2_allowed: typing.Union[bool, IResolvable] = None,
  egress_shaping_average_bandwidth: typing.Union[int, float] = None,
  egress_shaping_burst_size: typing.Union[int, float] = None,
  egress_shaping_enabled: typing.Union[bool, IResolvable] = None,
  egress_shaping_peak_bandwidth: typing.Union[int, float] = None,
  failback: typing.Union[bool, IResolvable] = None,
  faulttolerance_maximum_mbit: typing.Union[int, float] = None,
  faulttolerance_reservation_mbit: typing.Union[int, float] = None,
  faulttolerance_share_count: typing.Union[int, float] = None,
  faulttolerance_share_level: str = None,
  folder: str = None,
  hbr_maximum_mbit: typing.Union[int, float] = None,
  hbr_reservation_mbit: typing.Union[int, float] = None,
  hbr_share_count: typing.Union[int, float] = None,
  hbr_share_level: str = None,
  host: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchHost]] = None,
  id: str = None,
  ignore_other_pvlan_mappings: typing.Union[bool, IResolvable] = None,
  ingress_shaping_average_bandwidth: typing.Union[int, float] = None,
  ingress_shaping_burst_size: typing.Union[int, float] = None,
  ingress_shaping_enabled: typing.Union[bool, IResolvable] = None,
  ingress_shaping_peak_bandwidth: typing.Union[int, float] = None,
  ipv4_address: str = None,
  iscsi_maximum_mbit: typing.Union[int, float] = None,
  iscsi_reservation_mbit: typing.Union[int, float] = None,
  iscsi_share_count: typing.Union[int, float] = None,
  iscsi_share_level: str = None,
  lacp_api_version: str = None,
  lacp_enabled: typing.Union[bool, IResolvable] = None,
  lacp_mode: str = None,
  link_discovery_operation: str = None,
  link_discovery_protocol: str = None,
  management_maximum_mbit: typing.Union[int, float] = None,
  management_reservation_mbit: typing.Union[int, float] = None,
  management_share_count: typing.Union[int, float] = None,
  management_share_level: str = None,
  max_mtu: typing.Union[int, float] = None,
  multicast_filtering_mode: str = None,
  netflow_active_flow_timeout: typing.Union[int, float] = None,
  netflow_collector_ip_address: str = None,
  netflow_collector_port: typing.Union[int, float] = None,
  netflow_enabled: typing.Union[bool, IResolvable] = None,
  netflow_idle_flow_timeout: typing.Union[int, float] = None,
  netflow_internal_flows_only: typing.Union[bool, IResolvable] = None,
  netflow_observation_domain_id: typing.Union[int, float] = None,
  netflow_sampling_rate: typing.Union[int, float] = None,
  network_resource_control_enabled: typing.Union[bool, IResolvable] = None,
  network_resource_control_version: str = None,
  nfs_maximum_mbit: typing.Union[int, float] = None,
  nfs_reservation_mbit: typing.Union[int, float] = None,
  nfs_share_count: typing.Union[int, float] = None,
  nfs_share_level: str = None,
  notify_switches: typing.Union[bool, IResolvable] = None,
  port_private_secondary_vlan_id: typing.Union[int, float] = None,
  pvlan_mapping: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchPvlanMapping]] = None,
  standby_uplinks: typing.List[str] = None,
  tags: typing.List[str] = None,
  teaming_policy: str = None,
  tx_uplink: typing.Union[bool, IResolvable] = None,
  uplinks: typing.List[str] = None,
  vdp_maximum_mbit: typing.Union[int, float] = None,
  vdp_reservation_mbit: typing.Union[int, float] = None,
  vdp_share_count: typing.Union[int, float] = None,
  vdp_share_level: str = None,
  version: str = None,
  virtualmachine_maximum_mbit: typing.Union[int, float] = None,
  virtualmachine_reservation_mbit: typing.Union[int, float] = None,
  virtualmachine_share_count: typing.Union[int, float] = None,
  virtualmachine_share_level: str = None,
  vlan_id: typing.Union[int, float] = None,
  vlan_range: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchVlanRange]] = None,
  vmotion_maximum_mbit: typing.Union[int, float] = None,
  vmotion_reservation_mbit: typing.Union[int, float] = None,
  vmotion_share_count: typing.Union[int, float] = None,
  vmotion_share_level: str = None,
  vsan_maximum_mbit: typing.Union[int, float] = None,
  vsan_reservation_mbit: typing.Union[int, float] = None,
  vsan_share_count: typing.Union[int, float] = None,
  vsan_share_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | The ID of the datacenter to create this virtual switch in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.name">name</a></code> | <code>str</code> | The name for the DVS. Must be unique in the folder that it is being created in. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.activeUplinks">active_uplinks</a></code> | <code>typing.List[str]</code> | List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowForgedTransmits">allow_forged_transmits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowMacChanges">allow_mac_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowPromiscuous">allow_promiscuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcMaximumMbit">backupnfc_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcReservationMbit">backupnfc_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareCount">backupnfc_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the backupNfc traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareLevel">backupnfc_share_level</a></code> | <code>str</code> | The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.blockAllPorts">block_all_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to block all ports by default. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.checkBeacon">check_beacon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable beacon probing on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactDetail">contact_detail</a></code> | <code>str</code> | The contact detail for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactName">contact_name</a></code> | <code>str</code> | The contact name for this DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.description">description</a></code> | <code>str</code> | The description of the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.directpathGen2Allowed">directpath_gen2_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow VMDirectPath Gen2 on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingAverageBandwidth">egress_shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The average egress bandwidth in bits per second if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingBurstSize">egress_shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | The maximum egress burst size allowed in bytes if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingEnabled">egress_shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if the traffic shaper is enabled for egress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingPeakBandwidth">egress_shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.failback">failback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceMaximumMbit">faulttolerance_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceReservationMbit">faulttolerance_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareCount">faulttolerance_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the faultTolerance traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareLevel">faulttolerance_share_level</a></code> | <code>str</code> | The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.folder">folder</a></code> | <code>str</code> | The folder to create this virtual switch in, relative to the datacenter. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrMaximumMbit">hbr_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrReservationMbit">hbr_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareCount">hbr_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the hbr traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareLevel">hbr_share_level</a></code> | <code>str</code> | The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.host">host</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>]]</code> | host block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ignoreOtherPvlanMappings">ignore_other_pvlan_mappings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to ignore existing PVLAN mappings not managed by this resource. Defaults to false. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingAverageBandwidth">ingress_shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The average ingress bandwidth in bits per second if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingBurstSize">ingress_shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingEnabled">ingress_shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if the traffic shaper is enabled for ingress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingPeakBandwidth">ingress_shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | The IPv4 address of the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiMaximumMbit">iscsi_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiReservationMbit">iscsi_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareCount">iscsi_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the iSCSI traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareLevel">iscsi_share_level</a></code> | <code>str</code> | The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpApiVersion">lacp_api_version</a></code> | <code>str</code> | The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpEnabled">lacp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to enable LACP on all uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpMode">lacp_mode</a></code> | <code>str</code> | The uplink LACP mode to use. Can be one of active or passive. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryOperation">link_discovery_operation</a></code> | <code>str</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryProtocol">link_discovery_protocol</a></code> | <code>str</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementMaximumMbit">management_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementReservationMbit">management_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareCount">management_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the management traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareLevel">management_share_level</a></code> | <code>str</code> | The allocation level for the management traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.maxMtu">max_mtu</a></code> | <code>typing.Union[int, float]</code> | The maximum MTU on the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.multicastFilteringMode">multicast_filtering_mode</a></code> | <code>str</code> | The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowActiveFlowTimeout">netflow_active_flow_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds after which active flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorIpAddress">netflow_collector_ip_address</a></code> | <code>str</code> | IP address for the netflow collector, using IPv4 or IPv6. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorPort">netflow_collector_port</a></code> | <code>typing.Union[int, float]</code> | The port for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowEnabled">netflow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to enable netflow on all ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowIdleFlowTimeout">netflow_idle_flow_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds after which idle flows are forced to be exported to the collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowInternalFlowsOnly">netflow_internal_flows_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to limit analysis to traffic that has both source and destination served by the same host. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowObservationDomainId">netflow_observation_domain_id</a></code> | <code>typing.Union[int, float]</code> | The observation Domain ID for the netflow collector. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowSamplingRate">netflow_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | The ratio of total number of packets to the number of packets analyzed. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlEnabled">network_resource_control_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlVersion">network_resource_control_version</a></code> | <code>str</code> | The network I/O control version to use. Can be one of version2 or version3. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsMaximumMbit">nfs_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsReservationMbit">nfs_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareCount">nfs_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the nfs traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareLevel">nfs_share_level</a></code> | <code>str</code> | The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.notifySwitches">notify_switches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.portPrivateSecondaryVlanId">port_private_secondary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | The secondary VLAN ID for this port. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.pvlanMapping">pvlan_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>]]</code> | pvlan_mapping block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.standbyUplinks">standby_uplinks</a></code> | <code>typing.List[str]</code> | List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.teamingPolicy">teaming_policy</a></code> | <code>str</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.txUplink">tx_uplink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.uplinks">uplinks</a></code> | <code>typing.List[str]</code> | A list of uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpMaximumMbit">vdp_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpReservationMbit">vdp_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareCount">vdp_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the vdp traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareLevel">vdp_share_level</a></code> | <code>str</code> | The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.version">version</a></code> | <code>str</code> | The version of this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineMaximumMbit">virtualmachine_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineReservationMbit">virtualmachine_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareCount">virtualmachine_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the virtualMachine traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareLevel">virtualmachine_share_level</a></code> | <code>str</code> | The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | The VLAN ID for single VLAN mode. 0 denotes no VLAN. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanRange">vlan_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>]]</code> | vlan_range block. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionMaximumMbit">vmotion_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionReservationMbit">vmotion_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareCount">vmotion_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the vmotion traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareLevel">vmotion_share_level</a></code> | <code>str</code> | The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanMaximumMbit">vsan_maximum_mbit</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed usage for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanReservationMbit">vsan_reservation_mbit</a></code> | <code>typing.Union[int, float]</code> | The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareCount">vsan_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to the vsan traffic class for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareLevel">vsan_share_level</a></code> | <code>str</code> | The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

The ID of the datacenter to create this virtual switch in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#datacenter_id DistributedVirtualSwitch#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the DVS. Must be unique in the folder that it is being created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#name DistributedVirtualSwitch#name}

---

##### `active_uplinks`<sup>Optional</sup> <a name="active_uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.activeUplinks"></a>

```python
active_uplinks: typing.List[str]
```

- *Type:* typing.List[str]

List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#active_uplinks DistributedVirtualSwitch#active_uplinks}

---

##### `allow_forged_transmits`<sup>Optional</sup> <a name="allow_forged_transmits" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowForgedTransmits"></a>

```python
allow_forged_transmits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#allow_forged_transmits DistributedVirtualSwitch#allow_forged_transmits}

---

##### `allow_mac_changes`<sup>Optional</sup> <a name="allow_mac_changes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowMacChanges"></a>

```python
allow_mac_changes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#allow_mac_changes DistributedVirtualSwitch#allow_mac_changes}

---

##### `allow_promiscuous`<sup>Optional</sup> <a name="allow_promiscuous" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.allowPromiscuous"></a>

```python
allow_promiscuous: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#allow_promiscuous DistributedVirtualSwitch#allow_promiscuous}

---

##### `backupnfc_maximum_mbit`<sup>Optional</sup> <a name="backupnfc_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcMaximumMbit"></a>

```python
backupnfc_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed usage for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#backupnfc_maximum_mbit DistributedVirtualSwitch#backupnfc_maximum_mbit}

---

##### `backupnfc_reservation_mbit`<sup>Optional</sup> <a name="backupnfc_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcReservationMbit"></a>

```python
backupnfc_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#backupnfc_reservation_mbit DistributedVirtualSwitch#backupnfc_reservation_mbit}

---

##### `backupnfc_share_count`<sup>Optional</sup> <a name="backupnfc_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareCount"></a>

```python
backupnfc_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the backupNfc traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#backupnfc_share_count DistributedVirtualSwitch#backupnfc_share_count}

---

##### `backupnfc_share_level`<sup>Optional</sup> <a name="backupnfc_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.backupnfcShareLevel"></a>

```python
backupnfc_share_level: str
```

- *Type:* str

The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#backupnfc_share_level DistributedVirtualSwitch#backupnfc_share_level}

---

##### `block_all_ports`<sup>Optional</sup> <a name="block_all_ports" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.blockAllPorts"></a>

```python
block_all_ports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to block all ports by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#block_all_ports DistributedVirtualSwitch#block_all_ports}

---

##### `check_beacon`<sup>Optional</sup> <a name="check_beacon" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.checkBeacon"></a>

```python
check_beacon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable beacon probing on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#check_beacon DistributedVirtualSwitch#check_beacon}

---

##### `contact_detail`<sup>Optional</sup> <a name="contact_detail" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactDetail"></a>

```python
contact_detail: str
```

- *Type:* str

The contact detail for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#contact_detail DistributedVirtualSwitch#contact_detail}

---

##### `contact_name`<sup>Optional</sup> <a name="contact_name" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.contactName"></a>

```python
contact_name: str
```

- *Type:* str

The contact name for this DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#contact_name DistributedVirtualSwitch#contact_name}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#custom_attributes DistributedVirtualSwitch#custom_attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#description DistributedVirtualSwitch#description}

---

##### `directpath_gen2_allowed`<sup>Optional</sup> <a name="directpath_gen2_allowed" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.directpathGen2Allowed"></a>

```python
directpath_gen2_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow VMDirectPath Gen2 on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#directpath_gen2_allowed DistributedVirtualSwitch#directpath_gen2_allowed}

---

##### `egress_shaping_average_bandwidth`<sup>Optional</sup> <a name="egress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingAverageBandwidth"></a>

```python
egress_shaping_average_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The average egress bandwidth in bits per second if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#egress_shaping_average_bandwidth DistributedVirtualSwitch#egress_shaping_average_bandwidth}

---

##### `egress_shaping_burst_size`<sup>Optional</sup> <a name="egress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingBurstSize"></a>

```python
egress_shaping_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#egress_shaping_burst_size DistributedVirtualSwitch#egress_shaping_burst_size}

---

##### `egress_shaping_enabled`<sup>Optional</sup> <a name="egress_shaping_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingEnabled"></a>

```python
egress_shaping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the traffic shaper is enabled for egress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#egress_shaping_enabled DistributedVirtualSwitch#egress_shaping_enabled}

---

##### `egress_shaping_peak_bandwidth`<sup>Optional</sup> <a name="egress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.egressShapingPeakBandwidth"></a>

```python
egress_shaping_peak_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#egress_shaping_peak_bandwidth DistributedVirtualSwitch#egress_shaping_peak_bandwidth}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.failback"></a>

```python
failback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#failback DistributedVirtualSwitch#failback}

---

##### `faulttolerance_maximum_mbit`<sup>Optional</sup> <a name="faulttolerance_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceMaximumMbit"></a>

```python
faulttolerance_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#faulttolerance_maximum_mbit DistributedVirtualSwitch#faulttolerance_maximum_mbit}

---

##### `faulttolerance_reservation_mbit`<sup>Optional</sup> <a name="faulttolerance_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceReservationMbit"></a>

```python
faulttolerance_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#faulttolerance_reservation_mbit DistributedVirtualSwitch#faulttolerance_reservation_mbit}

---

##### `faulttolerance_share_count`<sup>Optional</sup> <a name="faulttolerance_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareCount"></a>

```python
faulttolerance_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the faultTolerance traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#faulttolerance_share_count DistributedVirtualSwitch#faulttolerance_share_count}

---

##### `faulttolerance_share_level`<sup>Optional</sup> <a name="faulttolerance_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.faulttoleranceShareLevel"></a>

```python
faulttolerance_share_level: str
```

- *Type:* str

The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#faulttolerance_share_level DistributedVirtualSwitch#faulttolerance_share_level}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The folder to create this virtual switch in, relative to the datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#folder DistributedVirtualSwitch#folder}

---

##### `hbr_maximum_mbit`<sup>Optional</sup> <a name="hbr_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrMaximumMbit"></a>

```python
hbr_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed usage for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#hbr_maximum_mbit DistributedVirtualSwitch#hbr_maximum_mbit}

---

##### `hbr_reservation_mbit`<sup>Optional</sup> <a name="hbr_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrReservationMbit"></a>

```python
hbr_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#hbr_reservation_mbit DistributedVirtualSwitch#hbr_reservation_mbit}

---

##### `hbr_share_count`<sup>Optional</sup> <a name="hbr_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareCount"></a>

```python
hbr_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the hbr traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#hbr_share_count DistributedVirtualSwitch#hbr_share_count}

---

##### `hbr_share_level`<sup>Optional</sup> <a name="hbr_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.hbrShareLevel"></a>

```python
hbr_share_level: str
```

- *Type:* str

The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#hbr_share_level DistributedVirtualSwitch#hbr_share_level}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.host"></a>

```python
host: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchHost]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>]]

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#host DistributedVirtualSwitch#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_other_pvlan_mappings`<sup>Optional</sup> <a name="ignore_other_pvlan_mappings" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ignoreOtherPvlanMappings"></a>

```python
ignore_other_pvlan_mappings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to ignore existing PVLAN mappings not managed by this resource. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#ignore_other_pvlan_mappings DistributedVirtualSwitch#ignore_other_pvlan_mappings}

---

##### `ingress_shaping_average_bandwidth`<sup>Optional</sup> <a name="ingress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingAverageBandwidth"></a>

```python
ingress_shaping_average_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#ingress_shaping_average_bandwidth DistributedVirtualSwitch#ingress_shaping_average_bandwidth}

---

##### `ingress_shaping_burst_size`<sup>Optional</sup> <a name="ingress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingBurstSize"></a>

```python
ingress_shaping_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#ingress_shaping_burst_size DistributedVirtualSwitch#ingress_shaping_burst_size}

---

##### `ingress_shaping_enabled`<sup>Optional</sup> <a name="ingress_shaping_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingEnabled"></a>

```python
ingress_shaping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the traffic shaper is enabled for ingress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#ingress_shaping_enabled DistributedVirtualSwitch#ingress_shaping_enabled}

---

##### `ingress_shaping_peak_bandwidth`<sup>Optional</sup> <a name="ingress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ingressShapingPeakBandwidth"></a>

```python
ingress_shaping_peak_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#ingress_shaping_peak_bandwidth DistributedVirtualSwitch#ingress_shaping_peak_bandwidth}

---

##### `ipv4_address`<sup>Optional</sup> <a name="ipv4_address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

The IPv4 address of the switch.

This can be used to see the DVS as a unique device with NetFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#ipv4_address DistributedVirtualSwitch#ipv4_address}

---

##### `iscsi_maximum_mbit`<sup>Optional</sup> <a name="iscsi_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiMaximumMbit"></a>

```python
iscsi_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed usage for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#iscsi_maximum_mbit DistributedVirtualSwitch#iscsi_maximum_mbit}

---

##### `iscsi_reservation_mbit`<sup>Optional</sup> <a name="iscsi_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiReservationMbit"></a>

```python
iscsi_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#iscsi_reservation_mbit DistributedVirtualSwitch#iscsi_reservation_mbit}

---

##### `iscsi_share_count`<sup>Optional</sup> <a name="iscsi_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareCount"></a>

```python
iscsi_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the iSCSI traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#iscsi_share_count DistributedVirtualSwitch#iscsi_share_count}

---

##### `iscsi_share_level`<sup>Optional</sup> <a name="iscsi_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.iscsiShareLevel"></a>

```python
iscsi_share_level: str
```

- *Type:* str

The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#iscsi_share_level DistributedVirtualSwitch#iscsi_share_level}

---

##### `lacp_api_version`<sup>Optional</sup> <a name="lacp_api_version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpApiVersion"></a>

```python
lacp_api_version: str
```

- *Type:* str

The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#lacp_api_version DistributedVirtualSwitch#lacp_api_version}

---

##### `lacp_enabled`<sup>Optional</sup> <a name="lacp_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpEnabled"></a>

```python
lacp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to enable LACP on all uplink ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#lacp_enabled DistributedVirtualSwitch#lacp_enabled}

---

##### `lacp_mode`<sup>Optional</sup> <a name="lacp_mode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.lacpMode"></a>

```python
lacp_mode: str
```

- *Type:* str

The uplink LACP mode to use. Can be one of active or passive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#lacp_mode DistributedVirtualSwitch#lacp_mode}

---

##### `link_discovery_operation`<sup>Optional</sup> <a name="link_discovery_operation" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryOperation"></a>

```python
link_discovery_operation: str
```

- *Type:* str

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#link_discovery_operation DistributedVirtualSwitch#link_discovery_operation}

---

##### `link_discovery_protocol`<sup>Optional</sup> <a name="link_discovery_protocol" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.linkDiscoveryProtocol"></a>

```python
link_discovery_protocol: str
```

- *Type:* str

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#link_discovery_protocol DistributedVirtualSwitch#link_discovery_protocol}

---

##### `management_maximum_mbit`<sup>Optional</sup> <a name="management_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementMaximumMbit"></a>

```python
management_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed usage for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#management_maximum_mbit DistributedVirtualSwitch#management_maximum_mbit}

---

##### `management_reservation_mbit`<sup>Optional</sup> <a name="management_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementReservationMbit"></a>

```python
management_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#management_reservation_mbit DistributedVirtualSwitch#management_reservation_mbit}

---

##### `management_share_count`<sup>Optional</sup> <a name="management_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareCount"></a>

```python
management_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the management traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#management_share_count DistributedVirtualSwitch#management_share_count}

---

##### `management_share_level`<sup>Optional</sup> <a name="management_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.managementShareLevel"></a>

```python
management_share_level: str
```

- *Type:* str

The allocation level for the management traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#management_share_level DistributedVirtualSwitch#management_share_level}

---

##### `max_mtu`<sup>Optional</sup> <a name="max_mtu" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.maxMtu"></a>

```python
max_mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum MTU on the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#max_mtu DistributedVirtualSwitch#max_mtu}

---

##### `multicast_filtering_mode`<sup>Optional</sup> <a name="multicast_filtering_mode" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.multicastFilteringMode"></a>

```python
multicast_filtering_mode: str
```

- *Type:* str

The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#multicast_filtering_mode DistributedVirtualSwitch#multicast_filtering_mode}

---

##### `netflow_active_flow_timeout`<sup>Optional</sup> <a name="netflow_active_flow_timeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowActiveFlowTimeout"></a>

```python
netflow_active_flow_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds after which active flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_active_flow_timeout DistributedVirtualSwitch#netflow_active_flow_timeout}

---

##### `netflow_collector_ip_address`<sup>Optional</sup> <a name="netflow_collector_ip_address" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorIpAddress"></a>

```python
netflow_collector_ip_address: str
```

- *Type:* str

IP address for the netflow collector, using IPv4 or IPv6.

IPv6 is supported in vSphere Distributed Switch Version 6.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_collector_ip_address DistributedVirtualSwitch#netflow_collector_ip_address}

---

##### `netflow_collector_port`<sup>Optional</sup> <a name="netflow_collector_port" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowCollectorPort"></a>

```python
netflow_collector_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_collector_port DistributedVirtualSwitch#netflow_collector_port}

---

##### `netflow_enabled`<sup>Optional</sup> <a name="netflow_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowEnabled"></a>

```python
netflow_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to enable netflow on all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_enabled DistributedVirtualSwitch#netflow_enabled}

---

##### `netflow_idle_flow_timeout`<sup>Optional</sup> <a name="netflow_idle_flow_timeout" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowIdleFlowTimeout"></a>

```python
netflow_idle_flow_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds after which idle flows are forced to be exported to the collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_idle_flow_timeout DistributedVirtualSwitch#netflow_idle_flow_timeout}

---

##### `netflow_internal_flows_only`<sup>Optional</sup> <a name="netflow_internal_flows_only" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowInternalFlowsOnly"></a>

```python
netflow_internal_flows_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to limit analysis to traffic that has both source and destination served by the same host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_internal_flows_only DistributedVirtualSwitch#netflow_internal_flows_only}

---

##### `netflow_observation_domain_id`<sup>Optional</sup> <a name="netflow_observation_domain_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowObservationDomainId"></a>

```python
netflow_observation_domain_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The observation Domain ID for the netflow collector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_observation_domain_id DistributedVirtualSwitch#netflow_observation_domain_id}

---

##### `netflow_sampling_rate`<sup>Optional</sup> <a name="netflow_sampling_rate" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.netflowSamplingRate"></a>

```python
netflow_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ratio of total number of packets to the number of packets analyzed.

Set to 0 to disable sampling, meaning that all packets are analyzed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#netflow_sampling_rate DistributedVirtualSwitch#netflow_sampling_rate}

---

##### `network_resource_control_enabled`<sup>Optional</sup> <a name="network_resource_control_enabled" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlEnabled"></a>

```python
network_resource_control_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#network_resource_control_enabled DistributedVirtualSwitch#network_resource_control_enabled}

---

##### `network_resource_control_version`<sup>Optional</sup> <a name="network_resource_control_version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.networkResourceControlVersion"></a>

```python
network_resource_control_version: str
```

- *Type:* str

The network I/O control version to use. Can be one of version2 or version3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#network_resource_control_version DistributedVirtualSwitch#network_resource_control_version}

---

##### `nfs_maximum_mbit`<sup>Optional</sup> <a name="nfs_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsMaximumMbit"></a>

```python
nfs_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed usage for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#nfs_maximum_mbit DistributedVirtualSwitch#nfs_maximum_mbit}

---

##### `nfs_reservation_mbit`<sup>Optional</sup> <a name="nfs_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsReservationMbit"></a>

```python
nfs_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#nfs_reservation_mbit DistributedVirtualSwitch#nfs_reservation_mbit}

---

##### `nfs_share_count`<sup>Optional</sup> <a name="nfs_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareCount"></a>

```python
nfs_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the nfs traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#nfs_share_count DistributedVirtualSwitch#nfs_share_count}

---

##### `nfs_share_level`<sup>Optional</sup> <a name="nfs_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.nfsShareLevel"></a>

```python
nfs_share_level: str
```

- *Type:* str

The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#nfs_share_level DistributedVirtualSwitch#nfs_share_level}

---

##### `notify_switches`<sup>Optional</sup> <a name="notify_switches" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.notifySwitches"></a>

```python
notify_switches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#notify_switches DistributedVirtualSwitch#notify_switches}

---

##### `port_private_secondary_vlan_id`<sup>Optional</sup> <a name="port_private_secondary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.portPrivateSecondaryVlanId"></a>

```python
port_private_secondary_vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The secondary VLAN ID for this port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#port_private_secondary_vlan_id DistributedVirtualSwitch#port_private_secondary_vlan_id}

---

##### `pvlan_mapping`<sup>Optional</sup> <a name="pvlan_mapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.pvlanMapping"></a>

```python
pvlan_mapping: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchPvlanMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>]]

pvlan_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#pvlan_mapping DistributedVirtualSwitch#pvlan_mapping}

---

##### `standby_uplinks`<sup>Optional</sup> <a name="standby_uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.standbyUplinks"></a>

```python
standby_uplinks: typing.List[str]
```

- *Type:* typing.List[str]

List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#standby_uplinks DistributedVirtualSwitch#standby_uplinks}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#tags DistributedVirtualSwitch#tags}

---

##### `teaming_policy`<sup>Optional</sup> <a name="teaming_policy" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.teamingPolicy"></a>

```python
teaming_policy: str
```

- *Type:* str

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#teaming_policy DistributedVirtualSwitch#teaming_policy}

---

##### `tx_uplink`<sup>Optional</sup> <a name="tx_uplink" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.txUplink"></a>

```python
tx_uplink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#tx_uplink DistributedVirtualSwitch#tx_uplink}

---

##### `uplinks`<sup>Optional</sup> <a name="uplinks" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.uplinks"></a>

```python
uplinks: typing.List[str]
```

- *Type:* typing.List[str]

A list of uplink ports.

The contents of this list control both the uplink count and names of the uplinks on the DVS across hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#uplinks DistributedVirtualSwitch#uplinks}

---

##### `vdp_maximum_mbit`<sup>Optional</sup> <a name="vdp_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpMaximumMbit"></a>

```python
vdp_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed usage for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vdp_maximum_mbit DistributedVirtualSwitch#vdp_maximum_mbit}

---

##### `vdp_reservation_mbit`<sup>Optional</sup> <a name="vdp_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpReservationMbit"></a>

```python
vdp_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vdp_reservation_mbit DistributedVirtualSwitch#vdp_reservation_mbit}

---

##### `vdp_share_count`<sup>Optional</sup> <a name="vdp_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareCount"></a>

```python
vdp_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the vdp traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vdp_share_count DistributedVirtualSwitch#vdp_share_count}

---

##### `vdp_share_level`<sup>Optional</sup> <a name="vdp_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vdpShareLevel"></a>

```python
vdp_share_level: str
```

- *Type:* str

The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vdp_share_level DistributedVirtualSwitch#vdp_share_level}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The version of this virtual switch.

Allowed versions are 8.0.0, 7.0.3, 7.0.2, 7.0.0, 6.6.0, 6.5.0, 6.0.0, 5.5.0, 5.1.0, and 5.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#version DistributedVirtualSwitch#version}

---

##### `virtualmachine_maximum_mbit`<sup>Optional</sup> <a name="virtualmachine_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineMaximumMbit"></a>

```python
virtualmachine_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#virtualmachine_maximum_mbit DistributedVirtualSwitch#virtualmachine_maximum_mbit}

---

##### `virtualmachine_reservation_mbit`<sup>Optional</sup> <a name="virtualmachine_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineReservationMbit"></a>

```python
virtualmachine_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#virtualmachine_reservation_mbit DistributedVirtualSwitch#virtualmachine_reservation_mbit}

---

##### `virtualmachine_share_count`<sup>Optional</sup> <a name="virtualmachine_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareCount"></a>

```python
virtualmachine_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the virtualMachine traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#virtualmachine_share_count DistributedVirtualSwitch#virtualmachine_share_count}

---

##### `virtualmachine_share_level`<sup>Optional</sup> <a name="virtualmachine_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.virtualmachineShareLevel"></a>

```python
virtualmachine_share_level: str
```

- *Type:* str

The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#virtualmachine_share_level DistributedVirtualSwitch#virtualmachine_share_level}

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanId"></a>

```python
vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The VLAN ID for single VLAN mode. 0 denotes no VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vlan_id DistributedVirtualSwitch#vlan_id}

---

##### `vlan_range`<sup>Optional</sup> <a name="vlan_range" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vlanRange"></a>

```python
vlan_range: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchVlanRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>]]

vlan_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vlan_range DistributedVirtualSwitch#vlan_range}

---

##### `vmotion_maximum_mbit`<sup>Optional</sup> <a name="vmotion_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionMaximumMbit"></a>

```python
vmotion_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed usage for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vmotion_maximum_mbit DistributedVirtualSwitch#vmotion_maximum_mbit}

---

##### `vmotion_reservation_mbit`<sup>Optional</sup> <a name="vmotion_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionReservationMbit"></a>

```python
vmotion_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vmotion_reservation_mbit DistributedVirtualSwitch#vmotion_reservation_mbit}

---

##### `vmotion_share_count`<sup>Optional</sup> <a name="vmotion_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareCount"></a>

```python
vmotion_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the vmotion traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vmotion_share_count DistributedVirtualSwitch#vmotion_share_count}

---

##### `vmotion_share_level`<sup>Optional</sup> <a name="vmotion_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vmotionShareLevel"></a>

```python
vmotion_share_level: str
```

- *Type:* str

The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vmotion_share_level DistributedVirtualSwitch#vmotion_share_level}

---

##### `vsan_maximum_mbit`<sup>Optional</sup> <a name="vsan_maximum_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanMaximumMbit"></a>

```python
vsan_maximum_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed usage for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vsan_maximum_mbit DistributedVirtualSwitch#vsan_maximum_mbit}

---

##### `vsan_reservation_mbit`<sup>Optional</sup> <a name="vsan_reservation_mbit" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanReservationMbit"></a>

```python
vsan_reservation_mbit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vsan_reservation_mbit DistributedVirtualSwitch#vsan_reservation_mbit}

---

##### `vsan_share_count`<sup>Optional</sup> <a name="vsan_share_count" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareCount"></a>

```python
vsan_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to the vsan traffic class for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vsan_share_count DistributedVirtualSwitch#vsan_share_count}

---

##### `vsan_share_level`<sup>Optional</sup> <a name="vsan_share_level" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchConfig.property.vsanShareLevel"></a>

```python
vsan_share_level: str
```

- *Type:* str

The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#vsan_share_level DistributedVirtualSwitch#vsan_share_level}

---

### DistributedVirtualSwitchHost <a name="DistributedVirtualSwitchHost" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitchHost(
  host_system_id: str,
  devices: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.hostSystemId">host_system_id</a></code> | <code>str</code> | The managed object ID of the host this specification applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.devices">devices</a></code> | <code>typing.List[str]</code> | Name of the physical NIC to be added to the proxy switch. |

---

##### `host_system_id`<sup>Required</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.hostSystemId"></a>

```python
host_system_id: str
```

- *Type:* str

The managed object ID of the host this specification applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#host_system_id DistributedVirtualSwitch#host_system_id}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost.property.devices"></a>

```python
devices: typing.List[str]
```

- *Type:* typing.List[str]

Name of the physical NIC to be added to the proxy switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#devices DistributedVirtualSwitch#devices}

---

### DistributedVirtualSwitchPvlanMapping <a name="DistributedVirtualSwitchPvlanMapping" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping(
  primary_vlan_id: typing.Union[int, float],
  pvlan_type: str,
  secondary_vlan_id: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.primaryVlanId">primary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | The primary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.pvlanType">pvlan_type</a></code> | <code>str</code> | The private VLAN type. Valid values are promiscuous, community and isolated. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.secondaryVlanId">secondary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | The secondary VLAN ID. |

---

##### `primary_vlan_id`<sup>Required</sup> <a name="primary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.primaryVlanId"></a>

```python
primary_vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The primary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#primary_vlan_id DistributedVirtualSwitch#primary_vlan_id}

---

##### `pvlan_type`<sup>Required</sup> <a name="pvlan_type" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.pvlanType"></a>

```python
pvlan_type: str
```

- *Type:* str

The private VLAN type. Valid values are promiscuous, community and isolated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#pvlan_type DistributedVirtualSwitch#pvlan_type}

---

##### `secondary_vlan_id`<sup>Required</sup> <a name="secondary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping.property.secondaryVlanId"></a>

```python
secondary_vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The secondary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#secondary_vlan_id DistributedVirtualSwitch#secondary_vlan_id}

---

### DistributedVirtualSwitchVlanRange <a name="DistributedVirtualSwitchVlanRange" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitchVlanRange(
  max_vlan: typing.Union[int, float],
  min_vlan: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.maxVlan">max_vlan</a></code> | <code>typing.Union[int, float]</code> | The minimum VLAN to use in the range. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.minVlan">min_vlan</a></code> | <code>typing.Union[int, float]</code> | The minimum VLAN to use in the range. |

---

##### `max_vlan`<sup>Required</sup> <a name="max_vlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.maxVlan"></a>

```python
max_vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#max_vlan DistributedVirtualSwitch#max_vlan}

---

##### `min_vlan`<sup>Required</sup> <a name="min_vlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange.property.minVlan"></a>

```python
min_vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/distributed_virtual_switch#min_vlan DistributedVirtualSwitch#min_vlan}

---

## Classes <a name="Classes" id="Classes"></a>

### DistributedVirtualSwitchHostList <a name="DistributedVirtualSwitchHostList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitchHostList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DistributedVirtualSwitchHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchHost]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>]]

---


### DistributedVirtualSwitchHostOutputReference <a name="DistributedVirtualSwitchHostOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resetDevices">reset_devices</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_devices` <a name="reset_devices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.resetDevices"></a>

```python
def reset_devices() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devicesInput">devices_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemIdInput">host_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devices">devices</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemId">host_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `devices_input`<sup>Optional</sup> <a name="devices_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devicesInput"></a>

```python
devices_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host_system_id_input`<sup>Optional</sup> <a name="host_system_id_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemIdInput"></a>

```python
host_system_id_input: str
```

- *Type:* str

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.devices"></a>

```python
devices: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host_system_id`<sup>Required</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.hostSystemId"></a>

```python
host_system_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHostOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DistributedVirtualSwitchHost]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchHost">DistributedVirtualSwitchHost</a>]

---


### DistributedVirtualSwitchPvlanMappingList <a name="DistributedVirtualSwitchPvlanMappingList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DistributedVirtualSwitchPvlanMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchPvlanMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>]]

---


### DistributedVirtualSwitchPvlanMappingOutputReference <a name="DistributedVirtualSwitchPvlanMappingOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanIdInput">primary_vlan_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanTypeInput">pvlan_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanIdInput">secondary_vlan_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanId">primary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanType">pvlan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanId">secondary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_vlan_id_input`<sup>Optional</sup> <a name="primary_vlan_id_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanIdInput"></a>

```python
primary_vlan_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pvlan_type_input`<sup>Optional</sup> <a name="pvlan_type_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanTypeInput"></a>

```python
pvlan_type_input: str
```

- *Type:* str

---

##### `secondary_vlan_id_input`<sup>Optional</sup> <a name="secondary_vlan_id_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanIdInput"></a>

```python
secondary_vlan_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `primary_vlan_id`<sup>Required</sup> <a name="primary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.primaryVlanId"></a>

```python
primary_vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pvlan_type`<sup>Required</sup> <a name="pvlan_type" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.pvlanType"></a>

```python
pvlan_type: str
```

- *Type:* str

---

##### `secondary_vlan_id`<sup>Required</sup> <a name="secondary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.secondaryVlanId"></a>

```python
secondary_vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMappingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DistributedVirtualSwitchPvlanMapping]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchPvlanMapping">DistributedVirtualSwitchPvlanMapping</a>]

---


### DistributedVirtualSwitchVlanRangeList <a name="DistributedVirtualSwitchVlanRangeList" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DistributedVirtualSwitchVlanRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DistributedVirtualSwitchVlanRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>]]

---


### DistributedVirtualSwitchVlanRangeOutputReference <a name="DistributedVirtualSwitchVlanRangeOutputReference" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch

distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlanInput">max_vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlanInput">min_vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlan">max_vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlan">min_vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_vlan_input`<sup>Optional</sup> <a name="max_vlan_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlanInput"></a>

```python
max_vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_vlan_input`<sup>Optional</sup> <a name="min_vlan_input" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlanInput"></a>

```python
min_vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vlan`<sup>Required</sup> <a name="max_vlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.maxVlan"></a>

```python
max_vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_vlan`<sup>Required</sup> <a name="min_vlan" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.minVlan"></a>

```python
min_vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DistributedVirtualSwitchVlanRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.distributedVirtualSwitch.DistributedVirtualSwitchVlanRange">DistributedVirtualSwitchVlanRange</a>]

---



