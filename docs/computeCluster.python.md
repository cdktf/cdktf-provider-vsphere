# `computeCluster` Submodule <a name="`computeCluster` Submodule" id="@cdktf/provider-vsphere.computeCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeCluster <a name="ComputeCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster vsphere_compute_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  name: str,
  custom_attributes: typing.Mapping[str] = None,
  dpm_automation_level: str = None,
  dpm_enabled: typing.Union[bool, IResolvable] = None,
  dpm_threshold: typing.Union[int, float] = None,
  drs_advanced_options: typing.Mapping[str] = None,
  drs_automation_level: str = None,
  drs_enabled: typing.Union[bool, IResolvable] = None,
  drs_enable_predictive_drs: typing.Union[bool, IResolvable] = None,
  drs_enable_vm_overrides: typing.Union[bool, IResolvable] = None,
  drs_migration_threshold: typing.Union[int, float] = None,
  drs_scale_descendants_shares: str = None,
  folder: str = None,
  force_evacuate_on_destroy: typing.Union[bool, IResolvable] = None,
  ha_admission_control_failover_host_system_ids: typing.List[str] = None,
  ha_admission_control_host_failure_tolerance: typing.Union[int, float] = None,
  ha_admission_control_performance_tolerance: typing.Union[int, float] = None,
  ha_admission_control_policy: str = None,
  ha_admission_control_resource_percentage_auto_compute: typing.Union[bool, IResolvable] = None,
  ha_admission_control_resource_percentage_cpu: typing.Union[int, float] = None,
  ha_admission_control_resource_percentage_memory: typing.Union[int, float] = None,
  ha_admission_control_slot_policy_explicit_cpu: typing.Union[int, float] = None,
  ha_admission_control_slot_policy_explicit_memory: typing.Union[int, float] = None,
  ha_admission_control_slot_policy_use_explicit_size: typing.Union[bool, IResolvable] = None,
  ha_advanced_options: typing.Mapping[str] = None,
  ha_datastore_apd_recovery_action: str = None,
  ha_datastore_apd_response: str = None,
  ha_datastore_apd_response_delay: typing.Union[int, float] = None,
  ha_datastore_pdl_response: str = None,
  ha_enabled: typing.Union[bool, IResolvable] = None,
  ha_heartbeat_datastore_ids: typing.List[str] = None,
  ha_heartbeat_datastore_policy: str = None,
  ha_host_isolation_response: str = None,
  ha_host_monitoring: str = None,
  ha_vm_component_protection: str = None,
  ha_vm_dependency_restart_condition: str = None,
  ha_vm_failure_interval: typing.Union[int, float] = None,
  ha_vm_maximum_failure_window: typing.Union[int, float] = None,
  ha_vm_maximum_resets: typing.Union[int, float] = None,
  ha_vm_minimum_uptime: typing.Union[int, float] = None,
  ha_vm_monitoring: str = None,
  ha_vm_restart_additional_delay: typing.Union[int, float] = None,
  ha_vm_restart_priority: str = None,
  ha_vm_restart_timeout: typing.Union[int, float] = None,
  host_cluster_exit_timeout: typing.Union[int, float] = None,
  host_image: ComputeClusterHostImage = None,
  host_managed: typing.Union[bool, IResolvable] = None,
  host_system_ids: typing.List[str] = None,
  id: str = None,
  proactive_ha_automation_level: str = None,
  proactive_ha_enabled: typing.Union[bool, IResolvable] = None,
  proactive_ha_moderate_remediation: str = None,
  proactive_ha_provider_ids: typing.List[str] = None,
  proactive_ha_severe_remediation: str = None,
  tags: typing.List[str] = None,
  vsan_compression_enabled: typing.Union[bool, IResolvable] = None,
  vsan_dedup_enabled: typing.Union[bool, IResolvable] = None,
  vsan_disk_group: typing.Union[IResolvable, typing.List[ComputeClusterVsanDiskGroup]] = None,
  vsan_dit_encryption_enabled: typing.Union[bool, IResolvable] = None,
  vsan_dit_rekey_interval: typing.Union[int, float] = None,
  vsan_enabled: typing.Union[bool, IResolvable] = None,
  vsan_esa_enabled: typing.Union[bool, IResolvable] = None,
  vsan_fault_domains: typing.Union[IResolvable, typing.List[ComputeClusterVsanFaultDomains]] = None,
  vsan_network_diagnostic_mode_enabled: typing.Union[bool, IResolvable] = None,
  vsan_performance_enabled: typing.Union[bool, IResolvable] = None,
  vsan_remote_datastore_ids: typing.List[str] = None,
  vsan_stretched_cluster: ComputeClusterVsanStretchedCluster = None,
  vsan_unmap_enabled: typing.Union[bool, IResolvable] = None,
  vsan_verbose_mode_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | The managed object ID of the datacenter to put the cluster in. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Name for the new cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dpmAutomationLevel">dpm_automation_level</a></code> | <code>str</code> | The automation level for host power operations in this cluster. Can be one of manual or automated. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dpmEnabled">dpm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable DPM support for DRS. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dpmThreshold">dpm_threshold</a></code> | <code>typing.Union[int, float]</code> | A value between 1 and 5 indicating the threshold of load within the cluster that influences host power operations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsAdvancedOptions">drs_advanced_options</a></code> | <code>typing.Mapping[str]</code> | Advanced configuration options for DRS and DPM. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsAutomationLevel">drs_automation_level</a></code> | <code>str</code> | The default automation level for all virtual machines in this cluster. Can be one of manual, partiallyAutomated, or fullyAutomated. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsEnabled">drs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable DRS for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsEnablePredictiveDrs">drs_enable_predictive_drs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, enables DRS to use data from vRealize Operations Manager to make proactive DRS recommendations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsEnableVmOverrides">drs_enable_vm_overrides</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, allows individual VM overrides within this cluster to be set. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsMigrationThreshold">drs_migration_threshold</a></code> | <code>typing.Union[int, float]</code> | A value between 1 and 5 indicating the threshold of imbalance tolerated between hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsScaleDescendantsShares">drs_scale_descendants_shares</a></code> | <code>str</code> | Enable scalable shares for all descendants of this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The name of the folder to locate the cluster in. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.forceEvacuateOnDestroy">force_evacuate_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force removal of all hosts in the cluster during destroy and make them standalone hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlFailoverHostSystemIds">ha_admission_control_failover_host_system_ids</a></code> | <code>typing.List[str]</code> | When ha_admission_control_policy is failoverHosts, this defines the managed object IDs of hosts to use as dedicated failover hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlHostFailureTolerance">ha_admission_control_host_failure_tolerance</a></code> | <code>typing.Union[int, float]</code> | The maximum number of failed hosts that admission control tolerates when making decisions on whether to permit virtual machine operations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlPerformanceTolerance">ha_admission_control_performance_tolerance</a></code> | <code>typing.Union[int, float]</code> | The percentage of resource reduction that a cluster of VMs can tolerate in case of a failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlPolicy">ha_admission_control_policy</a></code> | <code>str</code> | The type of admission control policy to use with vSphere HA, which controls whether or not specific VM operations are permitted in the cluster in order to protect the reliability of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlResourcePercentageAutoCompute">ha_admission_control_resource_percentage_auto_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When ha_admission_control_policy is resourcePercentage, automatically determine available resource percentages by subtracting the average number of host resources represented by the ha_admission_control_host_failure_tolerance setting from the total amount of resources in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlResourcePercentageCpu">ha_admission_control_resource_percentage_cpu</a></code> | <code>typing.Union[int, float]</code> | When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of CPU resources in the cluster to reserve for failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlResourcePercentageMemory">ha_admission_control_resource_percentage_memory</a></code> | <code>typing.Union[int, float]</code> | When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of memory resources in the cluster to reserve for failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlSlotPolicyExplicitCpu">ha_admission_control_slot_policy_explicit_cpu</a></code> | <code>typing.Union[int, float]</code> | When ha_admission_control_policy is slotPolicy, this controls the user-defined CPU slot size, in MHz. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlSlotPolicyExplicitMemory">ha_admission_control_slot_policy_explicit_memory</a></code> | <code>typing.Union[int, float]</code> | When ha_admission_control_policy is slotPolicy, this controls the user-defined memory slot size, in MB. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlSlotPolicyUseExplicitSize">ha_admission_control_slot_policy_use_explicit_size</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When ha_admission_control_policy is slotPolicy, this setting controls whether or not you wish to supply explicit values to CPU and memory slot sizes. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdvancedOptions">ha_advanced_options</a></code> | <code>typing.Mapping[str]</code> | Advanced configuration options for vSphere HA. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastoreApdRecoveryAction">ha_datastore_apd_recovery_action</a></code> | <code>str</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines if an APD status on an affected datastore clears in the middle of an APD event. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastoreApdResponse">ha_datastore_apd_response</a></code> | <code>str</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected loss to all paths to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastoreApdResponseDelay">ha_datastore_apd_response_delay</a></code> | <code>typing.Union[int, float]</code> | When ha_vm_component_protection is enabled, controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastorePdlResponse">ha_datastore_pdl_response</a></code> | <code>str</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected a permanent device loss to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haEnabled">ha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable vSphere HA for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHeartbeatDatastoreIds">ha_heartbeat_datastore_ids</a></code> | <code>typing.List[str]</code> | The list of managed object IDs for preferred datastores to use for HA heartbeating. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHeartbeatDatastorePolicy">ha_heartbeat_datastore_policy</a></code> | <code>str</code> | The selection policy for HA heartbeat datastores. Can be one of allFeasibleDs, userSelectedDs, or allFeasibleDsWithUserPreference. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHostIsolationResponse">ha_host_isolation_response</a></code> | <code>str</code> | The action to take on virtual machines when a host has detected that it has been isolated from the rest of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHostMonitoring">ha_host_monitoring</a></code> | <code>str</code> | Global setting that controls whether vSphere HA remediates VMs on host failure. Can be one of enabled or disabled. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmComponentProtection">ha_vm_component_protection</a></code> | <code>str</code> | Controls vSphere VM component protection for virtual machines in this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmDependencyRestartCondition">ha_vm_dependency_restart_condition</a></code> | <code>str</code> | The condition used to determine whether or not VMs in a certain restart priority class are online, allowing HA to move on to restarting VMs on the next priority. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmFailureInterval">ha_vm_failure_interval</a></code> | <code>typing.Union[int, float]</code> | If a heartbeat from a virtual machine is not received within this configured interval, the virtual machine is marked as failed. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMaximumFailureWindow">ha_vm_maximum_failure_window</a></code> | <code>typing.Union[int, float]</code> | The length of the reset window in which ha_vm_maximum_resets can operate. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMaximumResets">ha_vm_maximum_resets</a></code> | <code>typing.Union[int, float]</code> | The maximum number of resets that HA will perform to a virtual machine when responding to a failure event. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMinimumUptime">ha_vm_minimum_uptime</a></code> | <code>typing.Union[int, float]</code> | The time, in seconds, that HA waits after powering on a virtual machine before monitoring for heartbeats. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMonitoring">ha_vm_monitoring</a></code> | <code>str</code> | The type of virtual machine monitoring to use when HA is enabled in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmRestartAdditionalDelay">ha_vm_restart_additional_delay</a></code> | <code>typing.Union[int, float]</code> | Additional delay in seconds after ready condition is met. A VM is considered ready at this point. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmRestartPriority">ha_vm_restart_priority</a></code> | <code>str</code> | The default restart priority for affected VMs when vSphere detects a host failure. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmRestartTimeout">ha_vm_restart_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time, in seconds, that vSphere HA will wait for virtual machines in one priority to be ready before proceeding with the next priority. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostClusterExitTimeout">host_cluster_exit_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout for each host maintenance mode operation when removing hosts from a cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostImage">host_image</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | host_image block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostManaged">host_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Must be set if cluster enrollment is managed from host resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostSystemIds">host_system_ids</a></code> | <code>typing.List[str]</code> | The managed object IDs of the hosts to put in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#id ComputeCluster#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaAutomationLevel">proactive_ha_automation_level</a></code> | <code>str</code> | The DRS behavior for proactive HA recommendations. Can be one of Automated or Manual. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaEnabled">proactive_ha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables proactive HA, allowing for vSphere to get HA data from external providers and use DRS to perform remediation. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaModerateRemediation">proactive_ha_moderate_remediation</a></code> | <code>str</code> | The configured remediation for moderately degraded hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaProviderIds">proactive_ha_provider_ids</a></code> | <code>typing.List[str]</code> | The list of IDs for health update providers configured for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaSevereRemediation">proactive_ha_severe_remediation</a></code> | <code>str</code> | The configured remediation for severely degraded hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanCompressionEnabled">vsan_compression_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN compression service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDedupEnabled">vsan_dedup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN deduplication service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDiskGroup">vsan_disk_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>]]</code> | vsan_disk_group block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDitEncryptionEnabled">vsan_dit_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN data-in-transit encryption is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDitRekeyInterval">vsan_dit_rekey_interval</a></code> | <code>typing.Union[int, float]</code> | When vsan_dit_encryption_enabled is enabled, sets the rekey interval of data-in-transit encryption (in minutes). |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanEnabled">vsan_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanEsaEnabled">vsan_esa_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN ESA service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanFaultDomains">vsan_fault_domains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>]]</code> | vsan_fault_domains block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanNetworkDiagnosticModeEnabled">vsan_network_diagnostic_mode_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN network diagnostic mode is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanPerformanceEnabled">vsan_performance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN performance service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanRemoteDatastoreIds">vsan_remote_datastore_ids</a></code> | <code>typing.List[str]</code> | The managed object IDs of the vSAN datastore to be mounted on the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanStretchedCluster">vsan_stretched_cluster</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | vsan_stretched_cluster block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanUnmapEnabled">vsan_unmap_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN unmap service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanVerboseModeEnabled">vsan_verbose_mode_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN verbose mode is enabled for the cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.datacenterId"></a>

- *Type:* str

The managed object ID of the datacenter to put the cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#datacenter_id ComputeCluster#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.name"></a>

- *Type:* str

Name for the new cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#name ComputeCluster#name}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.customAttributes"></a>

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#custom_attributes ComputeCluster#custom_attributes}

---

##### `dpm_automation_level`<sup>Optional</sup> <a name="dpm_automation_level" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dpmAutomationLevel"></a>

- *Type:* str

The automation level for host power operations in this cluster. Can be one of manual or automated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#dpm_automation_level ComputeCluster#dpm_automation_level}

---

##### `dpm_enabled`<sup>Optional</sup> <a name="dpm_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dpmEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable DPM support for DRS.

This allows you to dynamically control the power of hosts depending on the needs of virtual machines in the cluster. Requires that DRS be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#dpm_enabled ComputeCluster#dpm_enabled}

---

##### `dpm_threshold`<sup>Optional</sup> <a name="dpm_threshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dpmThreshold"></a>

- *Type:* typing.Union[int, float]

A value between 1 and 5 indicating the threshold of load within the cluster that influences host power operations.

This affects both power on and power off operations - a lower setting will tolerate more of a surplus/deficit than a higher setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#dpm_threshold ComputeCluster#dpm_threshold}

---

##### `drs_advanced_options`<sup>Optional</sup> <a name="drs_advanced_options" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsAdvancedOptions"></a>

- *Type:* typing.Mapping[str]

Advanced configuration options for DRS and DPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_advanced_options ComputeCluster#drs_advanced_options}

---

##### `drs_automation_level`<sup>Optional</sup> <a name="drs_automation_level" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsAutomationLevel"></a>

- *Type:* str

The default automation level for all virtual machines in this cluster. Can be one of manual, partiallyAutomated, or fullyAutomated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_automation_level ComputeCluster#drs_automation_level}

---

##### `drs_enabled`<sup>Optional</sup> <a name="drs_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable DRS for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_enabled ComputeCluster#drs_enabled}

---

##### `drs_enable_predictive_drs`<sup>Optional</sup> <a name="drs_enable_predictive_drs" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsEnablePredictiveDrs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, enables DRS to use data from vRealize Operations Manager to make proactive DRS recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_enable_predictive_drs ComputeCluster#drs_enable_predictive_drs}

---

##### `drs_enable_vm_overrides`<sup>Optional</sup> <a name="drs_enable_vm_overrides" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsEnableVmOverrides"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, allows individual VM overrides within this cluster to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_enable_vm_overrides ComputeCluster#drs_enable_vm_overrides}

---

##### `drs_migration_threshold`<sup>Optional</sup> <a name="drs_migration_threshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsMigrationThreshold"></a>

- *Type:* typing.Union[int, float]

A value between 1 and 5 indicating the threshold of imbalance tolerated between hosts.

A lower setting will tolerate more imbalance while a higher setting will tolerate less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_migration_threshold ComputeCluster#drs_migration_threshold}

---

##### `drs_scale_descendants_shares`<sup>Optional</sup> <a name="drs_scale_descendants_shares" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsScaleDescendantsShares"></a>

- *Type:* str

Enable scalable shares for all descendants of this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_scale_descendants_shares ComputeCluster#drs_scale_descendants_shares}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.folder"></a>

- *Type:* str

The name of the folder to locate the cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#folder ComputeCluster#folder}

---

##### `force_evacuate_on_destroy`<sup>Optional</sup> <a name="force_evacuate_on_destroy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.forceEvacuateOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force removal of all hosts in the cluster during destroy and make them standalone hosts.

Use of this flag mainly exists for testing and is not recommended in normal use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#force_evacuate_on_destroy ComputeCluster#force_evacuate_on_destroy}

---

##### `ha_admission_control_failover_host_system_ids`<sup>Optional</sup> <a name="ha_admission_control_failover_host_system_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlFailoverHostSystemIds"></a>

- *Type:* typing.List[str]

When ha_admission_control_policy is failoverHosts, this defines the managed object IDs of hosts to use as dedicated failover hosts.

These hosts are kept as available as possible - admission control will block access to the host, and DRS will ignore the host when making recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_failover_host_system_ids ComputeCluster#ha_admission_control_failover_host_system_ids}

---

##### `ha_admission_control_host_failure_tolerance`<sup>Optional</sup> <a name="ha_admission_control_host_failure_tolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlHostFailureTolerance"></a>

- *Type:* typing.Union[int, float]

The maximum number of failed hosts that admission control tolerates when making decisions on whether to permit virtual machine operations.

The maximum is one less than the number of hosts in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_host_failure_tolerance ComputeCluster#ha_admission_control_host_failure_tolerance}

---

##### `ha_admission_control_performance_tolerance`<sup>Optional</sup> <a name="ha_admission_control_performance_tolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlPerformanceTolerance"></a>

- *Type:* typing.Union[int, float]

The percentage of resource reduction that a cluster of VMs can tolerate in case of a failover.

A value of 0 produces warnings only, whereas a value of 100 disables the setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_performance_tolerance ComputeCluster#ha_admission_control_performance_tolerance}

---

##### `ha_admission_control_policy`<sup>Optional</sup> <a name="ha_admission_control_policy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlPolicy"></a>

- *Type:* str

The type of admission control policy to use with vSphere HA, which controls whether or not specific VM operations are permitted in the cluster in order to protect the reliability of the cluster.

Can be one of resourcePercentage, slotPolicy, failoverHosts, or disabled. Note that disabling admission control is not recommended and can lead to service issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_policy ComputeCluster#ha_admission_control_policy}

---

##### `ha_admission_control_resource_percentage_auto_compute`<sup>Optional</sup> <a name="ha_admission_control_resource_percentage_auto_compute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlResourcePercentageAutoCompute"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When ha_admission_control_policy is resourcePercentage, automatically determine available resource percentages by subtracting the average number of host resources represented by the ha_admission_control_host_failure_tolerance setting from the total amount of resources in the cluster.

Disable to supply user-defined values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_resource_percentage_auto_compute ComputeCluster#ha_admission_control_resource_percentage_auto_compute}

---

##### `ha_admission_control_resource_percentage_cpu`<sup>Optional</sup> <a name="ha_admission_control_resource_percentage_cpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlResourcePercentageCpu"></a>

- *Type:* typing.Union[int, float]

When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of CPU resources in the cluster to reserve for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_resource_percentage_cpu ComputeCluster#ha_admission_control_resource_percentage_cpu}

---

##### `ha_admission_control_resource_percentage_memory`<sup>Optional</sup> <a name="ha_admission_control_resource_percentage_memory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlResourcePercentageMemory"></a>

- *Type:* typing.Union[int, float]

When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of memory resources in the cluster to reserve for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_resource_percentage_memory ComputeCluster#ha_admission_control_resource_percentage_memory}

---

##### `ha_admission_control_slot_policy_explicit_cpu`<sup>Optional</sup> <a name="ha_admission_control_slot_policy_explicit_cpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlSlotPolicyExplicitCpu"></a>

- *Type:* typing.Union[int, float]

When ha_admission_control_policy is slotPolicy, this controls the user-defined CPU slot size, in MHz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_cpu ComputeCluster#ha_admission_control_slot_policy_explicit_cpu}

---

##### `ha_admission_control_slot_policy_explicit_memory`<sup>Optional</sup> <a name="ha_admission_control_slot_policy_explicit_memory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlSlotPolicyExplicitMemory"></a>

- *Type:* typing.Union[int, float]

When ha_admission_control_policy is slotPolicy, this controls the user-defined memory slot size, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_memory ComputeCluster#ha_admission_control_slot_policy_explicit_memory}

---

##### `ha_admission_control_slot_policy_use_explicit_size`<sup>Optional</sup> <a name="ha_admission_control_slot_policy_use_explicit_size" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlSlotPolicyUseExplicitSize"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When ha_admission_control_policy is slotPolicy, this setting controls whether or not you wish to supply explicit values to CPU and memory slot sizes.

The default is to gather a automatic average based on all powered-on virtual machines currently in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_slot_policy_use_explicit_size ComputeCluster#ha_admission_control_slot_policy_use_explicit_size}

---

##### `ha_advanced_options`<sup>Optional</sup> <a name="ha_advanced_options" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdvancedOptions"></a>

- *Type:* typing.Mapping[str]

Advanced configuration options for vSphere HA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_advanced_options ComputeCluster#ha_advanced_options}

---

##### `ha_datastore_apd_recovery_action`<sup>Optional</sup> <a name="ha_datastore_apd_recovery_action" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastoreApdRecoveryAction"></a>

- *Type:* str

When ha_vm_component_protection is enabled, controls the action to take on virtual machines if an APD status on an affected datastore clears in the middle of an APD event.

Can be one of none or reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_datastore_apd_recovery_action ComputeCluster#ha_datastore_apd_recovery_action}

---

##### `ha_datastore_apd_response`<sup>Optional</sup> <a name="ha_datastore_apd_response" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastoreApdResponse"></a>

- *Type:* str

When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected loss to all paths to a relevant datastore.

Can be one of disabled, warning, restartConservative, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_datastore_apd_response ComputeCluster#ha_datastore_apd_response}

---

##### `ha_datastore_apd_response_delay`<sup>Optional</sup> <a name="ha_datastore_apd_response_delay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastoreApdResponseDelay"></a>

- *Type:* typing.Union[int, float]

When ha_vm_component_protection is enabled, controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_datastore_apd_response_delay ComputeCluster#ha_datastore_apd_response_delay}

---

##### `ha_datastore_pdl_response`<sup>Optional</sup> <a name="ha_datastore_pdl_response" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastorePdlResponse"></a>

- *Type:* str

When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected a permanent device loss to a relevant datastore.

Can be one of disabled, warning, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_datastore_pdl_response ComputeCluster#ha_datastore_pdl_response}

---

##### `ha_enabled`<sup>Optional</sup> <a name="ha_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable vSphere HA for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_enabled ComputeCluster#ha_enabled}

---

##### `ha_heartbeat_datastore_ids`<sup>Optional</sup> <a name="ha_heartbeat_datastore_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHeartbeatDatastoreIds"></a>

- *Type:* typing.List[str]

The list of managed object IDs for preferred datastores to use for HA heartbeating.

This setting is only useful when ha_heartbeat_datastore_policy is set to either userSelectedDs or allFeasibleDsWithUserPreference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_heartbeat_datastore_ids ComputeCluster#ha_heartbeat_datastore_ids}

---

##### `ha_heartbeat_datastore_policy`<sup>Optional</sup> <a name="ha_heartbeat_datastore_policy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHeartbeatDatastorePolicy"></a>

- *Type:* str

The selection policy for HA heartbeat datastores. Can be one of allFeasibleDs, userSelectedDs, or allFeasibleDsWithUserPreference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_heartbeat_datastore_policy ComputeCluster#ha_heartbeat_datastore_policy}

---

##### `ha_host_isolation_response`<sup>Optional</sup> <a name="ha_host_isolation_response" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHostIsolationResponse"></a>

- *Type:* str

The action to take on virtual machines when a host has detected that it has been isolated from the rest of the cluster.

Can be one of none, powerOff, or shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_host_isolation_response ComputeCluster#ha_host_isolation_response}

---

##### `ha_host_monitoring`<sup>Optional</sup> <a name="ha_host_monitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHostMonitoring"></a>

- *Type:* str

Global setting that controls whether vSphere HA remediates VMs on host failure. Can be one of enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_host_monitoring ComputeCluster#ha_host_monitoring}

---

##### `ha_vm_component_protection`<sup>Optional</sup> <a name="ha_vm_component_protection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmComponentProtection"></a>

- *Type:* str

Controls vSphere VM component protection for virtual machines in this cluster.

This allows vSphere HA to react to failures between hosts and specific virtual machine components, such as datastores. Can be one of enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_component_protection ComputeCluster#ha_vm_component_protection}

---

##### `ha_vm_dependency_restart_condition`<sup>Optional</sup> <a name="ha_vm_dependency_restart_condition" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmDependencyRestartCondition"></a>

- *Type:* str

The condition used to determine whether or not VMs in a certain restart priority class are online, allowing HA to move on to restarting VMs on the next priority.

Can be one of none, poweredOn, guestHbStatusGreen, or appHbStatusGreen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_dependency_restart_condition ComputeCluster#ha_vm_dependency_restart_condition}

---

##### `ha_vm_failure_interval`<sup>Optional</sup> <a name="ha_vm_failure_interval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmFailureInterval"></a>

- *Type:* typing.Union[int, float]

If a heartbeat from a virtual machine is not received within this configured interval, the virtual machine is marked as failed.

The value is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_failure_interval ComputeCluster#ha_vm_failure_interval}

---

##### `ha_vm_maximum_failure_window`<sup>Optional</sup> <a name="ha_vm_maximum_failure_window" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMaximumFailureWindow"></a>

- *Type:* typing.Union[int, float]

The length of the reset window in which ha_vm_maximum_resets can operate.

When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_maximum_failure_window ComputeCluster#ha_vm_maximum_failure_window}

---

##### `ha_vm_maximum_resets`<sup>Optional</sup> <a name="ha_vm_maximum_resets" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMaximumResets"></a>

- *Type:* typing.Union[int, float]

The maximum number of resets that HA will perform to a virtual machine when responding to a failure event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_maximum_resets ComputeCluster#ha_vm_maximum_resets}

---

##### `ha_vm_minimum_uptime`<sup>Optional</sup> <a name="ha_vm_minimum_uptime" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMinimumUptime"></a>

- *Type:* typing.Union[int, float]

The time, in seconds, that HA waits after powering on a virtual machine before monitoring for heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_minimum_uptime ComputeCluster#ha_vm_minimum_uptime}

---

##### `ha_vm_monitoring`<sup>Optional</sup> <a name="ha_vm_monitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMonitoring"></a>

- *Type:* str

The type of virtual machine monitoring to use when HA is enabled in the cluster.

Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_monitoring ComputeCluster#ha_vm_monitoring}

---

##### `ha_vm_restart_additional_delay`<sup>Optional</sup> <a name="ha_vm_restart_additional_delay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmRestartAdditionalDelay"></a>

- *Type:* typing.Union[int, float]

Additional delay in seconds after ready condition is met. A VM is considered ready at this point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_restart_additional_delay ComputeCluster#ha_vm_restart_additional_delay}

---

##### `ha_vm_restart_priority`<sup>Optional</sup> <a name="ha_vm_restart_priority" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmRestartPriority"></a>

- *Type:* str

The default restart priority for affected VMs when vSphere detects a host failure.

Can be one of lowest, low, medium, high, or highest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_restart_priority ComputeCluster#ha_vm_restart_priority}

---

##### `ha_vm_restart_timeout`<sup>Optional</sup> <a name="ha_vm_restart_timeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmRestartTimeout"></a>

- *Type:* typing.Union[int, float]

The maximum time, in seconds, that vSphere HA will wait for virtual machines in one priority to be ready before proceeding with the next priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_restart_timeout ComputeCluster#ha_vm_restart_timeout}

---

##### `host_cluster_exit_timeout`<sup>Optional</sup> <a name="host_cluster_exit_timeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostClusterExitTimeout"></a>

- *Type:* typing.Union[int, float]

The timeout for each host maintenance mode operation when removing hosts from a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#host_cluster_exit_timeout ComputeCluster#host_cluster_exit_timeout}

---

##### `host_image`<sup>Optional</sup> <a name="host_image" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostImage"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

host_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#host_image ComputeCluster#host_image}

---

##### `host_managed`<sup>Optional</sup> <a name="host_managed" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostManaged"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Must be set if cluster enrollment is managed from host resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#host_managed ComputeCluster#host_managed}

---

##### `host_system_ids`<sup>Optional</sup> <a name="host_system_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostSystemIds"></a>

- *Type:* typing.List[str]

The managed object IDs of the hosts to put in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#host_system_ids ComputeCluster#host_system_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#id ComputeCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `proactive_ha_automation_level`<sup>Optional</sup> <a name="proactive_ha_automation_level" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaAutomationLevel"></a>

- *Type:* str

The DRS behavior for proactive HA recommendations. Can be one of Automated or Manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#proactive_ha_automation_level ComputeCluster#proactive_ha_automation_level}

---

##### `proactive_ha_enabled`<sup>Optional</sup> <a name="proactive_ha_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables proactive HA, allowing for vSphere to get HA data from external providers and use DRS to perform remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#proactive_ha_enabled ComputeCluster#proactive_ha_enabled}

---

##### `proactive_ha_moderate_remediation`<sup>Optional</sup> <a name="proactive_ha_moderate_remediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaModerateRemediation"></a>

- *Type:* str

The configured remediation for moderately degraded hosts.

Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to MaintenanceMode when proactive_ha_severe_remediation is set to QuarantineMode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#proactive_ha_moderate_remediation ComputeCluster#proactive_ha_moderate_remediation}

---

##### `proactive_ha_provider_ids`<sup>Optional</sup> <a name="proactive_ha_provider_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaProviderIds"></a>

- *Type:* typing.List[str]

The list of IDs for health update providers configured for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#proactive_ha_provider_ids ComputeCluster#proactive_ha_provider_ids}

---

##### `proactive_ha_severe_remediation`<sup>Optional</sup> <a name="proactive_ha_severe_remediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaSevereRemediation"></a>

- *Type:* str

The configured remediation for severely degraded hosts.

Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to QuarantineMode when proactive_ha_moderate_remediation is set to MaintenanceMode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#proactive_ha_severe_remediation ComputeCluster#proactive_ha_severe_remediation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#tags ComputeCluster#tags}

---

##### `vsan_compression_enabled`<sup>Optional</sup> <a name="vsan_compression_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanCompressionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN compression service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_compression_enabled ComputeCluster#vsan_compression_enabled}

---

##### `vsan_dedup_enabled`<sup>Optional</sup> <a name="vsan_dedup_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDedupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN deduplication service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_dedup_enabled ComputeCluster#vsan_dedup_enabled}

---

##### `vsan_disk_group`<sup>Optional</sup> <a name="vsan_disk_group" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDiskGroup"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>]]

vsan_disk_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_disk_group ComputeCluster#vsan_disk_group}

---

##### `vsan_dit_encryption_enabled`<sup>Optional</sup> <a name="vsan_dit_encryption_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDitEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN data-in-transit encryption is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_dit_encryption_enabled ComputeCluster#vsan_dit_encryption_enabled}

---

##### `vsan_dit_rekey_interval`<sup>Optional</sup> <a name="vsan_dit_rekey_interval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDitRekeyInterval"></a>

- *Type:* typing.Union[int, float]

When vsan_dit_encryption_enabled is enabled, sets the rekey interval of data-in-transit encryption (in minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_dit_rekey_interval ComputeCluster#vsan_dit_rekey_interval}

---

##### `vsan_enabled`<sup>Optional</sup> <a name="vsan_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_enabled ComputeCluster#vsan_enabled}

---

##### `vsan_esa_enabled`<sup>Optional</sup> <a name="vsan_esa_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanEsaEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN ESA service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_esa_enabled ComputeCluster#vsan_esa_enabled}

---

##### `vsan_fault_domains`<sup>Optional</sup> <a name="vsan_fault_domains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanFaultDomains"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>]]

vsan_fault_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_fault_domains ComputeCluster#vsan_fault_domains}

---

##### `vsan_network_diagnostic_mode_enabled`<sup>Optional</sup> <a name="vsan_network_diagnostic_mode_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanNetworkDiagnosticModeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN network diagnostic mode is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_network_diagnostic_mode_enabled ComputeCluster#vsan_network_diagnostic_mode_enabled}

---

##### `vsan_performance_enabled`<sup>Optional</sup> <a name="vsan_performance_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanPerformanceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN performance service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_performance_enabled ComputeCluster#vsan_performance_enabled}

---

##### `vsan_remote_datastore_ids`<sup>Optional</sup> <a name="vsan_remote_datastore_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanRemoteDatastoreIds"></a>

- *Type:* typing.List[str]

The managed object IDs of the vSAN datastore to be mounted on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_remote_datastore_ids ComputeCluster#vsan_remote_datastore_ids}

---

##### `vsan_stretched_cluster`<sup>Optional</sup> <a name="vsan_stretched_cluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanStretchedCluster"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

vsan_stretched_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_stretched_cluster ComputeCluster#vsan_stretched_cluster}

---

##### `vsan_unmap_enabled`<sup>Optional</sup> <a name="vsan_unmap_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanUnmapEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN unmap service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_unmap_enabled ComputeCluster#vsan_unmap_enabled}

---

##### `vsan_verbose_mode_enabled`<sup>Optional</sup> <a name="vsan_verbose_mode_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanVerboseModeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN verbose mode is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_verbose_mode_enabled ComputeCluster#vsan_verbose_mode_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putHostImage">put_host_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanDiskGroup">put_vsan_disk_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanFaultDomains">put_vsan_fault_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster">put_vsan_stretched_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmAutomationLevel">reset_dpm_automation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmEnabled">reset_dpm_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmThreshold">reset_dpm_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAdvancedOptions">reset_drs_advanced_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAutomationLevel">reset_drs_automation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnabled">reset_drs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnablePredictiveDrs">reset_drs_enable_predictive_drs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnableVmOverrides">reset_drs_enable_vm_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsMigrationThreshold">reset_drs_migration_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsScaleDescendantsShares">reset_drs_scale_descendants_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetForceEvacuateOnDestroy">reset_force_evacuate_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlFailoverHostSystemIds">reset_ha_admission_control_failover_host_system_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlHostFailureTolerance">reset_ha_admission_control_host_failure_tolerance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPerformanceTolerance">reset_ha_admission_control_performance_tolerance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPolicy">reset_ha_admission_control_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageAutoCompute">reset_ha_admission_control_resource_percentage_auto_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageCpu">reset_ha_admission_control_resource_percentage_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageMemory">reset_ha_admission_control_resource_percentage_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitCpu">reset_ha_admission_control_slot_policy_explicit_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitMemory">reset_ha_admission_control_slot_policy_explicit_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyUseExplicitSize">reset_ha_admission_control_slot_policy_use_explicit_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdvancedOptions">reset_ha_advanced_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdRecoveryAction">reset_ha_datastore_apd_recovery_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponse">reset_ha_datastore_apd_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponseDelay">reset_ha_datastore_apd_response_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastorePdlResponse">reset_ha_datastore_pdl_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaEnabled">reset_ha_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastoreIds">reset_ha_heartbeat_datastore_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastorePolicy">reset_ha_heartbeat_datastore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostIsolationResponse">reset_ha_host_isolation_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostMonitoring">reset_ha_host_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmComponentProtection">reset_ha_vm_component_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmDependencyRestartCondition">reset_ha_vm_dependency_restart_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmFailureInterval">reset_ha_vm_failure_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumFailureWindow">reset_ha_vm_maximum_failure_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumResets">reset_ha_vm_maximum_resets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMinimumUptime">reset_ha_vm_minimum_uptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMonitoring">reset_ha_vm_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartAdditionalDelay">reset_ha_vm_restart_additional_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartPriority">reset_ha_vm_restart_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartTimeout">reset_ha_vm_restart_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostClusterExitTimeout">reset_host_cluster_exit_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostImage">reset_host_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostManaged">reset_host_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostSystemIds">reset_host_system_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaAutomationLevel">reset_proactive_ha_automation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaEnabled">reset_proactive_ha_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaModerateRemediation">reset_proactive_ha_moderate_remediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaProviderIds">reset_proactive_ha_provider_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaSevereRemediation">reset_proactive_ha_severe_remediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanCompressionEnabled">reset_vsan_compression_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDedupEnabled">reset_vsan_dedup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDiskGroup">reset_vsan_disk_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitEncryptionEnabled">reset_vsan_dit_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitRekeyInterval">reset_vsan_dit_rekey_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEnabled">reset_vsan_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEsaEnabled">reset_vsan_esa_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanFaultDomains">reset_vsan_fault_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanNetworkDiagnosticModeEnabled">reset_vsan_network_diagnostic_mode_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanPerformanceEnabled">reset_vsan_performance_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanRemoteDatastoreIds">reset_vsan_remote_datastore_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanStretchedCluster">reset_vsan_stretched_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanUnmapEnabled">reset_vsan_unmap_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanVerboseModeEnabled">reset_vsan_verbose_mode_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_host_image` <a name="put_host_image" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putHostImage"></a>

```python
def put_host_image(
  component: typing.Union[IResolvable, typing.List[ComputeClusterHostImageComponent]] = None,
  esx_version: str = None
) -> None
```

###### `component`<sup>Optional</sup> <a name="component" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putHostImage.parameter.component"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>]]

component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#component ComputeCluster#component}

---

###### `esx_version`<sup>Optional</sup> <a name="esx_version" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putHostImage.parameter.esxVersion"></a>

- *Type:* str

The ESXi version which the image is based on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#esx_version ComputeCluster#esx_version}

---

##### `put_vsan_disk_group` <a name="put_vsan_disk_group" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanDiskGroup"></a>

```python
def put_vsan_disk_group(
  value: typing.Union[IResolvable, typing.List[ComputeClusterVsanDiskGroup]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanDiskGroup.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>]]

---

##### `put_vsan_fault_domains` <a name="put_vsan_fault_domains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanFaultDomains"></a>

```python
def put_vsan_fault_domains(
  value: typing.Union[IResolvable, typing.List[ComputeClusterVsanFaultDomains]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanFaultDomains.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>]]

---

##### `put_vsan_stretched_cluster` <a name="put_vsan_stretched_cluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster"></a>

```python
def put_vsan_stretched_cluster(
  preferred_fault_domain_host_ids: typing.List[str],
  secondary_fault_domain_host_ids: typing.List[str],
  witness_node: str,
  preferred_fault_domain_name: str = None,
  secondary_fault_domain_name: str = None
) -> None
```

###### `preferred_fault_domain_host_ids`<sup>Required</sup> <a name="preferred_fault_domain_host_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster.parameter.preferredFaultDomainHostIds"></a>

- *Type:* typing.List[str]

The managed object IDs of the hosts to put in the first fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#preferred_fault_domain_host_ids ComputeCluster#preferred_fault_domain_host_ids}

---

###### `secondary_fault_domain_host_ids`<sup>Required</sup> <a name="secondary_fault_domain_host_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster.parameter.secondaryFaultDomainHostIds"></a>

- *Type:* typing.List[str]

The managed object IDs of the hosts to put in the second fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#secondary_fault_domain_host_ids ComputeCluster#secondary_fault_domain_host_ids}

---

###### `witness_node`<sup>Required</sup> <a name="witness_node" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster.parameter.witnessNode"></a>

- *Type:* str

The managed object IDs of the host selected as witness node when enable stretched cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#witness_node ComputeCluster#witness_node}

---

###### `preferred_fault_domain_name`<sup>Optional</sup> <a name="preferred_fault_domain_name" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster.parameter.preferredFaultDomainName"></a>

- *Type:* str

The name of prepferred fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#preferred_fault_domain_name ComputeCluster#preferred_fault_domain_name}

---

###### `secondary_fault_domain_name`<sup>Optional</sup> <a name="secondary_fault_domain_name" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster.parameter.secondaryFaultDomainName"></a>

- *Type:* str

The name of secondary fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#secondary_fault_domain_name ComputeCluster#secondary_fault_domain_name}

---

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_dpm_automation_level` <a name="reset_dpm_automation_level" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmAutomationLevel"></a>

```python
def reset_dpm_automation_level() -> None
```

##### `reset_dpm_enabled` <a name="reset_dpm_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmEnabled"></a>

```python
def reset_dpm_enabled() -> None
```

##### `reset_dpm_threshold` <a name="reset_dpm_threshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmThreshold"></a>

```python
def reset_dpm_threshold() -> None
```

##### `reset_drs_advanced_options` <a name="reset_drs_advanced_options" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAdvancedOptions"></a>

```python
def reset_drs_advanced_options() -> None
```

##### `reset_drs_automation_level` <a name="reset_drs_automation_level" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAutomationLevel"></a>

```python
def reset_drs_automation_level() -> None
```

##### `reset_drs_enabled` <a name="reset_drs_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnabled"></a>

```python
def reset_drs_enabled() -> None
```

##### `reset_drs_enable_predictive_drs` <a name="reset_drs_enable_predictive_drs" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnablePredictiveDrs"></a>

```python
def reset_drs_enable_predictive_drs() -> None
```

##### `reset_drs_enable_vm_overrides` <a name="reset_drs_enable_vm_overrides" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnableVmOverrides"></a>

```python
def reset_drs_enable_vm_overrides() -> None
```

##### `reset_drs_migration_threshold` <a name="reset_drs_migration_threshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsMigrationThreshold"></a>

```python
def reset_drs_migration_threshold() -> None
```

##### `reset_drs_scale_descendants_shares` <a name="reset_drs_scale_descendants_shares" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsScaleDescendantsShares"></a>

```python
def reset_drs_scale_descendants_shares() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_force_evacuate_on_destroy` <a name="reset_force_evacuate_on_destroy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetForceEvacuateOnDestroy"></a>

```python
def reset_force_evacuate_on_destroy() -> None
```

##### `reset_ha_admission_control_failover_host_system_ids` <a name="reset_ha_admission_control_failover_host_system_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlFailoverHostSystemIds"></a>

```python
def reset_ha_admission_control_failover_host_system_ids() -> None
```

##### `reset_ha_admission_control_host_failure_tolerance` <a name="reset_ha_admission_control_host_failure_tolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlHostFailureTolerance"></a>

```python
def reset_ha_admission_control_host_failure_tolerance() -> None
```

##### `reset_ha_admission_control_performance_tolerance` <a name="reset_ha_admission_control_performance_tolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPerformanceTolerance"></a>

```python
def reset_ha_admission_control_performance_tolerance() -> None
```

##### `reset_ha_admission_control_policy` <a name="reset_ha_admission_control_policy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPolicy"></a>

```python
def reset_ha_admission_control_policy() -> None
```

##### `reset_ha_admission_control_resource_percentage_auto_compute` <a name="reset_ha_admission_control_resource_percentage_auto_compute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageAutoCompute"></a>

```python
def reset_ha_admission_control_resource_percentage_auto_compute() -> None
```

##### `reset_ha_admission_control_resource_percentage_cpu` <a name="reset_ha_admission_control_resource_percentage_cpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageCpu"></a>

```python
def reset_ha_admission_control_resource_percentage_cpu() -> None
```

##### `reset_ha_admission_control_resource_percentage_memory` <a name="reset_ha_admission_control_resource_percentage_memory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageMemory"></a>

```python
def reset_ha_admission_control_resource_percentage_memory() -> None
```

##### `reset_ha_admission_control_slot_policy_explicit_cpu` <a name="reset_ha_admission_control_slot_policy_explicit_cpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitCpu"></a>

```python
def reset_ha_admission_control_slot_policy_explicit_cpu() -> None
```

##### `reset_ha_admission_control_slot_policy_explicit_memory` <a name="reset_ha_admission_control_slot_policy_explicit_memory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitMemory"></a>

```python
def reset_ha_admission_control_slot_policy_explicit_memory() -> None
```

##### `reset_ha_admission_control_slot_policy_use_explicit_size` <a name="reset_ha_admission_control_slot_policy_use_explicit_size" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyUseExplicitSize"></a>

```python
def reset_ha_admission_control_slot_policy_use_explicit_size() -> None
```

##### `reset_ha_advanced_options` <a name="reset_ha_advanced_options" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdvancedOptions"></a>

```python
def reset_ha_advanced_options() -> None
```

##### `reset_ha_datastore_apd_recovery_action` <a name="reset_ha_datastore_apd_recovery_action" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdRecoveryAction"></a>

```python
def reset_ha_datastore_apd_recovery_action() -> None
```

##### `reset_ha_datastore_apd_response` <a name="reset_ha_datastore_apd_response" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponse"></a>

```python
def reset_ha_datastore_apd_response() -> None
```

##### `reset_ha_datastore_apd_response_delay` <a name="reset_ha_datastore_apd_response_delay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponseDelay"></a>

```python
def reset_ha_datastore_apd_response_delay() -> None
```

##### `reset_ha_datastore_pdl_response` <a name="reset_ha_datastore_pdl_response" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastorePdlResponse"></a>

```python
def reset_ha_datastore_pdl_response() -> None
```

##### `reset_ha_enabled` <a name="reset_ha_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaEnabled"></a>

```python
def reset_ha_enabled() -> None
```

##### `reset_ha_heartbeat_datastore_ids` <a name="reset_ha_heartbeat_datastore_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastoreIds"></a>

```python
def reset_ha_heartbeat_datastore_ids() -> None
```

##### `reset_ha_heartbeat_datastore_policy` <a name="reset_ha_heartbeat_datastore_policy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastorePolicy"></a>

```python
def reset_ha_heartbeat_datastore_policy() -> None
```

##### `reset_ha_host_isolation_response` <a name="reset_ha_host_isolation_response" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostIsolationResponse"></a>

```python
def reset_ha_host_isolation_response() -> None
```

##### `reset_ha_host_monitoring` <a name="reset_ha_host_monitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostMonitoring"></a>

```python
def reset_ha_host_monitoring() -> None
```

##### `reset_ha_vm_component_protection` <a name="reset_ha_vm_component_protection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmComponentProtection"></a>

```python
def reset_ha_vm_component_protection() -> None
```

##### `reset_ha_vm_dependency_restart_condition` <a name="reset_ha_vm_dependency_restart_condition" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmDependencyRestartCondition"></a>

```python
def reset_ha_vm_dependency_restart_condition() -> None
```

##### `reset_ha_vm_failure_interval` <a name="reset_ha_vm_failure_interval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmFailureInterval"></a>

```python
def reset_ha_vm_failure_interval() -> None
```

##### `reset_ha_vm_maximum_failure_window` <a name="reset_ha_vm_maximum_failure_window" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumFailureWindow"></a>

```python
def reset_ha_vm_maximum_failure_window() -> None
```

##### `reset_ha_vm_maximum_resets` <a name="reset_ha_vm_maximum_resets" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumResets"></a>

```python
def reset_ha_vm_maximum_resets() -> None
```

##### `reset_ha_vm_minimum_uptime` <a name="reset_ha_vm_minimum_uptime" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMinimumUptime"></a>

```python
def reset_ha_vm_minimum_uptime() -> None
```

##### `reset_ha_vm_monitoring` <a name="reset_ha_vm_monitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMonitoring"></a>

```python
def reset_ha_vm_monitoring() -> None
```

##### `reset_ha_vm_restart_additional_delay` <a name="reset_ha_vm_restart_additional_delay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartAdditionalDelay"></a>

```python
def reset_ha_vm_restart_additional_delay() -> None
```

##### `reset_ha_vm_restart_priority` <a name="reset_ha_vm_restart_priority" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartPriority"></a>

```python
def reset_ha_vm_restart_priority() -> None
```

##### `reset_ha_vm_restart_timeout` <a name="reset_ha_vm_restart_timeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartTimeout"></a>

```python
def reset_ha_vm_restart_timeout() -> None
```

##### `reset_host_cluster_exit_timeout` <a name="reset_host_cluster_exit_timeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostClusterExitTimeout"></a>

```python
def reset_host_cluster_exit_timeout() -> None
```

##### `reset_host_image` <a name="reset_host_image" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostImage"></a>

```python
def reset_host_image() -> None
```

##### `reset_host_managed` <a name="reset_host_managed" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostManaged"></a>

```python
def reset_host_managed() -> None
```

##### `reset_host_system_ids` <a name="reset_host_system_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostSystemIds"></a>

```python
def reset_host_system_ids() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_proactive_ha_automation_level` <a name="reset_proactive_ha_automation_level" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaAutomationLevel"></a>

```python
def reset_proactive_ha_automation_level() -> None
```

##### `reset_proactive_ha_enabled` <a name="reset_proactive_ha_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaEnabled"></a>

```python
def reset_proactive_ha_enabled() -> None
```

##### `reset_proactive_ha_moderate_remediation` <a name="reset_proactive_ha_moderate_remediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaModerateRemediation"></a>

```python
def reset_proactive_ha_moderate_remediation() -> None
```

##### `reset_proactive_ha_provider_ids` <a name="reset_proactive_ha_provider_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaProviderIds"></a>

```python
def reset_proactive_ha_provider_ids() -> None
```

##### `reset_proactive_ha_severe_remediation` <a name="reset_proactive_ha_severe_remediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaSevereRemediation"></a>

```python
def reset_proactive_ha_severe_remediation() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vsan_compression_enabled` <a name="reset_vsan_compression_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanCompressionEnabled"></a>

```python
def reset_vsan_compression_enabled() -> None
```

##### `reset_vsan_dedup_enabled` <a name="reset_vsan_dedup_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDedupEnabled"></a>

```python
def reset_vsan_dedup_enabled() -> None
```

##### `reset_vsan_disk_group` <a name="reset_vsan_disk_group" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDiskGroup"></a>

```python
def reset_vsan_disk_group() -> None
```

##### `reset_vsan_dit_encryption_enabled` <a name="reset_vsan_dit_encryption_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitEncryptionEnabled"></a>

```python
def reset_vsan_dit_encryption_enabled() -> None
```

##### `reset_vsan_dit_rekey_interval` <a name="reset_vsan_dit_rekey_interval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitRekeyInterval"></a>

```python
def reset_vsan_dit_rekey_interval() -> None
```

##### `reset_vsan_enabled` <a name="reset_vsan_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEnabled"></a>

```python
def reset_vsan_enabled() -> None
```

##### `reset_vsan_esa_enabled` <a name="reset_vsan_esa_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEsaEnabled"></a>

```python
def reset_vsan_esa_enabled() -> None
```

##### `reset_vsan_fault_domains` <a name="reset_vsan_fault_domains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanFaultDomains"></a>

```python
def reset_vsan_fault_domains() -> None
```

##### `reset_vsan_network_diagnostic_mode_enabled` <a name="reset_vsan_network_diagnostic_mode_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanNetworkDiagnosticModeEnabled"></a>

```python
def reset_vsan_network_diagnostic_mode_enabled() -> None
```

##### `reset_vsan_performance_enabled` <a name="reset_vsan_performance_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanPerformanceEnabled"></a>

```python
def reset_vsan_performance_enabled() -> None
```

##### `reset_vsan_remote_datastore_ids` <a name="reset_vsan_remote_datastore_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanRemoteDatastoreIds"></a>

```python
def reset_vsan_remote_datastore_ids() -> None
```

##### `reset_vsan_stretched_cluster` <a name="reset_vsan_stretched_cluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanStretchedCluster"></a>

```python
def reset_vsan_stretched_cluster() -> None
```

##### `reset_vsan_unmap_enabled` <a name="reset_vsan_unmap_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanUnmapEnabled"></a>

```python
def reset_vsan_unmap_enabled() -> None
```

##### `reset_vsan_verbose_mode_enabled` <a name="reset_vsan_verbose_mode_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanVerboseModeEnabled"></a>

```python
def reset_vsan_verbose_mode_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeCluster.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImage">host_image</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference">ComputeClusterHostImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.resourcePoolId">resource_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroup">vsan_disk_group</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList">ComputeClusterVsanDiskGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomains">vsan_fault_domains</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList">ComputeClusterVsanFaultDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedCluster">vsan_stretched_cluster</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference">ComputeClusterVsanStretchedClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributesInput">custom_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevelInput">dpm_automation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabledInput">dpm_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThresholdInput">dpm_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptionsInput">drs_advanced_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevelInput">drs_automation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabledInput">drs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrsInput">drs_enable_predictive_drs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverridesInput">drs_enable_vm_overrides_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThresholdInput">drs_migration_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsSharesInput">drs_scale_descendants_shares_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroyInput">force_evacuate_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIdsInput">ha_admission_control_failover_host_system_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureToleranceInput">ha_admission_control_host_failure_tolerance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceToleranceInput">ha_admission_control_performance_tolerance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicyInput">ha_admission_control_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoComputeInput">ha_admission_control_resource_percentage_auto_compute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpuInput">ha_admission_control_resource_percentage_cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemoryInput">ha_admission_control_resource_percentage_memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpuInput">ha_admission_control_slot_policy_explicit_cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemoryInput">ha_admission_control_slot_policy_explicit_memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSizeInput">ha_admission_control_slot_policy_use_explicit_size_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptionsInput">ha_advanced_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryActionInput">ha_datastore_apd_recovery_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelayInput">ha_datastore_apd_response_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseInput">ha_datastore_apd_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponseInput">ha_datastore_pdl_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabledInput">ha_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIdsInput">ha_heartbeat_datastore_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicyInput">ha_heartbeat_datastore_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponseInput">ha_host_isolation_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoringInput">ha_host_monitoring_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtectionInput">ha_vm_component_protection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartConditionInput">ha_vm_dependency_restart_condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureIntervalInput">ha_vm_failure_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindowInput">ha_vm_maximum_failure_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResetsInput">ha_vm_maximum_resets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptimeInput">ha_vm_minimum_uptime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoringInput">ha_vm_monitoring_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelayInput">ha_vm_restart_additional_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriorityInput">ha_vm_restart_priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeoutInput">ha_vm_restart_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeoutInput">host_cluster_exit_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImageInput">host_image_input</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManagedInput">host_managed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIdsInput">host_system_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevelInput">proactive_ha_automation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabledInput">proactive_ha_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediationInput">proactive_ha_moderate_remediation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIdsInput">proactive_ha_provider_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediationInput">proactive_ha_severe_remediation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabledInput">vsan_compression_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabledInput">vsan_dedup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroupInput">vsan_disk_group_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabledInput">vsan_dit_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyIntervalInput">vsan_dit_rekey_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabledInput">vsan_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabledInput">vsan_esa_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomainsInput">vsan_fault_domains_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabledInput">vsan_network_diagnostic_mode_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabledInput">vsan_performance_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIdsInput">vsan_remote_datastore_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedClusterInput">vsan_stretched_cluster_input</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabledInput">vsan_unmap_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabledInput">vsan_verbose_mode_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevel">dpm_automation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabled">dpm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThreshold">dpm_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptions">drs_advanced_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevel">drs_automation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabled">drs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrs">drs_enable_predictive_drs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverrides">drs_enable_vm_overrides</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThreshold">drs_migration_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsShares">drs_scale_descendants_shares</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroy">force_evacuate_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIds">ha_admission_control_failover_host_system_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureTolerance">ha_admission_control_host_failure_tolerance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceTolerance">ha_admission_control_performance_tolerance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicy">ha_admission_control_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoCompute">ha_admission_control_resource_percentage_auto_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpu">ha_admission_control_resource_percentage_cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemory">ha_admission_control_resource_percentage_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpu">ha_admission_control_slot_policy_explicit_cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemory">ha_admission_control_slot_policy_explicit_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSize">ha_admission_control_slot_policy_use_explicit_size</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptions">ha_advanced_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryAction">ha_datastore_apd_recovery_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponse">ha_datastore_apd_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelay">ha_datastore_apd_response_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponse">ha_datastore_pdl_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabled">ha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIds">ha_heartbeat_datastore_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicy">ha_heartbeat_datastore_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponse">ha_host_isolation_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoring">ha_host_monitoring</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtection">ha_vm_component_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartCondition">ha_vm_dependency_restart_condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureInterval">ha_vm_failure_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindow">ha_vm_maximum_failure_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResets">ha_vm_maximum_resets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptime">ha_vm_minimum_uptime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoring">ha_vm_monitoring</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelay">ha_vm_restart_additional_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriority">ha_vm_restart_priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeout">ha_vm_restart_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeout">host_cluster_exit_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManaged">host_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIds">host_system_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevel">proactive_ha_automation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabled">proactive_ha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediation">proactive_ha_moderate_remediation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIds">proactive_ha_provider_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediation">proactive_ha_severe_remediation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabled">vsan_compression_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabled">vsan_dedup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabled">vsan_dit_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyInterval">vsan_dit_rekey_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabled">vsan_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabled">vsan_esa_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabled">vsan_network_diagnostic_mode_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabled">vsan_performance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIds">vsan_remote_datastore_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabled">vsan_unmap_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabled">vsan_verbose_mode_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_image`<sup>Required</sup> <a name="host_image" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImage"></a>

```python
host_image: ComputeClusterHostImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference">ComputeClusterHostImageOutputReference</a>

---

##### `resource_pool_id`<sup>Required</sup> <a name="resource_pool_id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.resourcePoolId"></a>

```python
resource_pool_id: str
```

- *Type:* str

---

##### `vsan_disk_group`<sup>Required</sup> <a name="vsan_disk_group" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroup"></a>

```python
vsan_disk_group: ComputeClusterVsanDiskGroupList
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList">ComputeClusterVsanDiskGroupList</a>

---

##### `vsan_fault_domains`<sup>Required</sup> <a name="vsan_fault_domains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomains"></a>

```python
vsan_fault_domains: ComputeClusterVsanFaultDomainsList
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList">ComputeClusterVsanFaultDomainsList</a>

---

##### `vsan_stretched_cluster`<sup>Required</sup> <a name="vsan_stretched_cluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedCluster"></a>

```python
vsan_stretched_cluster: ComputeClusterVsanStretchedClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference">ComputeClusterVsanStretchedClusterOutputReference</a>

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributesInput"></a>

```python
custom_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `dpm_automation_level_input`<sup>Optional</sup> <a name="dpm_automation_level_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevelInput"></a>

```python
dpm_automation_level_input: str
```

- *Type:* str

---

##### `dpm_enabled_input`<sup>Optional</sup> <a name="dpm_enabled_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabledInput"></a>

```python
dpm_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dpm_threshold_input`<sup>Optional</sup> <a name="dpm_threshold_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThresholdInput"></a>

```python
dpm_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `drs_advanced_options_input`<sup>Optional</sup> <a name="drs_advanced_options_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptionsInput"></a>

```python
drs_advanced_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `drs_automation_level_input`<sup>Optional</sup> <a name="drs_automation_level_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevelInput"></a>

```python
drs_automation_level_input: str
```

- *Type:* str

---

##### `drs_enabled_input`<sup>Optional</sup> <a name="drs_enabled_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabledInput"></a>

```python
drs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `drs_enable_predictive_drs_input`<sup>Optional</sup> <a name="drs_enable_predictive_drs_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrsInput"></a>

```python
drs_enable_predictive_drs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `drs_enable_vm_overrides_input`<sup>Optional</sup> <a name="drs_enable_vm_overrides_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverridesInput"></a>

```python
drs_enable_vm_overrides_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `drs_migration_threshold_input`<sup>Optional</sup> <a name="drs_migration_threshold_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThresholdInput"></a>

```python
drs_migration_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `drs_scale_descendants_shares_input`<sup>Optional</sup> <a name="drs_scale_descendants_shares_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsSharesInput"></a>

```python
drs_scale_descendants_shares_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `force_evacuate_on_destroy_input`<sup>Optional</sup> <a name="force_evacuate_on_destroy_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroyInput"></a>

```python
force_evacuate_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ha_admission_control_failover_host_system_ids_input`<sup>Optional</sup> <a name="ha_admission_control_failover_host_system_ids_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIdsInput"></a>

```python
ha_admission_control_failover_host_system_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ha_admission_control_host_failure_tolerance_input`<sup>Optional</sup> <a name="ha_admission_control_host_failure_tolerance_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureToleranceInput"></a>

```python
ha_admission_control_host_failure_tolerance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_admission_control_performance_tolerance_input`<sup>Optional</sup> <a name="ha_admission_control_performance_tolerance_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceToleranceInput"></a>

```python
ha_admission_control_performance_tolerance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_admission_control_policy_input`<sup>Optional</sup> <a name="ha_admission_control_policy_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicyInput"></a>

```python
ha_admission_control_policy_input: str
```

- *Type:* str

---

##### `ha_admission_control_resource_percentage_auto_compute_input`<sup>Optional</sup> <a name="ha_admission_control_resource_percentage_auto_compute_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoComputeInput"></a>

```python
ha_admission_control_resource_percentage_auto_compute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ha_admission_control_resource_percentage_cpu_input`<sup>Optional</sup> <a name="ha_admission_control_resource_percentage_cpu_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpuInput"></a>

```python
ha_admission_control_resource_percentage_cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_admission_control_resource_percentage_memory_input`<sup>Optional</sup> <a name="ha_admission_control_resource_percentage_memory_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemoryInput"></a>

```python
ha_admission_control_resource_percentage_memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_admission_control_slot_policy_explicit_cpu_input`<sup>Optional</sup> <a name="ha_admission_control_slot_policy_explicit_cpu_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpuInput"></a>

```python
ha_admission_control_slot_policy_explicit_cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_admission_control_slot_policy_explicit_memory_input`<sup>Optional</sup> <a name="ha_admission_control_slot_policy_explicit_memory_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemoryInput"></a>

```python
ha_admission_control_slot_policy_explicit_memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_admission_control_slot_policy_use_explicit_size_input`<sup>Optional</sup> <a name="ha_admission_control_slot_policy_use_explicit_size_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSizeInput"></a>

```python
ha_admission_control_slot_policy_use_explicit_size_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ha_advanced_options_input`<sup>Optional</sup> <a name="ha_advanced_options_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptionsInput"></a>

```python
ha_advanced_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ha_datastore_apd_recovery_action_input`<sup>Optional</sup> <a name="ha_datastore_apd_recovery_action_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryActionInput"></a>

```python
ha_datastore_apd_recovery_action_input: str
```

- *Type:* str

---

##### `ha_datastore_apd_response_delay_input`<sup>Optional</sup> <a name="ha_datastore_apd_response_delay_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelayInput"></a>

```python
ha_datastore_apd_response_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_datastore_apd_response_input`<sup>Optional</sup> <a name="ha_datastore_apd_response_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseInput"></a>

```python
ha_datastore_apd_response_input: str
```

- *Type:* str

---

##### `ha_datastore_pdl_response_input`<sup>Optional</sup> <a name="ha_datastore_pdl_response_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponseInput"></a>

```python
ha_datastore_pdl_response_input: str
```

- *Type:* str

---

##### `ha_enabled_input`<sup>Optional</sup> <a name="ha_enabled_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabledInput"></a>

```python
ha_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ha_heartbeat_datastore_ids_input`<sup>Optional</sup> <a name="ha_heartbeat_datastore_ids_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIdsInput"></a>

```python
ha_heartbeat_datastore_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ha_heartbeat_datastore_policy_input`<sup>Optional</sup> <a name="ha_heartbeat_datastore_policy_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicyInput"></a>

```python
ha_heartbeat_datastore_policy_input: str
```

- *Type:* str

---

##### `ha_host_isolation_response_input`<sup>Optional</sup> <a name="ha_host_isolation_response_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponseInput"></a>

```python
ha_host_isolation_response_input: str
```

- *Type:* str

---

##### `ha_host_monitoring_input`<sup>Optional</sup> <a name="ha_host_monitoring_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoringInput"></a>

```python
ha_host_monitoring_input: str
```

- *Type:* str

---

##### `ha_vm_component_protection_input`<sup>Optional</sup> <a name="ha_vm_component_protection_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtectionInput"></a>

```python
ha_vm_component_protection_input: str
```

- *Type:* str

---

##### `ha_vm_dependency_restart_condition_input`<sup>Optional</sup> <a name="ha_vm_dependency_restart_condition_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartConditionInput"></a>

```python
ha_vm_dependency_restart_condition_input: str
```

- *Type:* str

---

##### `ha_vm_failure_interval_input`<sup>Optional</sup> <a name="ha_vm_failure_interval_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureIntervalInput"></a>

```python
ha_vm_failure_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_maximum_failure_window_input`<sup>Optional</sup> <a name="ha_vm_maximum_failure_window_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindowInput"></a>

```python
ha_vm_maximum_failure_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_maximum_resets_input`<sup>Optional</sup> <a name="ha_vm_maximum_resets_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResetsInput"></a>

```python
ha_vm_maximum_resets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_minimum_uptime_input`<sup>Optional</sup> <a name="ha_vm_minimum_uptime_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptimeInput"></a>

```python
ha_vm_minimum_uptime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_monitoring_input`<sup>Optional</sup> <a name="ha_vm_monitoring_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoringInput"></a>

```python
ha_vm_monitoring_input: str
```

- *Type:* str

---

##### `ha_vm_restart_additional_delay_input`<sup>Optional</sup> <a name="ha_vm_restart_additional_delay_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelayInput"></a>

```python
ha_vm_restart_additional_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_restart_priority_input`<sup>Optional</sup> <a name="ha_vm_restart_priority_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriorityInput"></a>

```python
ha_vm_restart_priority_input: str
```

- *Type:* str

---

##### `ha_vm_restart_timeout_input`<sup>Optional</sup> <a name="ha_vm_restart_timeout_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeoutInput"></a>

```python
ha_vm_restart_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_cluster_exit_timeout_input`<sup>Optional</sup> <a name="host_cluster_exit_timeout_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeoutInput"></a>

```python
host_cluster_exit_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_image_input`<sup>Optional</sup> <a name="host_image_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImageInput"></a>

```python
host_image_input: ComputeClusterHostImage
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

---

##### `host_managed_input`<sup>Optional</sup> <a name="host_managed_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManagedInput"></a>

```python
host_managed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_system_ids_input`<sup>Optional</sup> <a name="host_system_ids_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIdsInput"></a>

```python
host_system_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `proactive_ha_automation_level_input`<sup>Optional</sup> <a name="proactive_ha_automation_level_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevelInput"></a>

```python
proactive_ha_automation_level_input: str
```

- *Type:* str

---

##### `proactive_ha_enabled_input`<sup>Optional</sup> <a name="proactive_ha_enabled_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabledInput"></a>

```python
proactive_ha_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proactive_ha_moderate_remediation_input`<sup>Optional</sup> <a name="proactive_ha_moderate_remediation_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediationInput"></a>

```python
proactive_ha_moderate_remediation_input: str
```

- *Type:* str

---

##### `proactive_ha_provider_ids_input`<sup>Optional</sup> <a name="proactive_ha_provider_ids_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIdsInput"></a>

```python
proactive_ha_provider_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `proactive_ha_severe_remediation_input`<sup>Optional</sup> <a name="proactive_ha_severe_remediation_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediationInput"></a>

```python
proactive_ha_severe_remediation_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vsan_compression_enabled_input`<sup>Optional</sup> <a name="vsan_compression_enabled_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabledInput"></a>

```python
vsan_compression_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_dedup_enabled_input`<sup>Optional</sup> <a name="vsan_dedup_enabled_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabledInput"></a>

```python
vsan_dedup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_disk_group_input`<sup>Optional</sup> <a name="vsan_disk_group_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroupInput"></a>

```python
vsan_disk_group_input: typing.Union[IResolvable, typing.List[ComputeClusterVsanDiskGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>]]

---

##### `vsan_dit_encryption_enabled_input`<sup>Optional</sup> <a name="vsan_dit_encryption_enabled_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabledInput"></a>

```python
vsan_dit_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_dit_rekey_interval_input`<sup>Optional</sup> <a name="vsan_dit_rekey_interval_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyIntervalInput"></a>

```python
vsan_dit_rekey_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vsan_enabled_input`<sup>Optional</sup> <a name="vsan_enabled_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabledInput"></a>

```python
vsan_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_esa_enabled_input`<sup>Optional</sup> <a name="vsan_esa_enabled_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabledInput"></a>

```python
vsan_esa_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_fault_domains_input`<sup>Optional</sup> <a name="vsan_fault_domains_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomainsInput"></a>

```python
vsan_fault_domains_input: typing.Union[IResolvable, typing.List[ComputeClusterVsanFaultDomains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>]]

---

##### `vsan_network_diagnostic_mode_enabled_input`<sup>Optional</sup> <a name="vsan_network_diagnostic_mode_enabled_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabledInput"></a>

```python
vsan_network_diagnostic_mode_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_performance_enabled_input`<sup>Optional</sup> <a name="vsan_performance_enabled_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabledInput"></a>

```python
vsan_performance_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_remote_datastore_ids_input`<sup>Optional</sup> <a name="vsan_remote_datastore_ids_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIdsInput"></a>

```python
vsan_remote_datastore_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vsan_stretched_cluster_input`<sup>Optional</sup> <a name="vsan_stretched_cluster_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedClusterInput"></a>

```python
vsan_stretched_cluster_input: ComputeClusterVsanStretchedCluster
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

---

##### `vsan_unmap_enabled_input`<sup>Optional</sup> <a name="vsan_unmap_enabled_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabledInput"></a>

```python
vsan_unmap_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_verbose_mode_enabled_input`<sup>Optional</sup> <a name="vsan_verbose_mode_enabled_input" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabledInput"></a>

```python
vsan_verbose_mode_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `dpm_automation_level`<sup>Required</sup> <a name="dpm_automation_level" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevel"></a>

```python
dpm_automation_level: str
```

- *Type:* str

---

##### `dpm_enabled`<sup>Required</sup> <a name="dpm_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabled"></a>

```python
dpm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dpm_threshold`<sup>Required</sup> <a name="dpm_threshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThreshold"></a>

```python
dpm_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `drs_advanced_options`<sup>Required</sup> <a name="drs_advanced_options" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptions"></a>

```python
drs_advanced_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `drs_automation_level`<sup>Required</sup> <a name="drs_automation_level" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevel"></a>

```python
drs_automation_level: str
```

- *Type:* str

---

##### `drs_enabled`<sup>Required</sup> <a name="drs_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabled"></a>

```python
drs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `drs_enable_predictive_drs`<sup>Required</sup> <a name="drs_enable_predictive_drs" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrs"></a>

```python
drs_enable_predictive_drs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `drs_enable_vm_overrides`<sup>Required</sup> <a name="drs_enable_vm_overrides" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverrides"></a>

```python
drs_enable_vm_overrides: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `drs_migration_threshold`<sup>Required</sup> <a name="drs_migration_threshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThreshold"></a>

```python
drs_migration_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `drs_scale_descendants_shares`<sup>Required</sup> <a name="drs_scale_descendants_shares" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsShares"></a>

```python
drs_scale_descendants_shares: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `force_evacuate_on_destroy`<sup>Required</sup> <a name="force_evacuate_on_destroy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroy"></a>

```python
force_evacuate_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ha_admission_control_failover_host_system_ids`<sup>Required</sup> <a name="ha_admission_control_failover_host_system_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIds"></a>

```python
ha_admission_control_failover_host_system_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ha_admission_control_host_failure_tolerance`<sup>Required</sup> <a name="ha_admission_control_host_failure_tolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureTolerance"></a>

```python
ha_admission_control_host_failure_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_admission_control_performance_tolerance`<sup>Required</sup> <a name="ha_admission_control_performance_tolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceTolerance"></a>

```python
ha_admission_control_performance_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_admission_control_policy`<sup>Required</sup> <a name="ha_admission_control_policy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicy"></a>

```python
ha_admission_control_policy: str
```

- *Type:* str

---

##### `ha_admission_control_resource_percentage_auto_compute`<sup>Required</sup> <a name="ha_admission_control_resource_percentage_auto_compute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoCompute"></a>

```python
ha_admission_control_resource_percentage_auto_compute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ha_admission_control_resource_percentage_cpu`<sup>Required</sup> <a name="ha_admission_control_resource_percentage_cpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpu"></a>

```python
ha_admission_control_resource_percentage_cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_admission_control_resource_percentage_memory`<sup>Required</sup> <a name="ha_admission_control_resource_percentage_memory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemory"></a>

```python
ha_admission_control_resource_percentage_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_admission_control_slot_policy_explicit_cpu`<sup>Required</sup> <a name="ha_admission_control_slot_policy_explicit_cpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpu"></a>

```python
ha_admission_control_slot_policy_explicit_cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_admission_control_slot_policy_explicit_memory`<sup>Required</sup> <a name="ha_admission_control_slot_policy_explicit_memory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemory"></a>

```python
ha_admission_control_slot_policy_explicit_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_admission_control_slot_policy_use_explicit_size`<sup>Required</sup> <a name="ha_admission_control_slot_policy_use_explicit_size" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSize"></a>

```python
ha_admission_control_slot_policy_use_explicit_size: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ha_advanced_options`<sup>Required</sup> <a name="ha_advanced_options" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptions"></a>

```python
ha_advanced_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ha_datastore_apd_recovery_action`<sup>Required</sup> <a name="ha_datastore_apd_recovery_action" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryAction"></a>

```python
ha_datastore_apd_recovery_action: str
```

- *Type:* str

---

##### `ha_datastore_apd_response`<sup>Required</sup> <a name="ha_datastore_apd_response" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponse"></a>

```python
ha_datastore_apd_response: str
```

- *Type:* str

---

##### `ha_datastore_apd_response_delay`<sup>Required</sup> <a name="ha_datastore_apd_response_delay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelay"></a>

```python
ha_datastore_apd_response_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_datastore_pdl_response`<sup>Required</sup> <a name="ha_datastore_pdl_response" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponse"></a>

```python
ha_datastore_pdl_response: str
```

- *Type:* str

---

##### `ha_enabled`<sup>Required</sup> <a name="ha_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabled"></a>

```python
ha_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ha_heartbeat_datastore_ids`<sup>Required</sup> <a name="ha_heartbeat_datastore_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIds"></a>

```python
ha_heartbeat_datastore_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ha_heartbeat_datastore_policy`<sup>Required</sup> <a name="ha_heartbeat_datastore_policy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicy"></a>

```python
ha_heartbeat_datastore_policy: str
```

- *Type:* str

---

##### `ha_host_isolation_response`<sup>Required</sup> <a name="ha_host_isolation_response" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponse"></a>

```python
ha_host_isolation_response: str
```

- *Type:* str

---

##### `ha_host_monitoring`<sup>Required</sup> <a name="ha_host_monitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoring"></a>

```python
ha_host_monitoring: str
```

- *Type:* str

---

##### `ha_vm_component_protection`<sup>Required</sup> <a name="ha_vm_component_protection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtection"></a>

```python
ha_vm_component_protection: str
```

- *Type:* str

---

##### `ha_vm_dependency_restart_condition`<sup>Required</sup> <a name="ha_vm_dependency_restart_condition" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartCondition"></a>

```python
ha_vm_dependency_restart_condition: str
```

- *Type:* str

---

##### `ha_vm_failure_interval`<sup>Required</sup> <a name="ha_vm_failure_interval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureInterval"></a>

```python
ha_vm_failure_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_maximum_failure_window`<sup>Required</sup> <a name="ha_vm_maximum_failure_window" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindow"></a>

```python
ha_vm_maximum_failure_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_maximum_resets`<sup>Required</sup> <a name="ha_vm_maximum_resets" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResets"></a>

```python
ha_vm_maximum_resets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_minimum_uptime`<sup>Required</sup> <a name="ha_vm_minimum_uptime" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptime"></a>

```python
ha_vm_minimum_uptime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_monitoring`<sup>Required</sup> <a name="ha_vm_monitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoring"></a>

```python
ha_vm_monitoring: str
```

- *Type:* str

---

##### `ha_vm_restart_additional_delay`<sup>Required</sup> <a name="ha_vm_restart_additional_delay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelay"></a>

```python
ha_vm_restart_additional_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_restart_priority`<sup>Required</sup> <a name="ha_vm_restart_priority" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriority"></a>

```python
ha_vm_restart_priority: str
```

- *Type:* str

---

##### `ha_vm_restart_timeout`<sup>Required</sup> <a name="ha_vm_restart_timeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeout"></a>

```python
ha_vm_restart_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_cluster_exit_timeout`<sup>Required</sup> <a name="host_cluster_exit_timeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeout"></a>

```python
host_cluster_exit_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_managed`<sup>Required</sup> <a name="host_managed" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManaged"></a>

```python
host_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_system_ids`<sup>Required</sup> <a name="host_system_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIds"></a>

```python
host_system_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `proactive_ha_automation_level`<sup>Required</sup> <a name="proactive_ha_automation_level" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevel"></a>

```python
proactive_ha_automation_level: str
```

- *Type:* str

---

##### `proactive_ha_enabled`<sup>Required</sup> <a name="proactive_ha_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabled"></a>

```python
proactive_ha_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proactive_ha_moderate_remediation`<sup>Required</sup> <a name="proactive_ha_moderate_remediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediation"></a>

```python
proactive_ha_moderate_remediation: str
```

- *Type:* str

---

##### `proactive_ha_provider_ids`<sup>Required</sup> <a name="proactive_ha_provider_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIds"></a>

```python
proactive_ha_provider_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `proactive_ha_severe_remediation`<sup>Required</sup> <a name="proactive_ha_severe_remediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediation"></a>

```python
proactive_ha_severe_remediation: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vsan_compression_enabled`<sup>Required</sup> <a name="vsan_compression_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabled"></a>

```python
vsan_compression_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_dedup_enabled`<sup>Required</sup> <a name="vsan_dedup_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabled"></a>

```python
vsan_dedup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_dit_encryption_enabled`<sup>Required</sup> <a name="vsan_dit_encryption_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabled"></a>

```python
vsan_dit_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_dit_rekey_interval`<sup>Required</sup> <a name="vsan_dit_rekey_interval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyInterval"></a>

```python
vsan_dit_rekey_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vsan_enabled`<sup>Required</sup> <a name="vsan_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabled"></a>

```python
vsan_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_esa_enabled`<sup>Required</sup> <a name="vsan_esa_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabled"></a>

```python
vsan_esa_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_network_diagnostic_mode_enabled`<sup>Required</sup> <a name="vsan_network_diagnostic_mode_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabled"></a>

```python
vsan_network_diagnostic_mode_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_performance_enabled`<sup>Required</sup> <a name="vsan_performance_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabled"></a>

```python
vsan_performance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_remote_datastore_ids`<sup>Required</sup> <a name="vsan_remote_datastore_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIds"></a>

```python
vsan_remote_datastore_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vsan_unmap_enabled`<sup>Required</sup> <a name="vsan_unmap_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabled"></a>

```python
vsan_unmap_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsan_verbose_mode_enabled`<sup>Required</sup> <a name="vsan_verbose_mode_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabled"></a>

```python
vsan_verbose_mode_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterConfig <a name="ComputeClusterConfig" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  name: str,
  custom_attributes: typing.Mapping[str] = None,
  dpm_automation_level: str = None,
  dpm_enabled: typing.Union[bool, IResolvable] = None,
  dpm_threshold: typing.Union[int, float] = None,
  drs_advanced_options: typing.Mapping[str] = None,
  drs_automation_level: str = None,
  drs_enabled: typing.Union[bool, IResolvable] = None,
  drs_enable_predictive_drs: typing.Union[bool, IResolvable] = None,
  drs_enable_vm_overrides: typing.Union[bool, IResolvable] = None,
  drs_migration_threshold: typing.Union[int, float] = None,
  drs_scale_descendants_shares: str = None,
  folder: str = None,
  force_evacuate_on_destroy: typing.Union[bool, IResolvable] = None,
  ha_admission_control_failover_host_system_ids: typing.List[str] = None,
  ha_admission_control_host_failure_tolerance: typing.Union[int, float] = None,
  ha_admission_control_performance_tolerance: typing.Union[int, float] = None,
  ha_admission_control_policy: str = None,
  ha_admission_control_resource_percentage_auto_compute: typing.Union[bool, IResolvable] = None,
  ha_admission_control_resource_percentage_cpu: typing.Union[int, float] = None,
  ha_admission_control_resource_percentage_memory: typing.Union[int, float] = None,
  ha_admission_control_slot_policy_explicit_cpu: typing.Union[int, float] = None,
  ha_admission_control_slot_policy_explicit_memory: typing.Union[int, float] = None,
  ha_admission_control_slot_policy_use_explicit_size: typing.Union[bool, IResolvable] = None,
  ha_advanced_options: typing.Mapping[str] = None,
  ha_datastore_apd_recovery_action: str = None,
  ha_datastore_apd_response: str = None,
  ha_datastore_apd_response_delay: typing.Union[int, float] = None,
  ha_datastore_pdl_response: str = None,
  ha_enabled: typing.Union[bool, IResolvable] = None,
  ha_heartbeat_datastore_ids: typing.List[str] = None,
  ha_heartbeat_datastore_policy: str = None,
  ha_host_isolation_response: str = None,
  ha_host_monitoring: str = None,
  ha_vm_component_protection: str = None,
  ha_vm_dependency_restart_condition: str = None,
  ha_vm_failure_interval: typing.Union[int, float] = None,
  ha_vm_maximum_failure_window: typing.Union[int, float] = None,
  ha_vm_maximum_resets: typing.Union[int, float] = None,
  ha_vm_minimum_uptime: typing.Union[int, float] = None,
  ha_vm_monitoring: str = None,
  ha_vm_restart_additional_delay: typing.Union[int, float] = None,
  ha_vm_restart_priority: str = None,
  ha_vm_restart_timeout: typing.Union[int, float] = None,
  host_cluster_exit_timeout: typing.Union[int, float] = None,
  host_image: ComputeClusterHostImage = None,
  host_managed: typing.Union[bool, IResolvable] = None,
  host_system_ids: typing.List[str] = None,
  id: str = None,
  proactive_ha_automation_level: str = None,
  proactive_ha_enabled: typing.Union[bool, IResolvable] = None,
  proactive_ha_moderate_remediation: str = None,
  proactive_ha_provider_ids: typing.List[str] = None,
  proactive_ha_severe_remediation: str = None,
  tags: typing.List[str] = None,
  vsan_compression_enabled: typing.Union[bool, IResolvable] = None,
  vsan_dedup_enabled: typing.Union[bool, IResolvable] = None,
  vsan_disk_group: typing.Union[IResolvable, typing.List[ComputeClusterVsanDiskGroup]] = None,
  vsan_dit_encryption_enabled: typing.Union[bool, IResolvable] = None,
  vsan_dit_rekey_interval: typing.Union[int, float] = None,
  vsan_enabled: typing.Union[bool, IResolvable] = None,
  vsan_esa_enabled: typing.Union[bool, IResolvable] = None,
  vsan_fault_domains: typing.Union[IResolvable, typing.List[ComputeClusterVsanFaultDomains]] = None,
  vsan_network_diagnostic_mode_enabled: typing.Union[bool, IResolvable] = None,
  vsan_performance_enabled: typing.Union[bool, IResolvable] = None,
  vsan_remote_datastore_ids: typing.List[str] = None,
  vsan_stretched_cluster: ComputeClusterVsanStretchedCluster = None,
  vsan_unmap_enabled: typing.Union[bool, IResolvable] = None,
  vsan_verbose_mode_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | The managed object ID of the datacenter to put the cluster in. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.name">name</a></code> | <code>str</code> | Name for the new cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmAutomationLevel">dpm_automation_level</a></code> | <code>str</code> | The automation level for host power operations in this cluster. Can be one of manual or automated. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmEnabled">dpm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable DPM support for DRS. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmThreshold">dpm_threshold</a></code> | <code>typing.Union[int, float]</code> | A value between 1 and 5 indicating the threshold of load within the cluster that influences host power operations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAdvancedOptions">drs_advanced_options</a></code> | <code>typing.Mapping[str]</code> | Advanced configuration options for DRS and DPM. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAutomationLevel">drs_automation_level</a></code> | <code>str</code> | The default automation level for all virtual machines in this cluster. Can be one of manual, partiallyAutomated, or fullyAutomated. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnabled">drs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable DRS for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnablePredictiveDrs">drs_enable_predictive_drs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, enables DRS to use data from vRealize Operations Manager to make proactive DRS recommendations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnableVmOverrides">drs_enable_vm_overrides</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, allows individual VM overrides within this cluster to be set. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsMigrationThreshold">drs_migration_threshold</a></code> | <code>typing.Union[int, float]</code> | A value between 1 and 5 indicating the threshold of imbalance tolerated between hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsScaleDescendantsShares">drs_scale_descendants_shares</a></code> | <code>str</code> | Enable scalable shares for all descendants of this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.folder">folder</a></code> | <code>str</code> | The name of the folder to locate the cluster in. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forceEvacuateOnDestroy">force_evacuate_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force removal of all hosts in the cluster during destroy and make them standalone hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlFailoverHostSystemIds">ha_admission_control_failover_host_system_ids</a></code> | <code>typing.List[str]</code> | When ha_admission_control_policy is failoverHosts, this defines the managed object IDs of hosts to use as dedicated failover hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlHostFailureTolerance">ha_admission_control_host_failure_tolerance</a></code> | <code>typing.Union[int, float]</code> | The maximum number of failed hosts that admission control tolerates when making decisions on whether to permit virtual machine operations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPerformanceTolerance">ha_admission_control_performance_tolerance</a></code> | <code>typing.Union[int, float]</code> | The percentage of resource reduction that a cluster of VMs can tolerate in case of a failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPolicy">ha_admission_control_policy</a></code> | <code>str</code> | The type of admission control policy to use with vSphere HA, which controls whether or not specific VM operations are permitted in the cluster in order to protect the reliability of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageAutoCompute">ha_admission_control_resource_percentage_auto_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When ha_admission_control_policy is resourcePercentage, automatically determine available resource percentages by subtracting the average number of host resources represented by the ha_admission_control_host_failure_tolerance setting from the total amount of resources in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageCpu">ha_admission_control_resource_percentage_cpu</a></code> | <code>typing.Union[int, float]</code> | When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of CPU resources in the cluster to reserve for failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageMemory">ha_admission_control_resource_percentage_memory</a></code> | <code>typing.Union[int, float]</code> | When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of memory resources in the cluster to reserve for failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitCpu">ha_admission_control_slot_policy_explicit_cpu</a></code> | <code>typing.Union[int, float]</code> | When ha_admission_control_policy is slotPolicy, this controls the user-defined CPU slot size, in MHz. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitMemory">ha_admission_control_slot_policy_explicit_memory</a></code> | <code>typing.Union[int, float]</code> | When ha_admission_control_policy is slotPolicy, this controls the user-defined memory slot size, in MB. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyUseExplicitSize">ha_admission_control_slot_policy_use_explicit_size</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When ha_admission_control_policy is slotPolicy, this setting controls whether or not you wish to supply explicit values to CPU and memory slot sizes. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdvancedOptions">ha_advanced_options</a></code> | <code>typing.Mapping[str]</code> | Advanced configuration options for vSphere HA. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdRecoveryAction">ha_datastore_apd_recovery_action</a></code> | <code>str</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines if an APD status on an affected datastore clears in the middle of an APD event. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponse">ha_datastore_apd_response</a></code> | <code>str</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected loss to all paths to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponseDelay">ha_datastore_apd_response_delay</a></code> | <code>typing.Union[int, float]</code> | When ha_vm_component_protection is enabled, controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastorePdlResponse">ha_datastore_pdl_response</a></code> | <code>str</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected a permanent device loss to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haEnabled">ha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable vSphere HA for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastoreIds">ha_heartbeat_datastore_ids</a></code> | <code>typing.List[str]</code> | The list of managed object IDs for preferred datastores to use for HA heartbeating. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastorePolicy">ha_heartbeat_datastore_policy</a></code> | <code>str</code> | The selection policy for HA heartbeat datastores. Can be one of allFeasibleDs, userSelectedDs, or allFeasibleDsWithUserPreference. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostIsolationResponse">ha_host_isolation_response</a></code> | <code>str</code> | The action to take on virtual machines when a host has detected that it has been isolated from the rest of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostMonitoring">ha_host_monitoring</a></code> | <code>str</code> | Global setting that controls whether vSphere HA remediates VMs on host failure. Can be one of enabled or disabled. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmComponentProtection">ha_vm_component_protection</a></code> | <code>str</code> | Controls vSphere VM component protection for virtual machines in this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmDependencyRestartCondition">ha_vm_dependency_restart_condition</a></code> | <code>str</code> | The condition used to determine whether or not VMs in a certain restart priority class are online, allowing HA to move on to restarting VMs on the next priority. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmFailureInterval">ha_vm_failure_interval</a></code> | <code>typing.Union[int, float]</code> | If a heartbeat from a virtual machine is not received within this configured interval, the virtual machine is marked as failed. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumFailureWindow">ha_vm_maximum_failure_window</a></code> | <code>typing.Union[int, float]</code> | The length of the reset window in which ha_vm_maximum_resets can operate. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumResets">ha_vm_maximum_resets</a></code> | <code>typing.Union[int, float]</code> | The maximum number of resets that HA will perform to a virtual machine when responding to a failure event. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMinimumUptime">ha_vm_minimum_uptime</a></code> | <code>typing.Union[int, float]</code> | The time, in seconds, that HA waits after powering on a virtual machine before monitoring for heartbeats. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMonitoring">ha_vm_monitoring</a></code> | <code>str</code> | The type of virtual machine monitoring to use when HA is enabled in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartAdditionalDelay">ha_vm_restart_additional_delay</a></code> | <code>typing.Union[int, float]</code> | Additional delay in seconds after ready condition is met. A VM is considered ready at this point. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartPriority">ha_vm_restart_priority</a></code> | <code>str</code> | The default restart priority for affected VMs when vSphere detects a host failure. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartTimeout">ha_vm_restart_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time, in seconds, that vSphere HA will wait for virtual machines in one priority to be ready before proceeding with the next priority. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostClusterExitTimeout">host_cluster_exit_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout for each host maintenance mode operation when removing hosts from a cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostImage">host_image</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | host_image block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostManaged">host_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Must be set if cluster enrollment is managed from host resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostSystemIds">host_system_ids</a></code> | <code>typing.List[str]</code> | The managed object IDs of the hosts to put in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#id ComputeCluster#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaAutomationLevel">proactive_ha_automation_level</a></code> | <code>str</code> | The DRS behavior for proactive HA recommendations. Can be one of Automated or Manual. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaEnabled">proactive_ha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables proactive HA, allowing for vSphere to get HA data from external providers and use DRS to perform remediation. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaModerateRemediation">proactive_ha_moderate_remediation</a></code> | <code>str</code> | The configured remediation for moderately degraded hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaProviderIds">proactive_ha_provider_ids</a></code> | <code>typing.List[str]</code> | The list of IDs for health update providers configured for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaSevereRemediation">proactive_ha_severe_remediation</a></code> | <code>str</code> | The configured remediation for severely degraded hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanCompressionEnabled">vsan_compression_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN compression service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDedupEnabled">vsan_dedup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN deduplication service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDiskGroup">vsan_disk_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>]]</code> | vsan_disk_group block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitEncryptionEnabled">vsan_dit_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN data-in-transit encryption is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitRekeyInterval">vsan_dit_rekey_interval</a></code> | <code>typing.Union[int, float]</code> | When vsan_dit_encryption_enabled is enabled, sets the rekey interval of data-in-transit encryption (in minutes). |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEnabled">vsan_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEsaEnabled">vsan_esa_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN ESA service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanFaultDomains">vsan_fault_domains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>]]</code> | vsan_fault_domains block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanNetworkDiagnosticModeEnabled">vsan_network_diagnostic_mode_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN network diagnostic mode is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanPerformanceEnabled">vsan_performance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN performance service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanRemoteDatastoreIds">vsan_remote_datastore_ids</a></code> | <code>typing.List[str]</code> | The managed object IDs of the vSAN datastore to be mounted on the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanStretchedCluster">vsan_stretched_cluster</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | vsan_stretched_cluster block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanUnmapEnabled">vsan_unmap_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN unmap service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanVerboseModeEnabled">vsan_verbose_mode_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the vSAN verbose mode is enabled for the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

The managed object ID of the datacenter to put the cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#datacenter_id ComputeCluster#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name for the new cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#name ComputeCluster#name}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#custom_attributes ComputeCluster#custom_attributes}

---

##### `dpm_automation_level`<sup>Optional</sup> <a name="dpm_automation_level" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmAutomationLevel"></a>

```python
dpm_automation_level: str
```

- *Type:* str

The automation level for host power operations in this cluster. Can be one of manual or automated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#dpm_automation_level ComputeCluster#dpm_automation_level}

---

##### `dpm_enabled`<sup>Optional</sup> <a name="dpm_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmEnabled"></a>

```python
dpm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable DPM support for DRS.

This allows you to dynamically control the power of hosts depending on the needs of virtual machines in the cluster. Requires that DRS be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#dpm_enabled ComputeCluster#dpm_enabled}

---

##### `dpm_threshold`<sup>Optional</sup> <a name="dpm_threshold" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmThreshold"></a>

```python
dpm_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A value between 1 and 5 indicating the threshold of load within the cluster that influences host power operations.

This affects both power on and power off operations - a lower setting will tolerate more of a surplus/deficit than a higher setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#dpm_threshold ComputeCluster#dpm_threshold}

---

##### `drs_advanced_options`<sup>Optional</sup> <a name="drs_advanced_options" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAdvancedOptions"></a>

```python
drs_advanced_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Advanced configuration options for DRS and DPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_advanced_options ComputeCluster#drs_advanced_options}

---

##### `drs_automation_level`<sup>Optional</sup> <a name="drs_automation_level" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAutomationLevel"></a>

```python
drs_automation_level: str
```

- *Type:* str

The default automation level for all virtual machines in this cluster. Can be one of manual, partiallyAutomated, or fullyAutomated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_automation_level ComputeCluster#drs_automation_level}

---

##### `drs_enabled`<sup>Optional</sup> <a name="drs_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnabled"></a>

```python
drs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable DRS for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_enabled ComputeCluster#drs_enabled}

---

##### `drs_enable_predictive_drs`<sup>Optional</sup> <a name="drs_enable_predictive_drs" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnablePredictiveDrs"></a>

```python
drs_enable_predictive_drs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, enables DRS to use data from vRealize Operations Manager to make proactive DRS recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_enable_predictive_drs ComputeCluster#drs_enable_predictive_drs}

---

##### `drs_enable_vm_overrides`<sup>Optional</sup> <a name="drs_enable_vm_overrides" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnableVmOverrides"></a>

```python
drs_enable_vm_overrides: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, allows individual VM overrides within this cluster to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_enable_vm_overrides ComputeCluster#drs_enable_vm_overrides}

---

##### `drs_migration_threshold`<sup>Optional</sup> <a name="drs_migration_threshold" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsMigrationThreshold"></a>

```python
drs_migration_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A value between 1 and 5 indicating the threshold of imbalance tolerated between hosts.

A lower setting will tolerate more imbalance while a higher setting will tolerate less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_migration_threshold ComputeCluster#drs_migration_threshold}

---

##### `drs_scale_descendants_shares`<sup>Optional</sup> <a name="drs_scale_descendants_shares" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsScaleDescendantsShares"></a>

```python
drs_scale_descendants_shares: str
```

- *Type:* str

Enable scalable shares for all descendants of this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#drs_scale_descendants_shares ComputeCluster#drs_scale_descendants_shares}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The name of the folder to locate the cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#folder ComputeCluster#folder}

---

##### `force_evacuate_on_destroy`<sup>Optional</sup> <a name="force_evacuate_on_destroy" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forceEvacuateOnDestroy"></a>

```python
force_evacuate_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force removal of all hosts in the cluster during destroy and make them standalone hosts.

Use of this flag mainly exists for testing and is not recommended in normal use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#force_evacuate_on_destroy ComputeCluster#force_evacuate_on_destroy}

---

##### `ha_admission_control_failover_host_system_ids`<sup>Optional</sup> <a name="ha_admission_control_failover_host_system_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlFailoverHostSystemIds"></a>

```python
ha_admission_control_failover_host_system_ids: typing.List[str]
```

- *Type:* typing.List[str]

When ha_admission_control_policy is failoverHosts, this defines the managed object IDs of hosts to use as dedicated failover hosts.

These hosts are kept as available as possible - admission control will block access to the host, and DRS will ignore the host when making recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_failover_host_system_ids ComputeCluster#ha_admission_control_failover_host_system_ids}

---

##### `ha_admission_control_host_failure_tolerance`<sup>Optional</sup> <a name="ha_admission_control_host_failure_tolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlHostFailureTolerance"></a>

```python
ha_admission_control_host_failure_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of failed hosts that admission control tolerates when making decisions on whether to permit virtual machine operations.

The maximum is one less than the number of hosts in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_host_failure_tolerance ComputeCluster#ha_admission_control_host_failure_tolerance}

---

##### `ha_admission_control_performance_tolerance`<sup>Optional</sup> <a name="ha_admission_control_performance_tolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPerformanceTolerance"></a>

```python
ha_admission_control_performance_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of resource reduction that a cluster of VMs can tolerate in case of a failover.

A value of 0 produces warnings only, whereas a value of 100 disables the setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_performance_tolerance ComputeCluster#ha_admission_control_performance_tolerance}

---

##### `ha_admission_control_policy`<sup>Optional</sup> <a name="ha_admission_control_policy" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPolicy"></a>

```python
ha_admission_control_policy: str
```

- *Type:* str

The type of admission control policy to use with vSphere HA, which controls whether or not specific VM operations are permitted in the cluster in order to protect the reliability of the cluster.

Can be one of resourcePercentage, slotPolicy, failoverHosts, or disabled. Note that disabling admission control is not recommended and can lead to service issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_policy ComputeCluster#ha_admission_control_policy}

---

##### `ha_admission_control_resource_percentage_auto_compute`<sup>Optional</sup> <a name="ha_admission_control_resource_percentage_auto_compute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageAutoCompute"></a>

```python
ha_admission_control_resource_percentage_auto_compute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When ha_admission_control_policy is resourcePercentage, automatically determine available resource percentages by subtracting the average number of host resources represented by the ha_admission_control_host_failure_tolerance setting from the total amount of resources in the cluster.

Disable to supply user-defined values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_resource_percentage_auto_compute ComputeCluster#ha_admission_control_resource_percentage_auto_compute}

---

##### `ha_admission_control_resource_percentage_cpu`<sup>Optional</sup> <a name="ha_admission_control_resource_percentage_cpu" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageCpu"></a>

```python
ha_admission_control_resource_percentage_cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of CPU resources in the cluster to reserve for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_resource_percentage_cpu ComputeCluster#ha_admission_control_resource_percentage_cpu}

---

##### `ha_admission_control_resource_percentage_memory`<sup>Optional</sup> <a name="ha_admission_control_resource_percentage_memory" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageMemory"></a>

```python
ha_admission_control_resource_percentage_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of memory resources in the cluster to reserve for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_resource_percentage_memory ComputeCluster#ha_admission_control_resource_percentage_memory}

---

##### `ha_admission_control_slot_policy_explicit_cpu`<sup>Optional</sup> <a name="ha_admission_control_slot_policy_explicit_cpu" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitCpu"></a>

```python
ha_admission_control_slot_policy_explicit_cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When ha_admission_control_policy is slotPolicy, this controls the user-defined CPU slot size, in MHz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_cpu ComputeCluster#ha_admission_control_slot_policy_explicit_cpu}

---

##### `ha_admission_control_slot_policy_explicit_memory`<sup>Optional</sup> <a name="ha_admission_control_slot_policy_explicit_memory" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitMemory"></a>

```python
ha_admission_control_slot_policy_explicit_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When ha_admission_control_policy is slotPolicy, this controls the user-defined memory slot size, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_memory ComputeCluster#ha_admission_control_slot_policy_explicit_memory}

---

##### `ha_admission_control_slot_policy_use_explicit_size`<sup>Optional</sup> <a name="ha_admission_control_slot_policy_use_explicit_size" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyUseExplicitSize"></a>

```python
ha_admission_control_slot_policy_use_explicit_size: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When ha_admission_control_policy is slotPolicy, this setting controls whether or not you wish to supply explicit values to CPU and memory slot sizes.

The default is to gather a automatic average based on all powered-on virtual machines currently in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_admission_control_slot_policy_use_explicit_size ComputeCluster#ha_admission_control_slot_policy_use_explicit_size}

---

##### `ha_advanced_options`<sup>Optional</sup> <a name="ha_advanced_options" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdvancedOptions"></a>

```python
ha_advanced_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Advanced configuration options for vSphere HA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_advanced_options ComputeCluster#ha_advanced_options}

---

##### `ha_datastore_apd_recovery_action`<sup>Optional</sup> <a name="ha_datastore_apd_recovery_action" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdRecoveryAction"></a>

```python
ha_datastore_apd_recovery_action: str
```

- *Type:* str

When ha_vm_component_protection is enabled, controls the action to take on virtual machines if an APD status on an affected datastore clears in the middle of an APD event.

Can be one of none or reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_datastore_apd_recovery_action ComputeCluster#ha_datastore_apd_recovery_action}

---

##### `ha_datastore_apd_response`<sup>Optional</sup> <a name="ha_datastore_apd_response" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponse"></a>

```python
ha_datastore_apd_response: str
```

- *Type:* str

When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected loss to all paths to a relevant datastore.

Can be one of disabled, warning, restartConservative, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_datastore_apd_response ComputeCluster#ha_datastore_apd_response}

---

##### `ha_datastore_apd_response_delay`<sup>Optional</sup> <a name="ha_datastore_apd_response_delay" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponseDelay"></a>

```python
ha_datastore_apd_response_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When ha_vm_component_protection is enabled, controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_datastore_apd_response_delay ComputeCluster#ha_datastore_apd_response_delay}

---

##### `ha_datastore_pdl_response`<sup>Optional</sup> <a name="ha_datastore_pdl_response" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastorePdlResponse"></a>

```python
ha_datastore_pdl_response: str
```

- *Type:* str

When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected a permanent device loss to a relevant datastore.

Can be one of disabled, warning, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_datastore_pdl_response ComputeCluster#ha_datastore_pdl_response}

---

##### `ha_enabled`<sup>Optional</sup> <a name="ha_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haEnabled"></a>

```python
ha_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable vSphere HA for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_enabled ComputeCluster#ha_enabled}

---

##### `ha_heartbeat_datastore_ids`<sup>Optional</sup> <a name="ha_heartbeat_datastore_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastoreIds"></a>

```python
ha_heartbeat_datastore_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of managed object IDs for preferred datastores to use for HA heartbeating.

This setting is only useful when ha_heartbeat_datastore_policy is set to either userSelectedDs or allFeasibleDsWithUserPreference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_heartbeat_datastore_ids ComputeCluster#ha_heartbeat_datastore_ids}

---

##### `ha_heartbeat_datastore_policy`<sup>Optional</sup> <a name="ha_heartbeat_datastore_policy" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastorePolicy"></a>

```python
ha_heartbeat_datastore_policy: str
```

- *Type:* str

The selection policy for HA heartbeat datastores. Can be one of allFeasibleDs, userSelectedDs, or allFeasibleDsWithUserPreference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_heartbeat_datastore_policy ComputeCluster#ha_heartbeat_datastore_policy}

---

##### `ha_host_isolation_response`<sup>Optional</sup> <a name="ha_host_isolation_response" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostIsolationResponse"></a>

```python
ha_host_isolation_response: str
```

- *Type:* str

The action to take on virtual machines when a host has detected that it has been isolated from the rest of the cluster.

Can be one of none, powerOff, or shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_host_isolation_response ComputeCluster#ha_host_isolation_response}

---

##### `ha_host_monitoring`<sup>Optional</sup> <a name="ha_host_monitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostMonitoring"></a>

```python
ha_host_monitoring: str
```

- *Type:* str

Global setting that controls whether vSphere HA remediates VMs on host failure. Can be one of enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_host_monitoring ComputeCluster#ha_host_monitoring}

---

##### `ha_vm_component_protection`<sup>Optional</sup> <a name="ha_vm_component_protection" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmComponentProtection"></a>

```python
ha_vm_component_protection: str
```

- *Type:* str

Controls vSphere VM component protection for virtual machines in this cluster.

This allows vSphere HA to react to failures between hosts and specific virtual machine components, such as datastores. Can be one of enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_component_protection ComputeCluster#ha_vm_component_protection}

---

##### `ha_vm_dependency_restart_condition`<sup>Optional</sup> <a name="ha_vm_dependency_restart_condition" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmDependencyRestartCondition"></a>

```python
ha_vm_dependency_restart_condition: str
```

- *Type:* str

The condition used to determine whether or not VMs in a certain restart priority class are online, allowing HA to move on to restarting VMs on the next priority.

Can be one of none, poweredOn, guestHbStatusGreen, or appHbStatusGreen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_dependency_restart_condition ComputeCluster#ha_vm_dependency_restart_condition}

---

##### `ha_vm_failure_interval`<sup>Optional</sup> <a name="ha_vm_failure_interval" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmFailureInterval"></a>

```python
ha_vm_failure_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a heartbeat from a virtual machine is not received within this configured interval, the virtual machine is marked as failed.

The value is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_failure_interval ComputeCluster#ha_vm_failure_interval}

---

##### `ha_vm_maximum_failure_window`<sup>Optional</sup> <a name="ha_vm_maximum_failure_window" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumFailureWindow"></a>

```python
ha_vm_maximum_failure_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of the reset window in which ha_vm_maximum_resets can operate.

When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_maximum_failure_window ComputeCluster#ha_vm_maximum_failure_window}

---

##### `ha_vm_maximum_resets`<sup>Optional</sup> <a name="ha_vm_maximum_resets" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumResets"></a>

```python
ha_vm_maximum_resets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of resets that HA will perform to a virtual machine when responding to a failure event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_maximum_resets ComputeCluster#ha_vm_maximum_resets}

---

##### `ha_vm_minimum_uptime`<sup>Optional</sup> <a name="ha_vm_minimum_uptime" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMinimumUptime"></a>

```python
ha_vm_minimum_uptime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time, in seconds, that HA waits after powering on a virtual machine before monitoring for heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_minimum_uptime ComputeCluster#ha_vm_minimum_uptime}

---

##### `ha_vm_monitoring`<sup>Optional</sup> <a name="ha_vm_monitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMonitoring"></a>

```python
ha_vm_monitoring: str
```

- *Type:* str

The type of virtual machine monitoring to use when HA is enabled in the cluster.

Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_monitoring ComputeCluster#ha_vm_monitoring}

---

##### `ha_vm_restart_additional_delay`<sup>Optional</sup> <a name="ha_vm_restart_additional_delay" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartAdditionalDelay"></a>

```python
ha_vm_restart_additional_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Additional delay in seconds after ready condition is met. A VM is considered ready at this point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_restart_additional_delay ComputeCluster#ha_vm_restart_additional_delay}

---

##### `ha_vm_restart_priority`<sup>Optional</sup> <a name="ha_vm_restart_priority" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartPriority"></a>

```python
ha_vm_restart_priority: str
```

- *Type:* str

The default restart priority for affected VMs when vSphere detects a host failure.

Can be one of lowest, low, medium, high, or highest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_restart_priority ComputeCluster#ha_vm_restart_priority}

---

##### `ha_vm_restart_timeout`<sup>Optional</sup> <a name="ha_vm_restart_timeout" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartTimeout"></a>

```python
ha_vm_restart_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time, in seconds, that vSphere HA will wait for virtual machines in one priority to be ready before proceeding with the next priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#ha_vm_restart_timeout ComputeCluster#ha_vm_restart_timeout}

---

##### `host_cluster_exit_timeout`<sup>Optional</sup> <a name="host_cluster_exit_timeout" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostClusterExitTimeout"></a>

```python
host_cluster_exit_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout for each host maintenance mode operation when removing hosts from a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#host_cluster_exit_timeout ComputeCluster#host_cluster_exit_timeout}

---

##### `host_image`<sup>Optional</sup> <a name="host_image" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostImage"></a>

```python
host_image: ComputeClusterHostImage
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

host_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#host_image ComputeCluster#host_image}

---

##### `host_managed`<sup>Optional</sup> <a name="host_managed" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostManaged"></a>

```python
host_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Must be set if cluster enrollment is managed from host resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#host_managed ComputeCluster#host_managed}

---

##### `host_system_ids`<sup>Optional</sup> <a name="host_system_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostSystemIds"></a>

```python
host_system_ids: typing.List[str]
```

- *Type:* typing.List[str]

The managed object IDs of the hosts to put in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#host_system_ids ComputeCluster#host_system_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#id ComputeCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `proactive_ha_automation_level`<sup>Optional</sup> <a name="proactive_ha_automation_level" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaAutomationLevel"></a>

```python
proactive_ha_automation_level: str
```

- *Type:* str

The DRS behavior for proactive HA recommendations. Can be one of Automated or Manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#proactive_ha_automation_level ComputeCluster#proactive_ha_automation_level}

---

##### `proactive_ha_enabled`<sup>Optional</sup> <a name="proactive_ha_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaEnabled"></a>

```python
proactive_ha_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables proactive HA, allowing for vSphere to get HA data from external providers and use DRS to perform remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#proactive_ha_enabled ComputeCluster#proactive_ha_enabled}

---

##### `proactive_ha_moderate_remediation`<sup>Optional</sup> <a name="proactive_ha_moderate_remediation" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaModerateRemediation"></a>

```python
proactive_ha_moderate_remediation: str
```

- *Type:* str

The configured remediation for moderately degraded hosts.

Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to MaintenanceMode when proactive_ha_severe_remediation is set to QuarantineMode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#proactive_ha_moderate_remediation ComputeCluster#proactive_ha_moderate_remediation}

---

##### `proactive_ha_provider_ids`<sup>Optional</sup> <a name="proactive_ha_provider_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaProviderIds"></a>

```python
proactive_ha_provider_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of IDs for health update providers configured for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#proactive_ha_provider_ids ComputeCluster#proactive_ha_provider_ids}

---

##### `proactive_ha_severe_remediation`<sup>Optional</sup> <a name="proactive_ha_severe_remediation" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaSevereRemediation"></a>

```python
proactive_ha_severe_remediation: str
```

- *Type:* str

The configured remediation for severely degraded hosts.

Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to QuarantineMode when proactive_ha_moderate_remediation is set to MaintenanceMode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#proactive_ha_severe_remediation ComputeCluster#proactive_ha_severe_remediation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#tags ComputeCluster#tags}

---

##### `vsan_compression_enabled`<sup>Optional</sup> <a name="vsan_compression_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanCompressionEnabled"></a>

```python
vsan_compression_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN compression service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_compression_enabled ComputeCluster#vsan_compression_enabled}

---

##### `vsan_dedup_enabled`<sup>Optional</sup> <a name="vsan_dedup_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDedupEnabled"></a>

```python
vsan_dedup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN deduplication service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_dedup_enabled ComputeCluster#vsan_dedup_enabled}

---

##### `vsan_disk_group`<sup>Optional</sup> <a name="vsan_disk_group" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDiskGroup"></a>

```python
vsan_disk_group: typing.Union[IResolvable, typing.List[ComputeClusterVsanDiskGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>]]

vsan_disk_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_disk_group ComputeCluster#vsan_disk_group}

---

##### `vsan_dit_encryption_enabled`<sup>Optional</sup> <a name="vsan_dit_encryption_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitEncryptionEnabled"></a>

```python
vsan_dit_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN data-in-transit encryption is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_dit_encryption_enabled ComputeCluster#vsan_dit_encryption_enabled}

---

##### `vsan_dit_rekey_interval`<sup>Optional</sup> <a name="vsan_dit_rekey_interval" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitRekeyInterval"></a>

```python
vsan_dit_rekey_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When vsan_dit_encryption_enabled is enabled, sets the rekey interval of data-in-transit encryption (in minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_dit_rekey_interval ComputeCluster#vsan_dit_rekey_interval}

---

##### `vsan_enabled`<sup>Optional</sup> <a name="vsan_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEnabled"></a>

```python
vsan_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_enabled ComputeCluster#vsan_enabled}

---

##### `vsan_esa_enabled`<sup>Optional</sup> <a name="vsan_esa_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEsaEnabled"></a>

```python
vsan_esa_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN ESA service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_esa_enabled ComputeCluster#vsan_esa_enabled}

---

##### `vsan_fault_domains`<sup>Optional</sup> <a name="vsan_fault_domains" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanFaultDomains"></a>

```python
vsan_fault_domains: typing.Union[IResolvable, typing.List[ComputeClusterVsanFaultDomains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>]]

vsan_fault_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_fault_domains ComputeCluster#vsan_fault_domains}

---

##### `vsan_network_diagnostic_mode_enabled`<sup>Optional</sup> <a name="vsan_network_diagnostic_mode_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanNetworkDiagnosticModeEnabled"></a>

```python
vsan_network_diagnostic_mode_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN network diagnostic mode is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_network_diagnostic_mode_enabled ComputeCluster#vsan_network_diagnostic_mode_enabled}

---

##### `vsan_performance_enabled`<sup>Optional</sup> <a name="vsan_performance_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanPerformanceEnabled"></a>

```python
vsan_performance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN performance service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_performance_enabled ComputeCluster#vsan_performance_enabled}

---

##### `vsan_remote_datastore_ids`<sup>Optional</sup> <a name="vsan_remote_datastore_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanRemoteDatastoreIds"></a>

```python
vsan_remote_datastore_ids: typing.List[str]
```

- *Type:* typing.List[str]

The managed object IDs of the vSAN datastore to be mounted on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_remote_datastore_ids ComputeCluster#vsan_remote_datastore_ids}

---

##### `vsan_stretched_cluster`<sup>Optional</sup> <a name="vsan_stretched_cluster" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanStretchedCluster"></a>

```python
vsan_stretched_cluster: ComputeClusterVsanStretchedCluster
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

vsan_stretched_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_stretched_cluster ComputeCluster#vsan_stretched_cluster}

---

##### `vsan_unmap_enabled`<sup>Optional</sup> <a name="vsan_unmap_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanUnmapEnabled"></a>

```python
vsan_unmap_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN unmap service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_unmap_enabled ComputeCluster#vsan_unmap_enabled}

---

##### `vsan_verbose_mode_enabled`<sup>Optional</sup> <a name="vsan_verbose_mode_enabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanVerboseModeEnabled"></a>

```python
vsan_verbose_mode_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the vSAN verbose mode is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#vsan_verbose_mode_enabled ComputeCluster#vsan_verbose_mode_enabled}

---

### ComputeClusterHostImage <a name="ComputeClusterHostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterHostImage(
  component: typing.Union[IResolvable, typing.List[ComputeClusterHostImageComponent]] = None,
  esx_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.component">component</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>]]</code> | component block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.esxVersion">esx_version</a></code> | <code>str</code> | The ESXi version which the image is based on. |

---

##### `component`<sup>Optional</sup> <a name="component" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.component"></a>

```python
component: typing.Union[IResolvable, typing.List[ComputeClusterHostImageComponent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>]]

component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#component ComputeCluster#component}

---

##### `esx_version`<sup>Optional</sup> <a name="esx_version" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.esxVersion"></a>

```python
esx_version: str
```

- *Type:* str

The ESXi version which the image is based on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#esx_version ComputeCluster#esx_version}

---

### ComputeClusterHostImageComponent <a name="ComputeClusterHostImageComponent" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterHostImageComponent(
  key: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.key">key</a></code> | <code>str</code> | The identifier for the component. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.version">version</a></code> | <code>str</code> | The version to use. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.key"></a>

```python
key: str
```

- *Type:* str

The identifier for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#key ComputeCluster#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.version"></a>

```python
version: str
```

- *Type:* str

The version to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#version ComputeCluster#version}

---

### ComputeClusterVsanDiskGroup <a name="ComputeClusterVsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterVsanDiskGroup(
  cache: str = None,
  storage: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.cache">cache</a></code> | <code>str</code> | Cache disk. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.storage">storage</a></code> | <code>typing.List[str]</code> | List of storage disks. |

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.cache"></a>

```python
cache: str
```

- *Type:* str

Cache disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#cache ComputeCluster#cache}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.storage"></a>

```python
storage: typing.List[str]
```

- *Type:* typing.List[str]

List of storage disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#storage ComputeCluster#storage}

---

### ComputeClusterVsanFaultDomains <a name="ComputeClusterVsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterVsanFaultDomains(
  fault_domain: typing.Union[IResolvable, typing.List[ComputeClusterVsanFaultDomainsFaultDomain]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains.property.faultDomain">fault_domain</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>]]</code> | fault_domain block. |

---

##### `fault_domain`<sup>Optional</sup> <a name="fault_domain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains.property.faultDomain"></a>

```python
fault_domain: typing.Union[IResolvable, typing.List[ComputeClusterVsanFaultDomainsFaultDomain]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>]]

fault_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#fault_domain ComputeCluster#fault_domain}

---

### ComputeClusterVsanFaultDomainsFaultDomain <a name="ComputeClusterVsanFaultDomainsFaultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterVsanFaultDomainsFaultDomain(
  host_ids: typing.List[str],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.hostIds">host_ids</a></code> | <code>typing.List[str]</code> | The managed object IDs of the hosts to put in the fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.name">name</a></code> | <code>str</code> | The name of fault domain. |

---

##### `host_ids`<sup>Required</sup> <a name="host_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.hostIds"></a>

```python
host_ids: typing.List[str]
```

- *Type:* typing.List[str]

The managed object IDs of the hosts to put in the fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#host_ids ComputeCluster#host_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.name"></a>

```python
name: str
```

- *Type:* str

The name of fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#name ComputeCluster#name}

---

### ComputeClusterVsanStretchedCluster <a name="ComputeClusterVsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterVsanStretchedCluster(
  preferred_fault_domain_host_ids: typing.List[str],
  secondary_fault_domain_host_ids: typing.List[str],
  witness_node: str,
  preferred_fault_domain_name: str = None,
  secondary_fault_domain_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainHostIds">preferred_fault_domain_host_ids</a></code> | <code>typing.List[str]</code> | The managed object IDs of the hosts to put in the first fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainHostIds">secondary_fault_domain_host_ids</a></code> | <code>typing.List[str]</code> | The managed object IDs of the hosts to put in the second fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.witnessNode">witness_node</a></code> | <code>str</code> | The managed object IDs of the host selected as witness node when enable stretched cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainName">preferred_fault_domain_name</a></code> | <code>str</code> | The name of prepferred fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainName">secondary_fault_domain_name</a></code> | <code>str</code> | The name of secondary fault domain. |

---

##### `preferred_fault_domain_host_ids`<sup>Required</sup> <a name="preferred_fault_domain_host_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainHostIds"></a>

```python
preferred_fault_domain_host_ids: typing.List[str]
```

- *Type:* typing.List[str]

The managed object IDs of the hosts to put in the first fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#preferred_fault_domain_host_ids ComputeCluster#preferred_fault_domain_host_ids}

---

##### `secondary_fault_domain_host_ids`<sup>Required</sup> <a name="secondary_fault_domain_host_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainHostIds"></a>

```python
secondary_fault_domain_host_ids: typing.List[str]
```

- *Type:* typing.List[str]

The managed object IDs of the hosts to put in the second fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#secondary_fault_domain_host_ids ComputeCluster#secondary_fault_domain_host_ids}

---

##### `witness_node`<sup>Required</sup> <a name="witness_node" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.witnessNode"></a>

```python
witness_node: str
```

- *Type:* str

The managed object IDs of the host selected as witness node when enable stretched cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#witness_node ComputeCluster#witness_node}

---

##### `preferred_fault_domain_name`<sup>Optional</sup> <a name="preferred_fault_domain_name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainName"></a>

```python
preferred_fault_domain_name: str
```

- *Type:* str

The name of prepferred fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#preferred_fault_domain_name ComputeCluster#preferred_fault_domain_name}

---

##### `secondary_fault_domain_name`<sup>Optional</sup> <a name="secondary_fault_domain_name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainName"></a>

```python
secondary_fault_domain_name: str
```

- *Type:* str

The name of secondary fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/compute_cluster#secondary_fault_domain_name ComputeCluster#secondary_fault_domain_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeClusterHostImageComponentList <a name="ComputeClusterHostImageComponentList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterHostImageComponentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeClusterHostImageComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeClusterHostImageComponent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>]]

---


### ComputeClusterHostImageComponentOutputReference <a name="ComputeClusterHostImageComponentOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterHostImageComponentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeClusterHostImageComponent]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>]

---


### ComputeClusterHostImageOutputReference <a name="ComputeClusterHostImageOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterHostImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.putComponent">put_component</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetComponent">reset_component</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetEsxVersion">reset_esx_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_component` <a name="put_component" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.putComponent"></a>

```python
def put_component(
  value: typing.Union[IResolvable, typing.List[ComputeClusterHostImageComponent]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.putComponent.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>]]

---

##### `reset_component` <a name="reset_component" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetComponent"></a>

```python
def reset_component() -> None
```

##### `reset_esx_version` <a name="reset_esx_version" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetEsxVersion"></a>

```python
def reset_esx_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.component">component</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList">ComputeClusterHostImageComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.componentInput">component_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersionInput">esx_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersion">esx_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.component"></a>

```python
component: ComputeClusterHostImageComponentList
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList">ComputeClusterHostImageComponentList</a>

---

##### `component_input`<sup>Optional</sup> <a name="component_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.componentInput"></a>

```python
component_input: typing.Union[IResolvable, typing.List[ComputeClusterHostImageComponent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>]]

---

##### `esx_version_input`<sup>Optional</sup> <a name="esx_version_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersionInput"></a>

```python
esx_version_input: str
```

- *Type:* str

---

##### `esx_version`<sup>Required</sup> <a name="esx_version" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersion"></a>

```python
esx_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.internalValue"></a>

```python
internal_value: ComputeClusterHostImage
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

---


### ComputeClusterVsanDiskGroupList <a name="ComputeClusterVsanDiskGroupList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterVsanDiskGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeClusterVsanDiskGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeClusterVsanDiskGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>]]

---


### ComputeClusterVsanDiskGroupOutputReference <a name="ComputeClusterVsanDiskGroupOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterVsanDiskGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetCache">reset_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetStorage">reset_storage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cache` <a name="reset_cache" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetCache"></a>

```python
def reset_cache() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetStorage"></a>

```python
def reset_storage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cacheInput">cache_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storageInput">storage_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cache">cache</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storage">storage</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_input`<sup>Optional</sup> <a name="cache_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cacheInput"></a>

```python
cache_input: str
```

- *Type:* str

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storageInput"></a>

```python
storage_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cache"></a>

```python
cache: str
```

- *Type:* str

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storage"></a>

```python
storage: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeClusterVsanDiskGroup]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>]

---


### ComputeClusterVsanFaultDomainsFaultDomainList <a name="ComputeClusterVsanFaultDomainsFaultDomainList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeClusterVsanFaultDomainsFaultDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeClusterVsanFaultDomainsFaultDomain]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>]]

---


### ComputeClusterVsanFaultDomainsFaultDomainOutputReference <a name="ComputeClusterVsanFaultDomainsFaultDomainOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIdsInput">host_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIds">host_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_ids_input`<sup>Optional</sup> <a name="host_ids_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIdsInput"></a>

```python
host_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `host_ids`<sup>Required</sup> <a name="host_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIds"></a>

```python
host_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeClusterVsanFaultDomainsFaultDomain]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>]

---


### ComputeClusterVsanFaultDomainsList <a name="ComputeClusterVsanFaultDomainsList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterVsanFaultDomainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeClusterVsanFaultDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeClusterVsanFaultDomains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>]]

---


### ComputeClusterVsanFaultDomainsOutputReference <a name="ComputeClusterVsanFaultDomainsOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterVsanFaultDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.putFaultDomain">put_fault_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resetFaultDomain">reset_fault_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fault_domain` <a name="put_fault_domain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.putFaultDomain"></a>

```python
def put_fault_domain(
  value: typing.Union[IResolvable, typing.List[ComputeClusterVsanFaultDomainsFaultDomain]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.putFaultDomain.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>]]

---

##### `reset_fault_domain` <a name="reset_fault_domain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resetFaultDomain"></a>

```python
def reset_fault_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomain">fault_domain</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList">ComputeClusterVsanFaultDomainsFaultDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomainInput">fault_domain_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomain"></a>

```python
fault_domain: ComputeClusterVsanFaultDomainsFaultDomainList
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList">ComputeClusterVsanFaultDomainsFaultDomainList</a>

---

##### `fault_domain_input`<sup>Optional</sup> <a name="fault_domain_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomainInput"></a>

```python
fault_domain_input: typing.Union[IResolvable, typing.List[ComputeClusterVsanFaultDomainsFaultDomain]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeClusterVsanFaultDomains]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>]

---


### ComputeClusterVsanStretchedClusterOutputReference <a name="ComputeClusterVsanStretchedClusterOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster

computeCluster.ComputeClusterVsanStretchedClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetPreferredFaultDomainName">reset_preferred_fault_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetSecondaryFaultDomainName">reset_secondary_fault_domain_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preferred_fault_domain_name` <a name="reset_preferred_fault_domain_name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetPreferredFaultDomainName"></a>

```python
def reset_preferred_fault_domain_name() -> None
```

##### `reset_secondary_fault_domain_name` <a name="reset_secondary_fault_domain_name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetSecondaryFaultDomainName"></a>

```python
def reset_secondary_fault_domain_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIdsInput">preferred_fault_domain_host_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainNameInput">preferred_fault_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIdsInput">secondary_fault_domain_host_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainNameInput">secondary_fault_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNodeInput">witness_node_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIds">preferred_fault_domain_host_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainName">preferred_fault_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIds">secondary_fault_domain_host_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainName">secondary_fault_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNode">witness_node</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preferred_fault_domain_host_ids_input`<sup>Optional</sup> <a name="preferred_fault_domain_host_ids_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIdsInput"></a>

```python
preferred_fault_domain_host_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preferred_fault_domain_name_input`<sup>Optional</sup> <a name="preferred_fault_domain_name_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainNameInput"></a>

```python
preferred_fault_domain_name_input: str
```

- *Type:* str

---

##### `secondary_fault_domain_host_ids_input`<sup>Optional</sup> <a name="secondary_fault_domain_host_ids_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIdsInput"></a>

```python
secondary_fault_domain_host_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secondary_fault_domain_name_input`<sup>Optional</sup> <a name="secondary_fault_domain_name_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainNameInput"></a>

```python
secondary_fault_domain_name_input: str
```

- *Type:* str

---

##### `witness_node_input`<sup>Optional</sup> <a name="witness_node_input" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNodeInput"></a>

```python
witness_node_input: str
```

- *Type:* str

---

##### `preferred_fault_domain_host_ids`<sup>Required</sup> <a name="preferred_fault_domain_host_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIds"></a>

```python
preferred_fault_domain_host_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preferred_fault_domain_name`<sup>Required</sup> <a name="preferred_fault_domain_name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainName"></a>

```python
preferred_fault_domain_name: str
```

- *Type:* str

---

##### `secondary_fault_domain_host_ids`<sup>Required</sup> <a name="secondary_fault_domain_host_ids" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIds"></a>

```python
secondary_fault_domain_host_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secondary_fault_domain_name`<sup>Required</sup> <a name="secondary_fault_domain_name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainName"></a>

```python
secondary_fault_domain_name: str
```

- *Type:* str

---

##### `witness_node`<sup>Required</sup> <a name="witness_node" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNode"></a>

```python
witness_node: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.internalValue"></a>

```python
internal_value: ComputeClusterVsanStretchedCluster
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

---



