# `dataVsphereNetwork` Submodule <a name="`dataVsphereNetwork` Submodule" id="@cdktf/provider-vsphere.dataVsphereNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereNetwork <a name="DataVsphereNetwork" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network vsphere_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_network.DataVsphereNetwork;

DataVsphereNetwork.Builder.create(Construct scope, java.lang.String id)
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
//  .datacenterId(java.lang.String)
//  .distributedVirtualSwitchUuid(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataVsphereNetworkFilter>)
//  .id(java.lang.String)
//  .retryInterval(java.lang.Number)
//  .retryTimeout(java.lang.Number)
//  .vpcId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name or path of the network. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datacenter the network is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.distributedVirtualSwitchUuid">distributedVirtualSwitchUuid</a></code> | <code>java.lang.String</code> | Id of the distributed virtual switch of which the port group is a part of. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#id DataVsphereNetwork#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.retryInterval">retryInterval</a></code> | <code>java.lang.Number</code> | Retry interval (in milliseconds) when probing the network. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.retryTimeout">retryTimeout</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) if network is not present yet. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Id of the VPC which the network belongs to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name or path of the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#name DataVsphereNetwork#name}

---

##### `datacenterId`<sup>Optional</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

The managed object ID of the datacenter the network is in.

This is required if the supplied path is not an absolute path containing a datacenter and there are multiple datacenters in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#datacenter_id DataVsphereNetwork#datacenter_id}

---

##### `distributedVirtualSwitchUuid`<sup>Optional</sup> <a name="distributedVirtualSwitchUuid" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.distributedVirtualSwitchUuid"></a>

- *Type:* java.lang.String

Id of the distributed virtual switch of which the port group is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#distributed_virtual_switch_uuid DataVsphereNetwork#distributed_virtual_switch_uuid}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#filter DataVsphereNetwork#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#id DataVsphereNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retryInterval`<sup>Optional</sup> <a name="retryInterval" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.retryInterval"></a>

- *Type:* java.lang.Number

Retry interval (in milliseconds) when probing the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#retry_interval DataVsphereNetwork#retry_interval}

---

##### `retryTimeout`<sup>Optional</sup> <a name="retryTimeout" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.retryTimeout"></a>

- *Type:* java.lang.Number

Timeout (in seconds) if network is not present yet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#retry_timeout DataVsphereNetwork#retry_timeout}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Id of the VPC which the network belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#vpc_id DataVsphereNetwork#vpc_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetDatacenterId">resetDatacenterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetDistributedVirtualSwitchUuid">resetDistributedVirtualSwitchUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetRetryInterval">resetRetryInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetRetryTimeout">resetRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataVsphereNetworkFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>>

---

##### `resetDatacenterId` <a name="resetDatacenterId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetDatacenterId"></a>

```java
public void resetDatacenterId()
```

##### `resetDistributedVirtualSwitchUuid` <a name="resetDistributedVirtualSwitchUuid" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetDistributedVirtualSwitchUuid"></a>

```java
public void resetDistributedVirtualSwitchUuid()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetId"></a>

```java
public void resetId()
```

##### `resetRetryInterval` <a name="resetRetryInterval" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetRetryInterval"></a>

```java
public void resetRetryInterval()
```

##### `resetRetryTimeout` <a name="resetRetryTimeout" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetRetryTimeout"></a>

```java
public void resetRetryTimeout()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetVpcId"></a>

```java
public void resetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_network.DataVsphereNetwork;

DataVsphereNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_network.DataVsphereNetwork;

DataVsphereNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_network.DataVsphereNetwork;

DataVsphereNetwork.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_network.DataVsphereNetwork;

DataVsphereNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVsphereNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVsphereNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVsphereNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVsphereNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList">DataVsphereNetworkFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.distributedVirtualSwitchUuidInput">distributedVirtualSwitchUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryIntervalInput">retryIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryTimeoutInput">retryTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.distributedVirtualSwitchUuid">distributedVirtualSwitchUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryInterval">retryInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryTimeout">retryTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.filter"></a>

```java
public DataVsphereNetworkFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList">DataVsphereNetworkFilterList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `distributedVirtualSwitchUuidInput`<sup>Optional</sup> <a name="distributedVirtualSwitchUuidInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.distributedVirtualSwitchUuidInput"></a>

```java
public java.lang.String getDistributedVirtualSwitchUuidInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `retryIntervalInput`<sup>Optional</sup> <a name="retryIntervalInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryIntervalInput"></a>

```java
public java.lang.Number getRetryIntervalInput();
```

- *Type:* java.lang.Number

---

##### `retryTimeoutInput`<sup>Optional</sup> <a name="retryTimeoutInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryTimeoutInput"></a>

```java
public java.lang.Number getRetryTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `distributedVirtualSwitchUuid`<sup>Required</sup> <a name="distributedVirtualSwitchUuid" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.distributedVirtualSwitchUuid"></a>

```java
public java.lang.String getDistributedVirtualSwitchUuid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `retryInterval`<sup>Required</sup> <a name="retryInterval" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryInterval"></a>

```java
public java.lang.Number getRetryInterval();
```

- *Type:* java.lang.Number

---

##### `retryTimeout`<sup>Required</sup> <a name="retryTimeout" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryTimeout"></a>

```java
public java.lang.Number getRetryTimeout();
```

- *Type:* java.lang.Number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereNetworkConfig <a name="DataVsphereNetworkConfig" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_network.DataVsphereNetworkConfig;

DataVsphereNetworkConfig.builder()
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
//  .datacenterId(java.lang.String)
//  .distributedVirtualSwitchUuid(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataVsphereNetworkFilter>)
//  .id(java.lang.String)
//  .retryInterval(java.lang.Number)
//  .retryTimeout(java.lang.Number)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name or path of the network. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datacenter the network is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.distributedVirtualSwitchUuid">distributedVirtualSwitchUuid</a></code> | <code>java.lang.String</code> | Id of the distributed virtual switch of which the port group is a part of. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#id DataVsphereNetwork#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.retryInterval">retryInterval</a></code> | <code>java.lang.Number</code> | Retry interval (in milliseconds) when probing the network. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.retryTimeout">retryTimeout</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) if network is not present yet. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Id of the VPC which the network belongs to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name or path of the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#name DataVsphereNetwork#name}

---

##### `datacenterId`<sup>Optional</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

The managed object ID of the datacenter the network is in.

This is required if the supplied path is not an absolute path containing a datacenter and there are multiple datacenters in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#datacenter_id DataVsphereNetwork#datacenter_id}

---

##### `distributedVirtualSwitchUuid`<sup>Optional</sup> <a name="distributedVirtualSwitchUuid" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.distributedVirtualSwitchUuid"></a>

```java
public java.lang.String getDistributedVirtualSwitchUuid();
```

- *Type:* java.lang.String

Id of the distributed virtual switch of which the port group is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#distributed_virtual_switch_uuid DataVsphereNetwork#distributed_virtual_switch_uuid}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#filter DataVsphereNetwork#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#id DataVsphereNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retryInterval`<sup>Optional</sup> <a name="retryInterval" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.retryInterval"></a>

```java
public java.lang.Number getRetryInterval();
```

- *Type:* java.lang.Number

Retry interval (in milliseconds) when probing the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#retry_interval DataVsphereNetwork#retry_interval}

---

##### `retryTimeout`<sup>Optional</sup> <a name="retryTimeout" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.retryTimeout"></a>

```java
public java.lang.Number getRetryTimeout();
```

- *Type:* java.lang.Number

Timeout (in seconds) if network is not present yet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#retry_timeout DataVsphereNetwork#retry_timeout}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Id of the VPC which the network belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#vpc_id DataVsphereNetwork#vpc_id}

---

### DataVsphereNetworkFilter <a name="DataVsphereNetworkFilter" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_network.DataVsphereNetworkFilter;

DataVsphereNetworkFilter.builder()
//  .networkType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter.property.networkType">networkType</a></code> | <code>java.lang.String</code> | The type of the network (e.g., Network, DistributedVirtualPortgroup, OpaqueNetwork). |

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

The type of the network (e.g., Network, DistributedVirtualPortgroup, OpaqueNetwork).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/data-sources/network#network_type DataVsphereNetwork#network_type}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVsphereNetworkFilterList <a name="DataVsphereNetworkFilterList" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_network.DataVsphereNetworkFilterList;

new DataVsphereNetworkFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.get"></a>

```java
public DataVsphereNetworkFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>>

---


### DataVsphereNetworkFilterOutputReference <a name="DataVsphereNetworkFilterOutputReference" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_network.DataVsphereNetworkFilterOutputReference;

new DataVsphereNetworkFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.resetNetworkType">resetNetworkType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.resetNetworkType"></a>

```java
public void resetNetworkType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>

---



