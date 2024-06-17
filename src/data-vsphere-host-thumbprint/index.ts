/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_thumbprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereHostThumbprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * The address of the ESXi to extract the thumbprint from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_thumbprint#address DataVsphereHostThumbprint#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_thumbprint#id DataVsphereHostThumbprint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Boolean that can be set to true to disable SSL certificate verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_thumbprint#insecure DataVsphereHostThumbprint#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The port to connect to on the ESXi host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_thumbprint#port DataVsphereHostThumbprint#port}
  */
  readonly port?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_thumbprint vsphere_host_thumbprint}
*/
export class DataVsphereHostThumbprint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_host_thumbprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVsphereHostThumbprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVsphereHostThumbprint to import
  * @param importFromId The id of the existing DataVsphereHostThumbprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_thumbprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVsphereHostThumbprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_host_thumbprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_thumbprint vsphere_host_thumbprint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereHostThumbprintConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereHostThumbprintConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_host_thumbprint',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.8.1',
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
    this._address = config.address;
    this._id = config.id;
    this._insecure = config.insecure;
    this._port = config.port;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      id: cdktf.stringToTerraform(this._id),
      insecure: cdktf.booleanToTerraform(this._insecure),
      port: cdktf.stringToTerraform(this._port),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
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
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
