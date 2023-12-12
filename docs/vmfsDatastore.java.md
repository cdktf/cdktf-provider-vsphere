# `vmfsDatastore` Submodule <a name="`vmfsDatastore` Submodule" id="@cdktf/provider-vsphere.vmfsDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmfsDatastore <a name="VmfsDatastore" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore vsphere_vmfs_datastore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vmfs_datastore.VmfsDatastore;

VmfsDatastore.Builder.create(Construct scope, java.lang.String id)
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
    .disks(java.util.List<java.lang.String>)
    .hostSystemId(java.lang.String)
    .name(java.lang.String)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .datastoreClusterId(java.lang.String)
//  .folder(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.disks">disks</a></code> | <code>java.util.List<java.lang.String></code> | The disks to add to the datastore. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | The managed object ID of the host to set up the datastore on. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the datastore. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.datastoreClusterId">datastoreClusterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datastore cluster to place the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | The path to the datastore folder to put the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#id VmfsDatastore#id}. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.disks"></a>

- *Type:* java.util.List<java.lang.String>

The disks to add to the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#disks VmfsDatastore#disks}

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.hostSystemId"></a>

- *Type:* java.lang.String

The managed object ID of the host to set up the datastore on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#host_system_id VmfsDatastore#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#name VmfsDatastore#name}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.customAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#custom_attributes VmfsDatastore#custom_attributes}

---

##### `datastoreClusterId`<sup>Optional</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.datastoreClusterId"></a>

- *Type:* java.lang.String

The managed object ID of the datastore cluster to place the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#datastore_cluster_id VmfsDatastore#datastore_cluster_id}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

The path to the datastore folder to put the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#folder VmfsDatastore#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#id VmfsDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#tags VmfsDatastore#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetDatastoreClusterId">resetDatastoreClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetDatastoreClusterId` <a name="resetDatastoreClusterId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetDatastoreClusterId"></a>

```java
public void resetDatastoreClusterId()
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetFolder"></a>

```java
public void resetFolder()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VmfsDatastore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vmfs_datastore.VmfsDatastore;

VmfsDatastore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vmfs_datastore.VmfsDatastore;

VmfsDatastore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vmfs_datastore.VmfsDatastore;

VmfsDatastore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vmfs_datastore.VmfsDatastore;

VmfsDatastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VmfsDatastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VmfsDatastore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VmfsDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VmfsDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VmfsDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.accessible">accessible</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.freeSpace">freeSpace</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.maintenanceMode">maintenanceMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.multipleHostAccess">multipleHostAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.uncommittedSpace">uncommittedSpace</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.customAttributesInput">customAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.datastoreClusterIdInput">datastoreClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.disksInput">disksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.hostSystemIdInput">hostSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.datastoreClusterId">datastoreClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.disks">disks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessible`<sup>Required</sup> <a name="accessible" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.accessible"></a>

```java
public IResolvable getAccessible();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `freeSpace`<sup>Required</sup> <a name="freeSpace" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.freeSpace"></a>

```java
public java.lang.Number getFreeSpace();
```

- *Type:* java.lang.Number

---

##### `maintenanceMode`<sup>Required</sup> <a name="maintenanceMode" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.maintenanceMode"></a>

```java
public java.lang.String getMaintenanceMode();
```

- *Type:* java.lang.String

---

##### `multipleHostAccess`<sup>Required</sup> <a name="multipleHostAccess" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.multipleHostAccess"></a>

```java
public IResolvable getMultipleHostAccess();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `uncommittedSpace`<sup>Required</sup> <a name="uncommittedSpace" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.uncommittedSpace"></a>

```java
public java.lang.Number getUncommittedSpace();
```

- *Type:* java.lang.Number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.customAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datastoreClusterIdInput`<sup>Optional</sup> <a name="datastoreClusterIdInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.datastoreClusterIdInput"></a>

```java
public java.lang.String getDatastoreClusterIdInput();
```

- *Type:* java.lang.String

---

##### `disksInput`<sup>Optional</sup> <a name="disksInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.disksInput"></a>

```java
public java.util.List<java.lang.String> getDisksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `hostSystemIdInput`<sup>Optional</sup> <a name="hostSystemIdInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.hostSystemIdInput"></a>

```java
public java.lang.String getHostSystemIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datastoreClusterId`<sup>Required</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.datastoreClusterId"></a>

```java
public java.lang.String getDatastoreClusterId();
```

- *Type:* java.lang.String

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.disks"></a>

```java
public java.util.List<java.lang.String> getDisks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.hostSystemId"></a>

```java
public java.lang.String getHostSystemId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VmfsDatastoreConfig <a name="VmfsDatastoreConfig" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vmfs_datastore.VmfsDatastoreConfig;

VmfsDatastoreConfig.builder()
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
    .disks(java.util.List<java.lang.String>)
    .hostSystemId(java.lang.String)
    .name(java.lang.String)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .datastoreClusterId(java.lang.String)
//  .folder(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.disks">disks</a></code> | <code>java.util.List<java.lang.String></code> | The disks to add to the datastore. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | The managed object ID of the host to set up the datastore on. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the datastore. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.datastoreClusterId">datastoreClusterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datastore cluster to place the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | The path to the datastore folder to put the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#id VmfsDatastore#id}. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.disks"></a>

```java
public java.util.List<java.lang.String> getDisks();
```

- *Type:* java.util.List<java.lang.String>

The disks to add to the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#disks VmfsDatastore#disks}

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.hostSystemId"></a>

```java
public java.lang.String getHostSystemId();
```

- *Type:* java.lang.String

The managed object ID of the host to set up the datastore on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#host_system_id VmfsDatastore#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#name VmfsDatastore#name}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#custom_attributes VmfsDatastore#custom_attributes}

---

##### `datastoreClusterId`<sup>Optional</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.datastoreClusterId"></a>

```java
public java.lang.String getDatastoreClusterId();
```

- *Type:* java.lang.String

The managed object ID of the datastore cluster to place the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#datastore_cluster_id VmfsDatastore#datastore_cluster_id}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The path to the datastore folder to put the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#folder VmfsDatastore#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#id VmfsDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/vmfs_datastore#tags VmfsDatastore#tags}

---



