/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_host_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeClusterHostGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The managed object ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_host_group#compute_cluster_id ComputeClusterHostGroup#compute_cluster_id}
  */
  readonly computeClusterId: string;
  /**
  * The managed object IDs of the hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_host_group#host_system_ids ComputeClusterHostGroup#host_system_ids}
  */
  readonly hostSystemIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_host_group#id ComputeClusterHostGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique name of the host group in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_host_group#name ComputeClusterHostGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_host_group vsphere_compute_cluster_host_group}
*/
export class ComputeClusterHostGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_compute_cluster_host_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_host_group vsphere_compute_cluster_host_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeClusterHostGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeClusterHostGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_compute_cluster_host_group',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.4.1',
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
    this._computeClusterId = config.computeClusterId;
    this._hostSystemIds = config.hostSystemIds;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_cluster_id - computed: false, optional: false, required: true
  private _computeClusterId?: string; 
  public get computeClusterId() {
    return this.getStringAttribute('compute_cluster_id');
  }
  public set computeClusterId(value: string) {
    this._computeClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeClusterIdInput() {
    return this._computeClusterId;
  }

  // host_system_ids - computed: false, optional: true, required: false
  private _hostSystemIds?: string[]; 
  public get hostSystemIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_system_ids'));
  }
  public set hostSystemIds(value: string[]) {
    this._hostSystemIds = value;
  }
  public resetHostSystemIds() {
    this._hostSystemIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSystemIdsInput() {
    return this._hostSystemIds;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_cluster_id: cdktf.stringToTerraform(this._computeClusterId),
      host_system_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostSystemIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
