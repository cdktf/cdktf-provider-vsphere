/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VappEntityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Managed object ID of the vApp container the entity is a member of.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity#container_id VappEntity#container_id}
  */
  readonly containerId: string;
  /**
  * A list of custom attributes to set on this resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity#custom_attributes VappEntity#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity#id VappEntity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * How to start the entity. Valid settings are none or powerOn. If set to none, then the entity does not participate in auto-start.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity#start_action VappEntity#start_action}
  */
  readonly startAction?: string;
  /**
  * Delay in seconds before continuing with the next entity in the order of entities to be started.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity#start_delay VappEntity#start_delay}
  */
  readonly startDelay?: number;
  /**
  * Order to start and stop target in vApp.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity#start_order VappEntity#start_order}
  */
  readonly startOrder?: number;
  /**
  * Defines the stop action for the entity. Can be set to none, powerOff, guestShutdown, or suspend. If set to none, then the entity does not participate in auto-stop.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity#stop_action VappEntity#stop_action}
  */
  readonly stopAction?: string;
  /**
  * Delay in seconds before continuing with the next entity in the order of entities to be stopped.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity#stop_delay VappEntity#stop_delay}
  */
  readonly stopDelay?: number;
  /**
  * A list of tag IDs to apply to this object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity#tags VappEntity#tags}
  */
  readonly tags?: string[];
  /**
  * Managed object ID of the entity to power on or power off. This can be a virtual machine or a vApp.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity#target_id VappEntity#target_id}
  */
  readonly targetId: string;
  /**
  * Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay. This property has no effect for vApps.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity#wait_for_guest VappEntity#wait_for_guest}
  */
  readonly waitForGuest?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity vsphere_vapp_entity}
*/
export class VappEntity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_vapp_entity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/vapp_entity vsphere_vapp_entity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VappEntityConfig
  */
  public constructor(scope: Construct, id: string, config: VappEntityConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_vapp_entity',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.4.0',
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
    this._containerId = config.containerId;
    this._customAttributes = config.customAttributes;
    this._id = config.id;
    this._startAction = config.startAction;
    this._startDelay = config.startDelay;
    this._startOrder = config.startOrder;
    this._stopAction = config.stopAction;
    this._stopDelay = config.stopDelay;
    this._tags = config.tags;
    this._targetId = config.targetId;
    this._waitForGuest = config.waitForGuest;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_id - computed: false, optional: false, required: true
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
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

  // start_action - computed: false, optional: true, required: false
  private _startAction?: string; 
  public get startAction() {
    return this.getStringAttribute('start_action');
  }
  public set startAction(value: string) {
    this._startAction = value;
  }
  public resetStartAction() {
    this._startAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startActionInput() {
    return this._startAction;
  }

  // start_delay - computed: false, optional: true, required: false
  private _startDelay?: number; 
  public get startDelay() {
    return this.getNumberAttribute('start_delay');
  }
  public set startDelay(value: number) {
    this._startDelay = value;
  }
  public resetStartDelay() {
    this._startDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDelayInput() {
    return this._startDelay;
  }

  // start_order - computed: false, optional: true, required: false
  private _startOrder?: number; 
  public get startOrder() {
    return this.getNumberAttribute('start_order');
  }
  public set startOrder(value: number) {
    this._startOrder = value;
  }
  public resetStartOrder() {
    this._startOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOrderInput() {
    return this._startOrder;
  }

  // stop_action - computed: false, optional: true, required: false
  private _stopAction?: string; 
  public get stopAction() {
    return this.getStringAttribute('stop_action');
  }
  public set stopAction(value: string) {
    this._stopAction = value;
  }
  public resetStopAction() {
    this._stopAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopActionInput() {
    return this._stopAction;
  }

  // stop_delay - computed: false, optional: true, required: false
  private _stopDelay?: number; 
  public get stopDelay() {
    return this.getNumberAttribute('stop_delay');
  }
  public set stopDelay(value: number) {
    this._stopDelay = value;
  }
  public resetStopDelay() {
    this._stopDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopDelayInput() {
    return this._stopDelay;
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

  // target_id - computed: false, optional: false, required: true
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // wait_for_guest - computed: false, optional: true, required: false
  private _waitForGuest?: boolean | cdktf.IResolvable; 
  public get waitForGuest() {
    return this.getBooleanAttribute('wait_for_guest');
  }
  public set waitForGuest(value: boolean | cdktf.IResolvable) {
    this._waitForGuest = value;
  }
  public resetWaitForGuest() {
    this._waitForGuest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForGuestInput() {
    return this._waitForGuest;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_id: cdktf.stringToTerraform(this._containerId),
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      id: cdktf.stringToTerraform(this._id),
      start_action: cdktf.stringToTerraform(this._startAction),
      start_delay: cdktf.numberToTerraform(this._startDelay),
      start_order: cdktf.numberToTerraform(this._startOrder),
      stop_action: cdktf.stringToTerraform(this._stopAction),
      stop_delay: cdktf.numberToTerraform(this._stopDelay),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_id: cdktf.stringToTerraform(this._targetId),
      wait_for_guest: cdktf.booleanToTerraform(this._waitForGuest),
    };
  }
}
