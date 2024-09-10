/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/guest_os_customization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereGuestOsCustomizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/guest_os_customization#id DataVsphereGuestOsCustomization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the customization specification is the unique identifier per vCenter Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/guest_os_customization#name DataVsphereGuestOsCustomization#name}
  */
  readonly name: string;
}
export interface DataVsphereGuestOsCustomizationSpecLinuxOptions {
}

export function dataVsphereGuestOsCustomizationSpecLinuxOptionsToTerraform(struct?: DataVsphereGuestOsCustomizationSpecLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVsphereGuestOsCustomizationSpecLinuxOptionsToHclTerraform(struct?: DataVsphereGuestOsCustomizationSpecLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVsphereGuestOsCustomizationSpecLinuxOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVsphereGuestOsCustomizationSpecLinuxOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // hw_clock_utc - computed: true, optional: false, required: false
  public get hwClockUtc() {
    return this.getBooleanAttribute('hw_clock_utc');
  }

  // script_text - computed: true, optional: false, required: false
  public get scriptText() {
    return this.getStringAttribute('script_text');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}

export class DataVsphereGuestOsCustomizationSpecLinuxOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference {
    return new DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVsphereGuestOsCustomizationSpecNetworkInterface {
}

export function dataVsphereGuestOsCustomizationSpecNetworkInterfaceToTerraform(struct?: DataVsphereGuestOsCustomizationSpecNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVsphereGuestOsCustomizationSpecNetworkInterfaceToHclTerraform(struct?: DataVsphereGuestOsCustomizationSpecNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVsphereGuestOsCustomizationSpecNetworkInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVsphereGuestOsCustomizationSpecNetworkInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_domain - computed: true, optional: false, required: false
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }

  // dns_server_list - computed: true, optional: false, required: false
  public get dnsServerList() {
    return this.getListAttribute('dns_server_list');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_netmask - computed: true, optional: false, required: false
  public get ipv4Netmask() {
    return this.getNumberAttribute('ipv4_netmask');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_netmask - computed: true, optional: false, required: false
  public get ipv6Netmask() {
    return this.getNumberAttribute('ipv6_netmask');
  }
}

export class DataVsphereGuestOsCustomizationSpecNetworkInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference {
    return new DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVsphereGuestOsCustomizationSpecWindowsOptions {
}

export function dataVsphereGuestOsCustomizationSpecWindowsOptionsToTerraform(struct?: DataVsphereGuestOsCustomizationSpecWindowsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVsphereGuestOsCustomizationSpecWindowsOptionsToHclTerraform(struct?: DataVsphereGuestOsCustomizationSpecWindowsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVsphereGuestOsCustomizationSpecWindowsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVsphereGuestOsCustomizationSpecWindowsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_password - computed: true, optional: false, required: false
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // auto_logon - computed: true, optional: false, required: false
  public get autoLogon() {
    return this.getBooleanAttribute('auto_logon');
  }

  // auto_logon_count - computed: true, optional: false, required: false
  public get autoLogonCount() {
    return this.getNumberAttribute('auto_logon_count');
  }

  // computer_name - computed: true, optional: false, required: false
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }

  // domain_admin_password - computed: true, optional: false, required: false
  public get domainAdminPassword() {
    return this.getStringAttribute('domain_admin_password');
  }

  // domain_admin_user - computed: true, optional: false, required: false
  public get domainAdminUser() {
    return this.getStringAttribute('domain_admin_user');
  }

  // domain_ou - computed: true, optional: false, required: false
  public get domainOu() {
    return this.getStringAttribute('domain_ou');
  }

  // join_domain - computed: true, optional: false, required: false
  public get joinDomain() {
    return this.getStringAttribute('join_domain');
  }

  // run_once_command_list - computed: true, optional: false, required: false
  public get runOnceCommandList() {
    return this.getListAttribute('run_once_command_list');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getNumberAttribute('time_zone');
  }

  // workgroup - computed: true, optional: false, required: false
  public get workgroup() {
    return this.getStringAttribute('workgroup');
  }
}

export class DataVsphereGuestOsCustomizationSpecWindowsOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference {
    return new DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVsphereGuestOsCustomizationSpec {
}

export function dataVsphereGuestOsCustomizationSpecToTerraform(struct?: DataVsphereGuestOsCustomizationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVsphereGuestOsCustomizationSpecToHclTerraform(struct?: DataVsphereGuestOsCustomizationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVsphereGuestOsCustomizationSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVsphereGuestOsCustomizationSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVsphereGuestOsCustomizationSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_server_list - computed: true, optional: false, required: false
  public get dnsServerList() {
    return this.getListAttribute('dns_server_list');
  }

  // dns_suffix_list - computed: true, optional: false, required: false
  public get dnsSuffixList() {
    return this.getListAttribute('dns_suffix_list');
  }

  // linux_options - computed: true, optional: false, required: false
  private _linuxOptions = new DataVsphereGuestOsCustomizationSpecLinuxOptionsList(this, "linux_options", false);
  public get linuxOptions() {
    return this._linuxOptions;
  }

  // network_interface - computed: true, optional: false, required: false
  private _networkInterface = new DataVsphereGuestOsCustomizationSpecNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }

  // windows_options - computed: true, optional: false, required: false
  private _windowsOptions = new DataVsphereGuestOsCustomizationSpecWindowsOptionsList(this, "windows_options", false);
  public get windowsOptions() {
    return this._windowsOptions;
  }

  // windows_sysprep_text - computed: true, optional: false, required: false
  public get windowsSysprepText() {
    return this.getStringAttribute('windows_sysprep_text');
  }
}

export class DataVsphereGuestOsCustomizationSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataVsphereGuestOsCustomizationSpecOutputReference {
    return new DataVsphereGuestOsCustomizationSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/guest_os_customization vsphere_guest_os_customization}
*/
export class DataVsphereGuestOsCustomization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_guest_os_customization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVsphereGuestOsCustomization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVsphereGuestOsCustomization to import
  * @param importFromId The id of the existing DataVsphereGuestOsCustomization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/guest_os_customization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVsphereGuestOsCustomization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_guest_os_customization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/guest_os_customization vsphere_guest_os_customization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereGuestOsCustomizationConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereGuestOsCustomizationConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_guest_os_customization',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.9.1',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_version - computed: true, optional: false, required: false
  public get changeVersion() {
    return this.getStringAttribute('change_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // spec - computed: true, optional: false, required: false
  private _spec = new DataVsphereGuestOsCustomizationSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
