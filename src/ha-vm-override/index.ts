// https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HaVmOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * The managed object ID of the cluster.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#compute_cluster_id HaVmOverride#compute_cluster_id}
  */
  readonly computeClusterId: string;
  /**
  * Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event. Can be one of useClusterDefault, none or reset.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_datastore_apd_recovery_action HaVmOverride#ha_datastore_apd_recovery_action}
  */
  readonly haDatastoreApdRecoveryAction?: string;
  /**
  * Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore. Can be one of clusterDefault, disabled, warning, restartConservative, or restartAggressive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_datastore_apd_response HaVmOverride#ha_datastore_apd_response}
  */
  readonly haDatastoreApdResponse?: string;
  /**
  * Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. Specify -1 to use the cluster setting.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_datastore_apd_response_delay HaVmOverride#ha_datastore_apd_response_delay}
  */
  readonly haDatastoreApdResponseDelay?: number;
  /**
  * Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore. Can be one of clusterDefault, disabled, warning, or restartAggressive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_datastore_pdl_response HaVmOverride#ha_datastore_pdl_response}
  */
  readonly haDatastorePdlResponse?: string;
  /**
  * The action to take on this virtual machine when a host is isolated from the rest of the cluster. Can be one of clusterIsolationResponse, none, powerOff, or shutdown.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_host_isolation_response HaVmOverride#ha_host_isolation_response}
  */
  readonly haHostIsolationResponse?: string;
  /**
  * If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed. The value is in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_failure_interval HaVmOverride#ha_vm_failure_interval}
  */
  readonly haVmFailureInterval?: number;
  /**
  * The length of the reset window in which ha_vm_maximum_resets can operate. When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_maximum_failure_window HaVmOverride#ha_vm_maximum_failure_window}
  */
  readonly haVmMaximumFailureWindow?: number;
  /**
  * The maximum number of resets that HA will perform to this virtual machine when responding to a failure event.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_maximum_resets HaVmOverride#ha_vm_maximum_resets}
  */
  readonly haVmMaximumResets?: number;
  /**
  * The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_minimum_uptime HaVmOverride#ha_vm_minimum_uptime}
  */
  readonly haVmMinimumUptime?: number;
  /**
  * The type of virtual machine monitoring to use for this virtual machine. Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_monitoring HaVmOverride#ha_vm_monitoring}
  */
  readonly haVmMonitoring?: string;
  /**
  * Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring. The default is true (use cluster defaults) - set to false to have overrides take effect.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_monitoring_use_cluster_defaults HaVmOverride#ha_vm_monitoring_use_cluster_defaults}
  */
  readonly haVmMonitoringUseClusterDefaults?: boolean | cdktf.IResolvable;
  /**
  * The restart priority for this virtual machine when vSphere detects a host failure. Can be one of clusterRestartPriority, lowest, low, medium, high, or highest.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_restart_priority HaVmOverride#ha_vm_restart_priority}
  */
  readonly haVmRestartPriority?: string;
  /**
  * The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready. Use -1 to use the cluster default.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_restart_timeout HaVmOverride#ha_vm_restart_timeout}
  */
  readonly haVmRestartTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#id HaVmOverride#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The managed object ID of the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#virtual_machine_id HaVmOverride#virtual_machine_id}
  */
  readonly virtualMachineId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override vsphere_ha_vm_override}
*/
export class HaVmOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_ha_vm_override";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override vsphere_ha_vm_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HaVmOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: HaVmOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_ha_vm_override',
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
    this._computeClusterId = config.computeClusterId;
    this._haDatastoreApdRecoveryAction = config.haDatastoreApdRecoveryAction;
    this._haDatastoreApdResponse = config.haDatastoreApdResponse;
    this._haDatastoreApdResponseDelay = config.haDatastoreApdResponseDelay;
    this._haDatastorePdlResponse = config.haDatastorePdlResponse;
    this._haHostIsolationResponse = config.haHostIsolationResponse;
    this._haVmFailureInterval = config.haVmFailureInterval;
    this._haVmMaximumFailureWindow = config.haVmMaximumFailureWindow;
    this._haVmMaximumResets = config.haVmMaximumResets;
    this._haVmMinimumUptime = config.haVmMinimumUptime;
    this._haVmMonitoring = config.haVmMonitoring;
    this._haVmMonitoringUseClusterDefaults = config.haVmMonitoringUseClusterDefaults;
    this._haVmRestartPriority = config.haVmRestartPriority;
    this._haVmRestartTimeout = config.haVmRestartTimeout;
    this._id = config.id;
    this._virtualMachineId = config.virtualMachineId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_cluster_id - computed: false, optional: false, required: true
  private _computeClusterId?: string; 
  public get computeClusterId() {
    return this.getStringAttribute('compute_cluster_id');
  }
  public set computeClusterId(value: string) {
    this._computeClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeClusterIdInput() {
    return this._computeClusterId;
  }

  // ha_datastore_apd_recovery_action - computed: false, optional: true, required: false
  private _haDatastoreApdRecoveryAction?: string; 
  public get haDatastoreApdRecoveryAction() {
    return this.getStringAttribute('ha_datastore_apd_recovery_action');
  }
  public set haDatastoreApdRecoveryAction(value: string) {
    this._haDatastoreApdRecoveryAction = value;
  }
  public resetHaDatastoreApdRecoveryAction() {
    this._haDatastoreApdRecoveryAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haDatastoreApdRecoveryActionInput() {
    return this._haDatastoreApdRecoveryAction;
  }

  // ha_datastore_apd_response - computed: false, optional: true, required: false
  private _haDatastoreApdResponse?: string; 
  public get haDatastoreApdResponse() {
    return this.getStringAttribute('ha_datastore_apd_response');
  }
  public set haDatastoreApdResponse(value: string) {
    this._haDatastoreApdResponse = value;
  }
  public resetHaDatastoreApdResponse() {
    this._haDatastoreApdResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haDatastoreApdResponseInput() {
    return this._haDatastoreApdResponse;
  }

  // ha_datastore_apd_response_delay - computed: false, optional: true, required: false
  private _haDatastoreApdResponseDelay?: number; 
  public get haDatastoreApdResponseDelay() {
    return this.getNumberAttribute('ha_datastore_apd_response_delay');
  }
  public set haDatastoreApdResponseDelay(value: number) {
    this._haDatastoreApdResponseDelay = value;
  }
  public resetHaDatastoreApdResponseDelay() {
    this._haDatastoreApdResponseDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haDatastoreApdResponseDelayInput() {
    return this._haDatastoreApdResponseDelay;
  }

  // ha_datastore_pdl_response - computed: false, optional: true, required: false
  private _haDatastorePdlResponse?: string; 
  public get haDatastorePdlResponse() {
    return this.getStringAttribute('ha_datastore_pdl_response');
  }
  public set haDatastorePdlResponse(value: string) {
    this._haDatastorePdlResponse = value;
  }
  public resetHaDatastorePdlResponse() {
    this._haDatastorePdlResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haDatastorePdlResponseInput() {
    return this._haDatastorePdlResponse;
  }

  // ha_host_isolation_response - computed: false, optional: true, required: false
  private _haHostIsolationResponse?: string; 
  public get haHostIsolationResponse() {
    return this.getStringAttribute('ha_host_isolation_response');
  }
  public set haHostIsolationResponse(value: string) {
    this._haHostIsolationResponse = value;
  }
  public resetHaHostIsolationResponse() {
    this._haHostIsolationResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haHostIsolationResponseInput() {
    return this._haHostIsolationResponse;
  }

  // ha_vm_failure_interval - computed: false, optional: true, required: false
  private _haVmFailureInterval?: number; 
  public get haVmFailureInterval() {
    return this.getNumberAttribute('ha_vm_failure_interval');
  }
  public set haVmFailureInterval(value: number) {
    this._haVmFailureInterval = value;
  }
  public resetHaVmFailureInterval() {
    this._haVmFailureInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haVmFailureIntervalInput() {
    return this._haVmFailureInterval;
  }

  // ha_vm_maximum_failure_window - computed: false, optional: true, required: false
  private _haVmMaximumFailureWindow?: number; 
  public get haVmMaximumFailureWindow() {
    return this.getNumberAttribute('ha_vm_maximum_failure_window');
  }
  public set haVmMaximumFailureWindow(value: number) {
    this._haVmMaximumFailureWindow = value;
  }
  public resetHaVmMaximumFailureWindow() {
    this._haVmMaximumFailureWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haVmMaximumFailureWindowInput() {
    return this._haVmMaximumFailureWindow;
  }

  // ha_vm_maximum_resets - computed: false, optional: true, required: false
  private _haVmMaximumResets?: number; 
  public get haVmMaximumResets() {
    return this.getNumberAttribute('ha_vm_maximum_resets');
  }
  public set haVmMaximumResets(value: number) {
    this._haVmMaximumResets = value;
  }
  public resetHaVmMaximumResets() {
    this._haVmMaximumResets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haVmMaximumResetsInput() {
    return this._haVmMaximumResets;
  }

  // ha_vm_minimum_uptime - computed: false, optional: true, required: false
  private _haVmMinimumUptime?: number; 
  public get haVmMinimumUptime() {
    return this.getNumberAttribute('ha_vm_minimum_uptime');
  }
  public set haVmMinimumUptime(value: number) {
    this._haVmMinimumUptime = value;
  }
  public resetHaVmMinimumUptime() {
    this._haVmMinimumUptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haVmMinimumUptimeInput() {
    return this._haVmMinimumUptime;
  }

  // ha_vm_monitoring - computed: false, optional: true, required: false
  private _haVmMonitoring?: string; 
  public get haVmMonitoring() {
    return this.getStringAttribute('ha_vm_monitoring');
  }
  public set haVmMonitoring(value: string) {
    this._haVmMonitoring = value;
  }
  public resetHaVmMonitoring() {
    this._haVmMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haVmMonitoringInput() {
    return this._haVmMonitoring;
  }

  // ha_vm_monitoring_use_cluster_defaults - computed: false, optional: true, required: false
  private _haVmMonitoringUseClusterDefaults?: boolean | cdktf.IResolvable; 
  public get haVmMonitoringUseClusterDefaults() {
    return this.getBooleanAttribute('ha_vm_monitoring_use_cluster_defaults');
  }
  public set haVmMonitoringUseClusterDefaults(value: boolean | cdktf.IResolvable) {
    this._haVmMonitoringUseClusterDefaults = value;
  }
  public resetHaVmMonitoringUseClusterDefaults() {
    this._haVmMonitoringUseClusterDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haVmMonitoringUseClusterDefaultsInput() {
    return this._haVmMonitoringUseClusterDefaults;
  }

  // ha_vm_restart_priority - computed: false, optional: true, required: false
  private _haVmRestartPriority?: string; 
  public get haVmRestartPriority() {
    return this.getStringAttribute('ha_vm_restart_priority');
  }
  public set haVmRestartPriority(value: string) {
    this._haVmRestartPriority = value;
  }
  public resetHaVmRestartPriority() {
    this._haVmRestartPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haVmRestartPriorityInput() {
    return this._haVmRestartPriority;
  }

  // ha_vm_restart_timeout - computed: false, optional: true, required: false
  private _haVmRestartTimeout?: number; 
  public get haVmRestartTimeout() {
    return this.getNumberAttribute('ha_vm_restart_timeout');
  }
  public set haVmRestartTimeout(value: number) {
    this._haVmRestartTimeout = value;
  }
  public resetHaVmRestartTimeout() {
    this._haVmRestartTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haVmRestartTimeoutInput() {
    return this._haVmRestartTimeout;
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

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId?: string; 
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_cluster_id: cdktf.stringToTerraform(this._computeClusterId),
      ha_datastore_apd_recovery_action: cdktf.stringToTerraform(this._haDatastoreApdRecoveryAction),
      ha_datastore_apd_response: cdktf.stringToTerraform(this._haDatastoreApdResponse),
      ha_datastore_apd_response_delay: cdktf.numberToTerraform(this._haDatastoreApdResponseDelay),
      ha_datastore_pdl_response: cdktf.stringToTerraform(this._haDatastorePdlResponse),
      ha_host_isolation_response: cdktf.stringToTerraform(this._haHostIsolationResponse),
      ha_vm_failure_interval: cdktf.numberToTerraform(this._haVmFailureInterval),
      ha_vm_maximum_failure_window: cdktf.numberToTerraform(this._haVmMaximumFailureWindow),
      ha_vm_maximum_resets: cdktf.numberToTerraform(this._haVmMaximumResets),
      ha_vm_minimum_uptime: cdktf.numberToTerraform(this._haVmMinimumUptime),
      ha_vm_monitoring: cdktf.stringToTerraform(this._haVmMonitoring),
      ha_vm_monitoring_use_cluster_defaults: cdktf.booleanToTerraform(this._haVmMonitoringUseClusterDefaults),
      ha_vm_restart_priority: cdktf.stringToTerraform(this._haVmRestartPriority),
      ha_vm_restart_timeout: cdktf.numberToTerraform(this._haVmRestartTimeout),
      id: cdktf.stringToTerraform(this._id),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
    };
  }
}
