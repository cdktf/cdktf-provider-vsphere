// https://www.terraform.io/docs/providers/vsphere/d/dynamic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereDynamicConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of tag IDs to match target.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/d/dynamic#filter DataVsphereDynamic#filter}
  */
  readonly filter: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/d/dynamic#id DataVsphereDynamic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A regular expression used to match against managed object names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/d/dynamic#name_regex DataVsphereDynamic#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * The type of managed object to return.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/d/dynamic#type DataVsphereDynamic#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vsphere/d/dynamic vsphere_dynamic}
*/
export class DataVsphereDynamic extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_dynamic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vsphere/d/dynamic vsphere_dynamic} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereDynamicConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereDynamicConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_dynamic',
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
    this._filter = config.filter;
    this._id = config.id;
    this._nameRegex = config.nameRegex;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: false, required: true
  private _filter?: string[]; 
  public get filter() {
    return cdktf.Fn.tolist(this.getListAttribute('filter'));
  }
  public set filter(value: string[]) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
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
      filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filter),
      id: cdktf.stringToTerraform(this._id),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
