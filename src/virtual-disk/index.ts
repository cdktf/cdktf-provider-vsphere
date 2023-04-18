// https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/virtual_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}
  */
  readonly adapterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}
  */
  readonly createDirectories?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/virtual_disk#datastore VirtualDisk#datastore}
  */
  readonly datastore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/virtual_disk#id VirtualDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/virtual_disk#size VirtualDisk#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/virtual_disk#type VirtualDisk#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}
  */
  readonly vmdkPath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/virtual_disk vsphere_virtual_disk}
*/
export class VirtualDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_virtual_disk";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/virtual_disk vsphere_virtual_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualDiskConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_virtual_disk',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.3.1',
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
    this._adapterType = config.adapterType;
    this._createDirectories = config.createDirectories;
    this._datacenter = config.datacenter;
    this._datastore = config.datastore;
    this._id = config.id;
    this._size = config.size;
    this._type = config.type;
    this._vmdkPath = config.vmdkPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adapter_type - computed: false, optional: true, required: false
  private _adapterType?: string; 
  public get adapterType() {
    return this.getStringAttribute('adapter_type');
  }
  public set adapterType(value: string) {
    this._adapterType = value;
  }
  public resetAdapterType() {
    this._adapterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterTypeInput() {
    return this._adapterType;
  }

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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // vmdk_path - computed: false, optional: false, required: true
  private _vmdkPath?: string; 
  public get vmdkPath() {
    return this.getStringAttribute('vmdk_path');
  }
  public set vmdkPath(value: string) {
    this._vmdkPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmdkPathInput() {
    return this._vmdkPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adapter_type: cdktf.stringToTerraform(this._adapterType),
      create_directories: cdktf.booleanToTerraform(this._createDirectories),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      datastore: cdktf.stringToTerraform(this._datastore),
      id: cdktf.stringToTerraform(this._id),
      size: cdktf.numberToTerraform(this._size),
      type: cdktf.stringToTerraform(this._type),
      vmdk_path: cdktf.stringToTerraform(this._vmdkPath),
    };
  }
}
