/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContentLibraryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description of the content library.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#description ContentLibrary#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#id ContentLibrary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the content library.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#name ContentLibrary#name}
  */
  readonly name: string;
  /**
  * The name of the content library.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#storage_backing ContentLibrary#storage_backing}
  */
  readonly storageBacking: string[];
  /**
  * publication block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#publication ContentLibrary#publication}
  */
  readonly publication?: ContentLibraryPublication;
  /**
  * subscription block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#subscription ContentLibrary#subscription}
  */
  readonly subscription?: ContentLibrarySubscription;
}
export interface ContentLibraryPublication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#password ContentLibrary#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#published ContentLibrary#published}
  */
  readonly published?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#username ContentLibrary#username}
  */
  readonly username?: string;
}

export function contentLibraryPublicationToTerraform(struct?: ContentLibraryPublicationOutputReference | ContentLibraryPublication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    password: cdktf.stringToTerraform(struct!.password),
    published: cdktf.booleanToTerraform(struct!.published),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class ContentLibraryPublicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContentLibraryPublication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._published !== undefined) {
      hasAnyValues = true;
      internalValueResult.published = this._published;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentLibraryPublication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationMethod = undefined;
      this._password = undefined;
      this._published = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationMethod = value.authenticationMethod;
      this._password = value.password;
      this._published = value.published;
      this._username = value.username;
    }
  }

  // authentication_method - computed: false, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // publish_url - computed: true, optional: false, required: false
  public get publishUrl() {
    return this.getStringAttribute('publish_url');
  }

  // published - computed: false, optional: true, required: false
  private _published?: boolean | cdktf.IResolvable; 
  public get published() {
    return this.getBooleanAttribute('published');
  }
  public set published(value: boolean | cdktf.IResolvable) {
    this._published = value;
  }
  public resetPublished() {
    this._published = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ContentLibrarySubscription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#automatic_sync ContentLibrary#automatic_sync}
  */
  readonly automaticSync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#on_demand ContentLibrary#on_demand}
  */
  readonly onDemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#password ContentLibrary#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#subscription_url ContentLibrary#subscription_url}
  */
  readonly subscriptionUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#username ContentLibrary#username}
  */
  readonly username?: string;
}

export function contentLibrarySubscriptionToTerraform(struct?: ContentLibrarySubscriptionOutputReference | ContentLibrarySubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    automatic_sync: cdktf.booleanToTerraform(struct!.automaticSync),
    on_demand: cdktf.booleanToTerraform(struct!.onDemand),
    password: cdktf.stringToTerraform(struct!.password),
    subscription_url: cdktf.stringToTerraform(struct!.subscriptionUrl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class ContentLibrarySubscriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContentLibrarySubscription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._automaticSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticSync = this._automaticSync;
    }
    if (this._onDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemand = this._onDemand;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._subscriptionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionUrl = this._subscriptionUrl;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentLibrarySubscription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationMethod = undefined;
      this._automaticSync = undefined;
      this._onDemand = undefined;
      this._password = undefined;
      this._subscriptionUrl = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationMethod = value.authenticationMethod;
      this._automaticSync = value.automaticSync;
      this._onDemand = value.onDemand;
      this._password = value.password;
      this._subscriptionUrl = value.subscriptionUrl;
      this._username = value.username;
    }
  }

  // authentication_method - computed: false, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // automatic_sync - computed: false, optional: true, required: false
  private _automaticSync?: boolean | cdktf.IResolvable; 
  public get automaticSync() {
    return this.getBooleanAttribute('automatic_sync');
  }
  public set automaticSync(value: boolean | cdktf.IResolvable) {
    this._automaticSync = value;
  }
  public resetAutomaticSync() {
    this._automaticSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticSyncInput() {
    return this._automaticSync;
  }

  // on_demand - computed: false, optional: true, required: false
  private _onDemand?: boolean | cdktf.IResolvable; 
  public get onDemand() {
    return this.getBooleanAttribute('on_demand');
  }
  public set onDemand(value: boolean | cdktf.IResolvable) {
    this._onDemand = value;
  }
  public resetOnDemand() {
    this._onDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandInput() {
    return this._onDemand;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // subscription_url - computed: false, optional: true, required: false
  private _subscriptionUrl?: string; 
  public get subscriptionUrl() {
    return this.getStringAttribute('subscription_url');
  }
  public set subscriptionUrl(value: string) {
    this._subscriptionUrl = value;
  }
  public resetSubscriptionUrl() {
    this._subscriptionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionUrlInput() {
    return this._subscriptionUrl;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library vsphere_content_library}
*/
export class ContentLibrary extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_content_library";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library vsphere_content_library} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContentLibraryConfig
  */
  public constructor(scope: Construct, id: string, config: ContentLibraryConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_content_library',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._storageBacking = config.storageBacking;
    this._publication.internalValue = config.publication;
    this._subscription.internalValue = config.subscription;
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

  // storage_backing - computed: false, optional: false, required: true
  private _storageBacking?: string[]; 
  public get storageBacking() {
    return cdktf.Fn.tolist(this.getListAttribute('storage_backing'));
  }
  public set storageBacking(value: string[]) {
    this._storageBacking = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBackingInput() {
    return this._storageBacking;
  }

  // publication - computed: false, optional: true, required: false
  private _publication = new ContentLibraryPublicationOutputReference(this, "publication");
  public get publication() {
    return this._publication;
  }
  public putPublication(value: ContentLibraryPublication) {
    this._publication.internalValue = value;
  }
  public resetPublication() {
    this._publication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicationInput() {
    return this._publication.internalValue;
  }

  // subscription - computed: false, optional: true, required: false
  private _subscription = new ContentLibrarySubscriptionOutputReference(this, "subscription");
  public get subscription() {
    return this._subscription;
  }
  public putSubscription(value: ContentLibrarySubscription) {
    this._subscription.internalValue = value;
  }
  public resetSubscription() {
    this._subscription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInput() {
    return this._subscription.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      storage_backing: cdktf.listMapper(cdktf.stringToTerraform, false)(this._storageBacking),
      publication: contentLibraryPublicationToTerraform(this._publication.internalValue),
      subscription: contentLibrarySubscriptionToTerraform(this._subscription.internalValue),
    };
  }
}
