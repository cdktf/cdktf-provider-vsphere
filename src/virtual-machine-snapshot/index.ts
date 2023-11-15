/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_machine_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_machine_snapshot#consolidate VirtualMachineSnapshot#consolidate}
  */
  readonly consolidate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_machine_snapshot#description VirtualMachineSnapshot#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_machine_snapshot#id VirtualMachineSnapshot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_machine_snapshot#memory VirtualMachineSnapshot#memory}
  */
  readonly memory: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_machine_snapshot#quiesce VirtualMachineSnapshot#quiesce}
  */
  readonly quiesce: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_machine_snapshot#remove_children VirtualMachineSnapshot#remove_children}
  */
  readonly removeChildren?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_machine_snapshot#snapshot_name VirtualMachineSnapshot#snapshot_name}
  */
  readonly snapshotName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_machine_snapshot#virtual_machine_uuid VirtualMachineSnapshot#virtual_machine_uuid}
  */
  readonly virtualMachineUuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_machine_snapshot vsphere_virtual_machine_snapshot}
*/
export class VirtualMachineSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_virtual_machine_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualMachineSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualMachineSnapshot to import
  * @param importFromId The id of the existing VirtualMachineSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_machine_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualMachineSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_virtual_machine_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_machine_snapshot vsphere_virtual_machine_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_virtual_machine_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.5.1',
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
    this._consolidate = config.consolidate;
    this._description = config.description;
    this._id = config.id;
    this._memory = config.memory;
    this._quiesce = config.quiesce;
    this._removeChildren = config.removeChildren;
    this._snapshotName = config.snapshotName;
    this._virtualMachineUuid = config.virtualMachineUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consolidate - computed: false, optional: true, required: false
  private _consolidate?: boolean | cdktf.IResolvable; 
  public get consolidate() {
    return this.getBooleanAttribute('consolidate');
  }
  public set consolidate(value: boolean | cdktf.IResolvable) {
    this._consolidate = value;
  }
  public resetConsolidate() {
    this._consolidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidateInput() {
    return this._consolidate;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
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

  // memory - computed: false, optional: false, required: true
  private _memory?: boolean | cdktf.IResolvable; 
  public get memory() {
    return this.getBooleanAttribute('memory');
  }
  public set memory(value: boolean | cdktf.IResolvable) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // quiesce - computed: false, optional: false, required: true
  private _quiesce?: boolean | cdktf.IResolvable; 
  public get quiesce() {
    return this.getBooleanAttribute('quiesce');
  }
  public set quiesce(value: boolean | cdktf.IResolvable) {
    this._quiesce = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quiesceInput() {
    return this._quiesce;
  }

  // remove_children - computed: false, optional: true, required: false
  private _removeChildren?: boolean | cdktf.IResolvable; 
  public get removeChildren() {
    return this.getBooleanAttribute('remove_children');
  }
  public set removeChildren(value: boolean | cdktf.IResolvable) {
    this._removeChildren = value;
  }
  public resetRemoveChildren() {
    this._removeChildren = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeChildrenInput() {
    return this._removeChildren;
  }

  // snapshot_name - computed: false, optional: false, required: true
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // virtual_machine_uuid - computed: false, optional: false, required: true
  private _virtualMachineUuid?: string; 
  public get virtualMachineUuid() {
    return this.getStringAttribute('virtual_machine_uuid');
  }
  public set virtualMachineUuid(value: string) {
    this._virtualMachineUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineUuidInput() {
    return this._virtualMachineUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consolidate: cdktf.booleanToTerraform(this._consolidate),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      memory: cdktf.booleanToTerraform(this._memory),
      quiesce: cdktf.booleanToTerraform(this._quiesce),
      remove_children: cdktf.booleanToTerraform(this._removeChildren),
      snapshot_name: cdktf.stringToTerraform(this._snapshotName),
      virtual_machine_uuid: cdktf.stringToTerraform(this._virtualMachineUuid),
    };
  }
}
