# `vsphere_content_library_item`

Refer to the Terraform Registory for docs: [`vsphere_content_library_item`](https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item).

# `contentLibraryItem` Submodule <a name="`contentLibraryItem` Submodule" id="@cdktf/provider-vsphere.contentLibraryItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContentLibraryItem <a name="ContentLibraryItem" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item vsphere_content_library_item}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library_item.ContentLibraryItem;

ContentLibraryItem.Builder.create(Construct scope, java.lang.String id)
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
    .libraryId(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .fileUrl(java.lang.String)
//  .id(java.lang.String)
//  .sourceUuid(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.libraryId">libraryId</a></code> | <code>java.lang.String</code> | ID of the content library to contain item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional description of the content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.fileUrl">fileUrl</a></code> | <code>java.lang.String</code> | ID of source VM of content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#id ContentLibraryItem#id}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.sourceUuid">sourceUuid</a></code> | <code>java.lang.String</code> | The managed object ID of an existing VM to be cloned to the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Type of content library item. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `libraryId`<sup>Required</sup> <a name="libraryId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.libraryId"></a>

- *Type:* java.lang.String

ID of the content library to contain item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#library_id ContentLibraryItem#library_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#name ContentLibraryItem#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional description of the content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#description ContentLibraryItem#description}

---

##### `fileUrl`<sup>Optional</sup> <a name="fileUrl" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.fileUrl"></a>

- *Type:* java.lang.String

ID of source VM of content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#file_url ContentLibraryItem#file_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#id ContentLibraryItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceUuid`<sup>Optional</sup> <a name="sourceUuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.sourceUuid"></a>

- *Type:* java.lang.String

The managed object ID of an existing VM to be cloned to the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#source_uuid ContentLibraryItem#source_uuid}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Type of content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#type ContentLibraryItem#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetFileUrl">resetFileUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetSourceUuid">resetSourceUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFileUrl` <a name="resetFileUrl" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetFileUrl"></a>

```java
public void resetFileUrl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetId"></a>

```java
public void resetId()
```

##### `resetSourceUuid` <a name="resetSourceUuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetSourceUuid"></a>

```java
public void resetSourceUuid()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library_item.ContentLibraryItem;

ContentLibraryItem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library_item.ContentLibraryItem;

ContentLibraryItem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library_item.ContentLibraryItem;

ContentLibraryItem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrlInput">fileUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryIdInput">libraryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuidInput">sourceUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrl">fileUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryId">libraryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuid">sourceUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fileUrlInput`<sup>Optional</sup> <a name="fileUrlInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrlInput"></a>

```java
public java.lang.String getFileUrlInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `libraryIdInput`<sup>Optional</sup> <a name="libraryIdInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryIdInput"></a>

```java
public java.lang.String getLibraryIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceUuidInput`<sup>Optional</sup> <a name="sourceUuidInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuidInput"></a>

```java
public java.lang.String getSourceUuidInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `fileUrl`<sup>Required</sup> <a name="fileUrl" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrl"></a>

```java
public java.lang.String getFileUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `libraryId`<sup>Required</sup> <a name="libraryId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryId"></a>

```java
public java.lang.String getLibraryId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceUuid`<sup>Required</sup> <a name="sourceUuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuid"></a>

```java
public java.lang.String getSourceUuid();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContentLibraryItemConfig <a name="ContentLibraryItemConfig" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.content_library_item.ContentLibraryItemConfig;

ContentLibraryItemConfig.builder()
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
    .libraryId(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .fileUrl(java.lang.String)
//  .id(java.lang.String)
//  .sourceUuid(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.libraryId">libraryId</a></code> | <code>java.lang.String</code> | ID of the content library to contain item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional description of the content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.fileUrl">fileUrl</a></code> | <code>java.lang.String</code> | ID of source VM of content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#id ContentLibraryItem#id}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.sourceUuid">sourceUuid</a></code> | <code>java.lang.String</code> | The managed object ID of an existing VM to be cloned to the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of content library item. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `libraryId`<sup>Required</sup> <a name="libraryId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.libraryId"></a>

```java
public java.lang.String getLibraryId();
```

- *Type:* java.lang.String

ID of the content library to contain item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#library_id ContentLibraryItem#library_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#name ContentLibraryItem#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional description of the content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#description ContentLibraryItem#description}

---

##### `fileUrl`<sup>Optional</sup> <a name="fileUrl" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.fileUrl"></a>

```java
public java.lang.String getFileUrl();
```

- *Type:* java.lang.String

ID of source VM of content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#file_url ContentLibraryItem#file_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#id ContentLibraryItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceUuid`<sup>Optional</sup> <a name="sourceUuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.sourceUuid"></a>

```java
public java.lang.String getSourceUuid();
```

- *Type:* java.lang.String

The managed object ID of an existing VM to be cloned to the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#source_uuid ContentLibraryItem#source_uuid}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/content_library_item#type ContentLibraryItem#type}

---



