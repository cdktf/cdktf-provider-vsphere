/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DistributedPortGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#active_uplinks DistributedPortGroup#active_uplinks}
  */
  readonly activeUplinks?: string[];
  /**
  * Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#allow_forged_transmits DistributedPortGroup#allow_forged_transmits}
  */
  readonly allowForgedTransmits?: boolean | cdktf.IResolvable;
  /**
  * Controls whether or not the Media Access Control (MAC) address can be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#allow_mac_changes DistributedPortGroup#allow_mac_changes}
  */
  readonly allowMacChanges?: boolean | cdktf.IResolvable;
  /**
  * Enable promiscuous mode on the network. This flag indicates whether or not all traffic is seen on a given port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#allow_promiscuous DistributedPortGroup#allow_promiscuous}
  */
  readonly allowPromiscuous?: boolean | cdktf.IResolvable;
  /**
  * Auto-expands the port group beyond the port count configured in number_of_ports when necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#auto_expand DistributedPortGroup#auto_expand}
  */
  readonly autoExpand?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to block all ports by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#block_all_ports DistributedPortGroup#block_all_ports}
  */
  readonly blockAllPorts?: boolean | cdktf.IResolvable;
  /**
  * Allow the blocked setting of an individual port to override the setting in the portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#block_override_allowed DistributedPortGroup#block_override_allowed}
  */
  readonly blockOverrideAllowed?: boolean | cdktf.IResolvable;
  /**
  * Enable beacon probing on the ports this policy applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#check_beacon DistributedPortGroup#check_beacon}
  */
  readonly checkBeacon?: boolean | cdktf.IResolvable;
  /**
  * A list of custom attributes to set on this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#custom_attributes DistributedPortGroup#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * The description of the portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#description DistributedPortGroup#description}
  */
  readonly description?: string;
  /**
  * Allow VMDirectPath Gen2 on the ports this policy applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#directpath_gen2_allowed DistributedPortGroup#directpath_gen2_allowed}
  */
  readonly directpathGen2Allowed?: boolean | cdktf.IResolvable;
  /**
  * The UUID of the DVS to attach this port group to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#distributed_virtual_switch_uuid DistributedPortGroup#distributed_virtual_switch_uuid}
  */
  readonly distributedVirtualSwitchUuid: string;
  /**
  * The average egress bandwidth in bits per second if egress shaping is enabled on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#egress_shaping_average_bandwidth DistributedPortGroup#egress_shaping_average_bandwidth}
  */
  readonly egressShapingAverageBandwidth?: number;
  /**
  * The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#egress_shaping_burst_size DistributedPortGroup#egress_shaping_burst_size}
  */
  readonly egressShapingBurstSize?: number;
  /**
  * True if the traffic shaper is enabled for egress traffic on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#egress_shaping_enabled DistributedPortGroup#egress_shaping_enabled}
  */
  readonly egressShapingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#egress_shaping_peak_bandwidth DistributedPortGroup#egress_shaping_peak_bandwidth}
  */
  readonly egressShapingPeakBandwidth?: number;
  /**
  * If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#failback DistributedPortGroup#failback}
  */
  readonly failback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#id DistributedPortGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#ingress_shaping_average_bandwidth DistributedPortGroup#ingress_shaping_average_bandwidth}
  */
  readonly ingressShapingAverageBandwidth?: number;
  /**
  * The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#ingress_shaping_burst_size DistributedPortGroup#ingress_shaping_burst_size}
  */
  readonly ingressShapingBurstSize?: number;
  /**
  * True if the traffic shaper is enabled for ingress traffic on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#ingress_shaping_enabled DistributedPortGroup#ingress_shaping_enabled}
  */
  readonly ingressShapingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#ingress_shaping_peak_bandwidth DistributedPortGroup#ingress_shaping_peak_bandwidth}
  */
  readonly ingressShapingPeakBandwidth?: number;
  /**
  * Whether or not to enable LACP on all uplink ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#lacp_enabled DistributedPortGroup#lacp_enabled}
  */
  readonly lacpEnabled?: boolean | cdktf.IResolvable;
  /**
  * The uplink LACP mode to use. Can be one of active or passive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#lacp_mode DistributedPortGroup#lacp_mode}
  */
  readonly lacpMode?: string;
  /**
  * Allow a live port to be moved in and out of the portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#live_port_moving_allowed DistributedPortGroup#live_port_moving_allowed}
  */
  readonly livePortMovingAllowed?: boolean | cdktf.IResolvable;
  /**
  * The name of the portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#name DistributedPortGroup#name}
  */
  readonly name: string;
  /**
  * Indicates whether to enable netflow on all ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#netflow_enabled DistributedPortGroup#netflow_enabled}
  */
  readonly netflowEnabled?: boolean | cdktf.IResolvable;
  /**
  * Allow the enabling or disabling of Netflow on a port, contrary to the policy in the portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#netflow_override_allowed DistributedPortGroup#netflow_override_allowed}
  */
  readonly netflowOverrideAllowed?: boolean | cdktf.IResolvable;
  /**
  * The key of a network resource pool to associate with this portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#network_resource_pool_key DistributedPortGroup#network_resource_pool_key}
  */
  readonly networkResourcePoolKey?: string;
  /**
  * Allow the network resource pool of an individual port to override the setting in the portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#network_resource_pool_override_allowed DistributedPortGroup#network_resource_pool_override_allowed}
  */
  readonly networkResourcePoolOverrideAllowed?: boolean | cdktf.IResolvable;
  /**
  * If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#notify_switches DistributedPortGroup#notify_switches}
  */
  readonly notifySwitches?: boolean | cdktf.IResolvable;
  /**
  * The number of ports in this portgroup. The DVS will expand and shrink by modifying this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#number_of_ports DistributedPortGroup#number_of_ports}
  */
  readonly numberOfPorts?: number;
  /**
  * Reset the setting of any ports in this portgroup back to the default setting when the port disconnects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#port_config_reset_at_disconnect DistributedPortGroup#port_config_reset_at_disconnect}
  */
  readonly portConfigResetAtDisconnect?: boolean | cdktf.IResolvable;
  /**
  * A template string to use when creating ports in the portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#port_name_format DistributedPortGroup#port_name_format}
  */
  readonly portNameFormat?: string;
  /**
  * The secondary VLAN ID for this port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#port_private_secondary_vlan_id DistributedPortGroup#port_private_secondary_vlan_id}
  */
  readonly portPrivateSecondaryVlanId?: number;
  /**
  * Allow security policy settings on a port to override those on the portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#security_policy_override_allowed DistributedPortGroup#security_policy_override_allowed}
  */
  readonly securityPolicyOverrideAllowed?: boolean | cdktf.IResolvable;
  /**
  * Allow the traffic shaping policies of an individual port to override the settings in the portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#shaping_override_allowed DistributedPortGroup#shaping_override_allowed}
  */
  readonly shapingOverrideAllowed?: boolean | cdktf.IResolvable;
  /**
  * List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#standby_uplinks DistributedPortGroup#standby_uplinks}
  */
  readonly standbyUplinks?: string[];
  /**
  * A list of tag IDs to apply to this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#tags DistributedPortGroup#tags}
  */
  readonly tags?: string[];
  /**
  * The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#teaming_policy DistributedPortGroup#teaming_policy}
  */
  readonly teamingPolicy?: string;
  /**
  * Allow any filter policies set on the individual port to override those in the portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#traffic_filter_override_allowed DistributedPortGroup#traffic_filter_override_allowed}
  */
  readonly trafficFilterOverrideAllowed?: boolean | cdktf.IResolvable;
  /**
  * If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#tx_uplink DistributedPortGroup#tx_uplink}
  */
  readonly txUplink?: boolean | cdktf.IResolvable;
  /**
  * The type of portgroup. Can be one of earlyBinding (static) or ephemeral.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#type DistributedPortGroup#type}
  */
  readonly type?: string;
  /**
  * Allow the uplink teaming policies on a port to override those on the portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#uplink_teaming_override_allowed DistributedPortGroup#uplink_teaming_override_allowed}
  */
  readonly uplinkTeamingOverrideAllowed?: boolean | cdktf.IResolvable;
  /**
  * The VLAN ID for single VLAN mode. 0 denotes no VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#vlan_id DistributedPortGroup#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Allow the VLAN configuration on a port to override those on the portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#vlan_override_allowed DistributedPortGroup#vlan_override_allowed}
  */
  readonly vlanOverrideAllowed?: boolean | cdktf.IResolvable;
  /**
  * vlan_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#vlan_range DistributedPortGroup#vlan_range}
  */
  readonly vlanRange?: DistributedPortGroupVlanRange[] | cdktf.IResolvable;
}
export interface DistributedPortGroupVlanRange {
  /**
  * The minimum VLAN to use in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#max_vlan DistributedPortGroup#max_vlan}
  */
  readonly maxVlan: number;
  /**
  * The minimum VLAN to use in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group#min_vlan DistributedPortGroup#min_vlan}
  */
  readonly minVlan: number;
}

export function distributedPortGroupVlanRangeToTerraform(struct?: DistributedPortGroupVlanRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_vlan: cdktf.numberToTerraform(struct!.maxVlan),
    min_vlan: cdktf.numberToTerraform(struct!.minVlan),
  }
}

export class DistributedPortGroupVlanRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DistributedPortGroupVlanRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DistributedPortGroupVlanRange | cdktf.IResolvable | undefined) {
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

export class DistributedPortGroupVlanRangeList extends cdktf.ComplexList {
  public internalValue? : DistributedPortGroupVlanRange[] | cdktf.IResolvable

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
  public get(index: number): DistributedPortGroupVlanRangeOutputReference {
    return new DistributedPortGroupVlanRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group vsphere_distributed_port_group}
*/
export class DistributedPortGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_distributed_port_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/distributed_port_group vsphere_distributed_port_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DistributedPortGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DistributedPortGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_distributed_port_group',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.5.0',
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
    this._autoExpand = config.autoExpand;
    this._blockAllPorts = config.blockAllPorts;
    this._blockOverrideAllowed = config.blockOverrideAllowed;
    this._checkBeacon = config.checkBeacon;
    this._customAttributes = config.customAttributes;
    this._description = config.description;
    this._directpathGen2Allowed = config.directpathGen2Allowed;
    this._distributedVirtualSwitchUuid = config.distributedVirtualSwitchUuid;
    this._egressShapingAverageBandwidth = config.egressShapingAverageBandwidth;
    this._egressShapingBurstSize = config.egressShapingBurstSize;
    this._egressShapingEnabled = config.egressShapingEnabled;
    this._egressShapingPeakBandwidth = config.egressShapingPeakBandwidth;
    this._failback = config.failback;
    this._id = config.id;
    this._ingressShapingAverageBandwidth = config.ingressShapingAverageBandwidth;
    this._ingressShapingBurstSize = config.ingressShapingBurstSize;
    this._ingressShapingEnabled = config.ingressShapingEnabled;
    this._ingressShapingPeakBandwidth = config.ingressShapingPeakBandwidth;
    this._lacpEnabled = config.lacpEnabled;
    this._lacpMode = config.lacpMode;
    this._livePortMovingAllowed = config.livePortMovingAllowed;
    this._name = config.name;
    this._netflowEnabled = config.netflowEnabled;
    this._netflowOverrideAllowed = config.netflowOverrideAllowed;
    this._networkResourcePoolKey = config.networkResourcePoolKey;
    this._networkResourcePoolOverrideAllowed = config.networkResourcePoolOverrideAllowed;
    this._notifySwitches = config.notifySwitches;
    this._numberOfPorts = config.numberOfPorts;
    this._portConfigResetAtDisconnect = config.portConfigResetAtDisconnect;
    this._portNameFormat = config.portNameFormat;
    this._portPrivateSecondaryVlanId = config.portPrivateSecondaryVlanId;
    this._securityPolicyOverrideAllowed = config.securityPolicyOverrideAllowed;
    this._shapingOverrideAllowed = config.shapingOverrideAllowed;
    this._standbyUplinks = config.standbyUplinks;
    this._tags = config.tags;
    this._teamingPolicy = config.teamingPolicy;
    this._trafficFilterOverrideAllowed = config.trafficFilterOverrideAllowed;
    this._txUplink = config.txUplink;
    this._type = config.type;
    this._uplinkTeamingOverrideAllowed = config.uplinkTeamingOverrideAllowed;
    this._vlanId = config.vlanId;
    this._vlanOverrideAllowed = config.vlanOverrideAllowed;
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

  // auto_expand - computed: false, optional: true, required: false
  private _autoExpand?: boolean | cdktf.IResolvable; 
  public get autoExpand() {
    return this.getBooleanAttribute('auto_expand');
  }
  public set autoExpand(value: boolean | cdktf.IResolvable) {
    this._autoExpand = value;
  }
  public resetAutoExpand() {
    this._autoExpand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExpandInput() {
    return this._autoExpand;
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

  // block_override_allowed - computed: false, optional: true, required: false
  private _blockOverrideAllowed?: boolean | cdktf.IResolvable; 
  public get blockOverrideAllowed() {
    return this.getBooleanAttribute('block_override_allowed');
  }
  public set blockOverrideAllowed(value: boolean | cdktf.IResolvable) {
    this._blockOverrideAllowed = value;
  }
  public resetBlockOverrideAllowed() {
    this._blockOverrideAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOverrideAllowedInput() {
    return this._blockOverrideAllowed;
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

  // distributed_virtual_switch_uuid - computed: false, optional: false, required: true
  private _distributedVirtualSwitchUuid?: string; 
  public get distributedVirtualSwitchUuid() {
    return this.getStringAttribute('distributed_virtual_switch_uuid');
  }
  public set distributedVirtualSwitchUuid(value: string) {
    this._distributedVirtualSwitchUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedVirtualSwitchUuidInput() {
    return this._distributedVirtualSwitchUuid;
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // live_port_moving_allowed - computed: false, optional: true, required: false
  private _livePortMovingAllowed?: boolean | cdktf.IResolvable; 
  public get livePortMovingAllowed() {
    return this.getBooleanAttribute('live_port_moving_allowed');
  }
  public set livePortMovingAllowed(value: boolean | cdktf.IResolvable) {
    this._livePortMovingAllowed = value;
  }
  public resetLivePortMovingAllowed() {
    this._livePortMovingAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livePortMovingAllowedInput() {
    return this._livePortMovingAllowed;
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

  // netflow_override_allowed - computed: false, optional: true, required: false
  private _netflowOverrideAllowed?: boolean | cdktf.IResolvable; 
  public get netflowOverrideAllowed() {
    return this.getBooleanAttribute('netflow_override_allowed');
  }
  public set netflowOverrideAllowed(value: boolean | cdktf.IResolvable) {
    this._netflowOverrideAllowed = value;
  }
  public resetNetflowOverrideAllowed() {
    this._netflowOverrideAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowOverrideAllowedInput() {
    return this._netflowOverrideAllowed;
  }

  // network_resource_pool_key - computed: false, optional: true, required: false
  private _networkResourcePoolKey?: string; 
  public get networkResourcePoolKey() {
    return this.getStringAttribute('network_resource_pool_key');
  }
  public set networkResourcePoolKey(value: string) {
    this._networkResourcePoolKey = value;
  }
  public resetNetworkResourcePoolKey() {
    this._networkResourcePoolKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourcePoolKeyInput() {
    return this._networkResourcePoolKey;
  }

  // network_resource_pool_override_allowed - computed: false, optional: true, required: false
  private _networkResourcePoolOverrideAllowed?: boolean | cdktf.IResolvable; 
  public get networkResourcePoolOverrideAllowed() {
    return this.getBooleanAttribute('network_resource_pool_override_allowed');
  }
  public set networkResourcePoolOverrideAllowed(value: boolean | cdktf.IResolvable) {
    this._networkResourcePoolOverrideAllowed = value;
  }
  public resetNetworkResourcePoolOverrideAllowed() {
    this._networkResourcePoolOverrideAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourcePoolOverrideAllowedInput() {
    return this._networkResourcePoolOverrideAllowed;
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

  // number_of_ports - computed: true, optional: true, required: false
  private _numberOfPorts?: number; 
  public get numberOfPorts() {
    return this.getNumberAttribute('number_of_ports');
  }
  public set numberOfPorts(value: number) {
    this._numberOfPorts = value;
  }
  public resetNumberOfPorts() {
    this._numberOfPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfPortsInput() {
    return this._numberOfPorts;
  }

  // port_config_reset_at_disconnect - computed: false, optional: true, required: false
  private _portConfigResetAtDisconnect?: boolean | cdktf.IResolvable; 
  public get portConfigResetAtDisconnect() {
    return this.getBooleanAttribute('port_config_reset_at_disconnect');
  }
  public set portConfigResetAtDisconnect(value: boolean | cdktf.IResolvable) {
    this._portConfigResetAtDisconnect = value;
  }
  public resetPortConfigResetAtDisconnect() {
    this._portConfigResetAtDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConfigResetAtDisconnectInput() {
    return this._portConfigResetAtDisconnect;
  }

  // port_name_format - computed: false, optional: true, required: false
  private _portNameFormat?: string; 
  public get portNameFormat() {
    return this.getStringAttribute('port_name_format');
  }
  public set portNameFormat(value: string) {
    this._portNameFormat = value;
  }
  public resetPortNameFormat() {
    this._portNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameFormatInput() {
    return this._portNameFormat;
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

  // security_policy_override_allowed - computed: false, optional: true, required: false
  private _securityPolicyOverrideAllowed?: boolean | cdktf.IResolvable; 
  public get securityPolicyOverrideAllowed() {
    return this.getBooleanAttribute('security_policy_override_allowed');
  }
  public set securityPolicyOverrideAllowed(value: boolean | cdktf.IResolvable) {
    this._securityPolicyOverrideAllowed = value;
  }
  public resetSecurityPolicyOverrideAllowed() {
    this._securityPolicyOverrideAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyOverrideAllowedInput() {
    return this._securityPolicyOverrideAllowed;
  }

  // shaping_override_allowed - computed: false, optional: true, required: false
  private _shapingOverrideAllowed?: boolean | cdktf.IResolvable; 
  public get shapingOverrideAllowed() {
    return this.getBooleanAttribute('shaping_override_allowed');
  }
  public set shapingOverrideAllowed(value: boolean | cdktf.IResolvable) {
    this._shapingOverrideAllowed = value;
  }
  public resetShapingOverrideAllowed() {
    this._shapingOverrideAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapingOverrideAllowedInput() {
    return this._shapingOverrideAllowed;
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

  // traffic_filter_override_allowed - computed: false, optional: true, required: false
  private _trafficFilterOverrideAllowed?: boolean | cdktf.IResolvable; 
  public get trafficFilterOverrideAllowed() {
    return this.getBooleanAttribute('traffic_filter_override_allowed');
  }
  public set trafficFilterOverrideAllowed(value: boolean | cdktf.IResolvable) {
    this._trafficFilterOverrideAllowed = value;
  }
  public resetTrafficFilterOverrideAllowed() {
    this._trafficFilterOverrideAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficFilterOverrideAllowedInput() {
    return this._trafficFilterOverrideAllowed;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uplink_teaming_override_allowed - computed: false, optional: true, required: false
  private _uplinkTeamingOverrideAllowed?: boolean | cdktf.IResolvable; 
  public get uplinkTeamingOverrideAllowed() {
    return this.getBooleanAttribute('uplink_teaming_override_allowed');
  }
  public set uplinkTeamingOverrideAllowed(value: boolean | cdktf.IResolvable) {
    this._uplinkTeamingOverrideAllowed = value;
  }
  public resetUplinkTeamingOverrideAllowed() {
    this._uplinkTeamingOverrideAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkTeamingOverrideAllowedInput() {
    return this._uplinkTeamingOverrideAllowed;
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

  // vlan_override_allowed - computed: false, optional: true, required: false
  private _vlanOverrideAllowed?: boolean | cdktf.IResolvable; 
  public get vlanOverrideAllowed() {
    return this.getBooleanAttribute('vlan_override_allowed');
  }
  public set vlanOverrideAllowed(value: boolean | cdktf.IResolvable) {
    this._vlanOverrideAllowed = value;
  }
  public resetVlanOverrideAllowed() {
    this._vlanOverrideAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanOverrideAllowedInput() {
    return this._vlanOverrideAllowed;
  }

  // vlan_range - computed: false, optional: true, required: false
  private _vlanRange = new DistributedPortGroupVlanRangeList(this, "vlan_range", true);
  public get vlanRange() {
    return this._vlanRange;
  }
  public putVlanRange(value: DistributedPortGroupVlanRange[] | cdktf.IResolvable) {
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
      auto_expand: cdktf.booleanToTerraform(this._autoExpand),
      block_all_ports: cdktf.booleanToTerraform(this._blockAllPorts),
      block_override_allowed: cdktf.booleanToTerraform(this._blockOverrideAllowed),
      check_beacon: cdktf.booleanToTerraform(this._checkBeacon),
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      description: cdktf.stringToTerraform(this._description),
      directpath_gen2_allowed: cdktf.booleanToTerraform(this._directpathGen2Allowed),
      distributed_virtual_switch_uuid: cdktf.stringToTerraform(this._distributedVirtualSwitchUuid),
      egress_shaping_average_bandwidth: cdktf.numberToTerraform(this._egressShapingAverageBandwidth),
      egress_shaping_burst_size: cdktf.numberToTerraform(this._egressShapingBurstSize),
      egress_shaping_enabled: cdktf.booleanToTerraform(this._egressShapingEnabled),
      egress_shaping_peak_bandwidth: cdktf.numberToTerraform(this._egressShapingPeakBandwidth),
      failback: cdktf.booleanToTerraform(this._failback),
      id: cdktf.stringToTerraform(this._id),
      ingress_shaping_average_bandwidth: cdktf.numberToTerraform(this._ingressShapingAverageBandwidth),
      ingress_shaping_burst_size: cdktf.numberToTerraform(this._ingressShapingBurstSize),
      ingress_shaping_enabled: cdktf.booleanToTerraform(this._ingressShapingEnabled),
      ingress_shaping_peak_bandwidth: cdktf.numberToTerraform(this._ingressShapingPeakBandwidth),
      lacp_enabled: cdktf.booleanToTerraform(this._lacpEnabled),
      lacp_mode: cdktf.stringToTerraform(this._lacpMode),
      live_port_moving_allowed: cdktf.booleanToTerraform(this._livePortMovingAllowed),
      name: cdktf.stringToTerraform(this._name),
      netflow_enabled: cdktf.booleanToTerraform(this._netflowEnabled),
      netflow_override_allowed: cdktf.booleanToTerraform(this._netflowOverrideAllowed),
      network_resource_pool_key: cdktf.stringToTerraform(this._networkResourcePoolKey),
      network_resource_pool_override_allowed: cdktf.booleanToTerraform(this._networkResourcePoolOverrideAllowed),
      notify_switches: cdktf.booleanToTerraform(this._notifySwitches),
      number_of_ports: cdktf.numberToTerraform(this._numberOfPorts),
      port_config_reset_at_disconnect: cdktf.booleanToTerraform(this._portConfigResetAtDisconnect),
      port_name_format: cdktf.stringToTerraform(this._portNameFormat),
      port_private_secondary_vlan_id: cdktf.numberToTerraform(this._portPrivateSecondaryVlanId),
      security_policy_override_allowed: cdktf.booleanToTerraform(this._securityPolicyOverrideAllowed),
      shaping_override_allowed: cdktf.booleanToTerraform(this._shapingOverrideAllowed),
      standby_uplinks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._standbyUplinks),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      teaming_policy: cdktf.stringToTerraform(this._teamingPolicy),
      traffic_filter_override_allowed: cdktf.booleanToTerraform(this._trafficFilterOverrideAllowed),
      tx_uplink: cdktf.booleanToTerraform(this._txUplink),
      type: cdktf.stringToTerraform(this._type),
      uplink_teaming_override_allowed: cdktf.booleanToTerraform(this._uplinkTeamingOverrideAllowed),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_override_allowed: cdktf.booleanToTerraform(this._vlanOverrideAllowed),
      vlan_range: cdktf.listMapper(distributedPortGroupVlanRangeToTerraform, true)(this._vlanRange.internalValue),
    };
  }
}
