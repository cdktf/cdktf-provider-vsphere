/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/drs_vm_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DrsVmOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * The managed object ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/drs_vm_override#compute_cluster_id DrsVmOverride#compute_cluster_id}
  */
  readonly computeClusterId: string;
  /**
  * The automation level for this virtual machine in the cluster. Can be one of manual, partiallyAutomated, or fullyAutomated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/drs_vm_override#drs_automation_level DrsVmOverride#drs_automation_level}
  */
  readonly drsAutomationLevel?: string;
  /**
  * Enable DRS for this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/drs_vm_override#drs_enabled DrsVmOverride#drs_enabled}
  */
  readonly drsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/drs_vm_override#id DrsVmOverride#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The managed object ID of the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/drs_vm_override#virtual_machine_id DrsVmOverride#virtual_machine_id}
  */
  readonly virtualMachineId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/drs_vm_override vsphere_drs_vm_override}
*/
export class DrsVmOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_drs_vm_override";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DrsVmOverride resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DrsVmOverride to import
  * @param importFromId The id of the existing DrsVmOverride that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/drs_vm_override#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DrsVmOverride to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_drs_vm_override", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/drs_vm_override vsphere_drs_vm_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DrsVmOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: DrsVmOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_drs_vm_override',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.15.0',
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
    this._drsAutomationLevel = config.drsAutomationLevel;
    this._drsEnabled = config.drsEnabled;
    this._id = config.id;
    this._virtualMachineId = config.virtualMachineId;
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

  // drs_automation_level - computed: false, optional: true, required: false
  private _drsAutomationLevel?: string; 
  public get drsAutomationLevel() {
    return this.getStringAttribute('drs_automation_level');
  }
  public set drsAutomationLevel(value: string) {
    this._drsAutomationLevel = value;
  }
  public resetDrsAutomationLevel() {
    this._drsAutomationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsAutomationLevelInput() {
    return this._drsAutomationLevel;
  }

  // drs_enabled - computed: false, optional: true, required: false
  private _drsEnabled?: boolean | cdktf.IResolvable; 
  public get drsEnabled() {
    return this.getBooleanAttribute('drs_enabled');
  }
  public set drsEnabled(value: boolean | cdktf.IResolvable) {
    this._drsEnabled = value;
  }
  public resetDrsEnabled() {
    this._drsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsEnabledInput() {
    return this._drsEnabled;
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

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId?: string; 
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_cluster_id: cdktf.stringToTerraform(this._computeClusterId),
      drs_automation_level: cdktf.stringToTerraform(this._drsAutomationLevel),
      drs_enabled: cdktf.booleanToTerraform(this._drsEnabled),
      id: cdktf.stringToTerraform(this._id),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
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
      drs_automation_level: {
        value: cdktf.stringToHclTerraform(this._drsAutomationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drs_enabled: {
        value: cdktf.booleanToHclTerraform(this._drsEnabled),
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
      virtual_machine_id: {
        value: cdktf.stringToHclTerraform(this._virtualMachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
