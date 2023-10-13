/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/entity_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EntityPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The managed object id or uuid of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/entity_permissions#entity_id EntityPermissions#entity_id}
  */
  readonly entityId: string;
  /**
  * The entity managed object type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/entity_permissions#entity_type EntityPermissions#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/entity_permissions#id EntityPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/entity_permissions#permissions EntityPermissions#permissions}
  */
  readonly permissions: EntityPermissionsPermissions[] | cdktf.IResolvable;
}
export interface EntityPermissionsPermissions {
  /**
  * Whether user_or_group field refers to a user or a group. True for a group and false for a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/entity_permissions#is_group EntityPermissions#is_group}
  */
  readonly isGroup: boolean | cdktf.IResolvable;
  /**
  * Whether or not this permission propagates down the hierarchy to sub-entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/entity_permissions#propagate EntityPermissions#propagate}
  */
  readonly propagate: boolean | cdktf.IResolvable;
  /**
  * Reference to the role providing the access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/entity_permissions#role_id EntityPermissions#role_id}
  */
  readonly roleId: string;
  /**
  * User or group receiving access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/entity_permissions#user_or_group EntityPermissions#user_or_group}
  */
  readonly userOrGroup: string;
}

export function entityPermissionsPermissionsToTerraform(struct?: EntityPermissionsPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_group: cdktf.booleanToTerraform(struct!.isGroup),
    propagate: cdktf.booleanToTerraform(struct!.propagate),
    role_id: cdktf.stringToTerraform(struct!.roleId),
    user_or_group: cdktf.stringToTerraform(struct!.userOrGroup),
  }
}

export class EntityPermissionsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EntityPermissionsPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGroup = this._isGroup;
    }
    if (this._propagate !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagate = this._propagate;
    }
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    if (this._userOrGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userOrGroup = this._userOrGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityPermissionsPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isGroup = undefined;
      this._propagate = undefined;
      this._roleId = undefined;
      this._userOrGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isGroup = value.isGroup;
      this._propagate = value.propagate;
      this._roleId = value.roleId;
      this._userOrGroup = value.userOrGroup;
    }
  }

  // is_group - computed: false, optional: false, required: true
  private _isGroup?: boolean | cdktf.IResolvable; 
  public get isGroup() {
    return this.getBooleanAttribute('is_group');
  }
  public set isGroup(value: boolean | cdktf.IResolvable) {
    this._isGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isGroupInput() {
    return this._isGroup;
  }

  // propagate - computed: false, optional: false, required: true
  private _propagate?: boolean | cdktf.IResolvable; 
  public get propagate() {
    return this.getBooleanAttribute('propagate');
  }
  public set propagate(value: boolean | cdktf.IResolvable) {
    this._propagate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateInput() {
    return this._propagate;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // user_or_group - computed: false, optional: false, required: true
  private _userOrGroup?: string; 
  public get userOrGroup() {
    return this.getStringAttribute('user_or_group');
  }
  public set userOrGroup(value: string) {
    this._userOrGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userOrGroupInput() {
    return this._userOrGroup;
  }
}

export class EntityPermissionsPermissionsList extends cdktf.ComplexList {
  public internalValue? : EntityPermissionsPermissions[] | cdktf.IResolvable

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
  public get(index: number): EntityPermissionsPermissionsOutputReference {
    return new EntityPermissionsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/entity_permissions vsphere_entity_permissions}
*/
export class EntityPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_entity_permissions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/entity_permissions vsphere_entity_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntityPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: EntityPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_entity_permissions',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.5.1',
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
    this._entityId = config.entityId;
    this._entityType = config.entityType;
    this._id = config.id;
    this._permissions.internalValue = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
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

  // permissions - computed: false, optional: false, required: true
  private _permissions = new EntityPermissionsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: EntityPermissionsPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity_id: cdktf.stringToTerraform(this._entityId),
      entity_type: cdktf.stringToTerraform(this._entityType),
      id: cdktf.stringToTerraform(this._id),
      permissions: cdktf.listMapper(entityPermissionsPermissionsToTerraform, true)(this._permissions.internalValue),
    };
  }
}
