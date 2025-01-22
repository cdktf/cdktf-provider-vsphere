# `nasDatastore` Submodule <a name="`nasDatastore` Submodule" id="@cdktf/provider-vsphere.nasDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NasDatastore <a name="NasDatastore" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore vsphere_nas_datastore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.nas_datastore.NasDatastore;

NasDatastore.Builder.create(Construct scope, java.lang.String id)
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
    .hostSystemIds(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .remoteHosts(java.util.List<java.lang.String>)
    .remotePath(java.lang.String)
//  .accessMode(java.lang.String)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .datastoreClusterId(java.lang.String)
//  .folder(java.lang.String)
//  .id(java.lang.String)
//  .securityType(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.hostSystemIds">hostSystemIds</a></code> | <code>java.util.List<java.lang.String></code> | The managed object IDs of the hosts to mount the datastore on. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the datastore. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.remoteHosts">remoteHosts</a></code> | <code>java.util.List<java.lang.String></code> | The hostnames or IP addresses of the remote server or servers. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.remotePath">remotePath</a></code> | <code>java.lang.String</code> | The remote path of the mount point. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.accessMode">accessMode</a></code> | <code>java.lang.String</code> | Access mode for the mount point. Can be one of readOnly or readWrite. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.datastoreClusterId">datastoreClusterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datastore cluster to place the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | The path to the datastore folder to put the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#id NasDatastore#id}. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.securityType">securityType</a></code> | <code>java.lang.String</code> | The security type to use. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of NAS volume. Can be one of NFS (to denote v3) or NFS41 (to denote NFS v4.1). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostSystemIds`<sup>Required</sup> <a name="hostSystemIds" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.hostSystemIds"></a>

- *Type:* java.util.List<java.lang.String>

The managed object IDs of the hosts to mount the datastore on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#host_system_ids NasDatastore#host_system_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#name NasDatastore#name}

---

##### `remoteHosts`<sup>Required</sup> <a name="remoteHosts" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.remoteHosts"></a>

- *Type:* java.util.List<java.lang.String>

The hostnames or IP addresses of the remote server or servers.

Only one element should be present for NFS v3 but multiple can be present for NFS v4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#remote_hosts NasDatastore#remote_hosts}

---

##### `remotePath`<sup>Required</sup> <a name="remotePath" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.remotePath"></a>

- *Type:* java.lang.String

The remote path of the mount point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#remote_path NasDatastore#remote_path}

---

##### `accessMode`<sup>Optional</sup> <a name="accessMode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.accessMode"></a>

- *Type:* java.lang.String

Access mode for the mount point. Can be one of readOnly or readWrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#access_mode NasDatastore#access_mode}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.customAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#custom_attributes NasDatastore#custom_attributes}

---

##### `datastoreClusterId`<sup>Optional</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.datastoreClusterId"></a>

- *Type:* java.lang.String

The managed object ID of the datastore cluster to place the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#datastore_cluster_id NasDatastore#datastore_cluster_id}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

The path to the datastore folder to put the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#folder NasDatastore#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#id NasDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityType`<sup>Optional</sup> <a name="securityType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.securityType"></a>

- *Type:* java.lang.String

The security type to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#security_type NasDatastore#security_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#tags NasDatastore#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of NAS volume. Can be one of NFS (to denote v3) or NFS41 (to denote NFS v4.1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#type NasDatastore#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetAccessMode">resetAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetDatastoreClusterId">resetDatastoreClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetSecurityType">resetSecurityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessMode` <a name="resetAccessMode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetAccessMode"></a>

```java
public void resetAccessMode()
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetDatastoreClusterId` <a name="resetDatastoreClusterId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetDatastoreClusterId"></a>

```java
public void resetDatastoreClusterId()
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetFolder"></a>

```java
public void resetFolder()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetId"></a>

```java
public void resetId()
```

##### `resetSecurityType` <a name="resetSecurityType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetSecurityType"></a>

```java
public void resetSecurityType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetTags"></a>

```java
public void resetTags()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NasDatastore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.nas_datastore.NasDatastore;

NasDatastore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.nas_datastore.NasDatastore;

NasDatastore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.nas_datastore.NasDatastore;

NasDatastore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.nas_datastore.NasDatastore;

NasDatastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NasDatastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NasDatastore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NasDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NasDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NasDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessible">accessible</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.freeSpace">freeSpace</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.maintenanceMode">maintenanceMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.multipleHostAccess">multipleHostAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.protocolEndpoint">protocolEndpoint</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.uncommittedSpace">uncommittedSpace</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessModeInput">accessModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributesInput">customAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterIdInput">datastoreClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIdsInput">hostSystemIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHostsInput">remoteHostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePathInput">remotePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityTypeInput">securityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterId">datastoreClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIds">hostSystemIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHosts">remoteHosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePath">remotePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityType">securityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessible`<sup>Required</sup> <a name="accessible" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessible"></a>

```java
public IResolvable getAccessible();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `freeSpace`<sup>Required</sup> <a name="freeSpace" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.freeSpace"></a>

```java
public java.lang.Number getFreeSpace();
```

- *Type:* java.lang.Number

---

##### `maintenanceMode`<sup>Required</sup> <a name="maintenanceMode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.maintenanceMode"></a>

```java
public java.lang.String getMaintenanceMode();
```

- *Type:* java.lang.String

---

##### `multipleHostAccess`<sup>Required</sup> <a name="multipleHostAccess" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.multipleHostAccess"></a>

```java
public IResolvable getMultipleHostAccess();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `protocolEndpoint`<sup>Required</sup> <a name="protocolEndpoint" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.protocolEndpoint"></a>

```java
public IResolvable getProtocolEndpoint();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `uncommittedSpace`<sup>Required</sup> <a name="uncommittedSpace" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.uncommittedSpace"></a>

```java
public java.lang.Number getUncommittedSpace();
```

- *Type:* java.lang.Number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessModeInput"></a>

```java
public java.lang.String getAccessModeInput();
```

- *Type:* java.lang.String

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datastoreClusterIdInput`<sup>Optional</sup> <a name="datastoreClusterIdInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterIdInput"></a>

```java
public java.lang.String getDatastoreClusterIdInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `hostSystemIdsInput`<sup>Optional</sup> <a name="hostSystemIdsInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIdsInput"></a>

```java
public java.util.List<java.lang.String> getHostSystemIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `remoteHostsInput`<sup>Optional</sup> <a name="remoteHostsInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHostsInput"></a>

```java
public java.util.List<java.lang.String> getRemoteHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `remotePathInput`<sup>Optional</sup> <a name="remotePathInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePathInput"></a>

```java
public java.lang.String getRemotePathInput();
```

- *Type:* java.lang.String

---

##### `securityTypeInput`<sup>Optional</sup> <a name="securityTypeInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityTypeInput"></a>

```java
public java.lang.String getSecurityTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datastoreClusterId`<sup>Required</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterId"></a>

```java
public java.lang.String getDatastoreClusterId();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `hostSystemIds`<sup>Required</sup> <a name="hostSystemIds" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIds"></a>

```java
public java.util.List<java.lang.String> getHostSystemIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `remoteHosts`<sup>Required</sup> <a name="remoteHosts" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHosts"></a>

```java
public java.util.List<java.lang.String> getRemoteHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `remotePath`<sup>Required</sup> <a name="remotePath" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePath"></a>

```java
public java.lang.String getRemotePath();
```

- *Type:* java.lang.String

---

##### `securityType`<sup>Required</sup> <a name="securityType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityType"></a>

```java
public java.lang.String getSecurityType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NasDatastoreConfig <a name="NasDatastoreConfig" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.nas_datastore.NasDatastoreConfig;

NasDatastoreConfig.builder()
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
    .hostSystemIds(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .remoteHosts(java.util.List<java.lang.String>)
    .remotePath(java.lang.String)
//  .accessMode(java.lang.String)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .datastoreClusterId(java.lang.String)
//  .folder(java.lang.String)
//  .id(java.lang.String)
//  .securityType(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.hostSystemIds">hostSystemIds</a></code> | <code>java.util.List<java.lang.String></code> | The managed object IDs of the hosts to mount the datastore on. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the datastore. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remoteHosts">remoteHosts</a></code> | <code>java.util.List<java.lang.String></code> | The hostnames or IP addresses of the remote server or servers. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remotePath">remotePath</a></code> | <code>java.lang.String</code> | The remote path of the mount point. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | Access mode for the mount point. Can be one of readOnly or readWrite. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.datastoreClusterId">datastoreClusterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datastore cluster to place the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | The path to the datastore folder to put the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#id NasDatastore#id}. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.securityType">securityType</a></code> | <code>java.lang.String</code> | The security type to use. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of NAS volume. Can be one of NFS (to denote v3) or NFS41 (to denote NFS v4.1). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostSystemIds`<sup>Required</sup> <a name="hostSystemIds" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.hostSystemIds"></a>

```java
public java.util.List<java.lang.String> getHostSystemIds();
```

- *Type:* java.util.List<java.lang.String>

The managed object IDs of the hosts to mount the datastore on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#host_system_ids NasDatastore#host_system_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#name NasDatastore#name}

---

##### `remoteHosts`<sup>Required</sup> <a name="remoteHosts" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remoteHosts"></a>

```java
public java.util.List<java.lang.String> getRemoteHosts();
```

- *Type:* java.util.List<java.lang.String>

The hostnames or IP addresses of the remote server or servers.

Only one element should be present for NFS v3 but multiple can be present for NFS v4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#remote_hosts NasDatastore#remote_hosts}

---

##### `remotePath`<sup>Required</sup> <a name="remotePath" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remotePath"></a>

```java
public java.lang.String getRemotePath();
```

- *Type:* java.lang.String

The remote path of the mount point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#remote_path NasDatastore#remote_path}

---

##### `accessMode`<sup>Optional</sup> <a name="accessMode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

Access mode for the mount point. Can be one of readOnly or readWrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#access_mode NasDatastore#access_mode}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#custom_attributes NasDatastore#custom_attributes}

---

##### `datastoreClusterId`<sup>Optional</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.datastoreClusterId"></a>

```java
public java.lang.String getDatastoreClusterId();
```

- *Type:* java.lang.String

The managed object ID of the datastore cluster to place the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#datastore_cluster_id NasDatastore#datastore_cluster_id}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The path to the datastore folder to put the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#folder NasDatastore#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#id NasDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityType`<sup>Optional</sup> <a name="securityType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.securityType"></a>

```java
public java.lang.String getSecurityType();
```

- *Type:* java.lang.String

The security type to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#security_type NasDatastore#security_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#tags NasDatastore#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of NAS volume. Can be one of NFS (to denote v3) or NFS41 (to denote NFS v4.1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/nas_datastore#type NasDatastore#type}

---



