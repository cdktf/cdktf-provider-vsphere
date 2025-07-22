# `resourcePool` Submodule <a name="`resourcePool` Submodule" id="@cdktf/provider-vsphere.resourcePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcePool <a name="ResourcePool" id="@cdktf/provider-vsphere.resourcePool.ResourcePool"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool vsphere_resource_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.resource_pool.ResourcePool;

ResourcePool.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .parentResourcePoolId(java.lang.String)
//  .cpuExpandable(java.lang.Boolean)
//  .cpuExpandable(IResolvable)
//  .cpuLimit(java.lang.Number)
//  .cpuReservation(java.lang.Number)
//  .cpuShareLevel(java.lang.String)
//  .cpuShares(java.lang.Number)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .memoryExpandable(java.lang.Boolean)
//  .memoryExpandable(IResolvable)
//  .memoryLimit(java.lang.Number)
//  .memoryReservation(java.lang.Number)
//  .memoryShareLevel(java.lang.String)
//  .memoryShares(java.lang.Number)
//  .scaleDescendantsShares(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.parentResourcePoolId">parentResourcePoolId</a></code> | <code>java.lang.String</code> | The ID of the root resource pool of the compute resource the resource pool is in. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuExpandable">cpuExpandable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | The utilization of a resource pool will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuReservation">cpuReservation</a></code> | <code>java.lang.Number</code> | Amount of CPU (MHz) that is guaranteed available to the resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuShareLevel">cpuShareLevel</a></code> | <code>java.lang.String</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuShares">cpuShares</a></code> | <code>java.lang.Number</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#id ResourcePool#id}. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryExpandable">memoryExpandable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | The utilization of a resource pool will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | Amount of memory (MB) that is guaranteed available to the resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryShareLevel">memoryShareLevel</a></code> | <code>java.lang.String</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryShares">memoryShares</a></code> | <code>java.lang.Number</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.scaleDescendantsShares">scaleDescendantsShares</a></code> | <code>java.lang.String</code> | Determines if the shares of all descendants of the resource pool are scaled up or down when the shares of the resource pool are scaled up or down. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#name ResourcePool#name}

---

##### `parentResourcePoolId`<sup>Required</sup> <a name="parentResourcePoolId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.parentResourcePoolId"></a>

- *Type:* java.lang.String

The ID of the root resource pool of the compute resource the resource pool is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#parent_resource_pool_id ResourcePool#parent_resource_pool_id}

---

##### `cpuExpandable`<sup>Optional</sup> <a name="cpuExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuExpandable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#cpu_expandable ResourcePool#cpu_expandable}

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuLimit"></a>

- *Type:* java.lang.Number

The utilization of a resource pool will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#cpu_limit ResourcePool#cpu_limit}

---

##### `cpuReservation`<sup>Optional</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuReservation"></a>

- *Type:* java.lang.Number

Amount of CPU (MHz) that is guaranteed available to the resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#cpu_reservation ResourcePool#cpu_reservation}

---

##### `cpuShareLevel`<sup>Optional</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuShareLevel"></a>

- *Type:* java.lang.String

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#cpu_share_level ResourcePool#cpu_share_level}

---

##### `cpuShares`<sup>Optional</sup> <a name="cpuShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuShares"></a>

- *Type:* java.lang.Number

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#cpu_shares ResourcePool#cpu_shares}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.customAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#custom_attributes ResourcePool#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#id ResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memoryExpandable`<sup>Optional</sup> <a name="memoryExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryExpandable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#memory_expandable ResourcePool#memory_expandable}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryLimit"></a>

- *Type:* java.lang.Number

The utilization of a resource pool will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#memory_limit ResourcePool#memory_limit}

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryReservation"></a>

- *Type:* java.lang.Number

Amount of memory (MB) that is guaranteed available to the resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#memory_reservation ResourcePool#memory_reservation}

---

##### `memoryShareLevel`<sup>Optional</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryShareLevel"></a>

- *Type:* java.lang.String

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#memory_share_level ResourcePool#memory_share_level}

---

##### `memoryShares`<sup>Optional</sup> <a name="memoryShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryShares"></a>

- *Type:* java.lang.Number

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#memory_shares ResourcePool#memory_shares}

---

##### `scaleDescendantsShares`<sup>Optional</sup> <a name="scaleDescendantsShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.scaleDescendantsShares"></a>

- *Type:* java.lang.String

Determines if the shares of all descendants of the resource pool are scaled up or down when the shares of the resource pool are scaled up or down.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#scale_descendants_shares ResourcePool#scale_descendants_shares}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#tags ResourcePool#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuExpandable">resetCpuExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuLimit">resetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuReservation">resetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShareLevel">resetCpuShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShares">resetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryExpandable">resetMemoryExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryLimit">resetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryReservation">resetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShareLevel">resetMemoryShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShares">resetMemoryShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetScaleDescendantsShares">resetScaleDescendantsShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCpuExpandable` <a name="resetCpuExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuExpandable"></a>

```java
public void resetCpuExpandable()
```

##### `resetCpuLimit` <a name="resetCpuLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuLimit"></a>

```java
public void resetCpuLimit()
```

##### `resetCpuReservation` <a name="resetCpuReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuReservation"></a>

```java
public void resetCpuReservation()
```

##### `resetCpuShareLevel` <a name="resetCpuShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShareLevel"></a>

```java
public void resetCpuShareLevel()
```

##### `resetCpuShares` <a name="resetCpuShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShares"></a>

```java
public void resetCpuShares()
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetId"></a>

```java
public void resetId()
```

##### `resetMemoryExpandable` <a name="resetMemoryExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryExpandable"></a>

```java
public void resetMemoryExpandable()
```

##### `resetMemoryLimit` <a name="resetMemoryLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryLimit"></a>

```java
public void resetMemoryLimit()
```

##### `resetMemoryReservation` <a name="resetMemoryReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryReservation"></a>

```java
public void resetMemoryReservation()
```

##### `resetMemoryShareLevel` <a name="resetMemoryShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShareLevel"></a>

```java
public void resetMemoryShareLevel()
```

##### `resetMemoryShares` <a name="resetMemoryShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShares"></a>

```java
public void resetMemoryShares()
```

##### `resetScaleDescendantsShares` <a name="resetScaleDescendantsShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetScaleDescendantsShares"></a>

```java
public void resetScaleDescendantsShares()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourcePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.resource_pool.ResourcePool;

ResourcePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.resource_pool.ResourcePool;

ResourcePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.resource_pool.ResourcePool;

ResourcePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.resource_pool.ResourcePool;

ResourcePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourcePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ResourcePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourcePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourcePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ResourcePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandableInput">cpuExpandableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimitInput">cpuLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservationInput">cpuReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevelInput">cpuShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuSharesInput">cpuSharesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributesInput">customAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandableInput">memoryExpandableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimitInput">memoryLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservationInput">memoryReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevelInput">memoryShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memorySharesInput">memorySharesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolIdInput">parentResourcePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsSharesInput">scaleDescendantsSharesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandable">cpuExpandable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservation">cpuReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevel">cpuShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShares">cpuShares</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandable">memoryExpandable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevel">memoryShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShares">memoryShares</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolId">parentResourcePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsShares">scaleDescendantsShares</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cpuExpandableInput`<sup>Optional</sup> <a name="cpuExpandableInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandableInput"></a>

```java
public java.lang.Object getCpuExpandableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuLimitInput`<sup>Optional</sup> <a name="cpuLimitInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimitInput"></a>

```java
public java.lang.Number getCpuLimitInput();
```

- *Type:* java.lang.Number

---

##### `cpuReservationInput`<sup>Optional</sup> <a name="cpuReservationInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservationInput"></a>

```java
public java.lang.Number getCpuReservationInput();
```

- *Type:* java.lang.Number

---

##### `cpuShareLevelInput`<sup>Optional</sup> <a name="cpuShareLevelInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevelInput"></a>

```java
public java.lang.String getCpuShareLevelInput();
```

- *Type:* java.lang.String

---

##### `cpuSharesInput`<sup>Optional</sup> <a name="cpuSharesInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuSharesInput"></a>

```java
public java.lang.Number getCpuSharesInput();
```

- *Type:* java.lang.Number

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memoryExpandableInput`<sup>Optional</sup> <a name="memoryExpandableInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandableInput"></a>

```java
public java.lang.Object getMemoryExpandableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memoryLimitInput`<sup>Optional</sup> <a name="memoryLimitInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimitInput"></a>

```java
public java.lang.Number getMemoryLimitInput();
```

- *Type:* java.lang.Number

---

##### `memoryReservationInput`<sup>Optional</sup> <a name="memoryReservationInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservationInput"></a>

```java
public java.lang.Number getMemoryReservationInput();
```

- *Type:* java.lang.Number

---

##### `memoryShareLevelInput`<sup>Optional</sup> <a name="memoryShareLevelInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevelInput"></a>

```java
public java.lang.String getMemoryShareLevelInput();
```

- *Type:* java.lang.String

---

##### `memorySharesInput`<sup>Optional</sup> <a name="memorySharesInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memorySharesInput"></a>

```java
public java.lang.Number getMemorySharesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentResourcePoolIdInput`<sup>Optional</sup> <a name="parentResourcePoolIdInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolIdInput"></a>

```java
public java.lang.String getParentResourcePoolIdInput();
```

- *Type:* java.lang.String

---

##### `scaleDescendantsSharesInput`<sup>Optional</sup> <a name="scaleDescendantsSharesInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsSharesInput"></a>

```java
public java.lang.String getScaleDescendantsSharesInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuExpandable`<sup>Required</sup> <a name="cpuExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandable"></a>

```java
public java.lang.Object getCpuExpandable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuLimit`<sup>Required</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimit"></a>

```java
public java.lang.Number getCpuLimit();
```

- *Type:* java.lang.Number

---

##### `cpuReservation`<sup>Required</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservation"></a>

```java
public java.lang.Number getCpuReservation();
```

- *Type:* java.lang.Number

---

##### `cpuShareLevel`<sup>Required</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevel"></a>

```java
public java.lang.String getCpuShareLevel();
```

- *Type:* java.lang.String

---

##### `cpuShares`<sup>Required</sup> <a name="cpuShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShares"></a>

```java
public java.lang.Number getCpuShares();
```

- *Type:* java.lang.Number

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `memoryExpandable`<sup>Required</sup> <a name="memoryExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandable"></a>

```java
public java.lang.Object getMemoryExpandable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memoryLimit`<sup>Required</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimit"></a>

```java
public java.lang.Number getMemoryLimit();
```

- *Type:* java.lang.Number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservation"></a>

```java
public java.lang.Number getMemoryReservation();
```

- *Type:* java.lang.Number

---

##### `memoryShareLevel`<sup>Required</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevel"></a>

```java
public java.lang.String getMemoryShareLevel();
```

- *Type:* java.lang.String

---

##### `memoryShares`<sup>Required</sup> <a name="memoryShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShares"></a>

```java
public java.lang.Number getMemoryShares();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentResourcePoolId`<sup>Required</sup> <a name="parentResourcePoolId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolId"></a>

```java
public java.lang.String getParentResourcePoolId();
```

- *Type:* java.lang.String

---

##### `scaleDescendantsShares`<sup>Required</sup> <a name="scaleDescendantsShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsShares"></a>

```java
public java.lang.String getScaleDescendantsShares();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcePoolConfig <a name="ResourcePoolConfig" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.resource_pool.ResourcePoolConfig;

ResourcePoolConfig.builder()
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
    .name(java.lang.String)
    .parentResourcePoolId(java.lang.String)
//  .cpuExpandable(java.lang.Boolean)
//  .cpuExpandable(IResolvable)
//  .cpuLimit(java.lang.Number)
//  .cpuReservation(java.lang.Number)
//  .cpuShareLevel(java.lang.String)
//  .cpuShares(java.lang.Number)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .memoryExpandable(java.lang.Boolean)
//  .memoryExpandable(IResolvable)
//  .memoryLimit(java.lang.Number)
//  .memoryReservation(java.lang.Number)
//  .memoryShareLevel(java.lang.String)
//  .memoryShares(java.lang.Number)
//  .scaleDescendantsShares(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.parentResourcePoolId">parentResourcePoolId</a></code> | <code>java.lang.String</code> | The ID of the root resource pool of the compute resource the resource pool is in. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuExpandable">cpuExpandable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | The utilization of a resource pool will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuReservation">cpuReservation</a></code> | <code>java.lang.Number</code> | Amount of CPU (MHz) that is guaranteed available to the resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShareLevel">cpuShareLevel</a></code> | <code>java.lang.String</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShares">cpuShares</a></code> | <code>java.lang.Number</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#id ResourcePool#id}. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryExpandable">memoryExpandable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | The utilization of a resource pool will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | Amount of memory (MB) that is guaranteed available to the resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShareLevel">memoryShareLevel</a></code> | <code>java.lang.String</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShares">memoryShares</a></code> | <code>java.lang.Number</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.scaleDescendantsShares">scaleDescendantsShares</a></code> | <code>java.lang.String</code> | Determines if the shares of all descendants of the resource pool are scaled up or down when the shares of the resource pool are scaled up or down. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#name ResourcePool#name}

---

##### `parentResourcePoolId`<sup>Required</sup> <a name="parentResourcePoolId" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.parentResourcePoolId"></a>

```java
public java.lang.String getParentResourcePoolId();
```

- *Type:* java.lang.String

The ID of the root resource pool of the compute resource the resource pool is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#parent_resource_pool_id ResourcePool#parent_resource_pool_id}

---

##### `cpuExpandable`<sup>Optional</sup> <a name="cpuExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuExpandable"></a>

```java
public java.lang.Object getCpuExpandable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#cpu_expandable ResourcePool#cpu_expandable}

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuLimit"></a>

```java
public java.lang.Number getCpuLimit();
```

- *Type:* java.lang.Number

The utilization of a resource pool will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#cpu_limit ResourcePool#cpu_limit}

---

##### `cpuReservation`<sup>Optional</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuReservation"></a>

```java
public java.lang.Number getCpuReservation();
```

- *Type:* java.lang.Number

Amount of CPU (MHz) that is guaranteed available to the resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#cpu_reservation ResourcePool#cpu_reservation}

---

##### `cpuShareLevel`<sup>Optional</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShareLevel"></a>

```java
public java.lang.String getCpuShareLevel();
```

- *Type:* java.lang.String

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#cpu_share_level ResourcePool#cpu_share_level}

---

##### `cpuShares`<sup>Optional</sup> <a name="cpuShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShares"></a>

```java
public java.lang.Number getCpuShares();
```

- *Type:* java.lang.Number

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#cpu_shares ResourcePool#cpu_shares}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#custom_attributes ResourcePool#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#id ResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memoryExpandable`<sup>Optional</sup> <a name="memoryExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryExpandable"></a>

```java
public java.lang.Object getMemoryExpandable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#memory_expandable ResourcePool#memory_expandable}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryLimit"></a>

```java
public java.lang.Number getMemoryLimit();
```

- *Type:* java.lang.Number

The utilization of a resource pool will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#memory_limit ResourcePool#memory_limit}

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryReservation"></a>

```java
public java.lang.Number getMemoryReservation();
```

- *Type:* java.lang.Number

Amount of memory (MB) that is guaranteed available to the resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#memory_reservation ResourcePool#memory_reservation}

---

##### `memoryShareLevel`<sup>Optional</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShareLevel"></a>

```java
public java.lang.String getMemoryShareLevel();
```

- *Type:* java.lang.String

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#memory_share_level ResourcePool#memory_share_level}

---

##### `memoryShares`<sup>Optional</sup> <a name="memoryShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShares"></a>

```java
public java.lang.Number getMemoryShares();
```

- *Type:* java.lang.Number

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#memory_shares ResourcePool#memory_shares}

---

##### `scaleDescendantsShares`<sup>Optional</sup> <a name="scaleDescendantsShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.scaleDescendantsShares"></a>

```java
public java.lang.String getScaleDescendantsShares();
```

- *Type:* java.lang.String

Determines if the shares of all descendants of the resource pool are scaled up or down when the shares of the resource pool are scaled up or down.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#scale_descendants_shares ResourcePool#scale_descendants_shares}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/resource_pool#tags ResourcePool#tags}

---



