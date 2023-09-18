/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of custom attributes to set on this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#custom_attributes ComputeCluster#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * The managed object ID of the datacenter to put the cluster in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#datacenter_id ComputeCluster#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * The automation level for host power operations in this cluster. Can be one of manual or automated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#dpm_automation_level ComputeCluster#dpm_automation_level}
  */
  readonly dpmAutomationLevel?: string;
  /**
  * Enable DPM support for DRS. This allows you to dynamically control the power of hosts depending on the needs of virtual machines in the cluster. Requires that DRS be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#dpm_enabled ComputeCluster#dpm_enabled}
  */
  readonly dpmEnabled?: boolean | cdktf.IResolvable;
  /**
  * A value between 1 and 5 indicating the threshold of load within the cluster that influences host power operations. This affects both power on and power off operations - a lower setting will tolerate more of a surplus/deficit than a higher setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#dpm_threshold ComputeCluster#dpm_threshold}
  */
  readonly dpmThreshold?: number;
  /**
  * Advanced configuration options for DRS and DPM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#drs_advanced_options ComputeCluster#drs_advanced_options}
  */
  readonly drsAdvancedOptions?: { [key: string]: string };
  /**
  * The default automation level for all virtual machines in this cluster. Can be one of manual, partiallyAutomated, or fullyAutomated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#drs_automation_level ComputeCluster#drs_automation_level}
  */
  readonly drsAutomationLevel?: string;
  /**
  * When true, enables DRS to use data from vRealize Operations Manager to make proactive DRS recommendations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#drs_enable_predictive_drs ComputeCluster#drs_enable_predictive_drs}
  */
  readonly drsEnablePredictiveDrs?: boolean | cdktf.IResolvable;
  /**
  * When true, allows individual VM overrides within this cluster to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#drs_enable_vm_overrides ComputeCluster#drs_enable_vm_overrides}
  */
  readonly drsEnableVmOverrides?: boolean | cdktf.IResolvable;
  /**
  * Enable DRS for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#drs_enabled ComputeCluster#drs_enabled}
  */
  readonly drsEnabled?: boolean | cdktf.IResolvable;
  /**
  * A value between 1 and 5 indicating the threshold of imbalance tolerated between hosts. A lower setting will tolerate more imbalance while a higher setting will tolerate less.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#drs_migration_threshold ComputeCluster#drs_migration_threshold}
  */
  readonly drsMigrationThreshold?: number;
  /**
  * Enable scalable shares for all descendants of this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#drs_scale_descendants_shares ComputeCluster#drs_scale_descendants_shares}
  */
  readonly drsScaleDescendantsShares?: string;
  /**
  * The name of the folder to locate the cluster in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#folder ComputeCluster#folder}
  */
  readonly folder?: string;
  /**
  * Force removal of all hosts in the cluster during destroy and make them standalone hosts. Use of this flag mainly exists for testing and is not recommended in normal use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#force_evacuate_on_destroy ComputeCluster#force_evacuate_on_destroy}
  */
  readonly forceEvacuateOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * When ha_admission_control_policy is failoverHosts, this defines the managed object IDs of hosts to use as dedicated failover hosts. These hosts are kept as available as possible - admission control will block access to the host, and DRS will ignore the host when making recommendations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_admission_control_failover_host_system_ids ComputeCluster#ha_admission_control_failover_host_system_ids}
  */
  readonly haAdmissionControlFailoverHostSystemIds?: string[];
  /**
  * The maximum number of failed hosts that admission control tolerates when making decisions on whether to permit virtual machine operations. The maximum is one less than the number of hosts in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_admission_control_host_failure_tolerance ComputeCluster#ha_admission_control_host_failure_tolerance}
  */
  readonly haAdmissionControlHostFailureTolerance?: number;
  /**
  * The percentage of resource reduction that a cluster of VMs can tolerate in case of a failover. A value of 0 produces warnings only, whereas a value of 100 disables the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_admission_control_performance_tolerance ComputeCluster#ha_admission_control_performance_tolerance}
  */
  readonly haAdmissionControlPerformanceTolerance?: number;
  /**
  * The type of admission control policy to use with vSphere HA, which controls whether or not specific VM operations are permitted in the cluster in order to protect the reliability of the cluster. Can be one of resourcePercentage, slotPolicy, failoverHosts, or disabled. Note that disabling admission control is not recommended and can lead to service issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_admission_control_policy ComputeCluster#ha_admission_control_policy}
  */
  readonly haAdmissionControlPolicy?: string;
  /**
  * When ha_admission_control_policy is resourcePercentage, automatically determine available resource percentages by subtracting the average number of host resources represented by the ha_admission_control_host_failure_tolerance setting from the total amount of resources in the cluster. Disable to supply user-defined values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_admission_control_resource_percentage_auto_compute ComputeCluster#ha_admission_control_resource_percentage_auto_compute}
  */
  readonly haAdmissionControlResourcePercentageAutoCompute?: boolean | cdktf.IResolvable;
  /**
  * When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of CPU resources in the cluster to reserve for failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_admission_control_resource_percentage_cpu ComputeCluster#ha_admission_control_resource_percentage_cpu}
  */
  readonly haAdmissionControlResourcePercentageCpu?: number;
  /**
  * When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of memory resources in the cluster to reserve for failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_admission_control_resource_percentage_memory ComputeCluster#ha_admission_control_resource_percentage_memory}
  */
  readonly haAdmissionControlResourcePercentageMemory?: number;
  /**
  * When ha_admission_control_policy is slotPolicy, this controls the user-defined CPU slot size, in MHz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_cpu ComputeCluster#ha_admission_control_slot_policy_explicit_cpu}
  */
  readonly haAdmissionControlSlotPolicyExplicitCpu?: number;
  /**
  * When ha_admission_control_policy is slotPolicy, this controls the user-defined memory slot size, in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_memory ComputeCluster#ha_admission_control_slot_policy_explicit_memory}
  */
  readonly haAdmissionControlSlotPolicyExplicitMemory?: number;
  /**
  * When ha_admission_control_policy is slotPolicy, this setting controls whether or not you wish to supply explicit values to CPU and memory slot sizes. The default is to gather a automatic average based on all powered-on virtual machines currently in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_admission_control_slot_policy_use_explicit_size ComputeCluster#ha_admission_control_slot_policy_use_explicit_size}
  */
  readonly haAdmissionControlSlotPolicyUseExplicitSize?: boolean | cdktf.IResolvable;
  /**
  * Advanced configuration options for vSphere HA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_advanced_options ComputeCluster#ha_advanced_options}
  */
  readonly haAdvancedOptions?: { [key: string]: string };
  /**
  * When ha_vm_component_protection is enabled, controls the action to take on virtual machines if an APD status on an affected datastore clears in the middle of an APD event. Can be one of none or reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_datastore_apd_recovery_action ComputeCluster#ha_datastore_apd_recovery_action}
  */
  readonly haDatastoreApdRecoveryAction?: string;
  /**
  * When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected loss to all paths to a relevant datastore. Can be one of disabled, warning, restartConservative, or restartAggressive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_datastore_apd_response ComputeCluster#ha_datastore_apd_response}
  */
  readonly haDatastoreApdResponse?: string;
  /**
  * When ha_vm_component_protection is enabled, controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_datastore_apd_response_delay ComputeCluster#ha_datastore_apd_response_delay}
  */
  readonly haDatastoreApdResponseDelay?: number;
  /**
  * When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected a permanent device loss to a relevant datastore. Can be one of disabled, warning, or restartAggressive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_datastore_pdl_response ComputeCluster#ha_datastore_pdl_response}
  */
  readonly haDatastorePdlResponse?: string;
  /**
  * Enable vSphere HA for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_enabled ComputeCluster#ha_enabled}
  */
  readonly haEnabled?: boolean | cdktf.IResolvable;
  /**
  * The list of managed object IDs for preferred datastores to use for HA heartbeating. This setting is only useful when ha_heartbeat_datastore_policy is set to either userSelectedDs or allFeasibleDsWithUserPreference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_heartbeat_datastore_ids ComputeCluster#ha_heartbeat_datastore_ids}
  */
  readonly haHeartbeatDatastoreIds?: string[];
  /**
  * The selection policy for HA heartbeat datastores. Can be one of allFeasibleDs, userSelectedDs, or allFeasibleDsWithUserPreference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_heartbeat_datastore_policy ComputeCluster#ha_heartbeat_datastore_policy}
  */
  readonly haHeartbeatDatastorePolicy?: string;
  /**
  * The action to take on virtual machines when a host has detected that it has been isolated from the rest of the cluster. Can be one of none, powerOff, or shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_host_isolation_response ComputeCluster#ha_host_isolation_response}
  */
  readonly haHostIsolationResponse?: string;
  /**
  * Global setting that controls whether vSphere HA remediates VMs on host failure. Can be one of enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_host_monitoring ComputeCluster#ha_host_monitoring}
  */
  readonly haHostMonitoring?: string;
  /**
  * Controls vSphere VM component protection for virtual machines in this cluster. This allows vSphere HA to react to failures between hosts and specific virtual machine components, such as datastores. Can be one of enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_vm_component_protection ComputeCluster#ha_vm_component_protection}
  */
  readonly haVmComponentProtection?: string;
  /**
  * The condition used to determine whether or not VMs in a certain restart priority class are online, allowing HA to move on to restarting VMs on the next priority. Can be one of none, poweredOn, guestHbStatusGreen, or appHbStatusGreen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_vm_dependency_restart_condition ComputeCluster#ha_vm_dependency_restart_condition}
  */
  readonly haVmDependencyRestartCondition?: string;
  /**
  * If a heartbeat from a virtual machine is not received within this configured interval, the virtual machine is marked as failed. The value is in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_vm_failure_interval ComputeCluster#ha_vm_failure_interval}
  */
  readonly haVmFailureInterval?: number;
  /**
  * The length of the reset window in which ha_vm_maximum_resets can operate. When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_vm_maximum_failure_window ComputeCluster#ha_vm_maximum_failure_window}
  */
  readonly haVmMaximumFailureWindow?: number;
  /**
  * The maximum number of resets that HA will perform to a virtual machine when responding to a failure event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_vm_maximum_resets ComputeCluster#ha_vm_maximum_resets}
  */
  readonly haVmMaximumResets?: number;
  /**
  * The time, in seconds, that HA waits after powering on a virtual machine before monitoring for heartbeats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_vm_minimum_uptime ComputeCluster#ha_vm_minimum_uptime}
  */
  readonly haVmMinimumUptime?: number;
  /**
  * The type of virtual machine monitoring to use when HA is enabled in the cluster. Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_vm_monitoring ComputeCluster#ha_vm_monitoring}
  */
  readonly haVmMonitoring?: string;
  /**
  * Additional delay in seconds after ready condition is met. A VM is considered ready at this point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_vm_restart_additional_delay ComputeCluster#ha_vm_restart_additional_delay}
  */
  readonly haVmRestartAdditionalDelay?: number;
  /**
  * The default restart priority for affected VMs when vSphere detects a host failure. Can be one of lowest, low, medium, high, or highest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_vm_restart_priority ComputeCluster#ha_vm_restart_priority}
  */
  readonly haVmRestartPriority?: string;
  /**
  * The maximum time, in seconds, that vSphere HA will wait for virtual machines in one priority to be ready before proceeding with the next priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#ha_vm_restart_timeout ComputeCluster#ha_vm_restart_timeout}
  */
  readonly haVmRestartTimeout?: number;
  /**
  * The timeout for each host maintenance mode operation when removing hosts from a cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#host_cluster_exit_timeout ComputeCluster#host_cluster_exit_timeout}
  */
  readonly hostClusterExitTimeout?: number;
  /**
  * Must be set if cluster enrollment is managed from host resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#host_managed ComputeCluster#host_managed}
  */
  readonly hostManaged?: boolean | cdktf.IResolvable;
  /**
  * The managed object IDs of the hosts to put in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#host_system_ids ComputeCluster#host_system_ids}
  */
  readonly hostSystemIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#id ComputeCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name for the new cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#name ComputeCluster#name}
  */
  readonly name: string;
  /**
  * The DRS behavior for proactive HA recommendations. Can be one of Automated or Manual.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#proactive_ha_automation_level ComputeCluster#proactive_ha_automation_level}
  */
  readonly proactiveHaAutomationLevel?: string;
  /**
  * Enables proactive HA, allowing for vSphere to get HA data from external providers and use DRS to perform remediation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#proactive_ha_enabled ComputeCluster#proactive_ha_enabled}
  */
  readonly proactiveHaEnabled?: boolean | cdktf.IResolvable;
  /**
  * The configured remediation for moderately degraded hosts. Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to MaintenanceMode when proactive_ha_severe_remediation is set to QuarantineMode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#proactive_ha_moderate_remediation ComputeCluster#proactive_ha_moderate_remediation}
  */
  readonly proactiveHaModerateRemediation?: string;
  /**
  * The list of IDs for health update providers configured for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#proactive_ha_provider_ids ComputeCluster#proactive_ha_provider_ids}
  */
  readonly proactiveHaProviderIds?: string[];
  /**
  * The configured remediation for severely degraded hosts. Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to QuarantineMode when proactive_ha_moderate_remediation is set to MaintenanceMode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#proactive_ha_severe_remediation ComputeCluster#proactive_ha_severe_remediation}
  */
  readonly proactiveHaSevereRemediation?: string;
  /**
  * A list of tag IDs to apply to this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#tags ComputeCluster#tags}
  */
  readonly tags?: string[];
  /**
  * Whether the vSAN compression service is enabled for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#vsan_compression_enabled ComputeCluster#vsan_compression_enabled}
  */
  readonly vsanCompressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the vSAN deduplication service is enabled for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#vsan_dedup_enabled ComputeCluster#vsan_dedup_enabled}
  */
  readonly vsanDedupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the vSAN data-in-transit encryption is enabled for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#vsan_dit_encryption_enabled ComputeCluster#vsan_dit_encryption_enabled}
  */
  readonly vsanDitEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * When vsan_dit_encryption_enabled is enabled, sets the rekey interval of data-in-transit encryption (in minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#vsan_dit_rekey_interval ComputeCluster#vsan_dit_rekey_interval}
  */
  readonly vsanDitRekeyInterval?: number;
  /**
  * Whether the vSAN service is enabled for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#vsan_enabled ComputeCluster#vsan_enabled}
  */
  readonly vsanEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the vSAN network diagnostic mode is enabled for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#vsan_network_diagnostic_mode_enabled ComputeCluster#vsan_network_diagnostic_mode_enabled}
  */
  readonly vsanNetworkDiagnosticModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the vSAN performance service is enabled for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#vsan_performance_enabled ComputeCluster#vsan_performance_enabled}
  */
  readonly vsanPerformanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * The managed object IDs of the vSAN datastore to be mounted on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#vsan_remote_datastore_ids ComputeCluster#vsan_remote_datastore_ids}
  */
  readonly vsanRemoteDatastoreIds?: string[];
  /**
  * Whether the vSAN unmap service is enabled for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#vsan_unmap_enabled ComputeCluster#vsan_unmap_enabled}
  */
  readonly vsanUnmapEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the vSAN verbose mode is enabled for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#vsan_verbose_mode_enabled ComputeCluster#vsan_verbose_mode_enabled}
  */
  readonly vsanVerboseModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * vsan_disk_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#vsan_disk_group ComputeCluster#vsan_disk_group}
  */
  readonly vsanDiskGroup?: ComputeClusterVsanDiskGroup[] | cdktf.IResolvable;
}
export interface ComputeClusterVsanDiskGroup {
  /**
  * Cache disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#cache ComputeCluster#cache}
  */
  readonly cache?: string;
  /**
  * List of storage disks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster#storage ComputeCluster#storage}
  */
  readonly storage?: string[];
}

export function computeClusterVsanDiskGroupToTerraform(struct?: ComputeClusterVsanDiskGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache: cdktf.stringToTerraform(struct!.cache),
    storage: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storage),
  }
}

export class ComputeClusterVsanDiskGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeClusterVsanDiskGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeClusterVsanDiskGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cache = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cache = value.cache;
      this._storage = value.storage;
    }
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: string; 
  public get cache() {
    return this.getStringAttribute('cache');
  }
  public set cache(value: string) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: string[]; 
  public get storage() {
    return cdktf.Fn.tolist(this.getListAttribute('storage'));
  }
  public set storage(value: string[]) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}

export class ComputeClusterVsanDiskGroupList extends cdktf.ComplexList {
  public internalValue? : ComputeClusterVsanDiskGroup[] | cdktf.IResolvable

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
  public get(index: number): ComputeClusterVsanDiskGroupOutputReference {
    return new ComputeClusterVsanDiskGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster vsphere_compute_cluster}
*/
export class ComputeCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_compute_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/compute_cluster vsphere_compute_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_compute_cluster',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.4.3',
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
    this._dpmAutomationLevel = config.dpmAutomationLevel;
    this._dpmEnabled = config.dpmEnabled;
    this._dpmThreshold = config.dpmThreshold;
    this._drsAdvancedOptions = config.drsAdvancedOptions;
    this._drsAutomationLevel = config.drsAutomationLevel;
    this._drsEnablePredictiveDrs = config.drsEnablePredictiveDrs;
    this._drsEnableVmOverrides = config.drsEnableVmOverrides;
    this._drsEnabled = config.drsEnabled;
    this._drsMigrationThreshold = config.drsMigrationThreshold;
    this._drsScaleDescendantsShares = config.drsScaleDescendantsShares;
    this._folder = config.folder;
    this._forceEvacuateOnDestroy = config.forceEvacuateOnDestroy;
    this._haAdmissionControlFailoverHostSystemIds = config.haAdmissionControlFailoverHostSystemIds;
    this._haAdmissionControlHostFailureTolerance = config.haAdmissionControlHostFailureTolerance;
    this._haAdmissionControlPerformanceTolerance = config.haAdmissionControlPerformanceTolerance;
    this._haAdmissionControlPolicy = config.haAdmissionControlPolicy;
    this._haAdmissionControlResourcePercentageAutoCompute = config.haAdmissionControlResourcePercentageAutoCompute;
    this._haAdmissionControlResourcePercentageCpu = config.haAdmissionControlResourcePercentageCpu;
    this._haAdmissionControlResourcePercentageMemory = config.haAdmissionControlResourcePercentageMemory;
    this._haAdmissionControlSlotPolicyExplicitCpu = config.haAdmissionControlSlotPolicyExplicitCpu;
    this._haAdmissionControlSlotPolicyExplicitMemory = config.haAdmissionControlSlotPolicyExplicitMemory;
    this._haAdmissionControlSlotPolicyUseExplicitSize = config.haAdmissionControlSlotPolicyUseExplicitSize;
    this._haAdvancedOptions = config.haAdvancedOptions;
    this._haDatastoreApdRecoveryAction = config.haDatastoreApdRecoveryAction;
    this._haDatastoreApdResponse = config.haDatastoreApdResponse;
    this._haDatastoreApdResponseDelay = config.haDatastoreApdResponseDelay;
    this._haDatastorePdlResponse = config.haDatastorePdlResponse;
    this._haEnabled = config.haEnabled;
    this._haHeartbeatDatastoreIds = config.haHeartbeatDatastoreIds;
    this._haHeartbeatDatastorePolicy = config.haHeartbeatDatastorePolicy;
    this._haHostIsolationResponse = config.haHostIsolationResponse;
    this._haHostMonitoring = config.haHostMonitoring;
    this._haVmComponentProtection = config.haVmComponentProtection;
    this._haVmDependencyRestartCondition = config.haVmDependencyRestartCondition;
    this._haVmFailureInterval = config.haVmFailureInterval;
    this._haVmMaximumFailureWindow = config.haVmMaximumFailureWindow;
    this._haVmMaximumResets = config.haVmMaximumResets;
    this._haVmMinimumUptime = config.haVmMinimumUptime;
    this._haVmMonitoring = config.haVmMonitoring;
    this._haVmRestartAdditionalDelay = config.haVmRestartAdditionalDelay;
    this._haVmRestartPriority = config.haVmRestartPriority;
    this._haVmRestartTimeout = config.haVmRestartTimeout;
    this._hostClusterExitTimeout = config.hostClusterExitTimeout;
    this._hostManaged = config.hostManaged;
    this._hostSystemIds = config.hostSystemIds;
    this._id = config.id;
    this._name = config.name;
    this._proactiveHaAutomationLevel = config.proactiveHaAutomationLevel;
    this._proactiveHaEnabled = config.proactiveHaEnabled;
    this._proactiveHaModerateRemediation = config.proactiveHaModerateRemediation;
    this._proactiveHaProviderIds = config.proactiveHaProviderIds;
    this._proactiveHaSevereRemediation = config.proactiveHaSevereRemediation;
    this._tags = config.tags;
    this._vsanCompressionEnabled = config.vsanCompressionEnabled;
    this._vsanDedupEnabled = config.vsanDedupEnabled;
    this._vsanDitEncryptionEnabled = config.vsanDitEncryptionEnabled;
    this._vsanDitRekeyInterval = config.vsanDitRekeyInterval;
    this._vsanEnabled = config.vsanEnabled;
    this._vsanNetworkDiagnosticModeEnabled = config.vsanNetworkDiagnosticModeEnabled;
    this._vsanPerformanceEnabled = config.vsanPerformanceEnabled;
    this._vsanRemoteDatastoreIds = config.vsanRemoteDatastoreIds;
    this._vsanUnmapEnabled = config.vsanUnmapEnabled;
    this._vsanVerboseModeEnabled = config.vsanVerboseModeEnabled;
    this._vsanDiskGroup.internalValue = config.vsanDiskGroup;
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

  // dpm_automation_level - computed: false, optional: true, required: false
  private _dpmAutomationLevel?: string; 
  public get dpmAutomationLevel() {
    return this.getStringAttribute('dpm_automation_level');
  }
  public set dpmAutomationLevel(value: string) {
    this._dpmAutomationLevel = value;
  }
  public resetDpmAutomationLevel() {
    this._dpmAutomationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpmAutomationLevelInput() {
    return this._dpmAutomationLevel;
  }

  // dpm_enabled - computed: false, optional: true, required: false
  private _dpmEnabled?: boolean | cdktf.IResolvable; 
  public get dpmEnabled() {
    return this.getBooleanAttribute('dpm_enabled');
  }
  public set dpmEnabled(value: boolean | cdktf.IResolvable) {
    this._dpmEnabled = value;
  }
  public resetDpmEnabled() {
    this._dpmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpmEnabledInput() {
    return this._dpmEnabled;
  }

  // dpm_threshold - computed: false, optional: true, required: false
  private _dpmThreshold?: number; 
  public get dpmThreshold() {
    return this.getNumberAttribute('dpm_threshold');
  }
  public set dpmThreshold(value: number) {
    this._dpmThreshold = value;
  }
  public resetDpmThreshold() {
    this._dpmThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpmThresholdInput() {
    return this._dpmThreshold;
  }

  // drs_advanced_options - computed: false, optional: true, required: false
  private _drsAdvancedOptions?: { [key: string]: string }; 
  public get drsAdvancedOptions() {
    return this.getStringMapAttribute('drs_advanced_options');
  }
  public set drsAdvancedOptions(value: { [key: string]: string }) {
    this._drsAdvancedOptions = value;
  }
  public resetDrsAdvancedOptions() {
    this._drsAdvancedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsAdvancedOptionsInput() {
    return this._drsAdvancedOptions;
  }

  // drs_automation_level - computed: false, optional: true, required: false
  private _drsAutomationLevel?: string; 
  public get drsAutomationLevel() {
    return this.getStringAttribute('drs_automation_level');
  }
  public set drsAutomationLevel(value: string) {
    this._drsAutomationLevel = value;
  }
  public resetDrsAutomationLevel() {
    this._drsAutomationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsAutomationLevelInput() {
    return this._drsAutomationLevel;
  }

  // drs_enable_predictive_drs - computed: false, optional: true, required: false
  private _drsEnablePredictiveDrs?: boolean | cdktf.IResolvable; 
  public get drsEnablePredictiveDrs() {
    return this.getBooleanAttribute('drs_enable_predictive_drs');
  }
  public set drsEnablePredictiveDrs(value: boolean | cdktf.IResolvable) {
    this._drsEnablePredictiveDrs = value;
  }
  public resetDrsEnablePredictiveDrs() {
    this._drsEnablePredictiveDrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsEnablePredictiveDrsInput() {
    return this._drsEnablePredictiveDrs;
  }

  // drs_enable_vm_overrides - computed: false, optional: true, required: false
  private _drsEnableVmOverrides?: boolean | cdktf.IResolvable; 
  public get drsEnableVmOverrides() {
    return this.getBooleanAttribute('drs_enable_vm_overrides');
  }
  public set drsEnableVmOverrides(value: boolean | cdktf.IResolvable) {
    this._drsEnableVmOverrides = value;
  }
  public resetDrsEnableVmOverrides() {
    this._drsEnableVmOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsEnableVmOverridesInput() {
    return this._drsEnableVmOverrides;
  }

  // drs_enabled - computed: false, optional: true, required: false
  private _drsEnabled?: boolean | cdktf.IResolvable; 
  public get drsEnabled() {
    return this.getBooleanAttribute('drs_enabled');
  }
  public set drsEnabled(value: boolean | cdktf.IResolvable) {
    this._drsEnabled = value;
  }
  public resetDrsEnabled() {
    this._drsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsEnabledInput() {
    return this._drsEnabled;
  }

  // drs_migration_threshold - computed: false, optional: true, required: false
  private _drsMigrationThreshold?: number; 
  public get drsMigrationThreshold() {
    return this.getNumberAttribute('drs_migration_threshold');
  }
  public set drsMigrationThreshold(value: number) {
    this._drsMigrationThreshold = value;
  }
  public resetDrsMigrationThreshold() {
    this._drsMigrationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsMigrationThresholdInput() {
    return this._drsMigrationThreshold;
  }

  // drs_scale_descendants_shares - computed: false, optional: true, required: false
  private _drsScaleDescendantsShares?: string; 
  public get drsScaleDescendantsShares() {
    return this.getStringAttribute('drs_scale_descendants_shares');
  }
  public set drsScaleDescendantsShares(value: string) {
    this._drsScaleDescendantsShares = value;
  }
  public resetDrsScaleDescendantsShares() {
    this._drsScaleDescendantsShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsScaleDescendantsSharesInput() {
    return this._drsScaleDescendantsShares;
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

  // force_evacuate_on_destroy - computed: false, optional: true, required: false
  private _forceEvacuateOnDestroy?: boolean | cdktf.IResolvable; 
  public get forceEvacuateOnDestroy() {
    return this.getBooleanAttribute('force_evacuate_on_destroy');
  }
  public set forceEvacuateOnDestroy(value: boolean | cdktf.IResolvable) {
    this._forceEvacuateOnDestroy = value;
  }
  public resetForceEvacuateOnDestroy() {
    this._forceEvacuateOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceEvacuateOnDestroyInput() {
    return this._forceEvacuateOnDestroy;
  }

  // ha_admission_control_failover_host_system_ids - computed: false, optional: true, required: false
  private _haAdmissionControlFailoverHostSystemIds?: string[]; 
  public get haAdmissionControlFailoverHostSystemIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ha_admission_control_failover_host_system_ids'));
  }
  public set haAdmissionControlFailoverHostSystemIds(value: string[]) {
    this._haAdmissionControlFailoverHostSystemIds = value;
  }
  public resetHaAdmissionControlFailoverHostSystemIds() {
    this._haAdmissionControlFailoverHostSystemIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAdmissionControlFailoverHostSystemIdsInput() {
    return this._haAdmissionControlFailoverHostSystemIds;
  }

  // ha_admission_control_host_failure_tolerance - computed: false, optional: true, required: false
  private _haAdmissionControlHostFailureTolerance?: number; 
  public get haAdmissionControlHostFailureTolerance() {
    return this.getNumberAttribute('ha_admission_control_host_failure_tolerance');
  }
  public set haAdmissionControlHostFailureTolerance(value: number) {
    this._haAdmissionControlHostFailureTolerance = value;
  }
  public resetHaAdmissionControlHostFailureTolerance() {
    this._haAdmissionControlHostFailureTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAdmissionControlHostFailureToleranceInput() {
    return this._haAdmissionControlHostFailureTolerance;
  }

  // ha_admission_control_performance_tolerance - computed: false, optional: true, required: false
  private _haAdmissionControlPerformanceTolerance?: number; 
  public get haAdmissionControlPerformanceTolerance() {
    return this.getNumberAttribute('ha_admission_control_performance_tolerance');
  }
  public set haAdmissionControlPerformanceTolerance(value: number) {
    this._haAdmissionControlPerformanceTolerance = value;
  }
  public resetHaAdmissionControlPerformanceTolerance() {
    this._haAdmissionControlPerformanceTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAdmissionControlPerformanceToleranceInput() {
    return this._haAdmissionControlPerformanceTolerance;
  }

  // ha_admission_control_policy - computed: false, optional: true, required: false
  private _haAdmissionControlPolicy?: string; 
  public get haAdmissionControlPolicy() {
    return this.getStringAttribute('ha_admission_control_policy');
  }
  public set haAdmissionControlPolicy(value: string) {
    this._haAdmissionControlPolicy = value;
  }
  public resetHaAdmissionControlPolicy() {
    this._haAdmissionControlPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAdmissionControlPolicyInput() {
    return this._haAdmissionControlPolicy;
  }

  // ha_admission_control_resource_percentage_auto_compute - computed: false, optional: true, required: false
  private _haAdmissionControlResourcePercentageAutoCompute?: boolean | cdktf.IResolvable; 
  public get haAdmissionControlResourcePercentageAutoCompute() {
    return this.getBooleanAttribute('ha_admission_control_resource_percentage_auto_compute');
  }
  public set haAdmissionControlResourcePercentageAutoCompute(value: boolean | cdktf.IResolvable) {
    this._haAdmissionControlResourcePercentageAutoCompute = value;
  }
  public resetHaAdmissionControlResourcePercentageAutoCompute() {
    this._haAdmissionControlResourcePercentageAutoCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAdmissionControlResourcePercentageAutoComputeInput() {
    return this._haAdmissionControlResourcePercentageAutoCompute;
  }

  // ha_admission_control_resource_percentage_cpu - computed: false, optional: true, required: false
  private _haAdmissionControlResourcePercentageCpu?: number; 
  public get haAdmissionControlResourcePercentageCpu() {
    return this.getNumberAttribute('ha_admission_control_resource_percentage_cpu');
  }
  public set haAdmissionControlResourcePercentageCpu(value: number) {
    this._haAdmissionControlResourcePercentageCpu = value;
  }
  public resetHaAdmissionControlResourcePercentageCpu() {
    this._haAdmissionControlResourcePercentageCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAdmissionControlResourcePercentageCpuInput() {
    return this._haAdmissionControlResourcePercentageCpu;
  }

  // ha_admission_control_resource_percentage_memory - computed: false, optional: true, required: false
  private _haAdmissionControlResourcePercentageMemory?: number; 
  public get haAdmissionControlResourcePercentageMemory() {
    return this.getNumberAttribute('ha_admission_control_resource_percentage_memory');
  }
  public set haAdmissionControlResourcePercentageMemory(value: number) {
    this._haAdmissionControlResourcePercentageMemory = value;
  }
  public resetHaAdmissionControlResourcePercentageMemory() {
    this._haAdmissionControlResourcePercentageMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAdmissionControlResourcePercentageMemoryInput() {
    return this._haAdmissionControlResourcePercentageMemory;
  }

  // ha_admission_control_slot_policy_explicit_cpu - computed: false, optional: true, required: false
  private _haAdmissionControlSlotPolicyExplicitCpu?: number; 
  public get haAdmissionControlSlotPolicyExplicitCpu() {
    return this.getNumberAttribute('ha_admission_control_slot_policy_explicit_cpu');
  }
  public set haAdmissionControlSlotPolicyExplicitCpu(value: number) {
    this._haAdmissionControlSlotPolicyExplicitCpu = value;
  }
  public resetHaAdmissionControlSlotPolicyExplicitCpu() {
    this._haAdmissionControlSlotPolicyExplicitCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAdmissionControlSlotPolicyExplicitCpuInput() {
    return this._haAdmissionControlSlotPolicyExplicitCpu;
  }

  // ha_admission_control_slot_policy_explicit_memory - computed: false, optional: true, required: false
  private _haAdmissionControlSlotPolicyExplicitMemory?: number; 
  public get haAdmissionControlSlotPolicyExplicitMemory() {
    return this.getNumberAttribute('ha_admission_control_slot_policy_explicit_memory');
  }
  public set haAdmissionControlSlotPolicyExplicitMemory(value: number) {
    this._haAdmissionControlSlotPolicyExplicitMemory = value;
  }
  public resetHaAdmissionControlSlotPolicyExplicitMemory() {
    this._haAdmissionControlSlotPolicyExplicitMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAdmissionControlSlotPolicyExplicitMemoryInput() {
    return this._haAdmissionControlSlotPolicyExplicitMemory;
  }

  // ha_admission_control_slot_policy_use_explicit_size - computed: false, optional: true, required: false
  private _haAdmissionControlSlotPolicyUseExplicitSize?: boolean | cdktf.IResolvable; 
  public get haAdmissionControlSlotPolicyUseExplicitSize() {
    return this.getBooleanAttribute('ha_admission_control_slot_policy_use_explicit_size');
  }
  public set haAdmissionControlSlotPolicyUseExplicitSize(value: boolean | cdktf.IResolvable) {
    this._haAdmissionControlSlotPolicyUseExplicitSize = value;
  }
  public resetHaAdmissionControlSlotPolicyUseExplicitSize() {
    this._haAdmissionControlSlotPolicyUseExplicitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAdmissionControlSlotPolicyUseExplicitSizeInput() {
    return this._haAdmissionControlSlotPolicyUseExplicitSize;
  }

  // ha_advanced_options - computed: false, optional: true, required: false
  private _haAdvancedOptions?: { [key: string]: string }; 
  public get haAdvancedOptions() {
    return this.getStringMapAttribute('ha_advanced_options');
  }
  public set haAdvancedOptions(value: { [key: string]: string }) {
    this._haAdvancedOptions = value;
  }
  public resetHaAdvancedOptions() {
    this._haAdvancedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAdvancedOptionsInput() {
    return this._haAdvancedOptions;
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

  // ha_enabled - computed: false, optional: true, required: false
  private _haEnabled?: boolean | cdktf.IResolvable; 
  public get haEnabled() {
    return this.getBooleanAttribute('ha_enabled');
  }
  public set haEnabled(value: boolean | cdktf.IResolvable) {
    this._haEnabled = value;
  }
  public resetHaEnabled() {
    this._haEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEnabledInput() {
    return this._haEnabled;
  }

  // ha_heartbeat_datastore_ids - computed: false, optional: true, required: false
  private _haHeartbeatDatastoreIds?: string[]; 
  public get haHeartbeatDatastoreIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ha_heartbeat_datastore_ids'));
  }
  public set haHeartbeatDatastoreIds(value: string[]) {
    this._haHeartbeatDatastoreIds = value;
  }
  public resetHaHeartbeatDatastoreIds() {
    this._haHeartbeatDatastoreIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haHeartbeatDatastoreIdsInput() {
    return this._haHeartbeatDatastoreIds;
  }

  // ha_heartbeat_datastore_policy - computed: false, optional: true, required: false
  private _haHeartbeatDatastorePolicy?: string; 
  public get haHeartbeatDatastorePolicy() {
    return this.getStringAttribute('ha_heartbeat_datastore_policy');
  }
  public set haHeartbeatDatastorePolicy(value: string) {
    this._haHeartbeatDatastorePolicy = value;
  }
  public resetHaHeartbeatDatastorePolicy() {
    this._haHeartbeatDatastorePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haHeartbeatDatastorePolicyInput() {
    return this._haHeartbeatDatastorePolicy;
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

  // ha_host_monitoring - computed: false, optional: true, required: false
  private _haHostMonitoring?: string; 
  public get haHostMonitoring() {
    return this.getStringAttribute('ha_host_monitoring');
  }
  public set haHostMonitoring(value: string) {
    this._haHostMonitoring = value;
  }
  public resetHaHostMonitoring() {
    this._haHostMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haHostMonitoringInput() {
    return this._haHostMonitoring;
  }

  // ha_vm_component_protection - computed: false, optional: true, required: false
  private _haVmComponentProtection?: string; 
  public get haVmComponentProtection() {
    return this.getStringAttribute('ha_vm_component_protection');
  }
  public set haVmComponentProtection(value: string) {
    this._haVmComponentProtection = value;
  }
  public resetHaVmComponentProtection() {
    this._haVmComponentProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haVmComponentProtectionInput() {
    return this._haVmComponentProtection;
  }

  // ha_vm_dependency_restart_condition - computed: false, optional: true, required: false
  private _haVmDependencyRestartCondition?: string; 
  public get haVmDependencyRestartCondition() {
    return this.getStringAttribute('ha_vm_dependency_restart_condition');
  }
  public set haVmDependencyRestartCondition(value: string) {
    this._haVmDependencyRestartCondition = value;
  }
  public resetHaVmDependencyRestartCondition() {
    this._haVmDependencyRestartCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haVmDependencyRestartConditionInput() {
    return this._haVmDependencyRestartCondition;
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

  // ha_vm_restart_additional_delay - computed: false, optional: true, required: false
  private _haVmRestartAdditionalDelay?: number; 
  public get haVmRestartAdditionalDelay() {
    return this.getNumberAttribute('ha_vm_restart_additional_delay');
  }
  public set haVmRestartAdditionalDelay(value: number) {
    this._haVmRestartAdditionalDelay = value;
  }
  public resetHaVmRestartAdditionalDelay() {
    this._haVmRestartAdditionalDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haVmRestartAdditionalDelayInput() {
    return this._haVmRestartAdditionalDelay;
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

  // host_cluster_exit_timeout - computed: false, optional: true, required: false
  private _hostClusterExitTimeout?: number; 
  public get hostClusterExitTimeout() {
    return this.getNumberAttribute('host_cluster_exit_timeout');
  }
  public set hostClusterExitTimeout(value: number) {
    this._hostClusterExitTimeout = value;
  }
  public resetHostClusterExitTimeout() {
    this._hostClusterExitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostClusterExitTimeoutInput() {
    return this._hostClusterExitTimeout;
  }

  // host_managed - computed: false, optional: true, required: false
  private _hostManaged?: boolean | cdktf.IResolvable; 
  public get hostManaged() {
    return this.getBooleanAttribute('host_managed');
  }
  public set hostManaged(value: boolean | cdktf.IResolvable) {
    this._hostManaged = value;
  }
  public resetHostManaged() {
    this._hostManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostManagedInput() {
    return this._hostManaged;
  }

  // host_system_ids - computed: false, optional: true, required: false
  private _hostSystemIds?: string[]; 
  public get hostSystemIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_system_ids'));
  }
  public set hostSystemIds(value: string[]) {
    this._hostSystemIds = value;
  }
  public resetHostSystemIds() {
    this._hostSystemIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSystemIdsInput() {
    return this._hostSystemIds;
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

  // proactive_ha_automation_level - computed: false, optional: true, required: false
  private _proactiveHaAutomationLevel?: string; 
  public get proactiveHaAutomationLevel() {
    return this.getStringAttribute('proactive_ha_automation_level');
  }
  public set proactiveHaAutomationLevel(value: string) {
    this._proactiveHaAutomationLevel = value;
  }
  public resetProactiveHaAutomationLevel() {
    this._proactiveHaAutomationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveHaAutomationLevelInput() {
    return this._proactiveHaAutomationLevel;
  }

  // proactive_ha_enabled - computed: false, optional: true, required: false
  private _proactiveHaEnabled?: boolean | cdktf.IResolvable; 
  public get proactiveHaEnabled() {
    return this.getBooleanAttribute('proactive_ha_enabled');
  }
  public set proactiveHaEnabled(value: boolean | cdktf.IResolvable) {
    this._proactiveHaEnabled = value;
  }
  public resetProactiveHaEnabled() {
    this._proactiveHaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveHaEnabledInput() {
    return this._proactiveHaEnabled;
  }

  // proactive_ha_moderate_remediation - computed: false, optional: true, required: false
  private _proactiveHaModerateRemediation?: string; 
  public get proactiveHaModerateRemediation() {
    return this.getStringAttribute('proactive_ha_moderate_remediation');
  }
  public set proactiveHaModerateRemediation(value: string) {
    this._proactiveHaModerateRemediation = value;
  }
  public resetProactiveHaModerateRemediation() {
    this._proactiveHaModerateRemediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveHaModerateRemediationInput() {
    return this._proactiveHaModerateRemediation;
  }

  // proactive_ha_provider_ids - computed: false, optional: true, required: false
  private _proactiveHaProviderIds?: string[]; 
  public get proactiveHaProviderIds() {
    return cdktf.Fn.tolist(this.getListAttribute('proactive_ha_provider_ids'));
  }
  public set proactiveHaProviderIds(value: string[]) {
    this._proactiveHaProviderIds = value;
  }
  public resetProactiveHaProviderIds() {
    this._proactiveHaProviderIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveHaProviderIdsInput() {
    return this._proactiveHaProviderIds;
  }

  // proactive_ha_severe_remediation - computed: false, optional: true, required: false
  private _proactiveHaSevereRemediation?: string; 
  public get proactiveHaSevereRemediation() {
    return this.getStringAttribute('proactive_ha_severe_remediation');
  }
  public set proactiveHaSevereRemediation(value: string) {
    this._proactiveHaSevereRemediation = value;
  }
  public resetProactiveHaSevereRemediation() {
    this._proactiveHaSevereRemediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveHaSevereRemediationInput() {
    return this._proactiveHaSevereRemediation;
  }

  // resource_pool_id - computed: true, optional: false, required: false
  public get resourcePoolId() {
    return this.getStringAttribute('resource_pool_id');
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

  // vsan_compression_enabled - computed: false, optional: true, required: false
  private _vsanCompressionEnabled?: boolean | cdktf.IResolvable; 
  public get vsanCompressionEnabled() {
    return this.getBooleanAttribute('vsan_compression_enabled');
  }
  public set vsanCompressionEnabled(value: boolean | cdktf.IResolvable) {
    this._vsanCompressionEnabled = value;
  }
  public resetVsanCompressionEnabled() {
    this._vsanCompressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanCompressionEnabledInput() {
    return this._vsanCompressionEnabled;
  }

  // vsan_dedup_enabled - computed: false, optional: true, required: false
  private _vsanDedupEnabled?: boolean | cdktf.IResolvable; 
  public get vsanDedupEnabled() {
    return this.getBooleanAttribute('vsan_dedup_enabled');
  }
  public set vsanDedupEnabled(value: boolean | cdktf.IResolvable) {
    this._vsanDedupEnabled = value;
  }
  public resetVsanDedupEnabled() {
    this._vsanDedupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanDedupEnabledInput() {
    return this._vsanDedupEnabled;
  }

  // vsan_dit_encryption_enabled - computed: false, optional: true, required: false
  private _vsanDitEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get vsanDitEncryptionEnabled() {
    return this.getBooleanAttribute('vsan_dit_encryption_enabled');
  }
  public set vsanDitEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._vsanDitEncryptionEnabled = value;
  }
  public resetVsanDitEncryptionEnabled() {
    this._vsanDitEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanDitEncryptionEnabledInput() {
    return this._vsanDitEncryptionEnabled;
  }

  // vsan_dit_rekey_interval - computed: true, optional: true, required: false
  private _vsanDitRekeyInterval?: number; 
  public get vsanDitRekeyInterval() {
    return this.getNumberAttribute('vsan_dit_rekey_interval');
  }
  public set vsanDitRekeyInterval(value: number) {
    this._vsanDitRekeyInterval = value;
  }
  public resetVsanDitRekeyInterval() {
    this._vsanDitRekeyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanDitRekeyIntervalInput() {
    return this._vsanDitRekeyInterval;
  }

  // vsan_enabled - computed: false, optional: true, required: false
  private _vsanEnabled?: boolean | cdktf.IResolvable; 
  public get vsanEnabled() {
    return this.getBooleanAttribute('vsan_enabled');
  }
  public set vsanEnabled(value: boolean | cdktf.IResolvable) {
    this._vsanEnabled = value;
  }
  public resetVsanEnabled() {
    this._vsanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanEnabledInput() {
    return this._vsanEnabled;
  }

  // vsan_network_diagnostic_mode_enabled - computed: false, optional: true, required: false
  private _vsanNetworkDiagnosticModeEnabled?: boolean | cdktf.IResolvable; 
  public get vsanNetworkDiagnosticModeEnabled() {
    return this.getBooleanAttribute('vsan_network_diagnostic_mode_enabled');
  }
  public set vsanNetworkDiagnosticModeEnabled(value: boolean | cdktf.IResolvable) {
    this._vsanNetworkDiagnosticModeEnabled = value;
  }
  public resetVsanNetworkDiagnosticModeEnabled() {
    this._vsanNetworkDiagnosticModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanNetworkDiagnosticModeEnabledInput() {
    return this._vsanNetworkDiagnosticModeEnabled;
  }

  // vsan_performance_enabled - computed: false, optional: true, required: false
  private _vsanPerformanceEnabled?: boolean | cdktf.IResolvable; 
  public get vsanPerformanceEnabled() {
    return this.getBooleanAttribute('vsan_performance_enabled');
  }
  public set vsanPerformanceEnabled(value: boolean | cdktf.IResolvable) {
    this._vsanPerformanceEnabled = value;
  }
  public resetVsanPerformanceEnabled() {
    this._vsanPerformanceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanPerformanceEnabledInput() {
    return this._vsanPerformanceEnabled;
  }

  // vsan_remote_datastore_ids - computed: false, optional: true, required: false
  private _vsanRemoteDatastoreIds?: string[]; 
  public get vsanRemoteDatastoreIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vsan_remote_datastore_ids'));
  }
  public set vsanRemoteDatastoreIds(value: string[]) {
    this._vsanRemoteDatastoreIds = value;
  }
  public resetVsanRemoteDatastoreIds() {
    this._vsanRemoteDatastoreIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanRemoteDatastoreIdsInput() {
    return this._vsanRemoteDatastoreIds;
  }

  // vsan_unmap_enabled - computed: false, optional: true, required: false
  private _vsanUnmapEnabled?: boolean | cdktf.IResolvable; 
  public get vsanUnmapEnabled() {
    return this.getBooleanAttribute('vsan_unmap_enabled');
  }
  public set vsanUnmapEnabled(value: boolean | cdktf.IResolvable) {
    this._vsanUnmapEnabled = value;
  }
  public resetVsanUnmapEnabled() {
    this._vsanUnmapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanUnmapEnabledInput() {
    return this._vsanUnmapEnabled;
  }

  // vsan_verbose_mode_enabled - computed: false, optional: true, required: false
  private _vsanVerboseModeEnabled?: boolean | cdktf.IResolvable; 
  public get vsanVerboseModeEnabled() {
    return this.getBooleanAttribute('vsan_verbose_mode_enabled');
  }
  public set vsanVerboseModeEnabled(value: boolean | cdktf.IResolvable) {
    this._vsanVerboseModeEnabled = value;
  }
  public resetVsanVerboseModeEnabled() {
    this._vsanVerboseModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanVerboseModeEnabledInput() {
    return this._vsanVerboseModeEnabled;
  }

  // vsan_disk_group - computed: false, optional: true, required: false
  private _vsanDiskGroup = new ComputeClusterVsanDiskGroupList(this, "vsan_disk_group", false);
  public get vsanDiskGroup() {
    return this._vsanDiskGroup;
  }
  public putVsanDiskGroup(value: ComputeClusterVsanDiskGroup[] | cdktf.IResolvable) {
    this._vsanDiskGroup.internalValue = value;
  }
  public resetVsanDiskGroup() {
    this._vsanDiskGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanDiskGroupInput() {
    return this._vsanDiskGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      dpm_automation_level: cdktf.stringToTerraform(this._dpmAutomationLevel),
      dpm_enabled: cdktf.booleanToTerraform(this._dpmEnabled),
      dpm_threshold: cdktf.numberToTerraform(this._dpmThreshold),
      drs_advanced_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._drsAdvancedOptions),
      drs_automation_level: cdktf.stringToTerraform(this._drsAutomationLevel),
      drs_enable_predictive_drs: cdktf.booleanToTerraform(this._drsEnablePredictiveDrs),
      drs_enable_vm_overrides: cdktf.booleanToTerraform(this._drsEnableVmOverrides),
      drs_enabled: cdktf.booleanToTerraform(this._drsEnabled),
      drs_migration_threshold: cdktf.numberToTerraform(this._drsMigrationThreshold),
      drs_scale_descendants_shares: cdktf.stringToTerraform(this._drsScaleDescendantsShares),
      folder: cdktf.stringToTerraform(this._folder),
      force_evacuate_on_destroy: cdktf.booleanToTerraform(this._forceEvacuateOnDestroy),
      ha_admission_control_failover_host_system_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._haAdmissionControlFailoverHostSystemIds),
      ha_admission_control_host_failure_tolerance: cdktf.numberToTerraform(this._haAdmissionControlHostFailureTolerance),
      ha_admission_control_performance_tolerance: cdktf.numberToTerraform(this._haAdmissionControlPerformanceTolerance),
      ha_admission_control_policy: cdktf.stringToTerraform(this._haAdmissionControlPolicy),
      ha_admission_control_resource_percentage_auto_compute: cdktf.booleanToTerraform(this._haAdmissionControlResourcePercentageAutoCompute),
      ha_admission_control_resource_percentage_cpu: cdktf.numberToTerraform(this._haAdmissionControlResourcePercentageCpu),
      ha_admission_control_resource_percentage_memory: cdktf.numberToTerraform(this._haAdmissionControlResourcePercentageMemory),
      ha_admission_control_slot_policy_explicit_cpu: cdktf.numberToTerraform(this._haAdmissionControlSlotPolicyExplicitCpu),
      ha_admission_control_slot_policy_explicit_memory: cdktf.numberToTerraform(this._haAdmissionControlSlotPolicyExplicitMemory),
      ha_admission_control_slot_policy_use_explicit_size: cdktf.booleanToTerraform(this._haAdmissionControlSlotPolicyUseExplicitSize),
      ha_advanced_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._haAdvancedOptions),
      ha_datastore_apd_recovery_action: cdktf.stringToTerraform(this._haDatastoreApdRecoveryAction),
      ha_datastore_apd_response: cdktf.stringToTerraform(this._haDatastoreApdResponse),
      ha_datastore_apd_response_delay: cdktf.numberToTerraform(this._haDatastoreApdResponseDelay),
      ha_datastore_pdl_response: cdktf.stringToTerraform(this._haDatastorePdlResponse),
      ha_enabled: cdktf.booleanToTerraform(this._haEnabled),
      ha_heartbeat_datastore_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._haHeartbeatDatastoreIds),
      ha_heartbeat_datastore_policy: cdktf.stringToTerraform(this._haHeartbeatDatastorePolicy),
      ha_host_isolation_response: cdktf.stringToTerraform(this._haHostIsolationResponse),
      ha_host_monitoring: cdktf.stringToTerraform(this._haHostMonitoring),
      ha_vm_component_protection: cdktf.stringToTerraform(this._haVmComponentProtection),
      ha_vm_dependency_restart_condition: cdktf.stringToTerraform(this._haVmDependencyRestartCondition),
      ha_vm_failure_interval: cdktf.numberToTerraform(this._haVmFailureInterval),
      ha_vm_maximum_failure_window: cdktf.numberToTerraform(this._haVmMaximumFailureWindow),
      ha_vm_maximum_resets: cdktf.numberToTerraform(this._haVmMaximumResets),
      ha_vm_minimum_uptime: cdktf.numberToTerraform(this._haVmMinimumUptime),
      ha_vm_monitoring: cdktf.stringToTerraform(this._haVmMonitoring),
      ha_vm_restart_additional_delay: cdktf.numberToTerraform(this._haVmRestartAdditionalDelay),
      ha_vm_restart_priority: cdktf.stringToTerraform(this._haVmRestartPriority),
      ha_vm_restart_timeout: cdktf.numberToTerraform(this._haVmRestartTimeout),
      host_cluster_exit_timeout: cdktf.numberToTerraform(this._hostClusterExitTimeout),
      host_managed: cdktf.booleanToTerraform(this._hostManaged),
      host_system_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostSystemIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      proactive_ha_automation_level: cdktf.stringToTerraform(this._proactiveHaAutomationLevel),
      proactive_ha_enabled: cdktf.booleanToTerraform(this._proactiveHaEnabled),
      proactive_ha_moderate_remediation: cdktf.stringToTerraform(this._proactiveHaModerateRemediation),
      proactive_ha_provider_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proactiveHaProviderIds),
      proactive_ha_severe_remediation: cdktf.stringToTerraform(this._proactiveHaSevereRemediation),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      vsan_compression_enabled: cdktf.booleanToTerraform(this._vsanCompressionEnabled),
      vsan_dedup_enabled: cdktf.booleanToTerraform(this._vsanDedupEnabled),
      vsan_dit_encryption_enabled: cdktf.booleanToTerraform(this._vsanDitEncryptionEnabled),
      vsan_dit_rekey_interval: cdktf.numberToTerraform(this._vsanDitRekeyInterval),
      vsan_enabled: cdktf.booleanToTerraform(this._vsanEnabled),
      vsan_network_diagnostic_mode_enabled: cdktf.booleanToTerraform(this._vsanNetworkDiagnosticModeEnabled),
      vsan_performance_enabled: cdktf.booleanToTerraform(this._vsanPerformanceEnabled),
      vsan_remote_datastore_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vsanRemoteDatastoreIds),
      vsan_unmap_enabled: cdktf.booleanToTerraform(this._vsanUnmapEnabled),
      vsan_verbose_mode_enabled: cdktf.booleanToTerraform(this._vsanVerboseModeEnabled),
      vsan_disk_group: cdktf.listMapper(computeClusterVsanDiskGroupToTerraform, true)(this._vsanDiskGroup.internalValue),
    };
  }
}
