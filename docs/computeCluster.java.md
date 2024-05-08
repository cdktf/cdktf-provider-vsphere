# `computeCluster` Submodule <a name="`computeCluster` Submodule" id="@cdktf/provider-vsphere.computeCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeCluster <a name="ComputeCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster vsphere_compute_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeCluster;

ComputeCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .datacenterId(java.lang.String)
    .name(java.lang.String)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .dpmAutomationLevel(java.lang.String)
//  .dpmEnabled(java.lang.Boolean)
//  .dpmEnabled(IResolvable)
//  .dpmThreshold(java.lang.Number)
//  .drsAdvancedOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .drsAutomationLevel(java.lang.String)
//  .drsEnabled(java.lang.Boolean)
//  .drsEnabled(IResolvable)
//  .drsEnablePredictiveDrs(java.lang.Boolean)
//  .drsEnablePredictiveDrs(IResolvable)
//  .drsEnableVmOverrides(java.lang.Boolean)
//  .drsEnableVmOverrides(IResolvable)
//  .drsMigrationThreshold(java.lang.Number)
//  .drsScaleDescendantsShares(java.lang.String)
//  .folder(java.lang.String)
//  .forceEvacuateOnDestroy(java.lang.Boolean)
//  .forceEvacuateOnDestroy(IResolvable)
//  .haAdmissionControlFailoverHostSystemIds(java.util.List<java.lang.String>)
//  .haAdmissionControlHostFailureTolerance(java.lang.Number)
//  .haAdmissionControlPerformanceTolerance(java.lang.Number)
//  .haAdmissionControlPolicy(java.lang.String)
//  .haAdmissionControlResourcePercentageAutoCompute(java.lang.Boolean)
//  .haAdmissionControlResourcePercentageAutoCompute(IResolvable)
//  .haAdmissionControlResourcePercentageCpu(java.lang.Number)
//  .haAdmissionControlResourcePercentageMemory(java.lang.Number)
//  .haAdmissionControlSlotPolicyExplicitCpu(java.lang.Number)
//  .haAdmissionControlSlotPolicyExplicitMemory(java.lang.Number)
//  .haAdmissionControlSlotPolicyUseExplicitSize(java.lang.Boolean)
//  .haAdmissionControlSlotPolicyUseExplicitSize(IResolvable)
//  .haAdvancedOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .haDatastoreApdRecoveryAction(java.lang.String)
//  .haDatastoreApdResponse(java.lang.String)
//  .haDatastoreApdResponseDelay(java.lang.Number)
//  .haDatastorePdlResponse(java.lang.String)
//  .haEnabled(java.lang.Boolean)
//  .haEnabled(IResolvable)
//  .haHeartbeatDatastoreIds(java.util.List<java.lang.String>)
//  .haHeartbeatDatastorePolicy(java.lang.String)
//  .haHostIsolationResponse(java.lang.String)
//  .haHostMonitoring(java.lang.String)
//  .haVmComponentProtection(java.lang.String)
//  .haVmDependencyRestartCondition(java.lang.String)
//  .haVmFailureInterval(java.lang.Number)
//  .haVmMaximumFailureWindow(java.lang.Number)
//  .haVmMaximumResets(java.lang.Number)
//  .haVmMinimumUptime(java.lang.Number)
//  .haVmMonitoring(java.lang.String)
//  .haVmRestartAdditionalDelay(java.lang.Number)
//  .haVmRestartPriority(java.lang.String)
//  .haVmRestartTimeout(java.lang.Number)
//  .hostClusterExitTimeout(java.lang.Number)
//  .hostImage(ComputeClusterHostImage)
//  .hostManaged(java.lang.Boolean)
//  .hostManaged(IResolvable)
//  .hostSystemIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .proactiveHaAutomationLevel(java.lang.String)
//  .proactiveHaEnabled(java.lang.Boolean)
//  .proactiveHaEnabled(IResolvable)
//  .proactiveHaModerateRemediation(java.lang.String)
//  .proactiveHaProviderIds(java.util.List<java.lang.String>)
//  .proactiveHaSevereRemediation(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .vsanCompressionEnabled(java.lang.Boolean)
//  .vsanCompressionEnabled(IResolvable)
//  .vsanDedupEnabled(java.lang.Boolean)
//  .vsanDedupEnabled(IResolvable)
//  .vsanDiskGroup(IResolvable)
//  .vsanDiskGroup(java.util.List<ComputeClusterVsanDiskGroup>)
//  .vsanDitEncryptionEnabled(java.lang.Boolean)
//  .vsanDitEncryptionEnabled(IResolvable)
//  .vsanDitRekeyInterval(java.lang.Number)
//  .vsanEnabled(java.lang.Boolean)
//  .vsanEnabled(IResolvable)
//  .vsanEsaEnabled(java.lang.Boolean)
//  .vsanEsaEnabled(IResolvable)
//  .vsanFaultDomains(IResolvable)
//  .vsanFaultDomains(java.util.List<ComputeClusterVsanFaultDomains>)
//  .vsanNetworkDiagnosticModeEnabled(java.lang.Boolean)
//  .vsanNetworkDiagnosticModeEnabled(IResolvable)
//  .vsanPerformanceEnabled(java.lang.Boolean)
//  .vsanPerformanceEnabled(IResolvable)
//  .vsanRemoteDatastoreIds(java.util.List<java.lang.String>)
//  .vsanStretchedCluster(ComputeClusterVsanStretchedCluster)
//  .vsanUnmapEnabled(java.lang.Boolean)
//  .vsanUnmapEnabled(IResolvable)
//  .vsanVerboseModeEnabled(java.lang.Boolean)
//  .vsanVerboseModeEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datacenter to put the cluster in. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name for the new cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dpmAutomationLevel">dpmAutomationLevel</a></code> | <code>java.lang.String</code> | The automation level for host power operations in this cluster. Can be one of manual or automated. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dpmEnabled">dpmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable DPM support for DRS. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dpmThreshold">dpmThreshold</a></code> | <code>java.lang.Number</code> | A value between 1 and 5 indicating the threshold of load within the cluster that influences host power operations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsAdvancedOptions">drsAdvancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Advanced configuration options for DRS and DPM. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsAutomationLevel">drsAutomationLevel</a></code> | <code>java.lang.String</code> | The default automation level for all virtual machines in this cluster. Can be one of manual, partiallyAutomated, or fullyAutomated. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsEnabled">drsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable DRS for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsEnablePredictiveDrs">drsEnablePredictiveDrs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, enables DRS to use data from vRealize Operations Manager to make proactive DRS recommendations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsEnableVmOverrides">drsEnableVmOverrides</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, allows individual VM overrides within this cluster to be set. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsMigrationThreshold">drsMigrationThreshold</a></code> | <code>java.lang.Number</code> | A value between 1 and 5 indicating the threshold of imbalance tolerated between hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsScaleDescendantsShares">drsScaleDescendantsShares</a></code> | <code>java.lang.String</code> | Enable scalable shares for all descendants of this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | The name of the folder to locate the cluster in. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.forceEvacuateOnDestroy">forceEvacuateOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Force removal of all hosts in the cluster during destroy and make them standalone hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlFailoverHostSystemIds">haAdmissionControlFailoverHostSystemIds</a></code> | <code>java.util.List<java.lang.String></code> | When ha_admission_control_policy is failoverHosts, this defines the managed object IDs of hosts to use as dedicated failover hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlHostFailureTolerance">haAdmissionControlHostFailureTolerance</a></code> | <code>java.lang.Number</code> | The maximum number of failed hosts that admission control tolerates when making decisions on whether to permit virtual machine operations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlPerformanceTolerance">haAdmissionControlPerformanceTolerance</a></code> | <code>java.lang.Number</code> | The percentage of resource reduction that a cluster of VMs can tolerate in case of a failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlPolicy">haAdmissionControlPolicy</a></code> | <code>java.lang.String</code> | The type of admission control policy to use with vSphere HA, which controls whether or not specific VM operations are permitted in the cluster in order to protect the reliability of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlResourcePercentageAutoCompute">haAdmissionControlResourcePercentageAutoCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When ha_admission_control_policy is resourcePercentage, automatically determine available resource percentages by subtracting the average number of host resources represented by the ha_admission_control_host_failure_tolerance setting from the total amount of resources in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlResourcePercentageCpu">haAdmissionControlResourcePercentageCpu</a></code> | <code>java.lang.Number</code> | When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of CPU resources in the cluster to reserve for failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlResourcePercentageMemory">haAdmissionControlResourcePercentageMemory</a></code> | <code>java.lang.Number</code> | When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of memory resources in the cluster to reserve for failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlSlotPolicyExplicitCpu">haAdmissionControlSlotPolicyExplicitCpu</a></code> | <code>java.lang.Number</code> | When ha_admission_control_policy is slotPolicy, this controls the user-defined CPU slot size, in MHz. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlSlotPolicyExplicitMemory">haAdmissionControlSlotPolicyExplicitMemory</a></code> | <code>java.lang.Number</code> | When ha_admission_control_policy is slotPolicy, this controls the user-defined memory slot size, in MB. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlSlotPolicyUseExplicitSize">haAdmissionControlSlotPolicyUseExplicitSize</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When ha_admission_control_policy is slotPolicy, this setting controls whether or not you wish to supply explicit values to CPU and memory slot sizes. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdvancedOptions">haAdvancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Advanced configuration options for vSphere HA. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastoreApdRecoveryAction">haDatastoreApdRecoveryAction</a></code> | <code>java.lang.String</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines if an APD status on an affected datastore clears in the middle of an APD event. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastoreApdResponse">haDatastoreApdResponse</a></code> | <code>java.lang.String</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected loss to all paths to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastoreApdResponseDelay">haDatastoreApdResponseDelay</a></code> | <code>java.lang.Number</code> | When ha_vm_component_protection is enabled, controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastorePdlResponse">haDatastorePdlResponse</a></code> | <code>java.lang.String</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected a permanent device loss to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haEnabled">haEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable vSphere HA for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHeartbeatDatastoreIds">haHeartbeatDatastoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The list of managed object IDs for preferred datastores to use for HA heartbeating. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHeartbeatDatastorePolicy">haHeartbeatDatastorePolicy</a></code> | <code>java.lang.String</code> | The selection policy for HA heartbeat datastores. Can be one of allFeasibleDs, userSelectedDs, or allFeasibleDsWithUserPreference. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHostIsolationResponse">haHostIsolationResponse</a></code> | <code>java.lang.String</code> | The action to take on virtual machines when a host has detected that it has been isolated from the rest of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHostMonitoring">haHostMonitoring</a></code> | <code>java.lang.String</code> | Global setting that controls whether vSphere HA remediates VMs on host failure. Can be one of enabled or disabled. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmComponentProtection">haVmComponentProtection</a></code> | <code>java.lang.String</code> | Controls vSphere VM component protection for virtual machines in this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmDependencyRestartCondition">haVmDependencyRestartCondition</a></code> | <code>java.lang.String</code> | The condition used to determine whether or not VMs in a certain restart priority class are online, allowing HA to move on to restarting VMs on the next priority. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmFailureInterval">haVmFailureInterval</a></code> | <code>java.lang.Number</code> | If a heartbeat from a virtual machine is not received within this configured interval, the virtual machine is marked as failed. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMaximumFailureWindow">haVmMaximumFailureWindow</a></code> | <code>java.lang.Number</code> | The length of the reset window in which ha_vm_maximum_resets can operate. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMaximumResets">haVmMaximumResets</a></code> | <code>java.lang.Number</code> | The maximum number of resets that HA will perform to a virtual machine when responding to a failure event. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMinimumUptime">haVmMinimumUptime</a></code> | <code>java.lang.Number</code> | The time, in seconds, that HA waits after powering on a virtual machine before monitoring for heartbeats. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMonitoring">haVmMonitoring</a></code> | <code>java.lang.String</code> | The type of virtual machine monitoring to use when HA is enabled in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmRestartAdditionalDelay">haVmRestartAdditionalDelay</a></code> | <code>java.lang.Number</code> | Additional delay in seconds after ready condition is met. A VM is considered ready at this point. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmRestartPriority">haVmRestartPriority</a></code> | <code>java.lang.String</code> | The default restart priority for affected VMs when vSphere detects a host failure. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmRestartTimeout">haVmRestartTimeout</a></code> | <code>java.lang.Number</code> | The maximum time, in seconds, that vSphere HA will wait for virtual machines in one priority to be ready before proceeding with the next priority. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostClusterExitTimeout">hostClusterExitTimeout</a></code> | <code>java.lang.Number</code> | The timeout for each host maintenance mode operation when removing hosts from a cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostImage">hostImage</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | host_image block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostManaged">hostManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Must be set if cluster enrollment is managed from host resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostSystemIds">hostSystemIds</a></code> | <code>java.util.List<java.lang.String></code> | The managed object IDs of the hosts to put in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#id ComputeCluster#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaAutomationLevel">proactiveHaAutomationLevel</a></code> | <code>java.lang.String</code> | The DRS behavior for proactive HA recommendations. Can be one of Automated or Manual. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaEnabled">proactiveHaEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables proactive HA, allowing for vSphere to get HA data from external providers and use DRS to perform remediation. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaModerateRemediation">proactiveHaModerateRemediation</a></code> | <code>java.lang.String</code> | The configured remediation for moderately degraded hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaProviderIds">proactiveHaProviderIds</a></code> | <code>java.util.List<java.lang.String></code> | The list of IDs for health update providers configured for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaSevereRemediation">proactiveHaSevereRemediation</a></code> | <code>java.lang.String</code> | The configured remediation for severely degraded hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanCompressionEnabled">vsanCompressionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN compression service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDedupEnabled">vsanDedupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN deduplication service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDiskGroup">vsanDiskGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>></code> | vsan_disk_group block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDitEncryptionEnabled">vsanDitEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN data-in-transit encryption is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDitRekeyInterval">vsanDitRekeyInterval</a></code> | <code>java.lang.Number</code> | When vsan_dit_encryption_enabled is enabled, sets the rekey interval of data-in-transit encryption (in minutes). |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanEnabled">vsanEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanEsaEnabled">vsanEsaEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN ESA service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanFaultDomains">vsanFaultDomains</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>></code> | vsan_fault_domains block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanNetworkDiagnosticModeEnabled">vsanNetworkDiagnosticModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN network diagnostic mode is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanPerformanceEnabled">vsanPerformanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN performance service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanRemoteDatastoreIds">vsanRemoteDatastoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The managed object IDs of the vSAN datastore to be mounted on the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanStretchedCluster">vsanStretchedCluster</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | vsan_stretched_cluster block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanUnmapEnabled">vsanUnmapEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN unmap service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanVerboseModeEnabled">vsanVerboseModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN verbose mode is enabled for the cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

The managed object ID of the datacenter to put the cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#datacenter_id ComputeCluster#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name for the new cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#name ComputeCluster#name}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.customAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#custom_attributes ComputeCluster#custom_attributes}

---

##### `dpmAutomationLevel`<sup>Optional</sup> <a name="dpmAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dpmAutomationLevel"></a>

- *Type:* java.lang.String

The automation level for host power operations in this cluster. Can be one of manual or automated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#dpm_automation_level ComputeCluster#dpm_automation_level}

---

##### `dpmEnabled`<sup>Optional</sup> <a name="dpmEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dpmEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable DPM support for DRS.

This allows you to dynamically control the power of hosts depending on the needs of virtual machines in the cluster. Requires that DRS be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#dpm_enabled ComputeCluster#dpm_enabled}

---

##### `dpmThreshold`<sup>Optional</sup> <a name="dpmThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.dpmThreshold"></a>

- *Type:* java.lang.Number

A value between 1 and 5 indicating the threshold of load within the cluster that influences host power operations.

This affects both power on and power off operations - a lower setting will tolerate more of a surplus/deficit than a higher setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#dpm_threshold ComputeCluster#dpm_threshold}

---

##### `drsAdvancedOptions`<sup>Optional</sup> <a name="drsAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsAdvancedOptions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Advanced configuration options for DRS and DPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_advanced_options ComputeCluster#drs_advanced_options}

---

##### `drsAutomationLevel`<sup>Optional</sup> <a name="drsAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsAutomationLevel"></a>

- *Type:* java.lang.String

The default automation level for all virtual machines in this cluster. Can be one of manual, partiallyAutomated, or fullyAutomated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_automation_level ComputeCluster#drs_automation_level}

---

##### `drsEnabled`<sup>Optional</sup> <a name="drsEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable DRS for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_enabled ComputeCluster#drs_enabled}

---

##### `drsEnablePredictiveDrs`<sup>Optional</sup> <a name="drsEnablePredictiveDrs" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsEnablePredictiveDrs"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, enables DRS to use data from vRealize Operations Manager to make proactive DRS recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_enable_predictive_drs ComputeCluster#drs_enable_predictive_drs}

---

##### `drsEnableVmOverrides`<sup>Optional</sup> <a name="drsEnableVmOverrides" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsEnableVmOverrides"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, allows individual VM overrides within this cluster to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_enable_vm_overrides ComputeCluster#drs_enable_vm_overrides}

---

##### `drsMigrationThreshold`<sup>Optional</sup> <a name="drsMigrationThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsMigrationThreshold"></a>

- *Type:* java.lang.Number

A value between 1 and 5 indicating the threshold of imbalance tolerated between hosts.

A lower setting will tolerate more imbalance while a higher setting will tolerate less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_migration_threshold ComputeCluster#drs_migration_threshold}

---

##### `drsScaleDescendantsShares`<sup>Optional</sup> <a name="drsScaleDescendantsShares" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.drsScaleDescendantsShares"></a>

- *Type:* java.lang.String

Enable scalable shares for all descendants of this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_scale_descendants_shares ComputeCluster#drs_scale_descendants_shares}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

The name of the folder to locate the cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#folder ComputeCluster#folder}

---

##### `forceEvacuateOnDestroy`<sup>Optional</sup> <a name="forceEvacuateOnDestroy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.forceEvacuateOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Force removal of all hosts in the cluster during destroy and make them standalone hosts.

Use of this flag mainly exists for testing and is not recommended in normal use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#force_evacuate_on_destroy ComputeCluster#force_evacuate_on_destroy}

---

##### `haAdmissionControlFailoverHostSystemIds`<sup>Optional</sup> <a name="haAdmissionControlFailoverHostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlFailoverHostSystemIds"></a>

- *Type:* java.util.List<java.lang.String>

When ha_admission_control_policy is failoverHosts, this defines the managed object IDs of hosts to use as dedicated failover hosts.

These hosts are kept as available as possible - admission control will block access to the host, and DRS will ignore the host when making recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_failover_host_system_ids ComputeCluster#ha_admission_control_failover_host_system_ids}

---

##### `haAdmissionControlHostFailureTolerance`<sup>Optional</sup> <a name="haAdmissionControlHostFailureTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlHostFailureTolerance"></a>

- *Type:* java.lang.Number

The maximum number of failed hosts that admission control tolerates when making decisions on whether to permit virtual machine operations.

The maximum is one less than the number of hosts in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_host_failure_tolerance ComputeCluster#ha_admission_control_host_failure_tolerance}

---

##### `haAdmissionControlPerformanceTolerance`<sup>Optional</sup> <a name="haAdmissionControlPerformanceTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlPerformanceTolerance"></a>

- *Type:* java.lang.Number

The percentage of resource reduction that a cluster of VMs can tolerate in case of a failover.

A value of 0 produces warnings only, whereas a value of 100 disables the setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_performance_tolerance ComputeCluster#ha_admission_control_performance_tolerance}

---

##### `haAdmissionControlPolicy`<sup>Optional</sup> <a name="haAdmissionControlPolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlPolicy"></a>

- *Type:* java.lang.String

The type of admission control policy to use with vSphere HA, which controls whether or not specific VM operations are permitted in the cluster in order to protect the reliability of the cluster.

Can be one of resourcePercentage, slotPolicy, failoverHosts, or disabled. Note that disabling admission control is not recommended and can lead to service issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_policy ComputeCluster#ha_admission_control_policy}

---

##### `haAdmissionControlResourcePercentageAutoCompute`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageAutoCompute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlResourcePercentageAutoCompute"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When ha_admission_control_policy is resourcePercentage, automatically determine available resource percentages by subtracting the average number of host resources represented by the ha_admission_control_host_failure_tolerance setting from the total amount of resources in the cluster.

Disable to supply user-defined values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_resource_percentage_auto_compute ComputeCluster#ha_admission_control_resource_percentage_auto_compute}

---

##### `haAdmissionControlResourcePercentageCpu`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlResourcePercentageCpu"></a>

- *Type:* java.lang.Number

When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of CPU resources in the cluster to reserve for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_resource_percentage_cpu ComputeCluster#ha_admission_control_resource_percentage_cpu}

---

##### `haAdmissionControlResourcePercentageMemory`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlResourcePercentageMemory"></a>

- *Type:* java.lang.Number

When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of memory resources in the cluster to reserve for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_resource_percentage_memory ComputeCluster#ha_admission_control_resource_percentage_memory}

---

##### `haAdmissionControlSlotPolicyExplicitCpu`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyExplicitCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlSlotPolicyExplicitCpu"></a>

- *Type:* java.lang.Number

When ha_admission_control_policy is slotPolicy, this controls the user-defined CPU slot size, in MHz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_cpu ComputeCluster#ha_admission_control_slot_policy_explicit_cpu}

---

##### `haAdmissionControlSlotPolicyExplicitMemory`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyExplicitMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlSlotPolicyExplicitMemory"></a>

- *Type:* java.lang.Number

When ha_admission_control_policy is slotPolicy, this controls the user-defined memory slot size, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_memory ComputeCluster#ha_admission_control_slot_policy_explicit_memory}

---

##### `haAdmissionControlSlotPolicyUseExplicitSize`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyUseExplicitSize" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdmissionControlSlotPolicyUseExplicitSize"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When ha_admission_control_policy is slotPolicy, this setting controls whether or not you wish to supply explicit values to CPU and memory slot sizes.

The default is to gather a automatic average based on all powered-on virtual machines currently in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_slot_policy_use_explicit_size ComputeCluster#ha_admission_control_slot_policy_use_explicit_size}

---

##### `haAdvancedOptions`<sup>Optional</sup> <a name="haAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haAdvancedOptions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Advanced configuration options for vSphere HA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_advanced_options ComputeCluster#ha_advanced_options}

---

##### `haDatastoreApdRecoveryAction`<sup>Optional</sup> <a name="haDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastoreApdRecoveryAction"></a>

- *Type:* java.lang.String

When ha_vm_component_protection is enabled, controls the action to take on virtual machines if an APD status on an affected datastore clears in the middle of an APD event.

Can be one of none or reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_datastore_apd_recovery_action ComputeCluster#ha_datastore_apd_recovery_action}

---

##### `haDatastoreApdResponse`<sup>Optional</sup> <a name="haDatastoreApdResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastoreApdResponse"></a>

- *Type:* java.lang.String

When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected loss to all paths to a relevant datastore.

Can be one of disabled, warning, restartConservative, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_datastore_apd_response ComputeCluster#ha_datastore_apd_response}

---

##### `haDatastoreApdResponseDelay`<sup>Optional</sup> <a name="haDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastoreApdResponseDelay"></a>

- *Type:* java.lang.Number

When ha_vm_component_protection is enabled, controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_datastore_apd_response_delay ComputeCluster#ha_datastore_apd_response_delay}

---

##### `haDatastorePdlResponse`<sup>Optional</sup> <a name="haDatastorePdlResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haDatastorePdlResponse"></a>

- *Type:* java.lang.String

When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected a permanent device loss to a relevant datastore.

Can be one of disabled, warning, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_datastore_pdl_response ComputeCluster#ha_datastore_pdl_response}

---

##### `haEnabled`<sup>Optional</sup> <a name="haEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable vSphere HA for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_enabled ComputeCluster#ha_enabled}

---

##### `haHeartbeatDatastoreIds`<sup>Optional</sup> <a name="haHeartbeatDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHeartbeatDatastoreIds"></a>

- *Type:* java.util.List<java.lang.String>

The list of managed object IDs for preferred datastores to use for HA heartbeating.

This setting is only useful when ha_heartbeat_datastore_policy is set to either userSelectedDs or allFeasibleDsWithUserPreference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_heartbeat_datastore_ids ComputeCluster#ha_heartbeat_datastore_ids}

---

##### `haHeartbeatDatastorePolicy`<sup>Optional</sup> <a name="haHeartbeatDatastorePolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHeartbeatDatastorePolicy"></a>

- *Type:* java.lang.String

The selection policy for HA heartbeat datastores. Can be one of allFeasibleDs, userSelectedDs, or allFeasibleDsWithUserPreference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_heartbeat_datastore_policy ComputeCluster#ha_heartbeat_datastore_policy}

---

##### `haHostIsolationResponse`<sup>Optional</sup> <a name="haHostIsolationResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHostIsolationResponse"></a>

- *Type:* java.lang.String

The action to take on virtual machines when a host has detected that it has been isolated from the rest of the cluster.

Can be one of none, powerOff, or shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_host_isolation_response ComputeCluster#ha_host_isolation_response}

---

##### `haHostMonitoring`<sup>Optional</sup> <a name="haHostMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haHostMonitoring"></a>

- *Type:* java.lang.String

Global setting that controls whether vSphere HA remediates VMs on host failure. Can be one of enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_host_monitoring ComputeCluster#ha_host_monitoring}

---

##### `haVmComponentProtection`<sup>Optional</sup> <a name="haVmComponentProtection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmComponentProtection"></a>

- *Type:* java.lang.String

Controls vSphere VM component protection for virtual machines in this cluster.

This allows vSphere HA to react to failures between hosts and specific virtual machine components, such as datastores. Can be one of enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_component_protection ComputeCluster#ha_vm_component_protection}

---

##### `haVmDependencyRestartCondition`<sup>Optional</sup> <a name="haVmDependencyRestartCondition" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmDependencyRestartCondition"></a>

- *Type:* java.lang.String

The condition used to determine whether or not VMs in a certain restart priority class are online, allowing HA to move on to restarting VMs on the next priority.

Can be one of none, poweredOn, guestHbStatusGreen, or appHbStatusGreen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_dependency_restart_condition ComputeCluster#ha_vm_dependency_restart_condition}

---

##### `haVmFailureInterval`<sup>Optional</sup> <a name="haVmFailureInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmFailureInterval"></a>

- *Type:* java.lang.Number

If a heartbeat from a virtual machine is not received within this configured interval, the virtual machine is marked as failed.

The value is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_failure_interval ComputeCluster#ha_vm_failure_interval}

---

##### `haVmMaximumFailureWindow`<sup>Optional</sup> <a name="haVmMaximumFailureWindow" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMaximumFailureWindow"></a>

- *Type:* java.lang.Number

The length of the reset window in which ha_vm_maximum_resets can operate.

When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_maximum_failure_window ComputeCluster#ha_vm_maximum_failure_window}

---

##### `haVmMaximumResets`<sup>Optional</sup> <a name="haVmMaximumResets" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMaximumResets"></a>

- *Type:* java.lang.Number

The maximum number of resets that HA will perform to a virtual machine when responding to a failure event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_maximum_resets ComputeCluster#ha_vm_maximum_resets}

---

##### `haVmMinimumUptime`<sup>Optional</sup> <a name="haVmMinimumUptime" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMinimumUptime"></a>

- *Type:* java.lang.Number

The time, in seconds, that HA waits after powering on a virtual machine before monitoring for heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_minimum_uptime ComputeCluster#ha_vm_minimum_uptime}

---

##### `haVmMonitoring`<sup>Optional</sup> <a name="haVmMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmMonitoring"></a>

- *Type:* java.lang.String

The type of virtual machine monitoring to use when HA is enabled in the cluster.

Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_monitoring ComputeCluster#ha_vm_monitoring}

---

##### `haVmRestartAdditionalDelay`<sup>Optional</sup> <a name="haVmRestartAdditionalDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmRestartAdditionalDelay"></a>

- *Type:* java.lang.Number

Additional delay in seconds after ready condition is met. A VM is considered ready at this point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_restart_additional_delay ComputeCluster#ha_vm_restart_additional_delay}

---

##### `haVmRestartPriority`<sup>Optional</sup> <a name="haVmRestartPriority" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmRestartPriority"></a>

- *Type:* java.lang.String

The default restart priority for affected VMs when vSphere detects a host failure.

Can be one of lowest, low, medium, high, or highest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_restart_priority ComputeCluster#ha_vm_restart_priority}

---

##### `haVmRestartTimeout`<sup>Optional</sup> <a name="haVmRestartTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.haVmRestartTimeout"></a>

- *Type:* java.lang.Number

The maximum time, in seconds, that vSphere HA will wait for virtual machines in one priority to be ready before proceeding with the next priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_restart_timeout ComputeCluster#ha_vm_restart_timeout}

---

##### `hostClusterExitTimeout`<sup>Optional</sup> <a name="hostClusterExitTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostClusterExitTimeout"></a>

- *Type:* java.lang.Number

The timeout for each host maintenance mode operation when removing hosts from a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#host_cluster_exit_timeout ComputeCluster#host_cluster_exit_timeout}

---

##### `hostImage`<sup>Optional</sup> <a name="hostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostImage"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

host_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#host_image ComputeCluster#host_image}

---

##### `hostManaged`<sup>Optional</sup> <a name="hostManaged" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostManaged"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Must be set if cluster enrollment is managed from host resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#host_managed ComputeCluster#host_managed}

---

##### `hostSystemIds`<sup>Optional</sup> <a name="hostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.hostSystemIds"></a>

- *Type:* java.util.List<java.lang.String>

The managed object IDs of the hosts to put in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#host_system_ids ComputeCluster#host_system_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#id ComputeCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `proactiveHaAutomationLevel`<sup>Optional</sup> <a name="proactiveHaAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaAutomationLevel"></a>

- *Type:* java.lang.String

The DRS behavior for proactive HA recommendations. Can be one of Automated or Manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#proactive_ha_automation_level ComputeCluster#proactive_ha_automation_level}

---

##### `proactiveHaEnabled`<sup>Optional</sup> <a name="proactiveHaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables proactive HA, allowing for vSphere to get HA data from external providers and use DRS to perform remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#proactive_ha_enabled ComputeCluster#proactive_ha_enabled}

---

##### `proactiveHaModerateRemediation`<sup>Optional</sup> <a name="proactiveHaModerateRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaModerateRemediation"></a>

- *Type:* java.lang.String

The configured remediation for moderately degraded hosts.

Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to MaintenanceMode when proactive_ha_severe_remediation is set to QuarantineMode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#proactive_ha_moderate_remediation ComputeCluster#proactive_ha_moderate_remediation}

---

##### `proactiveHaProviderIds`<sup>Optional</sup> <a name="proactiveHaProviderIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaProviderIds"></a>

- *Type:* java.util.List<java.lang.String>

The list of IDs for health update providers configured for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#proactive_ha_provider_ids ComputeCluster#proactive_ha_provider_ids}

---

##### `proactiveHaSevereRemediation`<sup>Optional</sup> <a name="proactiveHaSevereRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.proactiveHaSevereRemediation"></a>

- *Type:* java.lang.String

The configured remediation for severely degraded hosts.

Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to QuarantineMode when proactive_ha_moderate_remediation is set to MaintenanceMode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#proactive_ha_severe_remediation ComputeCluster#proactive_ha_severe_remediation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#tags ComputeCluster#tags}

---

##### `vsanCompressionEnabled`<sup>Optional</sup> <a name="vsanCompressionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanCompressionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN compression service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_compression_enabled ComputeCluster#vsan_compression_enabled}

---

##### `vsanDedupEnabled`<sup>Optional</sup> <a name="vsanDedupEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDedupEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN deduplication service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_dedup_enabled ComputeCluster#vsan_dedup_enabled}

---

##### `vsanDiskGroup`<sup>Optional</sup> <a name="vsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDiskGroup"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>>

vsan_disk_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_disk_group ComputeCluster#vsan_disk_group}

---

##### `vsanDitEncryptionEnabled`<sup>Optional</sup> <a name="vsanDitEncryptionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDitEncryptionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN data-in-transit encryption is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_dit_encryption_enabled ComputeCluster#vsan_dit_encryption_enabled}

---

##### `vsanDitRekeyInterval`<sup>Optional</sup> <a name="vsanDitRekeyInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanDitRekeyInterval"></a>

- *Type:* java.lang.Number

When vsan_dit_encryption_enabled is enabled, sets the rekey interval of data-in-transit encryption (in minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_dit_rekey_interval ComputeCluster#vsan_dit_rekey_interval}

---

##### `vsanEnabled`<sup>Optional</sup> <a name="vsanEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_enabled ComputeCluster#vsan_enabled}

---

##### `vsanEsaEnabled`<sup>Optional</sup> <a name="vsanEsaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanEsaEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN ESA service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_esa_enabled ComputeCluster#vsan_esa_enabled}

---

##### `vsanFaultDomains`<sup>Optional</sup> <a name="vsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanFaultDomains"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>>

vsan_fault_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_fault_domains ComputeCluster#vsan_fault_domains}

---

##### `vsanNetworkDiagnosticModeEnabled`<sup>Optional</sup> <a name="vsanNetworkDiagnosticModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanNetworkDiagnosticModeEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN network diagnostic mode is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_network_diagnostic_mode_enabled ComputeCluster#vsan_network_diagnostic_mode_enabled}

---

##### `vsanPerformanceEnabled`<sup>Optional</sup> <a name="vsanPerformanceEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanPerformanceEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN performance service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_performance_enabled ComputeCluster#vsan_performance_enabled}

---

##### `vsanRemoteDatastoreIds`<sup>Optional</sup> <a name="vsanRemoteDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanRemoteDatastoreIds"></a>

- *Type:* java.util.List<java.lang.String>

The managed object IDs of the vSAN datastore to be mounted on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_remote_datastore_ids ComputeCluster#vsan_remote_datastore_ids}

---

##### `vsanStretchedCluster`<sup>Optional</sup> <a name="vsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanStretchedCluster"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

vsan_stretched_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_stretched_cluster ComputeCluster#vsan_stretched_cluster}

---

##### `vsanUnmapEnabled`<sup>Optional</sup> <a name="vsanUnmapEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanUnmapEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN unmap service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_unmap_enabled ComputeCluster#vsan_unmap_enabled}

---

##### `vsanVerboseModeEnabled`<sup>Optional</sup> <a name="vsanVerboseModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.Initializer.parameter.vsanVerboseModeEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN verbose mode is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_verbose_mode_enabled ComputeCluster#vsan_verbose_mode_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putHostImage">putHostImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanDiskGroup">putVsanDiskGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanFaultDomains">putVsanFaultDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster">putVsanStretchedCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmAutomationLevel">resetDpmAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmEnabled">resetDpmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmThreshold">resetDpmThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAdvancedOptions">resetDrsAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAutomationLevel">resetDrsAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnabled">resetDrsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnablePredictiveDrs">resetDrsEnablePredictiveDrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnableVmOverrides">resetDrsEnableVmOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsMigrationThreshold">resetDrsMigrationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsScaleDescendantsShares">resetDrsScaleDescendantsShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetForceEvacuateOnDestroy">resetForceEvacuateOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlFailoverHostSystemIds">resetHaAdmissionControlFailoverHostSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlHostFailureTolerance">resetHaAdmissionControlHostFailureTolerance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPerformanceTolerance">resetHaAdmissionControlPerformanceTolerance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPolicy">resetHaAdmissionControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageAutoCompute">resetHaAdmissionControlResourcePercentageAutoCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageCpu">resetHaAdmissionControlResourcePercentageCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageMemory">resetHaAdmissionControlResourcePercentageMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitCpu">resetHaAdmissionControlSlotPolicyExplicitCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitMemory">resetHaAdmissionControlSlotPolicyExplicitMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyUseExplicitSize">resetHaAdmissionControlSlotPolicyUseExplicitSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdvancedOptions">resetHaAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdRecoveryAction">resetHaDatastoreApdRecoveryAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponse">resetHaDatastoreApdResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponseDelay">resetHaDatastoreApdResponseDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastorePdlResponse">resetHaDatastorePdlResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaEnabled">resetHaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastoreIds">resetHaHeartbeatDatastoreIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastorePolicy">resetHaHeartbeatDatastorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostIsolationResponse">resetHaHostIsolationResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostMonitoring">resetHaHostMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmComponentProtection">resetHaVmComponentProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmDependencyRestartCondition">resetHaVmDependencyRestartCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmFailureInterval">resetHaVmFailureInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumFailureWindow">resetHaVmMaximumFailureWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumResets">resetHaVmMaximumResets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMinimumUptime">resetHaVmMinimumUptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMonitoring">resetHaVmMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartAdditionalDelay">resetHaVmRestartAdditionalDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartPriority">resetHaVmRestartPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartTimeout">resetHaVmRestartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostClusterExitTimeout">resetHostClusterExitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostImage">resetHostImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostManaged">resetHostManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostSystemIds">resetHostSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaAutomationLevel">resetProactiveHaAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaEnabled">resetProactiveHaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaModerateRemediation">resetProactiveHaModerateRemediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaProviderIds">resetProactiveHaProviderIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaSevereRemediation">resetProactiveHaSevereRemediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanCompressionEnabled">resetVsanCompressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDedupEnabled">resetVsanDedupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDiskGroup">resetVsanDiskGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitEncryptionEnabled">resetVsanDitEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitRekeyInterval">resetVsanDitRekeyInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEnabled">resetVsanEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEsaEnabled">resetVsanEsaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanFaultDomains">resetVsanFaultDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanNetworkDiagnosticModeEnabled">resetVsanNetworkDiagnosticModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanPerformanceEnabled">resetVsanPerformanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanRemoteDatastoreIds">resetVsanRemoteDatastoreIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanStretchedCluster">resetVsanStretchedCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanUnmapEnabled">resetVsanUnmapEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanVerboseModeEnabled">resetVsanVerboseModeEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHostImage` <a name="putHostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putHostImage"></a>

```java
public void putHostImage(ComputeClusterHostImage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putHostImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

---

##### `putVsanDiskGroup` <a name="putVsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanDiskGroup"></a>

```java
public void putVsanDiskGroup(IResolvable OR java.util.List<ComputeClusterVsanDiskGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanDiskGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>>

---

##### `putVsanFaultDomains` <a name="putVsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanFaultDomains"></a>

```java
public void putVsanFaultDomains(IResolvable OR java.util.List<ComputeClusterVsanFaultDomains> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanFaultDomains.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>>

---

##### `putVsanStretchedCluster` <a name="putVsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster"></a>

```java
public void putVsanStretchedCluster(ComputeClusterVsanStretchedCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.putVsanStretchedCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

---

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetDpmAutomationLevel` <a name="resetDpmAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmAutomationLevel"></a>

```java
public void resetDpmAutomationLevel()
```

##### `resetDpmEnabled` <a name="resetDpmEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmEnabled"></a>

```java
public void resetDpmEnabled()
```

##### `resetDpmThreshold` <a name="resetDpmThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDpmThreshold"></a>

```java
public void resetDpmThreshold()
```

##### `resetDrsAdvancedOptions` <a name="resetDrsAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAdvancedOptions"></a>

```java
public void resetDrsAdvancedOptions()
```

##### `resetDrsAutomationLevel` <a name="resetDrsAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsAutomationLevel"></a>

```java
public void resetDrsAutomationLevel()
```

##### `resetDrsEnabled` <a name="resetDrsEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnabled"></a>

```java
public void resetDrsEnabled()
```

##### `resetDrsEnablePredictiveDrs` <a name="resetDrsEnablePredictiveDrs" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnablePredictiveDrs"></a>

```java
public void resetDrsEnablePredictiveDrs()
```

##### `resetDrsEnableVmOverrides` <a name="resetDrsEnableVmOverrides" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsEnableVmOverrides"></a>

```java
public void resetDrsEnableVmOverrides()
```

##### `resetDrsMigrationThreshold` <a name="resetDrsMigrationThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsMigrationThreshold"></a>

```java
public void resetDrsMigrationThreshold()
```

##### `resetDrsScaleDescendantsShares` <a name="resetDrsScaleDescendantsShares" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetDrsScaleDescendantsShares"></a>

```java
public void resetDrsScaleDescendantsShares()
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetFolder"></a>

```java
public void resetFolder()
```

##### `resetForceEvacuateOnDestroy` <a name="resetForceEvacuateOnDestroy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetForceEvacuateOnDestroy"></a>

```java
public void resetForceEvacuateOnDestroy()
```

##### `resetHaAdmissionControlFailoverHostSystemIds` <a name="resetHaAdmissionControlFailoverHostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlFailoverHostSystemIds"></a>

```java
public void resetHaAdmissionControlFailoverHostSystemIds()
```

##### `resetHaAdmissionControlHostFailureTolerance` <a name="resetHaAdmissionControlHostFailureTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlHostFailureTolerance"></a>

```java
public void resetHaAdmissionControlHostFailureTolerance()
```

##### `resetHaAdmissionControlPerformanceTolerance` <a name="resetHaAdmissionControlPerformanceTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPerformanceTolerance"></a>

```java
public void resetHaAdmissionControlPerformanceTolerance()
```

##### `resetHaAdmissionControlPolicy` <a name="resetHaAdmissionControlPolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlPolicy"></a>

```java
public void resetHaAdmissionControlPolicy()
```

##### `resetHaAdmissionControlResourcePercentageAutoCompute` <a name="resetHaAdmissionControlResourcePercentageAutoCompute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageAutoCompute"></a>

```java
public void resetHaAdmissionControlResourcePercentageAutoCompute()
```

##### `resetHaAdmissionControlResourcePercentageCpu` <a name="resetHaAdmissionControlResourcePercentageCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageCpu"></a>

```java
public void resetHaAdmissionControlResourcePercentageCpu()
```

##### `resetHaAdmissionControlResourcePercentageMemory` <a name="resetHaAdmissionControlResourcePercentageMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlResourcePercentageMemory"></a>

```java
public void resetHaAdmissionControlResourcePercentageMemory()
```

##### `resetHaAdmissionControlSlotPolicyExplicitCpu` <a name="resetHaAdmissionControlSlotPolicyExplicitCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitCpu"></a>

```java
public void resetHaAdmissionControlSlotPolicyExplicitCpu()
```

##### `resetHaAdmissionControlSlotPolicyExplicitMemory` <a name="resetHaAdmissionControlSlotPolicyExplicitMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyExplicitMemory"></a>

```java
public void resetHaAdmissionControlSlotPolicyExplicitMemory()
```

##### `resetHaAdmissionControlSlotPolicyUseExplicitSize` <a name="resetHaAdmissionControlSlotPolicyUseExplicitSize" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdmissionControlSlotPolicyUseExplicitSize"></a>

```java
public void resetHaAdmissionControlSlotPolicyUseExplicitSize()
```

##### `resetHaAdvancedOptions` <a name="resetHaAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaAdvancedOptions"></a>

```java
public void resetHaAdvancedOptions()
```

##### `resetHaDatastoreApdRecoveryAction` <a name="resetHaDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdRecoveryAction"></a>

```java
public void resetHaDatastoreApdRecoveryAction()
```

##### `resetHaDatastoreApdResponse` <a name="resetHaDatastoreApdResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponse"></a>

```java
public void resetHaDatastoreApdResponse()
```

##### `resetHaDatastoreApdResponseDelay` <a name="resetHaDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastoreApdResponseDelay"></a>

```java
public void resetHaDatastoreApdResponseDelay()
```

##### `resetHaDatastorePdlResponse` <a name="resetHaDatastorePdlResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaDatastorePdlResponse"></a>

```java
public void resetHaDatastorePdlResponse()
```

##### `resetHaEnabled` <a name="resetHaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaEnabled"></a>

```java
public void resetHaEnabled()
```

##### `resetHaHeartbeatDatastoreIds` <a name="resetHaHeartbeatDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastoreIds"></a>

```java
public void resetHaHeartbeatDatastoreIds()
```

##### `resetHaHeartbeatDatastorePolicy` <a name="resetHaHeartbeatDatastorePolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHeartbeatDatastorePolicy"></a>

```java
public void resetHaHeartbeatDatastorePolicy()
```

##### `resetHaHostIsolationResponse` <a name="resetHaHostIsolationResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostIsolationResponse"></a>

```java
public void resetHaHostIsolationResponse()
```

##### `resetHaHostMonitoring` <a name="resetHaHostMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaHostMonitoring"></a>

```java
public void resetHaHostMonitoring()
```

##### `resetHaVmComponentProtection` <a name="resetHaVmComponentProtection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmComponentProtection"></a>

```java
public void resetHaVmComponentProtection()
```

##### `resetHaVmDependencyRestartCondition` <a name="resetHaVmDependencyRestartCondition" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmDependencyRestartCondition"></a>

```java
public void resetHaVmDependencyRestartCondition()
```

##### `resetHaVmFailureInterval` <a name="resetHaVmFailureInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmFailureInterval"></a>

```java
public void resetHaVmFailureInterval()
```

##### `resetHaVmMaximumFailureWindow` <a name="resetHaVmMaximumFailureWindow" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumFailureWindow"></a>

```java
public void resetHaVmMaximumFailureWindow()
```

##### `resetHaVmMaximumResets` <a name="resetHaVmMaximumResets" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMaximumResets"></a>

```java
public void resetHaVmMaximumResets()
```

##### `resetHaVmMinimumUptime` <a name="resetHaVmMinimumUptime" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMinimumUptime"></a>

```java
public void resetHaVmMinimumUptime()
```

##### `resetHaVmMonitoring` <a name="resetHaVmMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmMonitoring"></a>

```java
public void resetHaVmMonitoring()
```

##### `resetHaVmRestartAdditionalDelay` <a name="resetHaVmRestartAdditionalDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartAdditionalDelay"></a>

```java
public void resetHaVmRestartAdditionalDelay()
```

##### `resetHaVmRestartPriority` <a name="resetHaVmRestartPriority" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartPriority"></a>

```java
public void resetHaVmRestartPriority()
```

##### `resetHaVmRestartTimeout` <a name="resetHaVmRestartTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHaVmRestartTimeout"></a>

```java
public void resetHaVmRestartTimeout()
```

##### `resetHostClusterExitTimeout` <a name="resetHostClusterExitTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostClusterExitTimeout"></a>

```java
public void resetHostClusterExitTimeout()
```

##### `resetHostImage` <a name="resetHostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostImage"></a>

```java
public void resetHostImage()
```

##### `resetHostManaged` <a name="resetHostManaged" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostManaged"></a>

```java
public void resetHostManaged()
```

##### `resetHostSystemIds` <a name="resetHostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetHostSystemIds"></a>

```java
public void resetHostSystemIds()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetId"></a>

```java
public void resetId()
```

##### `resetProactiveHaAutomationLevel` <a name="resetProactiveHaAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaAutomationLevel"></a>

```java
public void resetProactiveHaAutomationLevel()
```

##### `resetProactiveHaEnabled` <a name="resetProactiveHaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaEnabled"></a>

```java
public void resetProactiveHaEnabled()
```

##### `resetProactiveHaModerateRemediation` <a name="resetProactiveHaModerateRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaModerateRemediation"></a>

```java
public void resetProactiveHaModerateRemediation()
```

##### `resetProactiveHaProviderIds` <a name="resetProactiveHaProviderIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaProviderIds"></a>

```java
public void resetProactiveHaProviderIds()
```

##### `resetProactiveHaSevereRemediation` <a name="resetProactiveHaSevereRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetProactiveHaSevereRemediation"></a>

```java
public void resetProactiveHaSevereRemediation()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetVsanCompressionEnabled` <a name="resetVsanCompressionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanCompressionEnabled"></a>

```java
public void resetVsanCompressionEnabled()
```

##### `resetVsanDedupEnabled` <a name="resetVsanDedupEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDedupEnabled"></a>

```java
public void resetVsanDedupEnabled()
```

##### `resetVsanDiskGroup` <a name="resetVsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDiskGroup"></a>

```java
public void resetVsanDiskGroup()
```

##### `resetVsanDitEncryptionEnabled` <a name="resetVsanDitEncryptionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitEncryptionEnabled"></a>

```java
public void resetVsanDitEncryptionEnabled()
```

##### `resetVsanDitRekeyInterval` <a name="resetVsanDitRekeyInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanDitRekeyInterval"></a>

```java
public void resetVsanDitRekeyInterval()
```

##### `resetVsanEnabled` <a name="resetVsanEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEnabled"></a>

```java
public void resetVsanEnabled()
```

##### `resetVsanEsaEnabled` <a name="resetVsanEsaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanEsaEnabled"></a>

```java
public void resetVsanEsaEnabled()
```

##### `resetVsanFaultDomains` <a name="resetVsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanFaultDomains"></a>

```java
public void resetVsanFaultDomains()
```

##### `resetVsanNetworkDiagnosticModeEnabled` <a name="resetVsanNetworkDiagnosticModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanNetworkDiagnosticModeEnabled"></a>

```java
public void resetVsanNetworkDiagnosticModeEnabled()
```

##### `resetVsanPerformanceEnabled` <a name="resetVsanPerformanceEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanPerformanceEnabled"></a>

```java
public void resetVsanPerformanceEnabled()
```

##### `resetVsanRemoteDatastoreIds` <a name="resetVsanRemoteDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanRemoteDatastoreIds"></a>

```java
public void resetVsanRemoteDatastoreIds()
```

##### `resetVsanStretchedCluster` <a name="resetVsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanStretchedCluster"></a>

```java
public void resetVsanStretchedCluster()
```

##### `resetVsanUnmapEnabled` <a name="resetVsanUnmapEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanUnmapEnabled"></a>

```java
public void resetVsanUnmapEnabled()
```

##### `resetVsanVerboseModeEnabled` <a name="resetVsanVerboseModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.resetVsanVerboseModeEnabled"></a>

```java
public void resetVsanVerboseModeEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeCluster;

ComputeCluster.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeCluster;

ComputeCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeCluster;

ComputeCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeCluster;

ComputeCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImage">hostImage</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference">ComputeClusterHostImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.resourcePoolId">resourcePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroup">vsanDiskGroup</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList">ComputeClusterVsanDiskGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomains">vsanFaultDomains</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList">ComputeClusterVsanFaultDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedCluster">vsanStretchedCluster</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference">ComputeClusterVsanStretchedClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributesInput">customAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevelInput">dpmAutomationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabledInput">dpmEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThresholdInput">dpmThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptionsInput">drsAdvancedOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevelInput">drsAutomationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabledInput">drsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrsInput">drsEnablePredictiveDrsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverridesInput">drsEnableVmOverridesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThresholdInput">drsMigrationThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsSharesInput">drsScaleDescendantsSharesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroyInput">forceEvacuateOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIdsInput">haAdmissionControlFailoverHostSystemIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureToleranceInput">haAdmissionControlHostFailureToleranceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceToleranceInput">haAdmissionControlPerformanceToleranceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicyInput">haAdmissionControlPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoComputeInput">haAdmissionControlResourcePercentageAutoComputeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpuInput">haAdmissionControlResourcePercentageCpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemoryInput">haAdmissionControlResourcePercentageMemoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpuInput">haAdmissionControlSlotPolicyExplicitCpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemoryInput">haAdmissionControlSlotPolicyExplicitMemoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSizeInput">haAdmissionControlSlotPolicyUseExplicitSizeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptionsInput">haAdvancedOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryActionInput">haDatastoreApdRecoveryActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelayInput">haDatastoreApdResponseDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseInput">haDatastoreApdResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponseInput">haDatastorePdlResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabledInput">haEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIdsInput">haHeartbeatDatastoreIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicyInput">haHeartbeatDatastorePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponseInput">haHostIsolationResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoringInput">haHostMonitoringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtectionInput">haVmComponentProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartConditionInput">haVmDependencyRestartConditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureIntervalInput">haVmFailureIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindowInput">haVmMaximumFailureWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResetsInput">haVmMaximumResetsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptimeInput">haVmMinimumUptimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoringInput">haVmMonitoringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelayInput">haVmRestartAdditionalDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriorityInput">haVmRestartPriorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeoutInput">haVmRestartTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeoutInput">hostClusterExitTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImageInput">hostImageInput</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManagedInput">hostManagedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIdsInput">hostSystemIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevelInput">proactiveHaAutomationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabledInput">proactiveHaEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediationInput">proactiveHaModerateRemediationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIdsInput">proactiveHaProviderIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediationInput">proactiveHaSevereRemediationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabledInput">vsanCompressionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabledInput">vsanDedupEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroupInput">vsanDiskGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabledInput">vsanDitEncryptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyIntervalInput">vsanDitRekeyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabledInput">vsanEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabledInput">vsanEsaEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomainsInput">vsanFaultDomainsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabledInput">vsanNetworkDiagnosticModeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabledInput">vsanPerformanceEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIdsInput">vsanRemoteDatastoreIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedClusterInput">vsanStretchedClusterInput</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabledInput">vsanUnmapEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabledInput">vsanVerboseModeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevel">dpmAutomationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabled">dpmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThreshold">dpmThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptions">drsAdvancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevel">drsAutomationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabled">drsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrs">drsEnablePredictiveDrs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverrides">drsEnableVmOverrides</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThreshold">drsMigrationThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsShares">drsScaleDescendantsShares</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroy">forceEvacuateOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIds">haAdmissionControlFailoverHostSystemIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureTolerance">haAdmissionControlHostFailureTolerance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceTolerance">haAdmissionControlPerformanceTolerance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicy">haAdmissionControlPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoCompute">haAdmissionControlResourcePercentageAutoCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpu">haAdmissionControlResourcePercentageCpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemory">haAdmissionControlResourcePercentageMemory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpu">haAdmissionControlSlotPolicyExplicitCpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemory">haAdmissionControlSlotPolicyExplicitMemory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSize">haAdmissionControlSlotPolicyUseExplicitSize</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptions">haAdvancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryAction">haDatastoreApdRecoveryAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponse">haDatastoreApdResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelay">haDatastoreApdResponseDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponse">haDatastorePdlResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabled">haEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIds">haHeartbeatDatastoreIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicy">haHeartbeatDatastorePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponse">haHostIsolationResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoring">haHostMonitoring</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtection">haVmComponentProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartCondition">haVmDependencyRestartCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureInterval">haVmFailureInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindow">haVmMaximumFailureWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResets">haVmMaximumResets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptime">haVmMinimumUptime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoring">haVmMonitoring</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelay">haVmRestartAdditionalDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriority">haVmRestartPriority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeout">haVmRestartTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeout">hostClusterExitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManaged">hostManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIds">hostSystemIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevel">proactiveHaAutomationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabled">proactiveHaEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediation">proactiveHaModerateRemediation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIds">proactiveHaProviderIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediation">proactiveHaSevereRemediation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabled">vsanCompressionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabled">vsanDedupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabled">vsanDitEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyInterval">vsanDitRekeyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabled">vsanEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabled">vsanEsaEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabled">vsanNetworkDiagnosticModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabled">vsanPerformanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIds">vsanRemoteDatastoreIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabled">vsanUnmapEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabled">vsanVerboseModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostImage`<sup>Required</sup> <a name="hostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImage"></a>

```java
public ComputeClusterHostImageOutputReference getHostImage();
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference">ComputeClusterHostImageOutputReference</a>

---

##### `resourcePoolId`<sup>Required</sup> <a name="resourcePoolId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.resourcePoolId"></a>

```java
public java.lang.String getResourcePoolId();
```

- *Type:* java.lang.String

---

##### `vsanDiskGroup`<sup>Required</sup> <a name="vsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroup"></a>

```java
public ComputeClusterVsanDiskGroupList getVsanDiskGroup();
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList">ComputeClusterVsanDiskGroupList</a>

---

##### `vsanFaultDomains`<sup>Required</sup> <a name="vsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomains"></a>

```java
public ComputeClusterVsanFaultDomainsList getVsanFaultDomains();
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList">ComputeClusterVsanFaultDomainsList</a>

---

##### `vsanStretchedCluster`<sup>Required</sup> <a name="vsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedCluster"></a>

```java
public ComputeClusterVsanStretchedClusterOutputReference getVsanStretchedCluster();
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference">ComputeClusterVsanStretchedClusterOutputReference</a>

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `dpmAutomationLevelInput`<sup>Optional</sup> <a name="dpmAutomationLevelInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevelInput"></a>

```java
public java.lang.String getDpmAutomationLevelInput();
```

- *Type:* java.lang.String

---

##### `dpmEnabledInput`<sup>Optional</sup> <a name="dpmEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabledInput"></a>

```java
public java.lang.Object getDpmEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dpmThresholdInput`<sup>Optional</sup> <a name="dpmThresholdInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThresholdInput"></a>

```java
public java.lang.Number getDpmThresholdInput();
```

- *Type:* java.lang.Number

---

##### `drsAdvancedOptionsInput`<sup>Optional</sup> <a name="drsAdvancedOptionsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDrsAdvancedOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `drsAutomationLevelInput`<sup>Optional</sup> <a name="drsAutomationLevelInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevelInput"></a>

```java
public java.lang.String getDrsAutomationLevelInput();
```

- *Type:* java.lang.String

---

##### `drsEnabledInput`<sup>Optional</sup> <a name="drsEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabledInput"></a>

```java
public java.lang.Object getDrsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `drsEnablePredictiveDrsInput`<sup>Optional</sup> <a name="drsEnablePredictiveDrsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrsInput"></a>

```java
public java.lang.Object getDrsEnablePredictiveDrsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `drsEnableVmOverridesInput`<sup>Optional</sup> <a name="drsEnableVmOverridesInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverridesInput"></a>

```java
public java.lang.Object getDrsEnableVmOverridesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `drsMigrationThresholdInput`<sup>Optional</sup> <a name="drsMigrationThresholdInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThresholdInput"></a>

```java
public java.lang.Number getDrsMigrationThresholdInput();
```

- *Type:* java.lang.Number

---

##### `drsScaleDescendantsSharesInput`<sup>Optional</sup> <a name="drsScaleDescendantsSharesInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsSharesInput"></a>

```java
public java.lang.String getDrsScaleDescendantsSharesInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `forceEvacuateOnDestroyInput`<sup>Optional</sup> <a name="forceEvacuateOnDestroyInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroyInput"></a>

```java
public java.lang.Object getForceEvacuateOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `haAdmissionControlFailoverHostSystemIdsInput`<sup>Optional</sup> <a name="haAdmissionControlFailoverHostSystemIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIdsInput"></a>

```java
public java.util.List<java.lang.String> getHaAdmissionControlFailoverHostSystemIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `haAdmissionControlHostFailureToleranceInput`<sup>Optional</sup> <a name="haAdmissionControlHostFailureToleranceInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureToleranceInput"></a>

```java
public java.lang.Number getHaAdmissionControlHostFailureToleranceInput();
```

- *Type:* java.lang.Number

---

##### `haAdmissionControlPerformanceToleranceInput`<sup>Optional</sup> <a name="haAdmissionControlPerformanceToleranceInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceToleranceInput"></a>

```java
public java.lang.Number getHaAdmissionControlPerformanceToleranceInput();
```

- *Type:* java.lang.Number

---

##### `haAdmissionControlPolicyInput`<sup>Optional</sup> <a name="haAdmissionControlPolicyInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicyInput"></a>

```java
public java.lang.String getHaAdmissionControlPolicyInput();
```

- *Type:* java.lang.String

---

##### `haAdmissionControlResourcePercentageAutoComputeInput`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageAutoComputeInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoComputeInput"></a>

```java
public java.lang.Object getHaAdmissionControlResourcePercentageAutoComputeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `haAdmissionControlResourcePercentageCpuInput`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageCpuInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpuInput"></a>

```java
public java.lang.Number getHaAdmissionControlResourcePercentageCpuInput();
```

- *Type:* java.lang.Number

---

##### `haAdmissionControlResourcePercentageMemoryInput`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageMemoryInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemoryInput"></a>

```java
public java.lang.Number getHaAdmissionControlResourcePercentageMemoryInput();
```

- *Type:* java.lang.Number

---

##### `haAdmissionControlSlotPolicyExplicitCpuInput`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyExplicitCpuInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpuInput"></a>

```java
public java.lang.Number getHaAdmissionControlSlotPolicyExplicitCpuInput();
```

- *Type:* java.lang.Number

---

##### `haAdmissionControlSlotPolicyExplicitMemoryInput`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyExplicitMemoryInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemoryInput"></a>

```java
public java.lang.Number getHaAdmissionControlSlotPolicyExplicitMemoryInput();
```

- *Type:* java.lang.Number

---

##### `haAdmissionControlSlotPolicyUseExplicitSizeInput`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyUseExplicitSizeInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSizeInput"></a>

```java
public java.lang.Object getHaAdmissionControlSlotPolicyUseExplicitSizeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `haAdvancedOptionsInput`<sup>Optional</sup> <a name="haAdvancedOptionsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHaAdvancedOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `haDatastoreApdRecoveryActionInput`<sup>Optional</sup> <a name="haDatastoreApdRecoveryActionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryActionInput"></a>

```java
public java.lang.String getHaDatastoreApdRecoveryActionInput();
```

- *Type:* java.lang.String

---

##### `haDatastoreApdResponseDelayInput`<sup>Optional</sup> <a name="haDatastoreApdResponseDelayInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelayInput"></a>

```java
public java.lang.Number getHaDatastoreApdResponseDelayInput();
```

- *Type:* java.lang.Number

---

##### `haDatastoreApdResponseInput`<sup>Optional</sup> <a name="haDatastoreApdResponseInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseInput"></a>

```java
public java.lang.String getHaDatastoreApdResponseInput();
```

- *Type:* java.lang.String

---

##### `haDatastorePdlResponseInput`<sup>Optional</sup> <a name="haDatastorePdlResponseInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponseInput"></a>

```java
public java.lang.String getHaDatastorePdlResponseInput();
```

- *Type:* java.lang.String

---

##### `haEnabledInput`<sup>Optional</sup> <a name="haEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabledInput"></a>

```java
public java.lang.Object getHaEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `haHeartbeatDatastoreIdsInput`<sup>Optional</sup> <a name="haHeartbeatDatastoreIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIdsInput"></a>

```java
public java.util.List<java.lang.String> getHaHeartbeatDatastoreIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `haHeartbeatDatastorePolicyInput`<sup>Optional</sup> <a name="haHeartbeatDatastorePolicyInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicyInput"></a>

```java
public java.lang.String getHaHeartbeatDatastorePolicyInput();
```

- *Type:* java.lang.String

---

##### `haHostIsolationResponseInput`<sup>Optional</sup> <a name="haHostIsolationResponseInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponseInput"></a>

```java
public java.lang.String getHaHostIsolationResponseInput();
```

- *Type:* java.lang.String

---

##### `haHostMonitoringInput`<sup>Optional</sup> <a name="haHostMonitoringInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoringInput"></a>

```java
public java.lang.String getHaHostMonitoringInput();
```

- *Type:* java.lang.String

---

##### `haVmComponentProtectionInput`<sup>Optional</sup> <a name="haVmComponentProtectionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtectionInput"></a>

```java
public java.lang.String getHaVmComponentProtectionInput();
```

- *Type:* java.lang.String

---

##### `haVmDependencyRestartConditionInput`<sup>Optional</sup> <a name="haVmDependencyRestartConditionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartConditionInput"></a>

```java
public java.lang.String getHaVmDependencyRestartConditionInput();
```

- *Type:* java.lang.String

---

##### `haVmFailureIntervalInput`<sup>Optional</sup> <a name="haVmFailureIntervalInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureIntervalInput"></a>

```java
public java.lang.Number getHaVmFailureIntervalInput();
```

- *Type:* java.lang.Number

---

##### `haVmMaximumFailureWindowInput`<sup>Optional</sup> <a name="haVmMaximumFailureWindowInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindowInput"></a>

```java
public java.lang.Number getHaVmMaximumFailureWindowInput();
```

- *Type:* java.lang.Number

---

##### `haVmMaximumResetsInput`<sup>Optional</sup> <a name="haVmMaximumResetsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResetsInput"></a>

```java
public java.lang.Number getHaVmMaximumResetsInput();
```

- *Type:* java.lang.Number

---

##### `haVmMinimumUptimeInput`<sup>Optional</sup> <a name="haVmMinimumUptimeInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptimeInput"></a>

```java
public java.lang.Number getHaVmMinimumUptimeInput();
```

- *Type:* java.lang.Number

---

##### `haVmMonitoringInput`<sup>Optional</sup> <a name="haVmMonitoringInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoringInput"></a>

```java
public java.lang.String getHaVmMonitoringInput();
```

- *Type:* java.lang.String

---

##### `haVmRestartAdditionalDelayInput`<sup>Optional</sup> <a name="haVmRestartAdditionalDelayInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelayInput"></a>

```java
public java.lang.Number getHaVmRestartAdditionalDelayInput();
```

- *Type:* java.lang.Number

---

##### `haVmRestartPriorityInput`<sup>Optional</sup> <a name="haVmRestartPriorityInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriorityInput"></a>

```java
public java.lang.String getHaVmRestartPriorityInput();
```

- *Type:* java.lang.String

---

##### `haVmRestartTimeoutInput`<sup>Optional</sup> <a name="haVmRestartTimeoutInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeoutInput"></a>

```java
public java.lang.Number getHaVmRestartTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `hostClusterExitTimeoutInput`<sup>Optional</sup> <a name="hostClusterExitTimeoutInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeoutInput"></a>

```java
public java.lang.Number getHostClusterExitTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `hostImageInput`<sup>Optional</sup> <a name="hostImageInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostImageInput"></a>

```java
public ComputeClusterHostImage getHostImageInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

---

##### `hostManagedInput`<sup>Optional</sup> <a name="hostManagedInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManagedInput"></a>

```java
public java.lang.Object getHostManagedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostSystemIdsInput`<sup>Optional</sup> <a name="hostSystemIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIdsInput"></a>

```java
public java.util.List<java.lang.String> getHostSystemIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `proactiveHaAutomationLevelInput`<sup>Optional</sup> <a name="proactiveHaAutomationLevelInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevelInput"></a>

```java
public java.lang.String getProactiveHaAutomationLevelInput();
```

- *Type:* java.lang.String

---

##### `proactiveHaEnabledInput`<sup>Optional</sup> <a name="proactiveHaEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabledInput"></a>

```java
public java.lang.Object getProactiveHaEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `proactiveHaModerateRemediationInput`<sup>Optional</sup> <a name="proactiveHaModerateRemediationInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediationInput"></a>

```java
public java.lang.String getProactiveHaModerateRemediationInput();
```

- *Type:* java.lang.String

---

##### `proactiveHaProviderIdsInput`<sup>Optional</sup> <a name="proactiveHaProviderIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIdsInput"></a>

```java
public java.util.List<java.lang.String> getProactiveHaProviderIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `proactiveHaSevereRemediationInput`<sup>Optional</sup> <a name="proactiveHaSevereRemediationInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediationInput"></a>

```java
public java.lang.String getProactiveHaSevereRemediationInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vsanCompressionEnabledInput`<sup>Optional</sup> <a name="vsanCompressionEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabledInput"></a>

```java
public java.lang.Object getVsanCompressionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanDedupEnabledInput`<sup>Optional</sup> <a name="vsanDedupEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabledInput"></a>

```java
public java.lang.Object getVsanDedupEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanDiskGroupInput`<sup>Optional</sup> <a name="vsanDiskGroupInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDiskGroupInput"></a>

```java
public java.lang.Object getVsanDiskGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>>

---

##### `vsanDitEncryptionEnabledInput`<sup>Optional</sup> <a name="vsanDitEncryptionEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabledInput"></a>

```java
public java.lang.Object getVsanDitEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanDitRekeyIntervalInput`<sup>Optional</sup> <a name="vsanDitRekeyIntervalInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyIntervalInput"></a>

```java
public java.lang.Number getVsanDitRekeyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `vsanEnabledInput`<sup>Optional</sup> <a name="vsanEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabledInput"></a>

```java
public java.lang.Object getVsanEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanEsaEnabledInput`<sup>Optional</sup> <a name="vsanEsaEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabledInput"></a>

```java
public java.lang.Object getVsanEsaEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanFaultDomainsInput`<sup>Optional</sup> <a name="vsanFaultDomainsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanFaultDomainsInput"></a>

```java
public java.lang.Object getVsanFaultDomainsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>>

---

##### `vsanNetworkDiagnosticModeEnabledInput`<sup>Optional</sup> <a name="vsanNetworkDiagnosticModeEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabledInput"></a>

```java
public java.lang.Object getVsanNetworkDiagnosticModeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanPerformanceEnabledInput`<sup>Optional</sup> <a name="vsanPerformanceEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabledInput"></a>

```java
public java.lang.Object getVsanPerformanceEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanRemoteDatastoreIdsInput`<sup>Optional</sup> <a name="vsanRemoteDatastoreIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIdsInput"></a>

```java
public java.util.List<java.lang.String> getVsanRemoteDatastoreIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vsanStretchedClusterInput`<sup>Optional</sup> <a name="vsanStretchedClusterInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanStretchedClusterInput"></a>

```java
public ComputeClusterVsanStretchedCluster getVsanStretchedClusterInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

---

##### `vsanUnmapEnabledInput`<sup>Optional</sup> <a name="vsanUnmapEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabledInput"></a>

```java
public java.lang.Object getVsanUnmapEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanVerboseModeEnabledInput`<sup>Optional</sup> <a name="vsanVerboseModeEnabledInput" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabledInput"></a>

```java
public java.lang.Object getVsanVerboseModeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `dpmAutomationLevel`<sup>Required</sup> <a name="dpmAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmAutomationLevel"></a>

```java
public java.lang.String getDpmAutomationLevel();
```

- *Type:* java.lang.String

---

##### `dpmEnabled`<sup>Required</sup> <a name="dpmEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmEnabled"></a>

```java
public java.lang.Object getDpmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dpmThreshold`<sup>Required</sup> <a name="dpmThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.dpmThreshold"></a>

```java
public java.lang.Number getDpmThreshold();
```

- *Type:* java.lang.Number

---

##### `drsAdvancedOptions`<sup>Required</sup> <a name="drsAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAdvancedOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDrsAdvancedOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `drsAutomationLevel`<sup>Required</sup> <a name="drsAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsAutomationLevel"></a>

```java
public java.lang.String getDrsAutomationLevel();
```

- *Type:* java.lang.String

---

##### `drsEnabled`<sup>Required</sup> <a name="drsEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnabled"></a>

```java
public java.lang.Object getDrsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `drsEnablePredictiveDrs`<sup>Required</sup> <a name="drsEnablePredictiveDrs" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnablePredictiveDrs"></a>

```java
public java.lang.Object getDrsEnablePredictiveDrs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `drsEnableVmOverrides`<sup>Required</sup> <a name="drsEnableVmOverrides" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsEnableVmOverrides"></a>

```java
public java.lang.Object getDrsEnableVmOverrides();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `drsMigrationThreshold`<sup>Required</sup> <a name="drsMigrationThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsMigrationThreshold"></a>

```java
public java.lang.Number getDrsMigrationThreshold();
```

- *Type:* java.lang.Number

---

##### `drsScaleDescendantsShares`<sup>Required</sup> <a name="drsScaleDescendantsShares" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.drsScaleDescendantsShares"></a>

```java
public java.lang.String getDrsScaleDescendantsShares();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `forceEvacuateOnDestroy`<sup>Required</sup> <a name="forceEvacuateOnDestroy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.forceEvacuateOnDestroy"></a>

```java
public java.lang.Object getForceEvacuateOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `haAdmissionControlFailoverHostSystemIds`<sup>Required</sup> <a name="haAdmissionControlFailoverHostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlFailoverHostSystemIds"></a>

```java
public java.util.List<java.lang.String> getHaAdmissionControlFailoverHostSystemIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `haAdmissionControlHostFailureTolerance`<sup>Required</sup> <a name="haAdmissionControlHostFailureTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlHostFailureTolerance"></a>

```java
public java.lang.Number getHaAdmissionControlHostFailureTolerance();
```

- *Type:* java.lang.Number

---

##### `haAdmissionControlPerformanceTolerance`<sup>Required</sup> <a name="haAdmissionControlPerformanceTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPerformanceTolerance"></a>

```java
public java.lang.Number getHaAdmissionControlPerformanceTolerance();
```

- *Type:* java.lang.Number

---

##### `haAdmissionControlPolicy`<sup>Required</sup> <a name="haAdmissionControlPolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlPolicy"></a>

```java
public java.lang.String getHaAdmissionControlPolicy();
```

- *Type:* java.lang.String

---

##### `haAdmissionControlResourcePercentageAutoCompute`<sup>Required</sup> <a name="haAdmissionControlResourcePercentageAutoCompute" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageAutoCompute"></a>

```java
public java.lang.Object getHaAdmissionControlResourcePercentageAutoCompute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `haAdmissionControlResourcePercentageCpu`<sup>Required</sup> <a name="haAdmissionControlResourcePercentageCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageCpu"></a>

```java
public java.lang.Number getHaAdmissionControlResourcePercentageCpu();
```

- *Type:* java.lang.Number

---

##### `haAdmissionControlResourcePercentageMemory`<sup>Required</sup> <a name="haAdmissionControlResourcePercentageMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlResourcePercentageMemory"></a>

```java
public java.lang.Number getHaAdmissionControlResourcePercentageMemory();
```

- *Type:* java.lang.Number

---

##### `haAdmissionControlSlotPolicyExplicitCpu`<sup>Required</sup> <a name="haAdmissionControlSlotPolicyExplicitCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitCpu"></a>

```java
public java.lang.Number getHaAdmissionControlSlotPolicyExplicitCpu();
```

- *Type:* java.lang.Number

---

##### `haAdmissionControlSlotPolicyExplicitMemory`<sup>Required</sup> <a name="haAdmissionControlSlotPolicyExplicitMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyExplicitMemory"></a>

```java
public java.lang.Number getHaAdmissionControlSlotPolicyExplicitMemory();
```

- *Type:* java.lang.Number

---

##### `haAdmissionControlSlotPolicyUseExplicitSize`<sup>Required</sup> <a name="haAdmissionControlSlotPolicyUseExplicitSize" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdmissionControlSlotPolicyUseExplicitSize"></a>

```java
public java.lang.Object getHaAdmissionControlSlotPolicyUseExplicitSize();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `haAdvancedOptions`<sup>Required</sup> <a name="haAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haAdvancedOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHaAdvancedOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `haDatastoreApdRecoveryAction`<sup>Required</sup> <a name="haDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdRecoveryAction"></a>

```java
public java.lang.String getHaDatastoreApdRecoveryAction();
```

- *Type:* java.lang.String

---

##### `haDatastoreApdResponse`<sup>Required</sup> <a name="haDatastoreApdResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponse"></a>

```java
public java.lang.String getHaDatastoreApdResponse();
```

- *Type:* java.lang.String

---

##### `haDatastoreApdResponseDelay`<sup>Required</sup> <a name="haDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastoreApdResponseDelay"></a>

```java
public java.lang.Number getHaDatastoreApdResponseDelay();
```

- *Type:* java.lang.Number

---

##### `haDatastorePdlResponse`<sup>Required</sup> <a name="haDatastorePdlResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haDatastorePdlResponse"></a>

```java
public java.lang.String getHaDatastorePdlResponse();
```

- *Type:* java.lang.String

---

##### `haEnabled`<sup>Required</sup> <a name="haEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haEnabled"></a>

```java
public java.lang.Object getHaEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `haHeartbeatDatastoreIds`<sup>Required</sup> <a name="haHeartbeatDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastoreIds"></a>

```java
public java.util.List<java.lang.String> getHaHeartbeatDatastoreIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `haHeartbeatDatastorePolicy`<sup>Required</sup> <a name="haHeartbeatDatastorePolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHeartbeatDatastorePolicy"></a>

```java
public java.lang.String getHaHeartbeatDatastorePolicy();
```

- *Type:* java.lang.String

---

##### `haHostIsolationResponse`<sup>Required</sup> <a name="haHostIsolationResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostIsolationResponse"></a>

```java
public java.lang.String getHaHostIsolationResponse();
```

- *Type:* java.lang.String

---

##### `haHostMonitoring`<sup>Required</sup> <a name="haHostMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haHostMonitoring"></a>

```java
public java.lang.String getHaHostMonitoring();
```

- *Type:* java.lang.String

---

##### `haVmComponentProtection`<sup>Required</sup> <a name="haVmComponentProtection" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmComponentProtection"></a>

```java
public java.lang.String getHaVmComponentProtection();
```

- *Type:* java.lang.String

---

##### `haVmDependencyRestartCondition`<sup>Required</sup> <a name="haVmDependencyRestartCondition" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmDependencyRestartCondition"></a>

```java
public java.lang.String getHaVmDependencyRestartCondition();
```

- *Type:* java.lang.String

---

##### `haVmFailureInterval`<sup>Required</sup> <a name="haVmFailureInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmFailureInterval"></a>

```java
public java.lang.Number getHaVmFailureInterval();
```

- *Type:* java.lang.Number

---

##### `haVmMaximumFailureWindow`<sup>Required</sup> <a name="haVmMaximumFailureWindow" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumFailureWindow"></a>

```java
public java.lang.Number getHaVmMaximumFailureWindow();
```

- *Type:* java.lang.Number

---

##### `haVmMaximumResets`<sup>Required</sup> <a name="haVmMaximumResets" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMaximumResets"></a>

```java
public java.lang.Number getHaVmMaximumResets();
```

- *Type:* java.lang.Number

---

##### `haVmMinimumUptime`<sup>Required</sup> <a name="haVmMinimumUptime" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMinimumUptime"></a>

```java
public java.lang.Number getHaVmMinimumUptime();
```

- *Type:* java.lang.Number

---

##### `haVmMonitoring`<sup>Required</sup> <a name="haVmMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmMonitoring"></a>

```java
public java.lang.String getHaVmMonitoring();
```

- *Type:* java.lang.String

---

##### `haVmRestartAdditionalDelay`<sup>Required</sup> <a name="haVmRestartAdditionalDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartAdditionalDelay"></a>

```java
public java.lang.Number getHaVmRestartAdditionalDelay();
```

- *Type:* java.lang.Number

---

##### `haVmRestartPriority`<sup>Required</sup> <a name="haVmRestartPriority" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartPriority"></a>

```java
public java.lang.String getHaVmRestartPriority();
```

- *Type:* java.lang.String

---

##### `haVmRestartTimeout`<sup>Required</sup> <a name="haVmRestartTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.haVmRestartTimeout"></a>

```java
public java.lang.Number getHaVmRestartTimeout();
```

- *Type:* java.lang.Number

---

##### `hostClusterExitTimeout`<sup>Required</sup> <a name="hostClusterExitTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostClusterExitTimeout"></a>

```java
public java.lang.Number getHostClusterExitTimeout();
```

- *Type:* java.lang.Number

---

##### `hostManaged`<sup>Required</sup> <a name="hostManaged" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostManaged"></a>

```java
public java.lang.Object getHostManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostSystemIds`<sup>Required</sup> <a name="hostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.hostSystemIds"></a>

```java
public java.util.List<java.lang.String> getHostSystemIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `proactiveHaAutomationLevel`<sup>Required</sup> <a name="proactiveHaAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaAutomationLevel"></a>

```java
public java.lang.String getProactiveHaAutomationLevel();
```

- *Type:* java.lang.String

---

##### `proactiveHaEnabled`<sup>Required</sup> <a name="proactiveHaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaEnabled"></a>

```java
public java.lang.Object getProactiveHaEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `proactiveHaModerateRemediation`<sup>Required</sup> <a name="proactiveHaModerateRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaModerateRemediation"></a>

```java
public java.lang.String getProactiveHaModerateRemediation();
```

- *Type:* java.lang.String

---

##### `proactiveHaProviderIds`<sup>Required</sup> <a name="proactiveHaProviderIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaProviderIds"></a>

```java
public java.util.List<java.lang.String> getProactiveHaProviderIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `proactiveHaSevereRemediation`<sup>Required</sup> <a name="proactiveHaSevereRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.proactiveHaSevereRemediation"></a>

```java
public java.lang.String getProactiveHaSevereRemediation();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vsanCompressionEnabled`<sup>Required</sup> <a name="vsanCompressionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanCompressionEnabled"></a>

```java
public java.lang.Object getVsanCompressionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanDedupEnabled`<sup>Required</sup> <a name="vsanDedupEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDedupEnabled"></a>

```java
public java.lang.Object getVsanDedupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanDitEncryptionEnabled`<sup>Required</sup> <a name="vsanDitEncryptionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitEncryptionEnabled"></a>

```java
public java.lang.Object getVsanDitEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanDitRekeyInterval`<sup>Required</sup> <a name="vsanDitRekeyInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanDitRekeyInterval"></a>

```java
public java.lang.Number getVsanDitRekeyInterval();
```

- *Type:* java.lang.Number

---

##### `vsanEnabled`<sup>Required</sup> <a name="vsanEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEnabled"></a>

```java
public java.lang.Object getVsanEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanEsaEnabled`<sup>Required</sup> <a name="vsanEsaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanEsaEnabled"></a>

```java
public java.lang.Object getVsanEsaEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanNetworkDiagnosticModeEnabled`<sup>Required</sup> <a name="vsanNetworkDiagnosticModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanNetworkDiagnosticModeEnabled"></a>

```java
public java.lang.Object getVsanNetworkDiagnosticModeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanPerformanceEnabled`<sup>Required</sup> <a name="vsanPerformanceEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanPerformanceEnabled"></a>

```java
public java.lang.Object getVsanPerformanceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanRemoteDatastoreIds`<sup>Required</sup> <a name="vsanRemoteDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanRemoteDatastoreIds"></a>

```java
public java.util.List<java.lang.String> getVsanRemoteDatastoreIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vsanUnmapEnabled`<sup>Required</sup> <a name="vsanUnmapEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanUnmapEnabled"></a>

```java
public java.lang.Object getVsanUnmapEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsanVerboseModeEnabled`<sup>Required</sup> <a name="vsanVerboseModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.vsanVerboseModeEnabled"></a>

```java
public java.lang.Object getVsanVerboseModeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.computeCluster.ComputeCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterConfig <a name="ComputeClusterConfig" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterConfig;

ComputeClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .datacenterId(java.lang.String)
    .name(java.lang.String)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .dpmAutomationLevel(java.lang.String)
//  .dpmEnabled(java.lang.Boolean)
//  .dpmEnabled(IResolvable)
//  .dpmThreshold(java.lang.Number)
//  .drsAdvancedOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .drsAutomationLevel(java.lang.String)
//  .drsEnabled(java.lang.Boolean)
//  .drsEnabled(IResolvable)
//  .drsEnablePredictiveDrs(java.lang.Boolean)
//  .drsEnablePredictiveDrs(IResolvable)
//  .drsEnableVmOverrides(java.lang.Boolean)
//  .drsEnableVmOverrides(IResolvable)
//  .drsMigrationThreshold(java.lang.Number)
//  .drsScaleDescendantsShares(java.lang.String)
//  .folder(java.lang.String)
//  .forceEvacuateOnDestroy(java.lang.Boolean)
//  .forceEvacuateOnDestroy(IResolvable)
//  .haAdmissionControlFailoverHostSystemIds(java.util.List<java.lang.String>)
//  .haAdmissionControlHostFailureTolerance(java.lang.Number)
//  .haAdmissionControlPerformanceTolerance(java.lang.Number)
//  .haAdmissionControlPolicy(java.lang.String)
//  .haAdmissionControlResourcePercentageAutoCompute(java.lang.Boolean)
//  .haAdmissionControlResourcePercentageAutoCompute(IResolvable)
//  .haAdmissionControlResourcePercentageCpu(java.lang.Number)
//  .haAdmissionControlResourcePercentageMemory(java.lang.Number)
//  .haAdmissionControlSlotPolicyExplicitCpu(java.lang.Number)
//  .haAdmissionControlSlotPolicyExplicitMemory(java.lang.Number)
//  .haAdmissionControlSlotPolicyUseExplicitSize(java.lang.Boolean)
//  .haAdmissionControlSlotPolicyUseExplicitSize(IResolvable)
//  .haAdvancedOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .haDatastoreApdRecoveryAction(java.lang.String)
//  .haDatastoreApdResponse(java.lang.String)
//  .haDatastoreApdResponseDelay(java.lang.Number)
//  .haDatastorePdlResponse(java.lang.String)
//  .haEnabled(java.lang.Boolean)
//  .haEnabled(IResolvable)
//  .haHeartbeatDatastoreIds(java.util.List<java.lang.String>)
//  .haHeartbeatDatastorePolicy(java.lang.String)
//  .haHostIsolationResponse(java.lang.String)
//  .haHostMonitoring(java.lang.String)
//  .haVmComponentProtection(java.lang.String)
//  .haVmDependencyRestartCondition(java.lang.String)
//  .haVmFailureInterval(java.lang.Number)
//  .haVmMaximumFailureWindow(java.lang.Number)
//  .haVmMaximumResets(java.lang.Number)
//  .haVmMinimumUptime(java.lang.Number)
//  .haVmMonitoring(java.lang.String)
//  .haVmRestartAdditionalDelay(java.lang.Number)
//  .haVmRestartPriority(java.lang.String)
//  .haVmRestartTimeout(java.lang.Number)
//  .hostClusterExitTimeout(java.lang.Number)
//  .hostImage(ComputeClusterHostImage)
//  .hostManaged(java.lang.Boolean)
//  .hostManaged(IResolvable)
//  .hostSystemIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .proactiveHaAutomationLevel(java.lang.String)
//  .proactiveHaEnabled(java.lang.Boolean)
//  .proactiveHaEnabled(IResolvable)
//  .proactiveHaModerateRemediation(java.lang.String)
//  .proactiveHaProviderIds(java.util.List<java.lang.String>)
//  .proactiveHaSevereRemediation(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .vsanCompressionEnabled(java.lang.Boolean)
//  .vsanCompressionEnabled(IResolvable)
//  .vsanDedupEnabled(java.lang.Boolean)
//  .vsanDedupEnabled(IResolvable)
//  .vsanDiskGroup(IResolvable)
//  .vsanDiskGroup(java.util.List<ComputeClusterVsanDiskGroup>)
//  .vsanDitEncryptionEnabled(java.lang.Boolean)
//  .vsanDitEncryptionEnabled(IResolvable)
//  .vsanDitRekeyInterval(java.lang.Number)
//  .vsanEnabled(java.lang.Boolean)
//  .vsanEnabled(IResolvable)
//  .vsanEsaEnabled(java.lang.Boolean)
//  .vsanEsaEnabled(IResolvable)
//  .vsanFaultDomains(IResolvable)
//  .vsanFaultDomains(java.util.List<ComputeClusterVsanFaultDomains>)
//  .vsanNetworkDiagnosticModeEnabled(java.lang.Boolean)
//  .vsanNetworkDiagnosticModeEnabled(IResolvable)
//  .vsanPerformanceEnabled(java.lang.Boolean)
//  .vsanPerformanceEnabled(IResolvable)
//  .vsanRemoteDatastoreIds(java.util.List<java.lang.String>)
//  .vsanStretchedCluster(ComputeClusterVsanStretchedCluster)
//  .vsanUnmapEnabled(java.lang.Boolean)
//  .vsanUnmapEnabled(IResolvable)
//  .vsanVerboseModeEnabled(java.lang.Boolean)
//  .vsanVerboseModeEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datacenter to put the cluster in. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name for the new cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmAutomationLevel">dpmAutomationLevel</a></code> | <code>java.lang.String</code> | The automation level for host power operations in this cluster. Can be one of manual or automated. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmEnabled">dpmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable DPM support for DRS. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmThreshold">dpmThreshold</a></code> | <code>java.lang.Number</code> | A value between 1 and 5 indicating the threshold of load within the cluster that influences host power operations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAdvancedOptions">drsAdvancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Advanced configuration options for DRS and DPM. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAutomationLevel">drsAutomationLevel</a></code> | <code>java.lang.String</code> | The default automation level for all virtual machines in this cluster. Can be one of manual, partiallyAutomated, or fullyAutomated. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnabled">drsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable DRS for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnablePredictiveDrs">drsEnablePredictiveDrs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, enables DRS to use data from vRealize Operations Manager to make proactive DRS recommendations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnableVmOverrides">drsEnableVmOverrides</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, allows individual VM overrides within this cluster to be set. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsMigrationThreshold">drsMigrationThreshold</a></code> | <code>java.lang.Number</code> | A value between 1 and 5 indicating the threshold of imbalance tolerated between hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsScaleDescendantsShares">drsScaleDescendantsShares</a></code> | <code>java.lang.String</code> | Enable scalable shares for all descendants of this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | The name of the folder to locate the cluster in. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forceEvacuateOnDestroy">forceEvacuateOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Force removal of all hosts in the cluster during destroy and make them standalone hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlFailoverHostSystemIds">haAdmissionControlFailoverHostSystemIds</a></code> | <code>java.util.List<java.lang.String></code> | When ha_admission_control_policy is failoverHosts, this defines the managed object IDs of hosts to use as dedicated failover hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlHostFailureTolerance">haAdmissionControlHostFailureTolerance</a></code> | <code>java.lang.Number</code> | The maximum number of failed hosts that admission control tolerates when making decisions on whether to permit virtual machine operations. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPerformanceTolerance">haAdmissionControlPerformanceTolerance</a></code> | <code>java.lang.Number</code> | The percentage of resource reduction that a cluster of VMs can tolerate in case of a failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPolicy">haAdmissionControlPolicy</a></code> | <code>java.lang.String</code> | The type of admission control policy to use with vSphere HA, which controls whether or not specific VM operations are permitted in the cluster in order to protect the reliability of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageAutoCompute">haAdmissionControlResourcePercentageAutoCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When ha_admission_control_policy is resourcePercentage, automatically determine available resource percentages by subtracting the average number of host resources represented by the ha_admission_control_host_failure_tolerance setting from the total amount of resources in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageCpu">haAdmissionControlResourcePercentageCpu</a></code> | <code>java.lang.Number</code> | When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of CPU resources in the cluster to reserve for failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageMemory">haAdmissionControlResourcePercentageMemory</a></code> | <code>java.lang.Number</code> | When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of memory resources in the cluster to reserve for failover. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitCpu">haAdmissionControlSlotPolicyExplicitCpu</a></code> | <code>java.lang.Number</code> | When ha_admission_control_policy is slotPolicy, this controls the user-defined CPU slot size, in MHz. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitMemory">haAdmissionControlSlotPolicyExplicitMemory</a></code> | <code>java.lang.Number</code> | When ha_admission_control_policy is slotPolicy, this controls the user-defined memory slot size, in MB. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyUseExplicitSize">haAdmissionControlSlotPolicyUseExplicitSize</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When ha_admission_control_policy is slotPolicy, this setting controls whether or not you wish to supply explicit values to CPU and memory slot sizes. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdvancedOptions">haAdvancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Advanced configuration options for vSphere HA. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdRecoveryAction">haDatastoreApdRecoveryAction</a></code> | <code>java.lang.String</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines if an APD status on an affected datastore clears in the middle of an APD event. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponse">haDatastoreApdResponse</a></code> | <code>java.lang.String</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected loss to all paths to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponseDelay">haDatastoreApdResponseDelay</a></code> | <code>java.lang.Number</code> | When ha_vm_component_protection is enabled, controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastorePdlResponse">haDatastorePdlResponse</a></code> | <code>java.lang.String</code> | When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected a permanent device loss to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haEnabled">haEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable vSphere HA for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastoreIds">haHeartbeatDatastoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The list of managed object IDs for preferred datastores to use for HA heartbeating. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastorePolicy">haHeartbeatDatastorePolicy</a></code> | <code>java.lang.String</code> | The selection policy for HA heartbeat datastores. Can be one of allFeasibleDs, userSelectedDs, or allFeasibleDsWithUserPreference. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostIsolationResponse">haHostIsolationResponse</a></code> | <code>java.lang.String</code> | The action to take on virtual machines when a host has detected that it has been isolated from the rest of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostMonitoring">haHostMonitoring</a></code> | <code>java.lang.String</code> | Global setting that controls whether vSphere HA remediates VMs on host failure. Can be one of enabled or disabled. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmComponentProtection">haVmComponentProtection</a></code> | <code>java.lang.String</code> | Controls vSphere VM component protection for virtual machines in this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmDependencyRestartCondition">haVmDependencyRestartCondition</a></code> | <code>java.lang.String</code> | The condition used to determine whether or not VMs in a certain restart priority class are online, allowing HA to move on to restarting VMs on the next priority. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmFailureInterval">haVmFailureInterval</a></code> | <code>java.lang.Number</code> | If a heartbeat from a virtual machine is not received within this configured interval, the virtual machine is marked as failed. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumFailureWindow">haVmMaximumFailureWindow</a></code> | <code>java.lang.Number</code> | The length of the reset window in which ha_vm_maximum_resets can operate. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumResets">haVmMaximumResets</a></code> | <code>java.lang.Number</code> | The maximum number of resets that HA will perform to a virtual machine when responding to a failure event. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMinimumUptime">haVmMinimumUptime</a></code> | <code>java.lang.Number</code> | The time, in seconds, that HA waits after powering on a virtual machine before monitoring for heartbeats. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMonitoring">haVmMonitoring</a></code> | <code>java.lang.String</code> | The type of virtual machine monitoring to use when HA is enabled in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartAdditionalDelay">haVmRestartAdditionalDelay</a></code> | <code>java.lang.Number</code> | Additional delay in seconds after ready condition is met. A VM is considered ready at this point. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartPriority">haVmRestartPriority</a></code> | <code>java.lang.String</code> | The default restart priority for affected VMs when vSphere detects a host failure. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartTimeout">haVmRestartTimeout</a></code> | <code>java.lang.Number</code> | The maximum time, in seconds, that vSphere HA will wait for virtual machines in one priority to be ready before proceeding with the next priority. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostClusterExitTimeout">hostClusterExitTimeout</a></code> | <code>java.lang.Number</code> | The timeout for each host maintenance mode operation when removing hosts from a cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostImage">hostImage</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | host_image block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostManaged">hostManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Must be set if cluster enrollment is managed from host resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostSystemIds">hostSystemIds</a></code> | <code>java.util.List<java.lang.String></code> | The managed object IDs of the hosts to put in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#id ComputeCluster#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaAutomationLevel">proactiveHaAutomationLevel</a></code> | <code>java.lang.String</code> | The DRS behavior for proactive HA recommendations. Can be one of Automated or Manual. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaEnabled">proactiveHaEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables proactive HA, allowing for vSphere to get HA data from external providers and use DRS to perform remediation. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaModerateRemediation">proactiveHaModerateRemediation</a></code> | <code>java.lang.String</code> | The configured remediation for moderately degraded hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaProviderIds">proactiveHaProviderIds</a></code> | <code>java.util.List<java.lang.String></code> | The list of IDs for health update providers configured for this cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaSevereRemediation">proactiveHaSevereRemediation</a></code> | <code>java.lang.String</code> | The configured remediation for severely degraded hosts. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanCompressionEnabled">vsanCompressionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN compression service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDedupEnabled">vsanDedupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN deduplication service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDiskGroup">vsanDiskGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>></code> | vsan_disk_group block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitEncryptionEnabled">vsanDitEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN data-in-transit encryption is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitRekeyInterval">vsanDitRekeyInterval</a></code> | <code>java.lang.Number</code> | When vsan_dit_encryption_enabled is enabled, sets the rekey interval of data-in-transit encryption (in minutes). |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEnabled">vsanEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEsaEnabled">vsanEsaEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN ESA service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanFaultDomains">vsanFaultDomains</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>></code> | vsan_fault_domains block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanNetworkDiagnosticModeEnabled">vsanNetworkDiagnosticModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN network diagnostic mode is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanPerformanceEnabled">vsanPerformanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN performance service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanRemoteDatastoreIds">vsanRemoteDatastoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The managed object IDs of the vSAN datastore to be mounted on the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanStretchedCluster">vsanStretchedCluster</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | vsan_stretched_cluster block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanUnmapEnabled">vsanUnmapEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN unmap service is enabled for the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanVerboseModeEnabled">vsanVerboseModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the vSAN verbose mode is enabled for the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

The managed object ID of the datacenter to put the cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#datacenter_id ComputeCluster#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name for the new cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#name ComputeCluster#name}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#custom_attributes ComputeCluster#custom_attributes}

---

##### `dpmAutomationLevel`<sup>Optional</sup> <a name="dpmAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmAutomationLevel"></a>

```java
public java.lang.String getDpmAutomationLevel();
```

- *Type:* java.lang.String

The automation level for host power operations in this cluster. Can be one of manual or automated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#dpm_automation_level ComputeCluster#dpm_automation_level}

---

##### `dpmEnabled`<sup>Optional</sup> <a name="dpmEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmEnabled"></a>

```java
public java.lang.Object getDpmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable DPM support for DRS.

This allows you to dynamically control the power of hosts depending on the needs of virtual machines in the cluster. Requires that DRS be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#dpm_enabled ComputeCluster#dpm_enabled}

---

##### `dpmThreshold`<sup>Optional</sup> <a name="dpmThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.dpmThreshold"></a>

```java
public java.lang.Number getDpmThreshold();
```

- *Type:* java.lang.Number

A value between 1 and 5 indicating the threshold of load within the cluster that influences host power operations.

This affects both power on and power off operations - a lower setting will tolerate more of a surplus/deficit than a higher setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#dpm_threshold ComputeCluster#dpm_threshold}

---

##### `drsAdvancedOptions`<sup>Optional</sup> <a name="drsAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAdvancedOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDrsAdvancedOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Advanced configuration options for DRS and DPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_advanced_options ComputeCluster#drs_advanced_options}

---

##### `drsAutomationLevel`<sup>Optional</sup> <a name="drsAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsAutomationLevel"></a>

```java
public java.lang.String getDrsAutomationLevel();
```

- *Type:* java.lang.String

The default automation level for all virtual machines in this cluster. Can be one of manual, partiallyAutomated, or fullyAutomated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_automation_level ComputeCluster#drs_automation_level}

---

##### `drsEnabled`<sup>Optional</sup> <a name="drsEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnabled"></a>

```java
public java.lang.Object getDrsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable DRS for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_enabled ComputeCluster#drs_enabled}

---

##### `drsEnablePredictiveDrs`<sup>Optional</sup> <a name="drsEnablePredictiveDrs" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnablePredictiveDrs"></a>

```java
public java.lang.Object getDrsEnablePredictiveDrs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, enables DRS to use data from vRealize Operations Manager to make proactive DRS recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_enable_predictive_drs ComputeCluster#drs_enable_predictive_drs}

---

##### `drsEnableVmOverrides`<sup>Optional</sup> <a name="drsEnableVmOverrides" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsEnableVmOverrides"></a>

```java
public java.lang.Object getDrsEnableVmOverrides();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, allows individual VM overrides within this cluster to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_enable_vm_overrides ComputeCluster#drs_enable_vm_overrides}

---

##### `drsMigrationThreshold`<sup>Optional</sup> <a name="drsMigrationThreshold" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsMigrationThreshold"></a>

```java
public java.lang.Number getDrsMigrationThreshold();
```

- *Type:* java.lang.Number

A value between 1 and 5 indicating the threshold of imbalance tolerated between hosts.

A lower setting will tolerate more imbalance while a higher setting will tolerate less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_migration_threshold ComputeCluster#drs_migration_threshold}

---

##### `drsScaleDescendantsShares`<sup>Optional</sup> <a name="drsScaleDescendantsShares" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.drsScaleDescendantsShares"></a>

```java
public java.lang.String getDrsScaleDescendantsShares();
```

- *Type:* java.lang.String

Enable scalable shares for all descendants of this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#drs_scale_descendants_shares ComputeCluster#drs_scale_descendants_shares}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The name of the folder to locate the cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#folder ComputeCluster#folder}

---

##### `forceEvacuateOnDestroy`<sup>Optional</sup> <a name="forceEvacuateOnDestroy" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.forceEvacuateOnDestroy"></a>

```java
public java.lang.Object getForceEvacuateOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Force removal of all hosts in the cluster during destroy and make them standalone hosts.

Use of this flag mainly exists for testing and is not recommended in normal use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#force_evacuate_on_destroy ComputeCluster#force_evacuate_on_destroy}

---

##### `haAdmissionControlFailoverHostSystemIds`<sup>Optional</sup> <a name="haAdmissionControlFailoverHostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlFailoverHostSystemIds"></a>

```java
public java.util.List<java.lang.String> getHaAdmissionControlFailoverHostSystemIds();
```

- *Type:* java.util.List<java.lang.String>

When ha_admission_control_policy is failoverHosts, this defines the managed object IDs of hosts to use as dedicated failover hosts.

These hosts are kept as available as possible - admission control will block access to the host, and DRS will ignore the host when making recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_failover_host_system_ids ComputeCluster#ha_admission_control_failover_host_system_ids}

---

##### `haAdmissionControlHostFailureTolerance`<sup>Optional</sup> <a name="haAdmissionControlHostFailureTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlHostFailureTolerance"></a>

```java
public java.lang.Number getHaAdmissionControlHostFailureTolerance();
```

- *Type:* java.lang.Number

The maximum number of failed hosts that admission control tolerates when making decisions on whether to permit virtual machine operations.

The maximum is one less than the number of hosts in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_host_failure_tolerance ComputeCluster#ha_admission_control_host_failure_tolerance}

---

##### `haAdmissionControlPerformanceTolerance`<sup>Optional</sup> <a name="haAdmissionControlPerformanceTolerance" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPerformanceTolerance"></a>

```java
public java.lang.Number getHaAdmissionControlPerformanceTolerance();
```

- *Type:* java.lang.Number

The percentage of resource reduction that a cluster of VMs can tolerate in case of a failover.

A value of 0 produces warnings only, whereas a value of 100 disables the setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_performance_tolerance ComputeCluster#ha_admission_control_performance_tolerance}

---

##### `haAdmissionControlPolicy`<sup>Optional</sup> <a name="haAdmissionControlPolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlPolicy"></a>

```java
public java.lang.String getHaAdmissionControlPolicy();
```

- *Type:* java.lang.String

The type of admission control policy to use with vSphere HA, which controls whether or not specific VM operations are permitted in the cluster in order to protect the reliability of the cluster.

Can be one of resourcePercentage, slotPolicy, failoverHosts, or disabled. Note that disabling admission control is not recommended and can lead to service issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_policy ComputeCluster#ha_admission_control_policy}

---

##### `haAdmissionControlResourcePercentageAutoCompute`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageAutoCompute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageAutoCompute"></a>

```java
public java.lang.Object getHaAdmissionControlResourcePercentageAutoCompute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When ha_admission_control_policy is resourcePercentage, automatically determine available resource percentages by subtracting the average number of host resources represented by the ha_admission_control_host_failure_tolerance setting from the total amount of resources in the cluster.

Disable to supply user-defined values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_resource_percentage_auto_compute ComputeCluster#ha_admission_control_resource_percentage_auto_compute}

---

##### `haAdmissionControlResourcePercentageCpu`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageCpu"></a>

```java
public java.lang.Number getHaAdmissionControlResourcePercentageCpu();
```

- *Type:* java.lang.Number

When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of CPU resources in the cluster to reserve for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_resource_percentage_cpu ComputeCluster#ha_admission_control_resource_percentage_cpu}

---

##### `haAdmissionControlResourcePercentageMemory`<sup>Optional</sup> <a name="haAdmissionControlResourcePercentageMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlResourcePercentageMemory"></a>

```java
public java.lang.Number getHaAdmissionControlResourcePercentageMemory();
```

- *Type:* java.lang.Number

When ha_admission_control_policy is resourcePercentage, this controls the user-defined percentage of memory resources in the cluster to reserve for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_resource_percentage_memory ComputeCluster#ha_admission_control_resource_percentage_memory}

---

##### `haAdmissionControlSlotPolicyExplicitCpu`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyExplicitCpu" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitCpu"></a>

```java
public java.lang.Number getHaAdmissionControlSlotPolicyExplicitCpu();
```

- *Type:* java.lang.Number

When ha_admission_control_policy is slotPolicy, this controls the user-defined CPU slot size, in MHz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_cpu ComputeCluster#ha_admission_control_slot_policy_explicit_cpu}

---

##### `haAdmissionControlSlotPolicyExplicitMemory`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyExplicitMemory" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyExplicitMemory"></a>

```java
public java.lang.Number getHaAdmissionControlSlotPolicyExplicitMemory();
```

- *Type:* java.lang.Number

When ha_admission_control_policy is slotPolicy, this controls the user-defined memory slot size, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_slot_policy_explicit_memory ComputeCluster#ha_admission_control_slot_policy_explicit_memory}

---

##### `haAdmissionControlSlotPolicyUseExplicitSize`<sup>Optional</sup> <a name="haAdmissionControlSlotPolicyUseExplicitSize" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdmissionControlSlotPolicyUseExplicitSize"></a>

```java
public java.lang.Object getHaAdmissionControlSlotPolicyUseExplicitSize();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When ha_admission_control_policy is slotPolicy, this setting controls whether or not you wish to supply explicit values to CPU and memory slot sizes.

The default is to gather a automatic average based on all powered-on virtual machines currently in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_admission_control_slot_policy_use_explicit_size ComputeCluster#ha_admission_control_slot_policy_use_explicit_size}

---

##### `haAdvancedOptions`<sup>Optional</sup> <a name="haAdvancedOptions" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haAdvancedOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHaAdvancedOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Advanced configuration options for vSphere HA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_advanced_options ComputeCluster#ha_advanced_options}

---

##### `haDatastoreApdRecoveryAction`<sup>Optional</sup> <a name="haDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdRecoveryAction"></a>

```java
public java.lang.String getHaDatastoreApdRecoveryAction();
```

- *Type:* java.lang.String

When ha_vm_component_protection is enabled, controls the action to take on virtual machines if an APD status on an affected datastore clears in the middle of an APD event.

Can be one of none or reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_datastore_apd_recovery_action ComputeCluster#ha_datastore_apd_recovery_action}

---

##### `haDatastoreApdResponse`<sup>Optional</sup> <a name="haDatastoreApdResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponse"></a>

```java
public java.lang.String getHaDatastoreApdResponse();
```

- *Type:* java.lang.String

When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected loss to all paths to a relevant datastore.

Can be one of disabled, warning, restartConservative, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_datastore_apd_response ComputeCluster#ha_datastore_apd_response}

---

##### `haDatastoreApdResponseDelay`<sup>Optional</sup> <a name="haDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastoreApdResponseDelay"></a>

```java
public java.lang.Number getHaDatastoreApdResponseDelay();
```

- *Type:* java.lang.Number

When ha_vm_component_protection is enabled, controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_datastore_apd_response_delay ComputeCluster#ha_datastore_apd_response_delay}

---

##### `haDatastorePdlResponse`<sup>Optional</sup> <a name="haDatastorePdlResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haDatastorePdlResponse"></a>

```java
public java.lang.String getHaDatastorePdlResponse();
```

- *Type:* java.lang.String

When ha_vm_component_protection is enabled, controls the action to take on virtual machines when the cluster has detected a permanent device loss to a relevant datastore.

Can be one of disabled, warning, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_datastore_pdl_response ComputeCluster#ha_datastore_pdl_response}

---

##### `haEnabled`<sup>Optional</sup> <a name="haEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haEnabled"></a>

```java
public java.lang.Object getHaEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable vSphere HA for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_enabled ComputeCluster#ha_enabled}

---

##### `haHeartbeatDatastoreIds`<sup>Optional</sup> <a name="haHeartbeatDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastoreIds"></a>

```java
public java.util.List<java.lang.String> getHaHeartbeatDatastoreIds();
```

- *Type:* java.util.List<java.lang.String>

The list of managed object IDs for preferred datastores to use for HA heartbeating.

This setting is only useful when ha_heartbeat_datastore_policy is set to either userSelectedDs or allFeasibleDsWithUserPreference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_heartbeat_datastore_ids ComputeCluster#ha_heartbeat_datastore_ids}

---

##### `haHeartbeatDatastorePolicy`<sup>Optional</sup> <a name="haHeartbeatDatastorePolicy" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHeartbeatDatastorePolicy"></a>

```java
public java.lang.String getHaHeartbeatDatastorePolicy();
```

- *Type:* java.lang.String

The selection policy for HA heartbeat datastores. Can be one of allFeasibleDs, userSelectedDs, or allFeasibleDsWithUserPreference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_heartbeat_datastore_policy ComputeCluster#ha_heartbeat_datastore_policy}

---

##### `haHostIsolationResponse`<sup>Optional</sup> <a name="haHostIsolationResponse" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostIsolationResponse"></a>

```java
public java.lang.String getHaHostIsolationResponse();
```

- *Type:* java.lang.String

The action to take on virtual machines when a host has detected that it has been isolated from the rest of the cluster.

Can be one of none, powerOff, or shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_host_isolation_response ComputeCluster#ha_host_isolation_response}

---

##### `haHostMonitoring`<sup>Optional</sup> <a name="haHostMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haHostMonitoring"></a>

```java
public java.lang.String getHaHostMonitoring();
```

- *Type:* java.lang.String

Global setting that controls whether vSphere HA remediates VMs on host failure. Can be one of enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_host_monitoring ComputeCluster#ha_host_monitoring}

---

##### `haVmComponentProtection`<sup>Optional</sup> <a name="haVmComponentProtection" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmComponentProtection"></a>

```java
public java.lang.String getHaVmComponentProtection();
```

- *Type:* java.lang.String

Controls vSphere VM component protection for virtual machines in this cluster.

This allows vSphere HA to react to failures between hosts and specific virtual machine components, such as datastores. Can be one of enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_component_protection ComputeCluster#ha_vm_component_protection}

---

##### `haVmDependencyRestartCondition`<sup>Optional</sup> <a name="haVmDependencyRestartCondition" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmDependencyRestartCondition"></a>

```java
public java.lang.String getHaVmDependencyRestartCondition();
```

- *Type:* java.lang.String

The condition used to determine whether or not VMs in a certain restart priority class are online, allowing HA to move on to restarting VMs on the next priority.

Can be one of none, poweredOn, guestHbStatusGreen, or appHbStatusGreen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_dependency_restart_condition ComputeCluster#ha_vm_dependency_restart_condition}

---

##### `haVmFailureInterval`<sup>Optional</sup> <a name="haVmFailureInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmFailureInterval"></a>

```java
public java.lang.Number getHaVmFailureInterval();
```

- *Type:* java.lang.Number

If a heartbeat from a virtual machine is not received within this configured interval, the virtual machine is marked as failed.

The value is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_failure_interval ComputeCluster#ha_vm_failure_interval}

---

##### `haVmMaximumFailureWindow`<sup>Optional</sup> <a name="haVmMaximumFailureWindow" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumFailureWindow"></a>

```java
public java.lang.Number getHaVmMaximumFailureWindow();
```

- *Type:* java.lang.Number

The length of the reset window in which ha_vm_maximum_resets can operate.

When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_maximum_failure_window ComputeCluster#ha_vm_maximum_failure_window}

---

##### `haVmMaximumResets`<sup>Optional</sup> <a name="haVmMaximumResets" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMaximumResets"></a>

```java
public java.lang.Number getHaVmMaximumResets();
```

- *Type:* java.lang.Number

The maximum number of resets that HA will perform to a virtual machine when responding to a failure event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_maximum_resets ComputeCluster#ha_vm_maximum_resets}

---

##### `haVmMinimumUptime`<sup>Optional</sup> <a name="haVmMinimumUptime" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMinimumUptime"></a>

```java
public java.lang.Number getHaVmMinimumUptime();
```

- *Type:* java.lang.Number

The time, in seconds, that HA waits after powering on a virtual machine before monitoring for heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_minimum_uptime ComputeCluster#ha_vm_minimum_uptime}

---

##### `haVmMonitoring`<sup>Optional</sup> <a name="haVmMonitoring" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmMonitoring"></a>

```java
public java.lang.String getHaVmMonitoring();
```

- *Type:* java.lang.String

The type of virtual machine monitoring to use when HA is enabled in the cluster.

Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_monitoring ComputeCluster#ha_vm_monitoring}

---

##### `haVmRestartAdditionalDelay`<sup>Optional</sup> <a name="haVmRestartAdditionalDelay" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartAdditionalDelay"></a>

```java
public java.lang.Number getHaVmRestartAdditionalDelay();
```

- *Type:* java.lang.Number

Additional delay in seconds after ready condition is met. A VM is considered ready at this point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_restart_additional_delay ComputeCluster#ha_vm_restart_additional_delay}

---

##### `haVmRestartPriority`<sup>Optional</sup> <a name="haVmRestartPriority" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartPriority"></a>

```java
public java.lang.String getHaVmRestartPriority();
```

- *Type:* java.lang.String

The default restart priority for affected VMs when vSphere detects a host failure.

Can be one of lowest, low, medium, high, or highest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_restart_priority ComputeCluster#ha_vm_restart_priority}

---

##### `haVmRestartTimeout`<sup>Optional</sup> <a name="haVmRestartTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.haVmRestartTimeout"></a>

```java
public java.lang.Number getHaVmRestartTimeout();
```

- *Type:* java.lang.Number

The maximum time, in seconds, that vSphere HA will wait for virtual machines in one priority to be ready before proceeding with the next priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#ha_vm_restart_timeout ComputeCluster#ha_vm_restart_timeout}

---

##### `hostClusterExitTimeout`<sup>Optional</sup> <a name="hostClusterExitTimeout" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostClusterExitTimeout"></a>

```java
public java.lang.Number getHostClusterExitTimeout();
```

- *Type:* java.lang.Number

The timeout for each host maintenance mode operation when removing hosts from a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#host_cluster_exit_timeout ComputeCluster#host_cluster_exit_timeout}

---

##### `hostImage`<sup>Optional</sup> <a name="hostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostImage"></a>

```java
public ComputeClusterHostImage getHostImage();
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

host_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#host_image ComputeCluster#host_image}

---

##### `hostManaged`<sup>Optional</sup> <a name="hostManaged" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostManaged"></a>

```java
public java.lang.Object getHostManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Must be set if cluster enrollment is managed from host resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#host_managed ComputeCluster#host_managed}

---

##### `hostSystemIds`<sup>Optional</sup> <a name="hostSystemIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.hostSystemIds"></a>

```java
public java.util.List<java.lang.String> getHostSystemIds();
```

- *Type:* java.util.List<java.lang.String>

The managed object IDs of the hosts to put in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#host_system_ids ComputeCluster#host_system_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#id ComputeCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `proactiveHaAutomationLevel`<sup>Optional</sup> <a name="proactiveHaAutomationLevel" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaAutomationLevel"></a>

```java
public java.lang.String getProactiveHaAutomationLevel();
```

- *Type:* java.lang.String

The DRS behavior for proactive HA recommendations. Can be one of Automated or Manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#proactive_ha_automation_level ComputeCluster#proactive_ha_automation_level}

---

##### `proactiveHaEnabled`<sup>Optional</sup> <a name="proactiveHaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaEnabled"></a>

```java
public java.lang.Object getProactiveHaEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables proactive HA, allowing for vSphere to get HA data from external providers and use DRS to perform remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#proactive_ha_enabled ComputeCluster#proactive_ha_enabled}

---

##### `proactiveHaModerateRemediation`<sup>Optional</sup> <a name="proactiveHaModerateRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaModerateRemediation"></a>

```java
public java.lang.String getProactiveHaModerateRemediation();
```

- *Type:* java.lang.String

The configured remediation for moderately degraded hosts.

Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to MaintenanceMode when proactive_ha_severe_remediation is set to QuarantineMode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#proactive_ha_moderate_remediation ComputeCluster#proactive_ha_moderate_remediation}

---

##### `proactiveHaProviderIds`<sup>Optional</sup> <a name="proactiveHaProviderIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaProviderIds"></a>

```java
public java.util.List<java.lang.String> getProactiveHaProviderIds();
```

- *Type:* java.util.List<java.lang.String>

The list of IDs for health update providers configured for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#proactive_ha_provider_ids ComputeCluster#proactive_ha_provider_ids}

---

##### `proactiveHaSevereRemediation`<sup>Optional</sup> <a name="proactiveHaSevereRemediation" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.proactiveHaSevereRemediation"></a>

```java
public java.lang.String getProactiveHaSevereRemediation();
```

- *Type:* java.lang.String

The configured remediation for severely degraded hosts.

Can be one of MaintenanceMode or QuarantineMode. Note that this cannot be set to QuarantineMode when proactive_ha_moderate_remediation is set to MaintenanceMode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#proactive_ha_severe_remediation ComputeCluster#proactive_ha_severe_remediation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#tags ComputeCluster#tags}

---

##### `vsanCompressionEnabled`<sup>Optional</sup> <a name="vsanCompressionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanCompressionEnabled"></a>

```java
public java.lang.Object getVsanCompressionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN compression service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_compression_enabled ComputeCluster#vsan_compression_enabled}

---

##### `vsanDedupEnabled`<sup>Optional</sup> <a name="vsanDedupEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDedupEnabled"></a>

```java
public java.lang.Object getVsanDedupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN deduplication service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_dedup_enabled ComputeCluster#vsan_dedup_enabled}

---

##### `vsanDiskGroup`<sup>Optional</sup> <a name="vsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDiskGroup"></a>

```java
public java.lang.Object getVsanDiskGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>>

vsan_disk_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_disk_group ComputeCluster#vsan_disk_group}

---

##### `vsanDitEncryptionEnabled`<sup>Optional</sup> <a name="vsanDitEncryptionEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitEncryptionEnabled"></a>

```java
public java.lang.Object getVsanDitEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN data-in-transit encryption is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_dit_encryption_enabled ComputeCluster#vsan_dit_encryption_enabled}

---

##### `vsanDitRekeyInterval`<sup>Optional</sup> <a name="vsanDitRekeyInterval" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanDitRekeyInterval"></a>

```java
public java.lang.Number getVsanDitRekeyInterval();
```

- *Type:* java.lang.Number

When vsan_dit_encryption_enabled is enabled, sets the rekey interval of data-in-transit encryption (in minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_dit_rekey_interval ComputeCluster#vsan_dit_rekey_interval}

---

##### `vsanEnabled`<sup>Optional</sup> <a name="vsanEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEnabled"></a>

```java
public java.lang.Object getVsanEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_enabled ComputeCluster#vsan_enabled}

---

##### `vsanEsaEnabled`<sup>Optional</sup> <a name="vsanEsaEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanEsaEnabled"></a>

```java
public java.lang.Object getVsanEsaEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN ESA service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_esa_enabled ComputeCluster#vsan_esa_enabled}

---

##### `vsanFaultDomains`<sup>Optional</sup> <a name="vsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanFaultDomains"></a>

```java
public java.lang.Object getVsanFaultDomains();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>>

vsan_fault_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_fault_domains ComputeCluster#vsan_fault_domains}

---

##### `vsanNetworkDiagnosticModeEnabled`<sup>Optional</sup> <a name="vsanNetworkDiagnosticModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanNetworkDiagnosticModeEnabled"></a>

```java
public java.lang.Object getVsanNetworkDiagnosticModeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN network diagnostic mode is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_network_diagnostic_mode_enabled ComputeCluster#vsan_network_diagnostic_mode_enabled}

---

##### `vsanPerformanceEnabled`<sup>Optional</sup> <a name="vsanPerformanceEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanPerformanceEnabled"></a>

```java
public java.lang.Object getVsanPerformanceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN performance service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_performance_enabled ComputeCluster#vsan_performance_enabled}

---

##### `vsanRemoteDatastoreIds`<sup>Optional</sup> <a name="vsanRemoteDatastoreIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanRemoteDatastoreIds"></a>

```java
public java.util.List<java.lang.String> getVsanRemoteDatastoreIds();
```

- *Type:* java.util.List<java.lang.String>

The managed object IDs of the vSAN datastore to be mounted on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_remote_datastore_ids ComputeCluster#vsan_remote_datastore_ids}

---

##### `vsanStretchedCluster`<sup>Optional</sup> <a name="vsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanStretchedCluster"></a>

```java
public ComputeClusterVsanStretchedCluster getVsanStretchedCluster();
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

vsan_stretched_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_stretched_cluster ComputeCluster#vsan_stretched_cluster}

---

##### `vsanUnmapEnabled`<sup>Optional</sup> <a name="vsanUnmapEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanUnmapEnabled"></a>

```java
public java.lang.Object getVsanUnmapEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN unmap service is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_unmap_enabled ComputeCluster#vsan_unmap_enabled}

---

##### `vsanVerboseModeEnabled`<sup>Optional</sup> <a name="vsanVerboseModeEnabled" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterConfig.property.vsanVerboseModeEnabled"></a>

```java
public java.lang.Object getVsanVerboseModeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the vSAN verbose mode is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#vsan_verbose_mode_enabled ComputeCluster#vsan_verbose_mode_enabled}

---

### ComputeClusterHostImage <a name="ComputeClusterHostImage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterHostImage;

ComputeClusterHostImage.builder()
//  .component(IResolvable)
//  .component(java.util.List<ComputeClusterHostImageComponent>)
//  .esxVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.component">component</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>></code> | component block. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.esxVersion">esxVersion</a></code> | <code>java.lang.String</code> | The ESXi version which the image is based on. |

---

##### `component`<sup>Optional</sup> <a name="component" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.component"></a>

```java
public java.lang.Object getComponent();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>>

component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#component ComputeCluster#component}

---

##### `esxVersion`<sup>Optional</sup> <a name="esxVersion" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage.property.esxVersion"></a>

```java
public java.lang.String getEsxVersion();
```

- *Type:* java.lang.String

The ESXi version which the image is based on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#esx_version ComputeCluster#esx_version}

---

### ComputeClusterHostImageComponent <a name="ComputeClusterHostImageComponent" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterHostImageComponent;

ComputeClusterHostImageComponent.builder()
//  .key(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.key">key</a></code> | <code>java.lang.String</code> | The identifier for the component. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.version">version</a></code> | <code>java.lang.String</code> | The version to use. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The identifier for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#key ComputeCluster#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#version ComputeCluster#version}

---

### ComputeClusterVsanDiskGroup <a name="ComputeClusterVsanDiskGroup" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterVsanDiskGroup;

ComputeClusterVsanDiskGroup.builder()
//  .cache(java.lang.String)
//  .storage(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.cache">cache</a></code> | <code>java.lang.String</code> | Cache disk. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.storage">storage</a></code> | <code>java.util.List<java.lang.String></code> | List of storage disks. |

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.cache"></a>

```java
public java.lang.String getCache();
```

- *Type:* java.lang.String

Cache disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#cache ComputeCluster#cache}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup.property.storage"></a>

```java
public java.util.List<java.lang.String> getStorage();
```

- *Type:* java.util.List<java.lang.String>

List of storage disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#storage ComputeCluster#storage}

---

### ComputeClusterVsanFaultDomains <a name="ComputeClusterVsanFaultDomains" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterVsanFaultDomains;

ComputeClusterVsanFaultDomains.builder()
//  .faultDomain(IResolvable)
//  .faultDomain(java.util.List<ComputeClusterVsanFaultDomainsFaultDomain>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains.property.faultDomain">faultDomain</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>></code> | fault_domain block. |

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains.property.faultDomain"></a>

```java
public java.lang.Object getFaultDomain();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>>

fault_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#fault_domain ComputeCluster#fault_domain}

---

### ComputeClusterVsanFaultDomainsFaultDomain <a name="ComputeClusterVsanFaultDomainsFaultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterVsanFaultDomainsFaultDomain;

ComputeClusterVsanFaultDomainsFaultDomain.builder()
    .hostIds(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.hostIds">hostIds</a></code> | <code>java.util.List<java.lang.String></code> | The managed object IDs of the hosts to put in the fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.name">name</a></code> | <code>java.lang.String</code> | The name of fault domain. |

---

##### `hostIds`<sup>Required</sup> <a name="hostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.hostIds"></a>

```java
public java.util.List<java.lang.String> getHostIds();
```

- *Type:* java.util.List<java.lang.String>

The managed object IDs of the hosts to put in the fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#host_ids ComputeCluster#host_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#name ComputeCluster#name}

---

### ComputeClusterVsanStretchedCluster <a name="ComputeClusterVsanStretchedCluster" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterVsanStretchedCluster;

ComputeClusterVsanStretchedCluster.builder()
    .preferredFaultDomainHostIds(java.util.List<java.lang.String>)
    .secondaryFaultDomainHostIds(java.util.List<java.lang.String>)
    .witnessNode(java.lang.String)
//  .preferredFaultDomainName(java.lang.String)
//  .secondaryFaultDomainName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainHostIds">preferredFaultDomainHostIds</a></code> | <code>java.util.List<java.lang.String></code> | The managed object IDs of the hosts to put in the first fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainHostIds">secondaryFaultDomainHostIds</a></code> | <code>java.util.List<java.lang.String></code> | The managed object IDs of the hosts to put in the second fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.witnessNode">witnessNode</a></code> | <code>java.lang.String</code> | The managed object IDs of the host selected as witness node when enable stretched cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainName">preferredFaultDomainName</a></code> | <code>java.lang.String</code> | The name of prepferred fault domain. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainName">secondaryFaultDomainName</a></code> | <code>java.lang.String</code> | The name of secondary fault domain. |

---

##### `preferredFaultDomainHostIds`<sup>Required</sup> <a name="preferredFaultDomainHostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainHostIds"></a>

```java
public java.util.List<java.lang.String> getPreferredFaultDomainHostIds();
```

- *Type:* java.util.List<java.lang.String>

The managed object IDs of the hosts to put in the first fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#preferred_fault_domain_host_ids ComputeCluster#preferred_fault_domain_host_ids}

---

##### `secondaryFaultDomainHostIds`<sup>Required</sup> <a name="secondaryFaultDomainHostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainHostIds"></a>

```java
public java.util.List<java.lang.String> getSecondaryFaultDomainHostIds();
```

- *Type:* java.util.List<java.lang.String>

The managed object IDs of the hosts to put in the second fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#secondary_fault_domain_host_ids ComputeCluster#secondary_fault_domain_host_ids}

---

##### `witnessNode`<sup>Required</sup> <a name="witnessNode" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.witnessNode"></a>

```java
public java.lang.String getWitnessNode();
```

- *Type:* java.lang.String

The managed object IDs of the host selected as witness node when enable stretched cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#witness_node ComputeCluster#witness_node}

---

##### `preferredFaultDomainName`<sup>Optional</sup> <a name="preferredFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.preferredFaultDomainName"></a>

```java
public java.lang.String getPreferredFaultDomainName();
```

- *Type:* java.lang.String

The name of prepferred fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#preferred_fault_domain_name ComputeCluster#preferred_fault_domain_name}

---

##### `secondaryFaultDomainName`<sup>Optional</sup> <a name="secondaryFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster.property.secondaryFaultDomainName"></a>

```java
public java.lang.String getSecondaryFaultDomainName();
```

- *Type:* java.lang.String

The name of secondary fault domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/compute_cluster#secondary_fault_domain_name ComputeCluster#secondary_fault_domain_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeClusterHostImageComponentList <a name="ComputeClusterHostImageComponentList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterHostImageComponentList;

new ComputeClusterHostImageComponentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.get"></a>

```java
public ComputeClusterHostImageComponentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>>

---


### ComputeClusterHostImageComponentOutputReference <a name="ComputeClusterHostImageComponentOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterHostImageComponentOutputReference;

new ComputeClusterHostImageComponentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>

---


### ComputeClusterHostImageOutputReference <a name="ComputeClusterHostImageOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterHostImageOutputReference;

new ComputeClusterHostImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.putComponent">putComponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetComponent">resetComponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetEsxVersion">resetEsxVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComponent` <a name="putComponent" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.putComponent"></a>

```java
public void putComponent(IResolvable OR java.util.List<ComputeClusterHostImageComponent> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.putComponent.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>>

---

##### `resetComponent` <a name="resetComponent" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetComponent"></a>

```java
public void resetComponent()
```

##### `resetEsxVersion` <a name="resetEsxVersion" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.resetEsxVersion"></a>

```java
public void resetEsxVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.component">component</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList">ComputeClusterHostImageComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.componentInput">componentInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersionInput">esxVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersion">esxVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.component"></a>

```java
public ComputeClusterHostImageComponentList getComponent();
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponentList">ComputeClusterHostImageComponentList</a>

---

##### `componentInput`<sup>Optional</sup> <a name="componentInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.componentInput"></a>

```java
public java.lang.Object getComponentInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageComponent">ComputeClusterHostImageComponent</a>>

---

##### `esxVersionInput`<sup>Optional</sup> <a name="esxVersionInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersionInput"></a>

```java
public java.lang.String getEsxVersionInput();
```

- *Type:* java.lang.String

---

##### `esxVersion`<sup>Required</sup> <a name="esxVersion" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.esxVersion"></a>

```java
public java.lang.String getEsxVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImageOutputReference.property.internalValue"></a>

```java
public ComputeClusterHostImage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterHostImage">ComputeClusterHostImage</a>

---


### ComputeClusterVsanDiskGroupList <a name="ComputeClusterVsanDiskGroupList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterVsanDiskGroupList;

new ComputeClusterVsanDiskGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.get"></a>

```java
public ComputeClusterVsanDiskGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>>

---


### ComputeClusterVsanDiskGroupOutputReference <a name="ComputeClusterVsanDiskGroupOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterVsanDiskGroupOutputReference;

new ComputeClusterVsanDiskGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetCache">resetCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetStorage">resetStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCache` <a name="resetCache" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetCache"></a>

```java
public void resetCache()
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.resetStorage"></a>

```java
public void resetStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cacheInput">cacheInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storageInput">storageInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cache">cache</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storage">storage</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheInput`<sup>Optional</sup> <a name="cacheInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cacheInput"></a>

```java
public java.lang.String getCacheInput();
```

- *Type:* java.lang.String

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storageInput"></a>

```java
public java.util.List<java.lang.String> getStorageInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.cache"></a>

```java
public java.lang.String getCache();
```

- *Type:* java.lang.String

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.storage"></a>

```java
public java.util.List<java.lang.String> getStorage();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanDiskGroup">ComputeClusterVsanDiskGroup</a>

---


### ComputeClusterVsanFaultDomainsFaultDomainList <a name="ComputeClusterVsanFaultDomainsFaultDomainList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterVsanFaultDomainsFaultDomainList;

new ComputeClusterVsanFaultDomainsFaultDomainList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.get"></a>

```java
public ComputeClusterVsanFaultDomainsFaultDomainOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>>

---


### ComputeClusterVsanFaultDomainsFaultDomainOutputReference <a name="ComputeClusterVsanFaultDomainsFaultDomainOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference;

new ComputeClusterVsanFaultDomainsFaultDomainOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIdsInput">hostIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIds">hostIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostIdsInput`<sup>Optional</sup> <a name="hostIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIdsInput"></a>

```java
public java.util.List<java.lang.String> getHostIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `hostIds`<sup>Required</sup> <a name="hostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.hostIds"></a>

```java
public java.util.List<java.lang.String> getHostIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>

---


### ComputeClusterVsanFaultDomainsList <a name="ComputeClusterVsanFaultDomainsList" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterVsanFaultDomainsList;

new ComputeClusterVsanFaultDomainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.get"></a>

```java
public ComputeClusterVsanFaultDomainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>>

---


### ComputeClusterVsanFaultDomainsOutputReference <a name="ComputeClusterVsanFaultDomainsOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterVsanFaultDomainsOutputReference;

new ComputeClusterVsanFaultDomainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.putFaultDomain">putFaultDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resetFaultDomain">resetFaultDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFaultDomain` <a name="putFaultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.putFaultDomain"></a>

```java
public void putFaultDomain(IResolvable OR java.util.List<ComputeClusterVsanFaultDomainsFaultDomain> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.putFaultDomain.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>>

---

##### `resetFaultDomain` <a name="resetFaultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.resetFaultDomain"></a>

```java
public void resetFaultDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomain">faultDomain</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList">ComputeClusterVsanFaultDomainsFaultDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomainInput">faultDomainInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomain"></a>

```java
public ComputeClusterVsanFaultDomainsFaultDomainList getFaultDomain();
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomainList">ComputeClusterVsanFaultDomainsFaultDomainList</a>

---

##### `faultDomainInput`<sup>Optional</sup> <a name="faultDomainInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.faultDomainInput"></a>

```java
public java.lang.Object getFaultDomainInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsFaultDomain">ComputeClusterVsanFaultDomainsFaultDomain</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomainsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanFaultDomains">ComputeClusterVsanFaultDomains</a>

---


### ComputeClusterVsanStretchedClusterOutputReference <a name="ComputeClusterVsanStretchedClusterOutputReference" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster.ComputeClusterVsanStretchedClusterOutputReference;

new ComputeClusterVsanStretchedClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetPreferredFaultDomainName">resetPreferredFaultDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetSecondaryFaultDomainName">resetSecondaryFaultDomainName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreferredFaultDomainName` <a name="resetPreferredFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetPreferredFaultDomainName"></a>

```java
public void resetPreferredFaultDomainName()
```

##### `resetSecondaryFaultDomainName` <a name="resetSecondaryFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.resetSecondaryFaultDomainName"></a>

```java
public void resetSecondaryFaultDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIdsInput">preferredFaultDomainHostIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainNameInput">preferredFaultDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIdsInput">secondaryFaultDomainHostIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainNameInput">secondaryFaultDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNodeInput">witnessNodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIds">preferredFaultDomainHostIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainName">preferredFaultDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIds">secondaryFaultDomainHostIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainName">secondaryFaultDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNode">witnessNode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preferredFaultDomainHostIdsInput`<sup>Optional</sup> <a name="preferredFaultDomainHostIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIdsInput"></a>

```java
public java.util.List<java.lang.String> getPreferredFaultDomainHostIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preferredFaultDomainNameInput`<sup>Optional</sup> <a name="preferredFaultDomainNameInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainNameInput"></a>

```java
public java.lang.String getPreferredFaultDomainNameInput();
```

- *Type:* java.lang.String

---

##### `secondaryFaultDomainHostIdsInput`<sup>Optional</sup> <a name="secondaryFaultDomainHostIdsInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecondaryFaultDomainHostIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secondaryFaultDomainNameInput`<sup>Optional</sup> <a name="secondaryFaultDomainNameInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainNameInput"></a>

```java
public java.lang.String getSecondaryFaultDomainNameInput();
```

- *Type:* java.lang.String

---

##### `witnessNodeInput`<sup>Optional</sup> <a name="witnessNodeInput" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNodeInput"></a>

```java
public java.lang.String getWitnessNodeInput();
```

- *Type:* java.lang.String

---

##### `preferredFaultDomainHostIds`<sup>Required</sup> <a name="preferredFaultDomainHostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainHostIds"></a>

```java
public java.util.List<java.lang.String> getPreferredFaultDomainHostIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preferredFaultDomainName`<sup>Required</sup> <a name="preferredFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.preferredFaultDomainName"></a>

```java
public java.lang.String getPreferredFaultDomainName();
```

- *Type:* java.lang.String

---

##### `secondaryFaultDomainHostIds`<sup>Required</sup> <a name="secondaryFaultDomainHostIds" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainHostIds"></a>

```java
public java.util.List<java.lang.String> getSecondaryFaultDomainHostIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secondaryFaultDomainName`<sup>Required</sup> <a name="secondaryFaultDomainName" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.secondaryFaultDomainName"></a>

```java
public java.lang.String getSecondaryFaultDomainName();
```

- *Type:* java.lang.String

---

##### `witnessNode`<sup>Required</sup> <a name="witnessNode" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.witnessNode"></a>

```java
public java.lang.String getWitnessNode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedClusterOutputReference.property.internalValue"></a>

```java
public ComputeClusterVsanStretchedCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.computeCluster.ComputeClusterVsanStretchedCluster">ComputeClusterVsanStretchedCluster</a>

---



