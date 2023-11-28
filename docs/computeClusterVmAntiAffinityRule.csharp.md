# `computeClusterVmAntiAffinityRule` Submodule <a name="`computeClusterVmAntiAffinityRule` Submodule" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeClusterVmAntiAffinityRule <a name="ComputeClusterVmAntiAffinityRule" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/compute_cluster_vm_anti_affinity_rule vsphere_compute_cluster_vm_anti_affinity_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ComputeClusterVmAntiAffinityRule(Construct Scope, string Id, ComputeClusterVmAntiAffinityRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig">ComputeClusterVmAntiAffinityRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig">ComputeClusterVmAntiAffinityRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetMandatory">ResetMandatory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMandatory` <a name="ResetMandatory" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.resetMandatory"></a>

```csharp
private void ResetMandatory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeClusterVmAntiAffinityRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ComputeClusterVmAntiAffinityRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ComputeClusterVmAntiAffinityRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ComputeClusterVmAntiAffinityRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ComputeClusterVmAntiAffinityRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeClusterVmAntiAffinityRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeClusterVmAntiAffinityRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeClusterVmAntiAffinityRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/compute_cluster_vm_anti_affinity_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeClusterVmAntiAffinityRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.computeClusterIdInput">ComputeClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.mandatoryInput">MandatoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.virtualMachineIdsInput">VirtualMachineIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.computeClusterId">ComputeClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.mandatory">Mandatory</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.virtualMachineIds">VirtualMachineIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComputeClusterIdInput`<sup>Optional</sup> <a name="ComputeClusterIdInput" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.computeClusterIdInput"></a>

```csharp
public string ComputeClusterIdInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MandatoryInput`<sup>Optional</sup> <a name="MandatoryInput" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.mandatoryInput"></a>

```csharp
public object MandatoryInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VirtualMachineIdsInput`<sup>Optional</sup> <a name="VirtualMachineIdsInput" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.virtualMachineIdsInput"></a>

```csharp
public string[] VirtualMachineIdsInput { get; }
```

- *Type:* string[]

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.computeClusterId"></a>

```csharp
public string ComputeClusterId { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mandatory`<sup>Required</sup> <a name="Mandatory" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.mandatory"></a>

```csharp
public object Mandatory { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VirtualMachineIds`<sup>Required</sup> <a name="VirtualMachineIds" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.virtualMachineIds"></a>

```csharp
public string[] VirtualMachineIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterVmAntiAffinityRuleConfig <a name="ComputeClusterVmAntiAffinityRuleConfig" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ComputeClusterVmAntiAffinityRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ComputeClusterId,
    string Name,
    string[] VirtualMachineIds,
    object Enabled = null,
    string Id = null,
    object Mandatory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.computeClusterId">ComputeClusterId</a></code> | <code>string</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.name">Name</a></code> | <code>string</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.virtualMachineIds">VirtualMachineIds</a></code> | <code>string[]</code> | The UUIDs of the virtual machines to run on hosts different from each other. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/compute_cluster_vm_anti_affinity_rule#id ComputeClusterVmAntiAffinityRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.mandatory">Mandatory</a></code> | <code>object</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.computeClusterId"></a>

```csharp
public string ComputeClusterId { get; set; }
```

- *Type:* string

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/compute_cluster_vm_anti_affinity_rule#compute_cluster_id ComputeClusterVmAntiAffinityRule#compute_cluster_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/compute_cluster_vm_anti_affinity_rule#name ComputeClusterVmAntiAffinityRule#name}

---

##### `VirtualMachineIds`<sup>Required</sup> <a name="VirtualMachineIds" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.virtualMachineIds"></a>

```csharp
public string[] VirtualMachineIds { get; set; }
```

- *Type:* string[]

The UUIDs of the virtual machines to run on hosts different from each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/compute_cluster_vm_anti_affinity_rule#virtual_machine_ids ComputeClusterVmAntiAffinityRule#virtual_machine_ids}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/compute_cluster_vm_anti_affinity_rule#enabled ComputeClusterVmAntiAffinityRule#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/compute_cluster_vm_anti_affinity_rule#id ComputeClusterVmAntiAffinityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mandatory`<sup>Optional</sup> <a name="Mandatory" id="@cdktf/provider-vsphere.computeClusterVmAntiAffinityRule.ComputeClusterVmAntiAffinityRuleConfig.property.mandatory"></a>

```csharp
public object Mandatory { get; set; }
```

- *Type:* object

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/compute_cluster_vm_anti_affinity_rule#mandatory ComputeClusterVmAntiAffinityRule#mandatory}

---



