# `guestOsCustomization` Submodule <a name="`guestOsCustomization` Submodule" id="@cdktf/provider-vsphere.guestOsCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuestOsCustomization <a name="GuestOsCustomization" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization vsphere_guest_os_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomization;

GuestOsCustomization.Builder.create(Construct scope, java.lang.String id)
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
    .spec(GuestOsCustomizationSpec)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the customization specification is the unique identifier per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of customization specification: One among: Windows, Linux. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description for the customization specification. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#id GuestOsCustomization#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the customization specification is the unique identifier per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#name GuestOsCustomization#name}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#spec GuestOsCustomization#spec}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of customization specification: One among: Windows, Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#type GuestOsCustomization#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description for the customization specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#description GuestOsCustomization#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#id GuestOsCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec"></a>

```java
public void putSpec(GuestOsCustomizationSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GuestOsCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomization;

GuestOsCustomization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomization;

GuestOsCustomization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomization;

GuestOsCustomization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomization;

GuestOsCustomization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GuestOsCustomization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GuestOsCustomization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GuestOsCustomization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GuestOsCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GuestOsCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.changeVersion">changeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference">GuestOsCustomizationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `changeVersion`<sup>Required</sup> <a name="changeVersion" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.changeVersion"></a>

```java
public java.lang.String getChangeVersion();
```

- *Type:* java.lang.String

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lastUpdateTime"></a>

```java
public java.lang.String getLastUpdateTime();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.spec"></a>

```java
public GuestOsCustomizationSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference">GuestOsCustomizationSpecOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.specInput"></a>

```java
public GuestOsCustomizationSpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GuestOsCustomizationConfig <a name="GuestOsCustomizationConfig" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomizationConfig;

GuestOsCustomizationConfig.builder()
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
    .spec(GuestOsCustomizationSpec)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the customization specification is the unique identifier per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of customization specification: One among: Windows, Linux. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description for the customization specification. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#id GuestOsCustomization#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the customization specification is the unique identifier per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#name GuestOsCustomization#name}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.spec"></a>

```java
public GuestOsCustomizationSpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#spec GuestOsCustomization#spec}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of customization specification: One among: Windows, Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#type GuestOsCustomization#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description for the customization specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#description GuestOsCustomization#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#id GuestOsCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GuestOsCustomizationSpec <a name="GuestOsCustomizationSpec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomizationSpec;

GuestOsCustomizationSpec.builder()
//  .dnsServerList(java.util.List<java.lang.String>)
//  .dnsSuffixList(java.util.List<java.lang.String>)
//  .ipv4Gateway(java.lang.String)
//  .ipv6Gateway(java.lang.String)
//  .linuxOptions(GuestOsCustomizationSpecLinuxOptions)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<GuestOsCustomizationSpecNetworkInterface>)
//  .windowsOptions(GuestOsCustomizationSpecWindowsOptions)
//  .windowsSysprepText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsServerList">dnsServerList</a></code> | <code>java.util.List<java.lang.String></code> | The list of DNS servers for a virtual network adapter with a static IP address. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsSuffixList">dnsSuffixList</a></code> | <code>java.util.List<java.lang.String></code> | A list of DNS search domains to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv4Gateway">ipv4Gateway</a></code> | <code>java.lang.String</code> | The IPv4 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv6Gateway">ipv6Gateway</a></code> | <code>java.lang.String</code> | The IPv6 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.linuxOptions">linuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a></code> | linux_options block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsOptions">windowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a></code> | windows_options block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsSysprepText">windowsSysprepText</a></code> | <code>java.lang.String</code> | Use this option to specify a windows sysprep file directly. |

---

##### `dnsServerList`<sup>Optional</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsServerList"></a>

```java
public java.util.List<java.lang.String> getDnsServerList();
```

- *Type:* java.util.List<java.lang.String>

The list of DNS servers for a virtual network adapter with a static IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#dns_server_list GuestOsCustomization#dns_server_list}

---

##### `dnsSuffixList`<sup>Optional</sup> <a name="dnsSuffixList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsSuffixList"></a>

```java
public java.util.List<java.lang.String> getDnsSuffixList();
```

- *Type:* java.util.List<java.lang.String>

A list of DNS search domains to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#dns_suffix_list GuestOsCustomization#dns_suffix_list}

---

##### `ipv4Gateway`<sup>Optional</sup> <a name="ipv4Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv4Gateway"></a>

```java
public java.lang.String getIpv4Gateway();
```

- *Type:* java.lang.String

The IPv4 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#ipv4_gateway GuestOsCustomization#ipv4_gateway}

---

##### `ipv6Gateway`<sup>Optional</sup> <a name="ipv6Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv6Gateway"></a>

```java
public java.lang.String getIpv6Gateway();
```

- *Type:* java.lang.String

The IPv6 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#ipv6_gateway GuestOsCustomization#ipv6_gateway}

---

##### `linuxOptions`<sup>Optional</sup> <a name="linuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.linuxOptions"></a>

```java
public GuestOsCustomizationSpecLinuxOptions getLinuxOptions();
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#linux_options GuestOsCustomization#linux_options}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.networkInterface"></a>

```java
public java.lang.Object getNetworkInterface();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#network_interface GuestOsCustomization#network_interface}

---

##### `windowsOptions`<sup>Optional</sup> <a name="windowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsOptions"></a>

```java
public GuestOsCustomizationSpecWindowsOptions getWindowsOptions();
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

windows_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#windows_options GuestOsCustomization#windows_options}

---

##### `windowsSysprepText`<sup>Optional</sup> <a name="windowsSysprepText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsSysprepText"></a>

```java
public java.lang.String getWindowsSysprepText();
```

- *Type:* java.lang.String

Use this option to specify a windows sysprep file directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#windows_sysprep_text GuestOsCustomization#windows_sysprep_text}

---

### GuestOsCustomizationSpecLinuxOptions <a name="GuestOsCustomizationSpecLinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomizationSpecLinuxOptions;

GuestOsCustomizationSpecLinuxOptions.builder()
    .domain(java.lang.String)
    .hostName(java.lang.String)
//  .hwClockUtc(java.lang.Boolean)
//  .hwClockUtc(IResolvable)
//  .scriptText(java.lang.String)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.domain">domain</a></code> | <code>java.lang.String</code> | The domain name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hostName">hostName</a></code> | <code>java.lang.String</code> | The hostname for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hwClockUtc">hwClockUtc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether or not the hardware clock should be in UTC or not. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.scriptText">scriptText</a></code> | <code>java.lang.String</code> | The customization script to run before and or after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The domain name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#domain GuestOsCustomization#domain}

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

The hostname for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#host_name GuestOsCustomization#host_name}

---

##### `hwClockUtc`<sup>Optional</sup> <a name="hwClockUtc" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hwClockUtc"></a>

```java
public java.lang.Object getHwClockUtc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether or not the hardware clock should be in UTC or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#hw_clock_utc GuestOsCustomization#hw_clock_utc}

---

##### `scriptText`<sup>Optional</sup> <a name="scriptText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.scriptText"></a>

```java
public java.lang.String getScriptText();
```

- *Type:* java.lang.String

The customization script to run before and or after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#script_text GuestOsCustomization#script_text}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#time_zone GuestOsCustomization#time_zone}

---

### GuestOsCustomizationSpecNetworkInterface <a name="GuestOsCustomizationSpecNetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomizationSpecNetworkInterface;

GuestOsCustomizationSpecNetworkInterface.builder()
//  .dnsDomain(java.lang.String)
//  .dnsServerList(java.util.List<java.lang.String>)
//  .ipv4Address(java.lang.String)
//  .ipv4Netmask(java.lang.Number)
//  .ipv6Address(java.lang.String)
//  .ipv6Netmask(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsDomain">dnsDomain</a></code> | <code>java.lang.String</code> | A DNS search domain to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsServerList">dnsServerList</a></code> | <code>java.util.List<java.lang.String></code> | Network-interface specific DNS settings for Windows operating systems. Ignored on Linux. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | The IPv4 address assigned to this network adapter. If left blank, DHCP is used. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Netmask">ipv4Netmask</a></code> | <code>java.lang.Number</code> | The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Netmask">ipv6Netmask</a></code> | <code>java.lang.Number</code> | The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected. |

---

##### `dnsDomain`<sup>Optional</sup> <a name="dnsDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsDomain"></a>

```java
public java.lang.String getDnsDomain();
```

- *Type:* java.lang.String

A DNS search domain to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#dns_domain GuestOsCustomization#dns_domain}

---

##### `dnsServerList`<sup>Optional</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsServerList"></a>

```java
public java.util.List<java.lang.String> getDnsServerList();
```

- *Type:* java.util.List<java.lang.String>

Network-interface specific DNS settings for Windows operating systems. Ignored on Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#dns_server_list GuestOsCustomization#dns_server_list}

---

##### `ipv4Address`<sup>Optional</sup> <a name="ipv4Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

The IPv4 address assigned to this network adapter. If left blank, DHCP is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#ipv4_address GuestOsCustomization#ipv4_address}

---

##### `ipv4Netmask`<sup>Optional</sup> <a name="ipv4Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Netmask"></a>

```java
public java.lang.Number getIpv4Netmask();
```

- *Type:* java.lang.Number

The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#ipv4_netmask GuestOsCustomization#ipv4_netmask}

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#ipv6_address GuestOsCustomization#ipv6_address}

---

##### `ipv6Netmask`<sup>Optional</sup> <a name="ipv6Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Netmask"></a>

```java
public java.lang.Number getIpv6Netmask();
```

- *Type:* java.lang.Number

The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#ipv6_netmask GuestOsCustomization#ipv6_netmask}

---

### GuestOsCustomizationSpecWindowsOptions <a name="GuestOsCustomizationSpecWindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomizationSpecWindowsOptions;

GuestOsCustomizationSpecWindowsOptions.builder()
    .computerName(java.lang.String)
//  .adminPassword(java.lang.String)
//  .autoLogon(java.lang.Boolean)
//  .autoLogon(IResolvable)
//  .autoLogonCount(java.lang.Number)
//  .domainAdminPassword(java.lang.String)
//  .domainAdminUser(java.lang.String)
//  .domainOu(java.lang.String)
//  .fullName(java.lang.String)
//  .joinDomain(java.lang.String)
//  .organizationName(java.lang.String)
//  .productKey(java.lang.String)
//  .runOnceCommandList(java.util.List<java.lang.String>)
//  .timeZone(java.lang.Number)
//  .workgroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.computerName">computerName</a></code> | <code>java.lang.String</code> | The host name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | The new administrator password for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogon">autoLogon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether or not the VM automatically logs on as Administrator. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogonCount">autoLogonCount</a></code> | <code>java.lang.Number</code> | Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminPassword">domainAdminPassword</a></code> | <code>java.lang.String</code> | The password of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminUser">domainAdminUser</a></code> | <code>java.lang.String</code> | The user account of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainOu">domainOu</a></code> | <code>java.lang.String</code> | The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.fullName">fullName</a></code> | <code>java.lang.String</code> | The full name of the user of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.joinDomain">joinDomain</a></code> | <code>java.lang.String</code> | The domain that the virtual machine should join. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | The organization name this virtual machine is being installed for. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.productKey">productKey</a></code> | <code>java.lang.String</code> | The product key for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.runOnceCommandList">runOnceCommandList</a></code> | <code>java.util.List<java.lang.String></code> | A list of commands to run at first user logon, after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.timeZone">timeZone</a></code> | <code>java.lang.Number</code> | The new time zone for the virtual machine. This is a sysprep-dictated timezone code. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.workgroup">workgroup</a></code> | <code>java.lang.String</code> | The workgroup for this virtual machine if not joining a domain. |

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

The host name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#computer_name GuestOsCustomization#computer_name}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

The new administrator password for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#admin_password GuestOsCustomization#admin_password}

---

##### `autoLogon`<sup>Optional</sup> <a name="autoLogon" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogon"></a>

```java
public java.lang.Object getAutoLogon();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether or not the VM automatically logs on as Administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#auto_logon GuestOsCustomization#auto_logon}

---

##### `autoLogonCount`<sup>Optional</sup> <a name="autoLogonCount" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogonCount"></a>

```java
public java.lang.Number getAutoLogonCount();
```

- *Type:* java.lang.Number

Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#auto_logon_count GuestOsCustomization#auto_logon_count}

---

##### `domainAdminPassword`<sup>Optional</sup> <a name="domainAdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminPassword"></a>

```java
public java.lang.String getDomainAdminPassword();
```

- *Type:* java.lang.String

The password of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#domain_admin_password GuestOsCustomization#domain_admin_password}

---

##### `domainAdminUser`<sup>Optional</sup> <a name="domainAdminUser" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminUser"></a>

```java
public java.lang.String getDomainAdminUser();
```

- *Type:* java.lang.String

The user account of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#domain_admin_user GuestOsCustomization#domain_admin_user}

---

##### `domainOu`<sup>Optional</sup> <a name="domainOu" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainOu"></a>

```java
public java.lang.String getDomainOu();
```

- *Type:* java.lang.String

The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#domain_ou GuestOsCustomization#domain_ou}

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

The full name of the user of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#full_name GuestOsCustomization#full_name}

---

##### `joinDomain`<sup>Optional</sup> <a name="joinDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.joinDomain"></a>

```java
public java.lang.String getJoinDomain();
```

- *Type:* java.lang.String

The domain that the virtual machine should join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#join_domain GuestOsCustomization#join_domain}

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

The organization name this virtual machine is being installed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#organization_name GuestOsCustomization#organization_name}

---

##### `productKey`<sup>Optional</sup> <a name="productKey" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.productKey"></a>

```java
public java.lang.String getProductKey();
```

- *Type:* java.lang.String

The product key for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#product_key GuestOsCustomization#product_key}

---

##### `runOnceCommandList`<sup>Optional</sup> <a name="runOnceCommandList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.runOnceCommandList"></a>

```java
public java.util.List<java.lang.String> getRunOnceCommandList();
```

- *Type:* java.util.List<java.lang.String>

A list of commands to run at first user logon, after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#run_once_command_list GuestOsCustomization#run_once_command_list}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.timeZone"></a>

```java
public java.lang.Number getTimeZone();
```

- *Type:* java.lang.Number

The new time zone for the virtual machine. This is a sysprep-dictated timezone code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#time_zone GuestOsCustomization#time_zone}

---

##### `workgroup`<sup>Optional</sup> <a name="workgroup" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.workgroup"></a>

```java
public java.lang.String getWorkgroup();
```

- *Type:* java.lang.String

The workgroup for this virtual machine if not joining a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/guest_os_customization#workgroup GuestOsCustomization#workgroup}

---

## Classes <a name="Classes" id="Classes"></a>

### GuestOsCustomizationSpecLinuxOptionsOutputReference <a name="GuestOsCustomizationSpecLinuxOptionsOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomizationSpecLinuxOptionsOutputReference;

new GuestOsCustomizationSpecLinuxOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetHwClockUtc">resetHwClockUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetScriptText">resetScriptText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHwClockUtc` <a name="resetHwClockUtc" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetHwClockUtc"></a>

```java
public void resetHwClockUtc()
```

##### `resetScriptText` <a name="resetScriptText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetScriptText"></a>

```java
public void resetScriptText()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtcInput">hwClockUtcInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptTextInput">scriptTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc">hwClockUtc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText">scriptText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `hwClockUtcInput`<sup>Optional</sup> <a name="hwClockUtcInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtcInput"></a>

```java
public java.lang.Object getHwClockUtcInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scriptTextInput`<sup>Optional</sup> <a name="scriptTextInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptTextInput"></a>

```java
public java.lang.String getScriptTextInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `hwClockUtc`<sup>Required</sup> <a name="hwClockUtc" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc"></a>

```java
public java.lang.Object getHwClockUtc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scriptText`<sup>Required</sup> <a name="scriptText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText"></a>

```java
public java.lang.String getScriptText();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue"></a>

```java
public GuestOsCustomizationSpecLinuxOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

---


### GuestOsCustomizationSpecNetworkInterfaceList <a name="GuestOsCustomizationSpecNetworkInterfaceList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomizationSpecNetworkInterfaceList;

new GuestOsCustomizationSpecNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.get"></a>

```java
public GuestOsCustomizationSpecNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>>

---


### GuestOsCustomizationSpecNetworkInterfaceOutputReference <a name="GuestOsCustomizationSpecNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomizationSpecNetworkInterfaceOutputReference;

new GuestOsCustomizationSpecNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsDomain">resetDnsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsServerList">resetDnsServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Address">resetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Netmask">resetIpv4Netmask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Netmask">resetIpv6Netmask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsDomain` <a name="resetDnsDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsDomain"></a>

```java
public void resetDnsDomain()
```

##### `resetDnsServerList` <a name="resetDnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsServerList"></a>

```java
public void resetDnsServerList()
```

##### `resetIpv4Address` <a name="resetIpv4Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Address"></a>

```java
public void resetIpv4Address()
```

##### `resetIpv4Netmask` <a name="resetIpv4Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Netmask"></a>

```java
public void resetIpv4Netmask()
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```

##### `resetIpv6Netmask` <a name="resetIpv6Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Netmask"></a>

```java
public void resetIpv6Netmask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomainInput">dnsDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerListInput">dnsServerListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4AddressInput">ipv4AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4NetmaskInput">ipv4NetmaskInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6NetmaskInput">ipv6NetmaskInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain">dnsDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList">dnsServerList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask">ipv4Netmask</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask">ipv6Netmask</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsDomainInput`<sup>Optional</sup> <a name="dnsDomainInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomainInput"></a>

```java
public java.lang.String getDnsDomainInput();
```

- *Type:* java.lang.String

---

##### `dnsServerListInput`<sup>Optional</sup> <a name="dnsServerListInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerListInput"></a>

```java
public java.util.List<java.lang.String> getDnsServerListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv4AddressInput`<sup>Optional</sup> <a name="ipv4AddressInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4AddressInput"></a>

```java
public java.lang.String getIpv4AddressInput();
```

- *Type:* java.lang.String

---

##### `ipv4NetmaskInput`<sup>Optional</sup> <a name="ipv4NetmaskInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4NetmaskInput"></a>

```java
public java.lang.Number getIpv4NetmaskInput();
```

- *Type:* java.lang.Number

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `ipv6NetmaskInput`<sup>Optional</sup> <a name="ipv6NetmaskInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6NetmaskInput"></a>

```java
public java.lang.Number getIpv6NetmaskInput();
```

- *Type:* java.lang.Number

---

##### `dnsDomain`<sup>Required</sup> <a name="dnsDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain"></a>

```java
public java.lang.String getDnsDomain();
```

- *Type:* java.lang.String

---

##### `dnsServerList`<sup>Required</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList"></a>

```java
public java.util.List<java.lang.String> getDnsServerList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

---

##### `ipv4Netmask`<sup>Required</sup> <a name="ipv4Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask"></a>

```java
public java.lang.Number getIpv4Netmask();
```

- *Type:* java.lang.Number

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `ipv6Netmask`<sup>Required</sup> <a name="ipv6Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask"></a>

```java
public java.lang.Number getIpv6Netmask();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>

---


### GuestOsCustomizationSpecOutputReference <a name="GuestOsCustomizationSpecOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomizationSpecOutputReference;

new GuestOsCustomizationSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions">putLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions">putWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsServerList">resetDnsServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsSuffixList">resetDnsSuffixList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv4Gateway">resetIpv4Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv6Gateway">resetIpv6Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetLinuxOptions">resetLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsOptions">resetWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsSysprepText">resetWindowsSysprepText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLinuxOptions` <a name="putLinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions"></a>

```java
public void putLinuxOptions(GuestOsCustomizationSpecLinuxOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putNetworkInterface"></a>

```java
public void putNetworkInterface(IResolvable OR java.util.List<GuestOsCustomizationSpecNetworkInterface> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>>

---

##### `putWindowsOptions` <a name="putWindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions"></a>

```java
public void putWindowsOptions(GuestOsCustomizationSpecWindowsOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

---

##### `resetDnsServerList` <a name="resetDnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsServerList"></a>

```java
public void resetDnsServerList()
```

##### `resetDnsSuffixList` <a name="resetDnsSuffixList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsSuffixList"></a>

```java
public void resetDnsSuffixList()
```

##### `resetIpv4Gateway` <a name="resetIpv4Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv4Gateway"></a>

```java
public void resetIpv4Gateway()
```

##### `resetIpv6Gateway` <a name="resetIpv6Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv6Gateway"></a>

```java
public void resetIpv6Gateway()
```

##### `resetLinuxOptions` <a name="resetLinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetLinuxOptions"></a>

```java
public void resetLinuxOptions()
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetNetworkInterface"></a>

```java
public void resetNetworkInterface()
```

##### `resetWindowsOptions` <a name="resetWindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsOptions"></a>

```java
public void resetWindowsOptions()
```

##### `resetWindowsSysprepText` <a name="resetWindowsSysprepText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsSysprepText"></a>

```java
public void resetWindowsSysprepText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptions">linuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference">GuestOsCustomizationSpecLinuxOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList">GuestOsCustomizationSpecNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptions">windowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference">GuestOsCustomizationSpecWindowsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerListInput">dnsServerListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixListInput">dnsSuffixListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4GatewayInput">ipv4GatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6GatewayInput">ipv6GatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptionsInput">linuxOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptionsInput">windowsOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepTextInput">windowsSysprepTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerList">dnsServerList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixList">dnsSuffixList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4Gateway">ipv4Gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6Gateway">ipv6Gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepText">windowsSysprepText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `linuxOptions`<sup>Required</sup> <a name="linuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptions"></a>

```java
public GuestOsCustomizationSpecLinuxOptionsOutputReference getLinuxOptions();
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference">GuestOsCustomizationSpecLinuxOptionsOutputReference</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterface"></a>

```java
public GuestOsCustomizationSpecNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList">GuestOsCustomizationSpecNetworkInterfaceList</a>

---

##### `windowsOptions`<sup>Required</sup> <a name="windowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptions"></a>

```java
public GuestOsCustomizationSpecWindowsOptionsOutputReference getWindowsOptions();
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference">GuestOsCustomizationSpecWindowsOptionsOutputReference</a>

---

##### `dnsServerListInput`<sup>Optional</sup> <a name="dnsServerListInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerListInput"></a>

```java
public java.util.List<java.lang.String> getDnsServerListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsSuffixListInput`<sup>Optional</sup> <a name="dnsSuffixListInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixListInput"></a>

```java
public java.util.List<java.lang.String> getDnsSuffixListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv4GatewayInput`<sup>Optional</sup> <a name="ipv4GatewayInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4GatewayInput"></a>

```java
public java.lang.String getIpv4GatewayInput();
```

- *Type:* java.lang.String

---

##### `ipv6GatewayInput`<sup>Optional</sup> <a name="ipv6GatewayInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6GatewayInput"></a>

```java
public java.lang.String getIpv6GatewayInput();
```

- *Type:* java.lang.String

---

##### `linuxOptionsInput`<sup>Optional</sup> <a name="linuxOptionsInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptionsInput"></a>

```java
public GuestOsCustomizationSpecLinuxOptions getLinuxOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterfaceInput"></a>

```java
public java.lang.Object getNetworkInterfaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>>

---

##### `windowsOptionsInput`<sup>Optional</sup> <a name="windowsOptionsInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptionsInput"></a>

```java
public GuestOsCustomizationSpecWindowsOptions getWindowsOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

---

##### `windowsSysprepTextInput`<sup>Optional</sup> <a name="windowsSysprepTextInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepTextInput"></a>

```java
public java.lang.String getWindowsSysprepTextInput();
```

- *Type:* java.lang.String

---

##### `dnsServerList`<sup>Required</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerList"></a>

```java
public java.util.List<java.lang.String> getDnsServerList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsSuffixList`<sup>Required</sup> <a name="dnsSuffixList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixList"></a>

```java
public java.util.List<java.lang.String> getDnsSuffixList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv4Gateway`<sup>Required</sup> <a name="ipv4Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4Gateway"></a>

```java
public java.lang.String getIpv4Gateway();
```

- *Type:* java.lang.String

---

##### `ipv6Gateway`<sup>Required</sup> <a name="ipv6Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6Gateway"></a>

```java
public java.lang.String getIpv6Gateway();
```

- *Type:* java.lang.String

---

##### `windowsSysprepText`<sup>Required</sup> <a name="windowsSysprepText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepText"></a>

```java
public java.lang.String getWindowsSysprepText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.internalValue"></a>

```java
public GuestOsCustomizationSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

---


### GuestOsCustomizationSpecWindowsOptionsOutputReference <a name="GuestOsCustomizationSpecWindowsOptionsOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.guest_os_customization.GuestOsCustomizationSpecWindowsOptionsOutputReference;

new GuestOsCustomizationSpecWindowsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogon">resetAutoLogon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogonCount">resetAutoLogonCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminPassword">resetDomainAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminUser">resetDomainAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainOu">resetDomainOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetJoinDomain">resetJoinDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetProductKey">resetProductKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetRunOnceCommandList">resetRunOnceCommandList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetWorkgroup">resetWorkgroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetAutoLogon` <a name="resetAutoLogon" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogon"></a>

```java
public void resetAutoLogon()
```

##### `resetAutoLogonCount` <a name="resetAutoLogonCount" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogonCount"></a>

```java
public void resetAutoLogonCount()
```

##### `resetDomainAdminPassword` <a name="resetDomainAdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminPassword"></a>

```java
public void resetDomainAdminPassword()
```

##### `resetDomainAdminUser` <a name="resetDomainAdminUser" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminUser"></a>

```java
public void resetDomainAdminUser()
```

##### `resetDomainOu` <a name="resetDomainOu" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainOu"></a>

```java
public void resetDomainOu()
```

##### `resetFullName` <a name="resetFullName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetFullName"></a>

```java
public void resetFullName()
```

##### `resetJoinDomain` <a name="resetJoinDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetJoinDomain"></a>

```java
public void resetJoinDomain()
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetOrganizationName"></a>

```java
public void resetOrganizationName()
```

##### `resetProductKey` <a name="resetProductKey" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetProductKey"></a>

```java
public void resetProductKey()
```

##### `resetRunOnceCommandList` <a name="resetRunOnceCommandList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetRunOnceCommandList"></a>

```java
public void resetRunOnceCommandList()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```

##### `resetWorkgroup` <a name="resetWorkgroup" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetWorkgroup"></a>

```java
public void resetWorkgroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCountInput">autoLogonCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonInput">autoLogonInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerNameInput">computerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPasswordInput">domainAdminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUserInput">domainAdminUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOuInput">domainOuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomainInput">joinDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKeyInput">productKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandListInput">runOnceCommandListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroupInput">workgroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon">autoLogon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount">autoLogonCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName">computerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword">domainAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser">domainAdminUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu">domainOu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain">joinDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKey">productKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList">runOnceCommandList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup">workgroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `autoLogonCountInput`<sup>Optional</sup> <a name="autoLogonCountInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCountInput"></a>

```java
public java.lang.Number getAutoLogonCountInput();
```

- *Type:* java.lang.Number

---

##### `autoLogonInput`<sup>Optional</sup> <a name="autoLogonInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonInput"></a>

```java
public java.lang.Object getAutoLogonInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `computerNameInput`<sup>Optional</sup> <a name="computerNameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerNameInput"></a>

```java
public java.lang.String getComputerNameInput();
```

- *Type:* java.lang.String

---

##### `domainAdminPasswordInput`<sup>Optional</sup> <a name="domainAdminPasswordInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPasswordInput"></a>

```java
public java.lang.String getDomainAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `domainAdminUserInput`<sup>Optional</sup> <a name="domainAdminUserInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUserInput"></a>

```java
public java.lang.String getDomainAdminUserInput();
```

- *Type:* java.lang.String

---

##### `domainOuInput`<sup>Optional</sup> <a name="domainOuInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOuInput"></a>

```java
public java.lang.String getDomainOuInput();
```

- *Type:* java.lang.String

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullNameInput"></a>

```java
public java.lang.String getFullNameInput();
```

- *Type:* java.lang.String

---

##### `joinDomainInput`<sup>Optional</sup> <a name="joinDomainInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomainInput"></a>

```java
public java.lang.String getJoinDomainInput();
```

- *Type:* java.lang.String

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationNameInput"></a>

```java
public java.lang.String getOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `productKeyInput`<sup>Optional</sup> <a name="productKeyInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKeyInput"></a>

```java
public java.lang.String getProductKeyInput();
```

- *Type:* java.lang.String

---

##### `runOnceCommandListInput`<sup>Optional</sup> <a name="runOnceCommandListInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandListInput"></a>

```java
public java.util.List<java.lang.String> getRunOnceCommandListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.Number getTimeZoneInput();
```

- *Type:* java.lang.Number

---

##### `workgroupInput`<sup>Optional</sup> <a name="workgroupInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroupInput"></a>

```java
public java.lang.String getWorkgroupInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `autoLogon`<sup>Required</sup> <a name="autoLogon" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon"></a>

```java
public java.lang.Object getAutoLogon();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoLogonCount`<sup>Required</sup> <a name="autoLogonCount" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount"></a>

```java
public java.lang.Number getAutoLogonCount();
```

- *Type:* java.lang.Number

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

---

##### `domainAdminPassword`<sup>Required</sup> <a name="domainAdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword"></a>

```java
public java.lang.String getDomainAdminPassword();
```

- *Type:* java.lang.String

---

##### `domainAdminUser`<sup>Required</sup> <a name="domainAdminUser" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser"></a>

```java
public java.lang.String getDomainAdminUser();
```

- *Type:* java.lang.String

---

##### `domainOu`<sup>Required</sup> <a name="domainOu" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu"></a>

```java
public java.lang.String getDomainOu();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `joinDomain`<sup>Required</sup> <a name="joinDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain"></a>

```java
public java.lang.String getJoinDomain();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `productKey`<sup>Required</sup> <a name="productKey" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKey"></a>

```java
public java.lang.String getProductKey();
```

- *Type:* java.lang.String

---

##### `runOnceCommandList`<sup>Required</sup> <a name="runOnceCommandList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList"></a>

```java
public java.util.List<java.lang.String> getRunOnceCommandList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone"></a>

```java
public java.lang.Number getTimeZone();
```

- *Type:* java.lang.Number

---

##### `workgroup`<sup>Required</sup> <a name="workgroup" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup"></a>

```java
public java.lang.String getWorkgroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue"></a>

```java
public GuestOsCustomizationSpecWindowsOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

---



