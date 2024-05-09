// https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DistributedVirtualSwitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#active_uplinks DistributedVirtualSwitch#active_uplinks}
  */
  readonly activeUplinks?: string[];
  /**
  * Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#allow_forged_transmits DistributedVirtualSwitch#allow_forged_transmits}
  */
  readonly allowForgedTransmits?: boolean | cdktf.IResolvable;
  /**
  * Controls whether or not the Media Access Control (MAC) address can be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#allow_mac_changes DistributedVirtualSwitch#allow_mac_changes}
  */
  readonly allowMacChanges?: boolean | cdktf.IResolvable;
  /**
  * Enable promiscuous mode on the network. This flag indicates whether or not all traffic is seen on a given port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#allow_promiscuous DistributedVirtualSwitch#allow_promiscuous}
  */
  readonly allowPromiscuous?: boolean | cdktf.IResolvable;
  /**
  * The maximum allowed usage for the backupNfc traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#backupnfc_maximum_mbit DistributedVirtualSwitch#backupnfc_maximum_mbit}
  */
  readonly backupnfcMaximumMbit?: number;
  /**
  * The amount of guaranteed bandwidth for the backupNfc traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#backupnfc_reservation_mbit DistributedVirtualSwitch#backupnfc_reservation_mbit}
  */
  readonly backupnfcReservationMbit?: number;
  /**
  * The amount of shares to allocate to the backupNfc traffic class for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#backupnfc_share_count DistributedVirtualSwitch#backupnfc_share_count}
  */
  readonly backupnfcShareCount?: number;
  /**
  * The allocation level for the backupNfc traffic class. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#backupnfc_share_level DistributedVirtualSwitch#backupnfc_share_level}
  */
  readonly backupnfcShareLevel?: string;
  /**
  * Indicates whether to block all ports by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#block_all_ports DistributedVirtualSwitch#block_all_ports}
  */
  readonly blockAllPorts?: boolean | cdktf.IResolvable;
  /**
  * Enable beacon probing on the ports this policy applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#check_beacon DistributedVirtualSwitch#check_beacon}
  */
  readonly checkBeacon?: boolean | cdktf.IResolvable;
  /**
  * The contact detail for this DVS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#contact_detail DistributedVirtualSwitch#contact_detail}
  */
  readonly contactDetail?: string;
  /**
  * The contact name for this DVS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#contact_name DistributedVirtualSwitch#contact_name}
  */
  readonly contactName?: string;
  /**
  * A list of custom attributes to set on this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#custom_attributes DistributedVirtualSwitch#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * The ID of the datacenter to create this virtual switch in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#datacenter_id DistributedVirtualSwitch#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * The description of the DVS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#description DistributedVirtualSwitch#description}
  */
  readonly description?: string;
  /**
  * Allow VMDirectPath Gen2 on the ports this policy applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#directpath_gen2_allowed DistributedVirtualSwitch#directpath_gen2_allowed}
  */
  readonly directpathGen2Allowed?: boolean | cdktf.IResolvable;
  /**
  * The average egress bandwidth in bits per second if egress shaping is enabled on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#egress_shaping_average_bandwidth DistributedVirtualSwitch#egress_shaping_average_bandwidth}
  */
  readonly egressShapingAverageBandwidth?: number;
  /**
  * The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#egress_shaping_burst_size DistributedVirtualSwitch#egress_shaping_burst_size}
  */
  readonly egressShapingBurstSize?: number;
  /**
  * True if the traffic shaper is enabled for egress traffic on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#egress_shaping_enabled DistributedVirtualSwitch#egress_shaping_enabled}
  */
  readonly egressShapingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#egress_shaping_peak_bandwidth DistributedVirtualSwitch#egress_shaping_peak_bandwidth}
  */
  readonly egressShapingPeakBandwidth?: number;
  /**
  * If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#failback DistributedVirtualSwitch#failback}
  */
  readonly failback?: boolean | cdktf.IResolvable;
  /**
  * The maximum allowed usage for the faultTolerance traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#faulttolerance_maximum_mbit DistributedVirtualSwitch#faulttolerance_maximum_mbit}
  */
  readonly faulttoleranceMaximumMbit?: number;
  /**
  * The amount of guaranteed bandwidth for the faultTolerance traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#faulttolerance_reservation_mbit DistributedVirtualSwitch#faulttolerance_reservation_mbit}
  */
  readonly faulttoleranceReservationMbit?: number;
  /**
  * The amount of shares to allocate to the faultTolerance traffic class for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#faulttolerance_share_count DistributedVirtualSwitch#faulttolerance_share_count}
  */
  readonly faulttoleranceShareCount?: number;
  /**
  * The allocation level for the faultTolerance traffic class. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#faulttolerance_share_level DistributedVirtualSwitch#faulttolerance_share_level}
  */
  readonly faulttoleranceShareLevel?: string;
  /**
  * The folder to create this virtual switch in, relative to the datacenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#folder DistributedVirtualSwitch#folder}
  */
  readonly folder?: string;
  /**
  * The maximum allowed usage for the hbr traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#hbr_maximum_mbit DistributedVirtualSwitch#hbr_maximum_mbit}
  */
  readonly hbrMaximumMbit?: number;
  /**
  * The amount of guaranteed bandwidth for the hbr traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#hbr_reservation_mbit DistributedVirtualSwitch#hbr_reservation_mbit}
  */
  readonly hbrReservationMbit?: number;
  /**
  * The amount of shares to allocate to the hbr traffic class for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#hbr_share_count DistributedVirtualSwitch#hbr_share_count}
  */
  readonly hbrShareCount?: number;
  /**
  * The allocation level for the hbr traffic class. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#hbr_share_level DistributedVirtualSwitch#hbr_share_level}
  */
  readonly hbrShareLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#id DistributedVirtualSwitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to ignore existing PVLAN mappings not managed by this resource. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#ignore_other_pvlan_mappings DistributedVirtualSwitch#ignore_other_pvlan_mappings}
  */
  readonly ignoreOtherPvlanMappings?: boolean | cdktf.IResolvable;
  /**
  * The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#ingress_shaping_average_bandwidth DistributedVirtualSwitch#ingress_shaping_average_bandwidth}
  */
  readonly ingressShapingAverageBandwidth?: number;
  /**
  * The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#ingress_shaping_burst_size DistributedVirtualSwitch#ingress_shaping_burst_size}
  */
  readonly ingressShapingBurstSize?: number;
  /**
  * True if the traffic shaper is enabled for ingress traffic on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#ingress_shaping_enabled DistributedVirtualSwitch#ingress_shaping_enabled}
  */
  readonly ingressShapingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#ingress_shaping_peak_bandwidth DistributedVirtualSwitch#ingress_shaping_peak_bandwidth}
  */
  readonly ingressShapingPeakBandwidth?: number;
  /**
  * The IPv4 address of the switch. This can be used to see the DVS as a unique device with NetFlow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#ipv4_address DistributedVirtualSwitch#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * The maximum allowed usage for the iSCSI traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#iscsi_maximum_mbit DistributedVirtualSwitch#iscsi_maximum_mbit}
  */
  readonly iscsiMaximumMbit?: number;
  /**
  * The amount of guaranteed bandwidth for the iSCSI traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#iscsi_reservation_mbit DistributedVirtualSwitch#iscsi_reservation_mbit}
  */
  readonly iscsiReservationMbit?: number;
  /**
  * The amount of shares to allocate to the iSCSI traffic class for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#iscsi_share_count DistributedVirtualSwitch#iscsi_share_count}
  */
  readonly iscsiShareCount?: number;
  /**
  * The allocation level for the iSCSI traffic class. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#iscsi_share_level DistributedVirtualSwitch#iscsi_share_level}
  */
  readonly iscsiShareLevel?: string;
  /**
  * The Link Aggregation Control Protocol group version in the switch. Can be one of singleLag or multipleLag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#lacp_api_version DistributedVirtualSwitch#lacp_api_version}
  */
  readonly lacpApiVersion?: string;
  /**
  * Whether or not to enable LACP on all uplink ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#lacp_enabled DistributedVirtualSwitch#lacp_enabled}
  */
  readonly lacpEnabled?: boolean | cdktf.IResolvable;
  /**
  * The uplink LACP mode to use. Can be one of active or passive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#lacp_mode DistributedVirtualSwitch#lacp_mode}
  */
  readonly lacpMode?: string;
  /**
  * Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#link_discovery_operation DistributedVirtualSwitch#link_discovery_operation}
  */
  readonly linkDiscoveryOperation?: string;
  /**
  * The discovery protocol type. Valid values are cdp and lldp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#link_discovery_protocol DistributedVirtualSwitch#link_discovery_protocol}
  */
  readonly linkDiscoveryProtocol?: string;
  /**
  * The maximum allowed usage for the management traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#management_maximum_mbit DistributedVirtualSwitch#management_maximum_mbit}
  */
  readonly managementMaximumMbit?: number;
  /**
  * The amount of guaranteed bandwidth for the management traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#management_reservation_mbit DistributedVirtualSwitch#management_reservation_mbit}
  */
  readonly managementReservationMbit?: number;
  /**
  * The amount of shares to allocate to the management traffic class for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#management_share_count DistributedVirtualSwitch#management_share_count}
  */
  readonly managementShareCount?: number;
  /**
  * The allocation level for the management traffic class. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#management_share_level DistributedVirtualSwitch#management_share_level}
  */
  readonly managementShareLevel?: string;
  /**
  * The maximum MTU on the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#max_mtu DistributedVirtualSwitch#max_mtu}
  */
  readonly maxMtu?: number;
  /**
  * The multicast filtering mode on the switch. Can be one of legacyFiltering, or snooping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#multicast_filtering_mode DistributedVirtualSwitch#multicast_filtering_mode}
  */
  readonly multicastFilteringMode?: string;
  /**
  * The name for the DVS. Must be unique in the folder that it is being created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#name DistributedVirtualSwitch#name}
  */
  readonly name: string;
  /**
  * The number of seconds after which active flows are forced to be exported to the collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#netflow_active_flow_timeout DistributedVirtualSwitch#netflow_active_flow_timeout}
  */
  readonly netflowActiveFlowTimeout?: number;
  /**
  * IP address for the netflow collector, using IPv4 or IPv6. IPv6 is supported in vSphere Distributed Switch Version 6.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#netflow_collector_ip_address DistributedVirtualSwitch#netflow_collector_ip_address}
  */
  readonly netflowCollectorIpAddress?: string;
  /**
  * The port for the netflow collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#netflow_collector_port DistributedVirtualSwitch#netflow_collector_port}
  */
  readonly netflowCollectorPort?: number;
  /**
  * Indicates whether to enable netflow on all ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#netflow_enabled DistributedVirtualSwitch#netflow_enabled}
  */
  readonly netflowEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of seconds after which idle flows are forced to be exported to the collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#netflow_idle_flow_timeout DistributedVirtualSwitch#netflow_idle_flow_timeout}
  */
  readonly netflowIdleFlowTimeout?: number;
  /**
  * Whether to limit analysis to traffic that has both source and destination served by the same host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#netflow_internal_flows_only DistributedVirtualSwitch#netflow_internal_flows_only}
  */
  readonly netflowInternalFlowsOnly?: boolean | cdktf.IResolvable;
  /**
  * The observation Domain ID for the netflow collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#netflow_observation_domain_id DistributedVirtualSwitch#netflow_observation_domain_id}
  */
  readonly netflowObservationDomainId?: number;
  /**
  * The ratio of total number of packets to the number of packets analyzed. Set to 0 to disable sampling, meaning that all packets are analyzed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#netflow_sampling_rate DistributedVirtualSwitch#netflow_sampling_rate}
  */
  readonly netflowSamplingRate?: number;
  /**
  * Whether or not to enable network resource control, enabling advanced traffic shaping and resource control features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#network_resource_control_enabled DistributedVirtualSwitch#network_resource_control_enabled}
  */
  readonly networkResourceControlEnabled?: boolean | cdktf.IResolvable;
  /**
  * The network I/O control version to use. Can be one of version2 or version3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#network_resource_control_version DistributedVirtualSwitch#network_resource_control_version}
  */
  readonly networkResourceControlVersion?: string;
  /**
  * The maximum allowed usage for the nfs traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#nfs_maximum_mbit DistributedVirtualSwitch#nfs_maximum_mbit}
  */
  readonly nfsMaximumMbit?: number;
  /**
  * The amount of guaranteed bandwidth for the nfs traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#nfs_reservation_mbit DistributedVirtualSwitch#nfs_reservation_mbit}
  */
  readonly nfsReservationMbit?: number;
  /**
  * The amount of shares to allocate to the nfs traffic class for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#nfs_share_count DistributedVirtualSwitch#nfs_share_count}
  */
  readonly nfsShareCount?: number;
  /**
  * The allocation level for the nfs traffic class. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#nfs_share_level DistributedVirtualSwitch#nfs_share_level}
  */
  readonly nfsShareLevel?: string;
  /**
  * If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#notify_switches DistributedVirtualSwitch#notify_switches}
  */
  readonly notifySwitches?: boolean | cdktf.IResolvable;
  /**
  * The secondary VLAN ID for this port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#port_private_secondary_vlan_id DistributedVirtualSwitch#port_private_secondary_vlan_id}
  */
  readonly portPrivateSecondaryVlanId?: number;
  /**
  * List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#standby_uplinks DistributedVirtualSwitch#standby_uplinks}
  */
  readonly standbyUplinks?: string[];
  /**
  * A list of tag IDs to apply to this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#tags DistributedVirtualSwitch#tags}
  */
  readonly tags?: string[];
  /**
  * The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#teaming_policy DistributedVirtualSwitch#teaming_policy}
  */
  readonly teamingPolicy?: string;
  /**
  * If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#tx_uplink DistributedVirtualSwitch#tx_uplink}
  */
  readonly txUplink?: boolean | cdktf.IResolvable;
  /**
  * A list of uplink ports. The contents of this list control both the uplink count and names of the uplinks on the DVS across hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#uplinks DistributedVirtualSwitch#uplinks}
  */
  readonly uplinks?: string[];
  /**
  * The maximum allowed usage for the vdp traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vdp_maximum_mbit DistributedVirtualSwitch#vdp_maximum_mbit}
  */
  readonly vdpMaximumMbit?: number;
  /**
  * The amount of guaranteed bandwidth for the vdp traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vdp_reservation_mbit DistributedVirtualSwitch#vdp_reservation_mbit}
  */
  readonly vdpReservationMbit?: number;
  /**
  * The amount of shares to allocate to the vdp traffic class for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vdp_share_count DistributedVirtualSwitch#vdp_share_count}
  */
  readonly vdpShareCount?: number;
  /**
  * The allocation level for the vdp traffic class. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vdp_share_level DistributedVirtualSwitch#vdp_share_level}
  */
  readonly vdpShareLevel?: string;
  /**
  * The version of this virtual switch. Allowed versions are 8.0.0, 7.0.3, 7.0.2, 7.0.0, 6.6.0, 6.5.0, 6.0.0, 5.5.0, 5.1.0, and 5.0.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#version DistributedVirtualSwitch#version}
  */
  readonly version?: string;
  /**
  * The maximum allowed usage for the virtualMachine traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#virtualmachine_maximum_mbit DistributedVirtualSwitch#virtualmachine_maximum_mbit}
  */
  readonly virtualmachineMaximumMbit?: number;
  /**
  * The amount of guaranteed bandwidth for the virtualMachine traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#virtualmachine_reservation_mbit DistributedVirtualSwitch#virtualmachine_reservation_mbit}
  */
  readonly virtualmachineReservationMbit?: number;
  /**
  * The amount of shares to allocate to the virtualMachine traffic class for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#virtualmachine_share_count DistributedVirtualSwitch#virtualmachine_share_count}
  */
  readonly virtualmachineShareCount?: number;
  /**
  * The allocation level for the virtualMachine traffic class. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#virtualmachine_share_level DistributedVirtualSwitch#virtualmachine_share_level}
  */
  readonly virtualmachineShareLevel?: string;
  /**
  * The VLAN ID for single VLAN mode. 0 denotes no VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vlan_id DistributedVirtualSwitch#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * The maximum allowed usage for the vmotion traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vmotion_maximum_mbit DistributedVirtualSwitch#vmotion_maximum_mbit}
  */
  readonly vmotionMaximumMbit?: number;
  /**
  * The amount of guaranteed bandwidth for the vmotion traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vmotion_reservation_mbit DistributedVirtualSwitch#vmotion_reservation_mbit}
  */
  readonly vmotionReservationMbit?: number;
  /**
  * The amount of shares to allocate to the vmotion traffic class for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vmotion_share_count DistributedVirtualSwitch#vmotion_share_count}
  */
  readonly vmotionShareCount?: number;
  /**
  * The allocation level for the vmotion traffic class. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vmotion_share_level DistributedVirtualSwitch#vmotion_share_level}
  */
  readonly vmotionShareLevel?: string;
  /**
  * The maximum allowed usage for the vsan traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vsan_maximum_mbit DistributedVirtualSwitch#vsan_maximum_mbit}
  */
  readonly vsanMaximumMbit?: number;
  /**
  * The amount of guaranteed bandwidth for the vsan traffic class, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vsan_reservation_mbit DistributedVirtualSwitch#vsan_reservation_mbit}
  */
  readonly vsanReservationMbit?: number;
  /**
  * The amount of shares to allocate to the vsan traffic class for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vsan_share_count DistributedVirtualSwitch#vsan_share_count}
  */
  readonly vsanShareCount?: number;
  /**
  * The allocation level for the vsan traffic class. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vsan_share_level DistributedVirtualSwitch#vsan_share_level}
  */
  readonly vsanShareLevel?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#host DistributedVirtualSwitch#host}
  */
  readonly host?: DistributedVirtualSwitchHost[] | cdktf.IResolvable;
  /**
  * pvlan_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#pvlan_mapping DistributedVirtualSwitch#pvlan_mapping}
  */
  readonly pvlanMapping?: DistributedVirtualSwitchPvlanMapping[] | cdktf.IResolvable;
  /**
  * vlan_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#vlan_range DistributedVirtualSwitch#vlan_range}
  */
  readonly vlanRange?: DistributedVirtualSwitchVlanRange[] | cdktf.IResolvable;
}
export interface DistributedVirtualSwitchHost {
  /**
  * Name of the physical NIC to be added to the proxy switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#devices DistributedVirtualSwitch#devices}
  */
  readonly devices?: string[];
  /**
  * The managed object ID of the host this specification applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#host_system_id DistributedVirtualSwitch#host_system_id}
  */
  readonly hostSystemId: string;
}

export function distributedVirtualSwitchHostToTerraform(struct?: DistributedVirtualSwitchHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devices),
    host_system_id: cdktf.stringToTerraform(struct!.hostSystemId),
  }
}


export function distributedVirtualSwitchHostToHclTerraform(struct?: DistributedVirtualSwitchHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host_system_id: {
      value: cdktf.stringToHclTerraform(struct!.hostSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DistributedVirtualSwitchHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DistributedVirtualSwitchHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._hostSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSystemId = this._hostSystemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DistributedVirtualSwitchHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devices = undefined;
      this._hostSystemId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devices = value.devices;
      this._hostSystemId = value.hostSystemId;
    }
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // host_system_id - computed: false, optional: false, required: true
  private _hostSystemId?: string; 
  public get hostSystemId() {
    return this.getStringAttribute('host_system_id');
  }
  public set hostSystemId(value: string) {
    this._hostSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSystemIdInput() {
    return this._hostSystemId;
  }
}

export class DistributedVirtualSwitchHostList extends cdktf.ComplexList {
  public internalValue? : DistributedVirtualSwitchHost[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DistributedVirtualSwitchHostOutputReference {
    return new DistributedVirtualSwitchHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DistributedVirtualSwitchPvlanMapping {
  /**
  * The primary VLAN ID. The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#primary_vlan_id DistributedVirtualSwitch#primary_vlan_id}
  */
  readonly primaryVlanId: number;
  /**
  * The private VLAN type. Valid values are promiscuous, community and isolated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#pvlan_type DistributedVirtualSwitch#pvlan_type}
  */
  readonly pvlanType: string;
  /**
  * The secondary VLAN ID. The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#secondary_vlan_id DistributedVirtualSwitch#secondary_vlan_id}
  */
  readonly secondaryVlanId: number;
}

export function distributedVirtualSwitchPvlanMappingToTerraform(struct?: DistributedVirtualSwitchPvlanMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_vlan_id: cdktf.numberToTerraform(struct!.primaryVlanId),
    pvlan_type: cdktf.stringToTerraform(struct!.pvlanType),
    secondary_vlan_id: cdktf.numberToTerraform(struct!.secondaryVlanId),
  }
}


export function distributedVirtualSwitchPvlanMappingToHclTerraform(struct?: DistributedVirtualSwitchPvlanMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.primaryVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pvlan_type: {
      value: cdktf.stringToHclTerraform(struct!.pvlanType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.secondaryVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DistributedVirtualSwitchPvlanMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DistributedVirtualSwitchPvlanMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryVlanId = this._primaryVlanId;
    }
    if (this._pvlanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvlanType = this._pvlanType;
    }
    if (this._secondaryVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryVlanId = this._secondaryVlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DistributedVirtualSwitchPvlanMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryVlanId = undefined;
      this._pvlanType = undefined;
      this._secondaryVlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryVlanId = value.primaryVlanId;
      this._pvlanType = value.pvlanType;
      this._secondaryVlanId = value.secondaryVlanId;
    }
  }

  // primary_vlan_id - computed: false, optional: false, required: true
  private _primaryVlanId?: number; 
  public get primaryVlanId() {
    return this.getNumberAttribute('primary_vlan_id');
  }
  public set primaryVlanId(value: number) {
    this._primaryVlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryVlanIdInput() {
    return this._primaryVlanId;
  }

  // pvlan_type - computed: false, optional: false, required: true
  private _pvlanType?: string; 
  public get pvlanType() {
    return this.getStringAttribute('pvlan_type');
  }
  public set pvlanType(value: string) {
    this._pvlanType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pvlanTypeInput() {
    return this._pvlanType;
  }

  // secondary_vlan_id - computed: false, optional: false, required: true
  private _secondaryVlanId?: number; 
  public get secondaryVlanId() {
    return this.getNumberAttribute('secondary_vlan_id');
  }
  public set secondaryVlanId(value: number) {
    this._secondaryVlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryVlanIdInput() {
    return this._secondaryVlanId;
  }
}

export class DistributedVirtualSwitchPvlanMappingList extends cdktf.ComplexList {
  public internalValue? : DistributedVirtualSwitchPvlanMapping[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DistributedVirtualSwitchPvlanMappingOutputReference {
    return new DistributedVirtualSwitchPvlanMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DistributedVirtualSwitchVlanRange {
  /**
  * The minimum VLAN to use in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#max_vlan DistributedVirtualSwitch#max_vlan}
  */
  readonly maxVlan: number;
  /**
  * The minimum VLAN to use in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#min_vlan DistributedVirtualSwitch#min_vlan}
  */
  readonly minVlan: number;
}

export function distributedVirtualSwitchVlanRangeToTerraform(struct?: DistributedVirtualSwitchVlanRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_vlan: cdktf.numberToTerraform(struct!.maxVlan),
    min_vlan: cdktf.numberToTerraform(struct!.minVlan),
  }
}


export function distributedVirtualSwitchVlanRangeToHclTerraform(struct?: DistributedVirtualSwitchVlanRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_vlan: {
      value: cdktf.numberToHclTerraform(struct!.maxVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_vlan: {
      value: cdktf.numberToHclTerraform(struct!.minVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DistributedVirtualSwitchVlanRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DistributedVirtualSwitchVlanRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVlan = this._maxVlan;
    }
    if (this._minVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVlan = this._minVlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DistributedVirtualSwitchVlanRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxVlan = undefined;
      this._minVlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxVlan = value.maxVlan;
      this._minVlan = value.minVlan;
    }
  }

  // max_vlan - computed: false, optional: false, required: true
  private _maxVlan?: number; 
  public get maxVlan() {
    return this.getNumberAttribute('max_vlan');
  }
  public set maxVlan(value: number) {
    this._maxVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVlanInput() {
    return this._maxVlan;
  }

  // min_vlan - computed: false, optional: false, required: true
  private _minVlan?: number; 
  public get minVlan() {
    return this.getNumberAttribute('min_vlan');
  }
  public set minVlan(value: number) {
    this._minVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minVlanInput() {
    return this._minVlan;
  }
}

export class DistributedVirtualSwitchVlanRangeList extends cdktf.ComplexList {
  public internalValue? : DistributedVirtualSwitchVlanRange[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DistributedVirtualSwitchVlanRangeOutputReference {
    return new DistributedVirtualSwitchVlanRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch vsphere_distributed_virtual_switch}
*/
export class DistributedVirtualSwitch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_distributed_virtual_switch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DistributedVirtualSwitch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DistributedVirtualSwitch to import
  * @param importFromId The id of the existing DistributedVirtualSwitch that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DistributedVirtualSwitch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_distributed_virtual_switch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/distributed_virtual_switch vsphere_distributed_virtual_switch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DistributedVirtualSwitchConfig
  */
  public constructor(scope: Construct, id: string, config: DistributedVirtualSwitchConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_distributed_virtual_switch',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.8.1',
        providerVersionConstraint: '~> 2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeUplinks = config.activeUplinks;
    this._allowForgedTransmits = config.allowForgedTransmits;
    this._allowMacChanges = config.allowMacChanges;
    this._allowPromiscuous = config.allowPromiscuous;
    this._backupnfcMaximumMbit = config.backupnfcMaximumMbit;
    this._backupnfcReservationMbit = config.backupnfcReservationMbit;
    this._backupnfcShareCount = config.backupnfcShareCount;
    this._backupnfcShareLevel = config.backupnfcShareLevel;
    this._blockAllPorts = config.blockAllPorts;
    this._checkBeacon = config.checkBeacon;
    this._contactDetail = config.contactDetail;
    this._contactName = config.contactName;
    this._customAttributes = config.customAttributes;
    this._datacenterId = config.datacenterId;
    this._description = config.description;
    this._directpathGen2Allowed = config.directpathGen2Allowed;
    this._egressShapingAverageBandwidth = config.egressShapingAverageBandwidth;
    this._egressShapingBurstSize = config.egressShapingBurstSize;
    this._egressShapingEnabled = config.egressShapingEnabled;
    this._egressShapingPeakBandwidth = config.egressShapingPeakBandwidth;
    this._failback = config.failback;
    this._faulttoleranceMaximumMbit = config.faulttoleranceMaximumMbit;
    this._faulttoleranceReservationMbit = config.faulttoleranceReservationMbit;
    this._faulttoleranceShareCount = config.faulttoleranceShareCount;
    this._faulttoleranceShareLevel = config.faulttoleranceShareLevel;
    this._folder = config.folder;
    this._hbrMaximumMbit = config.hbrMaximumMbit;
    this._hbrReservationMbit = config.hbrReservationMbit;
    this._hbrShareCount = config.hbrShareCount;
    this._hbrShareLevel = config.hbrShareLevel;
    this._id = config.id;
    this._ignoreOtherPvlanMappings = config.ignoreOtherPvlanMappings;
    this._ingressShapingAverageBandwidth = config.ingressShapingAverageBandwidth;
    this._ingressShapingBurstSize = config.ingressShapingBurstSize;
    this._ingressShapingEnabled = config.ingressShapingEnabled;
    this._ingressShapingPeakBandwidth = config.ingressShapingPeakBandwidth;
    this._ipv4Address = config.ipv4Address;
    this._iscsiMaximumMbit = config.iscsiMaximumMbit;
    this._iscsiReservationMbit = config.iscsiReservationMbit;
    this._iscsiShareCount = config.iscsiShareCount;
    this._iscsiShareLevel = config.iscsiShareLevel;
    this._lacpApiVersion = config.lacpApiVersion;
    this._lacpEnabled = config.lacpEnabled;
    this._lacpMode = config.lacpMode;
    this._linkDiscoveryOperation = config.linkDiscoveryOperation;
    this._linkDiscoveryProtocol = config.linkDiscoveryProtocol;
    this._managementMaximumMbit = config.managementMaximumMbit;
    this._managementReservationMbit = config.managementReservationMbit;
    this._managementShareCount = config.managementShareCount;
    this._managementShareLevel = config.managementShareLevel;
    this._maxMtu = config.maxMtu;
    this._multicastFilteringMode = config.multicastFilteringMode;
    this._name = config.name;
    this._netflowActiveFlowTimeout = config.netflowActiveFlowTimeout;
    this._netflowCollectorIpAddress = config.netflowCollectorIpAddress;
    this._netflowCollectorPort = config.netflowCollectorPort;
    this._netflowEnabled = config.netflowEnabled;
    this._netflowIdleFlowTimeout = config.netflowIdleFlowTimeout;
    this._netflowInternalFlowsOnly = config.netflowInternalFlowsOnly;
    this._netflowObservationDomainId = config.netflowObservationDomainId;
    this._netflowSamplingRate = config.netflowSamplingRate;
    this._networkResourceControlEnabled = config.networkResourceControlEnabled;
    this._networkResourceControlVersion = config.networkResourceControlVersion;
    this._nfsMaximumMbit = config.nfsMaximumMbit;
    this._nfsReservationMbit = config.nfsReservationMbit;
    this._nfsShareCount = config.nfsShareCount;
    this._nfsShareLevel = config.nfsShareLevel;
    this._notifySwitches = config.notifySwitches;
    this._portPrivateSecondaryVlanId = config.portPrivateSecondaryVlanId;
    this._standbyUplinks = config.standbyUplinks;
    this._tags = config.tags;
    this._teamingPolicy = config.teamingPolicy;
    this._txUplink = config.txUplink;
    this._uplinks = config.uplinks;
    this._vdpMaximumMbit = config.vdpMaximumMbit;
    this._vdpReservationMbit = config.vdpReservationMbit;
    this._vdpShareCount = config.vdpShareCount;
    this._vdpShareLevel = config.vdpShareLevel;
    this._version = config.version;
    this._virtualmachineMaximumMbit = config.virtualmachineMaximumMbit;
    this._virtualmachineReservationMbit = config.virtualmachineReservationMbit;
    this._virtualmachineShareCount = config.virtualmachineShareCount;
    this._virtualmachineShareLevel = config.virtualmachineShareLevel;
    this._vlanId = config.vlanId;
    this._vmotionMaximumMbit = config.vmotionMaximumMbit;
    this._vmotionReservationMbit = config.vmotionReservationMbit;
    this._vmotionShareCount = config.vmotionShareCount;
    this._vmotionShareLevel = config.vmotionShareLevel;
    this._vsanMaximumMbit = config.vsanMaximumMbit;
    this._vsanReservationMbit = config.vsanReservationMbit;
    this._vsanShareCount = config.vsanShareCount;
    this._vsanShareLevel = config.vsanShareLevel;
    this._host.internalValue = config.host;
    this._pvlanMapping.internalValue = config.pvlanMapping;
    this._vlanRange.internalValue = config.vlanRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_uplinks - computed: true, optional: true, required: false
  private _activeUplinks?: string[]; 
  public get activeUplinks() {
    return this.getListAttribute('active_uplinks');
  }
  public set activeUplinks(value: string[]) {
    this._activeUplinks = value;
  }
  public resetActiveUplinks() {
    this._activeUplinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeUplinksInput() {
    return this._activeUplinks;
  }

  // allow_forged_transmits - computed: true, optional: true, required: false
  private _allowForgedTransmits?: boolean | cdktf.IResolvable; 
  public get allowForgedTransmits() {
    return this.getBooleanAttribute('allow_forged_transmits');
  }
  public set allowForgedTransmits(value: boolean | cdktf.IResolvable) {
    this._allowForgedTransmits = value;
  }
  public resetAllowForgedTransmits() {
    this._allowForgedTransmits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowForgedTransmitsInput() {
    return this._allowForgedTransmits;
  }

  // allow_mac_changes - computed: true, optional: true, required: false
  private _allowMacChanges?: boolean | cdktf.IResolvable; 
  public get allowMacChanges() {
    return this.getBooleanAttribute('allow_mac_changes');
  }
  public set allowMacChanges(value: boolean | cdktf.IResolvable) {
    this._allowMacChanges = value;
  }
  public resetAllowMacChanges() {
    this._allowMacChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMacChangesInput() {
    return this._allowMacChanges;
  }

  // allow_promiscuous - computed: true, optional: true, required: false
  private _allowPromiscuous?: boolean | cdktf.IResolvable; 
  public get allowPromiscuous() {
    return this.getBooleanAttribute('allow_promiscuous');
  }
  public set allowPromiscuous(value: boolean | cdktf.IResolvable) {
    this._allowPromiscuous = value;
  }
  public resetAllowPromiscuous() {
    this._allowPromiscuous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPromiscuousInput() {
    return this._allowPromiscuous;
  }

  // backupnfc_maximum_mbit - computed: true, optional: true, required: false
  private _backupnfcMaximumMbit?: number; 
  public get backupnfcMaximumMbit() {
    return this.getNumberAttribute('backupnfc_maximum_mbit');
  }
  public set backupnfcMaximumMbit(value: number) {
    this._backupnfcMaximumMbit = value;
  }
  public resetBackupnfcMaximumMbit() {
    this._backupnfcMaximumMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupnfcMaximumMbitInput() {
    return this._backupnfcMaximumMbit;
  }

  // backupnfc_reservation_mbit - computed: true, optional: true, required: false
  private _backupnfcReservationMbit?: number; 
  public get backupnfcReservationMbit() {
    return this.getNumberAttribute('backupnfc_reservation_mbit');
  }
  public set backupnfcReservationMbit(value: number) {
    this._backupnfcReservationMbit = value;
  }
  public resetBackupnfcReservationMbit() {
    this._backupnfcReservationMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupnfcReservationMbitInput() {
    return this._backupnfcReservationMbit;
  }

  // backupnfc_share_count - computed: true, optional: true, required: false
  private _backupnfcShareCount?: number; 
  public get backupnfcShareCount() {
    return this.getNumberAttribute('backupnfc_share_count');
  }
  public set backupnfcShareCount(value: number) {
    this._backupnfcShareCount = value;
  }
  public resetBackupnfcShareCount() {
    this._backupnfcShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupnfcShareCountInput() {
    return this._backupnfcShareCount;
  }

  // backupnfc_share_level - computed: true, optional: true, required: false
  private _backupnfcShareLevel?: string; 
  public get backupnfcShareLevel() {
    return this.getStringAttribute('backupnfc_share_level');
  }
  public set backupnfcShareLevel(value: string) {
    this._backupnfcShareLevel = value;
  }
  public resetBackupnfcShareLevel() {
    this._backupnfcShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupnfcShareLevelInput() {
    return this._backupnfcShareLevel;
  }

  // block_all_ports - computed: true, optional: true, required: false
  private _blockAllPorts?: boolean | cdktf.IResolvable; 
  public get blockAllPorts() {
    return this.getBooleanAttribute('block_all_ports');
  }
  public set blockAllPorts(value: boolean | cdktf.IResolvable) {
    this._blockAllPorts = value;
  }
  public resetBlockAllPorts() {
    this._blockAllPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAllPortsInput() {
    return this._blockAllPorts;
  }

  // check_beacon - computed: true, optional: true, required: false
  private _checkBeacon?: boolean | cdktf.IResolvable; 
  public get checkBeacon() {
    return this.getBooleanAttribute('check_beacon');
  }
  public set checkBeacon(value: boolean | cdktf.IResolvable) {
    this._checkBeacon = value;
  }
  public resetCheckBeacon() {
    this._checkBeacon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkBeaconInput() {
    return this._checkBeacon;
  }

  // config_version - computed: true, optional: false, required: false
  public get configVersion() {
    return this.getStringAttribute('config_version');
  }

  // contact_detail - computed: false, optional: true, required: false
  private _contactDetail?: string; 
  public get contactDetail() {
    return this.getStringAttribute('contact_detail');
  }
  public set contactDetail(value: string) {
    this._contactDetail = value;
  }
  public resetContactDetail() {
    this._contactDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactDetailInput() {
    return this._contactDetail;
  }

  // contact_name - computed: false, optional: true, required: false
  private _contactName?: string; 
  public get contactName() {
    return this.getStringAttribute('contact_name');
  }
  public set contactName(value: string) {
    this._contactName = value;
  }
  public resetContactName() {
    this._contactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactNameInput() {
    return this._contactName;
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes?: { [key: string]: string }; 
  public get customAttributes() {
    return this.getStringMapAttribute('custom_attributes');
  }
  public set customAttributes(value: { [key: string]: string }) {
    this._customAttributes = value;
  }
  public resetCustomAttributes() {
    this._customAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes;
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // directpath_gen2_allowed - computed: true, optional: true, required: false
  private _directpathGen2Allowed?: boolean | cdktf.IResolvable; 
  public get directpathGen2Allowed() {
    return this.getBooleanAttribute('directpath_gen2_allowed');
  }
  public set directpathGen2Allowed(value: boolean | cdktf.IResolvable) {
    this._directpathGen2Allowed = value;
  }
  public resetDirectpathGen2Allowed() {
    this._directpathGen2Allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directpathGen2AllowedInput() {
    return this._directpathGen2Allowed;
  }

  // egress_shaping_average_bandwidth - computed: true, optional: true, required: false
  private _egressShapingAverageBandwidth?: number; 
  public get egressShapingAverageBandwidth() {
    return this.getNumberAttribute('egress_shaping_average_bandwidth');
  }
  public set egressShapingAverageBandwidth(value: number) {
    this._egressShapingAverageBandwidth = value;
  }
  public resetEgressShapingAverageBandwidth() {
    this._egressShapingAverageBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressShapingAverageBandwidthInput() {
    return this._egressShapingAverageBandwidth;
  }

  // egress_shaping_burst_size - computed: true, optional: true, required: false
  private _egressShapingBurstSize?: number; 
  public get egressShapingBurstSize() {
    return this.getNumberAttribute('egress_shaping_burst_size');
  }
  public set egressShapingBurstSize(value: number) {
    this._egressShapingBurstSize = value;
  }
  public resetEgressShapingBurstSize() {
    this._egressShapingBurstSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressShapingBurstSizeInput() {
    return this._egressShapingBurstSize;
  }

  // egress_shaping_enabled - computed: true, optional: true, required: false
  private _egressShapingEnabled?: boolean | cdktf.IResolvable; 
  public get egressShapingEnabled() {
    return this.getBooleanAttribute('egress_shaping_enabled');
  }
  public set egressShapingEnabled(value: boolean | cdktf.IResolvable) {
    this._egressShapingEnabled = value;
  }
  public resetEgressShapingEnabled() {
    this._egressShapingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressShapingEnabledInput() {
    return this._egressShapingEnabled;
  }

  // egress_shaping_peak_bandwidth - computed: true, optional: true, required: false
  private _egressShapingPeakBandwidth?: number; 
  public get egressShapingPeakBandwidth() {
    return this.getNumberAttribute('egress_shaping_peak_bandwidth');
  }
  public set egressShapingPeakBandwidth(value: number) {
    this._egressShapingPeakBandwidth = value;
  }
  public resetEgressShapingPeakBandwidth() {
    this._egressShapingPeakBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressShapingPeakBandwidthInput() {
    return this._egressShapingPeakBandwidth;
  }

  // failback - computed: true, optional: true, required: false
  private _failback?: boolean | cdktf.IResolvable; 
  public get failback() {
    return this.getBooleanAttribute('failback');
  }
  public set failback(value: boolean | cdktf.IResolvable) {
    this._failback = value;
  }
  public resetFailback() {
    this._failback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failbackInput() {
    return this._failback;
  }

  // faulttolerance_maximum_mbit - computed: true, optional: true, required: false
  private _faulttoleranceMaximumMbit?: number; 
  public get faulttoleranceMaximumMbit() {
    return this.getNumberAttribute('faulttolerance_maximum_mbit');
  }
  public set faulttoleranceMaximumMbit(value: number) {
    this._faulttoleranceMaximumMbit = value;
  }
  public resetFaulttoleranceMaximumMbit() {
    this._faulttoleranceMaximumMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faulttoleranceMaximumMbitInput() {
    return this._faulttoleranceMaximumMbit;
  }

  // faulttolerance_reservation_mbit - computed: true, optional: true, required: false
  private _faulttoleranceReservationMbit?: number; 
  public get faulttoleranceReservationMbit() {
    return this.getNumberAttribute('faulttolerance_reservation_mbit');
  }
  public set faulttoleranceReservationMbit(value: number) {
    this._faulttoleranceReservationMbit = value;
  }
  public resetFaulttoleranceReservationMbit() {
    this._faulttoleranceReservationMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faulttoleranceReservationMbitInput() {
    return this._faulttoleranceReservationMbit;
  }

  // faulttolerance_share_count - computed: true, optional: true, required: false
  private _faulttoleranceShareCount?: number; 
  public get faulttoleranceShareCount() {
    return this.getNumberAttribute('faulttolerance_share_count');
  }
  public set faulttoleranceShareCount(value: number) {
    this._faulttoleranceShareCount = value;
  }
  public resetFaulttoleranceShareCount() {
    this._faulttoleranceShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faulttoleranceShareCountInput() {
    return this._faulttoleranceShareCount;
  }

  // faulttolerance_share_level - computed: true, optional: true, required: false
  private _faulttoleranceShareLevel?: string; 
  public get faulttoleranceShareLevel() {
    return this.getStringAttribute('faulttolerance_share_level');
  }
  public set faulttoleranceShareLevel(value: string) {
    this._faulttoleranceShareLevel = value;
  }
  public resetFaulttoleranceShareLevel() {
    this._faulttoleranceShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faulttoleranceShareLevelInput() {
    return this._faulttoleranceShareLevel;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // hbr_maximum_mbit - computed: true, optional: true, required: false
  private _hbrMaximumMbit?: number; 
  public get hbrMaximumMbit() {
    return this.getNumberAttribute('hbr_maximum_mbit');
  }
  public set hbrMaximumMbit(value: number) {
    this._hbrMaximumMbit = value;
  }
  public resetHbrMaximumMbit() {
    this._hbrMaximumMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbrMaximumMbitInput() {
    return this._hbrMaximumMbit;
  }

  // hbr_reservation_mbit - computed: true, optional: true, required: false
  private _hbrReservationMbit?: number; 
  public get hbrReservationMbit() {
    return this.getNumberAttribute('hbr_reservation_mbit');
  }
  public set hbrReservationMbit(value: number) {
    this._hbrReservationMbit = value;
  }
  public resetHbrReservationMbit() {
    this._hbrReservationMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbrReservationMbitInput() {
    return this._hbrReservationMbit;
  }

  // hbr_share_count - computed: true, optional: true, required: false
  private _hbrShareCount?: number; 
  public get hbrShareCount() {
    return this.getNumberAttribute('hbr_share_count');
  }
  public set hbrShareCount(value: number) {
    this._hbrShareCount = value;
  }
  public resetHbrShareCount() {
    this._hbrShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbrShareCountInput() {
    return this._hbrShareCount;
  }

  // hbr_share_level - computed: true, optional: true, required: false
  private _hbrShareLevel?: string; 
  public get hbrShareLevel() {
    return this.getStringAttribute('hbr_share_level');
  }
  public set hbrShareLevel(value: string) {
    this._hbrShareLevel = value;
  }
  public resetHbrShareLevel() {
    this._hbrShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbrShareLevelInput() {
    return this._hbrShareLevel;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_other_pvlan_mappings - computed: false, optional: true, required: false
  private _ignoreOtherPvlanMappings?: boolean | cdktf.IResolvable; 
  public get ignoreOtherPvlanMappings() {
    return this.getBooleanAttribute('ignore_other_pvlan_mappings');
  }
  public set ignoreOtherPvlanMappings(value: boolean | cdktf.IResolvable) {
    this._ignoreOtherPvlanMappings = value;
  }
  public resetIgnoreOtherPvlanMappings() {
    this._ignoreOtherPvlanMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreOtherPvlanMappingsInput() {
    return this._ignoreOtherPvlanMappings;
  }

  // ingress_shaping_average_bandwidth - computed: true, optional: true, required: false
  private _ingressShapingAverageBandwidth?: number; 
  public get ingressShapingAverageBandwidth() {
    return this.getNumberAttribute('ingress_shaping_average_bandwidth');
  }
  public set ingressShapingAverageBandwidth(value: number) {
    this._ingressShapingAverageBandwidth = value;
  }
  public resetIngressShapingAverageBandwidth() {
    this._ingressShapingAverageBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressShapingAverageBandwidthInput() {
    return this._ingressShapingAverageBandwidth;
  }

  // ingress_shaping_burst_size - computed: true, optional: true, required: false
  private _ingressShapingBurstSize?: number; 
  public get ingressShapingBurstSize() {
    return this.getNumberAttribute('ingress_shaping_burst_size');
  }
  public set ingressShapingBurstSize(value: number) {
    this._ingressShapingBurstSize = value;
  }
  public resetIngressShapingBurstSize() {
    this._ingressShapingBurstSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressShapingBurstSizeInput() {
    return this._ingressShapingBurstSize;
  }

  // ingress_shaping_enabled - computed: true, optional: true, required: false
  private _ingressShapingEnabled?: boolean | cdktf.IResolvable; 
  public get ingressShapingEnabled() {
    return this.getBooleanAttribute('ingress_shaping_enabled');
  }
  public set ingressShapingEnabled(value: boolean | cdktf.IResolvable) {
    this._ingressShapingEnabled = value;
  }
  public resetIngressShapingEnabled() {
    this._ingressShapingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressShapingEnabledInput() {
    return this._ingressShapingEnabled;
  }

  // ingress_shaping_peak_bandwidth - computed: true, optional: true, required: false
  private _ingressShapingPeakBandwidth?: number; 
  public get ingressShapingPeakBandwidth() {
    return this.getNumberAttribute('ingress_shaping_peak_bandwidth');
  }
  public set ingressShapingPeakBandwidth(value: number) {
    this._ingressShapingPeakBandwidth = value;
  }
  public resetIngressShapingPeakBandwidth() {
    this._ingressShapingPeakBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressShapingPeakBandwidthInput() {
    return this._ingressShapingPeakBandwidth;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // iscsi_maximum_mbit - computed: true, optional: true, required: false
  private _iscsiMaximumMbit?: number; 
  public get iscsiMaximumMbit() {
    return this.getNumberAttribute('iscsi_maximum_mbit');
  }
  public set iscsiMaximumMbit(value: number) {
    this._iscsiMaximumMbit = value;
  }
  public resetIscsiMaximumMbit() {
    this._iscsiMaximumMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiMaximumMbitInput() {
    return this._iscsiMaximumMbit;
  }

  // iscsi_reservation_mbit - computed: true, optional: true, required: false
  private _iscsiReservationMbit?: number; 
  public get iscsiReservationMbit() {
    return this.getNumberAttribute('iscsi_reservation_mbit');
  }
  public set iscsiReservationMbit(value: number) {
    this._iscsiReservationMbit = value;
  }
  public resetIscsiReservationMbit() {
    this._iscsiReservationMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiReservationMbitInput() {
    return this._iscsiReservationMbit;
  }

  // iscsi_share_count - computed: true, optional: true, required: false
  private _iscsiShareCount?: number; 
  public get iscsiShareCount() {
    return this.getNumberAttribute('iscsi_share_count');
  }
  public set iscsiShareCount(value: number) {
    this._iscsiShareCount = value;
  }
  public resetIscsiShareCount() {
    this._iscsiShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiShareCountInput() {
    return this._iscsiShareCount;
  }

  // iscsi_share_level - computed: true, optional: true, required: false
  private _iscsiShareLevel?: string; 
  public get iscsiShareLevel() {
    return this.getStringAttribute('iscsi_share_level');
  }
  public set iscsiShareLevel(value: string) {
    this._iscsiShareLevel = value;
  }
  public resetIscsiShareLevel() {
    this._iscsiShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiShareLevelInput() {
    return this._iscsiShareLevel;
  }

  // lacp_api_version - computed: true, optional: true, required: false
  private _lacpApiVersion?: string; 
  public get lacpApiVersion() {
    return this.getStringAttribute('lacp_api_version');
  }
  public set lacpApiVersion(value: string) {
    this._lacpApiVersion = value;
  }
  public resetLacpApiVersion() {
    this._lacpApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpApiVersionInput() {
    return this._lacpApiVersion;
  }

  // lacp_enabled - computed: true, optional: true, required: false
  private _lacpEnabled?: boolean | cdktf.IResolvable; 
  public get lacpEnabled() {
    return this.getBooleanAttribute('lacp_enabled');
  }
  public set lacpEnabled(value: boolean | cdktf.IResolvable) {
    this._lacpEnabled = value;
  }
  public resetLacpEnabled() {
    this._lacpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpEnabledInput() {
    return this._lacpEnabled;
  }

  // lacp_mode - computed: true, optional: true, required: false
  private _lacpMode?: string; 
  public get lacpMode() {
    return this.getStringAttribute('lacp_mode');
  }
  public set lacpMode(value: string) {
    this._lacpMode = value;
  }
  public resetLacpMode() {
    this._lacpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpModeInput() {
    return this._lacpMode;
  }

  // link_discovery_operation - computed: false, optional: true, required: false
  private _linkDiscoveryOperation?: string; 
  public get linkDiscoveryOperation() {
    return this.getStringAttribute('link_discovery_operation');
  }
  public set linkDiscoveryOperation(value: string) {
    this._linkDiscoveryOperation = value;
  }
  public resetLinkDiscoveryOperation() {
    this._linkDiscoveryOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDiscoveryOperationInput() {
    return this._linkDiscoveryOperation;
  }

  // link_discovery_protocol - computed: false, optional: true, required: false
  private _linkDiscoveryProtocol?: string; 
  public get linkDiscoveryProtocol() {
    return this.getStringAttribute('link_discovery_protocol');
  }
  public set linkDiscoveryProtocol(value: string) {
    this._linkDiscoveryProtocol = value;
  }
  public resetLinkDiscoveryProtocol() {
    this._linkDiscoveryProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDiscoveryProtocolInput() {
    return this._linkDiscoveryProtocol;
  }

  // management_maximum_mbit - computed: true, optional: true, required: false
  private _managementMaximumMbit?: number; 
  public get managementMaximumMbit() {
    return this.getNumberAttribute('management_maximum_mbit');
  }
  public set managementMaximumMbit(value: number) {
    this._managementMaximumMbit = value;
  }
  public resetManagementMaximumMbit() {
    this._managementMaximumMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementMaximumMbitInput() {
    return this._managementMaximumMbit;
  }

  // management_reservation_mbit - computed: true, optional: true, required: false
  private _managementReservationMbit?: number; 
  public get managementReservationMbit() {
    return this.getNumberAttribute('management_reservation_mbit');
  }
  public set managementReservationMbit(value: number) {
    this._managementReservationMbit = value;
  }
  public resetManagementReservationMbit() {
    this._managementReservationMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementReservationMbitInput() {
    return this._managementReservationMbit;
  }

  // management_share_count - computed: true, optional: true, required: false
  private _managementShareCount?: number; 
  public get managementShareCount() {
    return this.getNumberAttribute('management_share_count');
  }
  public set managementShareCount(value: number) {
    this._managementShareCount = value;
  }
  public resetManagementShareCount() {
    this._managementShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementShareCountInput() {
    return this._managementShareCount;
  }

  // management_share_level - computed: true, optional: true, required: false
  private _managementShareLevel?: string; 
  public get managementShareLevel() {
    return this.getStringAttribute('management_share_level');
  }
  public set managementShareLevel(value: string) {
    this._managementShareLevel = value;
  }
  public resetManagementShareLevel() {
    this._managementShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementShareLevelInput() {
    return this._managementShareLevel;
  }

  // max_mtu - computed: true, optional: true, required: false
  private _maxMtu?: number; 
  public get maxMtu() {
    return this.getNumberAttribute('max_mtu');
  }
  public set maxMtu(value: number) {
    this._maxMtu = value;
  }
  public resetMaxMtu() {
    this._maxMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMtuInput() {
    return this._maxMtu;
  }

  // multicast_filtering_mode - computed: true, optional: true, required: false
  private _multicastFilteringMode?: string; 
  public get multicastFilteringMode() {
    return this.getStringAttribute('multicast_filtering_mode');
  }
  public set multicastFilteringMode(value: string) {
    this._multicastFilteringMode = value;
  }
  public resetMulticastFilteringMode() {
    this._multicastFilteringMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastFilteringModeInput() {
    return this._multicastFilteringMode;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // netflow_active_flow_timeout - computed: false, optional: true, required: false
  private _netflowActiveFlowTimeout?: number; 
  public get netflowActiveFlowTimeout() {
    return this.getNumberAttribute('netflow_active_flow_timeout');
  }
  public set netflowActiveFlowTimeout(value: number) {
    this._netflowActiveFlowTimeout = value;
  }
  public resetNetflowActiveFlowTimeout() {
    this._netflowActiveFlowTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowActiveFlowTimeoutInput() {
    return this._netflowActiveFlowTimeout;
  }

  // netflow_collector_ip_address - computed: false, optional: true, required: false
  private _netflowCollectorIpAddress?: string; 
  public get netflowCollectorIpAddress() {
    return this.getStringAttribute('netflow_collector_ip_address');
  }
  public set netflowCollectorIpAddress(value: string) {
    this._netflowCollectorIpAddress = value;
  }
  public resetNetflowCollectorIpAddress() {
    this._netflowCollectorIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowCollectorIpAddressInput() {
    return this._netflowCollectorIpAddress;
  }

  // netflow_collector_port - computed: false, optional: true, required: false
  private _netflowCollectorPort?: number; 
  public get netflowCollectorPort() {
    return this.getNumberAttribute('netflow_collector_port');
  }
  public set netflowCollectorPort(value: number) {
    this._netflowCollectorPort = value;
  }
  public resetNetflowCollectorPort() {
    this._netflowCollectorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowCollectorPortInput() {
    return this._netflowCollectorPort;
  }

  // netflow_enabled - computed: true, optional: true, required: false
  private _netflowEnabled?: boolean | cdktf.IResolvable; 
  public get netflowEnabled() {
    return this.getBooleanAttribute('netflow_enabled');
  }
  public set netflowEnabled(value: boolean | cdktf.IResolvable) {
    this._netflowEnabled = value;
  }
  public resetNetflowEnabled() {
    this._netflowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowEnabledInput() {
    return this._netflowEnabled;
  }

  // netflow_idle_flow_timeout - computed: false, optional: true, required: false
  private _netflowIdleFlowTimeout?: number; 
  public get netflowIdleFlowTimeout() {
    return this.getNumberAttribute('netflow_idle_flow_timeout');
  }
  public set netflowIdleFlowTimeout(value: number) {
    this._netflowIdleFlowTimeout = value;
  }
  public resetNetflowIdleFlowTimeout() {
    this._netflowIdleFlowTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowIdleFlowTimeoutInput() {
    return this._netflowIdleFlowTimeout;
  }

  // netflow_internal_flows_only - computed: false, optional: true, required: false
  private _netflowInternalFlowsOnly?: boolean | cdktf.IResolvable; 
  public get netflowInternalFlowsOnly() {
    return this.getBooleanAttribute('netflow_internal_flows_only');
  }
  public set netflowInternalFlowsOnly(value: boolean | cdktf.IResolvable) {
    this._netflowInternalFlowsOnly = value;
  }
  public resetNetflowInternalFlowsOnly() {
    this._netflowInternalFlowsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowInternalFlowsOnlyInput() {
    return this._netflowInternalFlowsOnly;
  }

  // netflow_observation_domain_id - computed: false, optional: true, required: false
  private _netflowObservationDomainId?: number; 
  public get netflowObservationDomainId() {
    return this.getNumberAttribute('netflow_observation_domain_id');
  }
  public set netflowObservationDomainId(value: number) {
    this._netflowObservationDomainId = value;
  }
  public resetNetflowObservationDomainId() {
    this._netflowObservationDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowObservationDomainIdInput() {
    return this._netflowObservationDomainId;
  }

  // netflow_sampling_rate - computed: false, optional: true, required: false
  private _netflowSamplingRate?: number; 
  public get netflowSamplingRate() {
    return this.getNumberAttribute('netflow_sampling_rate');
  }
  public set netflowSamplingRate(value: number) {
    this._netflowSamplingRate = value;
  }
  public resetNetflowSamplingRate() {
    this._netflowSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowSamplingRateInput() {
    return this._netflowSamplingRate;
  }

  // network_resource_control_enabled - computed: false, optional: true, required: false
  private _networkResourceControlEnabled?: boolean | cdktf.IResolvable; 
  public get networkResourceControlEnabled() {
    return this.getBooleanAttribute('network_resource_control_enabled');
  }
  public set networkResourceControlEnabled(value: boolean | cdktf.IResolvable) {
    this._networkResourceControlEnabled = value;
  }
  public resetNetworkResourceControlEnabled() {
    this._networkResourceControlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourceControlEnabledInput() {
    return this._networkResourceControlEnabled;
  }

  // network_resource_control_version - computed: true, optional: true, required: false
  private _networkResourceControlVersion?: string; 
  public get networkResourceControlVersion() {
    return this.getStringAttribute('network_resource_control_version');
  }
  public set networkResourceControlVersion(value: string) {
    this._networkResourceControlVersion = value;
  }
  public resetNetworkResourceControlVersion() {
    this._networkResourceControlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourceControlVersionInput() {
    return this._networkResourceControlVersion;
  }

  // nfs_maximum_mbit - computed: true, optional: true, required: false
  private _nfsMaximumMbit?: number; 
  public get nfsMaximumMbit() {
    return this.getNumberAttribute('nfs_maximum_mbit');
  }
  public set nfsMaximumMbit(value: number) {
    this._nfsMaximumMbit = value;
  }
  public resetNfsMaximumMbit() {
    this._nfsMaximumMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsMaximumMbitInput() {
    return this._nfsMaximumMbit;
  }

  // nfs_reservation_mbit - computed: true, optional: true, required: false
  private _nfsReservationMbit?: number; 
  public get nfsReservationMbit() {
    return this.getNumberAttribute('nfs_reservation_mbit');
  }
  public set nfsReservationMbit(value: number) {
    this._nfsReservationMbit = value;
  }
  public resetNfsReservationMbit() {
    this._nfsReservationMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsReservationMbitInput() {
    return this._nfsReservationMbit;
  }

  // nfs_share_count - computed: true, optional: true, required: false
  private _nfsShareCount?: number; 
  public get nfsShareCount() {
    return this.getNumberAttribute('nfs_share_count');
  }
  public set nfsShareCount(value: number) {
    this._nfsShareCount = value;
  }
  public resetNfsShareCount() {
    this._nfsShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsShareCountInput() {
    return this._nfsShareCount;
  }

  // nfs_share_level - computed: true, optional: true, required: false
  private _nfsShareLevel?: string; 
  public get nfsShareLevel() {
    return this.getStringAttribute('nfs_share_level');
  }
  public set nfsShareLevel(value: string) {
    this._nfsShareLevel = value;
  }
  public resetNfsShareLevel() {
    this._nfsShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsShareLevelInput() {
    return this._nfsShareLevel;
  }

  // notify_switches - computed: true, optional: true, required: false
  private _notifySwitches?: boolean | cdktf.IResolvable; 
  public get notifySwitches() {
    return this.getBooleanAttribute('notify_switches');
  }
  public set notifySwitches(value: boolean | cdktf.IResolvable) {
    this._notifySwitches = value;
  }
  public resetNotifySwitches() {
    this._notifySwitches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifySwitchesInput() {
    return this._notifySwitches;
  }

  // port_private_secondary_vlan_id - computed: true, optional: true, required: false
  private _portPrivateSecondaryVlanId?: number; 
  public get portPrivateSecondaryVlanId() {
    return this.getNumberAttribute('port_private_secondary_vlan_id');
  }
  public set portPrivateSecondaryVlanId(value: number) {
    this._portPrivateSecondaryVlanId = value;
  }
  public resetPortPrivateSecondaryVlanId() {
    this._portPrivateSecondaryVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPrivateSecondaryVlanIdInput() {
    return this._portPrivateSecondaryVlanId;
  }

  // standby_uplinks - computed: true, optional: true, required: false
  private _standbyUplinks?: string[]; 
  public get standbyUplinks() {
    return this.getListAttribute('standby_uplinks');
  }
  public set standbyUplinks(value: string[]) {
    this._standbyUplinks = value;
  }
  public resetStandbyUplinks() {
    this._standbyUplinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyUplinksInput() {
    return this._standbyUplinks;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // teaming_policy - computed: true, optional: true, required: false
  private _teamingPolicy?: string; 
  public get teamingPolicy() {
    return this.getStringAttribute('teaming_policy');
  }
  public set teamingPolicy(value: string) {
    this._teamingPolicy = value;
  }
  public resetTeamingPolicy() {
    this._teamingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamingPolicyInput() {
    return this._teamingPolicy;
  }

  // tx_uplink - computed: true, optional: true, required: false
  private _txUplink?: boolean | cdktf.IResolvable; 
  public get txUplink() {
    return this.getBooleanAttribute('tx_uplink');
  }
  public set txUplink(value: boolean | cdktf.IResolvable) {
    this._txUplink = value;
  }
  public resetTxUplink() {
    this._txUplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txUplinkInput() {
    return this._txUplink;
  }

  // uplinks - computed: true, optional: true, required: false
  private _uplinks?: string[]; 
  public get uplinks() {
    return this.getListAttribute('uplinks');
  }
  public set uplinks(value: string[]) {
    this._uplinks = value;
  }
  public resetUplinks() {
    this._uplinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinksInput() {
    return this._uplinks;
  }

  // vdp_maximum_mbit - computed: true, optional: true, required: false
  private _vdpMaximumMbit?: number; 
  public get vdpMaximumMbit() {
    return this.getNumberAttribute('vdp_maximum_mbit');
  }
  public set vdpMaximumMbit(value: number) {
    this._vdpMaximumMbit = value;
  }
  public resetVdpMaximumMbit() {
    this._vdpMaximumMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdpMaximumMbitInput() {
    return this._vdpMaximumMbit;
  }

  // vdp_reservation_mbit - computed: true, optional: true, required: false
  private _vdpReservationMbit?: number; 
  public get vdpReservationMbit() {
    return this.getNumberAttribute('vdp_reservation_mbit');
  }
  public set vdpReservationMbit(value: number) {
    this._vdpReservationMbit = value;
  }
  public resetVdpReservationMbit() {
    this._vdpReservationMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdpReservationMbitInput() {
    return this._vdpReservationMbit;
  }

  // vdp_share_count - computed: true, optional: true, required: false
  private _vdpShareCount?: number; 
  public get vdpShareCount() {
    return this.getNumberAttribute('vdp_share_count');
  }
  public set vdpShareCount(value: number) {
    this._vdpShareCount = value;
  }
  public resetVdpShareCount() {
    this._vdpShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdpShareCountInput() {
    return this._vdpShareCount;
  }

  // vdp_share_level - computed: true, optional: true, required: false
  private _vdpShareLevel?: string; 
  public get vdpShareLevel() {
    return this.getStringAttribute('vdp_share_level');
  }
  public set vdpShareLevel(value: string) {
    this._vdpShareLevel = value;
  }
  public resetVdpShareLevel() {
    this._vdpShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdpShareLevelInput() {
    return this._vdpShareLevel;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // virtualmachine_maximum_mbit - computed: true, optional: true, required: false
  private _virtualmachineMaximumMbit?: number; 
  public get virtualmachineMaximumMbit() {
    return this.getNumberAttribute('virtualmachine_maximum_mbit');
  }
  public set virtualmachineMaximumMbit(value: number) {
    this._virtualmachineMaximumMbit = value;
  }
  public resetVirtualmachineMaximumMbit() {
    this._virtualmachineMaximumMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualmachineMaximumMbitInput() {
    return this._virtualmachineMaximumMbit;
  }

  // virtualmachine_reservation_mbit - computed: true, optional: true, required: false
  private _virtualmachineReservationMbit?: number; 
  public get virtualmachineReservationMbit() {
    return this.getNumberAttribute('virtualmachine_reservation_mbit');
  }
  public set virtualmachineReservationMbit(value: number) {
    this._virtualmachineReservationMbit = value;
  }
  public resetVirtualmachineReservationMbit() {
    this._virtualmachineReservationMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualmachineReservationMbitInput() {
    return this._virtualmachineReservationMbit;
  }

  // virtualmachine_share_count - computed: true, optional: true, required: false
  private _virtualmachineShareCount?: number; 
  public get virtualmachineShareCount() {
    return this.getNumberAttribute('virtualmachine_share_count');
  }
  public set virtualmachineShareCount(value: number) {
    this._virtualmachineShareCount = value;
  }
  public resetVirtualmachineShareCount() {
    this._virtualmachineShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualmachineShareCountInput() {
    return this._virtualmachineShareCount;
  }

  // virtualmachine_share_level - computed: true, optional: true, required: false
  private _virtualmachineShareLevel?: string; 
  public get virtualmachineShareLevel() {
    return this.getStringAttribute('virtualmachine_share_level');
  }
  public set virtualmachineShareLevel(value: string) {
    this._virtualmachineShareLevel = value;
  }
  public resetVirtualmachineShareLevel() {
    this._virtualmachineShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualmachineShareLevelInput() {
    return this._virtualmachineShareLevel;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vmotion_maximum_mbit - computed: true, optional: true, required: false
  private _vmotionMaximumMbit?: number; 
  public get vmotionMaximumMbit() {
    return this.getNumberAttribute('vmotion_maximum_mbit');
  }
  public set vmotionMaximumMbit(value: number) {
    this._vmotionMaximumMbit = value;
  }
  public resetVmotionMaximumMbit() {
    this._vmotionMaximumMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmotionMaximumMbitInput() {
    return this._vmotionMaximumMbit;
  }

  // vmotion_reservation_mbit - computed: true, optional: true, required: false
  private _vmotionReservationMbit?: number; 
  public get vmotionReservationMbit() {
    return this.getNumberAttribute('vmotion_reservation_mbit');
  }
  public set vmotionReservationMbit(value: number) {
    this._vmotionReservationMbit = value;
  }
  public resetVmotionReservationMbit() {
    this._vmotionReservationMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmotionReservationMbitInput() {
    return this._vmotionReservationMbit;
  }

  // vmotion_share_count - computed: true, optional: true, required: false
  private _vmotionShareCount?: number; 
  public get vmotionShareCount() {
    return this.getNumberAttribute('vmotion_share_count');
  }
  public set vmotionShareCount(value: number) {
    this._vmotionShareCount = value;
  }
  public resetVmotionShareCount() {
    this._vmotionShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmotionShareCountInput() {
    return this._vmotionShareCount;
  }

  // vmotion_share_level - computed: true, optional: true, required: false
  private _vmotionShareLevel?: string; 
  public get vmotionShareLevel() {
    return this.getStringAttribute('vmotion_share_level');
  }
  public set vmotionShareLevel(value: string) {
    this._vmotionShareLevel = value;
  }
  public resetVmotionShareLevel() {
    this._vmotionShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmotionShareLevelInput() {
    return this._vmotionShareLevel;
  }

  // vsan_maximum_mbit - computed: true, optional: true, required: false
  private _vsanMaximumMbit?: number; 
  public get vsanMaximumMbit() {
    return this.getNumberAttribute('vsan_maximum_mbit');
  }
  public set vsanMaximumMbit(value: number) {
    this._vsanMaximumMbit = value;
  }
  public resetVsanMaximumMbit() {
    this._vsanMaximumMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanMaximumMbitInput() {
    return this._vsanMaximumMbit;
  }

  // vsan_reservation_mbit - computed: true, optional: true, required: false
  private _vsanReservationMbit?: number; 
  public get vsanReservationMbit() {
    return this.getNumberAttribute('vsan_reservation_mbit');
  }
  public set vsanReservationMbit(value: number) {
    this._vsanReservationMbit = value;
  }
  public resetVsanReservationMbit() {
    this._vsanReservationMbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanReservationMbitInput() {
    return this._vsanReservationMbit;
  }

  // vsan_share_count - computed: true, optional: true, required: false
  private _vsanShareCount?: number; 
  public get vsanShareCount() {
    return this.getNumberAttribute('vsan_share_count');
  }
  public set vsanShareCount(value: number) {
    this._vsanShareCount = value;
  }
  public resetVsanShareCount() {
    this._vsanShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanShareCountInput() {
    return this._vsanShareCount;
  }

  // vsan_share_level - computed: true, optional: true, required: false
  private _vsanShareLevel?: string; 
  public get vsanShareLevel() {
    return this.getStringAttribute('vsan_share_level');
  }
  public set vsanShareLevel(value: string) {
    this._vsanShareLevel = value;
  }
  public resetVsanShareLevel() {
    this._vsanShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanShareLevelInput() {
    return this._vsanShareLevel;
  }

  // host - computed: false, optional: true, required: false
  private _host = new DistributedVirtualSwitchHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: DistributedVirtualSwitchHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // pvlan_mapping - computed: false, optional: true, required: false
  private _pvlanMapping = new DistributedVirtualSwitchPvlanMappingList(this, "pvlan_mapping", true);
  public get pvlanMapping() {
    return this._pvlanMapping;
  }
  public putPvlanMapping(value: DistributedVirtualSwitchPvlanMapping[] | cdktf.IResolvable) {
    this._pvlanMapping.internalValue = value;
  }
  public resetPvlanMapping() {
    this._pvlanMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvlanMappingInput() {
    return this._pvlanMapping.internalValue;
  }

  // vlan_range - computed: false, optional: true, required: false
  private _vlanRange = new DistributedVirtualSwitchVlanRangeList(this, "vlan_range", true);
  public get vlanRange() {
    return this._vlanRange;
  }
  public putVlanRange(value: DistributedVirtualSwitchVlanRange[] | cdktf.IResolvable) {
    this._vlanRange.internalValue = value;
  }
  public resetVlanRange() {
    this._vlanRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanRangeInput() {
    return this._vlanRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_uplinks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._activeUplinks),
      allow_forged_transmits: cdktf.booleanToTerraform(this._allowForgedTransmits),
      allow_mac_changes: cdktf.booleanToTerraform(this._allowMacChanges),
      allow_promiscuous: cdktf.booleanToTerraform(this._allowPromiscuous),
      backupnfc_maximum_mbit: cdktf.numberToTerraform(this._backupnfcMaximumMbit),
      backupnfc_reservation_mbit: cdktf.numberToTerraform(this._backupnfcReservationMbit),
      backupnfc_share_count: cdktf.numberToTerraform(this._backupnfcShareCount),
      backupnfc_share_level: cdktf.stringToTerraform(this._backupnfcShareLevel),
      block_all_ports: cdktf.booleanToTerraform(this._blockAllPorts),
      check_beacon: cdktf.booleanToTerraform(this._checkBeacon),
      contact_detail: cdktf.stringToTerraform(this._contactDetail),
      contact_name: cdktf.stringToTerraform(this._contactName),
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      description: cdktf.stringToTerraform(this._description),
      directpath_gen2_allowed: cdktf.booleanToTerraform(this._directpathGen2Allowed),
      egress_shaping_average_bandwidth: cdktf.numberToTerraform(this._egressShapingAverageBandwidth),
      egress_shaping_burst_size: cdktf.numberToTerraform(this._egressShapingBurstSize),
      egress_shaping_enabled: cdktf.booleanToTerraform(this._egressShapingEnabled),
      egress_shaping_peak_bandwidth: cdktf.numberToTerraform(this._egressShapingPeakBandwidth),
      failback: cdktf.booleanToTerraform(this._failback),
      faulttolerance_maximum_mbit: cdktf.numberToTerraform(this._faulttoleranceMaximumMbit),
      faulttolerance_reservation_mbit: cdktf.numberToTerraform(this._faulttoleranceReservationMbit),
      faulttolerance_share_count: cdktf.numberToTerraform(this._faulttoleranceShareCount),
      faulttolerance_share_level: cdktf.stringToTerraform(this._faulttoleranceShareLevel),
      folder: cdktf.stringToTerraform(this._folder),
      hbr_maximum_mbit: cdktf.numberToTerraform(this._hbrMaximumMbit),
      hbr_reservation_mbit: cdktf.numberToTerraform(this._hbrReservationMbit),
      hbr_share_count: cdktf.numberToTerraform(this._hbrShareCount),
      hbr_share_level: cdktf.stringToTerraform(this._hbrShareLevel),
      id: cdktf.stringToTerraform(this._id),
      ignore_other_pvlan_mappings: cdktf.booleanToTerraform(this._ignoreOtherPvlanMappings),
      ingress_shaping_average_bandwidth: cdktf.numberToTerraform(this._ingressShapingAverageBandwidth),
      ingress_shaping_burst_size: cdktf.numberToTerraform(this._ingressShapingBurstSize),
      ingress_shaping_enabled: cdktf.booleanToTerraform(this._ingressShapingEnabled),
      ingress_shaping_peak_bandwidth: cdktf.numberToTerraform(this._ingressShapingPeakBandwidth),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      iscsi_maximum_mbit: cdktf.numberToTerraform(this._iscsiMaximumMbit),
      iscsi_reservation_mbit: cdktf.numberToTerraform(this._iscsiReservationMbit),
      iscsi_share_count: cdktf.numberToTerraform(this._iscsiShareCount),
      iscsi_share_level: cdktf.stringToTerraform(this._iscsiShareLevel),
      lacp_api_version: cdktf.stringToTerraform(this._lacpApiVersion),
      lacp_enabled: cdktf.booleanToTerraform(this._lacpEnabled),
      lacp_mode: cdktf.stringToTerraform(this._lacpMode),
      link_discovery_operation: cdktf.stringToTerraform(this._linkDiscoveryOperation),
      link_discovery_protocol: cdktf.stringToTerraform(this._linkDiscoveryProtocol),
      management_maximum_mbit: cdktf.numberToTerraform(this._managementMaximumMbit),
      management_reservation_mbit: cdktf.numberToTerraform(this._managementReservationMbit),
      management_share_count: cdktf.numberToTerraform(this._managementShareCount),
      management_share_level: cdktf.stringToTerraform(this._managementShareLevel),
      max_mtu: cdktf.numberToTerraform(this._maxMtu),
      multicast_filtering_mode: cdktf.stringToTerraform(this._multicastFilteringMode),
      name: cdktf.stringToTerraform(this._name),
      netflow_active_flow_timeout: cdktf.numberToTerraform(this._netflowActiveFlowTimeout),
      netflow_collector_ip_address: cdktf.stringToTerraform(this._netflowCollectorIpAddress),
      netflow_collector_port: cdktf.numberToTerraform(this._netflowCollectorPort),
      netflow_enabled: cdktf.booleanToTerraform(this._netflowEnabled),
      netflow_idle_flow_timeout: cdktf.numberToTerraform(this._netflowIdleFlowTimeout),
      netflow_internal_flows_only: cdktf.booleanToTerraform(this._netflowInternalFlowsOnly),
      netflow_observation_domain_id: cdktf.numberToTerraform(this._netflowObservationDomainId),
      netflow_sampling_rate: cdktf.numberToTerraform(this._netflowSamplingRate),
      network_resource_control_enabled: cdktf.booleanToTerraform(this._networkResourceControlEnabled),
      network_resource_control_version: cdktf.stringToTerraform(this._networkResourceControlVersion),
      nfs_maximum_mbit: cdktf.numberToTerraform(this._nfsMaximumMbit),
      nfs_reservation_mbit: cdktf.numberToTerraform(this._nfsReservationMbit),
      nfs_share_count: cdktf.numberToTerraform(this._nfsShareCount),
      nfs_share_level: cdktf.stringToTerraform(this._nfsShareLevel),
      notify_switches: cdktf.booleanToTerraform(this._notifySwitches),
      port_private_secondary_vlan_id: cdktf.numberToTerraform(this._portPrivateSecondaryVlanId),
      standby_uplinks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._standbyUplinks),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      teaming_policy: cdktf.stringToTerraform(this._teamingPolicy),
      tx_uplink: cdktf.booleanToTerraform(this._txUplink),
      uplinks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uplinks),
      vdp_maximum_mbit: cdktf.numberToTerraform(this._vdpMaximumMbit),
      vdp_reservation_mbit: cdktf.numberToTerraform(this._vdpReservationMbit),
      vdp_share_count: cdktf.numberToTerraform(this._vdpShareCount),
      vdp_share_level: cdktf.stringToTerraform(this._vdpShareLevel),
      version: cdktf.stringToTerraform(this._version),
      virtualmachine_maximum_mbit: cdktf.numberToTerraform(this._virtualmachineMaximumMbit),
      virtualmachine_reservation_mbit: cdktf.numberToTerraform(this._virtualmachineReservationMbit),
      virtualmachine_share_count: cdktf.numberToTerraform(this._virtualmachineShareCount),
      virtualmachine_share_level: cdktf.stringToTerraform(this._virtualmachineShareLevel),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vmotion_maximum_mbit: cdktf.numberToTerraform(this._vmotionMaximumMbit),
      vmotion_reservation_mbit: cdktf.numberToTerraform(this._vmotionReservationMbit),
      vmotion_share_count: cdktf.numberToTerraform(this._vmotionShareCount),
      vmotion_share_level: cdktf.stringToTerraform(this._vmotionShareLevel),
      vsan_maximum_mbit: cdktf.numberToTerraform(this._vsanMaximumMbit),
      vsan_reservation_mbit: cdktf.numberToTerraform(this._vsanReservationMbit),
      vsan_share_count: cdktf.numberToTerraform(this._vsanShareCount),
      vsan_share_level: cdktf.stringToTerraform(this._vsanShareLevel),
      host: cdktf.listMapper(distributedVirtualSwitchHostToTerraform, true)(this._host.internalValue),
      pvlan_mapping: cdktf.listMapper(distributedVirtualSwitchPvlanMappingToTerraform, true)(this._pvlanMapping.internalValue),
      vlan_range: cdktf.listMapper(distributedVirtualSwitchVlanRangeToTerraform, true)(this._vlanRange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_uplinks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._activeUplinks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allow_forged_transmits: {
        value: cdktf.booleanToHclTerraform(this._allowForgedTransmits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_mac_changes: {
        value: cdktf.booleanToHclTerraform(this._allowMacChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_promiscuous: {
        value: cdktf.booleanToHclTerraform(this._allowPromiscuous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backupnfc_maximum_mbit: {
        value: cdktf.numberToHclTerraform(this._backupnfcMaximumMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backupnfc_reservation_mbit: {
        value: cdktf.numberToHclTerraform(this._backupnfcReservationMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backupnfc_share_count: {
        value: cdktf.numberToHclTerraform(this._backupnfcShareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backupnfc_share_level: {
        value: cdktf.stringToHclTerraform(this._backupnfcShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_all_ports: {
        value: cdktf.booleanToHclTerraform(this._blockAllPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_beacon: {
        value: cdktf.booleanToHclTerraform(this._checkBeacon),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contact_detail: {
        value: cdktf.stringToHclTerraform(this._contactDetail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_name: {
        value: cdktf.stringToHclTerraform(this._contactName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directpath_gen2_allowed: {
        value: cdktf.booleanToHclTerraform(this._directpathGen2Allowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      egress_shaping_average_bandwidth: {
        value: cdktf.numberToHclTerraform(this._egressShapingAverageBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      egress_shaping_burst_size: {
        value: cdktf.numberToHclTerraform(this._egressShapingBurstSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      egress_shaping_enabled: {
        value: cdktf.booleanToHclTerraform(this._egressShapingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      egress_shaping_peak_bandwidth: {
        value: cdktf.numberToHclTerraform(this._egressShapingPeakBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failback: {
        value: cdktf.booleanToHclTerraform(this._failback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      faulttolerance_maximum_mbit: {
        value: cdktf.numberToHclTerraform(this._faulttoleranceMaximumMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      faulttolerance_reservation_mbit: {
        value: cdktf.numberToHclTerraform(this._faulttoleranceReservationMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      faulttolerance_share_count: {
        value: cdktf.numberToHclTerraform(this._faulttoleranceShareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      faulttolerance_share_level: {
        value: cdktf.stringToHclTerraform(this._faulttoleranceShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hbr_maximum_mbit: {
        value: cdktf.numberToHclTerraform(this._hbrMaximumMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hbr_reservation_mbit: {
        value: cdktf.numberToHclTerraform(this._hbrReservationMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hbr_share_count: {
        value: cdktf.numberToHclTerraform(this._hbrShareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hbr_share_level: {
        value: cdktf.stringToHclTerraform(this._hbrShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_other_pvlan_mappings: {
        value: cdktf.booleanToHclTerraform(this._ignoreOtherPvlanMappings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ingress_shaping_average_bandwidth: {
        value: cdktf.numberToHclTerraform(this._ingressShapingAverageBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ingress_shaping_burst_size: {
        value: cdktf.numberToHclTerraform(this._ingressShapingBurstSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ingress_shaping_enabled: {
        value: cdktf.booleanToHclTerraform(this._ingressShapingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ingress_shaping_peak_bandwidth: {
        value: cdktf.numberToHclTerraform(this._ingressShapingPeakBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iscsi_maximum_mbit: {
        value: cdktf.numberToHclTerraform(this._iscsiMaximumMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      iscsi_reservation_mbit: {
        value: cdktf.numberToHclTerraform(this._iscsiReservationMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      iscsi_share_count: {
        value: cdktf.numberToHclTerraform(this._iscsiShareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      iscsi_share_level: {
        value: cdktf.stringToHclTerraform(this._iscsiShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lacp_api_version: {
        value: cdktf.stringToHclTerraform(this._lacpApiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lacp_enabled: {
        value: cdktf.booleanToHclTerraform(this._lacpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lacp_mode: {
        value: cdktf.stringToHclTerraform(this._lacpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_discovery_operation: {
        value: cdktf.stringToHclTerraform(this._linkDiscoveryOperation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_discovery_protocol: {
        value: cdktf.stringToHclTerraform(this._linkDiscoveryProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_maximum_mbit: {
        value: cdktf.numberToHclTerraform(this._managementMaximumMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      management_reservation_mbit: {
        value: cdktf.numberToHclTerraform(this._managementReservationMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      management_share_count: {
        value: cdktf.numberToHclTerraform(this._managementShareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      management_share_level: {
        value: cdktf.stringToHclTerraform(this._managementShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_mtu: {
        value: cdktf.numberToHclTerraform(this._maxMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multicast_filtering_mode: {
        value: cdktf.stringToHclTerraform(this._multicastFilteringMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_active_flow_timeout: {
        value: cdktf.numberToHclTerraform(this._netflowActiveFlowTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netflow_collector_ip_address: {
        value: cdktf.stringToHclTerraform(this._netflowCollectorIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_collector_port: {
        value: cdktf.numberToHclTerraform(this._netflowCollectorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netflow_enabled: {
        value: cdktf.booleanToHclTerraform(this._netflowEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      netflow_idle_flow_timeout: {
        value: cdktf.numberToHclTerraform(this._netflowIdleFlowTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netflow_internal_flows_only: {
        value: cdktf.booleanToHclTerraform(this._netflowInternalFlowsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      netflow_observation_domain_id: {
        value: cdktf.numberToHclTerraform(this._netflowObservationDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netflow_sampling_rate: {
        value: cdktf.numberToHclTerraform(this._netflowSamplingRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_resource_control_enabled: {
        value: cdktf.booleanToHclTerraform(this._networkResourceControlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_resource_control_version: {
        value: cdktf.stringToHclTerraform(this._networkResourceControlVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nfs_maximum_mbit: {
        value: cdktf.numberToHclTerraform(this._nfsMaximumMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nfs_reservation_mbit: {
        value: cdktf.numberToHclTerraform(this._nfsReservationMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nfs_share_count: {
        value: cdktf.numberToHclTerraform(this._nfsShareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nfs_share_level: {
        value: cdktf.stringToHclTerraform(this._nfsShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_switches: {
        value: cdktf.booleanToHclTerraform(this._notifySwitches),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_private_secondary_vlan_id: {
        value: cdktf.numberToHclTerraform(this._portPrivateSecondaryVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      standby_uplinks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._standbyUplinks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      teaming_policy: {
        value: cdktf.stringToHclTerraform(this._teamingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tx_uplink: {
        value: cdktf.booleanToHclTerraform(this._txUplink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uplinks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uplinks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vdp_maximum_mbit: {
        value: cdktf.numberToHclTerraform(this._vdpMaximumMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdp_reservation_mbit: {
        value: cdktf.numberToHclTerraform(this._vdpReservationMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdp_share_count: {
        value: cdktf.numberToHclTerraform(this._vdpShareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdp_share_level: {
        value: cdktf.stringToHclTerraform(this._vdpShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtualmachine_maximum_mbit: {
        value: cdktf.numberToHclTerraform(this._virtualmachineMaximumMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtualmachine_reservation_mbit: {
        value: cdktf.numberToHclTerraform(this._virtualmachineReservationMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtualmachine_share_count: {
        value: cdktf.numberToHclTerraform(this._virtualmachineShareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtualmachine_share_level: {
        value: cdktf.stringToHclTerraform(this._virtualmachineShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vmotion_maximum_mbit: {
        value: cdktf.numberToHclTerraform(this._vmotionMaximumMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vmotion_reservation_mbit: {
        value: cdktf.numberToHclTerraform(this._vmotionReservationMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vmotion_share_count: {
        value: cdktf.numberToHclTerraform(this._vmotionShareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vmotion_share_level: {
        value: cdktf.stringToHclTerraform(this._vmotionShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsan_maximum_mbit: {
        value: cdktf.numberToHclTerraform(this._vsanMaximumMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vsan_reservation_mbit: {
        value: cdktf.numberToHclTerraform(this._vsanReservationMbit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vsan_share_count: {
        value: cdktf.numberToHclTerraform(this._vsanShareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vsan_share_level: {
        value: cdktf.stringToHclTerraform(this._vsanShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.listMapperHcl(distributedVirtualSwitchHostToHclTerraform, true)(this._host.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DistributedVirtualSwitchHostList",
      },
      pvlan_mapping: {
        value: cdktf.listMapperHcl(distributedVirtualSwitchPvlanMappingToHclTerraform, true)(this._pvlanMapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DistributedVirtualSwitchPvlanMappingList",
      },
      vlan_range: {
        value: cdktf.listMapperHcl(distributedVirtualSwitchVlanRangeToHclTerraform, true)(this._vlanRange.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DistributedVirtualSwitchVlanRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
