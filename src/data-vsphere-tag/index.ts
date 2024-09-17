/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the parent category for this tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/tag#category_id DataVsphereTag#category_id}
  */
  readonly categoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/tag#id DataVsphereTag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/tag#name DataVsphereTag#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/tag vsphere_tag}
*/
export class DataVsphereTag extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVsphereTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVsphereTag to import
  * @param importFromId The id of the existing DataVsphereTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVsphereTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/tag vsphere_tag} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereTagConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereTagConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_tag',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.9.2',
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
    this._categoryId = config.categoryId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category_id - computed: false, optional: false, required: true
  private _categoryId?: string; 
  public get categoryId() {
    return this.getStringAttribute('category_id');
  }
  public set categoryId(value: string) {
    this._categoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryIdInput() {
    return this._categoryId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
      category_id: cdktf.stringToTerraform(this._categoryId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category_id: {
        value: cdktf.stringToHclTerraform(this._categoryId),
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
