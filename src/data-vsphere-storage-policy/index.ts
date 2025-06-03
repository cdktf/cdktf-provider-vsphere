// https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/data-sources/storage_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereStoragePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/data-sources/storage_policy#id DataVsphereStoragePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name of the storage policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/data-sources/storage_policy#name DataVsphereStoragePolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/data-sources/storage_policy vsphere_storage_policy}
*/
export class DataVsphereStoragePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_storage_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVsphereStoragePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVsphereStoragePolicy to import
  * @param importFromId The id of the existing DataVsphereStoragePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/data-sources/storage_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVsphereStoragePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_storage_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/data-sources/storage_policy vsphere_storage_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereStoragePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereStoragePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_storage_policy',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.13.0',
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
    this._id = config.id;
    this._name = config.name;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
