// https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereOvfVmTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow unverified ssl certificates while deploying ovf/ova from url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#allow_unverified_ssl_cert DataVsphereOvfVmTemplate#allow_unverified_ssl_cert}
  */
  readonly allowUnverifiedSslCert?: boolean | cdktf.IResolvable;
  /**
  * The ID of the virtual machine's datastore. The virtual machine configuration is placed here, along with any virtual disks that are created without datastores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#datastore_id DataVsphereOvfVmTemplate#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * The Deployment option to be chosen. If empty, the default option is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#deployment_option DataVsphereOvfVmTemplate#deployment_option}
  */
  readonly deploymentOption?: string;
  /**
  * An optional disk provisioning. If set, all the disks in the deployed ovf will have the same specified disk type (e.g., thin provisioned).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#disk_provisioning DataVsphereOvfVmTemplate#disk_provisioning}
  */
  readonly diskProvisioning?: string;
  /**
  * Allow properties with ovf:userConfigurable=false to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#enable_hidden_properties DataVsphereOvfVmTemplate#enable_hidden_properties}
  */
  readonly enableHiddenProperties?: boolean | cdktf.IResolvable;
  /**
  * The name of the folder to locate the virtual machine in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#folder DataVsphereOvfVmTemplate#folder}
  */
  readonly folder?: string;
  /**
  * The ID of an optional host system to pin the virtual machine to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#host_system_id DataVsphereOvfVmTemplate#host_system_id}
  */
  readonly hostSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#id DataVsphereOvfVmTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP allocation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#ip_allocation_policy DataVsphereOvfVmTemplate#ip_allocation_policy}
  */
  readonly ipAllocationPolicy?: string;
  /**
  * The IP protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#ip_protocol DataVsphereOvfVmTemplate#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * The absolute path to the ovf/ova file in the local system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#local_ovf_path DataVsphereOvfVmTemplate#local_ovf_path}
  */
  readonly localOvfPath?: string;
  /**
  * Name of the virtual machine to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#name DataVsphereOvfVmTemplate#name}
  */
  readonly name: string;
  /**
  * The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#ovf_network_map DataVsphereOvfVmTemplate#ovf_network_map}
  */
  readonly ovfNetworkMap?: { [key: string]: string };
  /**
  * URL to the remote ovf/ova file to be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#remote_ovf_url DataVsphereOvfVmTemplate#remote_ovf_url}
  */
  readonly remoteOvfUrl?: string;
  /**
  * The ID of a resource pool to put the virtual machine in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#resource_pool_id DataVsphereOvfVmTemplate#resource_pool_id}
  */
  readonly resourcePoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template vsphere_ovf_vm_template}
*/
export class DataVsphereOvfVmTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_ovf_vm_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVsphereOvfVmTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVsphereOvfVmTemplate to import
  * @param importFromId The id of the existing DataVsphereOvfVmTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVsphereOvfVmTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_ovf_vm_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/data-sources/ovf_vm_template vsphere_ovf_vm_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereOvfVmTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereOvfVmTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_ovf_vm_template',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.8.3',
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
    this._allowUnverifiedSslCert = config.allowUnverifiedSslCert;
    this._datastoreId = config.datastoreId;
    this._deploymentOption = config.deploymentOption;
    this._diskProvisioning = config.diskProvisioning;
    this._enableHiddenProperties = config.enableHiddenProperties;
    this._folder = config.folder;
    this._hostSystemId = config.hostSystemId;
    this._id = config.id;
    this._ipAllocationPolicy = config.ipAllocationPolicy;
    this._ipProtocol = config.ipProtocol;
    this._localOvfPath = config.localOvfPath;
    this._name = config.name;
    this._ovfNetworkMap = config.ovfNetworkMap;
    this._remoteOvfUrl = config.remoteOvfUrl;
    this._resourcePoolId = config.resourcePoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unverified_ssl_cert - computed: false, optional: true, required: false
  private _allowUnverifiedSslCert?: boolean | cdktf.IResolvable; 
  public get allowUnverifiedSslCert() {
    return this.getBooleanAttribute('allow_unverified_ssl_cert');
  }
  public set allowUnverifiedSslCert(value: boolean | cdktf.IResolvable) {
    this._allowUnverifiedSslCert = value;
  }
  public resetAllowUnverifiedSslCert() {
    this._allowUnverifiedSslCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnverifiedSslCertInput() {
    return this._allowUnverifiedSslCert;
  }

  // alternate_guest_name - computed: true, optional: false, required: false
  public get alternateGuestName() {
    return this.getStringAttribute('alternate_guest_name');
  }

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // cpu_hot_add_enabled - computed: true, optional: false, required: false
  public get cpuHotAddEnabled() {
    return this.getBooleanAttribute('cpu_hot_add_enabled');
  }

  // cpu_hot_remove_enabled - computed: true, optional: false, required: false
  public get cpuHotRemoveEnabled() {
    return this.getBooleanAttribute('cpu_hot_remove_enabled');
  }

  // cpu_performance_counters_enabled - computed: true, optional: false, required: false
  public get cpuPerformanceCountersEnabled() {
    return this.getBooleanAttribute('cpu_performance_counters_enabled');
  }

  // datastore_id - computed: false, optional: true, required: false
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  public resetDatastoreId() {
    this._datastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // deployment_option - computed: false, optional: true, required: false
  private _deploymentOption?: string; 
  public get deploymentOption() {
    return this.getStringAttribute('deployment_option');
  }
  public set deploymentOption(value: string) {
    this._deploymentOption = value;
  }
  public resetDeploymentOption() {
    this._deploymentOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentOptionInput() {
    return this._deploymentOption;
  }

  // disk_provisioning - computed: false, optional: true, required: false
  private _diskProvisioning?: string; 
  public get diskProvisioning() {
    return this.getStringAttribute('disk_provisioning');
  }
  public set diskProvisioning(value: string) {
    this._diskProvisioning = value;
  }
  public resetDiskProvisioning() {
    this._diskProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskProvisioningInput() {
    return this._diskProvisioning;
  }

  // enable_hidden_properties - computed: false, optional: true, required: false
  private _enableHiddenProperties?: boolean | cdktf.IResolvable; 
  public get enableHiddenProperties() {
    return this.getBooleanAttribute('enable_hidden_properties');
  }
  public set enableHiddenProperties(value: boolean | cdktf.IResolvable) {
    this._enableHiddenProperties = value;
  }
  public resetEnableHiddenProperties() {
    this._enableHiddenProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHiddenPropertiesInput() {
    return this._enableHiddenProperties;
  }

  // firmware - computed: true, optional: false, required: false
  public get firmware() {
    return this.getStringAttribute('firmware');
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

  // guest_id - computed: true, optional: false, required: false
  public get guestId() {
    return this.getStringAttribute('guest_id');
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

  // ide_controller_count - computed: true, optional: false, required: false
  public get ideControllerCount() {
    return this.getNumberAttribute('ide_controller_count');
  }

  // ip_allocation_policy - computed: false, optional: true, required: false
  private _ipAllocationPolicy?: string; 
  public get ipAllocationPolicy() {
    return this.getStringAttribute('ip_allocation_policy');
  }
  public set ipAllocationPolicy(value: string) {
    this._ipAllocationPolicy = value;
  }
  public resetIpAllocationPolicy() {
    this._ipAllocationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationPolicyInput() {
    return this._ipAllocationPolicy;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // local_ovf_path - computed: false, optional: true, required: false
  private _localOvfPath?: string; 
  public get localOvfPath() {
    return this.getStringAttribute('local_ovf_path');
  }
  public set localOvfPath(value: string) {
    this._localOvfPath = value;
  }
  public resetLocalOvfPath() {
    this._localOvfPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOvfPathInput() {
    return this._localOvfPath;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // memory_hot_add_enabled - computed: true, optional: false, required: false
  public get memoryHotAddEnabled() {
    return this.getBooleanAttribute('memory_hot_add_enabled');
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

  // nested_hv_enabled - computed: true, optional: false, required: false
  public get nestedHvEnabled() {
    return this.getBooleanAttribute('nested_hv_enabled');
  }

  // num_cores_per_socket - computed: true, optional: false, required: false
  public get numCoresPerSocket() {
    return this.getNumberAttribute('num_cores_per_socket');
  }

  // num_cpus - computed: true, optional: false, required: false
  public get numCpus() {
    return this.getNumberAttribute('num_cpus');
  }

  // ovf_network_map - computed: false, optional: true, required: false
  private _ovfNetworkMap?: { [key: string]: string }; 
  public get ovfNetworkMap() {
    return this.getStringMapAttribute('ovf_network_map');
  }
  public set ovfNetworkMap(value: { [key: string]: string }) {
    this._ovfNetworkMap = value;
  }
  public resetOvfNetworkMap() {
    this._ovfNetworkMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovfNetworkMapInput() {
    return this._ovfNetworkMap;
  }

  // remote_ovf_url - computed: false, optional: true, required: false
  private _remoteOvfUrl?: string; 
  public get remoteOvfUrl() {
    return this.getStringAttribute('remote_ovf_url');
  }
  public set remoteOvfUrl(value: string) {
    this._remoteOvfUrl = value;
  }
  public resetRemoteOvfUrl() {
    this._remoteOvfUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteOvfUrlInput() {
    return this._remoteOvfUrl;
  }

  // resource_pool_id - computed: false, optional: false, required: true
  private _resourcePoolId?: string; 
  public get resourcePoolId() {
    return this.getStringAttribute('resource_pool_id');
  }
  public set resourcePoolId(value: string) {
    this._resourcePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolIdInput() {
    return this._resourcePoolId;
  }

  // sata_controller_count - computed: true, optional: false, required: false
  public get sataControllerCount() {
    return this.getNumberAttribute('sata_controller_count');
  }

  // scsi_controller_count - computed: true, optional: false, required: false
  public get scsiControllerCount() {
    return this.getNumberAttribute('scsi_controller_count');
  }

  // scsi_type - computed: true, optional: false, required: false
  public get scsiType() {
    return this.getStringAttribute('scsi_type');
  }

  // swap_placement_policy - computed: true, optional: false, required: false
  public get swapPlacementPolicy() {
    return this.getStringAttribute('swap_placement_policy');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_unverified_ssl_cert: cdktf.booleanToTerraform(this._allowUnverifiedSslCert),
      datastore_id: cdktf.stringToTerraform(this._datastoreId),
      deployment_option: cdktf.stringToTerraform(this._deploymentOption),
      disk_provisioning: cdktf.stringToTerraform(this._diskProvisioning),
      enable_hidden_properties: cdktf.booleanToTerraform(this._enableHiddenProperties),
      folder: cdktf.stringToTerraform(this._folder),
      host_system_id: cdktf.stringToTerraform(this._hostSystemId),
      id: cdktf.stringToTerraform(this._id),
      ip_allocation_policy: cdktf.stringToTerraform(this._ipAllocationPolicy),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      local_ovf_path: cdktf.stringToTerraform(this._localOvfPath),
      name: cdktf.stringToTerraform(this._name),
      ovf_network_map: cdktf.hashMapper(cdktf.stringToTerraform)(this._ovfNetworkMap),
      remote_ovf_url: cdktf.stringToTerraform(this._remoteOvfUrl),
      resource_pool_id: cdktf.stringToTerraform(this._resourcePoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unverified_ssl_cert: {
        value: cdktf.booleanToHclTerraform(this._allowUnverifiedSslCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      datastore_id: {
        value: cdktf.stringToHclTerraform(this._datastoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_option: {
        value: cdktf.stringToHclTerraform(this._deploymentOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_provisioning: {
        value: cdktf.stringToHclTerraform(this._diskProvisioning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_hidden_properties: {
        value: cdktf.booleanToHclTerraform(this._enableHiddenProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_system_id: {
        value: cdktf.stringToHclTerraform(this._hostSystemId),
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
      ip_allocation_policy: {
        value: cdktf.stringToHclTerraform(this._ipAllocationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ovf_path: {
        value: cdktf.stringToHclTerraform(this._localOvfPath),
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
      ovf_network_map: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ovfNetworkMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      remote_ovf_url: {
        value: cdktf.stringToHclTerraform(this._remoteOvfUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_pool_id: {
        value: cdktf.stringToHclTerraform(this._resourcePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
