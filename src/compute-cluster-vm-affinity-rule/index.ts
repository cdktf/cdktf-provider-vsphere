/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_affinity_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeClusterVmAffinityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The managed object ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_affinity_rule#compute_cluster_id ComputeClusterVmAffinityRule#compute_cluster_id}
  */
  readonly computeClusterId: string;
  /**
  * Enable this rule in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_affinity_rule#enabled ComputeClusterVmAffinityRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_affinity_rule#id ComputeClusterVmAffinityRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When true, prevents any virtual machine operations that may violate this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_affinity_rule#mandatory ComputeClusterVmAffinityRule#mandatory}
  */
  readonly mandatory?: boolean | cdktf.IResolvable;
  /**
  * The unique name of the virtual machine group in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_affinity_rule#name ComputeClusterVmAffinityRule#name}
  */
  readonly name: string;
  /**
  * The UUIDs of the virtual machines to run on the same host together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_affinity_rule#virtual_machine_ids ComputeClusterVmAffinityRule#virtual_machine_ids}
  */
  readonly virtualMachineIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_affinity_rule vsphere_compute_cluster_vm_affinity_rule}
*/
export class ComputeClusterVmAffinityRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_compute_cluster_vm_affinity_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeClusterVmAffinityRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeClusterVmAffinityRule to import
  * @param importFromId The id of the existing ComputeClusterVmAffinityRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_affinity_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeClusterVmAffinityRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_compute_cluster_vm_affinity_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_affinity_rule vsphere_compute_cluster_vm_affinity_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeClusterVmAffinityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeClusterVmAffinityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_compute_cluster_vm_affinity_rule',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.14.2',
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_cluster_id: {
        value: cdktf.stringToHclTerraform(this._computeClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mandatory: {
        value: cdktf.booleanToHclTerraform(this._mandatory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_machine_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virtualMachineIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
