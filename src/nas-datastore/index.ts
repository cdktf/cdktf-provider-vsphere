// https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NasDatastoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access mode for the mount point. Can be one of readOnly or readWrite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore#access_mode NasDatastore#access_mode}
  */
  readonly accessMode?: string;
  /**
  * A list of custom attributes to set on this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore#custom_attributes NasDatastore#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * The managed object ID of the datastore cluster to place the datastore in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore#datastore_cluster_id NasDatastore#datastore_cluster_id}
  */
  readonly datastoreClusterId?: string;
  /**
  * The path to the datastore folder to put the datastore in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore#folder NasDatastore#folder}
  */
  readonly folder?: string;
  /**
  * The managed object IDs of the hosts to mount the datastore on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore#host_system_ids NasDatastore#host_system_ids}
  */
  readonly hostSystemIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore#id NasDatastore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore#name NasDatastore#name}
  */
  readonly name: string;
  /**
  * The hostnames or IP addresses of the remote server or servers. Only one element should be present for NFS v3 but multiple can be present for NFS v4.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore#remote_hosts NasDatastore#remote_hosts}
  */
  readonly remoteHosts: string[];
  /**
  * The remote path of the mount point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore#remote_path NasDatastore#remote_path}
  */
  readonly remotePath: string;
  /**
  * The security type to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore#security_type NasDatastore#security_type}
  */
  readonly securityType?: string;
  /**
  * A list of tag IDs to apply to this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore#tags NasDatastore#tags}
  */
  readonly tags?: string[];
  /**
  * The type of NAS volume. Can be one of NFS (to denote v3) or NFS41 (to denote NFS v4.1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore#type NasDatastore#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore vsphere_nas_datastore}
*/
export class NasDatastore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_nas_datastore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NasDatastore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NasDatastore to import
  * @param importFromId The id of the existing NasDatastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NasDatastore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_nas_datastore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/nas_datastore vsphere_nas_datastore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NasDatastoreConfig
  */
  public constructor(scope: Construct, id: string, config: NasDatastoreConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_nas_datastore',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.9.1',
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
    this._accessMode = config.accessMode;
    this._customAttributes = config.customAttributes;
    this._datastoreClusterId = config.datastoreClusterId;
    this._folder = config.folder;
    this._hostSystemIds = config.hostSystemIds;
    this._id = config.id;
    this._name = config.name;
    this._remoteHosts = config.remoteHosts;
    this._remotePath = config.remotePath;
    this._securityType = config.securityType;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

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

  // host_system_ids - computed: false, optional: false, required: true
  private _hostSystemIds?: string[]; 
  public get hostSystemIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_system_ids'));
  }
  public set hostSystemIds(value: string[]) {
    this._hostSystemIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSystemIdsInput() {
    return this._hostSystemIds;
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

  // protocol_endpoint - computed: true, optional: false, required: false
  public get protocolEndpoint() {
    return this.getBooleanAttribute('protocol_endpoint');
  }

  // remote_hosts - computed: false, optional: false, required: true
  private _remoteHosts?: string[]; 
  public get remoteHosts() {
    return this.getListAttribute('remote_hosts');
  }
  public set remoteHosts(value: string[]) {
    this._remoteHosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteHostsInput() {
    return this._remoteHosts;
  }

  // remote_path - computed: false, optional: false, required: true
  private _remotePath?: string; 
  public get remotePath() {
    return this.getStringAttribute('remote_path');
  }
  public set remotePath(value: string) {
    this._remotePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePathInput() {
    return this._remotePath;
  }

  // security_type - computed: false, optional: true, required: false
  private _securityType?: string; 
  public get securityType() {
    return this.getStringAttribute('security_type');
  }
  public set securityType(value: string) {
    this._securityType = value;
  }
  public resetSecurityType() {
    this._securityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTypeInput() {
    return this._securityType;
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
      access_mode: cdktf.stringToTerraform(this._accessMode),
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      datastore_cluster_id: cdktf.stringToTerraform(this._datastoreClusterId),
      folder: cdktf.stringToTerraform(this._folder),
      host_system_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostSystemIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      remote_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteHosts),
      remote_path: cdktf.stringToTerraform(this._remotePath),
      security_type: cdktf.stringToTerraform(this._securityType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      datastore_cluster_id: {
        value: cdktf.stringToHclTerraform(this._datastoreClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_system_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostSystemIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      remote_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteHosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_path: {
        value: cdktf.stringToHclTerraform(this._remotePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_type: {
        value: cdktf.stringToHclTerraform(this._securityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
