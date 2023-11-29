/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/file#create_directories File#create_directories}
  */
  readonly createDirectories?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/file#datacenter File#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/file#datastore File#datastore}
  */
  readonly datastore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/file#destination_file File#destination_file}
  */
  readonly destinationFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/file#id File#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/file#source_datacenter File#source_datacenter}
  */
  readonly sourceDatacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/file#source_datastore File#source_datastore}
  */
  readonly sourceDatastore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/file#source_file File#source_file}
  */
  readonly sourceFile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/file vsphere_file}
*/
export class File extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a File resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the File to import
  * @param importFromId The id of the existing File that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the File to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/file vsphere_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileConfig
  */
  public constructor(scope: Construct, id: string, config: FileConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_file',
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
    this._createDirectories = config.createDirectories;
    this._datacenter = config.datacenter;
    this._datastore = config.datastore;
    this._destinationFile = config.destinationFile;
    this._id = config.id;
    this._sourceDatacenter = config.sourceDatacenter;
    this._sourceDatastore = config.sourceDatastore;
    this._sourceFile = config.sourceFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_directories - computed: false, optional: true, required: false
  private _createDirectories?: boolean | cdktf.IResolvable; 
  public get createDirectories() {
    return this.getBooleanAttribute('create_directories');
  }
  public set createDirectories(value: boolean | cdktf.IResolvable) {
    this._createDirectories = value;
  }
  public resetCreateDirectories() {
    this._createDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDirectoriesInput() {
    return this._createDirectories;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datastore - computed: false, optional: false, required: true
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // destination_file - computed: false, optional: false, required: true
  private _destinationFile?: string; 
  public get destinationFile() {
    return this.getStringAttribute('destination_file');
  }
  public set destinationFile(value: string) {
    this._destinationFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileInput() {
    return this._destinationFile;
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

  // source_datacenter - computed: false, optional: true, required: false
  private _sourceDatacenter?: string; 
  public get sourceDatacenter() {
    return this.getStringAttribute('source_datacenter');
  }
  public set sourceDatacenter(value: string) {
    this._sourceDatacenter = value;
  }
  public resetSourceDatacenter() {
    this._sourceDatacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatacenterInput() {
    return this._sourceDatacenter;
  }

  // source_datastore - computed: false, optional: true, required: false
  private _sourceDatastore?: string; 
  public get sourceDatastore() {
    return this.getStringAttribute('source_datastore');
  }
  public set sourceDatastore(value: string) {
    this._sourceDatastore = value;
  }
  public resetSourceDatastore() {
    this._sourceDatastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatastoreInput() {
    return this._sourceDatastore;
  }

  // source_file - computed: false, optional: false, required: true
  private _sourceFile?: string; 
  public get sourceFile() {
    return this.getStringAttribute('source_file');
  }
  public set sourceFile(value: string) {
    this._sourceFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileInput() {
    return this._sourceFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_directories: cdktf.booleanToTerraform(this._createDirectories),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      datastore: cdktf.stringToTerraform(this._datastore),
      destination_file: cdktf.stringToTerraform(this._destinationFile),
      id: cdktf.stringToTerraform(this._id),
      source_datacenter: cdktf.stringToTerraform(this._sourceDatacenter),
      source_datastore: cdktf.stringToTerraform(this._sourceDatastore),
      source_file: cdktf.stringToTerraform(this._sourceFile),
    };
  }
}
