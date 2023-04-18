// https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/license#id LicenseResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/license#labels LicenseResource#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/license#license_key LicenseResource#license_key}
  */
  readonly licenseKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/license vsphere_license}
*/
export class LicenseResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_license";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/license vsphere_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseResourceConfig
  */
  public constructor(scope: Construct, id: string, config: LicenseResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_license',
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
    this._id = config.id;
    this._labels = config.labels;
    this._licenseKey = config.licenseKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edition_key - computed: true, optional: false, required: false
  public get editionKey() {
    return this.getStringAttribute('edition_key');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      license_key: cdktf.stringToTerraform(this._licenseKey),
    };
  }
}
