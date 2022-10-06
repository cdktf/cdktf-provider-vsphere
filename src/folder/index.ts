// https://www.terraform.io/docs/providers/vsphere/r/folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of custom attributes to set on this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/folder#custom_attributes Folder#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * The ID of the datacenter. Can be ignored if creating a datacenter folder, otherwise required.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/folder#datacenter_id Folder#datacenter_id}
  */
  readonly datacenterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/folder#id Folder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path of the folder and any parents, relative to the datacenter and folder type being defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/folder#path Folder#path}
  */
  readonly path: string;
  /**
  * A list of tag IDs to apply to this object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/folder#tags Folder#tags}
  */
  readonly tags?: string[];
  /**
  * The type of the folder.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/folder#type Folder#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vsphere/r/folder vsphere_folder}
*/
export class Folder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_folder";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vsphere/r/folder vsphere_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FolderConfig
  */
  public constructor(scope: Construct, id: string, config: FolderConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_folder',
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
    this._customAttributes = config.customAttributes;
    this._datacenterId = config.datacenterId;
    this._id = config.id;
    this._path = config.path;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes?: { [key: string]: string }; 
  public get customAttributes() {
    return this.getStringMapAttribute('custom_attributes');
  }
  public set customAttributes(value: { [key: string]: string }) {
    this._customAttributes = value;
  }
  public resetCustomAttributes() {
    this._customAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes;
  }

  // datacenter_id - computed: false, optional: true, required: false
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  public resetDatacenterId() {
    this._datacenterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
