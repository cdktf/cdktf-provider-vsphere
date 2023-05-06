# `vsphere_ha_vm_override`

Refer to the Terraform Registory for docs: [`vsphere_ha_vm_override`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override).

# `haVmOverride` Submodule <a name="`haVmOverride` Submodule" id="@cdktf/provider-vsphere.haVmOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HaVmOverride <a name="HaVmOverride" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override vsphere_ha_vm_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import ha_vm_override

haVmOverride.HaVmOverride(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_cluster_id: str,
  virtual_machine_id: str,
  ha_datastore_apd_recovery_action: str = None,
  ha_datastore_apd_response: str = None,
  ha_datastore_apd_response_delay: typing.Union[int, float] = None,
  ha_datastore_pdl_response: str = None,
  ha_host_isolation_response: str = None,
  ha_vm_failure_interval: typing.Union[int, float] = None,
  ha_vm_maximum_failure_window: typing.Union[int, float] = None,
  ha_vm_maximum_resets: typing.Union[int, float] = None,
  ha_vm_minimum_uptime: typing.Union[int, float] = None,
  ha_vm_monitoring: str = None,
  ha_vm_monitoring_use_cluster_defaults: typing.Union[bool, IResolvable] = None,
  ha_vm_restart_priority: str = None,
  ha_vm_restart_timeout: typing.Union[int, float] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastoreApdRecoveryAction">ha_datastore_apd_recovery_action</a></code> | <code>str</code> | Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastoreApdResponse">ha_datastore_apd_response</a></code> | <code>str</code> | Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastoreApdResponseDelay">ha_datastore_apd_response_delay</a></code> | <code>typing.Union[int, float]</code> | Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastorePdlResponse">ha_datastore_pdl_response</a></code> | <code>str</code> | Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haHostIsolationResponse">ha_host_isolation_response</a></code> | <code>str</code> | The action to take on this virtual machine when a host is isolated from the rest of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmFailureInterval">ha_vm_failure_interval</a></code> | <code>typing.Union[int, float]</code> | If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMaximumFailureWindow">ha_vm_maximum_failure_window</a></code> | <code>typing.Union[int, float]</code> | The length of the reset window in which ha_vm_maximum_resets can operate. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMaximumResets">ha_vm_maximum_resets</a></code> | <code>typing.Union[int, float]</code> | The maximum number of resets that HA will perform to this virtual machine when responding to a failure event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMinimumUptime">ha_vm_minimum_uptime</a></code> | <code>typing.Union[int, float]</code> | The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMonitoring">ha_vm_monitoring</a></code> | <code>str</code> | The type of virtual machine monitoring to use for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMonitoringUseClusterDefaults">ha_vm_monitoring_use_cluster_defaults</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmRestartPriority">ha_vm_restart_priority</a></code> | <code>str</code> | The restart priority for this virtual machine when vSphere detects a host failure. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmRestartTimeout">ha_vm_restart_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#id HaVmOverride#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_cluster_id`<sup>Required</sup> <a name="compute_cluster_id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.computeClusterId"></a>

- *Type:* str

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#compute_cluster_id HaVmOverride#compute_cluster_id}

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.virtualMachineId"></a>

- *Type:* str

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#virtual_machine_id HaVmOverride#virtual_machine_id}

---

##### `ha_datastore_apd_recovery_action`<sup>Optional</sup> <a name="ha_datastore_apd_recovery_action" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastoreApdRecoveryAction"></a>

- *Type:* str

Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event.

Can be one of useClusterDefault, none or reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_datastore_apd_recovery_action HaVmOverride#ha_datastore_apd_recovery_action}

---

##### `ha_datastore_apd_response`<sup>Optional</sup> <a name="ha_datastore_apd_response" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastoreApdResponse"></a>

- *Type:* str

Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore.

Can be one of clusterDefault, disabled, warning, restartConservative, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_datastore_apd_response HaVmOverride#ha_datastore_apd_response}

---

##### `ha_datastore_apd_response_delay`<sup>Optional</sup> <a name="ha_datastore_apd_response_delay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastoreApdResponseDelay"></a>

- *Type:* typing.Union[int, float]

Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.

Specify -1 to use the cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_datastore_apd_response_delay HaVmOverride#ha_datastore_apd_response_delay}

---

##### `ha_datastore_pdl_response`<sup>Optional</sup> <a name="ha_datastore_pdl_response" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haDatastorePdlResponse"></a>

- *Type:* str

Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore.

Can be one of clusterDefault, disabled, warning, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_datastore_pdl_response HaVmOverride#ha_datastore_pdl_response}

---

##### `ha_host_isolation_response`<sup>Optional</sup> <a name="ha_host_isolation_response" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haHostIsolationResponse"></a>

- *Type:* str

The action to take on this virtual machine when a host is isolated from the rest of the cluster.

Can be one of clusterIsolationResponse, none, powerOff, or shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_host_isolation_response HaVmOverride#ha_host_isolation_response}

---

##### `ha_vm_failure_interval`<sup>Optional</sup> <a name="ha_vm_failure_interval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmFailureInterval"></a>

- *Type:* typing.Union[int, float]

If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed.

The value is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_failure_interval HaVmOverride#ha_vm_failure_interval}

---

##### `ha_vm_maximum_failure_window`<sup>Optional</sup> <a name="ha_vm_maximum_failure_window" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMaximumFailureWindow"></a>

- *Type:* typing.Union[int, float]

The length of the reset window in which ha_vm_maximum_resets can operate.

When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_maximum_failure_window HaVmOverride#ha_vm_maximum_failure_window}

---

##### `ha_vm_maximum_resets`<sup>Optional</sup> <a name="ha_vm_maximum_resets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMaximumResets"></a>

- *Type:* typing.Union[int, float]

The maximum number of resets that HA will perform to this virtual machine when responding to a failure event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_maximum_resets HaVmOverride#ha_vm_maximum_resets}

---

##### `ha_vm_minimum_uptime`<sup>Optional</sup> <a name="ha_vm_minimum_uptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMinimumUptime"></a>

- *Type:* typing.Union[int, float]

The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_minimum_uptime HaVmOverride#ha_vm_minimum_uptime}

---

##### `ha_vm_monitoring`<sup>Optional</sup> <a name="ha_vm_monitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMonitoring"></a>

- *Type:* str

The type of virtual machine monitoring to use for this virtual machine.

Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_monitoring HaVmOverride#ha_vm_monitoring}

---

##### `ha_vm_monitoring_use_cluster_defaults`<sup>Optional</sup> <a name="ha_vm_monitoring_use_cluster_defaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmMonitoringUseClusterDefaults"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring.

The default is true (use cluster defaults) - set to false to have overrides take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_monitoring_use_cluster_defaults HaVmOverride#ha_vm_monitoring_use_cluster_defaults}

---

##### `ha_vm_restart_priority`<sup>Optional</sup> <a name="ha_vm_restart_priority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmRestartPriority"></a>

- *Type:* str

The restart priority for this virtual machine when vSphere detects a host failure.

Can be one of clusterRestartPriority, lowest, low, medium, high, or highest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_restart_priority HaVmOverride#ha_vm_restart_priority}

---

##### `ha_vm_restart_timeout`<sup>Optional</sup> <a name="ha_vm_restart_timeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.haVmRestartTimeout"></a>

- *Type:* typing.Union[int, float]

The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready.

Use -1 to use the cluster default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_restart_timeout HaVmOverride#ha_vm_restart_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#id HaVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdRecoveryAction">reset_ha_datastore_apd_recovery_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponse">reset_ha_datastore_apd_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponseDelay">reset_ha_datastore_apd_response_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastorePdlResponse">reset_ha_datastore_pdl_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaHostIsolationResponse">reset_ha_host_isolation_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmFailureInterval">reset_ha_vm_failure_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumFailureWindow">reset_ha_vm_maximum_failure_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumResets">reset_ha_vm_maximum_resets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMinimumUptime">reset_ha_vm_minimum_uptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoring">reset_ha_vm_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoringUseClusterDefaults">reset_ha_vm_monitoring_use_cluster_defaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartPriority">reset_ha_vm_restart_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartTimeout">reset_ha_vm_restart_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_ha_datastore_apd_recovery_action` <a name="reset_ha_datastore_apd_recovery_action" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdRecoveryAction"></a>

```python
def reset_ha_datastore_apd_recovery_action() -> None
```

##### `reset_ha_datastore_apd_response` <a name="reset_ha_datastore_apd_response" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponse"></a>

```python
def reset_ha_datastore_apd_response() -> None
```

##### `reset_ha_datastore_apd_response_delay` <a name="reset_ha_datastore_apd_response_delay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponseDelay"></a>

```python
def reset_ha_datastore_apd_response_delay() -> None
```

##### `reset_ha_datastore_pdl_response` <a name="reset_ha_datastore_pdl_response" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastorePdlResponse"></a>

```python
def reset_ha_datastore_pdl_response() -> None
```

##### `reset_ha_host_isolation_response` <a name="reset_ha_host_isolation_response" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaHostIsolationResponse"></a>

```python
def reset_ha_host_isolation_response() -> None
```

##### `reset_ha_vm_failure_interval` <a name="reset_ha_vm_failure_interval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmFailureInterval"></a>

```python
def reset_ha_vm_failure_interval() -> None
```

##### `reset_ha_vm_maximum_failure_window` <a name="reset_ha_vm_maximum_failure_window" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumFailureWindow"></a>

```python
def reset_ha_vm_maximum_failure_window() -> None
```

##### `reset_ha_vm_maximum_resets` <a name="reset_ha_vm_maximum_resets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumResets"></a>

```python
def reset_ha_vm_maximum_resets() -> None
```

##### `reset_ha_vm_minimum_uptime` <a name="reset_ha_vm_minimum_uptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMinimumUptime"></a>

```python
def reset_ha_vm_minimum_uptime() -> None
```

##### `reset_ha_vm_monitoring` <a name="reset_ha_vm_monitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoring"></a>

```python
def reset_ha_vm_monitoring() -> None
```

##### `reset_ha_vm_monitoring_use_cluster_defaults` <a name="reset_ha_vm_monitoring_use_cluster_defaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoringUseClusterDefaults"></a>

```python
def reset_ha_vm_monitoring_use_cluster_defaults() -> None
```

##### `reset_ha_vm_restart_priority` <a name="reset_ha_vm_restart_priority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartPriority"></a>

```python
def reset_ha_vm_restart_priority() -> None
```

##### `reset_ha_vm_restart_timeout` <a name="reset_ha_vm_restart_timeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartTimeout"></a>

```python
def reset_ha_vm_restart_timeout() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import ha_vm_override

haVmOverride.HaVmOverride.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import ha_vm_override

haVmOverride.HaVmOverride.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import ha_vm_override

haVmOverride.HaVmOverride.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterIdInput">compute_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryActionInput">ha_datastore_apd_recovery_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelayInput">ha_datastore_apd_response_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseInput">ha_datastore_apd_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponseInput">ha_datastore_pdl_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponseInput">ha_host_isolation_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureIntervalInput">ha_vm_failure_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindowInput">ha_vm_maximum_failure_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResetsInput">ha_vm_maximum_resets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptimeInput">ha_vm_minimum_uptime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringInput">ha_vm_monitoring_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaultsInput">ha_vm_monitoring_use_cluster_defaults_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriorityInput">ha_vm_restart_priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeoutInput">ha_vm_restart_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineIdInput">virtual_machine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryAction">ha_datastore_apd_recovery_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponse">ha_datastore_apd_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelay">ha_datastore_apd_response_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponse">ha_datastore_pdl_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponse">ha_host_isolation_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureInterval">ha_vm_failure_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindow">ha_vm_maximum_failure_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResets">ha_vm_maximum_resets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptime">ha_vm_minimum_uptime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoring">ha_vm_monitoring</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaults">ha_vm_monitoring_use_cluster_defaults</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriority">ha_vm_restart_priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeout">ha_vm_restart_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_cluster_id_input`<sup>Optional</sup> <a name="compute_cluster_id_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterIdInput"></a>

```python
compute_cluster_id_input: str
```

- *Type:* str

---

##### `ha_datastore_apd_recovery_action_input`<sup>Optional</sup> <a name="ha_datastore_apd_recovery_action_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryActionInput"></a>

```python
ha_datastore_apd_recovery_action_input: str
```

- *Type:* str

---

##### `ha_datastore_apd_response_delay_input`<sup>Optional</sup> <a name="ha_datastore_apd_response_delay_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelayInput"></a>

```python
ha_datastore_apd_response_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_datastore_apd_response_input`<sup>Optional</sup> <a name="ha_datastore_apd_response_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseInput"></a>

```python
ha_datastore_apd_response_input: str
```

- *Type:* str

---

##### `ha_datastore_pdl_response_input`<sup>Optional</sup> <a name="ha_datastore_pdl_response_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponseInput"></a>

```python
ha_datastore_pdl_response_input: str
```

- *Type:* str

---

##### `ha_host_isolation_response_input`<sup>Optional</sup> <a name="ha_host_isolation_response_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponseInput"></a>

```python
ha_host_isolation_response_input: str
```

- *Type:* str

---

##### `ha_vm_failure_interval_input`<sup>Optional</sup> <a name="ha_vm_failure_interval_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureIntervalInput"></a>

```python
ha_vm_failure_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_maximum_failure_window_input`<sup>Optional</sup> <a name="ha_vm_maximum_failure_window_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindowInput"></a>

```python
ha_vm_maximum_failure_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_maximum_resets_input`<sup>Optional</sup> <a name="ha_vm_maximum_resets_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResetsInput"></a>

```python
ha_vm_maximum_resets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_minimum_uptime_input`<sup>Optional</sup> <a name="ha_vm_minimum_uptime_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptimeInput"></a>

```python
ha_vm_minimum_uptime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_monitoring_input`<sup>Optional</sup> <a name="ha_vm_monitoring_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringInput"></a>

```python
ha_vm_monitoring_input: str
```

- *Type:* str

---

##### `ha_vm_monitoring_use_cluster_defaults_input`<sup>Optional</sup> <a name="ha_vm_monitoring_use_cluster_defaults_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaultsInput"></a>

```python
ha_vm_monitoring_use_cluster_defaults_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ha_vm_restart_priority_input`<sup>Optional</sup> <a name="ha_vm_restart_priority_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriorityInput"></a>

```python
ha_vm_restart_priority_input: str
```

- *Type:* str

---

##### `ha_vm_restart_timeout_input`<sup>Optional</sup> <a name="ha_vm_restart_timeout_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeoutInput"></a>

```python
ha_vm_restart_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `virtual_machine_id_input`<sup>Optional</sup> <a name="virtual_machine_id_input" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineIdInput"></a>

```python
virtual_machine_id_input: str
```

- *Type:* str

---

##### `compute_cluster_id`<sup>Required</sup> <a name="compute_cluster_id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterId"></a>

```python
compute_cluster_id: str
```

- *Type:* str

---

##### `ha_datastore_apd_recovery_action`<sup>Required</sup> <a name="ha_datastore_apd_recovery_action" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryAction"></a>

```python
ha_datastore_apd_recovery_action: str
```

- *Type:* str

---

##### `ha_datastore_apd_response`<sup>Required</sup> <a name="ha_datastore_apd_response" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponse"></a>

```python
ha_datastore_apd_response: str
```

- *Type:* str

---

##### `ha_datastore_apd_response_delay`<sup>Required</sup> <a name="ha_datastore_apd_response_delay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelay"></a>

```python
ha_datastore_apd_response_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_datastore_pdl_response`<sup>Required</sup> <a name="ha_datastore_pdl_response" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponse"></a>

```python
ha_datastore_pdl_response: str
```

- *Type:* str

---

##### `ha_host_isolation_response`<sup>Required</sup> <a name="ha_host_isolation_response" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponse"></a>

```python
ha_host_isolation_response: str
```

- *Type:* str

---

##### `ha_vm_failure_interval`<sup>Required</sup> <a name="ha_vm_failure_interval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureInterval"></a>

```python
ha_vm_failure_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_maximum_failure_window`<sup>Required</sup> <a name="ha_vm_maximum_failure_window" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindow"></a>

```python
ha_vm_maximum_failure_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_maximum_resets`<sup>Required</sup> <a name="ha_vm_maximum_resets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResets"></a>

```python
ha_vm_maximum_resets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_minimum_uptime`<sup>Required</sup> <a name="ha_vm_minimum_uptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptime"></a>

```python
ha_vm_minimum_uptime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_vm_monitoring`<sup>Required</sup> <a name="ha_vm_monitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoring"></a>

```python
ha_vm_monitoring: str
```

- *Type:* str

---

##### `ha_vm_monitoring_use_cluster_defaults`<sup>Required</sup> <a name="ha_vm_monitoring_use_cluster_defaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaults"></a>

```python
ha_vm_monitoring_use_cluster_defaults: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ha_vm_restart_priority`<sup>Required</sup> <a name="ha_vm_restart_priority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriority"></a>

```python
ha_vm_restart_priority: str
```

- *Type:* str

---

##### `ha_vm_restart_timeout`<sup>Required</sup> <a name="ha_vm_restart_timeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeout"></a>

```python
ha_vm_restart_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HaVmOverrideConfig <a name="HaVmOverrideConfig" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import ha_vm_override

haVmOverride.HaVmOverrideConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_cluster_id: str,
  virtual_machine_id: str,
  ha_datastore_apd_recovery_action: str = None,
  ha_datastore_apd_response: str = None,
  ha_datastore_apd_response_delay: typing.Union[int, float] = None,
  ha_datastore_pdl_response: str = None,
  ha_host_isolation_response: str = None,
  ha_vm_failure_interval: typing.Union[int, float] = None,
  ha_vm_maximum_failure_window: typing.Union[int, float] = None,
  ha_vm_maximum_resets: typing.Union[int, float] = None,
  ha_vm_minimum_uptime: typing.Union[int, float] = None,
  ha_vm_monitoring: str = None,
  ha_vm_monitoring_use_cluster_defaults: typing.Union[bool, IResolvable] = None,
  ha_vm_restart_priority: str = None,
  ha_vm_restart_timeout: typing.Union[int, float] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdRecoveryAction">ha_datastore_apd_recovery_action</a></code> | <code>str</code> | Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponse">ha_datastore_apd_response</a></code> | <code>str</code> | Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponseDelay">ha_datastore_apd_response_delay</a></code> | <code>typing.Union[int, float]</code> | Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastorePdlResponse">ha_datastore_pdl_response</a></code> | <code>str</code> | Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haHostIsolationResponse">ha_host_isolation_response</a></code> | <code>str</code> | The action to take on this virtual machine when a host is isolated from the rest of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmFailureInterval">ha_vm_failure_interval</a></code> | <code>typing.Union[int, float]</code> | If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumFailureWindow">ha_vm_maximum_failure_window</a></code> | <code>typing.Union[int, float]</code> | The length of the reset window in which ha_vm_maximum_resets can operate. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumResets">ha_vm_maximum_resets</a></code> | <code>typing.Union[int, float]</code> | The maximum number of resets that HA will perform to this virtual machine when responding to a failure event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMinimumUptime">ha_vm_minimum_uptime</a></code> | <code>typing.Union[int, float]</code> | The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoring">ha_vm_monitoring</a></code> | <code>str</code> | The type of virtual machine monitoring to use for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoringUseClusterDefaults">ha_vm_monitoring_use_cluster_defaults</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartPriority">ha_vm_restart_priority</a></code> | <code>str</code> | The restart priority for this virtual machine when vSphere detects a host failure. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartTimeout">ha_vm_restart_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#id HaVmOverride#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_cluster_id`<sup>Required</sup> <a name="compute_cluster_id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.computeClusterId"></a>

```python
compute_cluster_id: str
```

- *Type:* str

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#compute_cluster_id HaVmOverride#compute_cluster_id}

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#virtual_machine_id HaVmOverride#virtual_machine_id}

---

##### `ha_datastore_apd_recovery_action`<sup>Optional</sup> <a name="ha_datastore_apd_recovery_action" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdRecoveryAction"></a>

```python
ha_datastore_apd_recovery_action: str
```

- *Type:* str

Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event.

Can be one of useClusterDefault, none or reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_datastore_apd_recovery_action HaVmOverride#ha_datastore_apd_recovery_action}

---

##### `ha_datastore_apd_response`<sup>Optional</sup> <a name="ha_datastore_apd_response" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponse"></a>

```python
ha_datastore_apd_response: str
```

- *Type:* str

Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore.

Can be one of clusterDefault, disabled, warning, restartConservative, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_datastore_apd_response HaVmOverride#ha_datastore_apd_response}

---

##### `ha_datastore_apd_response_delay`<sup>Optional</sup> <a name="ha_datastore_apd_response_delay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponseDelay"></a>

```python
ha_datastore_apd_response_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.

Specify -1 to use the cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_datastore_apd_response_delay HaVmOverride#ha_datastore_apd_response_delay}

---

##### `ha_datastore_pdl_response`<sup>Optional</sup> <a name="ha_datastore_pdl_response" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastorePdlResponse"></a>

```python
ha_datastore_pdl_response: str
```

- *Type:* str

Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore.

Can be one of clusterDefault, disabled, warning, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_datastore_pdl_response HaVmOverride#ha_datastore_pdl_response}

---

##### `ha_host_isolation_response`<sup>Optional</sup> <a name="ha_host_isolation_response" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haHostIsolationResponse"></a>

```python
ha_host_isolation_response: str
```

- *Type:* str

The action to take on this virtual machine when a host is isolated from the rest of the cluster.

Can be one of clusterIsolationResponse, none, powerOff, or shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_host_isolation_response HaVmOverride#ha_host_isolation_response}

---

##### `ha_vm_failure_interval`<sup>Optional</sup> <a name="ha_vm_failure_interval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmFailureInterval"></a>

```python
ha_vm_failure_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed.

The value is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_failure_interval HaVmOverride#ha_vm_failure_interval}

---

##### `ha_vm_maximum_failure_window`<sup>Optional</sup> <a name="ha_vm_maximum_failure_window" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumFailureWindow"></a>

```python
ha_vm_maximum_failure_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of the reset window in which ha_vm_maximum_resets can operate.

When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_maximum_failure_window HaVmOverride#ha_vm_maximum_failure_window}

---

##### `ha_vm_maximum_resets`<sup>Optional</sup> <a name="ha_vm_maximum_resets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumResets"></a>

```python
ha_vm_maximum_resets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of resets that HA will perform to this virtual machine when responding to a failure event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_maximum_resets HaVmOverride#ha_vm_maximum_resets}

---

##### `ha_vm_minimum_uptime`<sup>Optional</sup> <a name="ha_vm_minimum_uptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMinimumUptime"></a>

```python
ha_vm_minimum_uptime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_minimum_uptime HaVmOverride#ha_vm_minimum_uptime}

---

##### `ha_vm_monitoring`<sup>Optional</sup> <a name="ha_vm_monitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoring"></a>

```python
ha_vm_monitoring: str
```

- *Type:* str

The type of virtual machine monitoring to use for this virtual machine.

Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_monitoring HaVmOverride#ha_vm_monitoring}

---

##### `ha_vm_monitoring_use_cluster_defaults`<sup>Optional</sup> <a name="ha_vm_monitoring_use_cluster_defaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoringUseClusterDefaults"></a>

```python
ha_vm_monitoring_use_cluster_defaults: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring.

The default is true (use cluster defaults) - set to false to have overrides take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_monitoring_use_cluster_defaults HaVmOverride#ha_vm_monitoring_use_cluster_defaults}

---

##### `ha_vm_restart_priority`<sup>Optional</sup> <a name="ha_vm_restart_priority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartPriority"></a>

```python
ha_vm_restart_priority: str
```

- *Type:* str

The restart priority for this virtual machine when vSphere detects a host failure.

Can be one of clusterRestartPriority, lowest, low, medium, high, or highest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_restart_priority HaVmOverride#ha_vm_restart_priority}

---

##### `ha_vm_restart_timeout`<sup>Optional</sup> <a name="ha_vm_restart_timeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartTimeout"></a>

```python
ha_vm_restart_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready.

Use -1 to use the cluster default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#ha_vm_restart_timeout HaVmOverride#ha_vm_restart_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/ha_vm_override#id HaVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



