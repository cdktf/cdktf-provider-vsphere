# `vsphere_compute_cluster_vm_host_rule`

Refer to the Terraform Registory for docs: [`vsphere_compute_cluster_vm_host_rule`](https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule).

# `computeClusterVmHostRule` Submodule <a name="`computeClusterVmHostRule` Submodule" id="@cdktf/provider-vsphere.computeClusterVmHostRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeClusterVmHostRule <a name="ComputeClusterVmHostRule" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule vsphere_compute_cluster_vm_host_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ComputeClusterVmHostRule(Construct Scope, string Id, ComputeClusterVmHostRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig">ComputeClusterVmHostRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig">ComputeClusterVmHostRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAffinityHostGroupName">ResetAffinityHostGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAntiAffinityHostGroupName">ResetAntiAffinityHostGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetMandatory">ResetMandatory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAffinityHostGroupName` <a name="ResetAffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAffinityHostGroupName"></a>

```csharp
private void ResetAffinityHostGroupName()
```

##### `ResetAntiAffinityHostGroupName` <a name="ResetAntiAffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAntiAffinityHostGroupName"></a>

```csharp
private void ResetAntiAffinityHostGroupName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMandatory` <a name="ResetMandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetMandatory"></a>

```csharp
private void ResetMandatory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ComputeClusterVmHostRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ComputeClusterVmHostRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ComputeClusterVmHostRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupNameInput">AffinityHostGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupNameInput">AntiAffinityHostGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterIdInput">ComputeClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatoryInput">MandatoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupNameInput">VmGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupName">AffinityHostGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupName">AntiAffinityHostGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterId">ComputeClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatory">Mandatory</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupName">VmGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AffinityHostGroupNameInput`<sup>Optional</sup> <a name="AffinityHostGroupNameInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupNameInput"></a>

```csharp
public string AffinityHostGroupNameInput { get; }
```

- *Type:* string

---

##### `AntiAffinityHostGroupNameInput`<sup>Optional</sup> <a name="AntiAffinityHostGroupNameInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupNameInput"></a>

```csharp
public string AntiAffinityHostGroupNameInput { get; }
```

- *Type:* string

---

##### `ComputeClusterIdInput`<sup>Optional</sup> <a name="ComputeClusterIdInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterIdInput"></a>

```csharp
public string ComputeClusterIdInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MandatoryInput`<sup>Optional</sup> <a name="MandatoryInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatoryInput"></a>

```csharp
public object MandatoryInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VmGroupNameInput`<sup>Optional</sup> <a name="VmGroupNameInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupNameInput"></a>

```csharp
public string VmGroupNameInput { get; }
```

- *Type:* string

---

##### `AffinityHostGroupName`<sup>Required</sup> <a name="AffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupName"></a>

```csharp
public string AffinityHostGroupName { get; }
```

- *Type:* string

---

##### `AntiAffinityHostGroupName`<sup>Required</sup> <a name="AntiAffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupName"></a>

```csharp
public string AntiAffinityHostGroupName { get; }
```

- *Type:* string

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterId"></a>

```csharp
public string ComputeClusterId { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mandatory`<sup>Required</sup> <a name="Mandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatory"></a>

```csharp
public object Mandatory { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VmGroupName`<sup>Required</sup> <a name="VmGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupName"></a>

```csharp
public string VmGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterVmHostRuleConfig <a name="ComputeClusterVmHostRuleConfig" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ComputeClusterVmHostRuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ComputeClusterId,
    string Name,
    string VmGroupName,
    string AffinityHostGroupName = null,
    string AntiAffinityHostGroupName = null,
    object Enabled = null,
    string Id = null,
    object Mandatory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.computeClusterId">ComputeClusterId</a></code> | <code>string</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.name">Name</a></code> | <code>string</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.vmGroupName">VmGroupName</a></code> | <code>string</code> | The name of the virtual machine group to use with this rule. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.affinityHostGroupName">AffinityHostGroupName</a></code> | <code>string</code> | When this field is used, virtual machines defined in vm_group_name will be run on the hosts defined in this host group. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.antiAffinityHostGroupName">AntiAffinityHostGroupName</a></code> | <code>string</code> | When this field is used, virtual machines defined in vm_group_name will not be run on the hosts defined in this host group. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#id ComputeClusterVmHostRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.mandatory">Mandatory</a></code> | <code>object</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.computeClusterId"></a>

```csharp
public string ComputeClusterId { get; set; }
```

- *Type:* string

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#compute_cluster_id ComputeClusterVmHostRule#compute_cluster_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#name ComputeClusterVmHostRule#name}

---

##### `VmGroupName`<sup>Required</sup> <a name="VmGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.vmGroupName"></a>

```csharp
public string VmGroupName { get; set; }
```

- *Type:* string

The name of the virtual machine group to use with this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#vm_group_name ComputeClusterVmHostRule#vm_group_name}

---

##### `AffinityHostGroupName`<sup>Optional</sup> <a name="AffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.affinityHostGroupName"></a>

```csharp
public string AffinityHostGroupName { get; set; }
```

- *Type:* string

When this field is used, virtual machines defined in vm_group_name will be run on the hosts defined in this host group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#affinity_host_group_name ComputeClusterVmHostRule#affinity_host_group_name}

---

##### `AntiAffinityHostGroupName`<sup>Optional</sup> <a name="AntiAffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.antiAffinityHostGroupName"></a>

```csharp
public string AntiAffinityHostGroupName { get; set; }
```

- *Type:* string

When this field is used, virtual machines defined in vm_group_name will not be run on the hosts defined in this host group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#anti_affinity_host_group_name ComputeClusterVmHostRule#anti_affinity_host_group_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#enabled ComputeClusterVmHostRule#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#id ComputeClusterVmHostRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mandatory`<sup>Optional</sup> <a name="Mandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.mandatory"></a>

```csharp
public object Mandatory { get; set; }
```

- *Type:* object

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/compute_cluster_vm_host_rule#mandatory ComputeClusterVmHostRule#mandatory}

---



