// https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/custom_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/custom_attribute#id CustomAttribute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object type for which the custom attribute is valid. If not specified, the attribute is valid for all managed object types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/custom_attribute#managed_object_type CustomAttribute#managed_object_type}
  */
  readonly managedObjectType?: string;
  /**
  * The display name of the custom attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/custom_attribute#name CustomAttribute#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/custom_attribute vsphere_custom_attribute}
*/
export class CustomAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_custom_attribute";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/custom_attribute vsphere_custom_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: CustomAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_custom_attribute',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.4.1',
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
    this._managedObjectType = config.managedObjectType;
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

  // managed_object_type - computed: false, optional: true, required: false
  private _managedObjectType?: string; 
  public get managedObjectType() {
    return this.getStringAttribute('managed_object_type');
  }
  public set managedObjectType(value: string) {
    this._managedObjectType = value;
  }
  public resetManagedObjectType() {
    this._managedObjectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedObjectTypeInput() {
    return this._managedObjectType;
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
      managed_object_type: cdktf.stringToTerraform(this._managedObjectType),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
