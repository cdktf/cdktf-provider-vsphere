# `vsphere_virtual_disk`

Refer to the Terraform Registory for docs: [`vsphere_virtual_disk`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk).

# `virtualDisk` Submodule <a name="`virtualDisk` Submodule" id="@cdktf/provider-vsphere.virtualDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDisk <a name="VirtualDisk" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk vsphere_virtual_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_disk.VirtualDisk;

VirtualDisk.Builder.create(Construct scope, java.lang.String id)
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
    .datastore(java.lang.String)
    .size(java.lang.Number)
    .vmdkPath(java.lang.String)
//  .adapterType(java.lang.String)
//  .createDirectories(java.lang.Boolean)
//  .createDirectories(IResolvable)
//  .datacenter(java.lang.String)
//  .id(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.datastore">datastore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#datastore VirtualDisk#datastore}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#size VirtualDisk#size}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.vmdkPath">vmdkPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.adapterType">adapterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.createDirectories">createDirectories</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#id VirtualDisk#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#type VirtualDisk#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.datastore"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#datastore VirtualDisk#datastore}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.size"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#size VirtualDisk#size}.

---

##### `vmdkPath`<sup>Required</sup> <a name="vmdkPath" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.vmdkPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}.

---

##### `adapterType`<sup>Optional</sup> <a name="adapterType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.adapterType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}.

---

##### `createDirectories`<sup>Optional</sup> <a name="createDirectories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.createDirectories"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.datacenter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#id VirtualDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#type VirtualDisk#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetAdapterType">resetAdapterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetCreateDirectories">resetCreateDirectories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAdapterType` <a name="resetAdapterType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetAdapterType"></a>

```java
public void resetAdapterType()
```

##### `resetCreateDirectories` <a name="resetCreateDirectories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetCreateDirectories"></a>

```java
public void resetCreateDirectories()
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetId"></a>

```java
public void resetId()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_disk.VirtualDisk;

VirtualDisk.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_disk.VirtualDisk;

VirtualDisk.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_disk.VirtualDisk;

VirtualDisk.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterTypeInput">adapterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectoriesInput">createDirectoriesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastoreInput">datastoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPathInput">vmdkPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterType">adapterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectories">createDirectories</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastore">datastore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPath">vmdkPath</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adapterTypeInput`<sup>Optional</sup> <a name="adapterTypeInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterTypeInput"></a>

```java
public java.lang.String getAdapterTypeInput();
```

- *Type:* java.lang.String

---

##### `createDirectoriesInput`<sup>Optional</sup> <a name="createDirectoriesInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectoriesInput"></a>

```java
public java.lang.Object getCreateDirectoriesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastoreInput"></a>

```java
public java.lang.String getDatastoreInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vmdkPathInput`<sup>Optional</sup> <a name="vmdkPathInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPathInput"></a>

```java
public java.lang.String getVmdkPathInput();
```

- *Type:* java.lang.String

---

##### `adapterType`<sup>Required</sup> <a name="adapterType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterType"></a>

```java
public java.lang.String getAdapterType();
```

- *Type:* java.lang.String

---

##### `createDirectories`<sup>Required</sup> <a name="createDirectories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectories"></a>

```java
public java.lang.Object getCreateDirectories();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastore"></a>

```java
public java.lang.String getDatastore();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vmdkPath`<sup>Required</sup> <a name="vmdkPath" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPath"></a>

```java
public java.lang.String getVmdkPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDiskConfig <a name="VirtualDiskConfig" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_disk.VirtualDiskConfig;

VirtualDiskConfig.builder()
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
    .datastore(java.lang.String)
    .size(java.lang.Number)
    .vmdkPath(java.lang.String)
//  .adapterType(java.lang.String)
//  .createDirectories(java.lang.Boolean)
//  .createDirectories(IResolvable)
//  .datacenter(java.lang.String)
//  .id(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datastore">datastore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#datastore VirtualDisk#datastore}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#size VirtualDisk#size}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.vmdkPath">vmdkPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.adapterType">adapterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.createDirectories">createDirectories</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#id VirtualDisk#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#type VirtualDisk#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datastore"></a>

```java
public java.lang.String getDatastore();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#datastore VirtualDisk#datastore}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#size VirtualDisk#size}.

---

##### `vmdkPath`<sup>Required</sup> <a name="vmdkPath" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.vmdkPath"></a>

```java
public java.lang.String getVmdkPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}.

---

##### `adapterType`<sup>Optional</sup> <a name="adapterType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.adapterType"></a>

```java
public java.lang.String getAdapterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}.

---

##### `createDirectories`<sup>Optional</sup> <a name="createDirectories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.createDirectories"></a>

```java
public java.lang.Object getCreateDirectories();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#id VirtualDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/virtual_disk#type VirtualDisk#type}.

---



