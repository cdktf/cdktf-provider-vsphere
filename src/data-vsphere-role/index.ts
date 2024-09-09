/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/data-sources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/data-sources/role#description DataVsphereRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/data-sources/role#id DataVsphereRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display label of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/data-sources/role#label DataVsphereRole#label}
  */
  readonly label: string;
  /**
  * Name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/data-sources/role#name DataVsphereRole#name}
  */
  readonly name?: string;
  /**
  * Privileges to be associated with the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/data-sources/role#role_privileges DataVsphereRole#role_privileges}
  */
  readonly rolePrivileges?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/data-sources/role vsphere_role}
*/
export class DataVsphereRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVsphereRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVsphereRole to import
  * @param importFromId The id of the existing DataVsphereRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/data-sources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVsphereRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/data-sources/role vsphere_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_role',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.9.0',
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
    this._description = config.description;
    this._id = config.id;
    this._label = config.label;
    this._name = config.name;
    this._rolePrivileges = config.rolePrivileges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // role_privileges - computed: false, optional: true, required: false
  private _rolePrivileges?: string[]; 
  public get rolePrivileges() {
    return this.getListAttribute('role_privileges');
  }
  public set rolePrivileges(value: string[]) {
    this._rolePrivileges = value;
  }
  public resetRolePrivileges() {
    this._rolePrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolePrivilegesInput() {
    return this._rolePrivileges;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      role_privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rolePrivileges),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      role_privileges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rolePrivileges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
