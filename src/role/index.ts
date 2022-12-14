// https://www.terraform.io/docs/providers/vsphere/r/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/role#id Role#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the storage policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/role#name Role#name}
  */
  readonly name: string;
  /**
  * The privileges to be associated with the role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/role#role_privileges Role#role_privileges}
  */
  readonly rolePrivileges?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vsphere/r/role vsphere_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vsphere/r/role vsphere_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_role',
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
    this._id = config.id;
    this._name = config.name;
    this._rolePrivileges = config.rolePrivileges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      role_privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rolePrivileges),
    };
  }
}
