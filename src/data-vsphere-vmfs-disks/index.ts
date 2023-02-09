// https://www.terraform.io/docs/providers/vsphere/d/vmfs_disks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereVmfsDisksConfig extends cdktf.TerraformMetaArguments {
  /**
  * A regular expression to filter the disks against. Only disks with canonical names that match will be included.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/d/vmfs_disks#filter DataVsphereVmfsDisks#filter}
  */
  readonly filter?: string;
  /**
  * The managed object ID of the host to search for disks on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/d/vmfs_disks#host_system_id DataVsphereVmfsDisks#host_system_id}
  */
  readonly hostSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/d/vmfs_disks#id DataVsphereVmfsDisks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rescan the system for disks before querying. This may lengthen the time it takes to gather information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/d/vmfs_disks#rescan DataVsphereVmfsDisks#rescan}
  */
  readonly rescan?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vsphere/d/vmfs_disks vsphere_vmfs_disks}
*/
export class DataVsphereVmfsDisks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_vmfs_disks";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vsphere/d/vmfs_disks vsphere_vmfs_disks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereVmfsDisksConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereVmfsDisksConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_vmfs_disks',
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
    this._filter = config.filter;
    this._hostSystemId = config.hostSystemId;
    this._id = config.id;
    this._rescan = config.rescan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disks - computed: true, optional: false, required: false
  public get disks() {
    return this.getListAttribute('disks');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // rescan - computed: false, optional: true, required: false
  private _rescan?: boolean | cdktf.IResolvable; 
  public get rescan() {
    return this.getBooleanAttribute('rescan');
  }
  public set rescan(value: boolean | cdktf.IResolvable) {
    this._rescan = value;
  }
  public resetRescan() {
    this._rescan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescanInput() {
    return this._rescan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      host_system_id: cdktf.stringToTerraform(this._hostSystemId),
      id: cdktf.stringToTerraform(this._id),
      rescan: cdktf.booleanToTerraform(this._rescan),
    };
  }
}
