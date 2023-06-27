// https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/data-sources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * The managed object ID of the datacenter to look for the host in.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/data-sources/host#datacenter_id DataVsphereHost#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/data-sources/host#id DataVsphereHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the host. This can be a name or path.	If not provided, the default host is used.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/data-sources/host#name DataVsphereHost#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/data-sources/host vsphere_host}
*/
export class DataVsphereHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_host";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/data-sources/host vsphere_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereHostConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereHostConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_host',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.4.1',
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
    this._datacenterId = config.datacenterId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_pool_id - computed: true, optional: false, required: false
  public get resourcePoolId() {
    return this.getStringAttribute('resource_pool_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
