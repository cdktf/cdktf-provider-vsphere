// https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/data-sources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The managed object ID of the datacenter the network is in. This is required if the supplied path is not an absolute path containing a datacenter and there are multiple datacenters in your infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/data-sources/network#datacenter_id DataVsphereNetwork#datacenter_id}
  */
  readonly datacenterId?: string;
  /**
  * Id of the distributed virtual switch of which the port group is a part of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/data-sources/network#distributed_virtual_switch_uuid DataVsphereNetwork#distributed_virtual_switch_uuid}
  */
  readonly distributedVirtualSwitchUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/data-sources/network#id DataVsphereNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name or path of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/data-sources/network#name DataVsphereNetwork#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/data-sources/network vsphere_network}
*/
export class DataVsphereNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_network";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/data-sources/network vsphere_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_network',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.4.2',
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
    this._distributedVirtualSwitchUuid = config.distributedVirtualSwitchUuid;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenter_id - computed: false, optional: true, required: false
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  public resetDatacenterId() {
    this._datacenterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // distributed_virtual_switch_uuid - computed: false, optional: true, required: false
  private _distributedVirtualSwitchUuid?: string; 
  public get distributedVirtualSwitchUuid() {
    return this.getStringAttribute('distributed_virtual_switch_uuid');
  }
  public set distributedVirtualSwitchUuid(value: string) {
    this._distributedVirtualSwitchUuid = value;
  }
  public resetDistributedVirtualSwitchUuid() {
    this._distributedVirtualSwitchUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedVirtualSwitchUuidInput() {
    return this._distributedVirtualSwitchUuid;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      distributed_virtual_switch_uuid: cdktf.stringToTerraform(this._distributedVirtualSwitchUuid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
