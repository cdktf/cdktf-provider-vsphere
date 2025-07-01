/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SupervisorConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the vSphere cluster on which workload management will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#cluster Supervisor#cluster}
  */
  readonly cluster: string;
  /**
  * ID of the subscribed content library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#content_library Supervisor#content_library}
  */
  readonly contentLibrary: string;
  /**
  * The UUID (not ID) of the distributed switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#dvs_uuid Supervisor#dvs_uuid}
  */
  readonly dvsUuid: string;
  /**
  * ID of the NSX Edge Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#edge_cluster Supervisor#edge_cluster}
  */
  readonly edgeCluster: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#id Supervisor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of DNS servers to use on the Kubernetes API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#main_dns Supervisor#main_dns}
  */
  readonly mainDns: string[];
  /**
  * List of NTP servers to use on the Kubernetes API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#main_ntp Supervisor#main_ntp}
  */
  readonly mainNtp: string[];
  /**
  * List of DNS search domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#search_domains Supervisor#search_domains}
  */
  readonly searchDomains: string[];
  /**
  * Size of the Kubernetes API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#sizing_hint Supervisor#sizing_hint}
  */
  readonly sizingHint: string;
  /**
  * The name of a storage policy associated with the datastore where the container images will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#storage_policy Supervisor#storage_policy}
  */
  readonly storagePolicy: string;
  /**
  * List of DNS servers to use on the worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#worker_dns Supervisor#worker_dns}
  */
  readonly workerDns: string[];
  /**
  * List of NTP servers to use on the worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#worker_ntp Supervisor#worker_ntp}
  */
  readonly workerNtp: string[];
  /**
  * egress_cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#egress_cidr Supervisor#egress_cidr}
  */
  readonly egressCidr: SupervisorEgressCidr[] | cdktf.IResolvable;
  /**
  * ingress_cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#ingress_cidr Supervisor#ingress_cidr}
  */
  readonly ingressCidr: SupervisorIngressCidr[] | cdktf.IResolvable;
  /**
  * management_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#management_network Supervisor#management_network}
  */
  readonly managementNetwork: SupervisorManagementNetwork;
  /**
  * namespace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#namespace Supervisor#namespace}
  */
  readonly namespace?: SupervisorNamespace[] | cdktf.IResolvable;
  /**
  * pod_cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#pod_cidr Supervisor#pod_cidr}
  */
  readonly podCidr: SupervisorPodCidr[] | cdktf.IResolvable;
  /**
  * service_cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#service_cidr Supervisor#service_cidr}
  */
  readonly serviceCidr: SupervisorServiceCidr;
}
export interface SupervisorEgressCidr {
  /**
  * Network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#address Supervisor#address}
  */
  readonly address: string;
  /**
  * Subnet prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#prefix Supervisor#prefix}
  */
  readonly prefix: number;
}

export function supervisorEgressCidrToTerraform(struct?: SupervisorEgressCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    prefix: cdktf.numberToTerraform(struct!.prefix),
  }
}


export function supervisorEgressCidrToHclTerraform(struct?: SupervisorEgressCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.numberToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SupervisorEgressCidrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SupervisorEgressCidr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorEgressCidr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._prefix = value.prefix;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class SupervisorEgressCidrList extends cdktf.ComplexList {
  public internalValue? : SupervisorEgressCidr[] | cdktf.IResolvable

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
  public get(index: number): SupervisorEgressCidrOutputReference {
    return new SupervisorEgressCidrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SupervisorIngressCidr {
  /**
  * Network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#address Supervisor#address}
  */
  readonly address: string;
  /**
  * Subnet prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#prefix Supervisor#prefix}
  */
  readonly prefix: number;
}

export function supervisorIngressCidrToTerraform(struct?: SupervisorIngressCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    prefix: cdktf.numberToTerraform(struct!.prefix),
  }
}


export function supervisorIngressCidrToHclTerraform(struct?: SupervisorIngressCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.numberToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SupervisorIngressCidrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SupervisorIngressCidr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorIngressCidr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._prefix = value.prefix;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class SupervisorIngressCidrList extends cdktf.ComplexList {
  public internalValue? : SupervisorIngressCidr[] | cdktf.IResolvable

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
  public get(index: number): SupervisorIngressCidrOutputReference {
    return new SupervisorIngressCidrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SupervisorManagementNetwork {
  /**
  * Number of addresses to allocate. Starts from 'starting_address'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#address_count Supervisor#address_count}
  */
  readonly addressCount: number;
  /**
  * Gateway IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#gateway Supervisor#gateway}
  */
  readonly gateway: string;
  /**
  * ID of the network. (e.g. a distributed port group).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#network Supervisor#network}
  */
  readonly network: string;
  /**
  * Starting address of the management network range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#starting_address Supervisor#starting_address}
  */
  readonly startingAddress: string;
  /**
  * Subnet mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#subnet_mask Supervisor#subnet_mask}
  */
  readonly subnetMask: string;
}

export function supervisorManagementNetworkToTerraform(struct?: SupervisorManagementNetworkOutputReference | SupervisorManagementNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_count: cdktf.numberToTerraform(struct!.addressCount),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    network: cdktf.stringToTerraform(struct!.network),
    starting_address: cdktf.stringToTerraform(struct!.startingAddress),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
  }
}


export function supervisorManagementNetworkToHclTerraform(struct?: SupervisorManagementNetworkOutputReference | SupervisorManagementNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_count: {
      value: cdktf.numberToHclTerraform(struct!.addressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_address: {
      value: cdktf.stringToHclTerraform(struct!.startingAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SupervisorManagementNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SupervisorManagementNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressCount = this._addressCount;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._startingAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingAddress = this._startingAddress;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorManagementNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressCount = undefined;
      this._gateway = undefined;
      this._network = undefined;
      this._startingAddress = undefined;
      this._subnetMask = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressCount = value.addressCount;
      this._gateway = value.gateway;
      this._network = value.network;
      this._startingAddress = value.startingAddress;
      this._subnetMask = value.subnetMask;
    }
  }

  // address_count - computed: false, optional: false, required: true
  private _addressCount?: number; 
  public get addressCount() {
    return this.getNumberAttribute('address_count');
  }
  public set addressCount(value: number) {
    this._addressCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressCountInput() {
    return this._addressCount;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // starting_address - computed: false, optional: false, required: true
  private _startingAddress?: string; 
  public get startingAddress() {
    return this.getStringAttribute('starting_address');
  }
  public set startingAddress(value: string) {
    this._startingAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startingAddressInput() {
    return this._startingAddress;
  }

  // subnet_mask - computed: false, optional: false, required: true
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }
}
export interface SupervisorNamespace {
  /**
  * A list of content libraries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#content_libraries Supervisor#content_libraries}
  */
  readonly contentLibraries?: string[];
  /**
  * The name of the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#name Supervisor#name}
  */
  readonly name: string;
  /**
  * A list of virtual machine classes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#vm_classes Supervisor#vm_classes}
  */
  readonly vmClasses?: string[];
}

export function supervisorNamespaceToTerraform(struct?: SupervisorNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_libraries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentLibraries),
    name: cdktf.stringToTerraform(struct!.name),
    vm_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vmClasses),
  }
}


export function supervisorNamespaceToHclTerraform(struct?: SupervisorNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_libraries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentLibraries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vmClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SupervisorNamespaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SupervisorNamespace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentLibraries !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLibraries = this._contentLibraries;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vmClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmClasses = this._vmClasses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorNamespace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentLibraries = undefined;
      this._name = undefined;
      this._vmClasses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentLibraries = value.contentLibraries;
      this._name = value.name;
      this._vmClasses = value.vmClasses;
    }
  }

  // content_libraries - computed: false, optional: true, required: false
  private _contentLibraries?: string[]; 
  public get contentLibraries() {
    return this.getListAttribute('content_libraries');
  }
  public set contentLibraries(value: string[]) {
    this._contentLibraries = value;
  }
  public resetContentLibraries() {
    this._contentLibraries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLibrariesInput() {
    return this._contentLibraries;
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

  // vm_classes - computed: false, optional: true, required: false
  private _vmClasses?: string[]; 
  public get vmClasses() {
    return this.getListAttribute('vm_classes');
  }
  public set vmClasses(value: string[]) {
    this._vmClasses = value;
  }
  public resetVmClasses() {
    this._vmClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClassesInput() {
    return this._vmClasses;
  }
}

export class SupervisorNamespaceList extends cdktf.ComplexList {
  public internalValue? : SupervisorNamespace[] | cdktf.IResolvable

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
  public get(index: number): SupervisorNamespaceOutputReference {
    return new SupervisorNamespaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SupervisorPodCidr {
  /**
  * Network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#address Supervisor#address}
  */
  readonly address: string;
  /**
  * Subnet prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#prefix Supervisor#prefix}
  */
  readonly prefix: number;
}

export function supervisorPodCidrToTerraform(struct?: SupervisorPodCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    prefix: cdktf.numberToTerraform(struct!.prefix),
  }
}


export function supervisorPodCidrToHclTerraform(struct?: SupervisorPodCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.numberToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SupervisorPodCidrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SupervisorPodCidr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorPodCidr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._prefix = value.prefix;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class SupervisorPodCidrList extends cdktf.ComplexList {
  public internalValue? : SupervisorPodCidr[] | cdktf.IResolvable

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
  public get(index: number): SupervisorPodCidrOutputReference {
    return new SupervisorPodCidrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SupervisorServiceCidr {
  /**
  * Network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#address Supervisor#address}
  */
  readonly address: string;
  /**
  * Subnet prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#prefix Supervisor#prefix}
  */
  readonly prefix: number;
}

export function supervisorServiceCidrToTerraform(struct?: SupervisorServiceCidrOutputReference | SupervisorServiceCidr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    prefix: cdktf.numberToTerraform(struct!.prefix),
  }
}


export function supervisorServiceCidrToHclTerraform(struct?: SupervisorServiceCidrOutputReference | SupervisorServiceCidr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.numberToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SupervisorServiceCidrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SupervisorServiceCidr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorServiceCidr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._prefix = value.prefix;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor vsphere_supervisor}
*/
export class Supervisor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_supervisor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Supervisor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Supervisor to import
  * @param importFromId The id of the existing Supervisor that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Supervisor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_supervisor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/supervisor vsphere_supervisor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SupervisorConfig
  */
  public constructor(scope: Construct, id: string, config: SupervisorConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_supervisor',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.14.0',
        providerVersionConstraint: '~> 2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cluster = config.cluster;
    this._contentLibrary = config.contentLibrary;
    this._dvsUuid = config.dvsUuid;
    this._edgeCluster = config.edgeCluster;
    this._id = config.id;
    this._mainDns = config.mainDns;
    this._mainNtp = config.mainNtp;
    this._searchDomains = config.searchDomains;
    this._sizingHint = config.sizingHint;
    this._storagePolicy = config.storagePolicy;
    this._workerDns = config.workerDns;
    this._workerNtp = config.workerNtp;
    this._egressCidr.internalValue = config.egressCidr;
    this._ingressCidr.internalValue = config.ingressCidr;
    this._managementNetwork.internalValue = config.managementNetwork;
    this._namespace.internalValue = config.namespace;
    this._podCidr.internalValue = config.podCidr;
    this._serviceCidr.internalValue = config.serviceCidr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // content_library - computed: false, optional: false, required: true
  private _contentLibrary?: string; 
  public get contentLibrary() {
    return this.getStringAttribute('content_library');
  }
  public set contentLibrary(value: string) {
    this._contentLibrary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLibraryInput() {
    return this._contentLibrary;
  }

  // dvs_uuid - computed: false, optional: false, required: true
  private _dvsUuid?: string; 
  public get dvsUuid() {
    return this.getStringAttribute('dvs_uuid');
  }
  public set dvsUuid(value: string) {
    this._dvsUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dvsUuidInput() {
    return this._dvsUuid;
  }

  // edge_cluster - computed: false, optional: false, required: true
  private _edgeCluster?: string; 
  public get edgeCluster() {
    return this.getStringAttribute('edge_cluster');
  }
  public set edgeCluster(value: string) {
    this._edgeCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterInput() {
    return this._edgeCluster;
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

  // main_dns - computed: false, optional: false, required: true
  private _mainDns?: string[]; 
  public get mainDns() {
    return this.getListAttribute('main_dns');
  }
  public set mainDns(value: string[]) {
    this._mainDns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainDnsInput() {
    return this._mainDns;
  }

  // main_ntp - computed: false, optional: false, required: true
  private _mainNtp?: string[]; 
  public get mainNtp() {
    return this.getListAttribute('main_ntp');
  }
  public set mainNtp(value: string[]) {
    this._mainNtp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainNtpInput() {
    return this._mainNtp;
  }

  // search_domains - computed: false, optional: false, required: true
  private _searchDomains?: string[]; 
  public get searchDomains() {
    return this.getListAttribute('search_domains');
  }
  public set searchDomains(value: string[]) {
    this._searchDomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainsInput() {
    return this._searchDomains;
  }

  // sizing_hint - computed: false, optional: false, required: true
  private _sizingHint?: string; 
  public get sizingHint() {
    return this.getStringAttribute('sizing_hint');
  }
  public set sizingHint(value: string) {
    this._sizingHint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizingHintInput() {
    return this._sizingHint;
  }

  // storage_policy - computed: false, optional: false, required: true
  private _storagePolicy?: string; 
  public get storagePolicy() {
    return this.getStringAttribute('storage_policy');
  }
  public set storagePolicy(value: string) {
    this._storagePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyInput() {
    return this._storagePolicy;
  }

  // worker_dns - computed: false, optional: false, required: true
  private _workerDns?: string[]; 
  public get workerDns() {
    return this.getListAttribute('worker_dns');
  }
  public set workerDns(value: string[]) {
    this._workerDns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDnsInput() {
    return this._workerDns;
  }

  // worker_ntp - computed: false, optional: false, required: true
  private _workerNtp?: string[]; 
  public get workerNtp() {
    return this.getListAttribute('worker_ntp');
  }
  public set workerNtp(value: string[]) {
    this._workerNtp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNtpInput() {
    return this._workerNtp;
  }

  // egress_cidr - computed: false, optional: false, required: true
  private _egressCidr = new SupervisorEgressCidrList(this, "egress_cidr", false);
  public get egressCidr() {
    return this._egressCidr;
  }
  public putEgressCidr(value: SupervisorEgressCidr[] | cdktf.IResolvable) {
    this._egressCidr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get egressCidrInput() {
    return this._egressCidr.internalValue;
  }

  // ingress_cidr - computed: false, optional: false, required: true
  private _ingressCidr = new SupervisorIngressCidrList(this, "ingress_cidr", false);
  public get ingressCidr() {
    return this._ingressCidr;
  }
  public putIngressCidr(value: SupervisorIngressCidr[] | cdktf.IResolvable) {
    this._ingressCidr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressCidrInput() {
    return this._ingressCidr.internalValue;
  }

  // management_network - computed: false, optional: false, required: true
  private _managementNetwork = new SupervisorManagementNetworkOutputReference(this, "management_network");
  public get managementNetwork() {
    return this._managementNetwork;
  }
  public putManagementNetwork(value: SupervisorManagementNetwork) {
    this._managementNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementNetworkInput() {
    return this._managementNetwork.internalValue;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace = new SupervisorNamespaceList(this, "namespace", true);
  public get namespace() {
    return this._namespace;
  }
  public putNamespace(value: SupervisorNamespace[] | cdktf.IResolvable) {
    this._namespace.internalValue = value;
  }
  public resetNamespace() {
    this._namespace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace.internalValue;
  }

  // pod_cidr - computed: false, optional: false, required: true
  private _podCidr = new SupervisorPodCidrList(this, "pod_cidr", false);
  public get podCidr() {
    return this._podCidr;
  }
  public putPodCidr(value: SupervisorPodCidr[] | cdktf.IResolvable) {
    this._podCidr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrInput() {
    return this._podCidr.internalValue;
  }

  // service_cidr - computed: false, optional: false, required: true
  private _serviceCidr = new SupervisorServiceCidrOutputReference(this, "service_cidr");
  public get serviceCidr() {
    return this._serviceCidr;
  }
  public putServiceCidr(value: SupervisorServiceCidr) {
    this._serviceCidr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      content_library: cdktf.stringToTerraform(this._contentLibrary),
      dvs_uuid: cdktf.stringToTerraform(this._dvsUuid),
      edge_cluster: cdktf.stringToTerraform(this._edgeCluster),
      id: cdktf.stringToTerraform(this._id),
      main_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mainDns),
      main_ntp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mainNtp),
      search_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._searchDomains),
      sizing_hint: cdktf.stringToTerraform(this._sizingHint),
      storage_policy: cdktf.stringToTerraform(this._storagePolicy),
      worker_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerDns),
      worker_ntp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerNtp),
      egress_cidr: cdktf.listMapper(supervisorEgressCidrToTerraform, true)(this._egressCidr.internalValue),
      ingress_cidr: cdktf.listMapper(supervisorIngressCidrToTerraform, true)(this._ingressCidr.internalValue),
      management_network: supervisorManagementNetworkToTerraform(this._managementNetwork.internalValue),
      namespace: cdktf.listMapper(supervisorNamespaceToTerraform, true)(this._namespace.internalValue),
      pod_cidr: cdktf.listMapper(supervisorPodCidrToTerraform, true)(this._podCidr.internalValue),
      service_cidr: supervisorServiceCidrToTerraform(this._serviceCidr.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_library: {
        value: cdktf.stringToHclTerraform(this._contentLibrary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dvs_uuid: {
        value: cdktf.stringToHclTerraform(this._dvsUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_cluster: {
        value: cdktf.stringToHclTerraform(this._edgeCluster),
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
      main_dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mainDns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      main_ntp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mainNtp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      search_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._searchDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sizing_hint: {
        value: cdktf.stringToHclTerraform(this._sizingHint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_policy: {
        value: cdktf.stringToHclTerraform(this._storagePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workerDns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      worker_ntp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workerNtp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      egress_cidr: {
        value: cdktf.listMapperHcl(supervisorEgressCidrToHclTerraform, true)(this._egressCidr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SupervisorEgressCidrList",
      },
      ingress_cidr: {
        value: cdktf.listMapperHcl(supervisorIngressCidrToHclTerraform, true)(this._ingressCidr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SupervisorIngressCidrList",
      },
      management_network: {
        value: supervisorManagementNetworkToHclTerraform(this._managementNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SupervisorManagementNetworkList",
      },
      namespace: {
        value: cdktf.listMapperHcl(supervisorNamespaceToHclTerraform, true)(this._namespace.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SupervisorNamespaceList",
      },
      pod_cidr: {
        value: cdktf.listMapperHcl(supervisorPodCidrToHclTerraform, true)(this._podCidr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SupervisorPodCidrList",
      },
      service_cidr: {
        value: supervisorServiceCidrToHclTerraform(this._serviceCidr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SupervisorServiceCidrList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
