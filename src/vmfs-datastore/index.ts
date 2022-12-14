// https://www.terraform.io/docs/providers/vsphere/r/vmfs_datastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmfsDatastoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of custom attributes to set on this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vmfs_datastore#custom_attributes VmfsDatastore#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * The managed object ID of the datastore cluster to place the datastore in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vmfs_datastore#datastore_cluster_id VmfsDatastore#datastore_cluster_id}
  */
  readonly datastoreClusterId?: string;
  /**
  * The disks to add to the datastore.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vmfs_datastore#disks VmfsDatastore#disks}
  */
  readonly disks: string[];
  /**
  * The path to the datastore folder to put the datastore in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vmfs_datastore#folder VmfsDatastore#folder}
  */
  readonly folder?: string;
  /**
  * The managed object ID of the host to set up the datastore on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vmfs_datastore#host_system_id VmfsDatastore#host_system_id}
  */
  readonly hostSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vmfs_datastore#id VmfsDatastore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the datastore.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vmfs_datastore#name VmfsDatastore#name}
  */
  readonly name: string;
  /**
  * A list of tag IDs to apply to this object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vmfs_datastore#tags VmfsDatastore#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vsphere/r/vmfs_datastore vsphere_vmfs_datastore}
*/
export class VmfsDatastore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_vmfs_datastore";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vsphere/r/vmfs_datastore vsphere_vmfs_datastore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmfsDatastoreConfig
  */
  public constructor(scope: Construct, id: string, config: VmfsDatastoreConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_vmfs_datastore',
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
    this._datastoreClusterId = config.datastoreClusterId;
    this._disks = config.disks;
    this._folder = config.folder;
    this._hostSystemId = config.hostSystemId;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessible - computed: true, optional: false, required: false
  public get accessible() {
    return this.getBooleanAttribute('accessible');
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

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

  // datastore_cluster_id - computed: false, optional: true, required: false
  private _datastoreClusterId?: string; 
  public get datastoreClusterId() {
    return this.getStringAttribute('datastore_cluster_id');
  }
  public set datastoreClusterId(value: string) {
    this._datastoreClusterId = value;
  }
  public resetDatastoreClusterId() {
    this._datastoreClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreClusterIdInput() {
    return this._datastoreClusterId;
  }

  // disks - computed: false, optional: false, required: true
  private _disks?: string[]; 
  public get disks() {
    return this.getListAttribute('disks');
  }
  public set disks(value: string[]) {
    this._disks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // free_space - computed: true, optional: false, required: false
  public get freeSpace() {
    return this.getNumberAttribute('free_space');
  }

  // host_system_id - computed: false, optional: false, required: true
  private _hostSystemId?: string; 
  public get hostSystemId() {
    return this.getStringAttribute('host_system_id');
  }
  public set hostSystemId(value: string) {
    this._hostSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSystemIdInput() {
    return this._hostSystemId;
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

  // maintenance_mode - computed: true, optional: false, required: false
  public get maintenanceMode() {
    return this.getStringAttribute('maintenance_mode');
  }

  // multiple_host_access - computed: true, optional: false, required: false
  public get multipleHostAccess() {
    return this.getBooleanAttribute('multiple_host_access');
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

  // uncommitted_space - computed: true, optional: false, required: false
  public get uncommittedSpace() {
    return this.getNumberAttribute('uncommitted_space');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      datastore_cluster_id: cdktf.stringToTerraform(this._datastoreClusterId),
      disks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disks),
      folder: cdktf.stringToTerraform(this._folder),
      host_system_id: cdktf.stringToTerraform(this._hostSystemId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }
}
