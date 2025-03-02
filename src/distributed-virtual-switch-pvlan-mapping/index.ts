/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DistributedVirtualSwitchPvlanMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the distributed virtual switch to attach this mapping to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#distributed_virtual_switch_id DistributedVirtualSwitchPvlanMappingA#distributed_virtual_switch_id}
  */
  readonly distributedVirtualSwitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#id DistributedVirtualSwitchPvlanMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The primary VLAN ID. The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#primary_vlan_id DistributedVirtualSwitchPvlanMappingA#primary_vlan_id}
  */
  readonly primaryVlanId: number;
  /**
  * The private VLAN type. Valid values are promiscuous, community and isolated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#pvlan_type DistributedVirtualSwitchPvlanMappingA#pvlan_type}
  */
  readonly pvlanType: string;
  /**
  * The secondary VLAN ID. The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#secondary_vlan_id DistributedVirtualSwitchPvlanMappingA#secondary_vlan_id}
  */
  readonly secondaryVlanId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping vsphere_distributed_virtual_switch_pvlan_mapping}
*/
export class DistributedVirtualSwitchPvlanMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_distributed_virtual_switch_pvlan_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DistributedVirtualSwitchPvlanMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DistributedVirtualSwitchPvlanMappingA to import
  * @param importFromId The id of the existing DistributedVirtualSwitchPvlanMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DistributedVirtualSwitchPvlanMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_distributed_virtual_switch_pvlan_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping vsphere_distributed_virtual_switch_pvlan_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DistributedVirtualSwitchPvlanMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: DistributedVirtualSwitchPvlanMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_distributed_virtual_switch_pvlan_mapping',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.11.1',
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
    this._distributedVirtualSwitchId = config.distributedVirtualSwitchId;
    this._id = config.id;
    this._primaryVlanId = config.primaryVlanId;
    this._pvlanType = config.pvlanType;
    this._secondaryVlanId = config.secondaryVlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // distributed_virtual_switch_id - computed: false, optional: false, required: true
  private _distributedVirtualSwitchId?: string; 
  public get distributedVirtualSwitchId() {
    return this.getStringAttribute('distributed_virtual_switch_id');
  }
  public set distributedVirtualSwitchId(value: string) {
    this._distributedVirtualSwitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedVirtualSwitchIdInput() {
    return this._distributedVirtualSwitchId;
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

  // primary_vlan_id - computed: false, optional: false, required: true
  private _primaryVlanId?: number; 
  public get primaryVlanId() {
    return this.getNumberAttribute('primary_vlan_id');
  }
  public set primaryVlanId(value: number) {
    this._primaryVlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryVlanIdInput() {
    return this._primaryVlanId;
  }

  // pvlan_type - computed: false, optional: false, required: true
  private _pvlanType?: string; 
  public get pvlanType() {
    return this.getStringAttribute('pvlan_type');
  }
  public set pvlanType(value: string) {
    this._pvlanType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pvlanTypeInput() {
    return this._pvlanType;
  }

  // secondary_vlan_id - computed: false, optional: false, required: true
  private _secondaryVlanId?: number; 
  public get secondaryVlanId() {
    return this.getNumberAttribute('secondary_vlan_id');
  }
  public set secondaryVlanId(value: number) {
    this._secondaryVlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryVlanIdInput() {
    return this._secondaryVlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      distributed_virtual_switch_id: cdktf.stringToTerraform(this._distributedVirtualSwitchId),
      id: cdktf.stringToTerraform(this._id),
      primary_vlan_id: cdktf.numberToTerraform(this._primaryVlanId),
      pvlan_type: cdktf.stringToTerraform(this._pvlanType),
      secondary_vlan_id: cdktf.numberToTerraform(this._secondaryVlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      distributed_virtual_switch_id: {
        value: cdktf.stringToHclTerraform(this._distributedVirtualSwitchId),
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
      primary_vlan_id: {
        value: cdktf.numberToHclTerraform(this._primaryVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pvlan_type: {
        value: cdktf.stringToHclTerraform(this._pvlanType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_vlan_id: {
        value: cdktf.numberToHclTerraform(this._secondaryVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
