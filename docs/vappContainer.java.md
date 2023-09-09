# `vsphere_vapp_container`

Refer to the Terraform Registory for docs: [`vsphere_vapp_container`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container).

# `vappContainer` Submodule <a name="`vappContainer` Submodule" id="@cdktf/provider-vsphere.vappContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VappContainer <a name="VappContainer" id="@cdktf/provider-vsphere.vappContainer.VappContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container vsphere_vapp_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vapp_container.VappContainer;

VappContainer.Builder.create(Construct scope, java.lang.String id)
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
//  .parentFolderId(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.parentResourcePoolId">parentResourcePoolId</a></code> | <code>java.lang.String</code> | The managed object ID of the parent resource pool or the compute resource the vApp container is in. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuExpandable">cpuExpandable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuReservation">cpuReservation</a></code> | <code>java.lang.Number</code> | Amount of CPU (MHz) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuShareLevel">cpuShareLevel</a></code> | <code>java.lang.String</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuShares">cpuShares</a></code> | <code>java.lang.Number</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#id VappContainer#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryExpandable">memoryExpandable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | Amount of memory (MB) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryShareLevel">memoryShareLevel</a></code> | <code>java.lang.String</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryShares">memoryShares</a></code> | <code>java.lang.Number</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.parentFolderId">parentFolderId</a></code> | <code>java.lang.String</code> | The ID of the parent VM folder. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#name VappContainer#name}

---

##### `parentResourcePoolId`<sup>Required</sup> <a name="parentResourcePoolId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.parentResourcePoolId"></a>

- *Type:* java.lang.String

The managed object ID of the parent resource pool or the compute resource the vApp container is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#parent_resource_pool_id VappContainer#parent_resource_pool_id}

---

##### `cpuExpandable`<sup>Optional</sup> <a name="cpuExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuExpandable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_expandable VappContainer#cpu_expandable}

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuLimit"></a>

- *Type:* java.lang.Number

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_limit VappContainer#cpu_limit}

---

##### `cpuReservation`<sup>Optional</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuReservation"></a>

- *Type:* java.lang.Number

Amount of CPU (MHz) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_reservation VappContainer#cpu_reservation}

---

##### `cpuShareLevel`<sup>Optional</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuShareLevel"></a>

- *Type:* java.lang.String

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_share_level VappContainer#cpu_share_level}

---

##### `cpuShares`<sup>Optional</sup> <a name="cpuShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuShares"></a>

- *Type:* java.lang.Number

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_shares VappContainer#cpu_shares}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.customAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#custom_attributes VappContainer#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#id VappContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memoryExpandable`<sup>Optional</sup> <a name="memoryExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryExpandable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_expandable VappContainer#memory_expandable}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryLimit"></a>

- *Type:* java.lang.Number

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_limit VappContainer#memory_limit}

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryReservation"></a>

- *Type:* java.lang.Number

Amount of memory (MB) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_reservation VappContainer#memory_reservation}

---

##### `memoryShareLevel`<sup>Optional</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryShareLevel"></a>

- *Type:* java.lang.String

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_share_level VappContainer#memory_share_level}

---

##### `memoryShares`<sup>Optional</sup> <a name="memoryShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryShares"></a>

- *Type:* java.lang.Number

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_shares VappContainer#memory_shares}

---

##### `parentFolderId`<sup>Optional</sup> <a name="parentFolderId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.parentFolderId"></a>

- *Type:* java.lang.String

The ID of the parent VM folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#parent_folder_id VappContainer#parent_folder_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#tags VappContainer#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuExpandable">resetCpuExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuLimit">resetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuReservation">resetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShareLevel">resetCpuShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShares">resetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryExpandable">resetMemoryExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryLimit">resetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryReservation">resetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShareLevel">resetMemoryShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShares">resetMemoryShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetParentFolderId">resetParentFolderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCpuExpandable` <a name="resetCpuExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuExpandable"></a>

```java
public void resetCpuExpandable()
```

##### `resetCpuLimit` <a name="resetCpuLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuLimit"></a>

```java
public void resetCpuLimit()
```

##### `resetCpuReservation` <a name="resetCpuReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuReservation"></a>

```java
public void resetCpuReservation()
```

##### `resetCpuShareLevel` <a name="resetCpuShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShareLevel"></a>

```java
public void resetCpuShareLevel()
```

##### `resetCpuShares` <a name="resetCpuShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShares"></a>

```java
public void resetCpuShares()
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetId"></a>

```java
public void resetId()
```

##### `resetMemoryExpandable` <a name="resetMemoryExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryExpandable"></a>

```java
public void resetMemoryExpandable()
```

##### `resetMemoryLimit` <a name="resetMemoryLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryLimit"></a>

```java
public void resetMemoryLimit()
```

##### `resetMemoryReservation` <a name="resetMemoryReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryReservation"></a>

```java
public void resetMemoryReservation()
```

##### `resetMemoryShareLevel` <a name="resetMemoryShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShareLevel"></a>

```java
public void resetMemoryShareLevel()
```

##### `resetMemoryShares` <a name="resetMemoryShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShares"></a>

```java
public void resetMemoryShares()
```

##### `resetParentFolderId` <a name="resetParentFolderId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetParentFolderId"></a>

```java
public void resetParentFolderId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vapp_container.VappContainer;

VappContainer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vapp_container.VappContainer;

VappContainer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vapp_container.VappContainer;

VappContainer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandableInput">cpuExpandableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimitInput">cpuLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservationInput">cpuReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevelInput">cpuShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuSharesInput">cpuSharesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributesInput">customAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandableInput">memoryExpandableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimitInput">memoryLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservationInput">memoryReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevelInput">memoryShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memorySharesInput">memorySharesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderIdInput">parentFolderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolIdInput">parentResourcePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandable">cpuExpandable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservation">cpuReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevel">cpuShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShares">cpuShares</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandable">memoryExpandable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevel">memoryShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShares">memoryShares</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderId">parentFolderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolId">parentResourcePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cpuExpandableInput`<sup>Optional</sup> <a name="cpuExpandableInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandableInput"></a>

```java
public java.lang.Object getCpuExpandableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuLimitInput`<sup>Optional</sup> <a name="cpuLimitInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimitInput"></a>

```java
public java.lang.Number getCpuLimitInput();
```

- *Type:* java.lang.Number

---

##### `cpuReservationInput`<sup>Optional</sup> <a name="cpuReservationInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservationInput"></a>

```java
public java.lang.Number getCpuReservationInput();
```

- *Type:* java.lang.Number

---

##### `cpuShareLevelInput`<sup>Optional</sup> <a name="cpuShareLevelInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevelInput"></a>

```java
public java.lang.String getCpuShareLevelInput();
```

- *Type:* java.lang.String

---

##### `cpuSharesInput`<sup>Optional</sup> <a name="cpuSharesInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuSharesInput"></a>

```java
public java.lang.Number getCpuSharesInput();
```

- *Type:* java.lang.Number

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memoryExpandableInput`<sup>Optional</sup> <a name="memoryExpandableInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandableInput"></a>

```java
public java.lang.Object getMemoryExpandableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memoryLimitInput`<sup>Optional</sup> <a name="memoryLimitInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimitInput"></a>

```java
public java.lang.Number getMemoryLimitInput();
```

- *Type:* java.lang.Number

---

##### `memoryReservationInput`<sup>Optional</sup> <a name="memoryReservationInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservationInput"></a>

```java
public java.lang.Number getMemoryReservationInput();
```

- *Type:* java.lang.Number

---

##### `memoryShareLevelInput`<sup>Optional</sup> <a name="memoryShareLevelInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevelInput"></a>

```java
public java.lang.String getMemoryShareLevelInput();
```

- *Type:* java.lang.String

---

##### `memorySharesInput`<sup>Optional</sup> <a name="memorySharesInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memorySharesInput"></a>

```java
public java.lang.Number getMemorySharesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentFolderIdInput`<sup>Optional</sup> <a name="parentFolderIdInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderIdInput"></a>

```java
public java.lang.String getParentFolderIdInput();
```

- *Type:* java.lang.String

---

##### `parentResourcePoolIdInput`<sup>Optional</sup> <a name="parentResourcePoolIdInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolIdInput"></a>

```java
public java.lang.String getParentResourcePoolIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuExpandable`<sup>Required</sup> <a name="cpuExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandable"></a>

```java
public java.lang.Object getCpuExpandable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuLimit`<sup>Required</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimit"></a>

```java
public java.lang.Number getCpuLimit();
```

- *Type:* java.lang.Number

---

##### `cpuReservation`<sup>Required</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservation"></a>

```java
public java.lang.Number getCpuReservation();
```

- *Type:* java.lang.Number

---

##### `cpuShareLevel`<sup>Required</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevel"></a>

```java
public java.lang.String getCpuShareLevel();
```

- *Type:* java.lang.String

---

##### `cpuShares`<sup>Required</sup> <a name="cpuShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShares"></a>

```java
public java.lang.Number getCpuShares();
```

- *Type:* java.lang.Number

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `memoryExpandable`<sup>Required</sup> <a name="memoryExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandable"></a>

```java
public java.lang.Object getMemoryExpandable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memoryLimit`<sup>Required</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimit"></a>

```java
public java.lang.Number getMemoryLimit();
```

- *Type:* java.lang.Number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservation"></a>

```java
public java.lang.Number getMemoryReservation();
```

- *Type:* java.lang.Number

---

##### `memoryShareLevel`<sup>Required</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevel"></a>

```java
public java.lang.String getMemoryShareLevel();
```

- *Type:* java.lang.String

---

##### `memoryShares`<sup>Required</sup> <a name="memoryShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShares"></a>

```java
public java.lang.Number getMemoryShares();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentFolderId`<sup>Required</sup> <a name="parentFolderId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderId"></a>

```java
public java.lang.String getParentFolderId();
```

- *Type:* java.lang.String

---

##### `parentResourcePoolId`<sup>Required</sup> <a name="parentResourcePoolId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolId"></a>

```java
public java.lang.String getParentResourcePoolId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VappContainerConfig <a name="VappContainerConfig" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vapp_container.VappContainerConfig;

VappContainerConfig.builder()
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
//  .parentFolderId(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentResourcePoolId">parentResourcePoolId</a></code> | <code>java.lang.String</code> | The managed object ID of the parent resource pool or the compute resource the vApp container is in. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuExpandable">cpuExpandable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuReservation">cpuReservation</a></code> | <code>java.lang.Number</code> | Amount of CPU (MHz) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShareLevel">cpuShareLevel</a></code> | <code>java.lang.String</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShares">cpuShares</a></code> | <code>java.lang.Number</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#id VappContainer#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryExpandable">memoryExpandable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | Amount of memory (MB) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShareLevel">memoryShareLevel</a></code> | <code>java.lang.String</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShares">memoryShares</a></code> | <code>java.lang.Number</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentFolderId">parentFolderId</a></code> | <code>java.lang.String</code> | The ID of the parent VM folder. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#name VappContainer#name}

---

##### `parentResourcePoolId`<sup>Required</sup> <a name="parentResourcePoolId" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentResourcePoolId"></a>

```java
public java.lang.String getParentResourcePoolId();
```

- *Type:* java.lang.String

The managed object ID of the parent resource pool or the compute resource the vApp container is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#parent_resource_pool_id VappContainer#parent_resource_pool_id}

---

##### `cpuExpandable`<sup>Optional</sup> <a name="cpuExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuExpandable"></a>

```java
public java.lang.Object getCpuExpandable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_expandable VappContainer#cpu_expandable}

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuLimit"></a>

```java
public java.lang.Number getCpuLimit();
```

- *Type:* java.lang.Number

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_limit VappContainer#cpu_limit}

---

##### `cpuReservation`<sup>Optional</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuReservation"></a>

```java
public java.lang.Number getCpuReservation();
```

- *Type:* java.lang.Number

Amount of CPU (MHz) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_reservation VappContainer#cpu_reservation}

---

##### `cpuShareLevel`<sup>Optional</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShareLevel"></a>

```java
public java.lang.String getCpuShareLevel();
```

- *Type:* java.lang.String

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_share_level VappContainer#cpu_share_level}

---

##### `cpuShares`<sup>Optional</sup> <a name="cpuShares" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShares"></a>

```java
public java.lang.Number getCpuShares();
```

- *Type:* java.lang.Number

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_shares VappContainer#cpu_shares}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#custom_attributes VappContainer#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#id VappContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memoryExpandable`<sup>Optional</sup> <a name="memoryExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryExpandable"></a>

```java
public java.lang.Object getMemoryExpandable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_expandable VappContainer#memory_expandable}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryLimit"></a>

```java
public java.lang.Number getMemoryLimit();
```

- *Type:* java.lang.Number

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_limit VappContainer#memory_limit}

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryReservation"></a>

```java
public java.lang.Number getMemoryReservation();
```

- *Type:* java.lang.Number

Amount of memory (MB) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_reservation VappContainer#memory_reservation}

---

##### `memoryShareLevel`<sup>Optional</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShareLevel"></a>

```java
public java.lang.String getMemoryShareLevel();
```

- *Type:* java.lang.String

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_share_level VappContainer#memory_share_level}

---

##### `memoryShares`<sup>Optional</sup> <a name="memoryShares" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShares"></a>

```java
public java.lang.Number getMemoryShares();
```

- *Type:* java.lang.Number

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_shares VappContainer#memory_shares}

---

##### `parentFolderId`<sup>Optional</sup> <a name="parentFolderId" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentFolderId"></a>

```java
public java.lang.String getParentFolderId();
```

- *Type:* java.lang.String

The ID of the parent VM folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#parent_folder_id VappContainer#parent_folder_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#tags VappContainer#tags}

---



