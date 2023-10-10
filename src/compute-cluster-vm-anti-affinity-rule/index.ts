// https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_anti_affinity_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeClusterVmAntiAffinityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The managed object ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_anti_affinity_rule#compute_cluster_id ComputeClusterVmAntiAffinityRule#compute_cluster_id}
  */
  readonly computeClusterId: string;
  /**
  * Enable this rule in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_anti_affinity_rule#enabled ComputeClusterVmAntiAffinityRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_anti_affinity_rule#id ComputeClusterVmAntiAffinityRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When true, prevents any virtual machine operations that may violate this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_anti_affinity_rule#mandatory ComputeClusterVmAntiAffinityRule#mandatory}
  */
  readonly mandatory?: boolean | cdktf.IResolvable;
  /**
  * The unique name of the virtual machine group in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_anti_affinity_rule#name ComputeClusterVmAntiAffinityRule#name}
  */
  readonly name: string;
  /**
  * The UUIDs of the virtual machines to run on hosts different from each other.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_anti_affinity_rule#virtual_machine_ids ComputeClusterVmAntiAffinityRule#virtual_machine_ids}
  */
  readonly virtualMachineIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_anti_affinity_rule vsphere_compute_cluster_vm_anti_affinity_rule}
*/
export class ComputeClusterVmAntiAffinityRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_compute_cluster_vm_anti_affinity_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_anti_affinity_rule vsphere_compute_cluster_vm_anti_affinity_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeClusterVmAntiAffinityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeClusterVmAntiAffinityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_compute_cluster_vm_anti_affinity_rule',
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
    this._computeClusterId = config.computeClusterId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._mandatory = config.mandatory;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // mandatory - computed: false, optional: true, required: false
  private _mandatory?: boolean | cdktf.IResolvable; 
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }
  public set mandatory(value: boolean | cdktf.IResolvable) {
    this._mandatory = value;
  }
  public resetMandatory() {
    this._mandatory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
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

  // virtual_machine_ids - computed: false, optional: false, required: true
  private _virtualMachineIds?: string[]; 
  public get virtualMachineIds() {
    return cdktf.Fn.tolist(this.getListAttribute('virtual_machine_ids'));
  }
  public set virtualMachineIds(value: string[]) {
    this._virtualMachineIds = value;
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      mandatory: cdktf.booleanToTerraform(this._mandatory),
      name: cdktf.stringToTerraform(this._name),
      virtual_machine_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualMachineIds),
    };
  }
}
