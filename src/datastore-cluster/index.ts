/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatastoreClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of custom attributes to set on this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#custom_attributes DatastoreCluster#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * The managed object ID of the datacenter to put the datastore cluster in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#datacenter_id DatastoreCluster#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * The name of the folder to locate the datastore cluster in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#folder DatastoreCluster#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#id DatastoreCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name for the new storage pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#name DatastoreCluster#name}
  */
  readonly name: string;
  /**
  * Advanced configuration options for storage DRS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_advanced_options DatastoreCluster#sdrs_advanced_options}
  */
  readonly sdrsAdvancedOptions?: { [key: string]: string };
  /**
  * The default automation level for all virtual machines in this storage cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_automation_level DatastoreCluster#sdrs_automation_level}
  */
  readonly sdrsAutomationLevel?: string;
  /**
  * When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_default_intra_vm_affinity DatastoreCluster#sdrs_default_intra_vm_affinity}
  */
  readonly sdrsDefaultIntraVmAffinity?: boolean | cdktf.IResolvable;
  /**
  * Enable storage DRS for this datastore cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_enabled DatastoreCluster#sdrs_enabled}
  */
  readonly sdrsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_free_space_threshold DatastoreCluster#sdrs_free_space_threshold}
  */
  readonly sdrsFreeSpaceThreshold?: number;
  /**
  * The free space threshold to use. When set to utilization, drs_space_utilization_threshold is used, and when set to freeSpace, drs_free_space_threshold is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_free_space_threshold_mode DatastoreCluster#sdrs_free_space_threshold_mode}
  */
  readonly sdrsFreeSpaceThresholdMode?: string;
  /**
  * The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_free_space_utilization_difference DatastoreCluster#sdrs_free_space_utilization_difference}
  */
  readonly sdrsFreeSpaceUtilizationDifference?: number;
  /**
  * Overrides the default automation settings when correcting I/O load imbalances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_io_balance_automation_level DatastoreCluster#sdrs_io_balance_automation_level}
  */
  readonly sdrsIoBalanceAutomationLevel?: string;
  /**
  * The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_io_latency_threshold DatastoreCluster#sdrs_io_latency_threshold}
  */
  readonly sdrsIoLatencyThreshold?: number;
  /**
  * Enable I/O load balancing for this datastore cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_io_load_balance_enabled DatastoreCluster#sdrs_io_load_balance_enabled}
  */
  readonly sdrsIoLoadBalanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_io_load_imbalance_threshold DatastoreCluster#sdrs_io_load_imbalance_threshold}
  */
  readonly sdrsIoLoadImbalanceThreshold?: number;
  /**
  * The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_io_reservable_iops_threshold DatastoreCluster#sdrs_io_reservable_iops_threshold}
  */
  readonly sdrsIoReservableIopsThreshold?: number;
  /**
  * The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_io_reservable_percent_threshold DatastoreCluster#sdrs_io_reservable_percent_threshold}
  */
  readonly sdrsIoReservablePercentThreshold?: number;
  /**
  * The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_io_reservable_threshold_mode DatastoreCluster#sdrs_io_reservable_threshold_mode}
  */
  readonly sdrsIoReservableThresholdMode?: string;
  /**
  * The storage DRS poll interval, in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_load_balance_interval DatastoreCluster#sdrs_load_balance_interval}
  */
  readonly sdrsLoadBalanceInterval?: number;
  /**
  * Overrides the default automation settings when correcting storage and VM policy violations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_policy_enforcement_automation_level DatastoreCluster#sdrs_policy_enforcement_automation_level}
  */
  readonly sdrsPolicyEnforcementAutomationLevel?: string;
  /**
  * Overrides the default automation settings when correcting affinity rule violations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_rule_enforcement_automation_level DatastoreCluster#sdrs_rule_enforcement_automation_level}
  */
  readonly sdrsRuleEnforcementAutomationLevel?: string;
  /**
  * Overrides the default automation settings when correcting disk space imbalances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_space_balance_automation_level DatastoreCluster#sdrs_space_balance_automation_level}
  */
  readonly sdrsSpaceBalanceAutomationLevel?: string;
  /**
  * The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_space_utilization_threshold DatastoreCluster#sdrs_space_utilization_threshold}
  */
  readonly sdrsSpaceUtilizationThreshold?: number;
  /**
  * Overrides the default automation settings when generating recommendations for datastore evacuation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#sdrs_vm_evacuation_automation_level DatastoreCluster#sdrs_vm_evacuation_automation_level}
  */
  readonly sdrsVmEvacuationAutomationLevel?: string;
  /**
  * A list of tag IDs to apply to this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#tags DatastoreCluster#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster vsphere_datastore_cluster}
*/
export class DatastoreCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_datastore_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatastoreCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatastoreCluster to import
  * @param importFromId The id of the existing DatastoreCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatastoreCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_datastore_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/datastore_cluster vsphere_datastore_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatastoreClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DatastoreClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_datastore_cluster',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.12.0',
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
    this._customAttributes = config.customAttributes;
    this._datacenterId = config.datacenterId;
    this._folder = config.folder;
    this._id = config.id;
    this._name = config.name;
    this._sdrsAdvancedOptions = config.sdrsAdvancedOptions;
    this._sdrsAutomationLevel = config.sdrsAutomationLevel;
    this._sdrsDefaultIntraVmAffinity = config.sdrsDefaultIntraVmAffinity;
    this._sdrsEnabled = config.sdrsEnabled;
    this._sdrsFreeSpaceThreshold = config.sdrsFreeSpaceThreshold;
    this._sdrsFreeSpaceThresholdMode = config.sdrsFreeSpaceThresholdMode;
    this._sdrsFreeSpaceUtilizationDifference = config.sdrsFreeSpaceUtilizationDifference;
    this._sdrsIoBalanceAutomationLevel = config.sdrsIoBalanceAutomationLevel;
    this._sdrsIoLatencyThreshold = config.sdrsIoLatencyThreshold;
    this._sdrsIoLoadBalanceEnabled = config.sdrsIoLoadBalanceEnabled;
    this._sdrsIoLoadImbalanceThreshold = config.sdrsIoLoadImbalanceThreshold;
    this._sdrsIoReservableIopsThreshold = config.sdrsIoReservableIopsThreshold;
    this._sdrsIoReservablePercentThreshold = config.sdrsIoReservablePercentThreshold;
    this._sdrsIoReservableThresholdMode = config.sdrsIoReservableThresholdMode;
    this._sdrsLoadBalanceInterval = config.sdrsLoadBalanceInterval;
    this._sdrsPolicyEnforcementAutomationLevel = config.sdrsPolicyEnforcementAutomationLevel;
    this._sdrsRuleEnforcementAutomationLevel = config.sdrsRuleEnforcementAutomationLevel;
    this._sdrsSpaceBalanceAutomationLevel = config.sdrsSpaceBalanceAutomationLevel;
    this._sdrsSpaceUtilizationThreshold = config.sdrsSpaceUtilizationThreshold;
    this._sdrsVmEvacuationAutomationLevel = config.sdrsVmEvacuationAutomationLevel;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // sdrs_advanced_options - computed: false, optional: true, required: false
  private _sdrsAdvancedOptions?: { [key: string]: string }; 
  public get sdrsAdvancedOptions() {
    return this.getStringMapAttribute('sdrs_advanced_options');
  }
  public set sdrsAdvancedOptions(value: { [key: string]: string }) {
    this._sdrsAdvancedOptions = value;
  }
  public resetSdrsAdvancedOptions() {
    this._sdrsAdvancedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsAdvancedOptionsInput() {
    return this._sdrsAdvancedOptions;
  }

  // sdrs_automation_level - computed: false, optional: true, required: false
  private _sdrsAutomationLevel?: string; 
  public get sdrsAutomationLevel() {
    return this.getStringAttribute('sdrs_automation_level');
  }
  public set sdrsAutomationLevel(value: string) {
    this._sdrsAutomationLevel = value;
  }
  public resetSdrsAutomationLevel() {
    this._sdrsAutomationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsAutomationLevelInput() {
    return this._sdrsAutomationLevel;
  }

  // sdrs_default_intra_vm_affinity - computed: false, optional: true, required: false
  private _sdrsDefaultIntraVmAffinity?: boolean | cdktf.IResolvable; 
  public get sdrsDefaultIntraVmAffinity() {
    return this.getBooleanAttribute('sdrs_default_intra_vm_affinity');
  }
  public set sdrsDefaultIntraVmAffinity(value: boolean | cdktf.IResolvable) {
    this._sdrsDefaultIntraVmAffinity = value;
  }
  public resetSdrsDefaultIntraVmAffinity() {
    this._sdrsDefaultIntraVmAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsDefaultIntraVmAffinityInput() {
    return this._sdrsDefaultIntraVmAffinity;
  }

  // sdrs_enabled - computed: false, optional: true, required: false
  private _sdrsEnabled?: boolean | cdktf.IResolvable; 
  public get sdrsEnabled() {
    return this.getBooleanAttribute('sdrs_enabled');
  }
  public set sdrsEnabled(value: boolean | cdktf.IResolvable) {
    this._sdrsEnabled = value;
  }
  public resetSdrsEnabled() {
    this._sdrsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsEnabledInput() {
    return this._sdrsEnabled;
  }

  // sdrs_free_space_threshold - computed: false, optional: true, required: false
  private _sdrsFreeSpaceThreshold?: number; 
  public get sdrsFreeSpaceThreshold() {
    return this.getNumberAttribute('sdrs_free_space_threshold');
  }
  public set sdrsFreeSpaceThreshold(value: number) {
    this._sdrsFreeSpaceThreshold = value;
  }
  public resetSdrsFreeSpaceThreshold() {
    this._sdrsFreeSpaceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsFreeSpaceThresholdInput() {
    return this._sdrsFreeSpaceThreshold;
  }

  // sdrs_free_space_threshold_mode - computed: false, optional: true, required: false
  private _sdrsFreeSpaceThresholdMode?: string; 
  public get sdrsFreeSpaceThresholdMode() {
    return this.getStringAttribute('sdrs_free_space_threshold_mode');
  }
  public set sdrsFreeSpaceThresholdMode(value: string) {
    this._sdrsFreeSpaceThresholdMode = value;
  }
  public resetSdrsFreeSpaceThresholdMode() {
    this._sdrsFreeSpaceThresholdMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsFreeSpaceThresholdModeInput() {
    return this._sdrsFreeSpaceThresholdMode;
  }

  // sdrs_free_space_utilization_difference - computed: false, optional: true, required: false
  private _sdrsFreeSpaceUtilizationDifference?: number; 
  public get sdrsFreeSpaceUtilizationDifference() {
    return this.getNumberAttribute('sdrs_free_space_utilization_difference');
  }
  public set sdrsFreeSpaceUtilizationDifference(value: number) {
    this._sdrsFreeSpaceUtilizationDifference = value;
  }
  public resetSdrsFreeSpaceUtilizationDifference() {
    this._sdrsFreeSpaceUtilizationDifference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsFreeSpaceUtilizationDifferenceInput() {
    return this._sdrsFreeSpaceUtilizationDifference;
  }

  // sdrs_io_balance_automation_level - computed: false, optional: true, required: false
  private _sdrsIoBalanceAutomationLevel?: string; 
  public get sdrsIoBalanceAutomationLevel() {
    return this.getStringAttribute('sdrs_io_balance_automation_level');
  }
  public set sdrsIoBalanceAutomationLevel(value: string) {
    this._sdrsIoBalanceAutomationLevel = value;
  }
  public resetSdrsIoBalanceAutomationLevel() {
    this._sdrsIoBalanceAutomationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsIoBalanceAutomationLevelInput() {
    return this._sdrsIoBalanceAutomationLevel;
  }

  // sdrs_io_latency_threshold - computed: false, optional: true, required: false
  private _sdrsIoLatencyThreshold?: number; 
  public get sdrsIoLatencyThreshold() {
    return this.getNumberAttribute('sdrs_io_latency_threshold');
  }
  public set sdrsIoLatencyThreshold(value: number) {
    this._sdrsIoLatencyThreshold = value;
  }
  public resetSdrsIoLatencyThreshold() {
    this._sdrsIoLatencyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsIoLatencyThresholdInput() {
    return this._sdrsIoLatencyThreshold;
  }

  // sdrs_io_load_balance_enabled - computed: false, optional: true, required: false
  private _sdrsIoLoadBalanceEnabled?: boolean | cdktf.IResolvable; 
  public get sdrsIoLoadBalanceEnabled() {
    return this.getBooleanAttribute('sdrs_io_load_balance_enabled');
  }
  public set sdrsIoLoadBalanceEnabled(value: boolean | cdktf.IResolvable) {
    this._sdrsIoLoadBalanceEnabled = value;
  }
  public resetSdrsIoLoadBalanceEnabled() {
    this._sdrsIoLoadBalanceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsIoLoadBalanceEnabledInput() {
    return this._sdrsIoLoadBalanceEnabled;
  }

  // sdrs_io_load_imbalance_threshold - computed: false, optional: true, required: false
  private _sdrsIoLoadImbalanceThreshold?: number; 
  public get sdrsIoLoadImbalanceThreshold() {
    return this.getNumberAttribute('sdrs_io_load_imbalance_threshold');
  }
  public set sdrsIoLoadImbalanceThreshold(value: number) {
    this._sdrsIoLoadImbalanceThreshold = value;
  }
  public resetSdrsIoLoadImbalanceThreshold() {
    this._sdrsIoLoadImbalanceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsIoLoadImbalanceThresholdInput() {
    return this._sdrsIoLoadImbalanceThreshold;
  }

  // sdrs_io_reservable_iops_threshold - computed: false, optional: true, required: false
  private _sdrsIoReservableIopsThreshold?: number; 
  public get sdrsIoReservableIopsThreshold() {
    return this.getNumberAttribute('sdrs_io_reservable_iops_threshold');
  }
  public set sdrsIoReservableIopsThreshold(value: number) {
    this._sdrsIoReservableIopsThreshold = value;
  }
  public resetSdrsIoReservableIopsThreshold() {
    this._sdrsIoReservableIopsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsIoReservableIopsThresholdInput() {
    return this._sdrsIoReservableIopsThreshold;
  }

  // sdrs_io_reservable_percent_threshold - computed: false, optional: true, required: false
  private _sdrsIoReservablePercentThreshold?: number; 
  public get sdrsIoReservablePercentThreshold() {
    return this.getNumberAttribute('sdrs_io_reservable_percent_threshold');
  }
  public set sdrsIoReservablePercentThreshold(value: number) {
    this._sdrsIoReservablePercentThreshold = value;
  }
  public resetSdrsIoReservablePercentThreshold() {
    this._sdrsIoReservablePercentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsIoReservablePercentThresholdInput() {
    return this._sdrsIoReservablePercentThreshold;
  }

  // sdrs_io_reservable_threshold_mode - computed: false, optional: true, required: false
  private _sdrsIoReservableThresholdMode?: string; 
  public get sdrsIoReservableThresholdMode() {
    return this.getStringAttribute('sdrs_io_reservable_threshold_mode');
  }
  public set sdrsIoReservableThresholdMode(value: string) {
    this._sdrsIoReservableThresholdMode = value;
  }
  public resetSdrsIoReservableThresholdMode() {
    this._sdrsIoReservableThresholdMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsIoReservableThresholdModeInput() {
    return this._sdrsIoReservableThresholdMode;
  }

  // sdrs_load_balance_interval - computed: false, optional: true, required: false
  private _sdrsLoadBalanceInterval?: number; 
  public get sdrsLoadBalanceInterval() {
    return this.getNumberAttribute('sdrs_load_balance_interval');
  }
  public set sdrsLoadBalanceInterval(value: number) {
    this._sdrsLoadBalanceInterval = value;
  }
  public resetSdrsLoadBalanceInterval() {
    this._sdrsLoadBalanceInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsLoadBalanceIntervalInput() {
    return this._sdrsLoadBalanceInterval;
  }

  // sdrs_policy_enforcement_automation_level - computed: false, optional: true, required: false
  private _sdrsPolicyEnforcementAutomationLevel?: string; 
  public get sdrsPolicyEnforcementAutomationLevel() {
    return this.getStringAttribute('sdrs_policy_enforcement_automation_level');
  }
  public set sdrsPolicyEnforcementAutomationLevel(value: string) {
    this._sdrsPolicyEnforcementAutomationLevel = value;
  }
  public resetSdrsPolicyEnforcementAutomationLevel() {
    this._sdrsPolicyEnforcementAutomationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsPolicyEnforcementAutomationLevelInput() {
    return this._sdrsPolicyEnforcementAutomationLevel;
  }

  // sdrs_rule_enforcement_automation_level - computed: false, optional: true, required: false
  private _sdrsRuleEnforcementAutomationLevel?: string; 
  public get sdrsRuleEnforcementAutomationLevel() {
    return this.getStringAttribute('sdrs_rule_enforcement_automation_level');
  }
  public set sdrsRuleEnforcementAutomationLevel(value: string) {
    this._sdrsRuleEnforcementAutomationLevel = value;
  }
  public resetSdrsRuleEnforcementAutomationLevel() {
    this._sdrsRuleEnforcementAutomationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsRuleEnforcementAutomationLevelInput() {
    return this._sdrsRuleEnforcementAutomationLevel;
  }

  // sdrs_space_balance_automation_level - computed: false, optional: true, required: false
  private _sdrsSpaceBalanceAutomationLevel?: string; 
  public get sdrsSpaceBalanceAutomationLevel() {
    return this.getStringAttribute('sdrs_space_balance_automation_level');
  }
  public set sdrsSpaceBalanceAutomationLevel(value: string) {
    this._sdrsSpaceBalanceAutomationLevel = value;
  }
  public resetSdrsSpaceBalanceAutomationLevel() {
    this._sdrsSpaceBalanceAutomationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsSpaceBalanceAutomationLevelInput() {
    return this._sdrsSpaceBalanceAutomationLevel;
  }

  // sdrs_space_utilization_threshold - computed: false, optional: true, required: false
  private _sdrsSpaceUtilizationThreshold?: number; 
  public get sdrsSpaceUtilizationThreshold() {
    return this.getNumberAttribute('sdrs_space_utilization_threshold');
  }
  public set sdrsSpaceUtilizationThreshold(value: number) {
    this._sdrsSpaceUtilizationThreshold = value;
  }
  public resetSdrsSpaceUtilizationThreshold() {
    this._sdrsSpaceUtilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsSpaceUtilizationThresholdInput() {
    return this._sdrsSpaceUtilizationThreshold;
  }

  // sdrs_vm_evacuation_automation_level - computed: false, optional: true, required: false
  private _sdrsVmEvacuationAutomationLevel?: string; 
  public get sdrsVmEvacuationAutomationLevel() {
    return this.getStringAttribute('sdrs_vm_evacuation_automation_level');
  }
  public set sdrsVmEvacuationAutomationLevel(value: string) {
    this._sdrsVmEvacuationAutomationLevel = value;
  }
  public resetSdrsVmEvacuationAutomationLevel() {
    this._sdrsVmEvacuationAutomationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrsVmEvacuationAutomationLevelInput() {
    return this._sdrsVmEvacuationAutomationLevel;
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
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sdrs_advanced_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._sdrsAdvancedOptions),
      sdrs_automation_level: cdktf.stringToTerraform(this._sdrsAutomationLevel),
      sdrs_default_intra_vm_affinity: cdktf.booleanToTerraform(this._sdrsDefaultIntraVmAffinity),
      sdrs_enabled: cdktf.booleanToTerraform(this._sdrsEnabled),
      sdrs_free_space_threshold: cdktf.numberToTerraform(this._sdrsFreeSpaceThreshold),
      sdrs_free_space_threshold_mode: cdktf.stringToTerraform(this._sdrsFreeSpaceThresholdMode),
      sdrs_free_space_utilization_difference: cdktf.numberToTerraform(this._sdrsFreeSpaceUtilizationDifference),
      sdrs_io_balance_automation_level: cdktf.stringToTerraform(this._sdrsIoBalanceAutomationLevel),
      sdrs_io_latency_threshold: cdktf.numberToTerraform(this._sdrsIoLatencyThreshold),
      sdrs_io_load_balance_enabled: cdktf.booleanToTerraform(this._sdrsIoLoadBalanceEnabled),
      sdrs_io_load_imbalance_threshold: cdktf.numberToTerraform(this._sdrsIoLoadImbalanceThreshold),
      sdrs_io_reservable_iops_threshold: cdktf.numberToTerraform(this._sdrsIoReservableIopsThreshold),
      sdrs_io_reservable_percent_threshold: cdktf.numberToTerraform(this._sdrsIoReservablePercentThreshold),
      sdrs_io_reservable_threshold_mode: cdktf.stringToTerraform(this._sdrsIoReservableThresholdMode),
      sdrs_load_balance_interval: cdktf.numberToTerraform(this._sdrsLoadBalanceInterval),
      sdrs_policy_enforcement_automation_level: cdktf.stringToTerraform(this._sdrsPolicyEnforcementAutomationLevel),
      sdrs_rule_enforcement_automation_level: cdktf.stringToTerraform(this._sdrsRuleEnforcementAutomationLevel),
      sdrs_space_balance_automation_level: cdktf.stringToTerraform(this._sdrsSpaceBalanceAutomationLevel),
      sdrs_space_utilization_threshold: cdktf.numberToTerraform(this._sdrsSpaceUtilizationThreshold),
      sdrs_vm_evacuation_automation_level: cdktf.stringToTerraform(this._sdrsVmEvacuationAutomationLevel),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      sdrs_advanced_options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sdrsAdvancedOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      sdrs_automation_level: {
        value: cdktf.stringToHclTerraform(this._sdrsAutomationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdrs_default_intra_vm_affinity: {
        value: cdktf.booleanToHclTerraform(this._sdrsDefaultIntraVmAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sdrs_enabled: {
        value: cdktf.booleanToHclTerraform(this._sdrsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sdrs_free_space_threshold: {
        value: cdktf.numberToHclTerraform(this._sdrsFreeSpaceThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdrs_free_space_threshold_mode: {
        value: cdktf.stringToHclTerraform(this._sdrsFreeSpaceThresholdMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdrs_free_space_utilization_difference: {
        value: cdktf.numberToHclTerraform(this._sdrsFreeSpaceUtilizationDifference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdrs_io_balance_automation_level: {
        value: cdktf.stringToHclTerraform(this._sdrsIoBalanceAutomationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdrs_io_latency_threshold: {
        value: cdktf.numberToHclTerraform(this._sdrsIoLatencyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdrs_io_load_balance_enabled: {
        value: cdktf.booleanToHclTerraform(this._sdrsIoLoadBalanceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sdrs_io_load_imbalance_threshold: {
        value: cdktf.numberToHclTerraform(this._sdrsIoLoadImbalanceThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdrs_io_reservable_iops_threshold: {
        value: cdktf.numberToHclTerraform(this._sdrsIoReservableIopsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdrs_io_reservable_percent_threshold: {
        value: cdktf.numberToHclTerraform(this._sdrsIoReservablePercentThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdrs_io_reservable_threshold_mode: {
        value: cdktf.stringToHclTerraform(this._sdrsIoReservableThresholdMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdrs_load_balance_interval: {
        value: cdktf.numberToHclTerraform(this._sdrsLoadBalanceInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdrs_policy_enforcement_automation_level: {
        value: cdktf.stringToHclTerraform(this._sdrsPolicyEnforcementAutomationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdrs_rule_enforcement_automation_level: {
        value: cdktf.stringToHclTerraform(this._sdrsRuleEnforcementAutomationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdrs_space_balance_automation_level: {
        value: cdktf.stringToHclTerraform(this._sdrsSpaceBalanceAutomationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdrs_space_utilization_threshold: {
        value: cdktf.numberToHclTerraform(this._sdrsSpaceUtilizationThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdrs_vm_evacuation_automation_level: {
        value: cdktf.stringToHclTerraform(this._sdrsVmEvacuationAutomationLevel),
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
