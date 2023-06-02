// https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/custom_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereCustomAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/custom_attribute#id DataVsphereCustomAttribute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name of the custom attribute.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/custom_attribute#name DataVsphereCustomAttribute#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/custom_attribute vsphere_custom_attribute}
*/
export class DataVsphereCustomAttribute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_custom_attribute";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/custom_attribute vsphere_custom_attribute} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereCustomAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereCustomAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_custom_attribute',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.4.0',
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

  // managed_object_type - computed: true, optional: false, required: false
  public get managedObjectType() {
    return this.getStringAttribute('managed_object_type');
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
}
