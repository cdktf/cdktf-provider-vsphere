// https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostPortGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of active network adapters used for load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#active_nics HostPortGroup#active_nics}
  */
  readonly activeNics?: string[];
  /**
  * Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#allow_forged_transmits HostPortGroup#allow_forged_transmits}
  */
  readonly allowForgedTransmits?: boolean | cdktf.IResolvable;
  /**
  * Controls whether or not the Media Access Control (MAC) address can be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#allow_mac_changes HostPortGroup#allow_mac_changes}
  */
  readonly allowMacChanges?: boolean | cdktf.IResolvable;
  /**
  * Enable promiscuous mode on the network. This flag indicates whether or not all traffic is seen on a given port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#allow_promiscuous HostPortGroup#allow_promiscuous}
  */
  readonly allowPromiscuous?: boolean | cdktf.IResolvable;
  /**
  * Enable beacon probing. Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#check_beacon HostPortGroup#check_beacon}
  */
  readonly checkBeacon?: boolean | cdktf.IResolvable;
  /**
  * If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#failback HostPortGroup#failback}
  */
  readonly failback?: boolean | cdktf.IResolvable;
  /**
  * The managed object ID of the host to set the virtual switch up on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#host_system_id HostPortGroup#host_system_id}
  */
  readonly hostSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#id HostPortGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the port group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#name HostPortGroup#name}
  */
  readonly name: string;
  /**
  * If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#notify_switches HostPortGroup#notify_switches}
  */
  readonly notifySwitches?: boolean | cdktf.IResolvable;
  /**
  * The average bandwidth in bits per second if traffic shaping is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#shaping_average_bandwidth HostPortGroup#shaping_average_bandwidth}
  */
  readonly shapingAverageBandwidth?: number;
  /**
  * The maximum burst size allowed in bytes if traffic shaping is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#shaping_burst_size HostPortGroup#shaping_burst_size}
  */
  readonly shapingBurstSize?: number;
  /**
  * Enable traffic shaping on this virtual switch or port group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#shaping_enabled HostPortGroup#shaping_enabled}
  */
  readonly shapingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The peak bandwidth during bursts in bits per second if traffic shaping is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#shaping_peak_bandwidth HostPortGroup#shaping_peak_bandwidth}
  */
  readonly shapingPeakBandwidth?: number;
  /**
  * List of standby network adapters used for failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#standby_nics HostPortGroup#standby_nics}
  */
  readonly standbyNics?: string[];
  /**
  * The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#teaming_policy HostPortGroup#teaming_policy}
  */
  readonly teamingPolicy?: string;
  /**
  * The name of the virtual switch to bind this port group to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#virtual_switch_name HostPortGroup#virtual_switch_name}
  */
  readonly virtualSwitchName: string;
  /**
  * The VLAN ID/trunk mode for this port group. An ID of 0 denotes no tagging, an ID of 1-4094 tags with the specific ID, and an ID of 4095 enables trunk mode, allowing the guest to manage its own tagging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#vlan_id HostPortGroup#vlan_id}
  */
  readonly vlanId?: number;
}
export interface HostPortGroupPorts {
}

export function hostPortGroupPortsToTerraform(struct?: HostPortGroupPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class HostPortGroupPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostPortGroupPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostPortGroupPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mac_addresses - computed: true, optional: false, required: false
  public get macAddresses() {
    return this.getListAttribute('mac_addresses');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class HostPortGroupPortsList extends cdktf.ComplexList {

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
  public get(index: number): HostPortGroupPortsOutputReference {
    return new HostPortGroupPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group vsphere_host_port_group}
*/
export class HostPortGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_host_port_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostPortGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostPortGroup to import
  * @param importFromId The id of the existing HostPortGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostPortGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_host_port_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group vsphere_host_port_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostPortGroupConfig
  */
  public constructor(scope: Construct, id: string, config: HostPortGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_host_port_group',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.5.1',
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
    this._activeNics = config.activeNics;
    this._allowForgedTransmits = config.allowForgedTransmits;
    this._allowMacChanges = config.allowMacChanges;
    this._allowPromiscuous = config.allowPromiscuous;
    this._checkBeacon = config.checkBeacon;
    this._failback = config.failback;
    this._hostSystemId = config.hostSystemId;
    this._id = config.id;
    this._name = config.name;
    this._notifySwitches = config.notifySwitches;
    this._shapingAverageBandwidth = config.shapingAverageBandwidth;
    this._shapingBurstSize = config.shapingBurstSize;
    this._shapingEnabled = config.shapingEnabled;
    this._shapingPeakBandwidth = config.shapingPeakBandwidth;
    this._standbyNics = config.standbyNics;
    this._teamingPolicy = config.teamingPolicy;
    this._virtualSwitchName = config.virtualSwitchName;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_nics - computed: false, optional: true, required: false
  private _activeNics?: string[]; 
  public get activeNics() {
    return this.getListAttribute('active_nics');
  }
  public set activeNics(value: string[]) {
    this._activeNics = value;
  }
  public resetActiveNics() {
    this._activeNics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNicsInput() {
    return this._activeNics;
  }

  // allow_forged_transmits - computed: false, optional: true, required: false
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

  // allow_mac_changes - computed: false, optional: true, required: false
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

  // allow_promiscuous - computed: false, optional: true, required: false
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

  // check_beacon - computed: false, optional: true, required: false
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

  // computed_policy - computed: true, optional: false, required: false
  private _computedPolicy = new cdktf.StringMap(this, "computed_policy");
  public get computedPolicy() {
    return this._computedPolicy;
  }

  // failback - computed: false, optional: true, required: false
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // notify_switches - computed: false, optional: true, required: false
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

  // ports - computed: true, optional: false, required: false
  private _ports = new HostPortGroupPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // shaping_average_bandwidth - computed: false, optional: true, required: false
  private _shapingAverageBandwidth?: number; 
  public get shapingAverageBandwidth() {
    return this.getNumberAttribute('shaping_average_bandwidth');
  }
  public set shapingAverageBandwidth(value: number) {
    this._shapingAverageBandwidth = value;
  }
  public resetShapingAverageBandwidth() {
    this._shapingAverageBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapingAverageBandwidthInput() {
    return this._shapingAverageBandwidth;
  }

  // shaping_burst_size - computed: false, optional: true, required: false
  private _shapingBurstSize?: number; 
  public get shapingBurstSize() {
    return this.getNumberAttribute('shaping_burst_size');
  }
  public set shapingBurstSize(value: number) {
    this._shapingBurstSize = value;
  }
  public resetShapingBurstSize() {
    this._shapingBurstSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapingBurstSizeInput() {
    return this._shapingBurstSize;
  }

  // shaping_enabled - computed: false, optional: true, required: false
  private _shapingEnabled?: boolean | cdktf.IResolvable; 
  public get shapingEnabled() {
    return this.getBooleanAttribute('shaping_enabled');
  }
  public set shapingEnabled(value: boolean | cdktf.IResolvable) {
    this._shapingEnabled = value;
  }
  public resetShapingEnabled() {
    this._shapingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapingEnabledInput() {
    return this._shapingEnabled;
  }

  // shaping_peak_bandwidth - computed: false, optional: true, required: false
  private _shapingPeakBandwidth?: number; 
  public get shapingPeakBandwidth() {
    return this.getNumberAttribute('shaping_peak_bandwidth');
  }
  public set shapingPeakBandwidth(value: number) {
    this._shapingPeakBandwidth = value;
  }
  public resetShapingPeakBandwidth() {
    this._shapingPeakBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapingPeakBandwidthInput() {
    return this._shapingPeakBandwidth;
  }

  // standby_nics - computed: false, optional: true, required: false
  private _standbyNics?: string[]; 
  public get standbyNics() {
    return this.getListAttribute('standby_nics');
  }
  public set standbyNics(value: string[]) {
    this._standbyNics = value;
  }
  public resetStandbyNics() {
    this._standbyNics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyNicsInput() {
    return this._standbyNics;
  }

  // teaming_policy - computed: false, optional: true, required: false
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

  // virtual_switch_name - computed: false, optional: false, required: true
  private _virtualSwitchName?: string; 
  public get virtualSwitchName() {
    return this.getStringAttribute('virtual_switch_name');
  }
  public set virtualSwitchName(value: string) {
    this._virtualSwitchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSwitchNameInput() {
    return this._virtualSwitchName;
  }

  // vlan_id - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_nics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._activeNics),
      allow_forged_transmits: cdktf.booleanToTerraform(this._allowForgedTransmits),
      allow_mac_changes: cdktf.booleanToTerraform(this._allowMacChanges),
      allow_promiscuous: cdktf.booleanToTerraform(this._allowPromiscuous),
      check_beacon: cdktf.booleanToTerraform(this._checkBeacon),
      failback: cdktf.booleanToTerraform(this._failback),
      host_system_id: cdktf.stringToTerraform(this._hostSystemId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notify_switches: cdktf.booleanToTerraform(this._notifySwitches),
      shaping_average_bandwidth: cdktf.numberToTerraform(this._shapingAverageBandwidth),
      shaping_burst_size: cdktf.numberToTerraform(this._shapingBurstSize),
      shaping_enabled: cdktf.booleanToTerraform(this._shapingEnabled),
      shaping_peak_bandwidth: cdktf.numberToTerraform(this._shapingPeakBandwidth),
      standby_nics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._standbyNics),
      teaming_policy: cdktf.stringToTerraform(this._teamingPolicy),
      virtual_switch_name: cdktf.stringToTerraform(this._virtualSwitchName),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
    };
  }
}
