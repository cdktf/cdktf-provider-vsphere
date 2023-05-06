# `vsphere_compute_cluster_vm_host_rule`

Refer to the Terraform Registory for docs: [`vsphere_compute_cluster_vm_host_rule`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule).

# `computeClusterVmHostRule` Submodule <a name="`computeClusterVmHostRule` Submodule" id="@cdktf/provider-vsphere.computeClusterVmHostRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeClusterVmHostRule <a name="ComputeClusterVmHostRule" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule vsphere_compute_cluster_vm_host_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster_vm_host_rule.ComputeClusterVmHostRule;

ComputeClusterVmHostRule.Builder.create(Construct scope, java.lang.String id)
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
    .vmGroupName(java.lang.String)
//  .affinityHostGroupName(java.lang.String)
//  .antiAffinityHostGroupName(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .mandatory(java.lang.Boolean)
//  .mandatory(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.computeClusterId">computeClusterId</a></code> | <code>java.lang.String</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.vmGroupName">vmGroupName</a></code> | <code>java.lang.String</code> | The name of the virtual machine group to use with this rule. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.affinityHostGroupName">affinityHostGroupName</a></code> | <code>java.lang.String</code> | When this field is used, virtual machines defined in vm_group_name will be run on the hosts defined in this host group. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.antiAffinityHostGroupName">antiAffinityHostGroupName</a></code> | <code>java.lang.String</code> | When this field is used, virtual machines defined in vm_group_name will not be run on the hosts defined in this host group. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#id ComputeClusterVmHostRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.mandatory">mandatory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.computeClusterId"></a>

- *Type:* java.lang.String

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#compute_cluster_id ComputeClusterVmHostRule#compute_cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#name ComputeClusterVmHostRule#name}

---

##### `vmGroupName`<sup>Required</sup> <a name="vmGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.vmGroupName"></a>

- *Type:* java.lang.String

The name of the virtual machine group to use with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#vm_group_name ComputeClusterVmHostRule#vm_group_name}

---

##### `affinityHostGroupName`<sup>Optional</sup> <a name="affinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.affinityHostGroupName"></a>

- *Type:* java.lang.String

When this field is used, virtual machines defined in vm_group_name will be run on the hosts defined in this host group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#affinity_host_group_name ComputeClusterVmHostRule#affinity_host_group_name}

---

##### `antiAffinityHostGroupName`<sup>Optional</sup> <a name="antiAffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.antiAffinityHostGroupName"></a>

- *Type:* java.lang.String

When this field is used, virtual machines defined in vm_group_name will not be run on the hosts defined in this host group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#anti_affinity_host_group_name ComputeClusterVmHostRule#anti_affinity_host_group_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#enabled ComputeClusterVmHostRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#id ComputeClusterVmHostRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.mandatory"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#mandatory ComputeClusterVmHostRule#mandatory}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAffinityHostGroupName">resetAffinityHostGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAntiAffinityHostGroupName">resetAntiAffinityHostGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetMandatory">resetMandatory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAffinityHostGroupName` <a name="resetAffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAffinityHostGroupName"></a>

```java
public void resetAffinityHostGroupName()
```

##### `resetAntiAffinityHostGroupName` <a name="resetAntiAffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAntiAffinityHostGroupName"></a>

```java
public void resetAntiAffinityHostGroupName()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetId"></a>

```java
public void resetId()
```

##### `resetMandatory` <a name="resetMandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetMandatory"></a>

```java
public void resetMandatory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster_vm_host_rule.ComputeClusterVmHostRule;

ComputeClusterVmHostRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster_vm_host_rule.ComputeClusterVmHostRule;

ComputeClusterVmHostRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster_vm_host_rule.ComputeClusterVmHostRule;

ComputeClusterVmHostRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupNameInput">affinityHostGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupNameInput">antiAffinityHostGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterIdInput">computeClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatoryInput">mandatoryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupNameInput">vmGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupName">affinityHostGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupName">antiAffinityHostGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterId">computeClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatory">mandatory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupName">vmGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `affinityHostGroupNameInput`<sup>Optional</sup> <a name="affinityHostGroupNameInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupNameInput"></a>

```java
public java.lang.String getAffinityHostGroupNameInput();
```

- *Type:* java.lang.String

---

##### `antiAffinityHostGroupNameInput`<sup>Optional</sup> <a name="antiAffinityHostGroupNameInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupNameInput"></a>

```java
public java.lang.String getAntiAffinityHostGroupNameInput();
```

- *Type:* java.lang.String

---

##### `computeClusterIdInput`<sup>Optional</sup> <a name="computeClusterIdInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterIdInput"></a>

```java
public java.lang.String getComputeClusterIdInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mandatoryInput`<sup>Optional</sup> <a name="mandatoryInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatoryInput"></a>

```java
public java.lang.Object getMandatoryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `vmGroupNameInput`<sup>Optional</sup> <a name="vmGroupNameInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupNameInput"></a>

```java
public java.lang.String getVmGroupNameInput();
```

- *Type:* java.lang.String

---

##### `affinityHostGroupName`<sup>Required</sup> <a name="affinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupName"></a>

```java
public java.lang.String getAffinityHostGroupName();
```

- *Type:* java.lang.String

---

##### `antiAffinityHostGroupName`<sup>Required</sup> <a name="antiAffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupName"></a>

```java
public java.lang.String getAntiAffinityHostGroupName();
```

- *Type:* java.lang.String

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterId"></a>

```java
public java.lang.String getComputeClusterId();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mandatory`<sup>Required</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatory"></a>

```java
public java.lang.Object getMandatory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `vmGroupName`<sup>Required</sup> <a name="vmGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupName"></a>

```java
public java.lang.String getVmGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterVmHostRuleConfig <a name="ComputeClusterVmHostRuleConfig" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.compute_cluster_vm_host_rule.ComputeClusterVmHostRuleConfig;

ComputeClusterVmHostRuleConfig.builder()
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
    .vmGroupName(java.lang.String)
//  .affinityHostGroupName(java.lang.String)
//  .antiAffinityHostGroupName(java.lang.String)
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
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.computeClusterId">computeClusterId</a></code> | <code>java.lang.String</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.vmGroupName">vmGroupName</a></code> | <code>java.lang.String</code> | The name of the virtual machine group to use with this rule. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.affinityHostGroupName">affinityHostGroupName</a></code> | <code>java.lang.String</code> | When this field is used, virtual machines defined in vm_group_name will be run on the hosts defined in this host group. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.antiAffinityHostGroupName">antiAffinityHostGroupName</a></code> | <code>java.lang.String</code> | When this field is used, virtual machines defined in vm_group_name will not be run on the hosts defined in this host group. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#id ComputeClusterVmHostRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.mandatory">mandatory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.computeClusterId"></a>

```java
public java.lang.String getComputeClusterId();
```

- *Type:* java.lang.String

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#compute_cluster_id ComputeClusterVmHostRule#compute_cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#name ComputeClusterVmHostRule#name}

---

##### `vmGroupName`<sup>Required</sup> <a name="vmGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.vmGroupName"></a>

```java
public java.lang.String getVmGroupName();
```

- *Type:* java.lang.String

The name of the virtual machine group to use with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#vm_group_name ComputeClusterVmHostRule#vm_group_name}

---

##### `affinityHostGroupName`<sup>Optional</sup> <a name="affinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.affinityHostGroupName"></a>

```java
public java.lang.String getAffinityHostGroupName();
```

- *Type:* java.lang.String

When this field is used, virtual machines defined in vm_group_name will be run on the hosts defined in this host group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#affinity_host_group_name ComputeClusterVmHostRule#affinity_host_group_name}

---

##### `antiAffinityHostGroupName`<sup>Optional</sup> <a name="antiAffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.antiAffinityHostGroupName"></a>

```java
public java.lang.String getAntiAffinityHostGroupName();
```

- *Type:* java.lang.String

When this field is used, virtual machines defined in vm_group_name will not be run on the hosts defined in this host group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#anti_affinity_host_group_name ComputeClusterVmHostRule#anti_affinity_host_group_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#enabled ComputeClusterVmHostRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#id ComputeClusterVmHostRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.mandatory"></a>

```java
public java.lang.Object getMandatory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/compute_cluster_vm_host_rule#mandatory ComputeClusterVmHostRule#mandatory}

---



