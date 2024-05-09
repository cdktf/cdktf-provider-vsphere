// https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_vgpu_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereHostVgpuProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Managed Object ID of the host system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_vgpu_profile#host_id DataVsphereHostVgpuProfile#host_id}
  */
  readonly hostId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_vgpu_profile#id DataVsphereHostVgpuProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A regular expression used to match the vGPU Profile on the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_vgpu_profile#name_regex DataVsphereHostVgpuProfile#name_regex}
  */
  readonly nameRegex?: string;
}
export interface DataVsphereHostVgpuProfileVgpuProfiles {
}

export function dataVsphereHostVgpuProfileVgpuProfilesToTerraform(struct?: DataVsphereHostVgpuProfileVgpuProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVsphereHostVgpuProfileVgpuProfilesToHclTerraform(struct?: DataVsphereHostVgpuProfileVgpuProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVsphereHostVgpuProfileVgpuProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVsphereHostVgpuProfileVgpuProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVsphereHostVgpuProfileVgpuProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_snapshot_supported - computed: true, optional: false, required: false
  public get diskSnapshotSupported() {
    return this.getBooleanAttribute('disk_snapshot_supported');
  }

  // memory_snapshot_supported - computed: true, optional: false, required: false
  public get memorySnapshotSupported() {
    return this.getBooleanAttribute('memory_snapshot_supported');
  }

  // migrate_supported - computed: true, optional: false, required: false
  public get migrateSupported() {
    return this.getBooleanAttribute('migrate_supported');
  }

  // suspend_supported - computed: true, optional: false, required: false
  public get suspendSupported() {
    return this.getBooleanAttribute('suspend_supported');
  }

  // vgpu - computed: true, optional: false, required: false
  public get vgpu() {
    return this.getStringAttribute('vgpu');
  }
}

export class DataVsphereHostVgpuProfileVgpuProfilesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataVsphereHostVgpuProfileVgpuProfilesOutputReference {
    return new DataVsphereHostVgpuProfileVgpuProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_vgpu_profile vsphere_host_vgpu_profile}
*/
export class DataVsphereHostVgpuProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_host_vgpu_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVsphereHostVgpuProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVsphereHostVgpuProfile to import
  * @param importFromId The id of the existing DataVsphereHostVgpuProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_vgpu_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVsphereHostVgpuProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_host_vgpu_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/host_vgpu_profile vsphere_host_vgpu_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereHostVgpuProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataVsphereHostVgpuProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_host_vgpu_profile',
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
    this._hostId = config.hostId;
    this._id = config.id;
    this._nameRegex = config.nameRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // vgpu_profiles - computed: true, optional: false, required: false
  private _vgpuProfiles = new DataVsphereHostVgpuProfileVgpuProfilesList(this, "vgpu_profiles", false);
  public get vgpuProfiles() {
    return this._vgpuProfiles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
