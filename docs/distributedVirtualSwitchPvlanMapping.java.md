# `distributedVirtualSwitchPvlanMapping` Submodule <a name="`distributedVirtualSwitchPvlanMapping` Submodule" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DistributedVirtualSwitchPvlanMappingA <a name="DistributedVirtualSwitchPvlanMappingA" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping vsphere_distributed_virtual_switch_pvlan_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch_pvlan_mapping.DistributedVirtualSwitchPvlanMappingA;

DistributedVirtualSwitchPvlanMappingA.Builder.create(Construct scope, java.lang.String id)
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
    .distributedVirtualSwitchId(java.lang.String)
    .primaryVlanId(java.lang.Number)
    .pvlanType(java.lang.String)
    .secondaryVlanId(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.distributedVirtualSwitchId">distributedVirtualSwitchId</a></code> | <code>java.lang.String</code> | The ID of the distributed virtual switch to attach this mapping to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.primaryVlanId">primaryVlanId</a></code> | <code>java.lang.Number</code> | The primary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.pvlanType">pvlanType</a></code> | <code>java.lang.String</code> | The private VLAN type. Valid values are promiscuous, community and isolated. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.secondaryVlanId">secondaryVlanId</a></code> | <code>java.lang.Number</code> | The secondary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#id DistributedVirtualSwitchPvlanMappingA#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `distributedVirtualSwitchId`<sup>Required</sup> <a name="distributedVirtualSwitchId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.distributedVirtualSwitchId"></a>

- *Type:* java.lang.String

The ID of the distributed virtual switch to attach this mapping to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#distributed_virtual_switch_id DistributedVirtualSwitchPvlanMappingA#distributed_virtual_switch_id}

---

##### `primaryVlanId`<sup>Required</sup> <a name="primaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.primaryVlanId"></a>

- *Type:* java.lang.Number

The primary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#primary_vlan_id DistributedVirtualSwitchPvlanMappingA#primary_vlan_id}

---

##### `pvlanType`<sup>Required</sup> <a name="pvlanType" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.pvlanType"></a>

- *Type:* java.lang.String

The private VLAN type. Valid values are promiscuous, community and isolated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#pvlan_type DistributedVirtualSwitchPvlanMappingA#pvlan_type}

---

##### `secondaryVlanId`<sup>Required</sup> <a name="secondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.secondaryVlanId"></a>

- *Type:* java.lang.Number

The secondary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#secondary_vlan_id DistributedVirtualSwitchPvlanMappingA#secondary_vlan_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#id DistributedVirtualSwitchPvlanMappingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DistributedVirtualSwitchPvlanMappingA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch_pvlan_mapping.DistributedVirtualSwitchPvlanMappingA;

DistributedVirtualSwitchPvlanMappingA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch_pvlan_mapping.DistributedVirtualSwitchPvlanMappingA;

DistributedVirtualSwitchPvlanMappingA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch_pvlan_mapping.DistributedVirtualSwitchPvlanMappingA;

DistributedVirtualSwitchPvlanMappingA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch_pvlan_mapping.DistributedVirtualSwitchPvlanMappingA;

DistributedVirtualSwitchPvlanMappingA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DistributedVirtualSwitchPvlanMappingA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DistributedVirtualSwitchPvlanMappingA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DistributedVirtualSwitchPvlanMappingA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DistributedVirtualSwitchPvlanMappingA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DistributedVirtualSwitchPvlanMappingA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.distributedVirtualSwitchIdInput">distributedVirtualSwitchIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.primaryVlanIdInput">primaryVlanIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.pvlanTypeInput">pvlanTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.secondaryVlanIdInput">secondaryVlanIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.distributedVirtualSwitchId">distributedVirtualSwitchId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.primaryVlanId">primaryVlanId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.pvlanType">pvlanType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.secondaryVlanId">secondaryVlanId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `distributedVirtualSwitchIdInput`<sup>Optional</sup> <a name="distributedVirtualSwitchIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.distributedVirtualSwitchIdInput"></a>

```java
public java.lang.String getDistributedVirtualSwitchIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `primaryVlanIdInput`<sup>Optional</sup> <a name="primaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.primaryVlanIdInput"></a>

```java
public java.lang.Number getPrimaryVlanIdInput();
```

- *Type:* java.lang.Number

---

##### `pvlanTypeInput`<sup>Optional</sup> <a name="pvlanTypeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.pvlanTypeInput"></a>

```java
public java.lang.String getPvlanTypeInput();
```

- *Type:* java.lang.String

---

##### `secondaryVlanIdInput`<sup>Optional</sup> <a name="secondaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.secondaryVlanIdInput"></a>

```java
public java.lang.Number getSecondaryVlanIdInput();
```

- *Type:* java.lang.Number

---

##### `distributedVirtualSwitchId`<sup>Required</sup> <a name="distributedVirtualSwitchId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.distributedVirtualSwitchId"></a>

```java
public java.lang.String getDistributedVirtualSwitchId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `primaryVlanId`<sup>Required</sup> <a name="primaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.primaryVlanId"></a>

```java
public java.lang.Number getPrimaryVlanId();
```

- *Type:* java.lang.Number

---

##### `pvlanType`<sup>Required</sup> <a name="pvlanType" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.pvlanType"></a>

```java
public java.lang.String getPvlanType();
```

- *Type:* java.lang.String

---

##### `secondaryVlanId`<sup>Required</sup> <a name="secondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.secondaryVlanId"></a>

```java
public java.lang.Number getSecondaryVlanId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DistributedVirtualSwitchPvlanMappingAConfig <a name="DistributedVirtualSwitchPvlanMappingAConfig" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.distributed_virtual_switch_pvlan_mapping.DistributedVirtualSwitchPvlanMappingAConfig;

DistributedVirtualSwitchPvlanMappingAConfig.builder()
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
    .distributedVirtualSwitchId(java.lang.String)
    .primaryVlanId(java.lang.Number)
    .pvlanType(java.lang.String)
    .secondaryVlanId(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.distributedVirtualSwitchId">distributedVirtualSwitchId</a></code> | <code>java.lang.String</code> | The ID of the distributed virtual switch to attach this mapping to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.primaryVlanId">primaryVlanId</a></code> | <code>java.lang.Number</code> | The primary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.pvlanType">pvlanType</a></code> | <code>java.lang.String</code> | The private VLAN type. Valid values are promiscuous, community and isolated. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.secondaryVlanId">secondaryVlanId</a></code> | <code>java.lang.Number</code> | The secondary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#id DistributedVirtualSwitchPvlanMappingA#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `distributedVirtualSwitchId`<sup>Required</sup> <a name="distributedVirtualSwitchId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.distributedVirtualSwitchId"></a>

```java
public java.lang.String getDistributedVirtualSwitchId();
```

- *Type:* java.lang.String

The ID of the distributed virtual switch to attach this mapping to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#distributed_virtual_switch_id DistributedVirtualSwitchPvlanMappingA#distributed_virtual_switch_id}

---

##### `primaryVlanId`<sup>Required</sup> <a name="primaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.primaryVlanId"></a>

```java
public java.lang.Number getPrimaryVlanId();
```

- *Type:* java.lang.Number

The primary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#primary_vlan_id DistributedVirtualSwitchPvlanMappingA#primary_vlan_id}

---

##### `pvlanType`<sup>Required</sup> <a name="pvlanType" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.pvlanType"></a>

```java
public java.lang.String getPvlanType();
```

- *Type:* java.lang.String

The private VLAN type. Valid values are promiscuous, community and isolated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#pvlan_type DistributedVirtualSwitchPvlanMappingA#pvlan_type}

---

##### `secondaryVlanId`<sup>Required</sup> <a name="secondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.secondaryVlanId"></a>

```java
public java.lang.Number getSecondaryVlanId();
```

- *Type:* java.lang.Number

The secondary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#secondary_vlan_id DistributedVirtualSwitchPvlanMappingA#secondary_vlan_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#id DistributedVirtualSwitchPvlanMappingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



