# `datastoreCluster` Submodule <a name="`datastoreCluster` Submodule" id="@cdktf/provider-vsphere.datastoreCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastoreCluster <a name="DatastoreCluster" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster vsphere_datastore_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import datastore_cluster

datastoreCluster.DatastoreCluster(
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
  folder: str = None,
  id: str = None,
  sdrs_advanced_options: typing.Mapping[str] = None,
  sdrs_automation_level: str = None,
  sdrs_default_intra_vm_affinity: typing.Union[bool, IResolvable] = None,
  sdrs_enabled: typing.Union[bool, IResolvable] = None,
  sdrs_free_space_threshold: typing.Union[int, float] = None,
  sdrs_free_space_threshold_mode: str = None,
  sdrs_free_space_utilization_difference: typing.Union[int, float] = None,
  sdrs_io_balance_automation_level: str = None,
  sdrs_io_latency_threshold: typing.Union[int, float] = None,
  sdrs_io_load_balance_enabled: typing.Union[bool, IResolvable] = None,
  sdrs_io_load_imbalance_threshold: typing.Union[int, float] = None,
  sdrs_io_reservable_iops_threshold: typing.Union[int, float] = None,
  sdrs_io_reservable_percent_threshold: typing.Union[int, float] = None,
  sdrs_io_reservable_threshold_mode: str = None,
  sdrs_load_balance_interval: typing.Union[int, float] = None,
  sdrs_policy_enforcement_automation_level: str = None,
  sdrs_rule_enforcement_automation_level: str = None,
  sdrs_space_balance_automation_level: str = None,
  sdrs_space_utilization_threshold: typing.Union[int, float] = None,
  sdrs_vm_evacuation_automation_level: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | The managed object ID of the datacenter to put the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Name for the new storage pod. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The name of the folder to locate the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#id DatastoreCluster#id}. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsAdvancedOptions">sdrs_advanced_options</a></code> | <code>typing.Mapping[str]</code> | Advanced configuration options for storage DRS. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsAutomationLevel">sdrs_automation_level</a></code> | <code>str</code> | The default automation level for all virtual machines in this storage cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsDefaultIntraVmAffinity">sdrs_default_intra_vm_affinity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsEnabled">sdrs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable storage DRS for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsFreeSpaceThreshold">sdrs_free_space_threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsFreeSpaceThresholdMode">sdrs_free_space_threshold_mode</a></code> | <code>str</code> | The free space threshold to use. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsFreeSpaceUtilizationDifference">sdrs_free_space_utilization_difference</a></code> | <code>typing.Union[int, float]</code> | The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoBalanceAutomationLevel">sdrs_io_balance_automation_level</a></code> | <code>str</code> | Overrides the default automation settings when correcting I/O load imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoLatencyThreshold">sdrs_io_latency_threshold</a></code> | <code>typing.Union[int, float]</code> | The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoLoadBalanceEnabled">sdrs_io_load_balance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable I/O load balancing for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoLoadImbalanceThreshold">sdrs_io_load_imbalance_threshold</a></code> | <code>typing.Union[int, float]</code> | The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoReservableIopsThreshold">sdrs_io_reservable_iops_threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoReservablePercentThreshold">sdrs_io_reservable_percent_threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoReservableThresholdMode">sdrs_io_reservable_threshold_mode</a></code> | <code>str</code> | The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsLoadBalanceInterval">sdrs_load_balance_interval</a></code> | <code>typing.Union[int, float]</code> | The storage DRS poll interval, in minutes. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsPolicyEnforcementAutomationLevel">sdrs_policy_enforcement_automation_level</a></code> | <code>str</code> | Overrides the default automation settings when correcting storage and VM policy violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsRuleEnforcementAutomationLevel">sdrs_rule_enforcement_automation_level</a></code> | <code>str</code> | Overrides the default automation settings when correcting affinity rule violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsSpaceBalanceAutomationLevel">sdrs_space_balance_automation_level</a></code> | <code>str</code> | Overrides the default automation settings when correcting disk space imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsSpaceUtilizationThreshold">sdrs_space_utilization_threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsVmEvacuationAutomationLevel">sdrs_vm_evacuation_automation_level</a></code> | <code>str</code> | Overrides the default automation settings when generating recommendations for datastore evacuation. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.datacenterId"></a>

- *Type:* str

The managed object ID of the datacenter to put the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#datacenter_id DatastoreCluster#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.name"></a>

- *Type:* str

Name for the new storage pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#name DatastoreCluster#name}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.customAttributes"></a>

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#custom_attributes DatastoreCluster#custom_attributes}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.folder"></a>

- *Type:* str

The name of the folder to locate the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#folder DatastoreCluster#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#id DatastoreCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sdrs_advanced_options`<sup>Optional</sup> <a name="sdrs_advanced_options" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsAdvancedOptions"></a>

- *Type:* typing.Mapping[str]

Advanced configuration options for storage DRS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_advanced_options DatastoreCluster#sdrs_advanced_options}

---

##### `sdrs_automation_level`<sup>Optional</sup> <a name="sdrs_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsAutomationLevel"></a>

- *Type:* str

The default automation level for all virtual machines in this storage cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_automation_level DatastoreCluster#sdrs_automation_level}

---

##### `sdrs_default_intra_vm_affinity`<sup>Optional</sup> <a name="sdrs_default_intra_vm_affinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsDefaultIntraVmAffinity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_default_intra_vm_affinity DatastoreCluster#sdrs_default_intra_vm_affinity}

---

##### `sdrs_enabled`<sup>Optional</sup> <a name="sdrs_enabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable storage DRS for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_enabled DatastoreCluster#sdrs_enabled}

---

##### `sdrs_free_space_threshold`<sup>Optional</sup> <a name="sdrs_free_space_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsFreeSpaceThreshold"></a>

- *Type:* typing.Union[int, float]

The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_free_space_threshold DatastoreCluster#sdrs_free_space_threshold}

---

##### `sdrs_free_space_threshold_mode`<sup>Optional</sup> <a name="sdrs_free_space_threshold_mode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsFreeSpaceThresholdMode"></a>

- *Type:* str

The free space threshold to use.

When set to utilization, drs_space_utilization_threshold is used, and when set to freeSpace, drs_free_space_threshold is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_free_space_threshold_mode DatastoreCluster#sdrs_free_space_threshold_mode}

---

##### `sdrs_free_space_utilization_difference`<sup>Optional</sup> <a name="sdrs_free_space_utilization_difference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsFreeSpaceUtilizationDifference"></a>

- *Type:* typing.Union[int, float]

The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_free_space_utilization_difference DatastoreCluster#sdrs_free_space_utilization_difference}

---

##### `sdrs_io_balance_automation_level`<sup>Optional</sup> <a name="sdrs_io_balance_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoBalanceAutomationLevel"></a>

- *Type:* str

Overrides the default automation settings when correcting I/O load imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_balance_automation_level DatastoreCluster#sdrs_io_balance_automation_level}

---

##### `sdrs_io_latency_threshold`<sup>Optional</sup> <a name="sdrs_io_latency_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoLatencyThreshold"></a>

- *Type:* typing.Union[int, float]

The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_latency_threshold DatastoreCluster#sdrs_io_latency_threshold}

---

##### `sdrs_io_load_balance_enabled`<sup>Optional</sup> <a name="sdrs_io_load_balance_enabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoLoadBalanceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable I/O load balancing for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_load_balance_enabled DatastoreCluster#sdrs_io_load_balance_enabled}

---

##### `sdrs_io_load_imbalance_threshold`<sup>Optional</sup> <a name="sdrs_io_load_imbalance_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoLoadImbalanceThreshold"></a>

- *Type:* typing.Union[int, float]

The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_load_imbalance_threshold DatastoreCluster#sdrs_io_load_imbalance_threshold}

---

##### `sdrs_io_reservable_iops_threshold`<sup>Optional</sup> <a name="sdrs_io_reservable_iops_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoReservableIopsThreshold"></a>

- *Type:* typing.Union[int, float]

The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_reservable_iops_threshold DatastoreCluster#sdrs_io_reservable_iops_threshold}

---

##### `sdrs_io_reservable_percent_threshold`<sup>Optional</sup> <a name="sdrs_io_reservable_percent_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoReservablePercentThreshold"></a>

- *Type:* typing.Union[int, float]

The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_reservable_percent_threshold DatastoreCluster#sdrs_io_reservable_percent_threshold}

---

##### `sdrs_io_reservable_threshold_mode`<sup>Optional</sup> <a name="sdrs_io_reservable_threshold_mode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoReservableThresholdMode"></a>

- *Type:* str

The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_reservable_threshold_mode DatastoreCluster#sdrs_io_reservable_threshold_mode}

---

##### `sdrs_load_balance_interval`<sup>Optional</sup> <a name="sdrs_load_balance_interval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsLoadBalanceInterval"></a>

- *Type:* typing.Union[int, float]

The storage DRS poll interval, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_load_balance_interval DatastoreCluster#sdrs_load_balance_interval}

---

##### `sdrs_policy_enforcement_automation_level`<sup>Optional</sup> <a name="sdrs_policy_enforcement_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsPolicyEnforcementAutomationLevel"></a>

- *Type:* str

Overrides the default automation settings when correcting storage and VM policy violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_policy_enforcement_automation_level DatastoreCluster#sdrs_policy_enforcement_automation_level}

---

##### `sdrs_rule_enforcement_automation_level`<sup>Optional</sup> <a name="sdrs_rule_enforcement_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsRuleEnforcementAutomationLevel"></a>

- *Type:* str

Overrides the default automation settings when correcting affinity rule violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_rule_enforcement_automation_level DatastoreCluster#sdrs_rule_enforcement_automation_level}

---

##### `sdrs_space_balance_automation_level`<sup>Optional</sup> <a name="sdrs_space_balance_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsSpaceBalanceAutomationLevel"></a>

- *Type:* str

Overrides the default automation settings when correcting disk space imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_space_balance_automation_level DatastoreCluster#sdrs_space_balance_automation_level}

---

##### `sdrs_space_utilization_threshold`<sup>Optional</sup> <a name="sdrs_space_utilization_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsSpaceUtilizationThreshold"></a>

- *Type:* typing.Union[int, float]

The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_space_utilization_threshold DatastoreCluster#sdrs_space_utilization_threshold}

---

##### `sdrs_vm_evacuation_automation_level`<sup>Optional</sup> <a name="sdrs_vm_evacuation_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsVmEvacuationAutomationLevel"></a>

- *Type:* str

Overrides the default automation settings when generating recommendations for datastore evacuation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_vm_evacuation_automation_level DatastoreCluster#sdrs_vm_evacuation_automation_level}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#tags DatastoreCluster#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAdvancedOptions">reset_sdrs_advanced_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAutomationLevel">reset_sdrs_automation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsDefaultIntraVmAffinity">reset_sdrs_default_intra_vm_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsEnabled">reset_sdrs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThreshold">reset_sdrs_free_space_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThresholdMode">reset_sdrs_free_space_threshold_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceUtilizationDifference">reset_sdrs_free_space_utilization_difference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoBalanceAutomationLevel">reset_sdrs_io_balance_automation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLatencyThreshold">reset_sdrs_io_latency_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadBalanceEnabled">reset_sdrs_io_load_balance_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadImbalanceThreshold">reset_sdrs_io_load_imbalance_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableIopsThreshold">reset_sdrs_io_reservable_iops_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservablePercentThreshold">reset_sdrs_io_reservable_percent_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableThresholdMode">reset_sdrs_io_reservable_threshold_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsLoadBalanceInterval">reset_sdrs_load_balance_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsPolicyEnforcementAutomationLevel">reset_sdrs_policy_enforcement_automation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsRuleEnforcementAutomationLevel">reset_sdrs_rule_enforcement_automation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceBalanceAutomationLevel">reset_sdrs_space_balance_automation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceUtilizationThreshold">reset_sdrs_space_utilization_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsVmEvacuationAutomationLevel">reset_sdrs_vm_evacuation_automation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sdrs_advanced_options` <a name="reset_sdrs_advanced_options" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAdvancedOptions"></a>

```python
def reset_sdrs_advanced_options() -> None
```

##### `reset_sdrs_automation_level` <a name="reset_sdrs_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAutomationLevel"></a>

```python
def reset_sdrs_automation_level() -> None
```

##### `reset_sdrs_default_intra_vm_affinity` <a name="reset_sdrs_default_intra_vm_affinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsDefaultIntraVmAffinity"></a>

```python
def reset_sdrs_default_intra_vm_affinity() -> None
```

##### `reset_sdrs_enabled` <a name="reset_sdrs_enabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsEnabled"></a>

```python
def reset_sdrs_enabled() -> None
```

##### `reset_sdrs_free_space_threshold` <a name="reset_sdrs_free_space_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThreshold"></a>

```python
def reset_sdrs_free_space_threshold() -> None
```

##### `reset_sdrs_free_space_threshold_mode` <a name="reset_sdrs_free_space_threshold_mode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThresholdMode"></a>

```python
def reset_sdrs_free_space_threshold_mode() -> None
```

##### `reset_sdrs_free_space_utilization_difference` <a name="reset_sdrs_free_space_utilization_difference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceUtilizationDifference"></a>

```python
def reset_sdrs_free_space_utilization_difference() -> None
```

##### `reset_sdrs_io_balance_automation_level` <a name="reset_sdrs_io_balance_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoBalanceAutomationLevel"></a>

```python
def reset_sdrs_io_balance_automation_level() -> None
```

##### `reset_sdrs_io_latency_threshold` <a name="reset_sdrs_io_latency_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLatencyThreshold"></a>

```python
def reset_sdrs_io_latency_threshold() -> None
```

##### `reset_sdrs_io_load_balance_enabled` <a name="reset_sdrs_io_load_balance_enabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadBalanceEnabled"></a>

```python
def reset_sdrs_io_load_balance_enabled() -> None
```

##### `reset_sdrs_io_load_imbalance_threshold` <a name="reset_sdrs_io_load_imbalance_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadImbalanceThreshold"></a>

```python
def reset_sdrs_io_load_imbalance_threshold() -> None
```

##### `reset_sdrs_io_reservable_iops_threshold` <a name="reset_sdrs_io_reservable_iops_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableIopsThreshold"></a>

```python
def reset_sdrs_io_reservable_iops_threshold() -> None
```

##### `reset_sdrs_io_reservable_percent_threshold` <a name="reset_sdrs_io_reservable_percent_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservablePercentThreshold"></a>

```python
def reset_sdrs_io_reservable_percent_threshold() -> None
```

##### `reset_sdrs_io_reservable_threshold_mode` <a name="reset_sdrs_io_reservable_threshold_mode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableThresholdMode"></a>

```python
def reset_sdrs_io_reservable_threshold_mode() -> None
```

##### `reset_sdrs_load_balance_interval` <a name="reset_sdrs_load_balance_interval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsLoadBalanceInterval"></a>

```python
def reset_sdrs_load_balance_interval() -> None
```

##### `reset_sdrs_policy_enforcement_automation_level` <a name="reset_sdrs_policy_enforcement_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsPolicyEnforcementAutomationLevel"></a>

```python
def reset_sdrs_policy_enforcement_automation_level() -> None
```

##### `reset_sdrs_rule_enforcement_automation_level` <a name="reset_sdrs_rule_enforcement_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsRuleEnforcementAutomationLevel"></a>

```python
def reset_sdrs_rule_enforcement_automation_level() -> None
```

##### `reset_sdrs_space_balance_automation_level` <a name="reset_sdrs_space_balance_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceBalanceAutomationLevel"></a>

```python
def reset_sdrs_space_balance_automation_level() -> None
```

##### `reset_sdrs_space_utilization_threshold` <a name="reset_sdrs_space_utilization_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceUtilizationThreshold"></a>

```python
def reset_sdrs_space_utilization_threshold() -> None
```

##### `reset_sdrs_vm_evacuation_automation_level` <a name="reset_sdrs_vm_evacuation_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsVmEvacuationAutomationLevel"></a>

```python
def reset_sdrs_vm_evacuation_automation_level() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatastoreCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import datastore_cluster

datastoreCluster.DatastoreCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import datastore_cluster

datastoreCluster.DatastoreCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import datastore_cluster

datastoreCluster.DatastoreCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import datastore_cluster

datastoreCluster.DatastoreCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatastoreCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatastoreCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatastoreCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatastoreCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributesInput">custom_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptionsInput">sdrs_advanced_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevelInput">sdrs_automation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinityInput">sdrs_default_intra_vm_affinity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabledInput">sdrs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdInput">sdrs_free_space_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdModeInput">sdrs_free_space_threshold_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifferenceInput">sdrs_free_space_utilization_difference_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevelInput">sdrs_io_balance_automation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThresholdInput">sdrs_io_latency_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabledInput">sdrs_io_load_balance_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThresholdInput">sdrs_io_load_imbalance_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThresholdInput">sdrs_io_reservable_iops_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThresholdInput">sdrs_io_reservable_percent_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdModeInput">sdrs_io_reservable_threshold_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceIntervalInput">sdrs_load_balance_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevelInput">sdrs_policy_enforcement_automation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevelInput">sdrs_rule_enforcement_automation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevelInput">sdrs_space_balance_automation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThresholdInput">sdrs_space_utilization_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevelInput">sdrs_vm_evacuation_automation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptions">sdrs_advanced_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevel">sdrs_automation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinity">sdrs_default_intra_vm_affinity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabled">sdrs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThreshold">sdrs_free_space_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdMode">sdrs_free_space_threshold_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifference">sdrs_free_space_utilization_difference</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevel">sdrs_io_balance_automation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThreshold">sdrs_io_latency_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabled">sdrs_io_load_balance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThreshold">sdrs_io_load_imbalance_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThreshold">sdrs_io_reservable_iops_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThreshold">sdrs_io_reservable_percent_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdMode">sdrs_io_reservable_threshold_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceInterval">sdrs_load_balance_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevel">sdrs_policy_enforcement_automation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevel">sdrs_rule_enforcement_automation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevel">sdrs_space_balance_automation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThreshold">sdrs_space_utilization_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevel">sdrs_vm_evacuation_automation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributesInput"></a>

```python
custom_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sdrs_advanced_options_input`<sup>Optional</sup> <a name="sdrs_advanced_options_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptionsInput"></a>

```python
sdrs_advanced_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sdrs_automation_level_input`<sup>Optional</sup> <a name="sdrs_automation_level_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevelInput"></a>

```python
sdrs_automation_level_input: str
```

- *Type:* str

---

##### `sdrs_default_intra_vm_affinity_input`<sup>Optional</sup> <a name="sdrs_default_intra_vm_affinity_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinityInput"></a>

```python
sdrs_default_intra_vm_affinity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sdrs_enabled_input`<sup>Optional</sup> <a name="sdrs_enabled_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabledInput"></a>

```python
sdrs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sdrs_free_space_threshold_input`<sup>Optional</sup> <a name="sdrs_free_space_threshold_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdInput"></a>

```python
sdrs_free_space_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_free_space_threshold_mode_input`<sup>Optional</sup> <a name="sdrs_free_space_threshold_mode_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdModeInput"></a>

```python
sdrs_free_space_threshold_mode_input: str
```

- *Type:* str

---

##### `sdrs_free_space_utilization_difference_input`<sup>Optional</sup> <a name="sdrs_free_space_utilization_difference_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifferenceInput"></a>

```python
sdrs_free_space_utilization_difference_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_io_balance_automation_level_input`<sup>Optional</sup> <a name="sdrs_io_balance_automation_level_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevelInput"></a>

```python
sdrs_io_balance_automation_level_input: str
```

- *Type:* str

---

##### `sdrs_io_latency_threshold_input`<sup>Optional</sup> <a name="sdrs_io_latency_threshold_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThresholdInput"></a>

```python
sdrs_io_latency_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_io_load_balance_enabled_input`<sup>Optional</sup> <a name="sdrs_io_load_balance_enabled_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabledInput"></a>

```python
sdrs_io_load_balance_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sdrs_io_load_imbalance_threshold_input`<sup>Optional</sup> <a name="sdrs_io_load_imbalance_threshold_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThresholdInput"></a>

```python
sdrs_io_load_imbalance_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_io_reservable_iops_threshold_input`<sup>Optional</sup> <a name="sdrs_io_reservable_iops_threshold_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThresholdInput"></a>

```python
sdrs_io_reservable_iops_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_io_reservable_percent_threshold_input`<sup>Optional</sup> <a name="sdrs_io_reservable_percent_threshold_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThresholdInput"></a>

```python
sdrs_io_reservable_percent_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_io_reservable_threshold_mode_input`<sup>Optional</sup> <a name="sdrs_io_reservable_threshold_mode_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdModeInput"></a>

```python
sdrs_io_reservable_threshold_mode_input: str
```

- *Type:* str

---

##### `sdrs_load_balance_interval_input`<sup>Optional</sup> <a name="sdrs_load_balance_interval_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceIntervalInput"></a>

```python
sdrs_load_balance_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_policy_enforcement_automation_level_input`<sup>Optional</sup> <a name="sdrs_policy_enforcement_automation_level_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevelInput"></a>

```python
sdrs_policy_enforcement_automation_level_input: str
```

- *Type:* str

---

##### `sdrs_rule_enforcement_automation_level_input`<sup>Optional</sup> <a name="sdrs_rule_enforcement_automation_level_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevelInput"></a>

```python
sdrs_rule_enforcement_automation_level_input: str
```

- *Type:* str

---

##### `sdrs_space_balance_automation_level_input`<sup>Optional</sup> <a name="sdrs_space_balance_automation_level_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevelInput"></a>

```python
sdrs_space_balance_automation_level_input: str
```

- *Type:* str

---

##### `sdrs_space_utilization_threshold_input`<sup>Optional</sup> <a name="sdrs_space_utilization_threshold_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThresholdInput"></a>

```python
sdrs_space_utilization_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_vm_evacuation_automation_level_input`<sup>Optional</sup> <a name="sdrs_vm_evacuation_automation_level_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevelInput"></a>

```python
sdrs_vm_evacuation_automation_level_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sdrs_advanced_options`<sup>Required</sup> <a name="sdrs_advanced_options" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptions"></a>

```python
sdrs_advanced_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sdrs_automation_level`<sup>Required</sup> <a name="sdrs_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevel"></a>

```python
sdrs_automation_level: str
```

- *Type:* str

---

##### `sdrs_default_intra_vm_affinity`<sup>Required</sup> <a name="sdrs_default_intra_vm_affinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinity"></a>

```python
sdrs_default_intra_vm_affinity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sdrs_enabled`<sup>Required</sup> <a name="sdrs_enabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabled"></a>

```python
sdrs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sdrs_free_space_threshold`<sup>Required</sup> <a name="sdrs_free_space_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThreshold"></a>

```python
sdrs_free_space_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_free_space_threshold_mode`<sup>Required</sup> <a name="sdrs_free_space_threshold_mode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdMode"></a>

```python
sdrs_free_space_threshold_mode: str
```

- *Type:* str

---

##### `sdrs_free_space_utilization_difference`<sup>Required</sup> <a name="sdrs_free_space_utilization_difference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifference"></a>

```python
sdrs_free_space_utilization_difference: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_io_balance_automation_level`<sup>Required</sup> <a name="sdrs_io_balance_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevel"></a>

```python
sdrs_io_balance_automation_level: str
```

- *Type:* str

---

##### `sdrs_io_latency_threshold`<sup>Required</sup> <a name="sdrs_io_latency_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThreshold"></a>

```python
sdrs_io_latency_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_io_load_balance_enabled`<sup>Required</sup> <a name="sdrs_io_load_balance_enabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabled"></a>

```python
sdrs_io_load_balance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sdrs_io_load_imbalance_threshold`<sup>Required</sup> <a name="sdrs_io_load_imbalance_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThreshold"></a>

```python
sdrs_io_load_imbalance_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_io_reservable_iops_threshold`<sup>Required</sup> <a name="sdrs_io_reservable_iops_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThreshold"></a>

```python
sdrs_io_reservable_iops_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_io_reservable_percent_threshold`<sup>Required</sup> <a name="sdrs_io_reservable_percent_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThreshold"></a>

```python
sdrs_io_reservable_percent_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_io_reservable_threshold_mode`<sup>Required</sup> <a name="sdrs_io_reservable_threshold_mode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdMode"></a>

```python
sdrs_io_reservable_threshold_mode: str
```

- *Type:* str

---

##### `sdrs_load_balance_interval`<sup>Required</sup> <a name="sdrs_load_balance_interval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceInterval"></a>

```python
sdrs_load_balance_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_policy_enforcement_automation_level`<sup>Required</sup> <a name="sdrs_policy_enforcement_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevel"></a>

```python
sdrs_policy_enforcement_automation_level: str
```

- *Type:* str

---

##### `sdrs_rule_enforcement_automation_level`<sup>Required</sup> <a name="sdrs_rule_enforcement_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevel"></a>

```python
sdrs_rule_enforcement_automation_level: str
```

- *Type:* str

---

##### `sdrs_space_balance_automation_level`<sup>Required</sup> <a name="sdrs_space_balance_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevel"></a>

```python
sdrs_space_balance_automation_level: str
```

- *Type:* str

---

##### `sdrs_space_utilization_threshold`<sup>Required</sup> <a name="sdrs_space_utilization_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThreshold"></a>

```python
sdrs_space_utilization_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdrs_vm_evacuation_automation_level`<sup>Required</sup> <a name="sdrs_vm_evacuation_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevel"></a>

```python
sdrs_vm_evacuation_automation_level: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatastoreClusterConfig <a name="DatastoreClusterConfig" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import datastore_cluster

datastoreCluster.DatastoreClusterConfig(
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
  folder: str = None,
  id: str = None,
  sdrs_advanced_options: typing.Mapping[str] = None,
  sdrs_automation_level: str = None,
  sdrs_default_intra_vm_affinity: typing.Union[bool, IResolvable] = None,
  sdrs_enabled: typing.Union[bool, IResolvable] = None,
  sdrs_free_space_threshold: typing.Union[int, float] = None,
  sdrs_free_space_threshold_mode: str = None,
  sdrs_free_space_utilization_difference: typing.Union[int, float] = None,
  sdrs_io_balance_automation_level: str = None,
  sdrs_io_latency_threshold: typing.Union[int, float] = None,
  sdrs_io_load_balance_enabled: typing.Union[bool, IResolvable] = None,
  sdrs_io_load_imbalance_threshold: typing.Union[int, float] = None,
  sdrs_io_reservable_iops_threshold: typing.Union[int, float] = None,
  sdrs_io_reservable_percent_threshold: typing.Union[int, float] = None,
  sdrs_io_reservable_threshold_mode: str = None,
  sdrs_load_balance_interval: typing.Union[int, float] = None,
  sdrs_policy_enforcement_automation_level: str = None,
  sdrs_rule_enforcement_automation_level: str = None,
  sdrs_space_balance_automation_level: str = None,
  sdrs_space_utilization_threshold: typing.Union[int, float] = None,
  sdrs_vm_evacuation_automation_level: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | The managed object ID of the datacenter to put the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.name">name</a></code> | <code>str</code> | Name for the new storage pod. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.folder">folder</a></code> | <code>str</code> | The name of the folder to locate the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#id DatastoreCluster#id}. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAdvancedOptions">sdrs_advanced_options</a></code> | <code>typing.Mapping[str]</code> | Advanced configuration options for storage DRS. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAutomationLevel">sdrs_automation_level</a></code> | <code>str</code> | The default automation level for all virtual machines in this storage cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsDefaultIntraVmAffinity">sdrs_default_intra_vm_affinity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsEnabled">sdrs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable storage DRS for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThreshold">sdrs_free_space_threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThresholdMode">sdrs_free_space_threshold_mode</a></code> | <code>str</code> | The free space threshold to use. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceUtilizationDifference">sdrs_free_space_utilization_difference</a></code> | <code>typing.Union[int, float]</code> | The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoBalanceAutomationLevel">sdrs_io_balance_automation_level</a></code> | <code>str</code> | Overrides the default automation settings when correcting I/O load imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLatencyThreshold">sdrs_io_latency_threshold</a></code> | <code>typing.Union[int, float]</code> | The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadBalanceEnabled">sdrs_io_load_balance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable I/O load balancing for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadImbalanceThreshold">sdrs_io_load_imbalance_threshold</a></code> | <code>typing.Union[int, float]</code> | The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableIopsThreshold">sdrs_io_reservable_iops_threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservablePercentThreshold">sdrs_io_reservable_percent_threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableThresholdMode">sdrs_io_reservable_threshold_mode</a></code> | <code>str</code> | The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsLoadBalanceInterval">sdrs_load_balance_interval</a></code> | <code>typing.Union[int, float]</code> | The storage DRS poll interval, in minutes. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsPolicyEnforcementAutomationLevel">sdrs_policy_enforcement_automation_level</a></code> | <code>str</code> | Overrides the default automation settings when correcting storage and VM policy violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsRuleEnforcementAutomationLevel">sdrs_rule_enforcement_automation_level</a></code> | <code>str</code> | Overrides the default automation settings when correcting affinity rule violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceBalanceAutomationLevel">sdrs_space_balance_automation_level</a></code> | <code>str</code> | Overrides the default automation settings when correcting disk space imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceUtilizationThreshold">sdrs_space_utilization_threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsVmEvacuationAutomationLevel">sdrs_vm_evacuation_automation_level</a></code> | <code>str</code> | Overrides the default automation settings when generating recommendations for datastore evacuation. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

The managed object ID of the datacenter to put the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#datacenter_id DatastoreCluster#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name for the new storage pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#name DatastoreCluster#name}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#custom_attributes DatastoreCluster#custom_attributes}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The name of the folder to locate the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#folder DatastoreCluster#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#id DatastoreCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sdrs_advanced_options`<sup>Optional</sup> <a name="sdrs_advanced_options" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAdvancedOptions"></a>

```python
sdrs_advanced_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Advanced configuration options for storage DRS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_advanced_options DatastoreCluster#sdrs_advanced_options}

---

##### `sdrs_automation_level`<sup>Optional</sup> <a name="sdrs_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAutomationLevel"></a>

```python
sdrs_automation_level: str
```

- *Type:* str

The default automation level for all virtual machines in this storage cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_automation_level DatastoreCluster#sdrs_automation_level}

---

##### `sdrs_default_intra_vm_affinity`<sup>Optional</sup> <a name="sdrs_default_intra_vm_affinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsDefaultIntraVmAffinity"></a>

```python
sdrs_default_intra_vm_affinity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_default_intra_vm_affinity DatastoreCluster#sdrs_default_intra_vm_affinity}

---

##### `sdrs_enabled`<sup>Optional</sup> <a name="sdrs_enabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsEnabled"></a>

```python
sdrs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable storage DRS for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_enabled DatastoreCluster#sdrs_enabled}

---

##### `sdrs_free_space_threshold`<sup>Optional</sup> <a name="sdrs_free_space_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThreshold"></a>

```python
sdrs_free_space_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_free_space_threshold DatastoreCluster#sdrs_free_space_threshold}

---

##### `sdrs_free_space_threshold_mode`<sup>Optional</sup> <a name="sdrs_free_space_threshold_mode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThresholdMode"></a>

```python
sdrs_free_space_threshold_mode: str
```

- *Type:* str

The free space threshold to use.

When set to utilization, drs_space_utilization_threshold is used, and when set to freeSpace, drs_free_space_threshold is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_free_space_threshold_mode DatastoreCluster#sdrs_free_space_threshold_mode}

---

##### `sdrs_free_space_utilization_difference`<sup>Optional</sup> <a name="sdrs_free_space_utilization_difference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceUtilizationDifference"></a>

```python
sdrs_free_space_utilization_difference: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_free_space_utilization_difference DatastoreCluster#sdrs_free_space_utilization_difference}

---

##### `sdrs_io_balance_automation_level`<sup>Optional</sup> <a name="sdrs_io_balance_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoBalanceAutomationLevel"></a>

```python
sdrs_io_balance_automation_level: str
```

- *Type:* str

Overrides the default automation settings when correcting I/O load imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_balance_automation_level DatastoreCluster#sdrs_io_balance_automation_level}

---

##### `sdrs_io_latency_threshold`<sup>Optional</sup> <a name="sdrs_io_latency_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLatencyThreshold"></a>

```python
sdrs_io_latency_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_latency_threshold DatastoreCluster#sdrs_io_latency_threshold}

---

##### `sdrs_io_load_balance_enabled`<sup>Optional</sup> <a name="sdrs_io_load_balance_enabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadBalanceEnabled"></a>

```python
sdrs_io_load_balance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable I/O load balancing for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_load_balance_enabled DatastoreCluster#sdrs_io_load_balance_enabled}

---

##### `sdrs_io_load_imbalance_threshold`<sup>Optional</sup> <a name="sdrs_io_load_imbalance_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadImbalanceThreshold"></a>

```python
sdrs_io_load_imbalance_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_load_imbalance_threshold DatastoreCluster#sdrs_io_load_imbalance_threshold}

---

##### `sdrs_io_reservable_iops_threshold`<sup>Optional</sup> <a name="sdrs_io_reservable_iops_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableIopsThreshold"></a>

```python
sdrs_io_reservable_iops_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_reservable_iops_threshold DatastoreCluster#sdrs_io_reservable_iops_threshold}

---

##### `sdrs_io_reservable_percent_threshold`<sup>Optional</sup> <a name="sdrs_io_reservable_percent_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservablePercentThreshold"></a>

```python
sdrs_io_reservable_percent_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_reservable_percent_threshold DatastoreCluster#sdrs_io_reservable_percent_threshold}

---

##### `sdrs_io_reservable_threshold_mode`<sup>Optional</sup> <a name="sdrs_io_reservable_threshold_mode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableThresholdMode"></a>

```python
sdrs_io_reservable_threshold_mode: str
```

- *Type:* str

The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_io_reservable_threshold_mode DatastoreCluster#sdrs_io_reservable_threshold_mode}

---

##### `sdrs_load_balance_interval`<sup>Optional</sup> <a name="sdrs_load_balance_interval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsLoadBalanceInterval"></a>

```python
sdrs_load_balance_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The storage DRS poll interval, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_load_balance_interval DatastoreCluster#sdrs_load_balance_interval}

---

##### `sdrs_policy_enforcement_automation_level`<sup>Optional</sup> <a name="sdrs_policy_enforcement_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsPolicyEnforcementAutomationLevel"></a>

```python
sdrs_policy_enforcement_automation_level: str
```

- *Type:* str

Overrides the default automation settings when correcting storage and VM policy violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_policy_enforcement_automation_level DatastoreCluster#sdrs_policy_enforcement_automation_level}

---

##### `sdrs_rule_enforcement_automation_level`<sup>Optional</sup> <a name="sdrs_rule_enforcement_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsRuleEnforcementAutomationLevel"></a>

```python
sdrs_rule_enforcement_automation_level: str
```

- *Type:* str

Overrides the default automation settings when correcting affinity rule violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_rule_enforcement_automation_level DatastoreCluster#sdrs_rule_enforcement_automation_level}

---

##### `sdrs_space_balance_automation_level`<sup>Optional</sup> <a name="sdrs_space_balance_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceBalanceAutomationLevel"></a>

```python
sdrs_space_balance_automation_level: str
```

- *Type:* str

Overrides the default automation settings when correcting disk space imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_space_balance_automation_level DatastoreCluster#sdrs_space_balance_automation_level}

---

##### `sdrs_space_utilization_threshold`<sup>Optional</sup> <a name="sdrs_space_utilization_threshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceUtilizationThreshold"></a>

```python
sdrs_space_utilization_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_space_utilization_threshold DatastoreCluster#sdrs_space_utilization_threshold}

---

##### `sdrs_vm_evacuation_automation_level`<sup>Optional</sup> <a name="sdrs_vm_evacuation_automation_level" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsVmEvacuationAutomationLevel"></a>

```python
sdrs_vm_evacuation_automation_level: str
```

- *Type:* str

Overrides the default automation settings when generating recommendations for datastore evacuation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#sdrs_vm_evacuation_automation_level DatastoreCluster#sdrs_vm_evacuation_automation_level}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/datastore_cluster#tags DatastoreCluster#tags}

---



