/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the vSphere cluster the host will belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#cluster Host#cluster}
  */
  readonly cluster?: string;
  /**
  * Must be set if host is a member of a managed compute_cluster resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#cluster_managed Host#cluster_managed}
  */
  readonly clusterManaged?: boolean | cdktf.IResolvable;
  /**
  * Set the state of the host. If set to false then the host will be asked to disconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#connected Host#connected}
  */
  readonly connected?: boolean | cdktf.IResolvable;
  /**
  * A list of custom attributes to set on this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#custom_attributes Host#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * ID of the vSphere datacenter the host will belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#datacenter Host#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Force add the host to the vSphere inventory even if it's already managed by a different vCenter Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#force Host#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * FQDN or IP address of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#hostname Host#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#id Host#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * License key that will be applied to this host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#license Host#license}
  */
  readonly license?: string;
  /**
  * Set the host's lockdown status. Default is disabled. Valid options are 'disabled', 'normal', 'strict'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#lockdown Host#lockdown}
  */
  readonly lockdown?: string;
  /**
  * Set the host's maintenance mode. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#maintenance Host#maintenance}
  */
  readonly maintenance?: boolean | cdktf.IResolvable;
  /**
  * Password of the administration account of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#password Host#password}
  */
  readonly password: string;
  /**
  * A list of tag IDs to apply to this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#tags Host#tags}
  */
  readonly tags?: string[];
  /**
  * Host's certificate SHA-1 thumbprint. If not set then the CA that signed the host's certificate must be trusted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#thumbprint Host#thumbprint}
  */
  readonly thumbprint?: string;
  /**
  * Username of the administration account of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#username Host#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host vsphere_host}
*/
export class Host extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Host resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Host to import
  * @param importFromId The id of the existing Host that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Host to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/host vsphere_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostConfig
  */
  public constructor(scope: Construct, id: string, config: HostConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_host',
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
    this._cluster = config.cluster;
    this._clusterManaged = config.clusterManaged;
    this._connected = config.connected;
    this._customAttributes = config.customAttributes;
    this._datacenter = config.datacenter;
    this._force = config.force;
    this._hostname = config.hostname;
    this._id = config.id;
    this._license = config.license;
    this._lockdown = config.lockdown;
    this._maintenance = config.maintenance;
    this._password = config.password;
    this._tags = config.tags;
    this._thumbprint = config.thumbprint;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // cluster_managed - computed: false, optional: true, required: false
  private _clusterManaged?: boolean | cdktf.IResolvable; 
  public get clusterManaged() {
    return this.getBooleanAttribute('cluster_managed');
  }
  public set clusterManaged(value: boolean | cdktf.IResolvable) {
    this._clusterManaged = value;
  }
  public resetClusterManaged() {
    this._clusterManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterManagedInput() {
    return this._clusterManaged;
  }

  // connected - computed: false, optional: true, required: false
  private _connected?: boolean | cdktf.IResolvable; 
  public get connected() {
    return this.getBooleanAttribute('connected');
  }
  public set connected(value: boolean | cdktf.IResolvable) {
    this._connected = value;
  }
  public resetConnected() {
    this._connected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedInput() {
    return this._connected;
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

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // lockdown - computed: false, optional: true, required: false
  private _lockdown?: string; 
  public get lockdown() {
    return this.getStringAttribute('lockdown');
  }
  public set lockdown(value: string) {
    this._lockdown = value;
  }
  public resetLockdown() {
    this._lockdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockdownInput() {
    return this._lockdown;
  }

  // maintenance - computed: false, optional: true, required: false
  private _maintenance?: boolean | cdktf.IResolvable; 
  public get maintenance() {
    return this.getBooleanAttribute('maintenance');
  }
  public set maintenance(value: boolean | cdktf.IResolvable) {
    this._maintenance = value;
  }
  public resetMaintenance() {
    this._maintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      cluster_managed: cdktf.booleanToTerraform(this._clusterManaged),
      connected: cdktf.booleanToTerraform(this._connected),
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      force: cdktf.booleanToTerraform(this._force),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      license: cdktf.stringToTerraform(this._license),
      lockdown: cdktf.stringToTerraform(this._lockdown),
      maintenance: cdktf.booleanToTerraform(this._maintenance),
      password: cdktf.stringToTerraform(this._password),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      thumbprint: cdktf.stringToTerraform(this._thumbprint),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
