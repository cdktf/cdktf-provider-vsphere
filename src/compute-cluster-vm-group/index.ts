// https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeClusterVmGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The managed object ID of the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_group#compute_cluster_id ComputeClusterVmGroup#compute_cluster_id}
  */
  readonly computeClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_group#id ComputeClusterVmGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique name of the virtual machine group in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_group#name ComputeClusterVmGroup#name}
  */
  readonly name: string;
  /**
  * The UUIDs of the virtual machines in this group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_group#virtual_machine_ids ComputeClusterVmGroup#virtual_machine_ids}
  */
  readonly virtualMachineIds?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_group vsphere_compute_cluster_vm_group}
*/
export class ComputeClusterVmGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_compute_cluster_vm_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_group vsphere_compute_cluster_vm_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeClusterVmGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeClusterVmGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_compute_cluster_vm_group',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.2.0',
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
    this._id = config.id;
    this._name = config.name;
    this._virtualMachineIds = config.virtualMachineIds;
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

  // virtual_machine_ids - computed: false, optional: true, required: false
  private _virtualMachineIds?: string[]; 
  public get virtualMachineIds() {
    return cdktf.Fn.tolist(this.getListAttribute('virtual_machine_ids'));
  }
  public set virtualMachineIds(value: string[]) {
    this._virtualMachineIds = value;
  }
  public resetVirtualMachineIds() {
    this._virtualMachineIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdsInput() {
    return this._virtualMachineIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_cluster_id: cdktf.stringToTerraform(this._computeClusterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      virtual_machine_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualMachineIds),
    };
  }
}
