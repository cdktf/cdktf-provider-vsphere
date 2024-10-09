# `virtualMachineSnapshot` Submodule <a name="`virtualMachineSnapshot` Submodule" id="@cdktf/provider-vsphere.virtualMachineSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineSnapshot <a name="VirtualMachineSnapshot" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot vsphere_virtual_machine_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine_snapshot.VirtualMachineSnapshot;

VirtualMachineSnapshot.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .memory(java.lang.Boolean)
    .memory(IResolvable)
    .quiesce(java.lang.Boolean)
    .quiesce(IResolvable)
    .snapshotName(java.lang.String)
    .virtualMachineUuid(java.lang.String)
//  .consolidate(java.lang.Boolean)
//  .consolidate(IResolvable)
//  .id(java.lang.String)
//  .removeChildren(java.lang.Boolean)
//  .removeChildren(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#description VirtualMachineSnapshot#description}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.memory">memory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#memory VirtualMachineSnapshot#memory}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.quiesce">quiesce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#quiesce VirtualMachineSnapshot#quiesce}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#snapshot_name VirtualMachineSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.virtualMachineUuid">virtualMachineUuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#virtual_machine_uuid VirtualMachineSnapshot#virtual_machine_uuid}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.consolidate">consolidate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#consolidate VirtualMachineSnapshot#consolidate}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#id VirtualMachineSnapshot#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.removeChildren">removeChildren</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#remove_children VirtualMachineSnapshot#remove_children}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#description VirtualMachineSnapshot#description}.

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.memory"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#memory VirtualMachineSnapshot#memory}.

---

##### `quiesce`<sup>Required</sup> <a name="quiesce" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.quiesce"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#quiesce VirtualMachineSnapshot#quiesce}.

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.snapshotName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#snapshot_name VirtualMachineSnapshot#snapshot_name}.

---

##### `virtualMachineUuid`<sup>Required</sup> <a name="virtualMachineUuid" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.virtualMachineUuid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#virtual_machine_uuid VirtualMachineSnapshot#virtual_machine_uuid}.

---

##### `consolidate`<sup>Optional</sup> <a name="consolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.consolidate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#consolidate VirtualMachineSnapshot#consolidate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#id VirtualMachineSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `removeChildren`<sup>Optional</sup> <a name="removeChildren" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.removeChildren"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#remove_children VirtualMachineSnapshot#remove_children}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetConsolidate">resetConsolidate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetRemoveChildren">resetRemoveChildren</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetConsolidate` <a name="resetConsolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetConsolidate"></a>

```java
public void resetConsolidate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetId"></a>

```java
public void resetId()
```

##### `resetRemoveChildren` <a name="resetRemoveChildren" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetRemoveChildren"></a>

```java
public void resetRemoveChildren()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine_snapshot.VirtualMachineSnapshot;

VirtualMachineSnapshot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine_snapshot.VirtualMachineSnapshot;

VirtualMachineSnapshot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine_snapshot.VirtualMachineSnapshot;

VirtualMachineSnapshot.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine_snapshot.VirtualMachineSnapshot;

VirtualMachineSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualMachineSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VirtualMachineSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualMachineSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualMachineSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidateInput">consolidateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memoryInput">memoryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesceInput">quiesceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildrenInput">removeChildrenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuidInput">virtualMachineUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidate">consolidate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memory">memory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesce">quiesce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildren">removeChildren</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuid">virtualMachineUuid</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `consolidateInput`<sup>Optional</sup> <a name="consolidateInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidateInput"></a>

```java
public java.lang.Object getConsolidateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memoryInput"></a>

```java
public java.lang.Object getMemoryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `quiesceInput`<sup>Optional</sup> <a name="quiesceInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesceInput"></a>

```java
public java.lang.Object getQuiesceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `removeChildrenInput`<sup>Optional</sup> <a name="removeChildrenInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildrenInput"></a>

```java
public java.lang.Object getRemoveChildrenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineUuidInput`<sup>Optional</sup> <a name="virtualMachineUuidInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuidInput"></a>

```java
public java.lang.String getVirtualMachineUuidInput();
```

- *Type:* java.lang.String

---

##### `consolidate`<sup>Required</sup> <a name="consolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidate"></a>

```java
public java.lang.Object getConsolidate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memory"></a>

```java
public java.lang.Object getMemory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `quiesce`<sup>Required</sup> <a name="quiesce" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesce"></a>

```java
public java.lang.Object getQuiesce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `removeChildren`<sup>Required</sup> <a name="removeChildren" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildren"></a>

```java
public java.lang.Object getRemoveChildren();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `virtualMachineUuid`<sup>Required</sup> <a name="virtualMachineUuid" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuid"></a>

```java
public java.lang.String getVirtualMachineUuid();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineSnapshotConfig <a name="VirtualMachineSnapshotConfig" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine_snapshot.VirtualMachineSnapshotConfig;

VirtualMachineSnapshotConfig.builder()
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
    .description(java.lang.String)
    .memory(java.lang.Boolean)
    .memory(IResolvable)
    .quiesce(java.lang.Boolean)
    .quiesce(IResolvable)
    .snapshotName(java.lang.String)
    .virtualMachineUuid(java.lang.String)
//  .consolidate(java.lang.Boolean)
//  .consolidate(IResolvable)
//  .id(java.lang.String)
//  .removeChildren(java.lang.Boolean)
//  .removeChildren(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#description VirtualMachineSnapshot#description}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.memory">memory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#memory VirtualMachineSnapshot#memory}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.quiesce">quiesce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#quiesce VirtualMachineSnapshot#quiesce}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#snapshot_name VirtualMachineSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.virtualMachineUuid">virtualMachineUuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#virtual_machine_uuid VirtualMachineSnapshot#virtual_machine_uuid}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.consolidate">consolidate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#consolidate VirtualMachineSnapshot#consolidate}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#id VirtualMachineSnapshot#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.removeChildren">removeChildren</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#remove_children VirtualMachineSnapshot#remove_children}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#description VirtualMachineSnapshot#description}.

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.memory"></a>

```java
public java.lang.Object getMemory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#memory VirtualMachineSnapshot#memory}.

---

##### `quiesce`<sup>Required</sup> <a name="quiesce" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.quiesce"></a>

```java
public java.lang.Object getQuiesce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#quiesce VirtualMachineSnapshot#quiesce}.

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#snapshot_name VirtualMachineSnapshot#snapshot_name}.

---

##### `virtualMachineUuid`<sup>Required</sup> <a name="virtualMachineUuid" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.virtualMachineUuid"></a>

```java
public java.lang.String getVirtualMachineUuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#virtual_machine_uuid VirtualMachineSnapshot#virtual_machine_uuid}.

---

##### `consolidate`<sup>Optional</sup> <a name="consolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.consolidate"></a>

```java
public java.lang.Object getConsolidate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#consolidate VirtualMachineSnapshot#consolidate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#id VirtualMachineSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `removeChildren`<sup>Optional</sup> <a name="removeChildren" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.removeChildren"></a>

```java
public java.lang.Object getRemoveChildren();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/virtual_machine_snapshot#remove_children VirtualMachineSnapshot#remove_children}.

---



