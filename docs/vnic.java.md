# `vsphere_vnic`

Refer to the Terraform Registory for docs: [`vsphere_vnic`](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic).

# `vnic` Submodule <a name="`vnic` Submodule" id="@cdktf/provider-vsphere.vnic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Vnic <a name="Vnic" id="@cdktf/provider-vsphere.vnic.Vnic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic vsphere_vnic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vnic.Vnic;

Vnic.Builder.create(Construct scope, java.lang.String id)
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
    .host(java.lang.String)
//  .distributedPortGroup(java.lang.String)
//  .distributedSwitchPort(java.lang.String)
//  .id(java.lang.String)
//  .ipv4(VnicIpv4)
//  .ipv6(VnicIpv6)
//  .mac(java.lang.String)
//  .mtu(java.lang.Number)
//  .netstack(java.lang.String)
//  .portgroup(java.lang.String)
//  .services(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | ESX host the interface belongs to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.distributedPortGroup">distributedPortGroup</a></code> | <code>java.lang.String</code> | Key of the distributed portgroup the nic will connect to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.distributedSwitchPort">distributedSwitchPort</a></code> | <code>java.lang.String</code> | UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#id Vnic#id}. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | ipv4 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.mac">mac</a></code> | <code>java.lang.String</code> | MAC address of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.mtu">mtu</a></code> | <code>java.lang.Number</code> | MTU of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.netstack">netstack</a></code> | <code>java.lang.String</code> | TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.portgroup">portgroup</a></code> | <code>java.lang.String</code> | portgroup to attach the nic to. Do not set if you set distributed_switch_port. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.services">services</a></code> | <code>java.util.List<java.lang.String></code> | Enabled services setting for this interface. Current possible values are 'vmotion', 'management' and 'vsan'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.host"></a>

- *Type:* java.lang.String

ESX host the interface belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#host Vnic#host}

---

##### `distributedPortGroup`<sup>Optional</sup> <a name="distributedPortGroup" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.distributedPortGroup"></a>

- *Type:* java.lang.String

Key of the distributed portgroup the nic will connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#distributed_port_group Vnic#distributed_port_group}

---

##### `distributedSwitchPort`<sup>Optional</sup> <a name="distributedSwitchPort" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.distributedSwitchPort"></a>

- *Type:* java.lang.String

UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#distributed_switch_port Vnic#distributed_switch_port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#id Vnic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.ipv4"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

ipv4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#ipv4 Vnic#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.ipv6"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#ipv6 Vnic#ipv6}

---

##### `mac`<sup>Optional</sup> <a name="mac" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.mac"></a>

- *Type:* java.lang.String

MAC address of the interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#mac Vnic#mac}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.mtu"></a>

- *Type:* java.lang.Number

MTU of the interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#mtu Vnic#mtu}

---

##### `netstack`<sup>Optional</sup> <a name="netstack" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.netstack"></a>

- *Type:* java.lang.String

TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#netstack Vnic#netstack}

---

##### `portgroup`<sup>Optional</sup> <a name="portgroup" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.portgroup"></a>

- *Type:* java.lang.String

portgroup to attach the nic to. Do not set if you set distributed_switch_port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#portgroup Vnic#portgroup}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.services"></a>

- *Type:* java.util.List<java.lang.String>

Enabled services setting for this interface. Current possible values are 'vmotion', 'management' and 'vsan'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#services Vnic#services}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.putIpv4">putIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.putIpv6">putIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetDistributedPortGroup">resetDistributedPortGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetDistributedSwitchPort">resetDistributedSwitchPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetIpv6">resetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetMac">resetMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetNetstack">resetNetstack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetPortgroup">resetPortgroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetServices">resetServices</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vnic.Vnic.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.vnic.Vnic.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.vnic.Vnic.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.vnic.Vnic.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIpv4` <a name="putIpv4" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv4"></a>

```java
public void putIpv4(VnicIpv4 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv6"></a>

```java
public void putIpv6(VnicIpv6 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---

##### `resetDistributedPortGroup` <a name="resetDistributedPortGroup" id="@cdktf/provider-vsphere.vnic.Vnic.resetDistributedPortGroup"></a>

```java
public void resetDistributedPortGroup()
```

##### `resetDistributedSwitchPort` <a name="resetDistributedSwitchPort" id="@cdktf/provider-vsphere.vnic.Vnic.resetDistributedSwitchPort"></a>

```java
public void resetDistributedSwitchPort()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.vnic.Vnic.resetId"></a>

```java
public void resetId()
```

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-vsphere.vnic.Vnic.resetIpv4"></a>

```java
public void resetIpv4()
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-vsphere.vnic.Vnic.resetIpv6"></a>

```java
public void resetIpv6()
```

##### `resetMac` <a name="resetMac" id="@cdktf/provider-vsphere.vnic.Vnic.resetMac"></a>

```java
public void resetMac()
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-vsphere.vnic.Vnic.resetMtu"></a>

```java
public void resetMtu()
```

##### `resetNetstack` <a name="resetNetstack" id="@cdktf/provider-vsphere.vnic.Vnic.resetNetstack"></a>

```java
public void resetNetstack()
```

##### `resetPortgroup` <a name="resetPortgroup" id="@cdktf/provider-vsphere.vnic.Vnic.resetPortgroup"></a>

```java
public void resetPortgroup()
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-vsphere.vnic.Vnic.resetServices"></a>

```java
public void resetServices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.vnic.Vnic.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vnic.Vnic;

Vnic.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vnic.Vnic.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vnic.Vnic;

Vnic.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vnic.Vnic;

Vnic.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference">VnicIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference">VnicIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroupInput">distributedPortGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPortInput">distributedSwitchPortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv4Input">ipv4Input</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv6Input">ipv6Input</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.macInput">macInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mtuInput">mtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.netstackInput">netstackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.portgroupInput">portgroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.servicesInput">servicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroup">distributedPortGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPort">distributedSwitchPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mac">mac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.netstack">netstack</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.portgroup">portgroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.vnic.Vnic.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.vnic.Vnic.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vnic.Vnic.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.vnic.Vnic.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vnic.Vnic.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vnic.Vnic.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vnic.Vnic.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vnic.Vnic.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vnic.Vnic.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vnic.Vnic.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vnic.Vnic.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv4"></a>

```java
public VnicIpv4OutputReference getIpv4();
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference">VnicIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv6"></a>

```java
public VnicIpv6OutputReference getIpv6();
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference">VnicIpv6OutputReference</a>

---

##### `distributedPortGroupInput`<sup>Optional</sup> <a name="distributedPortGroupInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroupInput"></a>

```java
public java.lang.String getDistributedPortGroupInput();
```

- *Type:* java.lang.String

---

##### `distributedSwitchPortInput`<sup>Optional</sup> <a name="distributedSwitchPortInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPortInput"></a>

```java
public java.lang.String getDistributedSwitchPortInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv4Input"></a>

```java
public VnicIpv4 getIpv4Input();
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv6Input"></a>

```java
public VnicIpv6 getIpv6Input();
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---

##### `macInput`<sup>Optional</sup> <a name="macInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.macInput"></a>

```java
public java.lang.String getMacInput();
```

- *Type:* java.lang.String

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.mtuInput"></a>

```java
public java.lang.Number getMtuInput();
```

- *Type:* java.lang.Number

---

##### `netstackInput`<sup>Optional</sup> <a name="netstackInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.netstackInput"></a>

```java
public java.lang.String getNetstackInput();
```

- *Type:* java.lang.String

---

##### `portgroupInput`<sup>Optional</sup> <a name="portgroupInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.portgroupInput"></a>

```java
public java.lang.String getPortgroupInput();
```

- *Type:* java.lang.String

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.servicesInput"></a>

```java
public java.util.List<java.lang.String> getServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `distributedPortGroup`<sup>Required</sup> <a name="distributedPortGroup" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroup"></a>

```java
public java.lang.String getDistributedPortGroup();
```

- *Type:* java.lang.String

---

##### `distributedSwitchPort`<sup>Required</sup> <a name="distributedSwitchPort" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPort"></a>

```java
public java.lang.String getDistributedSwitchPort();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vsphere.vnic.Vnic.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.Vnic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-vsphere.vnic.Vnic.property.mac"></a>

```java
public java.lang.String getMac();
```

- *Type:* java.lang.String

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-vsphere.vnic.Vnic.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `netstack`<sup>Required</sup> <a name="netstack" id="@cdktf/provider-vsphere.vnic.Vnic.property.netstack"></a>

```java
public java.lang.String getNetstack();
```

- *Type:* java.lang.String

---

##### `portgroup`<sup>Required</sup> <a name="portgroup" id="@cdktf/provider-vsphere.vnic.Vnic.property.portgroup"></a>

```java
public java.lang.String getPortgroup();
```

- *Type:* java.lang.String

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-vsphere.vnic.Vnic.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.vnic.Vnic.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VnicConfig <a name="VnicConfig" id="@cdktf/provider-vsphere.vnic.VnicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vnic.VnicConfig;

VnicConfig.builder()
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
    .host(java.lang.String)
//  .distributedPortGroup(java.lang.String)
//  .distributedSwitchPort(java.lang.String)
//  .id(java.lang.String)
//  .ipv4(VnicIpv4)
//  .ipv6(VnicIpv6)
//  .mac(java.lang.String)
//  .mtu(java.lang.Number)
//  .netstack(java.lang.String)
//  .portgroup(java.lang.String)
//  .services(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.host">host</a></code> | <code>java.lang.String</code> | ESX host the interface belongs to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedPortGroup">distributedPortGroup</a></code> | <code>java.lang.String</code> | Key of the distributed portgroup the nic will connect to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedSwitchPort">distributedSwitchPort</a></code> | <code>java.lang.String</code> | UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#id Vnic#id}. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | ipv4 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.mac">mac</a></code> | <code>java.lang.String</code> | MAC address of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | MTU of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.netstack">netstack</a></code> | <code>java.lang.String</code> | TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.portgroup">portgroup</a></code> | <code>java.lang.String</code> | portgroup to attach the nic to. Do not set if you set distributed_switch_port. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | Enabled services setting for this interface. Current possible values are 'vmotion', 'management' and 'vsan'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

ESX host the interface belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#host Vnic#host}

---

##### `distributedPortGroup`<sup>Optional</sup> <a name="distributedPortGroup" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedPortGroup"></a>

```java
public java.lang.String getDistributedPortGroup();
```

- *Type:* java.lang.String

Key of the distributed portgroup the nic will connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#distributed_port_group Vnic#distributed_port_group}

---

##### `distributedSwitchPort`<sup>Optional</sup> <a name="distributedSwitchPort" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedSwitchPort"></a>

```java
public java.lang.String getDistributedSwitchPort();
```

- *Type:* java.lang.String

UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#distributed_switch_port Vnic#distributed_switch_port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#id Vnic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv4"></a>

```java
public VnicIpv4 getIpv4();
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

ipv4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#ipv4 Vnic#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv6"></a>

```java
public VnicIpv6 getIpv6();
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#ipv6 Vnic#ipv6}

---

##### `mac`<sup>Optional</sup> <a name="mac" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.mac"></a>

```java
public java.lang.String getMac();
```

- *Type:* java.lang.String

MAC address of the interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#mac Vnic#mac}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

MTU of the interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#mtu Vnic#mtu}

---

##### `netstack`<sup>Optional</sup> <a name="netstack" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.netstack"></a>

```java
public java.lang.String getNetstack();
```

- *Type:* java.lang.String

TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#netstack Vnic#netstack}

---

##### `portgroup`<sup>Optional</sup> <a name="portgroup" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.portgroup"></a>

```java
public java.lang.String getPortgroup();
```

- *Type:* java.lang.String

portgroup to attach the nic to. Do not set if you set distributed_switch_port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#portgroup Vnic#portgroup}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

Enabled services setting for this interface. Current possible values are 'vmotion', 'management' and 'vsan'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#services Vnic#services}

---

### VnicIpv4 <a name="VnicIpv4" id="@cdktf/provider-vsphere.vnic.VnicIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicIpv4.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vnic.VnicIpv4;

VnicIpv4.builder()
//  .dhcp(java.lang.Boolean)
//  .dhcp(IResolvable)
//  .gw(java.lang.String)
//  .ip(java.lang.String)
//  .netmask(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.dhcp">dhcp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use DHCP to configure the interface's IPv4 stack. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.gw">gw</a></code> | <code>java.lang.String</code> | IP address of the default gateway, if DHCP is not set. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.ip">ip</a></code> | <code>java.lang.String</code> | address of the interface, if DHCP is not set. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.netmask">netmask</a></code> | <code>java.lang.String</code> | netmask of the interface, if DHCP is not set. |

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.dhcp"></a>

```java
public java.lang.Object getDhcp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use DHCP to configure the interface's IPv4 stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#dhcp Vnic#dhcp}

---

##### `gw`<sup>Optional</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.gw"></a>

```java
public java.lang.String getGw();
```

- *Type:* java.lang.String

IP address of the default gateway, if DHCP is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#gw Vnic#gw}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

address of the interface, if DHCP is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#ip Vnic#ip}

---

##### `netmask`<sup>Optional</sup> <a name="netmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

netmask of the interface, if DHCP is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#netmask Vnic#netmask}

---

### VnicIpv6 <a name="VnicIpv6" id="@cdktf/provider-vsphere.vnic.VnicIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicIpv6.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vnic.VnicIpv6;

VnicIpv6.builder()
//  .addresses(java.util.List<java.lang.String>)
//  .autoconfig(java.lang.Boolean)
//  .autoconfig(IResolvable)
//  .dhcp(java.lang.Boolean)
//  .dhcp(IResolvable)
//  .gw(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | List of IPv6 addresses. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.autoconfig">autoconfig</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use IPv6 Autoconfiguration (RFC2462). |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.dhcp">dhcp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use DHCP to configure the interface's IPv4 stack. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.gw">gw</a></code> | <code>java.lang.String</code> | IP address of the default gateway, if DHCP or autoconfig is not set. |

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

List of IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#addresses Vnic#addresses}

---

##### `autoconfig`<sup>Optional</sup> <a name="autoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.autoconfig"></a>

```java
public java.lang.Object getAutoconfig();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use IPv6 Autoconfiguration (RFC2462).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#autoconfig Vnic#autoconfig}

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.dhcp"></a>

```java
public java.lang.Object getDhcp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use DHCP to configure the interface's IPv4 stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#dhcp Vnic#dhcp}

---

##### `gw`<sup>Optional</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.gw"></a>

```java
public java.lang.String getGw();
```

- *Type:* java.lang.String

IP address of the default gateway, if DHCP or autoconfig is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/vnic#gw Vnic#gw}

---

## Classes <a name="Classes" id="Classes"></a>

### VnicIpv4OutputReference <a name="VnicIpv4OutputReference" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vnic.VnicIpv4OutputReference;

new VnicIpv4OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetDhcp">resetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetGw">resetGw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetNetmask">resetNetmask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDhcp` <a name="resetDhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetDhcp"></a>

```java
public void resetDhcp()
```

##### `resetGw` <a name="resetGw" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetGw"></a>

```java
public void resetGw()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetNetmask` <a name="resetNetmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetNetmask"></a>

```java
public void resetNetmask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcpInput">dhcpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gwInput">gwInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmaskInput">netmaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcp">dhcp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gw">gw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmask">netmask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dhcpInput`<sup>Optional</sup> <a name="dhcpInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcpInput"></a>

```java
public java.lang.Object getDhcpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gwInput`<sup>Optional</sup> <a name="gwInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gwInput"></a>

```java
public java.lang.String getGwInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmaskInput"></a>

```java
public java.lang.String getNetmaskInput();
```

- *Type:* java.lang.String

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcp"></a>

```java
public java.lang.Object getDhcp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gw`<sup>Required</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gw"></a>

```java
public java.lang.String getGw();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.internalValue"></a>

```java
public VnicIpv4 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---


### VnicIpv6OutputReference <a name="VnicIpv6OutputReference" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vnic.VnicIpv6OutputReference;

new VnicIpv6OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAddresses">resetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAutoconfig">resetAutoconfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetDhcp">resetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetGw">resetGw</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddresses` <a name="resetAddresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAddresses"></a>

```java
public void resetAddresses()
```

##### `resetAutoconfig` <a name="resetAutoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAutoconfig"></a>

```java
public void resetAutoconfig()
```

##### `resetDhcp` <a name="resetDhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetDhcp"></a>

```java
public void resetDhcp()
```

##### `resetGw` <a name="resetGw" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetGw"></a>

```java
public void resetGw()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addressesInput">addressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfigInput">autoconfigInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcpInput">dhcpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gwInput">gwInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfig">autoconfig</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcp">dhcp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gw">gw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addressesInput"></a>

```java
public java.util.List<java.lang.String> getAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoconfigInput`<sup>Optional</sup> <a name="autoconfigInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfigInput"></a>

```java
public java.lang.Object getAutoconfigInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dhcpInput`<sup>Optional</sup> <a name="dhcpInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcpInput"></a>

```java
public java.lang.Object getDhcpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gwInput`<sup>Optional</sup> <a name="gwInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gwInput"></a>

```java
public java.lang.String getGwInput();
```

- *Type:* java.lang.String

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoconfig`<sup>Required</sup> <a name="autoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfig"></a>

```java
public java.lang.Object getAutoconfig();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcp"></a>

```java
public java.lang.Object getDhcp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gw`<sup>Required</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gw"></a>

```java
public java.lang.String getGw();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.internalValue"></a>

```java
public VnicIpv6 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---



