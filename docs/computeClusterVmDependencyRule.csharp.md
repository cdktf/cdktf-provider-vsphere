# `computeClusterVmDependencyRule` Submodule <a name="`computeClusterVmDependencyRule` Submodule" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeClusterVmDependencyRule <a name="ComputeClusterVmDependencyRule" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/compute_cluster_vm_dependency_rule vsphere_compute_cluster_vm_dependency_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ComputeClusterVmDependencyRule(Construct Scope, string Id, ComputeClusterVmDependencyRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig">ComputeClusterVmDependencyRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig">ComputeClusterVmDependencyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetMandatory">ResetMandatory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMandatory` <a name="ResetMandatory" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetMandatory"></a>

```csharp
private void ResetMandatory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeClusterVmDependencyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ComputeClusterVmDependencyRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ComputeClusterVmDependencyRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ComputeClusterVmDependencyRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ComputeClusterVmDependencyRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeClusterVmDependencyRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeClusterVmDependencyRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeClusterVmDependencyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/compute_cluster_vm_dependency_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeClusterVmDependencyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.computeClusterIdInput">ComputeClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependencyVmGroupNameInput">DependencyVmGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.mandatoryInput">MandatoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.vmGroupNameInput">VmGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.computeClusterId">ComputeClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependencyVmGroupName">DependencyVmGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.mandatory">Mandatory</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.vmGroupName">VmGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComputeClusterIdInput`<sup>Optional</sup> <a name="ComputeClusterIdInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.computeClusterIdInput"></a>

```csharp
public string ComputeClusterIdInput { get; }
```

- *Type:* string

---

##### `DependencyVmGroupNameInput`<sup>Optional</sup> <a name="DependencyVmGroupNameInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependencyVmGroupNameInput"></a>

```csharp
public string DependencyVmGroupNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MandatoryInput`<sup>Optional</sup> <a name="MandatoryInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.mandatoryInput"></a>

```csharp
public object MandatoryInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VmGroupNameInput`<sup>Optional</sup> <a name="VmGroupNameInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.vmGroupNameInput"></a>

```csharp
public string VmGroupNameInput { get; }
```

- *Type:* string

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.computeClusterId"></a>

```csharp
public string ComputeClusterId { get; }
```

- *Type:* string

---

##### `DependencyVmGroupName`<sup>Required</sup> <a name="DependencyVmGroupName" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependencyVmGroupName"></a>

```csharp
public string DependencyVmGroupName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mandatory`<sup>Required</sup> <a name="Mandatory" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.mandatory"></a>

```csharp
public object Mandatory { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VmGroupName`<sup>Required</sup> <a name="VmGroupName" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.vmGroupName"></a>

```csharp
public string VmGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterVmDependencyRuleConfig <a name="ComputeClusterVmDependencyRuleConfig" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ComputeClusterVmDependencyRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ComputeClusterId,
    string DependencyVmGroupName,
    string Name,
    string VmGroupName,
    object Enabled = null,
    string Id = null,
    object Mandatory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.computeClusterId">ComputeClusterId</a></code> | <code>string</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.dependencyVmGroupName">DependencyVmGroupName</a></code> | <code>string</code> | The name of the VM group that this rule depends on. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.name">Name</a></code> | <code>string</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.vmGroupName">VmGroupName</a></code> | <code>string</code> | The name of the VM group that is the subject of this rule. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/compute_cluster_vm_dependency_rule#id ComputeClusterVmDependencyRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.mandatory">Mandatory</a></code> | <code>object</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.computeClusterId"></a>

```csharp
public string ComputeClusterId { get; set; }
```

- *Type:* string

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/compute_cluster_vm_dependency_rule#compute_cluster_id ComputeClusterVmDependencyRule#compute_cluster_id}

---

##### `DependencyVmGroupName`<sup>Required</sup> <a name="DependencyVmGroupName" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.dependencyVmGroupName"></a>

```csharp
public string DependencyVmGroupName { get; set; }
```

- *Type:* string

The name of the VM group that this rule depends on.

The VMs defined in the group specified by vm_group_name will not be started until the VMs in this group are started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/compute_cluster_vm_dependency_rule#dependency_vm_group_name ComputeClusterVmDependencyRule#dependency_vm_group_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/compute_cluster_vm_dependency_rule#name ComputeClusterVmDependencyRule#name}

---

##### `VmGroupName`<sup>Required</sup> <a name="VmGroupName" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.vmGroupName"></a>

```csharp
public string VmGroupName { get; set; }
```

- *Type:* string

The name of the VM group that is the subject of this rule.

The VMs defined in this group will not be started until the VMs in the group specified by dependency_vm_group_name are started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/compute_cluster_vm_dependency_rule#vm_group_name ComputeClusterVmDependencyRule#vm_group_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/compute_cluster_vm_dependency_rule#enabled ComputeClusterVmDependencyRule#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/compute_cluster_vm_dependency_rule#id ComputeClusterVmDependencyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mandatory`<sup>Optional</sup> <a name="Mandatory" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.mandatory"></a>

```csharp
public object Mandatory { get; set; }
```

- *Type:* object

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/compute_cluster_vm_dependency_rule#mandatory ComputeClusterVmDependencyRule#mandatory}

---



