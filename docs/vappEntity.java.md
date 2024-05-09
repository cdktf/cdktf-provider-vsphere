# `vappEntity` Submodule <a name="`vappEntity` Submodule" id="@cdktf/provider-vsphere.vappEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VappEntity <a name="VappEntity" id="@cdktf/provider-vsphere.vappEntity.VappEntity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity vsphere_vapp_entity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vapp_entity.VappEntity;

VappEntity.Builder.create(Construct scope, java.lang.String id)
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
    .containerId(java.lang.String)
    .targetId(java.lang.String)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .startAction(java.lang.String)
//  .startDelay(java.lang.Number)
//  .startOrder(java.lang.Number)
//  .stopAction(java.lang.String)
//  .stopDelay(java.lang.Number)
//  .tags(java.util.List<java.lang.String>)
//  .waitForGuest(java.lang.Boolean)
//  .waitForGuest(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.containerId">containerId</a></code> | <code>java.lang.String</code> | Managed object ID of the vApp container the entity is a member of. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.targetId">targetId</a></code> | <code>java.lang.String</code> | Managed object ID of the entity to power on or power off. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#id VappEntity#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.startAction">startAction</a></code> | <code>java.lang.String</code> | How to start the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.startDelay">startDelay</a></code> | <code>java.lang.Number</code> | Delay in seconds before continuing with the next entity in the order of entities to be started. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.startOrder">startOrder</a></code> | <code>java.lang.Number</code> | Order to start and stop target in vApp. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.stopAction">stopAction</a></code> | <code>java.lang.String</code> | Defines the stop action for the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.stopDelay">stopDelay</a></code> | <code>java.lang.Number</code> | Delay in seconds before continuing with the next entity in the order of entities to be stopped. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.waitForGuest">waitForGuest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.containerId"></a>

- *Type:* java.lang.String

Managed object ID of the vApp container the entity is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#container_id VappEntity#container_id}

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.targetId"></a>

- *Type:* java.lang.String

Managed object ID of the entity to power on or power off.

This can be a virtual machine or a vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#target_id VappEntity#target_id}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.customAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#custom_attributes VappEntity#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#id VappEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startAction`<sup>Optional</sup> <a name="startAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.startAction"></a>

- *Type:* java.lang.String

How to start the entity.

Valid settings are none or powerOn. If set to none, then the entity does not participate in auto-start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#start_action VappEntity#start_action}

---

##### `startDelay`<sup>Optional</sup> <a name="startDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.startDelay"></a>

- *Type:* java.lang.Number

Delay in seconds before continuing with the next entity in the order of entities to be started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#start_delay VappEntity#start_delay}

---

##### `startOrder`<sup>Optional</sup> <a name="startOrder" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.startOrder"></a>

- *Type:* java.lang.Number

Order to start and stop target in vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#start_order VappEntity#start_order}

---

##### `stopAction`<sup>Optional</sup> <a name="stopAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.stopAction"></a>

- *Type:* java.lang.String

Defines the stop action for the entity.

Can be set to none, powerOff, guestShutdown, or suspend. If set to none, then the entity does not participate in auto-stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#stop_action VappEntity#stop_action}

---

##### `stopDelay`<sup>Optional</sup> <a name="stopDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.stopDelay"></a>

- *Type:* java.lang.Number

Delay in seconds before continuing with the next entity in the order of entities to be stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#stop_delay VappEntity#stop_delay}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#tags VappEntity#tags}

---

##### `waitForGuest`<sup>Optional</sup> <a name="waitForGuest" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.waitForGuest"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay.

This property has no effect for vApps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#wait_for_guest VappEntity#wait_for_guest}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartAction">resetStartAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartDelay">resetStartDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartOrder">resetStartOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopAction">resetStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopDelay">resetStopDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetWaitForGuest">resetWaitForGuest</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.vappEntity.VappEntity.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetId"></a>

```java
public void resetId()
```

##### `resetStartAction` <a name="resetStartAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartAction"></a>

```java
public void resetStartAction()
```

##### `resetStartDelay` <a name="resetStartDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartDelay"></a>

```java
public void resetStartDelay()
```

##### `resetStartOrder` <a name="resetStartOrder" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartOrder"></a>

```java
public void resetStartOrder()
```

##### `resetStopAction` <a name="resetStopAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopAction"></a>

```java
public void resetStopAction()
```

##### `resetStopDelay` <a name="resetStopDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopDelay"></a>

```java
public void resetStopDelay()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetTags"></a>

```java
public void resetTags()
```

##### `resetWaitForGuest` <a name="resetWaitForGuest" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetWaitForGuest"></a>

```java
public void resetWaitForGuest()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VappEntity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vapp_entity.VappEntity;

VappEntity.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vapp_entity.VappEntity;

VappEntity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vapp_entity.VappEntity;

VappEntity.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vapp_entity.VappEntity;

VappEntity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VappEntity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VappEntity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VappEntity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VappEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VappEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerIdInput">containerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributesInput">customAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startActionInput">startActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelayInput">startDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrderInput">startOrderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopActionInput">stopActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelayInput">stopDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuestInput">waitForGuestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerId">containerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startAction">startAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelay">startDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrder">startOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopAction">stopAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelay">stopDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuest">waitForGuest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerIdInput"></a>

```java
public java.lang.String getContainerIdInput();
```

- *Type:* java.lang.String

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `startActionInput`<sup>Optional</sup> <a name="startActionInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startActionInput"></a>

```java
public java.lang.String getStartActionInput();
```

- *Type:* java.lang.String

---

##### `startDelayInput`<sup>Optional</sup> <a name="startDelayInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelayInput"></a>

```java
public java.lang.Number getStartDelayInput();
```

- *Type:* java.lang.Number

---

##### `startOrderInput`<sup>Optional</sup> <a name="startOrderInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrderInput"></a>

```java
public java.lang.Number getStartOrderInput();
```

- *Type:* java.lang.Number

---

##### `stopActionInput`<sup>Optional</sup> <a name="stopActionInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopActionInput"></a>

```java
public java.lang.String getStopActionInput();
```

- *Type:* java.lang.String

---

##### `stopDelayInput`<sup>Optional</sup> <a name="stopDelayInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelayInput"></a>

```java
public java.lang.Number getStopDelayInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `waitForGuestInput`<sup>Optional</sup> <a name="waitForGuestInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuestInput"></a>

```java
public java.lang.Object getWaitForGuestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `startAction`<sup>Required</sup> <a name="startAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startAction"></a>

```java
public java.lang.String getStartAction();
```

- *Type:* java.lang.String

---

##### `startDelay`<sup>Required</sup> <a name="startDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelay"></a>

```java
public java.lang.Number getStartDelay();
```

- *Type:* java.lang.Number

---

##### `startOrder`<sup>Required</sup> <a name="startOrder" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrder"></a>

```java
public java.lang.Number getStartOrder();
```

- *Type:* java.lang.Number

---

##### `stopAction`<sup>Required</sup> <a name="stopAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopAction"></a>

```java
public java.lang.String getStopAction();
```

- *Type:* java.lang.String

---

##### `stopDelay`<sup>Required</sup> <a name="stopDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelay"></a>

```java
public java.lang.Number getStopDelay();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `waitForGuest`<sup>Required</sup> <a name="waitForGuest" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuest"></a>

```java
public java.lang.Object getWaitForGuest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VappEntityConfig <a name="VappEntityConfig" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.vapp_entity.VappEntityConfig;

VappEntityConfig.builder()
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
    .containerId(java.lang.String)
    .targetId(java.lang.String)
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .startAction(java.lang.String)
//  .startDelay(java.lang.Number)
//  .startOrder(java.lang.Number)
//  .stopAction(java.lang.String)
//  .stopDelay(java.lang.Number)
//  .tags(java.util.List<java.lang.String>)
//  .waitForGuest(java.lang.Boolean)
//  .waitForGuest(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.containerId">containerId</a></code> | <code>java.lang.String</code> | Managed object ID of the vApp container the entity is a member of. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.targetId">targetId</a></code> | <code>java.lang.String</code> | Managed object ID of the entity to power on or power off. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#id VappEntity#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startAction">startAction</a></code> | <code>java.lang.String</code> | How to start the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startDelay">startDelay</a></code> | <code>java.lang.Number</code> | Delay in seconds before continuing with the next entity in the order of entities to be started. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startOrder">startOrder</a></code> | <code>java.lang.Number</code> | Order to start and stop target in vApp. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopAction">stopAction</a></code> | <code>java.lang.String</code> | Defines the stop action for the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopDelay">stopDelay</a></code> | <code>java.lang.Number</code> | Delay in seconds before continuing with the next entity in the order of entities to be stopped. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.waitForGuest">waitForGuest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

Managed object ID of the vApp container the entity is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#container_id VappEntity#container_id}

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

Managed object ID of the entity to power on or power off.

This can be a virtual machine or a vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#target_id VappEntity#target_id}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#custom_attributes VappEntity#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#id VappEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startAction`<sup>Optional</sup> <a name="startAction" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startAction"></a>

```java
public java.lang.String getStartAction();
```

- *Type:* java.lang.String

How to start the entity.

Valid settings are none or powerOn. If set to none, then the entity does not participate in auto-start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#start_action VappEntity#start_action}

---

##### `startDelay`<sup>Optional</sup> <a name="startDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startDelay"></a>

```java
public java.lang.Number getStartDelay();
```

- *Type:* java.lang.Number

Delay in seconds before continuing with the next entity in the order of entities to be started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#start_delay VappEntity#start_delay}

---

##### `startOrder`<sup>Optional</sup> <a name="startOrder" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startOrder"></a>

```java
public java.lang.Number getStartOrder();
```

- *Type:* java.lang.Number

Order to start and stop target in vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#start_order VappEntity#start_order}

---

##### `stopAction`<sup>Optional</sup> <a name="stopAction" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopAction"></a>

```java
public java.lang.String getStopAction();
```

- *Type:* java.lang.String

Defines the stop action for the entity.

Can be set to none, powerOff, guestShutdown, or suspend. If set to none, then the entity does not participate in auto-stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#stop_action VappEntity#stop_action}

---

##### `stopDelay`<sup>Optional</sup> <a name="stopDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopDelay"></a>

```java
public java.lang.Number getStopDelay();
```

- *Type:* java.lang.Number

Delay in seconds before continuing with the next entity in the order of entities to be stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#stop_delay VappEntity#stop_delay}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#tags VappEntity#tags}

---

##### `waitForGuest`<sup>Optional</sup> <a name="waitForGuest" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.waitForGuest"></a>

```java
public java.lang.Object getWaitForGuest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay.

This property has no effect for vApps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#wait_for_guest VappEntity#wait_for_guest}

---



