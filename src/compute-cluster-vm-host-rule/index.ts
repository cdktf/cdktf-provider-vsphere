// https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeClusterVmHostRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * When this field is used, virtual machines defined in vm_group_name will be run on the hosts defined in this host group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#affinity_host_group_name ComputeClusterVmHostRule#affinity_host_group_name}
  */
  readonly affinityHostGroupName?: string;
  /**
  * When this field is used, virtual machines defined in vm_group_name will not be run on the hosts defined in this host group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#anti_affinity_host_group_name ComputeClusterVmHostRule#anti_affinity_host_group_name}
  */
  readonly antiAffinityHostGroupName?: string;
  /**
  * The managed object ID of the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#compute_cluster_id ComputeClusterVmHostRule#compute_cluster_id}
  */
  readonly computeClusterId: string;
  /**
  * Enable this rule in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#enabled ComputeClusterVmHostRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#id ComputeClusterVmHostRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When true, prevents any virtual machine operations that may violate this rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#mandatory ComputeClusterVmHostRule#mandatory}
  */
  readonly mandatory?: boolean | cdktf.IResolvable;
  /**
  * The unique name of the virtual machine group in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#name ComputeClusterVmHostRule#name}
  */
  readonly name: string;
  /**
  * The name of the virtual machine group to use with this rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#vm_group_name ComputeClusterVmHostRule#vm_group_name}
  */
  readonly vmGroupName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule vsphere_compute_cluster_vm_host_rule}
*/
export class ComputeClusterVmHostRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_compute_cluster_vm_host_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule vsphere_compute_cluster_vm_host_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeClusterVmHostRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeClusterVmHostRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_compute_cluster_vm_host_rule',
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
    this._affinityHostGroupName = config.affinityHostGroupName;
    this._antiAffinityHostGroupName = config.antiAffinityHostGroupName;
    this._computeClusterId = config.computeClusterId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._mandatory = config.mandatory;
    this._name = config.name;
    this._vmGroupName = config.vmGroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_host_group_name - computed: false, optional: true, required: false
  private _affinityHostGroupName?: string; 
  public get affinityHostGroupName() {
    return this.getStringAttribute('affinity_host_group_name');
  }
  public set affinityHostGroupName(value: string) {
    this._affinityHostGroupName = value;
  }
  public resetAffinityHostGroupName() {
    this._affinityHostGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityHostGroupNameInput() {
    return this._affinityHostGroupName;
  }

  // anti_affinity_host_group_name - computed: false, optional: true, required: false
  private _antiAffinityHostGroupName?: string; 
  public get antiAffinityHostGroupName() {
    return this.getStringAttribute('anti_affinity_host_group_name');
  }
  public set antiAffinityHostGroupName(value: string) {
    this._antiAffinityHostGroupName = value;
  }
  public resetAntiAffinityHostGroupName() {
    this._antiAffinityHostGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityHostGroupNameInput() {
    return this._antiAffinityHostGroupName;
  }

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

  // vm_group_name - computed: false, optional: false, required: true
  private _vmGroupName?: string; 
  public get vmGroupName() {
    return this.getStringAttribute('vm_group_name');
  }
  public set vmGroupName(value: string) {
    this._vmGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmGroupNameInput() {
    return this._vmGroupName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affinity_host_group_name: cdktf.stringToTerraform(this._affinityHostGroupName),
      anti_affinity_host_group_name: cdktf.stringToTerraform(this._antiAffinityHostGroupName),
      compute_cluster_id: cdktf.stringToTerraform(this._computeClusterId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      mandatory: cdktf.booleanToTerraform(this._mandatory),
      name: cdktf.stringToTerraform(this._name),
      vm_group_name: cdktf.stringToTerraform(this._vmGroupName),
    };
  }
}
