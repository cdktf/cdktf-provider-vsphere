# `contentLibrary` Submodule <a name="`contentLibrary` Submodule" id="@cdktf/provider-vsphere.contentLibrary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContentLibrary <a name="ContentLibrary" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library vsphere_content_library}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library.ContentLibrary;

ContentLibrary.Builder.create(Construct scope, java.lang.String id)
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
    .storageBacking(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .publication(ContentLibraryPublication)
//  .subscription(ContentLibrarySubscription)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.storageBacking">storageBacking</a></code> | <code>java.util.List<java.lang.String></code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional description of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#id ContentLibrary#id}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.publication">publication</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | publication block. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.subscription">subscription</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | subscription block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#name ContentLibrary#name}

---

##### `storageBacking`<sup>Required</sup> <a name="storageBacking" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.storageBacking"></a>

- *Type:* java.util.List<java.lang.String>

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#storage_backing ContentLibrary#storage_backing}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional description of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#description ContentLibrary#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#id ContentLibrary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publication`<sup>Optional</sup> <a name="publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.publication"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

publication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#publication ContentLibrary#publication}

---

##### `subscription`<sup>Optional</sup> <a name="subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.subscription"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#subscription ContentLibrary#subscription}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication">putPublication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription">putSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetPublication">resetPublication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetSubscription">resetSubscription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPublication` <a name="putPublication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication"></a>

```java
public void putPublication(ContentLibraryPublication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---

##### `putSubscription` <a name="putSubscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription"></a>

```java
public void putSubscription(ContentLibrarySubscription value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetId"></a>

```java
public void resetId()
```

##### `resetPublication` <a name="resetPublication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetPublication"></a>

```java
public void resetPublication()
```

##### `resetSubscription` <a name="resetSubscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetSubscription"></a>

```java
public void resetSubscription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContentLibrary resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library.ContentLibrary;

ContentLibrary.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library.ContentLibrary;

ContentLibrary.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library.ContentLibrary;

ContentLibrary.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library.ContentLibrary;

ContentLibrary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContentLibrary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContentLibrary resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContentLibrary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContentLibrary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContentLibrary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publication">publication</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference">ContentLibraryPublicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscription">subscription</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference">ContentLibrarySubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publicationInput">publicationInput</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBackingInput">storageBackingInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscriptionInput">subscriptionInput</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBacking">storageBacking</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `publication`<sup>Required</sup> <a name="publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publication"></a>

```java
public ContentLibraryPublicationOutputReference getPublication();
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference">ContentLibraryPublicationOutputReference</a>

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscription"></a>

```java
public ContentLibrarySubscriptionOutputReference getSubscription();
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference">ContentLibrarySubscriptionOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicationInput`<sup>Optional</sup> <a name="publicationInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publicationInput"></a>

```java
public ContentLibraryPublication getPublicationInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---

##### `storageBackingInput`<sup>Optional</sup> <a name="storageBackingInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBackingInput"></a>

```java
public java.util.List<java.lang.String> getStorageBackingInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subscriptionInput`<sup>Optional</sup> <a name="subscriptionInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscriptionInput"></a>

```java
public ContentLibrarySubscription getSubscriptionInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `storageBacking`<sup>Required</sup> <a name="storageBacking" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBacking"></a>

```java
public java.util.List<java.lang.String> getStorageBacking();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContentLibraryConfig <a name="ContentLibraryConfig" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library.ContentLibraryConfig;

ContentLibraryConfig.builder()
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
    .storageBacking(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .publication(ContentLibraryPublication)
//  .subscription(ContentLibrarySubscription)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.storageBacking">storageBacking</a></code> | <code>java.util.List<java.lang.String></code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional description of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#id ContentLibrary#id}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.publication">publication</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | publication block. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.subscription">subscription</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | subscription block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#name ContentLibrary#name}

---

##### `storageBacking`<sup>Required</sup> <a name="storageBacking" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.storageBacking"></a>

```java
public java.util.List<java.lang.String> getStorageBacking();
```

- *Type:* java.util.List<java.lang.String>

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#storage_backing ContentLibrary#storage_backing}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional description of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#description ContentLibrary#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#id ContentLibrary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publication`<sup>Optional</sup> <a name="publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.publication"></a>

```java
public ContentLibraryPublication getPublication();
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

publication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#publication ContentLibrary#publication}

---

##### `subscription`<sup>Optional</sup> <a name="subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.subscription"></a>

```java
public ContentLibrarySubscription getSubscription();
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#subscription ContentLibrary#subscription}

---

### ContentLibraryPublication <a name="ContentLibraryPublication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library.ContentLibraryPublication;

ContentLibraryPublication.builder()
//  .authenticationMethod(java.lang.String)
//  .password(java.lang.String)
//  .published(java.lang.Boolean)
//  .published(IResolvable)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#password ContentLibrary#password}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.published">published</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#published ContentLibrary#published}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#username ContentLibrary#username}. |

---

##### `authenticationMethod`<sup>Optional</sup> <a name="authenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#password ContentLibrary#password}.

---

##### `published`<sup>Optional</sup> <a name="published" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.published"></a>

```java
public java.lang.Object getPublished();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#published ContentLibrary#published}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#username ContentLibrary#username}.

---

### ContentLibrarySubscription <a name="ContentLibrarySubscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library.ContentLibrarySubscription;

ContentLibrarySubscription.builder()
//  .authenticationMethod(java.lang.String)
//  .automaticSync(java.lang.Boolean)
//  .automaticSync(IResolvable)
//  .onDemand(java.lang.Boolean)
//  .onDemand(IResolvable)
//  .password(java.lang.String)
//  .subscriptionUrl(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.automaticSync">automaticSync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#automatic_sync ContentLibrary#automatic_sync}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.onDemand">onDemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#on_demand ContentLibrary#on_demand}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#password ContentLibrary#password}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.subscriptionUrl">subscriptionUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#subscription_url ContentLibrary#subscription_url}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#username ContentLibrary#username}. |

---

##### `authenticationMethod`<sup>Optional</sup> <a name="authenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}.

---

##### `automaticSync`<sup>Optional</sup> <a name="automaticSync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.automaticSync"></a>

```java
public java.lang.Object getAutomaticSync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#automatic_sync ContentLibrary#automatic_sync}.

---

##### `onDemand`<sup>Optional</sup> <a name="onDemand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.onDemand"></a>

```java
public java.lang.Object getOnDemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#on_demand ContentLibrary#on_demand}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#password ContentLibrary#password}.

---

##### `subscriptionUrl`<sup>Optional</sup> <a name="subscriptionUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.subscriptionUrl"></a>

```java
public java.lang.String getSubscriptionUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#subscription_url ContentLibrary#subscription_url}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/content_library#username ContentLibrary#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContentLibraryPublicationOutputReference <a name="ContentLibraryPublicationOutputReference" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library.ContentLibraryPublicationOutputReference;

new ContentLibraryPublicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetAuthenticationMethod">resetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPublished">resetPublished</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationMethod` <a name="resetAuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetAuthenticationMethod"></a>

```java
public void resetAuthenticationMethod()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPublished` <a name="resetPublished" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPublished"></a>

```java
public void resetPublished()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishUrl">publishUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethodInput">authenticationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishedInput">publishedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.published">published</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publishUrl`<sup>Required</sup> <a name="publishUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishUrl"></a>

```java
public java.lang.String getPublishUrl();
```

- *Type:* java.lang.String

---

##### `authenticationMethodInput`<sup>Optional</sup> <a name="authenticationMethodInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethodInput"></a>

```java
public java.lang.String getAuthenticationMethodInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `publishedInput`<sup>Optional</sup> <a name="publishedInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishedInput"></a>

```java
public java.lang.Object getPublishedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.published"></a>

```java
public java.lang.Object getPublished();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.internalValue"></a>

```java
public ContentLibraryPublication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---


### ContentLibrarySubscriptionOutputReference <a name="ContentLibrarySubscriptionOutputReference" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library.ContentLibrarySubscriptionOutputReference;

new ContentLibrarySubscriptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAuthenticationMethod">resetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAutomaticSync">resetAutomaticSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetOnDemand">resetOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetSubscriptionUrl">resetSubscriptionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationMethod` <a name="resetAuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAuthenticationMethod"></a>

```java
public void resetAuthenticationMethod()
```

##### `resetAutomaticSync` <a name="resetAutomaticSync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAutomaticSync"></a>

```java
public void resetAutomaticSync()
```

##### `resetOnDemand` <a name="resetOnDemand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetOnDemand"></a>

```java
public void resetOnDemand()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetSubscriptionUrl` <a name="resetSubscriptionUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetSubscriptionUrl"></a>

```java
public void resetSubscriptionUrl()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethodInput">authenticationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSyncInput">automaticSyncInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemandInput">onDemandInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrlInput">subscriptionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSync">automaticSync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemand">onDemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrl">subscriptionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationMethodInput`<sup>Optional</sup> <a name="authenticationMethodInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethodInput"></a>

```java
public java.lang.String getAuthenticationMethodInput();
```

- *Type:* java.lang.String

---

##### `automaticSyncInput`<sup>Optional</sup> <a name="automaticSyncInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSyncInput"></a>

```java
public java.lang.Object getAutomaticSyncInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onDemandInput`<sup>Optional</sup> <a name="onDemandInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemandInput"></a>

```java
public java.lang.Object getOnDemandInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `subscriptionUrlInput`<sup>Optional</sup> <a name="subscriptionUrlInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrlInput"></a>

```java
public java.lang.String getSubscriptionUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

---

##### `automaticSync`<sup>Required</sup> <a name="automaticSync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSync"></a>

```java
public java.lang.Object getAutomaticSync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onDemand`<sup>Required</sup> <a name="onDemand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemand"></a>

```java
public java.lang.Object getOnDemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `subscriptionUrl`<sup>Required</sup> <a name="subscriptionUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrl"></a>

```java
public java.lang.String getSubscriptionUrl();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.internalValue"></a>

```java
public ContentLibrarySubscription getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---



