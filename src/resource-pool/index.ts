// https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourcePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#cpu_expandable ResourcePool#cpu_expandable}
  */
  readonly cpuExpandable?: boolean | cdktf.IResolvable;
  /**
  * The utilization of a resource pool will not exceed this limit, even if there are available resources. Set to -1 for unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#cpu_limit ResourcePool#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * Amount of CPU (MHz) that is guaranteed available to the resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#cpu_reservation ResourcePool#cpu_reservation}
  */
  readonly cpuReservation?: number;
  /**
  * The allocation level. The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#cpu_share_level ResourcePool#cpu_share_level}
  */
  readonly cpuShareLevel?: string;
  /**
  * The number of shares allocated. Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#cpu_shares ResourcePool#cpu_shares}
  */
  readonly cpuShares?: number;
  /**
  * A list of custom attributes to set on this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#custom_attributes ResourcePool#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#id ResourcePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#memory_expandable ResourcePool#memory_expandable}
  */
  readonly memoryExpandable?: boolean | cdktf.IResolvable;
  /**
  * The utilization of a resource pool will not exceed this limit, even if there are available resources. Set to -1 for unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#memory_limit ResourcePool#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * Amount of memory (MB) that is guaranteed available to the resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#memory_reservation ResourcePool#memory_reservation}
  */
  readonly memoryReservation?: number;
  /**
  * The allocation level. The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#memory_share_level ResourcePool#memory_share_level}
  */
  readonly memoryShareLevel?: string;
  /**
  * The number of shares allocated. Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#memory_shares ResourcePool#memory_shares}
  */
  readonly memoryShares?: number;
  /**
  * Name of resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#name ResourcePool#name}
  */
  readonly name: string;
  /**
  * The ID of the root resource pool of the compute resource the resource pool is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#parent_resource_pool_id ResourcePool#parent_resource_pool_id}
  */
  readonly parentResourcePoolId: string;
  /**
  * Determines if the shares of all descendants of the resource pool are scaled up or down when the shares of the resource pool are scaled up or down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#scale_descendants_shares ResourcePool#scale_descendants_shares}
  */
  readonly scaleDescendantsShares?: string;
  /**
  * A list of tag IDs to apply to this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#tags ResourcePool#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool vsphere_resource_pool}
*/
export class ResourcePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_resource_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourcePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourcePool to import
  * @param importFromId The id of the existing ResourcePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourcePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_resource_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/resource_pool vsphere_resource_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourcePoolConfig
  */
  public constructor(scope: Construct, id: string, config: ResourcePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_resource_pool',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.8.2',
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
    this._parentResourcePoolId = config.parentResourcePoolId;
    this._scaleDescendantsShares = config.scaleDescendantsShares;
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

  // scale_descendants_shares - computed: false, optional: true, required: false
  private _scaleDescendantsShares?: string; 
  public get scaleDescendantsShares() {
    return this.getStringAttribute('scale_descendants_shares');
  }
  public set scaleDescendantsShares(value: string) {
    this._scaleDescendantsShares = value;
  }
  public resetScaleDescendantsShares() {
    this._scaleDescendantsShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDescendantsSharesInput() {
    return this._scaleDescendantsShares;
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
      parent_resource_pool_id: cdktf.stringToTerraform(this._parentResourcePoolId),
      scale_descendants_shares: cdktf.stringToTerraform(this._scaleDescendantsShares),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_expandable: {
        value: cdktf.booleanToHclTerraform(this._cpuExpandable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu_limit: {
        value: cdktf.numberToHclTerraform(this._cpuLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_reservation: {
        value: cdktf.numberToHclTerraform(this._cpuReservation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_share_level: {
        value: cdktf.stringToHclTerraform(this._cpuShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_shares: {
        value: cdktf.numberToHclTerraform(this._cpuShares),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customAttributes),
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
      memory_expandable: {
        value: cdktf.booleanToHclTerraform(this._memoryExpandable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      memory_limit: {
        value: cdktf.numberToHclTerraform(this._memoryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_reservation: {
        value: cdktf.numberToHclTerraform(this._memoryReservation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_share_level: {
        value: cdktf.stringToHclTerraform(this._memoryShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_shares: {
        value: cdktf.numberToHclTerraform(this._memoryShares),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_resource_pool_id: {
        value: cdktf.stringToHclTerraform(this._parentResourcePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_descendants_shares: {
        value: cdktf.stringToHclTerraform(this._scaleDescendantsShares),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
