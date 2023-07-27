// https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VappContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#cpu_expandable VappContainer#cpu_expandable}
  */
  readonly cpuExpandable?: boolean | cdktf.IResolvable;
  /**
  * The utilization of a vApp container will not exceed this limit, even if there are available resources. Set to -1 for unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#cpu_limit VappContainer#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * Amount of CPU (MHz) that is guaranteed available to the vApp container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#cpu_reservation VappContainer#cpu_reservation}
  */
  readonly cpuReservation?: number;
  /**
  * The allocation level. The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#cpu_share_level VappContainer#cpu_share_level}
  */
  readonly cpuShareLevel?: string;
  /**
  * The number of shares allocated. Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#cpu_shares VappContainer#cpu_shares}
  */
  readonly cpuShares?: number;
  /**
  * A list of custom attributes to set on this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#custom_attributes VappContainer#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#id VappContainer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#memory_expandable VappContainer#memory_expandable}
  */
  readonly memoryExpandable?: boolean | cdktf.IResolvable;
  /**
  * The utilization of a vApp container will not exceed this limit, even if there are available resources. Set to -1 for unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#memory_limit VappContainer#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * Amount of memory (MB) that is guaranteed available to the vApp container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#memory_reservation VappContainer#memory_reservation}
  */
  readonly memoryReservation?: number;
  /**
  * The allocation level. The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#memory_share_level VappContainer#memory_share_level}
  */
  readonly memoryShareLevel?: string;
  /**
  * The number of shares allocated. Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#memory_shares VappContainer#memory_shares}
  */
  readonly memoryShares?: number;
  /**
  * The name of the vApp container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#name VappContainer#name}
  */
  readonly name: string;
  /**
  * The ID of the parent VM folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#parent_folder_id VappContainer#parent_folder_id}
  */
  readonly parentFolderId?: string;
  /**
  * The managed object ID of the parent resource pool or the compute resource the vApp container is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#parent_resource_pool_id VappContainer#parent_resource_pool_id}
  */
  readonly parentResourcePoolId: string;
  /**
  * A list of tag IDs to apply to this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container#tags VappContainer#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container vsphere_vapp_container}
*/
export class VappContainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_vapp_container";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vapp_container vsphere_vapp_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VappContainerConfig
  */
  public constructor(scope: Construct, id: string, config: VappContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_vapp_container',
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
    this._cpuExpandable = config.cpuExpandable;
    this._cpuLimit = config.cpuLimit;
    this._cpuReservation = config.cpuReservation;
    this._cpuShareLevel = config.cpuShareLevel;
    this._cpuShares = config.cpuShares;
    this._customAttributes = config.customAttributes;
    this._id = config.id;
    this._memoryExpandable = config.memoryExpandable;
    this._memoryLimit = config.memoryLimit;
    this._memoryReservation = config.memoryReservation;
    this._memoryShareLevel = config.memoryShareLevel;
    this._memoryShares = config.memoryShares;
    this._name = config.name;
    this._parentFolderId = config.parentFolderId;
    this._parentResourcePoolId = config.parentResourcePoolId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_expandable - computed: false, optional: true, required: false
  private _cpuExpandable?: boolean | cdktf.IResolvable; 
  public get cpuExpandable() {
    return this.getBooleanAttribute('cpu_expandable');
  }
  public set cpuExpandable(value: boolean | cdktf.IResolvable) {
    this._cpuExpandable = value;
  }
  public resetCpuExpandable() {
    this._cpuExpandable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuExpandableInput() {
    return this._cpuExpandable;
  }

  // cpu_limit - computed: false, optional: true, required: false
  private _cpuLimit?: number; 
  public get cpuLimit() {
    return this.getNumberAttribute('cpu_limit');
  }
  public set cpuLimit(value: number) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // cpu_reservation - computed: false, optional: true, required: false
  private _cpuReservation?: number; 
  public get cpuReservation() {
    return this.getNumberAttribute('cpu_reservation');
  }
  public set cpuReservation(value: number) {
    this._cpuReservation = value;
  }
  public resetCpuReservation() {
    this._cpuReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuReservationInput() {
    return this._cpuReservation;
  }

  // cpu_share_level - computed: false, optional: true, required: false
  private _cpuShareLevel?: string; 
  public get cpuShareLevel() {
    return this.getStringAttribute('cpu_share_level');
  }
  public set cpuShareLevel(value: string) {
    this._cpuShareLevel = value;
  }
  public resetCpuShareLevel() {
    this._cpuShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuShareLevelInput() {
    return this._cpuShareLevel;
  }

  // cpu_shares - computed: true, optional: true, required: false
  private _cpuShares?: number; 
  public get cpuShares() {
    return this.getNumberAttribute('cpu_shares');
  }
  public set cpuShares(value: number) {
    this._cpuShares = value;
  }
  public resetCpuShares() {
    this._cpuShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSharesInput() {
    return this._cpuShares;
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes?: { [key: string]: string }; 
  public get customAttributes() {
    return this.getStringMapAttribute('custom_attributes');
  }
  public set customAttributes(value: { [key: string]: string }) {
    this._customAttributes = value;
  }
  public resetCustomAttributes() {
    this._customAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes;
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

  // memory_expandable - computed: false, optional: true, required: false
  private _memoryExpandable?: boolean | cdktf.IResolvable; 
  public get memoryExpandable() {
    return this.getBooleanAttribute('memory_expandable');
  }
  public set memoryExpandable(value: boolean | cdktf.IResolvable) {
    this._memoryExpandable = value;
  }
  public resetMemoryExpandable() {
    this._memoryExpandable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryExpandableInput() {
    return this._memoryExpandable;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: number; 
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
  public set memoryLimit(value: number) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_reservation - computed: false, optional: true, required: false
  private _memoryReservation?: number; 
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }
  public set memoryReservation(value: number) {
    this._memoryReservation = value;
  }
  public resetMemoryReservation() {
    this._memoryReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationInput() {
    return this._memoryReservation;
  }

  // memory_share_level - computed: false, optional: true, required: false
  private _memoryShareLevel?: string; 
  public get memoryShareLevel() {
    return this.getStringAttribute('memory_share_level');
  }
  public set memoryShareLevel(value: string) {
    this._memoryShareLevel = value;
  }
  public resetMemoryShareLevel() {
    this._memoryShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryShareLevelInput() {
    return this._memoryShareLevel;
  }

  // memory_shares - computed: true, optional: true, required: false
  private _memoryShares?: number; 
  public get memoryShares() {
    return this.getNumberAttribute('memory_shares');
  }
  public set memoryShares(value: number) {
    this._memoryShares = value;
  }
  public resetMemoryShares() {
    this._memoryShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySharesInput() {
    return this._memoryShares;
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

  // parent_folder_id - computed: false, optional: true, required: false
  private _parentFolderId?: string; 
  public get parentFolderId() {
    return this.getStringAttribute('parent_folder_id');
  }
  public set parentFolderId(value: string) {
    this._parentFolderId = value;
  }
  public resetParentFolderId() {
    this._parentFolderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFolderIdInput() {
    return this._parentFolderId;
  }

  // parent_resource_pool_id - computed: false, optional: false, required: true
  private _parentResourcePoolId?: string; 
  public get parentResourcePoolId() {
    return this.getStringAttribute('parent_resource_pool_id');
  }
  public set parentResourcePoolId(value: string) {
    this._parentResourcePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentResourcePoolIdInput() {
    return this._parentResourcePoolId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_expandable: cdktf.booleanToTerraform(this._cpuExpandable),
      cpu_limit: cdktf.numberToTerraform(this._cpuLimit),
      cpu_reservation: cdktf.numberToTerraform(this._cpuReservation),
      cpu_share_level: cdktf.stringToTerraform(this._cpuShareLevel),
      cpu_shares: cdktf.numberToTerraform(this._cpuShares),
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      id: cdktf.stringToTerraform(this._id),
      memory_expandable: cdktf.booleanToTerraform(this._memoryExpandable),
      memory_limit: cdktf.numberToTerraform(this._memoryLimit),
      memory_reservation: cdktf.numberToTerraform(this._memoryReservation),
      memory_share_level: cdktf.stringToTerraform(this._memoryShareLevel),
      memory_shares: cdktf.numberToTerraform(this._memoryShares),
      name: cdktf.stringToTerraform(this._name),
      parent_folder_id: cdktf.stringToTerraform(this._parentFolderId),
      parent_resource_pool_id: cdktf.stringToTerraform(this._parentResourcePoolId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }
}
