// https://www.terraform.io/docs/providers/vsphere/r/storage_drs_vm_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageDrsVmOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * The managed object ID of the datastore cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/storage_drs_vm_override#datastore_cluster_id StorageDrsVmOverride#datastore_cluster_id}
  */
  readonly datastoreClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/storage_drs_vm_override#id StorageDrsVmOverride#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Overrides any Storage DRS automation levels for this virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/storage_drs_vm_override#sdrs_automation_level StorageDrsVmOverride#sdrs_automation_level}
  */
  readonly sdrsAutomationLevel?: string;
  /**
  * Overrides the default Storage DRS setting for this virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/storage_drs_vm_override#sdrs_enabled StorageDrsVmOverride#sdrs_enabled}
  */
  readonly sdrsEnabled?: string;
  /**
  * Overrides the intra-VM affinity setting for this virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/storage_drs_vm_override#sdrs_intra_vm_affinity StorageDrsVmOverride#sdrs_intra_vm_affinity}
  */
  readonly sdrsIntraVmAffinity?: string;
  /**
  * The managed object ID of the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/storage_drs_vm_override#virtual_machine_id StorageDrsVmOverride#virtual_machine_id}
  */
  readonly virtualMachineId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vsphere/r/storage_drs_vm_override vsphere_storage_drs_vm_override}
*/
export class StorageDrsVmOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_storage_drs_vm_override";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vsphere/r/storage_drs_vm_override vsphere_storage_drs_vm_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageDrsVmOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: StorageDrsVmOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_storage_drs_vm_override',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.3.1',
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
    this._datastoreClusterId = config.datastoreClusterId;
    this._id = config.id;
    this._sdrsAutomationLevel = config.sdrsAutomationLevel;
    this._sdrsEnabled = config.sdrsEnabled;
    this._sdrsIntraVmAffinity = config.sdrsIntraVmAffinity;
    this._virtualMachineId = config.virtualMachineId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datastore_cluster_id - computed: false, optional: false, required: true
  private _datastoreClusterId?: string; 
  public get datastoreClusterId() {
    return this.getStringAttribute('datastore_cluster_id');
  }
  public set datastoreClusterId(value: string) {
    this._datastoreClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreClusterIdInput() {
    return this._datastoreClusterId;
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

  // sdrs_automation_level - computed: false, optional: true, required: false
  private _sdrsAutomationLevel?: string; 
  public get sdrsAutomationLevel() {
    return this.getStringAttribute('sdrs_automation_level');
  }
  public set sdrsAutomationLevel(value: string) {
    this._sdrsAutomationLevel = value;
  }
  public resetSdrsAutomationLevel() {
    this._sdrsAutomationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsAutomationLevelInput() {
    return this._sdrsAutomationLevel;
  }

  // sdrs_enabled - computed: false, optional: true, required: false
  private _sdrsEnabled?: string; 
  public get sdrsEnabled() {
    return this.getStringAttribute('sdrs_enabled');
  }
  public set sdrsEnabled(value: string) {
    this._sdrsEnabled = value;
  }
  public resetSdrsEnabled() {
    this._sdrsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsEnabledInput() {
    return this._sdrsEnabled;
  }

  // sdrs_intra_vm_affinity - computed: false, optional: true, required: false
  private _sdrsIntraVmAffinity?: string; 
  public get sdrsIntraVmAffinity() {
    return this.getStringAttribute('sdrs_intra_vm_affinity');
  }
  public set sdrsIntraVmAffinity(value: string) {
    this._sdrsIntraVmAffinity = value;
  }
  public resetSdrsIntraVmAffinity() {
    this._sdrsIntraVmAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsIntraVmAffinityInput() {
    return this._sdrsIntraVmAffinity;
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
      datastore_cluster_id: cdktf.stringToTerraform(this._datastoreClusterId),
      id: cdktf.stringToTerraform(this._id),
      sdrs_automation_level: cdktf.stringToTerraform(this._sdrsAutomationLevel),
      sdrs_enabled: cdktf.stringToTerraform(this._sdrsEnabled),
      sdrs_intra_vm_affinity: cdktf.stringToTerraform(this._sdrsIntraVmAffinity),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
    };
  }
}
