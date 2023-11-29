/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContentLibraryItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description of the content library item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#description ContentLibraryItem#description}
  */
  readonly description?: string;
  /**
  * ID of source VM of content library item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#file_url ContentLibraryItem#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#id ContentLibraryItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the content library to contain item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#library_id ContentLibraryItem#library_id}
  */
  readonly libraryId: string;
  /**
  * The name of the content library item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#name ContentLibraryItem#name}
  */
  readonly name: string;
  /**
  * The managed object ID of an existing VM to be cloned to the content library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#source_uuid ContentLibraryItem#source_uuid}
  */
  readonly sourceUuid?: string;
  /**
  * Type of content library item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#type ContentLibraryItem#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item vsphere_content_library_item}
*/
export class ContentLibraryItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_content_library_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContentLibraryItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContentLibraryItem to import
  * @param importFromId The id of the existing ContentLibraryItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContentLibraryItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_content_library_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item vsphere_content_library_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContentLibraryItemConfig
  */
  public constructor(scope: Construct, id: string, config: ContentLibraryItemConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_content_library_item',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.6.0',
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
    this._fileUrl = config.fileUrl;
    this._id = config.id;
    this._libraryId = config.libraryId;
    this._name = config.name;
    this._sourceUuid = config.sourceUuid;
    this._type = config.type;
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

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
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

  // library_id - computed: false, optional: false, required: true
  private _libraryId?: string; 
  public get libraryId() {
    return this.getStringAttribute('library_id');
  }
  public set libraryId(value: string) {
    this._libraryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryIdInput() {
    return this._libraryId;
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

  // source_uuid - computed: false, optional: true, required: false
  private _sourceUuid?: string; 
  public get sourceUuid() {
    return this.getStringAttribute('source_uuid');
  }
  public set sourceUuid(value: string) {
    this._sourceUuid = value;
  }
  public resetSourceUuid() {
    this._sourceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUuidInput() {
    return this._sourceUuid;
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
      description: cdktf.stringToTerraform(this._description),
      file_url: cdktf.stringToTerraform(this._fileUrl),
      id: cdktf.stringToTerraform(this._id),
      library_id: cdktf.stringToTerraform(this._libraryId),
      name: cdktf.stringToTerraform(this._name),
      source_uuid: cdktf.stringToTerraform(this._sourceUuid),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
