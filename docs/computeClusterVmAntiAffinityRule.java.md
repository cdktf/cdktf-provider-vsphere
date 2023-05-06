# `vsphere_compute_cluster_vm_anti_affinity_rule`

Refer to the Terraform Registory for docs: [`vsphere_compute_cluster_vm_anti_affinity_rule`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule).

# `computeClusterVmAntiAffinityRule` Submodule <a name="`computeClusterVmAntiAffinityRule` Submodule" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeClusterVmAntiAffinityRule <a name="ComputeClusterVmAntiAffinityRule" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule vsphere_compute_cluster_vm_anti_affinity_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster_vm_anti_affinity_rule.ComputeClusterVmAntiAffinityRule;

ComputeClusterVmAntiAffinityRule.Builder.create(Construct scope, java.lang.String id)
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
    .computeClusterId(java.lang.String)
    .name(java.lang.String)
    .virtualMachineIds(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .mandatory(java.lang.Boolean)
//  .mandatory(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.computeClusterId">computeClusterId</a></code> | <code>java.lang.String</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.virtualMachineIds">virtualMachineIds</a></code> | <code>java.util.List<java.lang.String></code> | The UUIDs of the virtual machines to run on hosts different from each other. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#id ComputeClusterVmAntiAffinityRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.mandatory">mandatory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.computeClusterId"></a>

- *Type:* java.lang.String

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#compute_cluster_id ComputeClusterVmAntiAffinityRule#compute_cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#name ComputeClusterVmAntiAffinityRule#name}

---

##### `virtualMachineIds`<sup>Required</sup> <a name="virtualMachineIds" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.virtualMachineIds"></a>

- *Type:* java.util.List<java.lang.String>

The UUIDs of the virtual machines to run on hosts different from each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#virtual_machine_ids ComputeClusterVmAntiAffinityRule#virtual_machine_ids}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#enabled ComputeClusterVmAntiAffinityRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#id ComputeClusterVmAntiAffinityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.mandatory"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#mandatory ComputeClusterVmAntiAffinityRule#mandatory}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetMandatory">resetMandatory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetId"></a>

```java
public void resetId()
```

##### `resetMandatory` <a name="resetMandatory" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetMandatory"></a>

```java
public void resetMandatory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster_vm_anti_affinity_rule.ComputeClusterVmAntiAffinityRule;

ComputeClusterVmAntiAffinityRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster_vm_anti_affinity_rule.ComputeClusterVmAntiAffinityRule;

ComputeClusterVmAntiAffinityRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster_vm_anti_affinity_rule.ComputeClusterVmAntiAffinityRule;

ComputeClusterVmAntiAffinityRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.computeClusterIdInput">computeClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.mandatoryInput">mandatoryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.virtualMachineIdsInput">virtualMachineIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.computeClusterId">computeClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.mandatory">mandatory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.virtualMachineIds">virtualMachineIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeClusterIdInput`<sup>Optional</sup> <a name="computeClusterIdInput" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.computeClusterIdInput"></a>

```java
public java.lang.String getComputeClusterIdInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mandatoryInput`<sup>Optional</sup> <a name="mandatoryInput" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.mandatoryInput"></a>

```java
public java.lang.Object getMandatoryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineIdsInput`<sup>Optional</sup> <a name="virtualMachineIdsInput" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.virtualMachineIdsInput"></a>

```java
public java.util.List<java.lang.String> getVirtualMachineIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.computeClusterId"></a>

```java
public java.lang.String getComputeClusterId();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mandatory`<sup>Required</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.mandatory"></a>

```java
public java.lang.Object getMandatory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `virtualMachineIds`<sup>Required</sup> <a name="virtualMachineIds" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.virtualMachineIds"></a>

```java
public java.util.List<java.lang.String> getVirtualMachineIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterVmAntiAffinityRuleConfig <a name="ComputeClusterVmAntiAffinityRuleConfig" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster_vm_anti_affinity_rule.ComputeClusterVmAntiAffinityRuleConfig;

ComputeClusterVmAntiAffinityRuleConfig.builder()
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
    .computeClusterId(java.lang.String)
    .name(java.lang.String)
    .virtualMachineIds(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .mandatory(java.lang.Boolean)
//  .mandatory(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.computeClusterId">computeClusterId</a></code> | <code>java.lang.String</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.virtualMachineIds">virtualMachineIds</a></code> | <code>java.util.List<java.lang.String></code> | The UUIDs of the virtual machines to run on hosts different from each other. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#id ComputeClusterVmAntiAffinityRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.mandatory">mandatory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.computeClusterId"></a>

```java
public java.lang.String getComputeClusterId();
```

- *Type:* java.lang.String

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#compute_cluster_id ComputeClusterVmAntiAffinityRule#compute_cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#name ComputeClusterVmAntiAffinityRule#name}

---

##### `virtualMachineIds`<sup>Required</sup> <a name="virtualMachineIds" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.virtualMachineIds"></a>

```java
public java.util.List<java.lang.String> getVirtualMachineIds();
```

- *Type:* java.util.List<java.lang.String>

The UUIDs of the virtual machines to run on hosts different from each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#virtual_machine_ids ComputeClusterVmAntiAffinityRule#virtual_machine_ids}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#enabled ComputeClusterVmAntiAffinityRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#id ComputeClusterVmAntiAffinityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.mandatory"></a>

```java
public java.lang.Object getMandatory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_anti_affinity_rule#mandatory ComputeClusterVmAntiAffinityRule#mandatory}

---



