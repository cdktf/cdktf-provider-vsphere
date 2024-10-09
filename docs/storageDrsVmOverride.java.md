# `storageDrsVmOverride` Submodule <a name="`storageDrsVmOverride` Submodule" id="@cdktf/provider-vsphere.storageDrsVmOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDrsVmOverride <a name="StorageDrsVmOverride" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override vsphere_storage_drs_vm_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.storage_drs_vm_override.StorageDrsVmOverride;

StorageDrsVmOverride.Builder.create(Construct scope, java.lang.String id)
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
    .datastoreClusterId(java.lang.String)
    .virtualMachineId(java.lang.String)
//  .id(java.lang.String)
//  .sdrsAutomationLevel(java.lang.String)
//  .sdrsEnabled(java.lang.String)
//  .sdrsIntraVmAffinity(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.datastoreClusterId">datastoreClusterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#id StorageDrsVmOverride#id}. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.sdrsAutomationLevel">sdrsAutomationLevel</a></code> | <code>java.lang.String</code> | Overrides any Storage DRS automation levels for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.sdrsEnabled">sdrsEnabled</a></code> | <code>java.lang.String</code> | Overrides the default Storage DRS setting for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.sdrsIntraVmAffinity">sdrsIntraVmAffinity</a></code> | <code>java.lang.String</code> | Overrides the intra-VM affinity setting for this virtual machine. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datastoreClusterId`<sup>Required</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.datastoreClusterId"></a>

- *Type:* java.lang.String

The managed object ID of the datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#datastore_cluster_id StorageDrsVmOverride#datastore_cluster_id}

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.virtualMachineId"></a>

- *Type:* java.lang.String

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#virtual_machine_id StorageDrsVmOverride#virtual_machine_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#id StorageDrsVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sdrsAutomationLevel`<sup>Optional</sup> <a name="sdrsAutomationLevel" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.sdrsAutomationLevel"></a>

- *Type:* java.lang.String

Overrides any Storage DRS automation levels for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#sdrs_automation_level StorageDrsVmOverride#sdrs_automation_level}

---

##### `sdrsEnabled`<sup>Optional</sup> <a name="sdrsEnabled" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.sdrsEnabled"></a>

- *Type:* java.lang.String

Overrides the default Storage DRS setting for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#sdrs_enabled StorageDrsVmOverride#sdrs_enabled}

---

##### `sdrsIntraVmAffinity`<sup>Optional</sup> <a name="sdrsIntraVmAffinity" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.sdrsIntraVmAffinity"></a>

- *Type:* java.lang.String

Overrides the intra-VM affinity setting for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#sdrs_intra_vm_affinity StorageDrsVmOverride#sdrs_intra_vm_affinity}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsAutomationLevel">resetSdrsAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsEnabled">resetSdrsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsIntraVmAffinity">resetSdrsIntraVmAffinity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetId"></a>

```java
public void resetId()
```

##### `resetSdrsAutomationLevel` <a name="resetSdrsAutomationLevel" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsAutomationLevel"></a>

```java
public void resetSdrsAutomationLevel()
```

##### `resetSdrsEnabled` <a name="resetSdrsEnabled" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsEnabled"></a>

```java
public void resetSdrsEnabled()
```

##### `resetSdrsIntraVmAffinity` <a name="resetSdrsIntraVmAffinity" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsIntraVmAffinity"></a>

```java
public void resetSdrsIntraVmAffinity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageDrsVmOverride resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.storage_drs_vm_override.StorageDrsVmOverride;

StorageDrsVmOverride.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.storage_drs_vm_override.StorageDrsVmOverride;

StorageDrsVmOverride.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.storage_drs_vm_override.StorageDrsVmOverride;

StorageDrsVmOverride.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.storage_drs_vm_override.StorageDrsVmOverride;

StorageDrsVmOverride.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageDrsVmOverride.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StorageDrsVmOverride resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageDrsVmOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageDrsVmOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StorageDrsVmOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterIdInput">datastoreClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevelInput">sdrsAutomationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabledInput">sdrsEnabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinityInput">sdrsIntraVmAffinityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterId">datastoreClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevel">sdrsAutomationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabled">sdrsEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinity">sdrsIntraVmAffinity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datastoreClusterIdInput`<sup>Optional</sup> <a name="datastoreClusterIdInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterIdInput"></a>

```java
public java.lang.String getDatastoreClusterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `sdrsAutomationLevelInput`<sup>Optional</sup> <a name="sdrsAutomationLevelInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevelInput"></a>

```java
public java.lang.String getSdrsAutomationLevelInput();
```

- *Type:* java.lang.String

---

##### `sdrsEnabledInput`<sup>Optional</sup> <a name="sdrsEnabledInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabledInput"></a>

```java
public java.lang.String getSdrsEnabledInput();
```

- *Type:* java.lang.String

---

##### `sdrsIntraVmAffinityInput`<sup>Optional</sup> <a name="sdrsIntraVmAffinityInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinityInput"></a>

```java
public java.lang.String getSdrsIntraVmAffinityInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineIdInput"></a>

```java
public java.lang.String getVirtualMachineIdInput();
```

- *Type:* java.lang.String

---

##### `datastoreClusterId`<sup>Required</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterId"></a>

```java
public java.lang.String getDatastoreClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sdrsAutomationLevel`<sup>Required</sup> <a name="sdrsAutomationLevel" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevel"></a>

```java
public java.lang.String getSdrsAutomationLevel();
```

- *Type:* java.lang.String

---

##### `sdrsEnabled`<sup>Required</sup> <a name="sdrsEnabled" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabled"></a>

```java
public java.lang.String getSdrsEnabled();
```

- *Type:* java.lang.String

---

##### `sdrsIntraVmAffinity`<sup>Required</sup> <a name="sdrsIntraVmAffinity" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinity"></a>

```java
public java.lang.String getSdrsIntraVmAffinity();
```

- *Type:* java.lang.String

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDrsVmOverrideConfig <a name="StorageDrsVmOverrideConfig" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.storage_drs_vm_override.StorageDrsVmOverrideConfig;

StorageDrsVmOverrideConfig.builder()
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
    .datastoreClusterId(java.lang.String)
    .virtualMachineId(java.lang.String)
//  .id(java.lang.String)
//  .sdrsAutomationLevel(java.lang.String)
//  .sdrsEnabled(java.lang.String)
//  .sdrsIntraVmAffinity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.datastoreClusterId">datastoreClusterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#id StorageDrsVmOverride#id}. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsAutomationLevel">sdrsAutomationLevel</a></code> | <code>java.lang.String</code> | Overrides any Storage DRS automation levels for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsEnabled">sdrsEnabled</a></code> | <code>java.lang.String</code> | Overrides the default Storage DRS setting for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsIntraVmAffinity">sdrsIntraVmAffinity</a></code> | <code>java.lang.String</code> | Overrides the intra-VM affinity setting for this virtual machine. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datastoreClusterId`<sup>Required</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.datastoreClusterId"></a>

```java
public java.lang.String getDatastoreClusterId();
```

- *Type:* java.lang.String

The managed object ID of the datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#datastore_cluster_id StorageDrsVmOverride#datastore_cluster_id}

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#virtual_machine_id StorageDrsVmOverride#virtual_machine_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#id StorageDrsVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sdrsAutomationLevel`<sup>Optional</sup> <a name="sdrsAutomationLevel" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsAutomationLevel"></a>

```java
public java.lang.String getSdrsAutomationLevel();
```

- *Type:* java.lang.String

Overrides any Storage DRS automation levels for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#sdrs_automation_level StorageDrsVmOverride#sdrs_automation_level}

---

##### `sdrsEnabled`<sup>Optional</sup> <a name="sdrsEnabled" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsEnabled"></a>

```java
public java.lang.String getSdrsEnabled();
```

- *Type:* java.lang.String

Overrides the default Storage DRS setting for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#sdrs_enabled StorageDrsVmOverride#sdrs_enabled}

---

##### `sdrsIntraVmAffinity`<sup>Optional</sup> <a name="sdrsIntraVmAffinity" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsIntraVmAffinity"></a>

```java
public java.lang.String getSdrsIntraVmAffinity();
```

- *Type:* java.lang.String

Overrides the intra-VM affinity setting for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/storage_drs_vm_override#sdrs_intra_vm_affinity StorageDrsVmOverride#sdrs_intra_vm_affinity}

---



