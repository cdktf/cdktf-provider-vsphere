# `haVmOverride` Submodule <a name="`haVmOverride` Submodule" id="@cdktf/provider-vsphere.haVmOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HaVmOverride <a name="HaVmOverride" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override vsphere_ha_vm_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.ha_vm_override.HaVmOverride;

HaVmOverride.Builder.create(Construct scope, java.lang.String id)
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
    .computeClusterId(java.lang.String)
    .virtualMachineId(java.lang.String)
//  .haDatastoreApdRecoveryAction(java.lang.String)
//  .haDatastoreApdResponse(java.lang.String)
//  .haDatastoreApdResponseDelay(java.lang.Number)
//  .haDatastorePdlResponse(java.lang.String)
//  .haHostIsolationResponse(java.lang.String)
//  .haVmFailureInterval(java.lang.Number)
//  .haVmMaximumFailureWindow(java.lang.Number)
//  .haVmMaximumResets(java.lang.Number)
//  .haVmMinimumUptime(java.lang.Number)
//  .haVmMonitoring(java.lang.String)
//  .haVmMonitoringUseClusterDefaults(java.lang.Boolean)
//  .haVmMonitoringUseClusterDefaults(IResolvable)
//  .haVmRestartPriority(java.lang.String)
//  .haVmRestartTimeout(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.computeClusterId">computeClusterId</a></code> | <code>java.lang.String</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastoreApdRecoveryAction">haDatastoreApdRecoveryAction</a></code> | <code>java.lang.String</code> | Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastoreApdResponse">haDatastoreApdResponse</a></code> | <code>java.lang.String</code> | Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastoreApdResponseDelay">haDatastoreApdResponseDelay</a></code> | <code>java.lang.Number</code> | Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastorePdlResponse">haDatastorePdlResponse</a></code> | <code>java.lang.String</code> | Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haHostIsolationResponse">haHostIsolationResponse</a></code> | <code>java.lang.String</code> | The action to take on this virtual machine when a host is isolated from the rest of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmFailureInterval">haVmFailureInterval</a></code> | <code>java.lang.Number</code> | If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMaximumFailureWindow">haVmMaximumFailureWindow</a></code> | <code>java.lang.Number</code> | The length of the reset window in which ha_vm_maximum_resets can operate. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMaximumResets">haVmMaximumResets</a></code> | <code>java.lang.Number</code> | The maximum number of resets that HA will perform to this virtual machine when responding to a failure event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMinimumUptime">haVmMinimumUptime</a></code> | <code>java.lang.Number</code> | The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMonitoring">haVmMonitoring</a></code> | <code>java.lang.String</code> | The type of virtual machine monitoring to use for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMonitoringUseClusterDefaults">haVmMonitoringUseClusterDefaults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmRestartPriority">haVmRestartPriority</a></code> | <code>java.lang.String</code> | The restart priority for this virtual machine when vSphere detects a host failure. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmRestartTimeout">haVmRestartTimeout</a></code> | <code>java.lang.Number</code> | The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#id HaVmOverride#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.computeClusterId"></a>

- *Type:* java.lang.String

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#compute_cluster_id HaVmOverride#compute_cluster_id}

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.virtualMachineId"></a>

- *Type:* java.lang.String

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#virtual_machine_id HaVmOverride#virtual_machine_id}

---

##### `haDatastoreApdRecoveryAction`<sup>Optional</sup> <a name="haDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastoreApdRecoveryAction"></a>

- *Type:* java.lang.String

Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event.

Can be one of useClusterDefault, none or reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_datastore_apd_recovery_action HaVmOverride#ha_datastore_apd_recovery_action}

---

##### `haDatastoreApdResponse`<sup>Optional</sup> <a name="haDatastoreApdResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastoreApdResponse"></a>

- *Type:* java.lang.String

Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore.

Can be one of clusterDefault, disabled, warning, restartConservative, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_datastore_apd_response HaVmOverride#ha_datastore_apd_response}

---

##### `haDatastoreApdResponseDelay`<sup>Optional</sup> <a name="haDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastoreApdResponseDelay"></a>

- *Type:* java.lang.Number

Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.

Specify -1 to use the cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_datastore_apd_response_delay HaVmOverride#ha_datastore_apd_response_delay}

---

##### `haDatastorePdlResponse`<sup>Optional</sup> <a name="haDatastorePdlResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastorePdlResponse"></a>

- *Type:* java.lang.String

Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore.

Can be one of clusterDefault, disabled, warning, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_datastore_pdl_response HaVmOverride#ha_datastore_pdl_response}

---

##### `haHostIsolationResponse`<sup>Optional</sup> <a name="haHostIsolationResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haHostIsolationResponse"></a>

- *Type:* java.lang.String

The action to take on this virtual machine when a host is isolated from the rest of the cluster.

Can be one of clusterIsolationResponse, none, powerOff, or shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_host_isolation_response HaVmOverride#ha_host_isolation_response}

---

##### `haVmFailureInterval`<sup>Optional</sup> <a name="haVmFailureInterval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmFailureInterval"></a>

- *Type:* java.lang.Number

If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed.

The value is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_failure_interval HaVmOverride#ha_vm_failure_interval}

---

##### `haVmMaximumFailureWindow`<sup>Optional</sup> <a name="haVmMaximumFailureWindow" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMaximumFailureWindow"></a>

- *Type:* java.lang.Number

The length of the reset window in which ha_vm_maximum_resets can operate.

When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_maximum_failure_window HaVmOverride#ha_vm_maximum_failure_window}

---

##### `haVmMaximumResets`<sup>Optional</sup> <a name="haVmMaximumResets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMaximumResets"></a>

- *Type:* java.lang.Number

The maximum number of resets that HA will perform to this virtual machine when responding to a failure event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_maximum_resets HaVmOverride#ha_vm_maximum_resets}

---

##### `haVmMinimumUptime`<sup>Optional</sup> <a name="haVmMinimumUptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMinimumUptime"></a>

- *Type:* java.lang.Number

The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_minimum_uptime HaVmOverride#ha_vm_minimum_uptime}

---

##### `haVmMonitoring`<sup>Optional</sup> <a name="haVmMonitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMonitoring"></a>

- *Type:* java.lang.String

The type of virtual machine monitoring to use for this virtual machine.

Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_monitoring HaVmOverride#ha_vm_monitoring}

---

##### `haVmMonitoringUseClusterDefaults`<sup>Optional</sup> <a name="haVmMonitoringUseClusterDefaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMonitoringUseClusterDefaults"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring.

The default is true (use cluster defaults) - set to false to have overrides take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_monitoring_use_cluster_defaults HaVmOverride#ha_vm_monitoring_use_cluster_defaults}

---

##### `haVmRestartPriority`<sup>Optional</sup> <a name="haVmRestartPriority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmRestartPriority"></a>

- *Type:* java.lang.String

The restart priority for this virtual machine when vSphere detects a host failure.

Can be one of clusterRestartPriority, lowest, low, medium, high, or highest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_restart_priority HaVmOverride#ha_vm_restart_priority}

---

##### `haVmRestartTimeout`<sup>Optional</sup> <a name="haVmRestartTimeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmRestartTimeout"></a>

- *Type:* java.lang.Number

The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready.

Use -1 to use the cluster default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_restart_timeout HaVmOverride#ha_vm_restart_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#id HaVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdRecoveryAction">resetHaDatastoreApdRecoveryAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponse">resetHaDatastoreApdResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponseDelay">resetHaDatastoreApdResponseDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastorePdlResponse">resetHaDatastorePdlResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaHostIsolationResponse">resetHaHostIsolationResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmFailureInterval">resetHaVmFailureInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumFailureWindow">resetHaVmMaximumFailureWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumResets">resetHaVmMaximumResets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMinimumUptime">resetHaVmMinimumUptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoring">resetHaVmMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoringUseClusterDefaults">resetHaVmMonitoringUseClusterDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartPriority">resetHaVmRestartPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartTimeout">resetHaVmRestartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetHaDatastoreApdRecoveryAction` <a name="resetHaDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdRecoveryAction"></a>

```java
public void resetHaDatastoreApdRecoveryAction()
```

##### `resetHaDatastoreApdResponse` <a name="resetHaDatastoreApdResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponse"></a>

```java
public void resetHaDatastoreApdResponse()
```

##### `resetHaDatastoreApdResponseDelay` <a name="resetHaDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponseDelay"></a>

```java
public void resetHaDatastoreApdResponseDelay()
```

##### `resetHaDatastorePdlResponse` <a name="resetHaDatastorePdlResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastorePdlResponse"></a>

```java
public void resetHaDatastorePdlResponse()
```

##### `resetHaHostIsolationResponse` <a name="resetHaHostIsolationResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaHostIsolationResponse"></a>

```java
public void resetHaHostIsolationResponse()
```

##### `resetHaVmFailureInterval` <a name="resetHaVmFailureInterval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmFailureInterval"></a>

```java
public void resetHaVmFailureInterval()
```

##### `resetHaVmMaximumFailureWindow` <a name="resetHaVmMaximumFailureWindow" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumFailureWindow"></a>

```java
public void resetHaVmMaximumFailureWindow()
```

##### `resetHaVmMaximumResets` <a name="resetHaVmMaximumResets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumResets"></a>

```java
public void resetHaVmMaximumResets()
```

##### `resetHaVmMinimumUptime` <a name="resetHaVmMinimumUptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMinimumUptime"></a>

```java
public void resetHaVmMinimumUptime()
```

##### `resetHaVmMonitoring` <a name="resetHaVmMonitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoring"></a>

```java
public void resetHaVmMonitoring()
```

##### `resetHaVmMonitoringUseClusterDefaults` <a name="resetHaVmMonitoringUseClusterDefaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoringUseClusterDefaults"></a>

```java
public void resetHaVmMonitoringUseClusterDefaults()
```

##### `resetHaVmRestartPriority` <a name="resetHaVmRestartPriority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartPriority"></a>

```java
public void resetHaVmRestartPriority()
```

##### `resetHaVmRestartTimeout` <a name="resetHaVmRestartTimeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartTimeout"></a>

```java
public void resetHaVmRestartTimeout()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HaVmOverride resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.ha_vm_override.HaVmOverride;

HaVmOverride.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.ha_vm_override.HaVmOverride;

HaVmOverride.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.ha_vm_override.HaVmOverride;

HaVmOverride.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.ha_vm_override.HaVmOverride;

HaVmOverride.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HaVmOverride.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HaVmOverride resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HaVmOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HaVmOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HaVmOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterIdInput">computeClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryActionInput">haDatastoreApdRecoveryActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelayInput">haDatastoreApdResponseDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseInput">haDatastoreApdResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponseInput">haDatastorePdlResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponseInput">haHostIsolationResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureIntervalInput">haVmFailureIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindowInput">haVmMaximumFailureWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResetsInput">haVmMaximumResetsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptimeInput">haVmMinimumUptimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringInput">haVmMonitoringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaultsInput">haVmMonitoringUseClusterDefaultsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriorityInput">haVmRestartPriorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeoutInput">haVmRestartTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterId">computeClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryAction">haDatastoreApdRecoveryAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponse">haDatastoreApdResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelay">haDatastoreApdResponseDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponse">haDatastorePdlResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponse">haHostIsolationResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureInterval">haVmFailureInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindow">haVmMaximumFailureWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResets">haVmMaximumResets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptime">haVmMinimumUptime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoring">haVmMonitoring</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaults">haVmMonitoringUseClusterDefaults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriority">haVmRestartPriority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeout">haVmRestartTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeClusterIdInput`<sup>Optional</sup> <a name="computeClusterIdInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterIdInput"></a>

```java
public java.lang.String getComputeClusterIdInput();
```

- *Type:* java.lang.String

---

##### `haDatastoreApdRecoveryActionInput`<sup>Optional</sup> <a name="haDatastoreApdRecoveryActionInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryActionInput"></a>

```java
public java.lang.String getHaDatastoreApdRecoveryActionInput();
```

- *Type:* java.lang.String

---

##### `haDatastoreApdResponseDelayInput`<sup>Optional</sup> <a name="haDatastoreApdResponseDelayInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelayInput"></a>

```java
public java.lang.Number getHaDatastoreApdResponseDelayInput();
```

- *Type:* java.lang.Number

---

##### `haDatastoreApdResponseInput`<sup>Optional</sup> <a name="haDatastoreApdResponseInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseInput"></a>

```java
public java.lang.String getHaDatastoreApdResponseInput();
```

- *Type:* java.lang.String

---

##### `haDatastorePdlResponseInput`<sup>Optional</sup> <a name="haDatastorePdlResponseInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponseInput"></a>

```java
public java.lang.String getHaDatastorePdlResponseInput();
```

- *Type:* java.lang.String

---

##### `haHostIsolationResponseInput`<sup>Optional</sup> <a name="haHostIsolationResponseInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponseInput"></a>

```java
public java.lang.String getHaHostIsolationResponseInput();
```

- *Type:* java.lang.String

---

##### `haVmFailureIntervalInput`<sup>Optional</sup> <a name="haVmFailureIntervalInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureIntervalInput"></a>

```java
public java.lang.Number getHaVmFailureIntervalInput();
```

- *Type:* java.lang.Number

---

##### `haVmMaximumFailureWindowInput`<sup>Optional</sup> <a name="haVmMaximumFailureWindowInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindowInput"></a>

```java
public java.lang.Number getHaVmMaximumFailureWindowInput();
```

- *Type:* java.lang.Number

---

##### `haVmMaximumResetsInput`<sup>Optional</sup> <a name="haVmMaximumResetsInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResetsInput"></a>

```java
public java.lang.Number getHaVmMaximumResetsInput();
```

- *Type:* java.lang.Number

---

##### `haVmMinimumUptimeInput`<sup>Optional</sup> <a name="haVmMinimumUptimeInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptimeInput"></a>

```java
public java.lang.Number getHaVmMinimumUptimeInput();
```

- *Type:* java.lang.Number

---

##### `haVmMonitoringInput`<sup>Optional</sup> <a name="haVmMonitoringInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringInput"></a>

```java
public java.lang.String getHaVmMonitoringInput();
```

- *Type:* java.lang.String

---

##### `haVmMonitoringUseClusterDefaultsInput`<sup>Optional</sup> <a name="haVmMonitoringUseClusterDefaultsInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaultsInput"></a>

```java
public java.lang.Object getHaVmMonitoringUseClusterDefaultsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `haVmRestartPriorityInput`<sup>Optional</sup> <a name="haVmRestartPriorityInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriorityInput"></a>

```java
public java.lang.String getHaVmRestartPriorityInput();
```

- *Type:* java.lang.String

---

##### `haVmRestartTimeoutInput`<sup>Optional</sup> <a name="haVmRestartTimeoutInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeoutInput"></a>

```java
public java.lang.Number getHaVmRestartTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineIdInput"></a>

```java
public java.lang.String getVirtualMachineIdInput();
```

- *Type:* java.lang.String

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterId"></a>

```java
public java.lang.String getComputeClusterId();
```

- *Type:* java.lang.String

---

##### `haDatastoreApdRecoveryAction`<sup>Required</sup> <a name="haDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryAction"></a>

```java
public java.lang.String getHaDatastoreApdRecoveryAction();
```

- *Type:* java.lang.String

---

##### `haDatastoreApdResponse`<sup>Required</sup> <a name="haDatastoreApdResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponse"></a>

```java
public java.lang.String getHaDatastoreApdResponse();
```

- *Type:* java.lang.String

---

##### `haDatastoreApdResponseDelay`<sup>Required</sup> <a name="haDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelay"></a>

```java
public java.lang.Number getHaDatastoreApdResponseDelay();
```

- *Type:* java.lang.Number

---

##### `haDatastorePdlResponse`<sup>Required</sup> <a name="haDatastorePdlResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponse"></a>

```java
public java.lang.String getHaDatastorePdlResponse();
```

- *Type:* java.lang.String

---

##### `haHostIsolationResponse`<sup>Required</sup> <a name="haHostIsolationResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponse"></a>

```java
public java.lang.String getHaHostIsolationResponse();
```

- *Type:* java.lang.String

---

##### `haVmFailureInterval`<sup>Required</sup> <a name="haVmFailureInterval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureInterval"></a>

```java
public java.lang.Number getHaVmFailureInterval();
```

- *Type:* java.lang.Number

---

##### `haVmMaximumFailureWindow`<sup>Required</sup> <a name="haVmMaximumFailureWindow" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindow"></a>

```java
public java.lang.Number getHaVmMaximumFailureWindow();
```

- *Type:* java.lang.Number

---

##### `haVmMaximumResets`<sup>Required</sup> <a name="haVmMaximumResets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResets"></a>

```java
public java.lang.Number getHaVmMaximumResets();
```

- *Type:* java.lang.Number

---

##### `haVmMinimumUptime`<sup>Required</sup> <a name="haVmMinimumUptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptime"></a>

```java
public java.lang.Number getHaVmMinimumUptime();
```

- *Type:* java.lang.Number

---

##### `haVmMonitoring`<sup>Required</sup> <a name="haVmMonitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoring"></a>

```java
public java.lang.String getHaVmMonitoring();
```

- *Type:* java.lang.String

---

##### `haVmMonitoringUseClusterDefaults`<sup>Required</sup> <a name="haVmMonitoringUseClusterDefaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaults"></a>

```java
public java.lang.Object getHaVmMonitoringUseClusterDefaults();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `haVmRestartPriority`<sup>Required</sup> <a name="haVmRestartPriority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriority"></a>

```java
public java.lang.String getHaVmRestartPriority();
```

- *Type:* java.lang.String

---

##### `haVmRestartTimeout`<sup>Required</sup> <a name="haVmRestartTimeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeout"></a>

```java
public java.lang.Number getHaVmRestartTimeout();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HaVmOverrideConfig <a name="HaVmOverrideConfig" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.ha_vm_override.HaVmOverrideConfig;

HaVmOverrideConfig.builder()
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
    .computeClusterId(java.lang.String)
    .virtualMachineId(java.lang.String)
//  .haDatastoreApdRecoveryAction(java.lang.String)
//  .haDatastoreApdResponse(java.lang.String)
//  .haDatastoreApdResponseDelay(java.lang.Number)
//  .haDatastorePdlResponse(java.lang.String)
//  .haHostIsolationResponse(java.lang.String)
//  .haVmFailureInterval(java.lang.Number)
//  .haVmMaximumFailureWindow(java.lang.Number)
//  .haVmMaximumResets(java.lang.Number)
//  .haVmMinimumUptime(java.lang.Number)
//  .haVmMonitoring(java.lang.String)
//  .haVmMonitoringUseClusterDefaults(java.lang.Boolean)
//  .haVmMonitoringUseClusterDefaults(IResolvable)
//  .haVmRestartPriority(java.lang.String)
//  .haVmRestartTimeout(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.computeClusterId">computeClusterId</a></code> | <code>java.lang.String</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdRecoveryAction">haDatastoreApdRecoveryAction</a></code> | <code>java.lang.String</code> | Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponse">haDatastoreApdResponse</a></code> | <code>java.lang.String</code> | Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponseDelay">haDatastoreApdResponseDelay</a></code> | <code>java.lang.Number</code> | Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastorePdlResponse">haDatastorePdlResponse</a></code> | <code>java.lang.String</code> | Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haHostIsolationResponse">haHostIsolationResponse</a></code> | <code>java.lang.String</code> | The action to take on this virtual machine when a host is isolated from the rest of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmFailureInterval">haVmFailureInterval</a></code> | <code>java.lang.Number</code> | If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumFailureWindow">haVmMaximumFailureWindow</a></code> | <code>java.lang.Number</code> | The length of the reset window in which ha_vm_maximum_resets can operate. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumResets">haVmMaximumResets</a></code> | <code>java.lang.Number</code> | The maximum number of resets that HA will perform to this virtual machine when responding to a failure event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMinimumUptime">haVmMinimumUptime</a></code> | <code>java.lang.Number</code> | The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoring">haVmMonitoring</a></code> | <code>java.lang.String</code> | The type of virtual machine monitoring to use for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoringUseClusterDefaults">haVmMonitoringUseClusterDefaults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartPriority">haVmRestartPriority</a></code> | <code>java.lang.String</code> | The restart priority for this virtual machine when vSphere detects a host failure. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartTimeout">haVmRestartTimeout</a></code> | <code>java.lang.Number</code> | The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#id HaVmOverride#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.computeClusterId"></a>

```java
public java.lang.String getComputeClusterId();
```

- *Type:* java.lang.String

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#compute_cluster_id HaVmOverride#compute_cluster_id}

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#virtual_machine_id HaVmOverride#virtual_machine_id}

---

##### `haDatastoreApdRecoveryAction`<sup>Optional</sup> <a name="haDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdRecoveryAction"></a>

```java
public java.lang.String getHaDatastoreApdRecoveryAction();
```

- *Type:* java.lang.String

Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event.

Can be one of useClusterDefault, none or reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_datastore_apd_recovery_action HaVmOverride#ha_datastore_apd_recovery_action}

---

##### `haDatastoreApdResponse`<sup>Optional</sup> <a name="haDatastoreApdResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponse"></a>

```java
public java.lang.String getHaDatastoreApdResponse();
```

- *Type:* java.lang.String

Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore.

Can be one of clusterDefault, disabled, warning, restartConservative, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_datastore_apd_response HaVmOverride#ha_datastore_apd_response}

---

##### `haDatastoreApdResponseDelay`<sup>Optional</sup> <a name="haDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponseDelay"></a>

```java
public java.lang.Number getHaDatastoreApdResponseDelay();
```

- *Type:* java.lang.Number

Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.

Specify -1 to use the cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_datastore_apd_response_delay HaVmOverride#ha_datastore_apd_response_delay}

---

##### `haDatastorePdlResponse`<sup>Optional</sup> <a name="haDatastorePdlResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastorePdlResponse"></a>

```java
public java.lang.String getHaDatastorePdlResponse();
```

- *Type:* java.lang.String

Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore.

Can be one of clusterDefault, disabled, warning, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_datastore_pdl_response HaVmOverride#ha_datastore_pdl_response}

---

##### `haHostIsolationResponse`<sup>Optional</sup> <a name="haHostIsolationResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haHostIsolationResponse"></a>

```java
public java.lang.String getHaHostIsolationResponse();
```

- *Type:* java.lang.String

The action to take on this virtual machine when a host is isolated from the rest of the cluster.

Can be one of clusterIsolationResponse, none, powerOff, or shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_host_isolation_response HaVmOverride#ha_host_isolation_response}

---

##### `haVmFailureInterval`<sup>Optional</sup> <a name="haVmFailureInterval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmFailureInterval"></a>

```java
public java.lang.Number getHaVmFailureInterval();
```

- *Type:* java.lang.Number

If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed.

The value is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_failure_interval HaVmOverride#ha_vm_failure_interval}

---

##### `haVmMaximumFailureWindow`<sup>Optional</sup> <a name="haVmMaximumFailureWindow" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumFailureWindow"></a>

```java
public java.lang.Number getHaVmMaximumFailureWindow();
```

- *Type:* java.lang.Number

The length of the reset window in which ha_vm_maximum_resets can operate.

When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_maximum_failure_window HaVmOverride#ha_vm_maximum_failure_window}

---

##### `haVmMaximumResets`<sup>Optional</sup> <a name="haVmMaximumResets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumResets"></a>

```java
public java.lang.Number getHaVmMaximumResets();
```

- *Type:* java.lang.Number

The maximum number of resets that HA will perform to this virtual machine when responding to a failure event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_maximum_resets HaVmOverride#ha_vm_maximum_resets}

---

##### `haVmMinimumUptime`<sup>Optional</sup> <a name="haVmMinimumUptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMinimumUptime"></a>

```java
public java.lang.Number getHaVmMinimumUptime();
```

- *Type:* java.lang.Number

The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_minimum_uptime HaVmOverride#ha_vm_minimum_uptime}

---

##### `haVmMonitoring`<sup>Optional</sup> <a name="haVmMonitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoring"></a>

```java
public java.lang.String getHaVmMonitoring();
```

- *Type:* java.lang.String

The type of virtual machine monitoring to use for this virtual machine.

Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_monitoring HaVmOverride#ha_vm_monitoring}

---

##### `haVmMonitoringUseClusterDefaults`<sup>Optional</sup> <a name="haVmMonitoringUseClusterDefaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoringUseClusterDefaults"></a>

```java
public java.lang.Object getHaVmMonitoringUseClusterDefaults();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring.

The default is true (use cluster defaults) - set to false to have overrides take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_monitoring_use_cluster_defaults HaVmOverride#ha_vm_monitoring_use_cluster_defaults}

---

##### `haVmRestartPriority`<sup>Optional</sup> <a name="haVmRestartPriority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartPriority"></a>

```java
public java.lang.String getHaVmRestartPriority();
```

- *Type:* java.lang.String

The restart priority for this virtual machine when vSphere detects a host failure.

Can be one of clusterRestartPriority, lowest, low, medium, high, or highest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_restart_priority HaVmOverride#ha_vm_restart_priority}

---

##### `haVmRestartTimeout`<sup>Optional</sup> <a name="haVmRestartTimeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartTimeout"></a>

```java
public java.lang.Number getHaVmRestartTimeout();
```

- *Type:* java.lang.Number

The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready.

Use -1 to use the cluster default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_restart_timeout HaVmOverride#ha_vm_restart_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#id HaVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



