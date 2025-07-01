# `host` Submodule <a name="`host` Submodule" id="@cdktf/provider-vsphere.host"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Host <a name="Host" id="@cdktf/provider-vsphere.host.Host"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host vsphere_host}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.host.Host.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host.Host;

Host.Builder.create(Construct scope, java.lang.String id)
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
    .hostname(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .cluster(java.lang.String)
//  .clusterManaged(java.lang.Boolean)
//  .clusterManaged(IResolvable)
//  .connected(java.lang.Boolean)
//  .connected(IResolvable)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .datacenter(java.lang.String)
//  .force(java.lang.Boolean)
//  .force(IResolvable)
//  .id(java.lang.String)
//  .license(java.lang.String)
//  .lockdown(java.lang.String)
//  .maintenance(java.lang.Boolean)
//  .maintenance(IResolvable)
//  .services(IResolvable)
//  .services(java.util.List<HostServices>)
//  .tags(java.util.List<java.lang.String>)
//  .thumbprint(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | FQDN or IP address of the host. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Password of the administration account of the host. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Username of the administration account of the host. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | ID of the vSphere cluster the host will belong to. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.clusterManaged">clusterManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Must be set if host is a member of a managed compute_cluster resource. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.connected">connected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set the state of the host. If set to false then the host will be asked to disconnect. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.datacenter">datacenter</a></code> | <code>java.lang.String</code> | ID of the vSphere datacenter the host will belong to. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.force">force</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Force add the host to the vSphere inventory even if it's already managed by a different vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#id Host#id}. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.license">license</a></code> | <code>java.lang.String</code> | License key that will be applied to this host. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.lockdown">lockdown</a></code> | <code>java.lang.String</code> | Set the host's lockdown status. Default is disabled. Valid options are 'disabled', 'normal', 'strict'. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.maintenance">maintenance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set the host's maintenance mode. Default is false. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.services">services</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.host.HostServices">HostServices</a>></code> | services block. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | Host's certificate SHA-1 thumbprint. If not set then the CA that signed the host's certificate must be trusted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

FQDN or IP address of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#hostname Host#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Password of the administration account of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#password Host#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Username of the administration account of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#username Host#username}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

ID of the vSphere cluster the host will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#cluster Host#cluster}

---

##### `clusterManaged`<sup>Optional</sup> <a name="clusterManaged" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.clusterManaged"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Must be set if host is a member of a managed compute_cluster resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#cluster_managed Host#cluster_managed}

---

##### `connected`<sup>Optional</sup> <a name="connected" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.connected"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set the state of the host. If set to false then the host will be asked to disconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#connected Host#connected}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.customAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#custom_attributes Host#custom_attributes}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.datacenter"></a>

- *Type:* java.lang.String

ID of the vSphere datacenter the host will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#datacenter Host#datacenter}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.force"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Force add the host to the vSphere inventory even if it's already managed by a different vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#force Host#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#id Host#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license`<sup>Optional</sup> <a name="license" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.license"></a>

- *Type:* java.lang.String

License key that will be applied to this host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#license Host#license}

---

##### `lockdown`<sup>Optional</sup> <a name="lockdown" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.lockdown"></a>

- *Type:* java.lang.String

Set the host's lockdown status. Default is disabled. Valid options are 'disabled', 'normal', 'strict'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#lockdown Host#lockdown}

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.maintenance"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set the host's maintenance mode. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#maintenance Host#maintenance}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.services"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.host.HostServices">HostServices</a>>

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#services Host#services}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#tags Host#tags}

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.thumbprint"></a>

- *Type:* java.lang.String

Host's certificate SHA-1 thumbprint. If not set then the CA that signed the host's certificate must be trusted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#thumbprint Host#thumbprint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.host.Host.putServices">putServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetClusterManaged">resetClusterManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetConnected">resetConnected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetLicense">resetLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetLockdown">resetLockdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetMaintenance">resetMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetServices">resetServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetThumbprint">resetThumbprint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.host.Host.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.host.Host.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.host.Host.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.host.Host.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.host.Host.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.host.Host.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.host.Host.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.host.Host.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.host.Host.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.host.Host.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.host.Host.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.host.Host.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.host.Host.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.host.Host.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.host.Host.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.host.Host.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.host.Host.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.host.Host.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.host.Host.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.host.Host.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.host.Host.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.host.Host.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.host.Host.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.host.Host.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.host.Host.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.host.Host.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.host.Host.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.host.Host.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.host.Host.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.host.Host.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServices` <a name="putServices" id="@cdktf/provider-vsphere.host.Host.putServices"></a>

```java
public void putServices(IResolvable OR java.util.List<HostServices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.host.Host.putServices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.host.HostServices">HostServices</a>>

---

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-vsphere.host.Host.resetCluster"></a>

```java
public void resetCluster()
```

##### `resetClusterManaged` <a name="resetClusterManaged" id="@cdktf/provider-vsphere.host.Host.resetClusterManaged"></a>

```java
public void resetClusterManaged()
```

##### `resetConnected` <a name="resetConnected" id="@cdktf/provider-vsphere.host.Host.resetConnected"></a>

```java
public void resetConnected()
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.host.Host.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-vsphere.host.Host.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetForce` <a name="resetForce" id="@cdktf/provider-vsphere.host.Host.resetForce"></a>

```java
public void resetForce()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.host.Host.resetId"></a>

```java
public void resetId()
```

##### `resetLicense` <a name="resetLicense" id="@cdktf/provider-vsphere.host.Host.resetLicense"></a>

```java
public void resetLicense()
```

##### `resetLockdown` <a name="resetLockdown" id="@cdktf/provider-vsphere.host.Host.resetLockdown"></a>

```java
public void resetLockdown()
```

##### `resetMaintenance` <a name="resetMaintenance" id="@cdktf/provider-vsphere.host.Host.resetMaintenance"></a>

```java
public void resetMaintenance()
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-vsphere.host.Host.resetServices"></a>

```java
public void resetServices()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.host.Host.resetTags"></a>

```java
public void resetTags()
```

##### `resetThumbprint` <a name="resetThumbprint" id="@cdktf/provider-vsphere.host.Host.resetThumbprint"></a>

```java
public void resetThumbprint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Host resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.host.Host.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host.Host;

Host.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.host.Host.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.host.Host.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host.Host;

Host.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.host.Host.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.host.Host.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host.Host;

Host.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.host.Host.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.host.Host.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host.Host;

Host.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Host.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Host resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.host.Host.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.host.Host.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Host to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.host.Host.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Host that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.host.Host.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Host to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.services">services</a></code> | <code><a href="#@cdktf/provider-vsphere.host.HostServicesList">HostServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.clusterManagedInput">clusterManagedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.connectedInput">connectedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.customAttributesInput">customAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.forceInput">forceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.licenseInput">licenseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.lockdownInput">lockdownInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.maintenanceInput">maintenanceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.servicesInput">servicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.host.HostServices">HostServices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.thumbprintInput">thumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.clusterManaged">clusterManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.connected">connected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.force">force</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.license">license</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.lockdown">lockdown</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.maintenance">maintenance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.host.Host.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.host.Host.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.host.Host.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.host.Host.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.host.Host.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.host.Host.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.host.Host.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.host.Host.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.host.Host.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.host.Host.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.host.Host.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.host.Host.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.host.Host.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.host.Host.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-vsphere.host.Host.property.services"></a>

```java
public HostServicesList getServices();
```

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostServicesList">HostServicesList</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-vsphere.host.Host.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `clusterManagedInput`<sup>Optional</sup> <a name="clusterManagedInput" id="@cdktf/provider-vsphere.host.Host.property.clusterManagedInput"></a>

```java
public java.lang.Object getClusterManagedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectedInput`<sup>Optional</sup> <a name="connectedInput" id="@cdktf/provider-vsphere.host.Host.property.connectedInput"></a>

```java
public java.lang.Object getConnectedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.host.Host.property.customAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-vsphere.host.Host.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktf/provider-vsphere.host.Host.property.forceInput"></a>

```java
public java.lang.Object getForceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-vsphere.host.Host.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.host.Host.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseInput`<sup>Optional</sup> <a name="licenseInput" id="@cdktf/provider-vsphere.host.Host.property.licenseInput"></a>

```java
public java.lang.String getLicenseInput();
```

- *Type:* java.lang.String

---

##### `lockdownInput`<sup>Optional</sup> <a name="lockdownInput" id="@cdktf/provider-vsphere.host.Host.property.lockdownInput"></a>

```java
public java.lang.String getLockdownInput();
```

- *Type:* java.lang.String

---

##### `maintenanceInput`<sup>Optional</sup> <a name="maintenanceInput" id="@cdktf/provider-vsphere.host.Host.property.maintenanceInput"></a>

```java
public java.lang.Object getMaintenanceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vsphere.host.Host.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-vsphere.host.Host.property.servicesInput"></a>

```java
public java.lang.Object getServicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.host.HostServices">HostServices</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.host.Host.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-vsphere.host.Host.property.thumbprintInput"></a>

```java
public java.lang.String getThumbprintInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vsphere.host.Host.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-vsphere.host.Host.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `clusterManaged`<sup>Required</sup> <a name="clusterManaged" id="@cdktf/provider-vsphere.host.Host.property.clusterManaged"></a>

```java
public java.lang.Object getClusterManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connected`<sup>Required</sup> <a name="connected" id="@cdktf/provider-vsphere.host.Host.property.connected"></a>

```java
public java.lang.Object getConnected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.host.Host.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-vsphere.host.Host.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-vsphere.host.Host.property.force"></a>

```java
public java.lang.Object getForce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-vsphere.host.Host.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.host.Host.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-vsphere.host.Host.property.license"></a>

```java
public java.lang.String getLicense();
```

- *Type:* java.lang.String

---

##### `lockdown`<sup>Required</sup> <a name="lockdown" id="@cdktf/provider-vsphere.host.Host.property.lockdown"></a>

```java
public java.lang.String getLockdown();
```

- *Type:* java.lang.String

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="@cdktf/provider-vsphere.host.Host.property.maintenance"></a>

```java
public java.lang.Object getMaintenance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.host.Host.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.host.Host.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-vsphere.host.Host.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vsphere.host.Host.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.host.Host.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HostConfig <a name="HostConfig" id="@cdktf/provider-vsphere.host.HostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.host.HostConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host.HostConfig;

HostConfig.builder()
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
    .hostname(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .cluster(java.lang.String)
//  .clusterManaged(java.lang.Boolean)
//  .clusterManaged(IResolvable)
//  .connected(java.lang.Boolean)
//  .connected(IResolvable)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .datacenter(java.lang.String)
//  .force(java.lang.Boolean)
//  .force(IResolvable)
//  .id(java.lang.String)
//  .license(java.lang.String)
//  .lockdown(java.lang.String)
//  .maintenance(java.lang.Boolean)
//  .maintenance(IResolvable)
//  .services(IResolvable)
//  .services(java.util.List<HostServices>)
//  .tags(java.util.List<java.lang.String>)
//  .thumbprint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | FQDN or IP address of the host. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.password">password</a></code> | <code>java.lang.String</code> | Password of the administration account of the host. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.username">username</a></code> | <code>java.lang.String</code> | Username of the administration account of the host. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | ID of the vSphere cluster the host will belong to. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.clusterManaged">clusterManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Must be set if host is a member of a managed compute_cluster resource. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.connected">connected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set the state of the host. If set to false then the host will be asked to disconnect. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | ID of the vSphere datacenter the host will belong to. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.force">force</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Force add the host to the vSphere inventory even if it's already managed by a different vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#id Host#id}. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.license">license</a></code> | <code>java.lang.String</code> | License key that will be applied to this host. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.lockdown">lockdown</a></code> | <code>java.lang.String</code> | Set the host's lockdown status. Default is disabled. Valid options are 'disabled', 'normal', 'strict'. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.maintenance">maintenance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set the host's maintenance mode. Default is false. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.services">services</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.host.HostServices">HostServices</a>></code> | services block. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | Host's certificate SHA-1 thumbprint. If not set then the CA that signed the host's certificate must be trusted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.host.HostConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.host.HostConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.host.HostConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.host.HostConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.host.HostConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.host.HostConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.host.HostConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-vsphere.host.HostConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

FQDN or IP address of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#hostname Host#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.host.HostConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password of the administration account of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#password Host#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vsphere.host.HostConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username of the administration account of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#username Host#username}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-vsphere.host.HostConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

ID of the vSphere cluster the host will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#cluster Host#cluster}

---

##### `clusterManaged`<sup>Optional</sup> <a name="clusterManaged" id="@cdktf/provider-vsphere.host.HostConfig.property.clusterManaged"></a>

```java
public java.lang.Object getClusterManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Must be set if host is a member of a managed compute_cluster resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#cluster_managed Host#cluster_managed}

---

##### `connected`<sup>Optional</sup> <a name="connected" id="@cdktf/provider-vsphere.host.HostConfig.property.connected"></a>

```java
public java.lang.Object getConnected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set the state of the host. If set to false then the host will be asked to disconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#connected Host#connected}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.host.HostConfig.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#custom_attributes Host#custom_attributes}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-vsphere.host.HostConfig.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

ID of the vSphere datacenter the host will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#datacenter Host#datacenter}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-vsphere.host.HostConfig.property.force"></a>

```java
public java.lang.Object getForce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Force add the host to the vSphere inventory even if it's already managed by a different vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#force Host#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.host.HostConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#id Host#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license`<sup>Optional</sup> <a name="license" id="@cdktf/provider-vsphere.host.HostConfig.property.license"></a>

```java
public java.lang.String getLicense();
```

- *Type:* java.lang.String

License key that will be applied to this host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#license Host#license}

---

##### `lockdown`<sup>Optional</sup> <a name="lockdown" id="@cdktf/provider-vsphere.host.HostConfig.property.lockdown"></a>

```java
public java.lang.String getLockdown();
```

- *Type:* java.lang.String

Set the host's lockdown status. Default is disabled. Valid options are 'disabled', 'normal', 'strict'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#lockdown Host#lockdown}

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktf/provider-vsphere.host.HostConfig.property.maintenance"></a>

```java
public java.lang.Object getMaintenance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set the host's maintenance mode. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#maintenance Host#maintenance}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-vsphere.host.HostConfig.property.services"></a>

```java
public java.lang.Object getServices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.host.HostServices">HostServices</a>>

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#services Host#services}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.host.HostConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#tags Host#tags}

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-vsphere.host.HostConfig.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

Host's certificate SHA-1 thumbprint. If not set then the CA that signed the host's certificate must be trusted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#thumbprint Host#thumbprint}

---

### HostServices <a name="HostServices" id="@cdktf/provider-vsphere.host.HostServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.host.HostServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host.HostServices;

HostServices.builder()
//  .ntpd(HostServicesNtpd)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServices.property.ntpd">ntpd</a></code> | <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a></code> | ntpd block. |

---

##### `ntpd`<sup>Optional</sup> <a name="ntpd" id="@cdktf/provider-vsphere.host.HostServices.property.ntpd"></a>

```java
public HostServicesNtpd getNtpd();
```

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a>

ntpd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#ntpd Host#ntpd}

---

### HostServicesNtpd <a name="HostServicesNtpd" id="@cdktf/provider-vsphere.host.HostServicesNtpd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.host.HostServicesNtpd.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host.HostServicesNtpd;

HostServicesNtpd.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .ntpServers(java.util.List<java.lang.String>)
//  .policy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpd.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the NTP service is enabled. Default is false. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpd.property.ntpServers">ntpServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#ntp_servers Host#ntp_servers}. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpd.property.policy">policy</a></code> | <code>java.lang.String</code> | The policy for the NTP service. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vsphere.host.HostServicesNtpd.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the NTP service is enabled. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#enabled Host#enabled}

---

##### `ntpServers`<sup>Optional</sup> <a name="ntpServers" id="@cdktf/provider-vsphere.host.HostServicesNtpd.property.ntpServers"></a>

```java
public java.util.List<java.lang.String> getNtpServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#ntp_servers Host#ntp_servers}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-vsphere.host.HostServicesNtpd.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

The policy for the NTP service.

Valid values are 'Start and stop with host', 'Start and stop manually', 'Start and stop with port usage'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/host#policy Host#policy}

---

## Classes <a name="Classes" id="Classes"></a>

### HostServicesList <a name="HostServicesList" id="@cdktf/provider-vsphere.host.HostServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.host.HostServicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host.HostServicesList;

new HostServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.host.HostServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.host.HostServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.host.HostServicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.host.HostServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.host.HostServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.host.HostServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.host.HostServicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.host.HostServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.host.HostServicesList.get"></a>

```java
public HostServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.host.HostServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.host.HostServices">HostServices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.host.HostServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.host.HostServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.host.HostServicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.host.HostServices">HostServices</a>>

---


### HostServicesNtpdOutputReference <a name="HostServicesNtpdOutputReference" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host.HostServicesNtpdOutputReference;

new HostServicesNtpdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resetNtpServers">resetNtpServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetNtpServers` <a name="resetNtpServers" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resetNtpServers"></a>

```java
public void resetNtpServers()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resetPolicy"></a>

```java
public void resetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.ntpServersInput">ntpServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.ntpServers">ntpServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ntpServersInput`<sup>Optional</sup> <a name="ntpServersInput" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.ntpServersInput"></a>

```java
public java.util.List<java.lang.String> getNtpServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ntpServers`<sup>Required</sup> <a name="ntpServers" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.ntpServers"></a>

```java
public java.util.List<java.lang.String> getNtpServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.internalValue"></a>

```java
public HostServicesNtpd getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a>

---


### HostServicesOutputReference <a name="HostServicesOutputReference" id="@cdktf/provider-vsphere.host.HostServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host.HostServicesOutputReference;

new HostServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.putNtpd">putNtpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.resetNtpd">resetNtpd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNtpd` <a name="putNtpd" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.putNtpd"></a>

```java
public void putNtpd(HostServicesNtpd value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.putNtpd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a>

---

##### `resetNtpd` <a name="resetNtpd" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.resetNtpd"></a>

```java
public void resetNtpd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.property.ntpd">ntpd</a></code> | <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference">HostServicesNtpdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.property.ntpdInput">ntpdInput</a></code> | <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.host.HostServices">HostServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ntpd`<sup>Required</sup> <a name="ntpd" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.property.ntpd"></a>

```java
public HostServicesNtpdOutputReference getNtpd();
```

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference">HostServicesNtpdOutputReference</a>

---

##### `ntpdInput`<sup>Optional</sup> <a name="ntpdInput" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.property.ntpdInput"></a>

```java
public HostServicesNtpd getNtpdInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.host.HostServices">HostServices</a>

---



