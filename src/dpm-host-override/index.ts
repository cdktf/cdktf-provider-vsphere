// https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/dpm_host_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DpmHostOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * The managed object ID of the cluster.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/dpm_host_override#compute_cluster_id DpmHostOverride#compute_cluster_id}
  */
  readonly computeClusterId: string;
  /**
  * The automation level for power operations on this host. Can be one of manual or automated.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/dpm_host_override#dpm_automation_level DpmHostOverride#dpm_automation_level}
  */
  readonly dpmAutomationLevel?: string;
  /**
  * Enable DPM for this host.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/dpm_host_override#dpm_enabled DpmHostOverride#dpm_enabled}
  */
  readonly dpmEnabled?: boolean | cdktf.IResolvable;
  /**
  * The managed object ID of the host.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/dpm_host_override#host_system_id DpmHostOverride#host_system_id}
  */
  readonly hostSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/dpm_host_override#id DpmHostOverride#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/dpm_host_override vsphere_dpm_host_override}
*/
export class DpmHostOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_dpm_host_override";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/dpm_host_override vsphere_dpm_host_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DpmHostOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: DpmHostOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_dpm_host_override',
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
    this._computeClusterId = config.computeClusterId;
    this._dpmAutomationLevel = config.dpmAutomationLevel;
    this._dpmEnabled = config.dpmEnabled;
    this._hostSystemId = config.hostSystemId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_cluster_id - computed: false, optional: false, required: true
  private _computeClusterId?: string; 
  public get computeClusterId() {
    return this.getStringAttribute('compute_cluster_id');
  }
  public set computeClusterId(value: string) {
    this._computeClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeClusterIdInput() {
    return this._computeClusterId;
  }

  // dpm_automation_level - computed: false, optional: true, required: false
  private _dpmAutomationLevel?: string; 
  public get dpmAutomationLevel() {
    return this.getStringAttribute('dpm_automation_level');
  }
  public set dpmAutomationLevel(value: string) {
    this._dpmAutomationLevel = value;
  }
  public resetDpmAutomationLevel() {
    this._dpmAutomationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpmAutomationLevelInput() {
    return this._dpmAutomationLevel;
  }

  // dpm_enabled - computed: false, optional: true, required: false
  private _dpmEnabled?: boolean | cdktf.IResolvable; 
  public get dpmEnabled() {
    return this.getBooleanAttribute('dpm_enabled');
  }
  public set dpmEnabled(value: boolean | cdktf.IResolvable) {
    this._dpmEnabled = value;
  }
  public resetDpmEnabled() {
    this._dpmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpmEnabledInput() {
    return this._dpmEnabled;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_cluster_id: cdktf.stringToTerraform(this._computeClusterId),
      dpm_automation_level: cdktf.stringToTerraform(this._dpmAutomationLevel),
      dpm_enabled: cdktf.booleanToTerraform(this._dpmEnabled),
      host_system_id: cdktf.stringToTerraform(this._hostSystemId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
