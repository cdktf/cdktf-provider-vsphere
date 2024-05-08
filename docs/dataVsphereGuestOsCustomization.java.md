# `dataVsphereGuestOsCustomization` Submodule <a name="`dataVsphereGuestOsCustomization` Submodule" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereGuestOsCustomization <a name="DataVsphereGuestOsCustomization" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/guest_os_customization vsphere_guest_os_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomization;

DataVsphereGuestOsCustomization.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the customization specification is the unique identifier per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/guest_os_customization#id DataVsphereGuestOsCustomization#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the customization specification is the unique identifier per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/guest_os_customization#name DataVsphereGuestOsCustomization#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/guest_os_customization#id DataVsphereGuestOsCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereGuestOsCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomization;

DataVsphereGuestOsCustomization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomization;

DataVsphereGuestOsCustomization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomization;

DataVsphereGuestOsCustomization.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomization;

DataVsphereGuestOsCustomization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVsphereGuestOsCustomization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVsphereGuestOsCustomization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVsphereGuestOsCustomization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVsphereGuestOsCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/guest_os_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereGuestOsCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.changeVersion">changeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList">DataVsphereGuestOsCustomizationSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `changeVersion`<sup>Required</sup> <a name="changeVersion" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.changeVersion"></a>

```java
public java.lang.String getChangeVersion();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lastUpdateTime"></a>

```java
public java.lang.String getLastUpdateTime();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.spec"></a>

```java
public DataVsphereGuestOsCustomizationSpecList getSpec();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList">DataVsphereGuestOsCustomizationSpecList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereGuestOsCustomizationConfig <a name="DataVsphereGuestOsCustomizationConfig" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomizationConfig;

DataVsphereGuestOsCustomizationConfig.builder()
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
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the customization specification is the unique identifier per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/guest_os_customization#id DataVsphereGuestOsCustomization#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the customization specification is the unique identifier per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/guest_os_customization#name DataVsphereGuestOsCustomization#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/guest_os_customization#id DataVsphereGuestOsCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataVsphereGuestOsCustomizationSpec <a name="DataVsphereGuestOsCustomizationSpec" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomizationSpec;

DataVsphereGuestOsCustomizationSpec.builder()
    .build();
```


### DataVsphereGuestOsCustomizationSpecLinuxOptions <a name="DataVsphereGuestOsCustomizationSpecLinuxOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomizationSpecLinuxOptions;

DataVsphereGuestOsCustomizationSpecLinuxOptions.builder()
    .build();
```


### DataVsphereGuestOsCustomizationSpecNetworkInterface <a name="DataVsphereGuestOsCustomizationSpecNetworkInterface" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomizationSpecNetworkInterface;

DataVsphereGuestOsCustomizationSpecNetworkInterface.builder()
    .build();
```


### DataVsphereGuestOsCustomizationSpecWindowsOptions <a name="DataVsphereGuestOsCustomizationSpecWindowsOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomizationSpecWindowsOptions;

DataVsphereGuestOsCustomizationSpecWindowsOptions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataVsphereGuestOsCustomizationSpecLinuxOptionsList <a name="DataVsphereGuestOsCustomizationSpecLinuxOptionsList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList;

new DataVsphereGuestOsCustomizationSpecLinuxOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.get"></a>

```java
public DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference <a name="DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference;

new DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc">hwClockUtc</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText">scriptText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions">DataVsphereGuestOsCustomizationSpecLinuxOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `hwClockUtc`<sup>Required</sup> <a name="hwClockUtc" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc"></a>

```java
public IResolvable getHwClockUtc();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `scriptText`<sup>Required</sup> <a name="scriptText" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText"></a>

```java
public java.lang.String getScriptText();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue"></a>

```java
public DataVsphereGuestOsCustomizationSpecLinuxOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions">DataVsphereGuestOsCustomizationSpecLinuxOptions</a>

---


### DataVsphereGuestOsCustomizationSpecList <a name="DataVsphereGuestOsCustomizationSpecList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomizationSpecList;

new DataVsphereGuestOsCustomizationSpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.get"></a>

```java
public DataVsphereGuestOsCustomizationSpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataVsphereGuestOsCustomizationSpecNetworkInterfaceList <a name="DataVsphereGuestOsCustomizationSpecNetworkInterfaceList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList;

new DataVsphereGuestOsCustomizationSpecNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.get"></a>

```java
public DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference <a name="DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference;

new DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain">dnsDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList">dnsServerList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask">ipv4Netmask</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask">ipv6Netmask</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface">DataVsphereGuestOsCustomizationSpecNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsDomain`<sup>Required</sup> <a name="dnsDomain" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain"></a>

```java
public java.lang.String getDnsDomain();
```

- *Type:* java.lang.String

---

##### `dnsServerList`<sup>Required</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList"></a>

```java
public java.util.List<java.lang.String> getDnsServerList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

---

##### `ipv4Netmask`<sup>Required</sup> <a name="ipv4Netmask" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask"></a>

```java
public java.lang.Number getIpv4Netmask();
```

- *Type:* java.lang.Number

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `ipv6Netmask`<sup>Required</sup> <a name="ipv6Netmask" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask"></a>

```java
public java.lang.Number getIpv6Netmask();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public DataVsphereGuestOsCustomizationSpecNetworkInterface getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface">DataVsphereGuestOsCustomizationSpecNetworkInterface</a>

---


### DataVsphereGuestOsCustomizationSpecOutputReference <a name="DataVsphereGuestOsCustomizationSpecOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomizationSpecOutputReference;

new DataVsphereGuestOsCustomizationSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsServerList">dnsServerList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsSuffixList">dnsSuffixList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.linuxOptions">linuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList">DataVsphereGuestOsCustomizationSpecLinuxOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList">DataVsphereGuestOsCustomizationSpecNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsOptions">windowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList">DataVsphereGuestOsCustomizationSpecWindowsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsSysprepText">windowsSysprepText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec">DataVsphereGuestOsCustomizationSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsServerList`<sup>Required</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsServerList"></a>

```java
public java.util.List<java.lang.String> getDnsServerList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsSuffixList`<sup>Required</sup> <a name="dnsSuffixList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsSuffixList"></a>

```java
public java.util.List<java.lang.String> getDnsSuffixList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `linuxOptions`<sup>Required</sup> <a name="linuxOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.linuxOptions"></a>

```java
public DataVsphereGuestOsCustomizationSpecLinuxOptionsList getLinuxOptions();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList">DataVsphereGuestOsCustomizationSpecLinuxOptionsList</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.networkInterface"></a>

```java
public DataVsphereGuestOsCustomizationSpecNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList">DataVsphereGuestOsCustomizationSpecNetworkInterfaceList</a>

---

##### `windowsOptions`<sup>Required</sup> <a name="windowsOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsOptions"></a>

```java
public DataVsphereGuestOsCustomizationSpecWindowsOptionsList getWindowsOptions();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList">DataVsphereGuestOsCustomizationSpecWindowsOptionsList</a>

---

##### `windowsSysprepText`<sup>Required</sup> <a name="windowsSysprepText" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsSysprepText"></a>

```java
public java.lang.String getWindowsSysprepText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.internalValue"></a>

```java
public DataVsphereGuestOsCustomizationSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec">DataVsphereGuestOsCustomizationSpec</a>

---


### DataVsphereGuestOsCustomizationSpecWindowsOptionsList <a name="DataVsphereGuestOsCustomizationSpecWindowsOptionsList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList;

new DataVsphereGuestOsCustomizationSpecWindowsOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.get"></a>

```java
public DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference <a name="DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_guest_os_customization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference;

new DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon">autoLogon</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount">autoLogonCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName">computerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword">domainAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser">domainAdminUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu">domainOu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain">joinDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList">runOnceCommandList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup">workgroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions">DataVsphereGuestOsCustomizationSpecWindowsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `autoLogon`<sup>Required</sup> <a name="autoLogon" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon"></a>

```java
public IResolvable getAutoLogon();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autoLogonCount`<sup>Required</sup> <a name="autoLogonCount" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount"></a>

```java
public java.lang.Number getAutoLogonCount();
```

- *Type:* java.lang.Number

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

---

##### `domainAdminPassword`<sup>Required</sup> <a name="domainAdminPassword" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword"></a>

```java
public java.lang.String getDomainAdminPassword();
```

- *Type:* java.lang.String

---

##### `domainAdminUser`<sup>Required</sup> <a name="domainAdminUser" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser"></a>

```java
public java.lang.String getDomainAdminUser();
```

- *Type:* java.lang.String

---

##### `domainOu`<sup>Required</sup> <a name="domainOu" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu"></a>

```java
public java.lang.String getDomainOu();
```

- *Type:* java.lang.String

---

##### `joinDomain`<sup>Required</sup> <a name="joinDomain" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain"></a>

```java
public java.lang.String getJoinDomain();
```

- *Type:* java.lang.String

---

##### `runOnceCommandList`<sup>Required</sup> <a name="runOnceCommandList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList"></a>

```java
public java.util.List<java.lang.String> getRunOnceCommandList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone"></a>

```java
public java.lang.Number getTimeZone();
```

- *Type:* java.lang.Number

---

##### `workgroup`<sup>Required</sup> <a name="workgroup" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup"></a>

```java
public java.lang.String getWorkgroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue"></a>

```java
public DataVsphereGuestOsCustomizationSpecWindowsOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions">DataVsphereGuestOsCustomizationSpecWindowsOptions</a>

---



