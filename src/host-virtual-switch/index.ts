// https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostVirtualSwitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of active network adapters used for load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#active_nics HostVirtualSwitch#active_nics}
  */
  readonly activeNics: string[];
  /**
  * Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#allow_forged_transmits HostVirtualSwitch#allow_forged_transmits}
  */
  readonly allowForgedTransmits?: boolean | cdktf.IResolvable;
  /**
  * Controls whether or not the Media Access Control (MAC) address can be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#allow_mac_changes HostVirtualSwitch#allow_mac_changes}
  */
  readonly allowMacChanges?: boolean | cdktf.IResolvable;
  /**
  * Enable promiscuous mode on the network. This flag indicates whether or not all traffic is seen on a given port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#allow_promiscuous HostVirtualSwitch#allow_promiscuous}
  */
  readonly allowPromiscuous?: boolean | cdktf.IResolvable;
  /**
  * Determines how often, in seconds, a beacon should be sent to probe for the validity of a link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#beacon_interval HostVirtualSwitch#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Enable beacon probing. Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#check_beacon HostVirtualSwitch#check_beacon}
  */
  readonly checkBeacon?: boolean | cdktf.IResolvable;
  /**
  * If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#failback HostVirtualSwitch#failback}
  */
  readonly failback?: boolean | cdktf.IResolvable;
  /**
  * The managed object ID of the host to set the virtual switch up on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#host_system_id HostVirtualSwitch#host_system_id}
  */
  readonly hostSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#link_discovery_operation HostVirtualSwitch#link_discovery_operation}
  */
  readonly linkDiscoveryOperation?: string;
  /**
  * The discovery protocol type. Valid values are cdp and lldp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#link_discovery_protocol HostVirtualSwitch#link_discovery_protocol}
  */
  readonly linkDiscoveryProtocol?: string;
  /**
  * The maximum transmission unit (MTU) of the virtual switch in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#mtu HostVirtualSwitch#mtu}
  */
  readonly mtu?: number;
  /**
  * The name of the virtual switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#name HostVirtualSwitch#name}
  */
  readonly name: string;
  /**
  * The list of network adapters to bind to this virtual switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#network_adapters HostVirtualSwitch#network_adapters}
  */
  readonly networkAdapters: string[];
  /**
  * If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#notify_switches HostVirtualSwitch#notify_switches}
  */
  readonly notifySwitches?: boolean | cdktf.IResolvable;
  /**
  * The number of ports that this virtual switch is configured to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#number_of_ports HostVirtualSwitch#number_of_ports}
  */
  readonly numberOfPorts?: number;
  /**
  * The average bandwidth in bits per second if traffic shaping is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#shaping_average_bandwidth HostVirtualSwitch#shaping_average_bandwidth}
  */
  readonly shapingAverageBandwidth?: number;
  /**
  * The maximum burst size allowed in bytes if traffic shaping is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#shaping_burst_size HostVirtualSwitch#shaping_burst_size}
  */
  readonly shapingBurstSize?: number;
  /**
  * Enable traffic shaping on this virtual switch or port group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#shaping_enabled HostVirtualSwitch#shaping_enabled}
  */
  readonly shapingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The peak bandwidth during bursts in bits per second if traffic shaping is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#shaping_peak_bandwidth HostVirtualSwitch#shaping_peak_bandwidth}
  */
  readonly shapingPeakBandwidth?: number;
  /**
  * List of standby network adapters used for failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#standby_nics HostVirtualSwitch#standby_nics}
  */
  readonly standbyNics?: string[];
  /**
  * The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#teaming_policy HostVirtualSwitch#teaming_policy}
  */
  readonly teamingPolicy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch vsphere_host_virtual_switch}
*/
export class HostVirtualSwitch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_host_virtual_switch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostVirtualSwitch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostVirtualSwitch to import
  * @param importFromId The id of the existing HostVirtualSwitch that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostVirtualSwitch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_host_virtual_switch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch vsphere_host_virtual_switch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostVirtualSwitchConfig
  */
  public constructor(scope: Construct, id: string, config: HostVirtualSwitchConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_host_virtual_switch',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.6.1',
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
    this._beaconInterval = config.beaconInterval;
    this._checkBeacon = config.checkBeacon;
    this._failback = config.failback;
    this._hostSystemId = config.hostSystemId;
    this._id = config.id;
    this._linkDiscoveryOperation = config.linkDiscoveryOperation;
    this._linkDiscoveryProtocol = config.linkDiscoveryProtocol;
    this._mtu = config.mtu;
    this._name = config.name;
    this._networkAdapters = config.networkAdapters;
    this._notifySwitches = config.notifySwitches;
    this._numberOfPorts = config.numberOfPorts;
    this._shapingAverageBandwidth = config.shapingAverageBandwidth;
    this._shapingBurstSize = config.shapingBurstSize;
    this._shapingEnabled = config.shapingEnabled;
    this._shapingPeakBandwidth = config.shapingPeakBandwidth;
    this._standbyNics = config.standbyNics;
    this._teamingPolicy = config.teamingPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_nics - computed: false, optional: false, required: true
  private _activeNics?: string[]; 
  public get activeNics() {
    return this.getListAttribute('active_nics');
  }
  public set activeNics(value: string[]) {
    this._activeNics = value;
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

  // beacon_interval - computed: false, optional: true, required: false
  private _beaconInterval?: number; 
  public get beaconInterval() {
    return this.getNumberAttribute('beacon_interval');
  }
  public set beaconInterval(value: number) {
    this._beaconInterval = value;
  }
  public resetBeaconInterval() {
    this._beaconInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconIntervalInput() {
    return this._beaconInterval;
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

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // network_adapters - computed: false, optional: false, required: true
  private _networkAdapters?: string[]; 
  public get networkAdapters() {
    return this.getListAttribute('network_adapters');
  }
  public set networkAdapters(value: string[]) {
    this._networkAdapters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAdaptersInput() {
    return this._networkAdapters;
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

  // number_of_ports - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_nics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._activeNics),
      allow_forged_transmits: cdktf.booleanToTerraform(this._allowForgedTransmits),
      allow_mac_changes: cdktf.booleanToTerraform(this._allowMacChanges),
      allow_promiscuous: cdktf.booleanToTerraform(this._allowPromiscuous),
      beacon_interval: cdktf.numberToTerraform(this._beaconInterval),
      check_beacon: cdktf.booleanToTerraform(this._checkBeacon),
      failback: cdktf.booleanToTerraform(this._failback),
      host_system_id: cdktf.stringToTerraform(this._hostSystemId),
      id: cdktf.stringToTerraform(this._id),
      link_discovery_operation: cdktf.stringToTerraform(this._linkDiscoveryOperation),
      link_discovery_protocol: cdktf.stringToTerraform(this._linkDiscoveryProtocol),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      network_adapters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkAdapters),
      notify_switches: cdktf.booleanToTerraform(this._notifySwitches),
      number_of_ports: cdktf.numberToTerraform(this._numberOfPorts),
      shaping_average_bandwidth: cdktf.numberToTerraform(this._shapingAverageBandwidth),
      shaping_burst_size: cdktf.numberToTerraform(this._shapingBurstSize),
      shaping_enabled: cdktf.booleanToTerraform(this._shapingEnabled),
      shaping_peak_bandwidth: cdktf.numberToTerraform(this._shapingPeakBandwidth),
      standby_nics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._standbyNics),
      teaming_policy: cdktf.stringToTerraform(this._teamingPolicy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_nics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._activeNics),
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
      beacon_interval: {
        value: cdktf.numberToHclTerraform(this._beaconInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_beacon: {
        value: cdktf.booleanToHclTerraform(this._checkBeacon),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failback: {
        value: cdktf.booleanToHclTerraform(this._failback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_system_id: {
        value: cdktf.stringToHclTerraform(this._hostSystemId),
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
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_adapters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkAdapters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      notify_switches: {
        value: cdktf.booleanToHclTerraform(this._notifySwitches),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      number_of_ports: {
        value: cdktf.numberToHclTerraform(this._numberOfPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shaping_average_bandwidth: {
        value: cdktf.numberToHclTerraform(this._shapingAverageBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shaping_burst_size: {
        value: cdktf.numberToHclTerraform(this._shapingBurstSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shaping_enabled: {
        value: cdktf.booleanToHclTerraform(this._shapingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shaping_peak_bandwidth: {
        value: cdktf.numberToHclTerraform(this._shapingPeakBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      standby_nics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._standbyNics),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      teaming_policy: {
        value: cdktf.stringToHclTerraform(this._teamingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
