/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VnicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Key of the distributed portgroup the nic will connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#distributed_port_group Vnic#distributed_port_group}
  */
  readonly distributedPortGroup?: string;
  /**
  * UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#distributed_switch_port Vnic#distributed_switch_port}
  */
  readonly distributedSwitchPort?: string;
  /**
  * ESX host the interface belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#host Vnic#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#id Vnic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MAC address of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#mac Vnic#mac}
  */
  readonly mac?: string;
  /**
  * MTU of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#mtu Vnic#mtu}
  */
  readonly mtu?: number;
  /**
  * TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#netstack Vnic#netstack}
  */
  readonly netstack?: string;
  /**
  * portgroup to attach the nic to. Do not set if you set distributed_switch_port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#portgroup Vnic#portgroup}
  */
  readonly portgroup?: string;
  /**
  * Enabled services setting for this interface. Current possible values are 'vmotion', 'management' and 'vsan'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#services Vnic#services}
  */
  readonly services?: string[];
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#ipv4 Vnic#ipv4}
  */
  readonly ipv4?: VnicIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#ipv6 Vnic#ipv6}
  */
  readonly ipv6?: VnicIpv6;
}
export interface VnicIpv4 {
  /**
  * Use DHCP to configure the interface's IPv4 stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#dhcp Vnic#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * IP address of the default gateway, if DHCP is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#gw Vnic#gw}
  */
  readonly gw?: string;
  /**
  * address of the interface, if DHCP is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#ip Vnic#ip}
  */
  readonly ip?: string;
  /**
  * netmask of the interface, if DHCP is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#netmask Vnic#netmask}
  */
  readonly netmask?: string;
}

export function vnicIpv4ToTerraform(struct?: VnicIpv4OutputReference | VnicIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    gw: cdktf.stringToTerraform(struct!.gw),
    ip: cdktf.stringToTerraform(struct!.ip),
    netmask: cdktf.stringToTerraform(struct!.netmask),
  }
}


export function vnicIpv4ToHclTerraform(struct?: VnicIpv4OutputReference | VnicIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gw: {
      value: cdktf.stringToHclTerraform(struct!.gw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnicIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnicIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._gw !== undefined) {
      hasAnyValues = true;
      internalValueResult.gw = this._gw;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnicIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcp = undefined;
      this._gw = undefined;
      this._ip = undefined;
      this._netmask = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcp = value.dhcp;
      this._gw = value.gw;
      this._ip = value.ip;
      this._netmask = value.netmask;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // gw - computed: false, optional: true, required: false
  private _gw?: string; 
  public get gw() {
    return this.getStringAttribute('gw');
  }
  public set gw(value: string) {
    this._gw = value;
  }
  public resetGw() {
    this._gw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwInput() {
    return this._gw;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }
}
export interface VnicIpv6 {
  /**
  * List of IPv6 addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#addresses Vnic#addresses}
  */
  readonly addresses?: string[];
  /**
  * Use IPv6 Autoconfiguration (RFC2462).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#autoconfig Vnic#autoconfig}
  */
  readonly autoconfig?: boolean | cdktf.IResolvable;
  /**
  * Use DHCP to configure the interface's IPv4 stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#dhcp Vnic#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * IP address of the default gateway, if DHCP or autoconfig is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#gw Vnic#gw}
  */
  readonly gw?: string;
}

export function vnicIpv6ToTerraform(struct?: VnicIpv6OutputReference | VnicIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    autoconfig: cdktf.booleanToTerraform(struct!.autoconfig),
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    gw: cdktf.stringToTerraform(struct!.gw),
  }
}


export function vnicIpv6ToHclTerraform(struct?: VnicIpv6OutputReference | VnicIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    autoconfig: {
      value: cdktf.booleanToHclTerraform(struct!.autoconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gw: {
      value: cdktf.stringToHclTerraform(struct!.gw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnicIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnicIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._autoconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoconfig = this._autoconfig;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._gw !== undefined) {
      hasAnyValues = true;
      internalValueResult.gw = this._gw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnicIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addresses = undefined;
      this._autoconfig = undefined;
      this._dhcp = undefined;
      this._gw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addresses = value.addresses;
      this._autoconfig = value.autoconfig;
      this._dhcp = value.dhcp;
      this._gw = value.gw;
    }
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // autoconfig - computed: false, optional: true, required: false
  private _autoconfig?: boolean | cdktf.IResolvable; 
  public get autoconfig() {
    return this.getBooleanAttribute('autoconfig');
  }
  public set autoconfig(value: boolean | cdktf.IResolvable) {
    this._autoconfig = value;
  }
  public resetAutoconfig() {
    this._autoconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoconfigInput() {
    return this._autoconfig;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // gw - computed: false, optional: true, required: false
  private _gw?: string; 
  public get gw() {
    return this.getStringAttribute('gw');
  }
  public set gw(value: string) {
    this._gw = value;
  }
  public resetGw() {
    this._gw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwInput() {
    return this._gw;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic vsphere_vnic}
*/
export class Vnic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_vnic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vnic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vnic to import
  * @param importFromId The id of the existing Vnic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vnic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_vnic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/vnic vsphere_vnic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VnicConfig
  */
  public constructor(scope: Construct, id: string, config: VnicConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_vnic',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.9.0',
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
    this._distributedPortGroup = config.distributedPortGroup;
    this._distributedSwitchPort = config.distributedSwitchPort;
    this._host = config.host;
    this._id = config.id;
    this._mac = config.mac;
    this._mtu = config.mtu;
    this._netstack = config.netstack;
    this._portgroup = config.portgroup;
    this._services = config.services;
    this._ipv4.internalValue = config.ipv4;
    this._ipv6.internalValue = config.ipv6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // distributed_port_group - computed: false, optional: true, required: false
  private _distributedPortGroup?: string; 
  public get distributedPortGroup() {
    return this.getStringAttribute('distributed_port_group');
  }
  public set distributedPortGroup(value: string) {
    this._distributedPortGroup = value;
  }
  public resetDistributedPortGroup() {
    this._distributedPortGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedPortGroupInput() {
    return this._distributedPortGroup;
  }

  // distributed_switch_port - computed: false, optional: true, required: false
  private _distributedSwitchPort?: string; 
  public get distributedSwitchPort() {
    return this.getStringAttribute('distributed_switch_port');
  }
  public set distributedSwitchPort(value: string) {
    this._distributedSwitchPort = value;
  }
  public resetDistributedSwitchPort() {
    this._distributedSwitchPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedSwitchPortInput() {
    return this._distributedSwitchPort;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // mtu - computed: true, optional: true, required: false
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

  // netstack - computed: false, optional: true, required: false
  private _netstack?: string; 
  public get netstack() {
    return this.getStringAttribute('netstack');
  }
  public set netstack(value: string) {
    this._netstack = value;
  }
  public resetNetstack() {
    this._netstack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netstackInput() {
    return this._netstack;
  }

  // portgroup - computed: false, optional: true, required: false
  private _portgroup?: string; 
  public get portgroup() {
    return this.getStringAttribute('portgroup');
  }
  public set portgroup(value: string) {
    this._portgroup = value;
  }
  public resetPortgroup() {
    this._portgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portgroupInput() {
    return this._portgroup;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new VnicIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: VnicIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new VnicIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: VnicIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      distributed_port_group: cdktf.stringToTerraform(this._distributedPortGroup),
      distributed_switch_port: cdktf.stringToTerraform(this._distributedSwitchPort),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      mac: cdktf.stringToTerraform(this._mac),
      mtu: cdktf.numberToTerraform(this._mtu),
      netstack: cdktf.stringToTerraform(this._netstack),
      portgroup: cdktf.stringToTerraform(this._portgroup),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      ipv4: vnicIpv4ToTerraform(this._ipv4.internalValue),
      ipv6: vnicIpv6ToTerraform(this._ipv6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      distributed_port_group: {
        value: cdktf.stringToHclTerraform(this._distributedPortGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distributed_switch_port: {
        value: cdktf.stringToHclTerraform(this._distributedSwitchPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
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
      netstack: {
        value: cdktf.stringToHclTerraform(this._netstack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portgroup: {
        value: cdktf.stringToHclTerraform(this._portgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv4: {
        value: vnicIpv4ToHclTerraform(this._ipv4.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnicIpv4List",
      },
      ipv6: {
        value: vnicIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnicIpv6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
