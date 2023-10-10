// https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/data-sources/license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/data-sources/license#license_key DataVsphereLicense#license_key}
  */
  readonly licenseKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/data-sources/license vsphere_license}
*/
export class DataVsphereLicense extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_license";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/data-sources/license vsphere_license} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereLicenseConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereLicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_license',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.5.0',
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
    this._licenseKey = config.licenseKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edition_key - computed: true, optional: false, required: false
  public get editionKey() {
    return this.getStringAttribute('edition_key');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // license_key - computed: false, optional: false, required: true
  private _licenseKey?: string; 
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }
  public set licenseKey(value: string) {
    this._licenseKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeyInput() {
    return this._licenseKey;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      license_key: cdktf.stringToTerraform(this._licenseKey),
    };
  }
}
