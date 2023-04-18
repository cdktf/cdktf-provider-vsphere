# `vsphere_datastore_cluster`

Refer to the Terraform Registory for docs: [`vsphere_datastore_cluster`](https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster).

# `datastoreCluster` Submodule <a name="`datastoreCluster` Submodule" id="@cdktf/provider-vsphere.datastoreCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastoreCluster <a name="DatastoreCluster" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster vsphere_datastore_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.datastore_cluster.DatastoreCluster;

DatastoreCluster.Builder.create(Construct scope, java.lang.String id)
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
//  .folder(java.lang.String)
//  .id(java.lang.String)
//  .sdrsAdvancedOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .sdrsAutomationLevel(java.lang.String)
//  .sdrsDefaultIntraVmAffinity(java.lang.Boolean)
//  .sdrsDefaultIntraVmAffinity(IResolvable)
//  .sdrsEnabled(java.lang.Boolean)
//  .sdrsEnabled(IResolvable)
//  .sdrsFreeSpaceThreshold(java.lang.Number)
//  .sdrsFreeSpaceThresholdMode(java.lang.String)
//  .sdrsFreeSpaceUtilizationDifference(java.lang.Number)
//  .sdrsIoBalanceAutomationLevel(java.lang.String)
//  .sdrsIoLatencyThreshold(java.lang.Number)
//  .sdrsIoLoadBalanceEnabled(java.lang.Boolean)
//  .sdrsIoLoadBalanceEnabled(IResolvable)
//  .sdrsIoLoadImbalanceThreshold(java.lang.Number)
//  .sdrsIoReservableIopsThreshold(java.lang.Number)
//  .sdrsIoReservablePercentThreshold(java.lang.Number)
//  .sdrsIoReservableThresholdMode(java.lang.String)
//  .sdrsLoadBalanceInterval(java.lang.Number)
//  .sdrsPolicyEnforcementAutomationLevel(java.lang.String)
//  .sdrsRuleEnforcementAutomationLevel(java.lang.String)
//  .sdrsSpaceBalanceAutomationLevel(java.lang.String)
//  .sdrsSpaceUtilizationThreshold(java.lang.Number)
//  .sdrsVmEvacuationAutomationLevel(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datacenter to put the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name for the new storage pod. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | The name of the folder to locate the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#id DatastoreCluster#id}. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsAdvancedOptions">sdrsAdvancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Advanced configuration options for storage DRS. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsAutomationLevel">sdrsAutomationLevel</a></code> | <code>java.lang.String</code> | The default automation level for all virtual machines in this storage cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsDefaultIntraVmAffinity">sdrsDefaultIntraVmAffinity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsEnabled">sdrsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable storage DRS for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsFreeSpaceThreshold">sdrsFreeSpaceThreshold</a></code> | <code>java.lang.Number</code> | The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsFreeSpaceThresholdMode">sdrsFreeSpaceThresholdMode</a></code> | <code>java.lang.String</code> | The free space threshold to use. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsFreeSpaceUtilizationDifference">sdrsFreeSpaceUtilizationDifference</a></code> | <code>java.lang.Number</code> | The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoBalanceAutomationLevel">sdrsIoBalanceAutomationLevel</a></code> | <code>java.lang.String</code> | Overrides the default automation settings when correcting I/O load imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoLatencyThreshold">sdrsIoLatencyThreshold</a></code> | <code>java.lang.Number</code> | The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoLoadBalanceEnabled">sdrsIoLoadBalanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable I/O load balancing for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoLoadImbalanceThreshold">sdrsIoLoadImbalanceThreshold</a></code> | <code>java.lang.Number</code> | The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoReservableIopsThreshold">sdrsIoReservableIopsThreshold</a></code> | <code>java.lang.Number</code> | The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoReservablePercentThreshold">sdrsIoReservablePercentThreshold</a></code> | <code>java.lang.Number</code> | The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoReservableThresholdMode">sdrsIoReservableThresholdMode</a></code> | <code>java.lang.String</code> | The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsLoadBalanceInterval">sdrsLoadBalanceInterval</a></code> | <code>java.lang.Number</code> | The storage DRS poll interval, in minutes. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsPolicyEnforcementAutomationLevel">sdrsPolicyEnforcementAutomationLevel</a></code> | <code>java.lang.String</code> | Overrides the default automation settings when correcting storage and VM policy violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsRuleEnforcementAutomationLevel">sdrsRuleEnforcementAutomationLevel</a></code> | <code>java.lang.String</code> | Overrides the default automation settings when correcting affinity rule violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsSpaceBalanceAutomationLevel">sdrsSpaceBalanceAutomationLevel</a></code> | <code>java.lang.String</code> | Overrides the default automation settings when correcting disk space imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsSpaceUtilizationThreshold">sdrsSpaceUtilizationThreshold</a></code> | <code>java.lang.Number</code> | The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsVmEvacuationAutomationLevel">sdrsVmEvacuationAutomationLevel</a></code> | <code>java.lang.String</code> | Overrides the default automation settings when generating recommendations for datastore evacuation. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

The managed object ID of the datacenter to put the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#datacenter_id DatastoreCluster#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name for the new storage pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#name DatastoreCluster#name}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.customAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#custom_attributes DatastoreCluster#custom_attributes}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

The name of the folder to locate the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#folder DatastoreCluster#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#id DatastoreCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sdrsAdvancedOptions`<sup>Optional</sup> <a name="sdrsAdvancedOptions" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsAdvancedOptions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Advanced configuration options for storage DRS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_advanced_options DatastoreCluster#sdrs_advanced_options}

---

##### `sdrsAutomationLevel`<sup>Optional</sup> <a name="sdrsAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsAutomationLevel"></a>

- *Type:* java.lang.String

The default automation level for all virtual machines in this storage cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_automation_level DatastoreCluster#sdrs_automation_level}

---

##### `sdrsDefaultIntraVmAffinity`<sup>Optional</sup> <a name="sdrsDefaultIntraVmAffinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsDefaultIntraVmAffinity"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_default_intra_vm_affinity DatastoreCluster#sdrs_default_intra_vm_affinity}

---

##### `sdrsEnabled`<sup>Optional</sup> <a name="sdrsEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable storage DRS for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_enabled DatastoreCluster#sdrs_enabled}

---

##### `sdrsFreeSpaceThreshold`<sup>Optional</sup> <a name="sdrsFreeSpaceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsFreeSpaceThreshold"></a>

- *Type:* java.lang.Number

The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_free_space_threshold DatastoreCluster#sdrs_free_space_threshold}

---

##### `sdrsFreeSpaceThresholdMode`<sup>Optional</sup> <a name="sdrsFreeSpaceThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsFreeSpaceThresholdMode"></a>

- *Type:* java.lang.String

The free space threshold to use.

When set to utilization, drs_space_utilization_threshold is used, and when set to freeSpace, drs_free_space_threshold is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_free_space_threshold_mode DatastoreCluster#sdrs_free_space_threshold_mode}

---

##### `sdrsFreeSpaceUtilizationDifference`<sup>Optional</sup> <a name="sdrsFreeSpaceUtilizationDifference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsFreeSpaceUtilizationDifference"></a>

- *Type:* java.lang.Number

The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_free_space_utilization_difference DatastoreCluster#sdrs_free_space_utilization_difference}

---

##### `sdrsIoBalanceAutomationLevel`<sup>Optional</sup> <a name="sdrsIoBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoBalanceAutomationLevel"></a>

- *Type:* java.lang.String

Overrides the default automation settings when correcting I/O load imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_balance_automation_level DatastoreCluster#sdrs_io_balance_automation_level}

---

##### `sdrsIoLatencyThreshold`<sup>Optional</sup> <a name="sdrsIoLatencyThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoLatencyThreshold"></a>

- *Type:* java.lang.Number

The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_latency_threshold DatastoreCluster#sdrs_io_latency_threshold}

---

##### `sdrsIoLoadBalanceEnabled`<sup>Optional</sup> <a name="sdrsIoLoadBalanceEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoLoadBalanceEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable I/O load balancing for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_load_balance_enabled DatastoreCluster#sdrs_io_load_balance_enabled}

---

##### `sdrsIoLoadImbalanceThreshold`<sup>Optional</sup> <a name="sdrsIoLoadImbalanceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoLoadImbalanceThreshold"></a>

- *Type:* java.lang.Number

The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_load_imbalance_threshold DatastoreCluster#sdrs_io_load_imbalance_threshold}

---

##### `sdrsIoReservableIopsThreshold`<sup>Optional</sup> <a name="sdrsIoReservableIopsThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoReservableIopsThreshold"></a>

- *Type:* java.lang.Number

The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_reservable_iops_threshold DatastoreCluster#sdrs_io_reservable_iops_threshold}

---

##### `sdrsIoReservablePercentThreshold`<sup>Optional</sup> <a name="sdrsIoReservablePercentThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoReservablePercentThreshold"></a>

- *Type:* java.lang.Number

The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_reservable_percent_threshold DatastoreCluster#sdrs_io_reservable_percent_threshold}

---

##### `sdrsIoReservableThresholdMode`<sup>Optional</sup> <a name="sdrsIoReservableThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsIoReservableThresholdMode"></a>

- *Type:* java.lang.String

The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_reservable_threshold_mode DatastoreCluster#sdrs_io_reservable_threshold_mode}

---

##### `sdrsLoadBalanceInterval`<sup>Optional</sup> <a name="sdrsLoadBalanceInterval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsLoadBalanceInterval"></a>

- *Type:* java.lang.Number

The storage DRS poll interval, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_load_balance_interval DatastoreCluster#sdrs_load_balance_interval}

---

##### `sdrsPolicyEnforcementAutomationLevel`<sup>Optional</sup> <a name="sdrsPolicyEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsPolicyEnforcementAutomationLevel"></a>

- *Type:* java.lang.String

Overrides the default automation settings when correcting storage and VM policy violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_policy_enforcement_automation_level DatastoreCluster#sdrs_policy_enforcement_automation_level}

---

##### `sdrsRuleEnforcementAutomationLevel`<sup>Optional</sup> <a name="sdrsRuleEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsRuleEnforcementAutomationLevel"></a>

- *Type:* java.lang.String

Overrides the default automation settings when correcting affinity rule violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_rule_enforcement_automation_level DatastoreCluster#sdrs_rule_enforcement_automation_level}

---

##### `sdrsSpaceBalanceAutomationLevel`<sup>Optional</sup> <a name="sdrsSpaceBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsSpaceBalanceAutomationLevel"></a>

- *Type:* java.lang.String

Overrides the default automation settings when correcting disk space imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_space_balance_automation_level DatastoreCluster#sdrs_space_balance_automation_level}

---

##### `sdrsSpaceUtilizationThreshold`<sup>Optional</sup> <a name="sdrsSpaceUtilizationThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsSpaceUtilizationThreshold"></a>

- *Type:* java.lang.Number

The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_space_utilization_threshold DatastoreCluster#sdrs_space_utilization_threshold}

---

##### `sdrsVmEvacuationAutomationLevel`<sup>Optional</sup> <a name="sdrsVmEvacuationAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.sdrsVmEvacuationAutomationLevel"></a>

- *Type:* java.lang.String

Overrides the default automation settings when generating recommendations for datastore evacuation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_vm_evacuation_automation_level DatastoreCluster#sdrs_vm_evacuation_automation_level}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#tags DatastoreCluster#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAdvancedOptions">resetSdrsAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAutomationLevel">resetSdrsAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsDefaultIntraVmAffinity">resetSdrsDefaultIntraVmAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsEnabled">resetSdrsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThreshold">resetSdrsFreeSpaceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThresholdMode">resetSdrsFreeSpaceThresholdMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceUtilizationDifference">resetSdrsFreeSpaceUtilizationDifference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoBalanceAutomationLevel">resetSdrsIoBalanceAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLatencyThreshold">resetSdrsIoLatencyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadBalanceEnabled">resetSdrsIoLoadBalanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadImbalanceThreshold">resetSdrsIoLoadImbalanceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableIopsThreshold">resetSdrsIoReservableIopsThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservablePercentThreshold">resetSdrsIoReservablePercentThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableThresholdMode">resetSdrsIoReservableThresholdMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsLoadBalanceInterval">resetSdrsLoadBalanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsPolicyEnforcementAutomationLevel">resetSdrsPolicyEnforcementAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsRuleEnforcementAutomationLevel">resetSdrsRuleEnforcementAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceBalanceAutomationLevel">resetSdrsSpaceBalanceAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceUtilizationThreshold">resetSdrsSpaceUtilizationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsVmEvacuationAutomationLevel">resetSdrsVmEvacuationAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetFolder"></a>

```java
public void resetFolder()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetId"></a>

```java
public void resetId()
```

##### `resetSdrsAdvancedOptions` <a name="resetSdrsAdvancedOptions" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAdvancedOptions"></a>

```java
public void resetSdrsAdvancedOptions()
```

##### `resetSdrsAutomationLevel` <a name="resetSdrsAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAutomationLevel"></a>

```java
public void resetSdrsAutomationLevel()
```

##### `resetSdrsDefaultIntraVmAffinity` <a name="resetSdrsDefaultIntraVmAffinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsDefaultIntraVmAffinity"></a>

```java
public void resetSdrsDefaultIntraVmAffinity()
```

##### `resetSdrsEnabled` <a name="resetSdrsEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsEnabled"></a>

```java
public void resetSdrsEnabled()
```

##### `resetSdrsFreeSpaceThreshold` <a name="resetSdrsFreeSpaceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThreshold"></a>

```java
public void resetSdrsFreeSpaceThreshold()
```

##### `resetSdrsFreeSpaceThresholdMode` <a name="resetSdrsFreeSpaceThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThresholdMode"></a>

```java
public void resetSdrsFreeSpaceThresholdMode()
```

##### `resetSdrsFreeSpaceUtilizationDifference` <a name="resetSdrsFreeSpaceUtilizationDifference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceUtilizationDifference"></a>

```java
public void resetSdrsFreeSpaceUtilizationDifference()
```

##### `resetSdrsIoBalanceAutomationLevel` <a name="resetSdrsIoBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoBalanceAutomationLevel"></a>

```java
public void resetSdrsIoBalanceAutomationLevel()
```

##### `resetSdrsIoLatencyThreshold` <a name="resetSdrsIoLatencyThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLatencyThreshold"></a>

```java
public void resetSdrsIoLatencyThreshold()
```

##### `resetSdrsIoLoadBalanceEnabled` <a name="resetSdrsIoLoadBalanceEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadBalanceEnabled"></a>

```java
public void resetSdrsIoLoadBalanceEnabled()
```

##### `resetSdrsIoLoadImbalanceThreshold` <a name="resetSdrsIoLoadImbalanceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadImbalanceThreshold"></a>

```java
public void resetSdrsIoLoadImbalanceThreshold()
```

##### `resetSdrsIoReservableIopsThreshold` <a name="resetSdrsIoReservableIopsThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableIopsThreshold"></a>

```java
public void resetSdrsIoReservableIopsThreshold()
```

##### `resetSdrsIoReservablePercentThreshold` <a name="resetSdrsIoReservablePercentThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservablePercentThreshold"></a>

```java
public void resetSdrsIoReservablePercentThreshold()
```

##### `resetSdrsIoReservableThresholdMode` <a name="resetSdrsIoReservableThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableThresholdMode"></a>

```java
public void resetSdrsIoReservableThresholdMode()
```

##### `resetSdrsLoadBalanceInterval` <a name="resetSdrsLoadBalanceInterval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsLoadBalanceInterval"></a>

```java
public void resetSdrsLoadBalanceInterval()
```

##### `resetSdrsPolicyEnforcementAutomationLevel` <a name="resetSdrsPolicyEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsPolicyEnforcementAutomationLevel"></a>

```java
public void resetSdrsPolicyEnforcementAutomationLevel()
```

##### `resetSdrsRuleEnforcementAutomationLevel` <a name="resetSdrsRuleEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsRuleEnforcementAutomationLevel"></a>

```java
public void resetSdrsRuleEnforcementAutomationLevel()
```

##### `resetSdrsSpaceBalanceAutomationLevel` <a name="resetSdrsSpaceBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceBalanceAutomationLevel"></a>

```java
public void resetSdrsSpaceBalanceAutomationLevel()
```

##### `resetSdrsSpaceUtilizationThreshold` <a name="resetSdrsSpaceUtilizationThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceUtilizationThreshold"></a>

```java
public void resetSdrsSpaceUtilizationThreshold()
```

##### `resetSdrsVmEvacuationAutomationLevel` <a name="resetSdrsVmEvacuationAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsVmEvacuationAutomationLevel"></a>

```java
public void resetSdrsVmEvacuationAutomationLevel()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.datastore_cluster.DatastoreCluster;

DatastoreCluster.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.datastore_cluster.DatastoreCluster;

DatastoreCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.datastore_cluster.DatastoreCluster;

DatastoreCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributesInput">customAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptionsInput">sdrsAdvancedOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevelInput">sdrsAutomationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinityInput">sdrsDefaultIntraVmAffinityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabledInput">sdrsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdInput">sdrsFreeSpaceThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdModeInput">sdrsFreeSpaceThresholdModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifferenceInput">sdrsFreeSpaceUtilizationDifferenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevelInput">sdrsIoBalanceAutomationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThresholdInput">sdrsIoLatencyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabledInput">sdrsIoLoadBalanceEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThresholdInput">sdrsIoLoadImbalanceThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThresholdInput">sdrsIoReservableIopsThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThresholdInput">sdrsIoReservablePercentThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdModeInput">sdrsIoReservableThresholdModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceIntervalInput">sdrsLoadBalanceIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevelInput">sdrsPolicyEnforcementAutomationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevelInput">sdrsRuleEnforcementAutomationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevelInput">sdrsSpaceBalanceAutomationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThresholdInput">sdrsSpaceUtilizationThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevelInput">sdrsVmEvacuationAutomationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptions">sdrsAdvancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevel">sdrsAutomationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinity">sdrsDefaultIntraVmAffinity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabled">sdrsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThreshold">sdrsFreeSpaceThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdMode">sdrsFreeSpaceThresholdMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifference">sdrsFreeSpaceUtilizationDifference</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevel">sdrsIoBalanceAutomationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThreshold">sdrsIoLatencyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabled">sdrsIoLoadBalanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThreshold">sdrsIoLoadImbalanceThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThreshold">sdrsIoReservableIopsThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThreshold">sdrsIoReservablePercentThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdMode">sdrsIoReservableThresholdMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceInterval">sdrsLoadBalanceInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevel">sdrsPolicyEnforcementAutomationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevel">sdrsRuleEnforcementAutomationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevel">sdrsSpaceBalanceAutomationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThreshold">sdrsSpaceUtilizationThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevel">sdrsVmEvacuationAutomationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sdrsAdvancedOptionsInput`<sup>Optional</sup> <a name="sdrsAdvancedOptionsInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSdrsAdvancedOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sdrsAutomationLevelInput`<sup>Optional</sup> <a name="sdrsAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevelInput"></a>

```java
public java.lang.String getSdrsAutomationLevelInput();
```

- *Type:* java.lang.String

---

##### `sdrsDefaultIntraVmAffinityInput`<sup>Optional</sup> <a name="sdrsDefaultIntraVmAffinityInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinityInput"></a>

```java
public java.lang.Object getSdrsDefaultIntraVmAffinityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sdrsEnabledInput`<sup>Optional</sup> <a name="sdrsEnabledInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabledInput"></a>

```java
public java.lang.Object getSdrsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sdrsFreeSpaceThresholdInput`<sup>Optional</sup> <a name="sdrsFreeSpaceThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdInput"></a>

```java
public java.lang.Number getSdrsFreeSpaceThresholdInput();
```

- *Type:* java.lang.Number

---

##### `sdrsFreeSpaceThresholdModeInput`<sup>Optional</sup> <a name="sdrsFreeSpaceThresholdModeInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdModeInput"></a>

```java
public java.lang.String getSdrsFreeSpaceThresholdModeInput();
```

- *Type:* java.lang.String

---

##### `sdrsFreeSpaceUtilizationDifferenceInput`<sup>Optional</sup> <a name="sdrsFreeSpaceUtilizationDifferenceInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifferenceInput"></a>

```java
public java.lang.Number getSdrsFreeSpaceUtilizationDifferenceInput();
```

- *Type:* java.lang.Number

---

##### `sdrsIoBalanceAutomationLevelInput`<sup>Optional</sup> <a name="sdrsIoBalanceAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevelInput"></a>

```java
public java.lang.String getSdrsIoBalanceAutomationLevelInput();
```

- *Type:* java.lang.String

---

##### `sdrsIoLatencyThresholdInput`<sup>Optional</sup> <a name="sdrsIoLatencyThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThresholdInput"></a>

```java
public java.lang.Number getSdrsIoLatencyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `sdrsIoLoadBalanceEnabledInput`<sup>Optional</sup> <a name="sdrsIoLoadBalanceEnabledInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabledInput"></a>

```java
public java.lang.Object getSdrsIoLoadBalanceEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sdrsIoLoadImbalanceThresholdInput`<sup>Optional</sup> <a name="sdrsIoLoadImbalanceThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThresholdInput"></a>

```java
public java.lang.Number getSdrsIoLoadImbalanceThresholdInput();
```

- *Type:* java.lang.Number

---

##### `sdrsIoReservableIopsThresholdInput`<sup>Optional</sup> <a name="sdrsIoReservableIopsThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThresholdInput"></a>

```java
public java.lang.Number getSdrsIoReservableIopsThresholdInput();
```

- *Type:* java.lang.Number

---

##### `sdrsIoReservablePercentThresholdInput`<sup>Optional</sup> <a name="sdrsIoReservablePercentThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThresholdInput"></a>

```java
public java.lang.Number getSdrsIoReservablePercentThresholdInput();
```

- *Type:* java.lang.Number

---

##### `sdrsIoReservableThresholdModeInput`<sup>Optional</sup> <a name="sdrsIoReservableThresholdModeInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdModeInput"></a>

```java
public java.lang.String getSdrsIoReservableThresholdModeInput();
```

- *Type:* java.lang.String

---

##### `sdrsLoadBalanceIntervalInput`<sup>Optional</sup> <a name="sdrsLoadBalanceIntervalInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceIntervalInput"></a>

```java
public java.lang.Number getSdrsLoadBalanceIntervalInput();
```

- *Type:* java.lang.Number

---

##### `sdrsPolicyEnforcementAutomationLevelInput`<sup>Optional</sup> <a name="sdrsPolicyEnforcementAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevelInput"></a>

```java
public java.lang.String getSdrsPolicyEnforcementAutomationLevelInput();
```

- *Type:* java.lang.String

---

##### `sdrsRuleEnforcementAutomationLevelInput`<sup>Optional</sup> <a name="sdrsRuleEnforcementAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevelInput"></a>

```java
public java.lang.String getSdrsRuleEnforcementAutomationLevelInput();
```

- *Type:* java.lang.String

---

##### `sdrsSpaceBalanceAutomationLevelInput`<sup>Optional</sup> <a name="sdrsSpaceBalanceAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevelInput"></a>

```java
public java.lang.String getSdrsSpaceBalanceAutomationLevelInput();
```

- *Type:* java.lang.String

---

##### `sdrsSpaceUtilizationThresholdInput`<sup>Optional</sup> <a name="sdrsSpaceUtilizationThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThresholdInput"></a>

```java
public java.lang.Number getSdrsSpaceUtilizationThresholdInput();
```

- *Type:* java.lang.Number

---

##### `sdrsVmEvacuationAutomationLevelInput`<sup>Optional</sup> <a name="sdrsVmEvacuationAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevelInput"></a>

```java
public java.lang.String getSdrsVmEvacuationAutomationLevelInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sdrsAdvancedOptions`<sup>Required</sup> <a name="sdrsAdvancedOptions" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSdrsAdvancedOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sdrsAutomationLevel`<sup>Required</sup> <a name="sdrsAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevel"></a>

```java
public java.lang.String getSdrsAutomationLevel();
```

- *Type:* java.lang.String

---

##### `sdrsDefaultIntraVmAffinity`<sup>Required</sup> <a name="sdrsDefaultIntraVmAffinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinity"></a>

```java
public java.lang.Object getSdrsDefaultIntraVmAffinity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sdrsEnabled`<sup>Required</sup> <a name="sdrsEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabled"></a>

```java
public java.lang.Object getSdrsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sdrsFreeSpaceThreshold`<sup>Required</sup> <a name="sdrsFreeSpaceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThreshold"></a>

```java
public java.lang.Number getSdrsFreeSpaceThreshold();
```

- *Type:* java.lang.Number

---

##### `sdrsFreeSpaceThresholdMode`<sup>Required</sup> <a name="sdrsFreeSpaceThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdMode"></a>

```java
public java.lang.String getSdrsFreeSpaceThresholdMode();
```

- *Type:* java.lang.String

---

##### `sdrsFreeSpaceUtilizationDifference`<sup>Required</sup> <a name="sdrsFreeSpaceUtilizationDifference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifference"></a>

```java
public java.lang.Number getSdrsFreeSpaceUtilizationDifference();
```

- *Type:* java.lang.Number

---

##### `sdrsIoBalanceAutomationLevel`<sup>Required</sup> <a name="sdrsIoBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevel"></a>

```java
public java.lang.String getSdrsIoBalanceAutomationLevel();
```

- *Type:* java.lang.String

---

##### `sdrsIoLatencyThreshold`<sup>Required</sup> <a name="sdrsIoLatencyThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThreshold"></a>

```java
public java.lang.Number getSdrsIoLatencyThreshold();
```

- *Type:* java.lang.Number

---

##### `sdrsIoLoadBalanceEnabled`<sup>Required</sup> <a name="sdrsIoLoadBalanceEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabled"></a>

```java
public java.lang.Object getSdrsIoLoadBalanceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sdrsIoLoadImbalanceThreshold`<sup>Required</sup> <a name="sdrsIoLoadImbalanceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThreshold"></a>

```java
public java.lang.Number getSdrsIoLoadImbalanceThreshold();
```

- *Type:* java.lang.Number

---

##### `sdrsIoReservableIopsThreshold`<sup>Required</sup> <a name="sdrsIoReservableIopsThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThreshold"></a>

```java
public java.lang.Number getSdrsIoReservableIopsThreshold();
```

- *Type:* java.lang.Number

---

##### `sdrsIoReservablePercentThreshold`<sup>Required</sup> <a name="sdrsIoReservablePercentThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThreshold"></a>

```java
public java.lang.Number getSdrsIoReservablePercentThreshold();
```

- *Type:* java.lang.Number

---

##### `sdrsIoReservableThresholdMode`<sup>Required</sup> <a name="sdrsIoReservableThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdMode"></a>

```java
public java.lang.String getSdrsIoReservableThresholdMode();
```

- *Type:* java.lang.String

---

##### `sdrsLoadBalanceInterval`<sup>Required</sup> <a name="sdrsLoadBalanceInterval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceInterval"></a>

```java
public java.lang.Number getSdrsLoadBalanceInterval();
```

- *Type:* java.lang.Number

---

##### `sdrsPolicyEnforcementAutomationLevel`<sup>Required</sup> <a name="sdrsPolicyEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevel"></a>

```java
public java.lang.String getSdrsPolicyEnforcementAutomationLevel();
```

- *Type:* java.lang.String

---

##### `sdrsRuleEnforcementAutomationLevel`<sup>Required</sup> <a name="sdrsRuleEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevel"></a>

```java
public java.lang.String getSdrsRuleEnforcementAutomationLevel();
```

- *Type:* java.lang.String

---

##### `sdrsSpaceBalanceAutomationLevel`<sup>Required</sup> <a name="sdrsSpaceBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevel"></a>

```java
public java.lang.String getSdrsSpaceBalanceAutomationLevel();
```

- *Type:* java.lang.String

---

##### `sdrsSpaceUtilizationThreshold`<sup>Required</sup> <a name="sdrsSpaceUtilizationThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThreshold"></a>

```java
public java.lang.Number getSdrsSpaceUtilizationThreshold();
```

- *Type:* java.lang.Number

---

##### `sdrsVmEvacuationAutomationLevel`<sup>Required</sup> <a name="sdrsVmEvacuationAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevel"></a>

```java
public java.lang.String getSdrsVmEvacuationAutomationLevel();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatastoreClusterConfig <a name="DatastoreClusterConfig" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.datastore_cluster.DatastoreClusterConfig;

DatastoreClusterConfig.builder()
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
//  .folder(java.lang.String)
//  .id(java.lang.String)
//  .sdrsAdvancedOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .sdrsAutomationLevel(java.lang.String)
//  .sdrsDefaultIntraVmAffinity(java.lang.Boolean)
//  .sdrsDefaultIntraVmAffinity(IResolvable)
//  .sdrsEnabled(java.lang.Boolean)
//  .sdrsEnabled(IResolvable)
//  .sdrsFreeSpaceThreshold(java.lang.Number)
//  .sdrsFreeSpaceThresholdMode(java.lang.String)
//  .sdrsFreeSpaceUtilizationDifference(java.lang.Number)
//  .sdrsIoBalanceAutomationLevel(java.lang.String)
//  .sdrsIoLatencyThreshold(java.lang.Number)
//  .sdrsIoLoadBalanceEnabled(java.lang.Boolean)
//  .sdrsIoLoadBalanceEnabled(IResolvable)
//  .sdrsIoLoadImbalanceThreshold(java.lang.Number)
//  .sdrsIoReservableIopsThreshold(java.lang.Number)
//  .sdrsIoReservablePercentThreshold(java.lang.Number)
//  .sdrsIoReservableThresholdMode(java.lang.String)
//  .sdrsLoadBalanceInterval(java.lang.Number)
//  .sdrsPolicyEnforcementAutomationLevel(java.lang.String)
//  .sdrsRuleEnforcementAutomationLevel(java.lang.String)
//  .sdrsSpaceBalanceAutomationLevel(java.lang.String)
//  .sdrsSpaceUtilizationThreshold(java.lang.Number)
//  .sdrsVmEvacuationAutomationLevel(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datacenter to put the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name for the new storage pod. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | The name of the folder to locate the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#id DatastoreCluster#id}. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAdvancedOptions">sdrsAdvancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Advanced configuration options for storage DRS. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAutomationLevel">sdrsAutomationLevel</a></code> | <code>java.lang.String</code> | The default automation level for all virtual machines in this storage cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsDefaultIntraVmAffinity">sdrsDefaultIntraVmAffinity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsEnabled">sdrsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable storage DRS for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThreshold">sdrsFreeSpaceThreshold</a></code> | <code>java.lang.Number</code> | The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThresholdMode">sdrsFreeSpaceThresholdMode</a></code> | <code>java.lang.String</code> | The free space threshold to use. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceUtilizationDifference">sdrsFreeSpaceUtilizationDifference</a></code> | <code>java.lang.Number</code> | The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoBalanceAutomationLevel">sdrsIoBalanceAutomationLevel</a></code> | <code>java.lang.String</code> | Overrides the default automation settings when correcting I/O load imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLatencyThreshold">sdrsIoLatencyThreshold</a></code> | <code>java.lang.Number</code> | The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadBalanceEnabled">sdrsIoLoadBalanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable I/O load balancing for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadImbalanceThreshold">sdrsIoLoadImbalanceThreshold</a></code> | <code>java.lang.Number</code> | The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableIopsThreshold">sdrsIoReservableIopsThreshold</a></code> | <code>java.lang.Number</code> | The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservablePercentThreshold">sdrsIoReservablePercentThreshold</a></code> | <code>java.lang.Number</code> | The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableThresholdMode">sdrsIoReservableThresholdMode</a></code> | <code>java.lang.String</code> | The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsLoadBalanceInterval">sdrsLoadBalanceInterval</a></code> | <code>java.lang.Number</code> | The storage DRS poll interval, in minutes. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsPolicyEnforcementAutomationLevel">sdrsPolicyEnforcementAutomationLevel</a></code> | <code>java.lang.String</code> | Overrides the default automation settings when correcting storage and VM policy violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsRuleEnforcementAutomationLevel">sdrsRuleEnforcementAutomationLevel</a></code> | <code>java.lang.String</code> | Overrides the default automation settings when correcting affinity rule violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceBalanceAutomationLevel">sdrsSpaceBalanceAutomationLevel</a></code> | <code>java.lang.String</code> | Overrides the default automation settings when correcting disk space imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceUtilizationThreshold">sdrsSpaceUtilizationThreshold</a></code> | <code>java.lang.Number</code> | The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsVmEvacuationAutomationLevel">sdrsVmEvacuationAutomationLevel</a></code> | <code>java.lang.String</code> | Overrides the default automation settings when generating recommendations for datastore evacuation. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

The managed object ID of the datacenter to put the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#datacenter_id DatastoreCluster#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name for the new storage pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#name DatastoreCluster#name}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#custom_attributes DatastoreCluster#custom_attributes}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The name of the folder to locate the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#folder DatastoreCluster#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#id DatastoreCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sdrsAdvancedOptions`<sup>Optional</sup> <a name="sdrsAdvancedOptions" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAdvancedOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSdrsAdvancedOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Advanced configuration options for storage DRS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_advanced_options DatastoreCluster#sdrs_advanced_options}

---

##### `sdrsAutomationLevel`<sup>Optional</sup> <a name="sdrsAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAutomationLevel"></a>

```java
public java.lang.String getSdrsAutomationLevel();
```

- *Type:* java.lang.String

The default automation level for all virtual machines in this storage cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_automation_level DatastoreCluster#sdrs_automation_level}

---

##### `sdrsDefaultIntraVmAffinity`<sup>Optional</sup> <a name="sdrsDefaultIntraVmAffinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsDefaultIntraVmAffinity"></a>

```java
public java.lang.Object getSdrsDefaultIntraVmAffinity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_default_intra_vm_affinity DatastoreCluster#sdrs_default_intra_vm_affinity}

---

##### `sdrsEnabled`<sup>Optional</sup> <a name="sdrsEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsEnabled"></a>

```java
public java.lang.Object getSdrsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable storage DRS for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_enabled DatastoreCluster#sdrs_enabled}

---

##### `sdrsFreeSpaceThreshold`<sup>Optional</sup> <a name="sdrsFreeSpaceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThreshold"></a>

```java
public java.lang.Number getSdrsFreeSpaceThreshold();
```

- *Type:* java.lang.Number

The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_free_space_threshold DatastoreCluster#sdrs_free_space_threshold}

---

##### `sdrsFreeSpaceThresholdMode`<sup>Optional</sup> <a name="sdrsFreeSpaceThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThresholdMode"></a>

```java
public java.lang.String getSdrsFreeSpaceThresholdMode();
```

- *Type:* java.lang.String

The free space threshold to use.

When set to utilization, drs_space_utilization_threshold is used, and when set to freeSpace, drs_free_space_threshold is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_free_space_threshold_mode DatastoreCluster#sdrs_free_space_threshold_mode}

---

##### `sdrsFreeSpaceUtilizationDifference`<sup>Optional</sup> <a name="sdrsFreeSpaceUtilizationDifference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceUtilizationDifference"></a>

```java
public java.lang.Number getSdrsFreeSpaceUtilizationDifference();
```

- *Type:* java.lang.Number

The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_free_space_utilization_difference DatastoreCluster#sdrs_free_space_utilization_difference}

---

##### `sdrsIoBalanceAutomationLevel`<sup>Optional</sup> <a name="sdrsIoBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoBalanceAutomationLevel"></a>

```java
public java.lang.String getSdrsIoBalanceAutomationLevel();
```

- *Type:* java.lang.String

Overrides the default automation settings when correcting I/O load imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_balance_automation_level DatastoreCluster#sdrs_io_balance_automation_level}

---

##### `sdrsIoLatencyThreshold`<sup>Optional</sup> <a name="sdrsIoLatencyThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLatencyThreshold"></a>

```java
public java.lang.Number getSdrsIoLatencyThreshold();
```

- *Type:* java.lang.Number

The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_latency_threshold DatastoreCluster#sdrs_io_latency_threshold}

---

##### `sdrsIoLoadBalanceEnabled`<sup>Optional</sup> <a name="sdrsIoLoadBalanceEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadBalanceEnabled"></a>

```java
public java.lang.Object getSdrsIoLoadBalanceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable I/O load balancing for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_load_balance_enabled DatastoreCluster#sdrs_io_load_balance_enabled}

---

##### `sdrsIoLoadImbalanceThreshold`<sup>Optional</sup> <a name="sdrsIoLoadImbalanceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadImbalanceThreshold"></a>

```java
public java.lang.Number getSdrsIoLoadImbalanceThreshold();
```

- *Type:* java.lang.Number

The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_load_imbalance_threshold DatastoreCluster#sdrs_io_load_imbalance_threshold}

---

##### `sdrsIoReservableIopsThreshold`<sup>Optional</sup> <a name="sdrsIoReservableIopsThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableIopsThreshold"></a>

```java
public java.lang.Number getSdrsIoReservableIopsThreshold();
```

- *Type:* java.lang.Number

The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_reservable_iops_threshold DatastoreCluster#sdrs_io_reservable_iops_threshold}

---

##### `sdrsIoReservablePercentThreshold`<sup>Optional</sup> <a name="sdrsIoReservablePercentThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservablePercentThreshold"></a>

```java
public java.lang.Number getSdrsIoReservablePercentThreshold();
```

- *Type:* java.lang.Number

The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_reservable_percent_threshold DatastoreCluster#sdrs_io_reservable_percent_threshold}

---

##### `sdrsIoReservableThresholdMode`<sup>Optional</sup> <a name="sdrsIoReservableThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableThresholdMode"></a>

```java
public java.lang.String getSdrsIoReservableThresholdMode();
```

- *Type:* java.lang.String

The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_io_reservable_threshold_mode DatastoreCluster#sdrs_io_reservable_threshold_mode}

---

##### `sdrsLoadBalanceInterval`<sup>Optional</sup> <a name="sdrsLoadBalanceInterval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsLoadBalanceInterval"></a>

```java
public java.lang.Number getSdrsLoadBalanceInterval();
```

- *Type:* java.lang.Number

The storage DRS poll interval, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_load_balance_interval DatastoreCluster#sdrs_load_balance_interval}

---

##### `sdrsPolicyEnforcementAutomationLevel`<sup>Optional</sup> <a name="sdrsPolicyEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsPolicyEnforcementAutomationLevel"></a>

```java
public java.lang.String getSdrsPolicyEnforcementAutomationLevel();
```

- *Type:* java.lang.String

Overrides the default automation settings when correcting storage and VM policy violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_policy_enforcement_automation_level DatastoreCluster#sdrs_policy_enforcement_automation_level}

---

##### `sdrsRuleEnforcementAutomationLevel`<sup>Optional</sup> <a name="sdrsRuleEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsRuleEnforcementAutomationLevel"></a>

```java
public java.lang.String getSdrsRuleEnforcementAutomationLevel();
```

- *Type:* java.lang.String

Overrides the default automation settings when correcting affinity rule violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_rule_enforcement_automation_level DatastoreCluster#sdrs_rule_enforcement_automation_level}

---

##### `sdrsSpaceBalanceAutomationLevel`<sup>Optional</sup> <a name="sdrsSpaceBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceBalanceAutomationLevel"></a>

```java
public java.lang.String getSdrsSpaceBalanceAutomationLevel();
```

- *Type:* java.lang.String

Overrides the default automation settings when correcting disk space imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_space_balance_automation_level DatastoreCluster#sdrs_space_balance_automation_level}

---

##### `sdrsSpaceUtilizationThreshold`<sup>Optional</sup> <a name="sdrsSpaceUtilizationThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceUtilizationThreshold"></a>

```java
public java.lang.Number getSdrsSpaceUtilizationThreshold();
```

- *Type:* java.lang.Number

The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_space_utilization_threshold DatastoreCluster#sdrs_space_utilization_threshold}

---

##### `sdrsVmEvacuationAutomationLevel`<sup>Optional</sup> <a name="sdrsVmEvacuationAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsVmEvacuationAutomationLevel"></a>

```java
public java.lang.String getSdrsVmEvacuationAutomationLevel();
```

- *Type:* java.lang.String

Overrides the default automation settings when generating recommendations for datastore evacuation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#sdrs_vm_evacuation_automation_level DatastoreCluster#sdrs_vm_evacuation_automation_level}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/datastore_cluster#tags DatastoreCluster#tags}

---



