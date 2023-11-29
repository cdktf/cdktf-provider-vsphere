/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuestOsCustomizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description for the customization specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#description GuestOsCustomization#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#id GuestOsCustomization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the customization specification is the unique identifier per vCenter Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#name GuestOsCustomization#name}
  */
  readonly name: string;
  /**
  * The type of customization specification: One among: Windows, Linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#type GuestOsCustomization#type}
  */
  readonly type: string;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#spec GuestOsCustomization#spec}
  */
  readonly spec: GuestOsCustomizationSpec;
}
export interface GuestOsCustomizationSpecLinuxOptions {
  /**
  * The domain name for this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#domain GuestOsCustomization#domain}
  */
  readonly domain: string;
  /**
  * The hostname for this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#host_name GuestOsCustomization#host_name}
  */
  readonly hostName: string;
  /**
  * Specifies whether or not the hardware clock should be in UTC or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#hw_clock_utc GuestOsCustomization#hw_clock_utc}
  */
  readonly hwClockUtc?: boolean | cdktf.IResolvable;
  /**
  * The customization script to run before and or after guest customization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#script_text GuestOsCustomization#script_text}
  */
  readonly scriptText?: string;
  /**
  * Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#time_zone GuestOsCustomization#time_zone}
  */
  readonly timeZone?: string;
}

export function guestOsCustomizationSpecLinuxOptionsToTerraform(struct?: GuestOsCustomizationSpecLinuxOptionsOutputReference | GuestOsCustomizationSpecLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    hw_clock_utc: cdktf.booleanToTerraform(struct!.hwClockUtc),
    script_text: cdktf.stringToTerraform(struct!.scriptText),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}

export class GuestOsCustomizationSpecLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuestOsCustomizationSpecLinuxOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._hwClockUtc !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwClockUtc = this._hwClockUtc;
    }
    if (this._scriptText !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptText = this._scriptText;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuestOsCustomizationSpecLinuxOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._hostName = undefined;
      this._hwClockUtc = undefined;
      this._scriptText = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._hostName = value.hostName;
      this._hwClockUtc = value.hwClockUtc;
      this._scriptText = value.scriptText;
      this._timeZone = value.timeZone;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // hw_clock_utc - computed: false, optional: true, required: false
  private _hwClockUtc?: boolean | cdktf.IResolvable; 
  public get hwClockUtc() {
    return this.getBooleanAttribute('hw_clock_utc');
  }
  public set hwClockUtc(value: boolean | cdktf.IResolvable) {
    this._hwClockUtc = value;
  }
  public resetHwClockUtc() {
    this._hwClockUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwClockUtcInput() {
    return this._hwClockUtc;
  }

  // script_text - computed: false, optional: true, required: false
  private _scriptText?: string; 
  public get scriptText() {
    return this.getStringAttribute('script_text');
  }
  public set scriptText(value: string) {
    this._scriptText = value;
  }
  public resetScriptText() {
    this._scriptText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptTextInput() {
    return this._scriptText;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface GuestOsCustomizationSpecNetworkInterface {
  /**
  * A DNS search domain to add to the DNS configuration on the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#dns_domain GuestOsCustomization#dns_domain}
  */
  readonly dnsDomain?: string;
  /**
  * Network-interface specific DNS settings for Windows operating systems. Ignored on Linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#dns_server_list GuestOsCustomization#dns_server_list}
  */
  readonly dnsServerList?: string[];
  /**
  * The IPv4 address assigned to this network adapter. If left blank, DHCP is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#ipv4_address GuestOsCustomization#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#ipv4_netmask GuestOsCustomization#ipv4_netmask}
  */
  readonly ipv4Netmask?: number;
  /**
  * The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#ipv6_address GuestOsCustomization#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#ipv6_netmask GuestOsCustomization#ipv6_netmask}
  */
  readonly ipv6Netmask?: number;
}

export function guestOsCustomizationSpecNetworkInterfaceToTerraform(struct?: GuestOsCustomizationSpecNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_domain: cdktf.stringToTerraform(struct!.dnsDomain),
    dns_server_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServerList),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.numberToTerraform(struct!.ipv4Netmask),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_netmask: cdktf.numberToTerraform(struct!.ipv6Netmask),
  }
}

export class GuestOsCustomizationSpecNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GuestOsCustomizationSpecNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomain = this._dnsDomain;
    }
    if (this._dnsServerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerList = this._dnsServerList;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Netmask = this._ipv6Netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuestOsCustomizationSpecNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsDomain = undefined;
      this._dnsServerList = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
      this._ipv6Address = undefined;
      this._ipv6Netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsDomain = value.dnsDomain;
      this._dnsServerList = value.dnsServerList;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
      this._ipv6Address = value.ipv6Address;
      this._ipv6Netmask = value.ipv6Netmask;
    }
  }

  // dns_domain - computed: false, optional: true, required: false
  private _dnsDomain?: string; 
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }
  public set dnsDomain(value: string) {
    this._dnsDomain = value;
  }
  public resetDnsDomain() {
    this._dnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainInput() {
    return this._dnsDomain;
  }

  // dns_server_list - computed: false, optional: true, required: false
  private _dnsServerList?: string[]; 
  public get dnsServerList() {
    return this.getListAttribute('dns_server_list');
  }
  public set dnsServerList(value: string[]) {
    this._dnsServerList = value;
  }
  public resetDnsServerList() {
    this._dnsServerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerListInput() {
    return this._dnsServerList;
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

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: number; 
  public get ipv4Netmask() {
    return this.getNumberAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: number) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_netmask - computed: false, optional: true, required: false
  private _ipv6Netmask?: number; 
  public get ipv6Netmask() {
    return this.getNumberAttribute('ipv6_netmask');
  }
  public set ipv6Netmask(value: number) {
    this._ipv6Netmask = value;
  }
  public resetIpv6Netmask() {
    this._ipv6Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetmaskInput() {
    return this._ipv6Netmask;
  }
}

export class GuestOsCustomizationSpecNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : GuestOsCustomizationSpecNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): GuestOsCustomizationSpecNetworkInterfaceOutputReference {
    return new GuestOsCustomizationSpecNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GuestOsCustomizationSpecWindowsOptions {
  /**
  * The new administrator password for this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#admin_password GuestOsCustomization#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Specifies whether or not the VM automatically logs on as Administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#auto_logon GuestOsCustomization#auto_logon}
  */
  readonly autoLogon?: boolean | cdktf.IResolvable;
  /**
  * Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#auto_logon_count GuestOsCustomization#auto_logon_count}
  */
  readonly autoLogonCount?: number;
  /**
  * The host name for this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#computer_name GuestOsCustomization#computer_name}
  */
  readonly computerName: string;
  /**
  * The password of the domain administrator used to join this virtual machine to the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#domain_admin_password GuestOsCustomization#domain_admin_password}
  */
  readonly domainAdminPassword?: string;
  /**
  * The user account of the domain administrator used to join this virtual machine to the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#domain_admin_user GuestOsCustomization#domain_admin_user}
  */
  readonly domainAdminUser?: string;
  /**
  * The full name of the user of this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#full_name GuestOsCustomization#full_name}
  */
  readonly fullName?: string;
  /**
  * The domain that the virtual machine should join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#join_domain GuestOsCustomization#join_domain}
  */
  readonly joinDomain?: string;
  /**
  * The organization name this virtual machine is being installed for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#organization_name GuestOsCustomization#organization_name}
  */
  readonly organizationName?: string;
  /**
  * The product key for this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#product_key GuestOsCustomization#product_key}
  */
  readonly productKey?: string;
  /**
  * A list of commands to run at first user logon, after guest customization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#run_once_command_list GuestOsCustomization#run_once_command_list}
  */
  readonly runOnceCommandList?: string[];
  /**
  * The new time zone for the virtual machine. This is a sysprep-dictated timezone code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#time_zone GuestOsCustomization#time_zone}
  */
  readonly timeZone?: number;
  /**
  * The workgroup for this virtual machine if not joining a domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#workgroup GuestOsCustomization#workgroup}
  */
  readonly workgroup?: string;
}

export function guestOsCustomizationSpecWindowsOptionsToTerraform(struct?: GuestOsCustomizationSpecWindowsOptionsOutputReference | GuestOsCustomizationSpecWindowsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    auto_logon: cdktf.booleanToTerraform(struct!.autoLogon),
    auto_logon_count: cdktf.numberToTerraform(struct!.autoLogonCount),
    computer_name: cdktf.stringToTerraform(struct!.computerName),
    domain_admin_password: cdktf.stringToTerraform(struct!.domainAdminPassword),
    domain_admin_user: cdktf.stringToTerraform(struct!.domainAdminUser),
    full_name: cdktf.stringToTerraform(struct!.fullName),
    join_domain: cdktf.stringToTerraform(struct!.joinDomain),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    product_key: cdktf.stringToTerraform(struct!.productKey),
    run_once_command_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.runOnceCommandList),
    time_zone: cdktf.numberToTerraform(struct!.timeZone),
    workgroup: cdktf.stringToTerraform(struct!.workgroup),
  }
}

export class GuestOsCustomizationSpecWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuestOsCustomizationSpecWindowsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._autoLogon !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLogon = this._autoLogon;
    }
    if (this._autoLogonCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLogonCount = this._autoLogonCount;
    }
    if (this._computerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.computerName = this._computerName;
    }
    if (this._domainAdminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainAdminPassword = this._domainAdminPassword;
    }
    if (this._domainAdminUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainAdminUser = this._domainAdminUser;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._joinDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinDomain = this._joinDomain;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._productKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.productKey = this._productKey;
    }
    if (this._runOnceCommandList !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnceCommandList = this._runOnceCommandList;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._workgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.workgroup = this._workgroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuestOsCustomizationSpecWindowsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._autoLogon = undefined;
      this._autoLogonCount = undefined;
      this._computerName = undefined;
      this._domainAdminPassword = undefined;
      this._domainAdminUser = undefined;
      this._fullName = undefined;
      this._joinDomain = undefined;
      this._organizationName = undefined;
      this._productKey = undefined;
      this._runOnceCommandList = undefined;
      this._timeZone = undefined;
      this._workgroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._autoLogon = value.autoLogon;
      this._autoLogonCount = value.autoLogonCount;
      this._computerName = value.computerName;
      this._domainAdminPassword = value.domainAdminPassword;
      this._domainAdminUser = value.domainAdminUser;
      this._fullName = value.fullName;
      this._joinDomain = value.joinDomain;
      this._organizationName = value.organizationName;
      this._productKey = value.productKey;
      this._runOnceCommandList = value.runOnceCommandList;
      this._timeZone = value.timeZone;
      this._workgroup = value.workgroup;
    }
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // auto_logon - computed: false, optional: true, required: false
  private _autoLogon?: boolean | cdktf.IResolvable; 
  public get autoLogon() {
    return this.getBooleanAttribute('auto_logon');
  }
  public set autoLogon(value: boolean | cdktf.IResolvable) {
    this._autoLogon = value;
  }
  public resetAutoLogon() {
    this._autoLogon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLogonInput() {
    return this._autoLogon;
  }

  // auto_logon_count - computed: false, optional: true, required: false
  private _autoLogonCount?: number; 
  public get autoLogonCount() {
    return this.getNumberAttribute('auto_logon_count');
  }
  public set autoLogonCount(value: number) {
    this._autoLogonCount = value;
  }
  public resetAutoLogonCount() {
    this._autoLogonCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLogonCountInput() {
    return this._autoLogonCount;
  }

  // computer_name - computed: false, optional: false, required: true
  private _computerName?: string; 
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }
  public set computerName(value: string) {
    this._computerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNameInput() {
    return this._computerName;
  }

  // domain_admin_password - computed: false, optional: true, required: false
  private _domainAdminPassword?: string; 
  public get domainAdminPassword() {
    return this.getStringAttribute('domain_admin_password');
  }
  public set domainAdminPassword(value: string) {
    this._domainAdminPassword = value;
  }
  public resetDomainAdminPassword() {
    this._domainAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAdminPasswordInput() {
    return this._domainAdminPassword;
  }

  // domain_admin_user - computed: false, optional: true, required: false
  private _domainAdminUser?: string; 
  public get domainAdminUser() {
    return this.getStringAttribute('domain_admin_user');
  }
  public set domainAdminUser(value: string) {
    this._domainAdminUser = value;
  }
  public resetDomainAdminUser() {
    this._domainAdminUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAdminUserInput() {
    return this._domainAdminUser;
  }

  // full_name - computed: false, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // join_domain - computed: false, optional: true, required: false
  private _joinDomain?: string; 
  public get joinDomain() {
    return this.getStringAttribute('join_domain');
  }
  public set joinDomain(value: string) {
    this._joinDomain = value;
  }
  public resetJoinDomain() {
    this._joinDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinDomainInput() {
    return this._joinDomain;
  }

  // organization_name - computed: false, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // product_key - computed: false, optional: true, required: false
  private _productKey?: string; 
  public get productKey() {
    return this.getStringAttribute('product_key');
  }
  public set productKey(value: string) {
    this._productKey = value;
  }
  public resetProductKey() {
    this._productKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productKeyInput() {
    return this._productKey;
  }

  // run_once_command_list - computed: false, optional: true, required: false
  private _runOnceCommandList?: string[]; 
  public get runOnceCommandList() {
    return this.getListAttribute('run_once_command_list');
  }
  public set runOnceCommandList(value: string[]) {
    this._runOnceCommandList = value;
  }
  public resetRunOnceCommandList() {
    this._runOnceCommandList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnceCommandListInput() {
    return this._runOnceCommandList;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: number; 
  public get timeZone() {
    return this.getNumberAttribute('time_zone');
  }
  public set timeZone(value: number) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // workgroup - computed: false, optional: true, required: false
  private _workgroup?: string; 
  public get workgroup() {
    return this.getStringAttribute('workgroup');
  }
  public set workgroup(value: string) {
    this._workgroup = value;
  }
  public resetWorkgroup() {
    this._workgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workgroupInput() {
    return this._workgroup;
  }
}
export interface GuestOsCustomizationSpec {
  /**
  * The list of DNS servers for a virtual network adapter with a static IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#dns_server_list GuestOsCustomization#dns_server_list}
  */
  readonly dnsServerList?: string[];
  /**
  * A list of DNS search domains to add to the DNS configuration on the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#dns_suffix_list GuestOsCustomization#dns_suffix_list}
  */
  readonly dnsSuffixList?: string[];
  /**
  * The IPv4 default gateway when using network_interface customization on the virtual machine. This address must be local to a static IPv4 address configured in an interface sub-resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#ipv4_gateway GuestOsCustomization#ipv4_gateway}
  */
  readonly ipv4Gateway?: string;
  /**
  * The IPv6 default gateway when using network_interface customization on the virtual machine. This address must be local to a static IPv4 address configured in an interface sub-resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#ipv6_gateway GuestOsCustomization#ipv6_gateway}
  */
  readonly ipv6Gateway?: string;
  /**
  * Use this option to specify a windows sysprep file directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#windows_sysprep_text GuestOsCustomization#windows_sysprep_text}
  */
  readonly windowsSysprepText?: string;
  /**
  * linux_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#linux_options GuestOsCustomization#linux_options}
  */
  readonly linuxOptions?: GuestOsCustomizationSpecLinuxOptions;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#network_interface GuestOsCustomization#network_interface}
  */
  readonly networkInterface?: GuestOsCustomizationSpecNetworkInterface[] | cdktf.IResolvable;
  /**
  * windows_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#windows_options GuestOsCustomization#windows_options}
  */
  readonly windowsOptions?: GuestOsCustomizationSpecWindowsOptions;
}

export function guestOsCustomizationSpecToTerraform(struct?: GuestOsCustomizationSpecOutputReference | GuestOsCustomizationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServerList),
    dns_suffix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSuffixList),
    ipv4_gateway: cdktf.stringToTerraform(struct!.ipv4Gateway),
    ipv6_gateway: cdktf.stringToTerraform(struct!.ipv6Gateway),
    windows_sysprep_text: cdktf.stringToTerraform(struct!.windowsSysprepText),
    linux_options: guestOsCustomizationSpecLinuxOptionsToTerraform(struct!.linuxOptions),
    network_interface: cdktf.listMapper(guestOsCustomizationSpecNetworkInterfaceToTerraform, true)(struct!.networkInterface),
    windows_options: guestOsCustomizationSpecWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}

export class GuestOsCustomizationSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuestOsCustomizationSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerList = this._dnsServerList;
    }
    if (this._dnsSuffixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffixList = this._dnsSuffixList;
    }
    if (this._ipv4Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Gateway = this._ipv4Gateway;
    }
    if (this._ipv6Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Gateway = this._ipv6Gateway;
    }
    if (this._windowsSysprepText !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsSysprepText = this._windowsSysprepText;
    }
    if (this._linuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxOptions = this._linuxOptions?.internalValue;
    }
    if (this._networkInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterface = this._networkInterface?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuestOsCustomizationSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServerList = undefined;
      this._dnsSuffixList = undefined;
      this._ipv4Gateway = undefined;
      this._ipv6Gateway = undefined;
      this._windowsSysprepText = undefined;
      this._linuxOptions.internalValue = undefined;
      this._networkInterface.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServerList = value.dnsServerList;
      this._dnsSuffixList = value.dnsSuffixList;
      this._ipv4Gateway = value.ipv4Gateway;
      this._ipv6Gateway = value.ipv6Gateway;
      this._windowsSysprepText = value.windowsSysprepText;
      this._linuxOptions.internalValue = value.linuxOptions;
      this._networkInterface.internalValue = value.networkInterface;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // dns_server_list - computed: false, optional: true, required: false
  private _dnsServerList?: string[]; 
  public get dnsServerList() {
    return this.getListAttribute('dns_server_list');
  }
  public set dnsServerList(value: string[]) {
    this._dnsServerList = value;
  }
  public resetDnsServerList() {
    this._dnsServerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerListInput() {
    return this._dnsServerList;
  }

  // dns_suffix_list - computed: false, optional: true, required: false
  private _dnsSuffixList?: string[]; 
  public get dnsSuffixList() {
    return this.getListAttribute('dns_suffix_list');
  }
  public set dnsSuffixList(value: string[]) {
    this._dnsSuffixList = value;
  }
  public resetDnsSuffixList() {
    this._dnsSuffixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixListInput() {
    return this._dnsSuffixList;
  }

  // ipv4_gateway - computed: false, optional: true, required: false
  private _ipv4Gateway?: string; 
  public get ipv4Gateway() {
    return this.getStringAttribute('ipv4_gateway');
  }
  public set ipv4Gateway(value: string) {
    this._ipv4Gateway = value;
  }
  public resetIpv4Gateway() {
    this._ipv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GatewayInput() {
    return this._ipv4Gateway;
  }

  // ipv6_gateway - computed: false, optional: true, required: false
  private _ipv6Gateway?: string; 
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }
  public set ipv6Gateway(value: string) {
    this._ipv6Gateway = value;
  }
  public resetIpv6Gateway() {
    this._ipv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GatewayInput() {
    return this._ipv6Gateway;
  }

  // windows_sysprep_text - computed: false, optional: true, required: false
  private _windowsSysprepText?: string; 
  public get windowsSysprepText() {
    return this.getStringAttribute('windows_sysprep_text');
  }
  public set windowsSysprepText(value: string) {
    this._windowsSysprepText = value;
  }
  public resetWindowsSysprepText() {
    this._windowsSysprepText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsSysprepTextInput() {
    return this._windowsSysprepText;
  }

  // linux_options - computed: false, optional: true, required: false
  private _linuxOptions = new GuestOsCustomizationSpecLinuxOptionsOutputReference(this, "linux_options");
  public get linuxOptions() {
    return this._linuxOptions;
  }
  public putLinuxOptions(value: GuestOsCustomizationSpecLinuxOptions) {
    this._linuxOptions.internalValue = value;
  }
  public resetLinuxOptions() {
    this._linuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxOptionsInput() {
    return this._linuxOptions.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new GuestOsCustomizationSpecNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: GuestOsCustomizationSpecNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new GuestOsCustomizationSpecWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: GuestOsCustomizationSpecWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization vsphere_guest_os_customization}
*/
export class GuestOsCustomization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_guest_os_customization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GuestOsCustomization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GuestOsCustomization to import
  * @param importFromId The id of the existing GuestOsCustomization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GuestOsCustomization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_guest_os_customization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/guest_os_customization vsphere_guest_os_customization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuestOsCustomizationConfig
  */
  public constructor(scope: Construct, id: string, config: GuestOsCustomizationConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_guest_os_customization',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.6.0',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_version - computed: true, optional: false, required: false
  public get changeVersion() {
    return this.getStringAttribute('change_version');
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

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new GuestOsCustomizationSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: GuestOsCustomizationSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      spec: guestOsCustomizationSpecToTerraform(this._spec.internalValue),
    };
  }
}
