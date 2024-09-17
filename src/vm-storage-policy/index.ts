// https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/vm_storage_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmStoragePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the storage policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/vm_storage_policy#description VmStoragePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/vm_storage_policy#id VmStoragePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the storage policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/vm_storage_policy#name VmStoragePolicy#name}
  */
  readonly name: string;
  /**
  * tag_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/vm_storage_policy#tag_rules VmStoragePolicy#tag_rules}
  */
  readonly tagRules: VmStoragePolicyTagRules[] | cdktf.IResolvable;
}
export interface VmStoragePolicyTagRules {
  /**
  * Whether to include or exclude datastores tagged with the provided tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/vm_storage_policy#include_datastores_with_tags VmStoragePolicy#include_datastores_with_tags}
  */
  readonly includeDatastoresWithTags?: boolean | cdktf.IResolvable;
  /**
  * The tag category to select the tags from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/vm_storage_policy#tag_category VmStoragePolicy#tag_category}
  */
  readonly tagCategory: string;
  /**
  * The tags to use for creating a tag-based vm placement rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/vm_storage_policy#tags VmStoragePolicy#tags}
  */
  readonly tags: string[];
}

export function vmStoragePolicyTagRulesToTerraform(struct?: VmStoragePolicyTagRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_datastores_with_tags: cdktf.booleanToTerraform(struct!.includeDatastoresWithTags),
    tag_category: cdktf.stringToTerraform(struct!.tagCategory),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function vmStoragePolicyTagRulesToHclTerraform(struct?: VmStoragePolicyTagRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_datastores_with_tags: {
      value: cdktf.booleanToHclTerraform(struct!.includeDatastoresWithTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag_category: {
      value: cdktf.stringToHclTerraform(struct!.tagCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmStoragePolicyTagRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VmStoragePolicyTagRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeDatastoresWithTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDatastoresWithTags = this._includeDatastoresWithTags;
    }
    if (this._tagCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCategory = this._tagCategory;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmStoragePolicyTagRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeDatastoresWithTags = undefined;
      this._tagCategory = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeDatastoresWithTags = value.includeDatastoresWithTags;
      this._tagCategory = value.tagCategory;
      this._tags = value.tags;
    }
  }

  // include_datastores_with_tags - computed: false, optional: true, required: false
  private _includeDatastoresWithTags?: boolean | cdktf.IResolvable; 
  public get includeDatastoresWithTags() {
    return this.getBooleanAttribute('include_datastores_with_tags');
  }
  public set includeDatastoresWithTags(value: boolean | cdktf.IResolvable) {
    this._includeDatastoresWithTags = value;
  }
  public resetIncludeDatastoresWithTags() {
    this._includeDatastoresWithTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDatastoresWithTagsInput() {
    return this._includeDatastoresWithTags;
  }

  // tag_category - computed: false, optional: false, required: true
  private _tagCategory?: string; 
  public get tagCategory() {
    return this.getStringAttribute('tag_category');
  }
  public set tagCategory(value: string) {
    this._tagCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagCategoryInput() {
    return this._tagCategory;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class VmStoragePolicyTagRulesList extends cdktf.ComplexList {
  public internalValue? : VmStoragePolicyTagRules[] | cdktf.IResolvable

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
  public get(index: number): VmStoragePolicyTagRulesOutputReference {
    return new VmStoragePolicyTagRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/vm_storage_policy vsphere_vm_storage_policy}
*/
export class VmStoragePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_vm_storage_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmStoragePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmStoragePolicy to import
  * @param importFromId The id of the existing VmStoragePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/vm_storage_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmStoragePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_vm_storage_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/vm_storage_policy vsphere_vm_storage_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmStoragePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: VmStoragePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_vm_storage_policy',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.9.2',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._tagRules.internalValue = config.tagRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // tag_rules - computed: false, optional: false, required: true
  private _tagRules = new VmStoragePolicyTagRulesList(this, "tag_rules", false);
  public get tagRules() {
    return this._tagRules;
  }
  public putTagRules(value: VmStoragePolicyTagRules[] | cdktf.IResolvable) {
    this._tagRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagRulesInput() {
    return this._tagRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tag_rules: cdktf.listMapper(vmStoragePolicyTagRulesToTerraform, true)(this._tagRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_rules: {
        value: cdktf.listMapperHcl(vmStoragePolicyTagRulesToHclTerraform, true)(this._tagRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmStoragePolicyTagRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
