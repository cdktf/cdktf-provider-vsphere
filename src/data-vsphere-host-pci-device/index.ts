// https://www.terraform.io/docs/providers/vsphere/d/host_pci_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereHostPciDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The hexadecimal value of the PCI device's class ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/d/host_pci_device#class_id DataVsphereHostPciDevice#class_id}
  */
  readonly classId?: string;
  /**
  * The Managed Object ID of the host system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/d/host_pci_device#host_id DataVsphereHostPciDevice#host_id}
  */
  readonly hostId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/d/host_pci_device#id DataVsphereHostPciDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A regular expression used to match the PCI device name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/d/host_pci_device#name_regex DataVsphereHostPciDevice#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * The hexadecimal value of the PCI device's vendor ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/d/host_pci_device#vendor_id DataVsphereHostPciDevice#vendor_id}
  */
  readonly vendorId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vsphere/d/host_pci_device vsphere_host_pci_device}
*/
export class DataVsphereHostPciDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_host_pci_device";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vsphere/d/host_pci_device vsphere_host_pci_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereHostPciDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereHostPciDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_host_pci_device',
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
    this._classId = config.classId;
    this._hostId = config.hostId;
    this._id = config.id;
    this._nameRegex = config.nameRegex;
    this._vendorId = config.vendorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // host_id - computed: false, optional: false, required: true
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // vendor_id - computed: false, optional: true, required: false
  private _vendorId?: string; 
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }
  public set vendorId(value: string) {
    this._vendorId = value;
  }
  public resetVendorId() {
    this._vendorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorIdInput() {
    return this._vendorId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_id: cdktf.stringToTerraform(this._classId),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      vendor_id: cdktf.stringToTerraform(this._vendorId),
    };
  }
}
