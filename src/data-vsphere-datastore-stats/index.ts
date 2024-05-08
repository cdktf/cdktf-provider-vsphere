/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/datastore_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereDatastoreStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The capacity of the datastores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/datastore_stats#capacity DataVsphereDatastoreStats#capacity}
  */
  readonly capacity?: { [key: string]: string };
  /**
  * The managed object ID of the datacenter to get datastores from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/datastore_stats#datacenter_id DataVsphereDatastoreStats#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * The free space of the datastores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/datastore_stats#free_space DataVsphereDatastoreStats#free_space}
  */
  readonly freeSpace?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/datastore_stats#id DataVsphereDatastoreStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/datastore_stats vsphere_datastore_stats}
*/
export class DataVsphereDatastoreStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_datastore_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVsphereDatastoreStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVsphereDatastoreStats to import
  * @param importFromId The id of the existing DataVsphereDatastoreStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/datastore_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVsphereDatastoreStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_datastore_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/datastore_stats vsphere_datastore_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereDatastoreStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereDatastoreStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_datastore_stats',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.8.0',
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
    this._capacity = config.capacity;
    this._datacenterId = config.datacenterId;
    this._freeSpace = config.freeSpace;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: false, optional: true, required: false
  private _capacity?: { [key: string]: string }; 
  public get capacity() {
    return this.getStringMapAttribute('capacity');
  }
  public set capacity(value: { [key: string]: string }) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

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

  // free_space - computed: false, optional: true, required: false
  private _freeSpace?: { [key: string]: string }; 
  public get freeSpace() {
    return this.getStringMapAttribute('free_space');
  }
  public set freeSpace(value: { [key: string]: string }) {
    this._freeSpace = value;
  }
  public resetFreeSpace() {
    this._freeSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeSpaceInput() {
    return this._freeSpace;
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
      capacity: cdktf.hashMapper(cdktf.stringToTerraform)(this._capacity),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      free_space: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeSpace),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._capacity),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      free_space: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeSpace),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
