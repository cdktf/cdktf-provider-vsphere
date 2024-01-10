# `dataVsphereHostPciDevice` Submodule <a name="`dataVsphereHostPciDevice` Submodule" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereHostPciDevice <a name="DataVsphereHostPciDevice" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device vsphere_host_pci_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_host_pci_device.DataVsphereHostPciDevice;

DataVsphereHostPciDevice.Builder.create(Construct scope, java.lang.String id)
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
    .hostId(java.lang.String)
//  .classId(java.lang.String)
//  .id(java.lang.String)
//  .nameRegex(java.lang.String)
//  .vendorId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.hostId">hostId</a></code> | <code>java.lang.String</code> | The Managed Object ID of the host system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.classId">classId</a></code> | <code>java.lang.String</code> | The hexadecimal value of the PCI device's class ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#id DataVsphereHostPciDevice#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | A regular expression used to match the PCI device name. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.vendorId">vendorId</a></code> | <code>java.lang.String</code> | The hexadecimal value of the PCI device's vendor ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.hostId"></a>

- *Type:* java.lang.String

The Managed Object ID of the host system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#host_id DataVsphereHostPciDevice#host_id}

---

##### `classId`<sup>Optional</sup> <a name="classId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.classId"></a>

- *Type:* java.lang.String

The hexadecimal value of the PCI device's class ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#class_id DataVsphereHostPciDevice#class_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#id DataVsphereHostPciDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.nameRegex"></a>

- *Type:* java.lang.String

A regular expression used to match the PCI device name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#name_regex DataVsphereHostPciDevice#name_regex}

---

##### `vendorId`<sup>Optional</sup> <a name="vendorId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.vendorId"></a>

- *Type:* java.lang.String

The hexadecimal value of the PCI device's vendor ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#vendor_id DataVsphereHostPciDevice#vendor_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetClassId">resetClassId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetVendorId">resetVendorId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetClassId` <a name="resetClassId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetClassId"></a>

```java
public void resetClassId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetId"></a>

```java
public void resetId()
```

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetNameRegex"></a>

```java
public void resetNameRegex()
```

##### `resetVendorId` <a name="resetVendorId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetVendorId"></a>

```java
public void resetVendorId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereHostPciDevice resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_host_pci_device.DataVsphereHostPciDevice;

DataVsphereHostPciDevice.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_host_pci_device.DataVsphereHostPciDevice;

DataVsphereHostPciDevice.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_host_pci_device.DataVsphereHostPciDevice;

DataVsphereHostPciDevice.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_host_pci_device.DataVsphereHostPciDevice;

DataVsphereHostPciDevice.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVsphereHostPciDevice.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVsphereHostPciDevice resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVsphereHostPciDevice to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVsphereHostPciDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereHostPciDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.classIdInput">classIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.hostIdInput">hostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.nameRegexInput">nameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.vendorIdInput">vendorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.classId">classId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.hostId">hostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.vendorId">vendorId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `classIdInput`<sup>Optional</sup> <a name="classIdInput" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.classIdInput"></a>

```java
public java.lang.String getClassIdInput();
```

- *Type:* java.lang.String

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.hostIdInput"></a>

```java
public java.lang.String getHostIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.nameRegexInput"></a>

```java
public java.lang.String getNameRegexInput();
```

- *Type:* java.lang.String

---

##### `vendorIdInput`<sup>Optional</sup> <a name="vendorIdInput" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.vendorIdInput"></a>

```java
public java.lang.String getVendorIdInput();
```

- *Type:* java.lang.String

---

##### `classId`<sup>Required</sup> <a name="classId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.classId"></a>

```java
public java.lang.String getClassId();
```

- *Type:* java.lang.String

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

---

##### `vendorId`<sup>Required</sup> <a name="vendorId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.vendorId"></a>

```java
public java.lang.String getVendorId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereHostPciDeviceConfig <a name="DataVsphereHostPciDeviceConfig" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_host_pci_device.DataVsphereHostPciDeviceConfig;

DataVsphereHostPciDeviceConfig.builder()
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
    .hostId(java.lang.String)
//  .classId(java.lang.String)
//  .id(java.lang.String)
//  .nameRegex(java.lang.String)
//  .vendorId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.hostId">hostId</a></code> | <code>java.lang.String</code> | The Managed Object ID of the host system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.classId">classId</a></code> | <code>java.lang.String</code> | The hexadecimal value of the PCI device's class ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#id DataVsphereHostPciDevice#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | A regular expression used to match the PCI device name. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.vendorId">vendorId</a></code> | <code>java.lang.String</code> | The hexadecimal value of the PCI device's vendor ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

The Managed Object ID of the host system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#host_id DataVsphereHostPciDevice#host_id}

---

##### `classId`<sup>Optional</sup> <a name="classId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.classId"></a>

```java
public java.lang.String getClassId();
```

- *Type:* java.lang.String

The hexadecimal value of the PCI device's class ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#class_id DataVsphereHostPciDevice#class_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#id DataVsphereHostPciDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

A regular expression used to match the PCI device name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#name_regex DataVsphereHostPciDevice#name_regex}

---

##### `vendorId`<sup>Optional</sup> <a name="vendorId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.vendorId"></a>

```java
public java.lang.String getVendorId();
```

- *Type:* java.lang.String

The hexadecimal value of the PCI device's vendor ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#vendor_id DataVsphereHostPciDevice#vendor_id}

---



