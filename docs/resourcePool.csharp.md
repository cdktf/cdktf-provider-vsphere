# `resourcePool` Submodule <a name="`resourcePool` Submodule" id="@cdktf/provider-vsphere.resourcePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcePool <a name="ResourcePool" id="@cdktf/provider-vsphere.resourcePool.ResourcePool"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool vsphere_resource_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ResourcePool(Construct Scope, string Id, ResourcePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig">ResourcePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig">ResourcePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuExpandable">ResetCpuExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuLimit">ResetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuReservation">ResetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShareLevel">ResetCpuShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShares">ResetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryExpandable">ResetMemoryExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryLimit">ResetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryReservation">ResetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShareLevel">ResetMemoryShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShares">ResetMemoryShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetScaleDescendantsShares">ResetScaleDescendantsShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCpuExpandable` <a name="ResetCpuExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuExpandable"></a>

```csharp
private void ResetCpuExpandable()
```

##### `ResetCpuLimit` <a name="ResetCpuLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuLimit"></a>

```csharp
private void ResetCpuLimit()
```

##### `ResetCpuReservation` <a name="ResetCpuReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuReservation"></a>

```csharp
private void ResetCpuReservation()
```

##### `ResetCpuShareLevel` <a name="ResetCpuShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShareLevel"></a>

```csharp
private void ResetCpuShareLevel()
```

##### `ResetCpuShares` <a name="ResetCpuShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShares"></a>

```csharp
private void ResetCpuShares()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCustomAttributes"></a>

```csharp
private void ResetCustomAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMemoryExpandable` <a name="ResetMemoryExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryExpandable"></a>

```csharp
private void ResetMemoryExpandable()
```

##### `ResetMemoryLimit` <a name="ResetMemoryLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryLimit"></a>

```csharp
private void ResetMemoryLimit()
```

##### `ResetMemoryReservation` <a name="ResetMemoryReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryReservation"></a>

```csharp
private void ResetMemoryReservation()
```

##### `ResetMemoryShareLevel` <a name="ResetMemoryShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShareLevel"></a>

```csharp
private void ResetMemoryShareLevel()
```

##### `ResetMemoryShares` <a name="ResetMemoryShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShares"></a>

```csharp
private void ResetMemoryShares()
```

##### `ResetScaleDescendantsShares` <a name="ResetScaleDescendantsShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetScaleDescendantsShares"></a>

```csharp
private void ResetScaleDescendantsShares()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourcePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ResourcePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ResourcePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ResourcePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ResourcePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ResourcePool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourcePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourcePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ResourcePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandableInput">CpuExpandableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimitInput">CpuLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservationInput">CpuReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevelInput">CpuShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuSharesInput">CpuSharesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributesInput">CustomAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandableInput">MemoryExpandableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimitInput">MemoryLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservationInput">MemoryReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevelInput">MemoryShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memorySharesInput">MemorySharesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolIdInput">ParentResourcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsSharesInput">ScaleDescendantsSharesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandable">CpuExpandable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimit">CpuLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservation">CpuReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevel">CpuShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShares">CpuShares</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandable">MemoryExpandable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimit">MemoryLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShares">MemoryShares</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolId">ParentResourcePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsShares">ScaleDescendantsShares</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CpuExpandableInput`<sup>Optional</sup> <a name="CpuExpandableInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandableInput"></a>

```csharp
public object CpuExpandableInput { get; }
```

- *Type:* object

---

##### `CpuLimitInput`<sup>Optional</sup> <a name="CpuLimitInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimitInput"></a>

```csharp
public double CpuLimitInput { get; }
```

- *Type:* double

---

##### `CpuReservationInput`<sup>Optional</sup> <a name="CpuReservationInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservationInput"></a>

```csharp
public double CpuReservationInput { get; }
```

- *Type:* double

---

##### `CpuShareLevelInput`<sup>Optional</sup> <a name="CpuShareLevelInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevelInput"></a>

```csharp
public string CpuShareLevelInput { get; }
```

- *Type:* string

---

##### `CpuSharesInput`<sup>Optional</sup> <a name="CpuSharesInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuSharesInput"></a>

```csharp
public double CpuSharesInput { get; }
```

- *Type:* double

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemoryExpandableInput`<sup>Optional</sup> <a name="MemoryExpandableInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandableInput"></a>

```csharp
public object MemoryExpandableInput { get; }
```

- *Type:* object

---

##### `MemoryLimitInput`<sup>Optional</sup> <a name="MemoryLimitInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimitInput"></a>

```csharp
public double MemoryLimitInput { get; }
```

- *Type:* double

---

##### `MemoryReservationInput`<sup>Optional</sup> <a name="MemoryReservationInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservationInput"></a>

```csharp
public double MemoryReservationInput { get; }
```

- *Type:* double

---

##### `MemoryShareLevelInput`<sup>Optional</sup> <a name="MemoryShareLevelInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevelInput"></a>

```csharp
public string MemoryShareLevelInput { get; }
```

- *Type:* string

---

##### `MemorySharesInput`<sup>Optional</sup> <a name="MemorySharesInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memorySharesInput"></a>

```csharp
public double MemorySharesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentResourcePoolIdInput`<sup>Optional</sup> <a name="ParentResourcePoolIdInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolIdInput"></a>

```csharp
public string ParentResourcePoolIdInput { get; }
```

- *Type:* string

---

##### `ScaleDescendantsSharesInput`<sup>Optional</sup> <a name="ScaleDescendantsSharesInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsSharesInput"></a>

```csharp
public string ScaleDescendantsSharesInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `CpuExpandable`<sup>Required</sup> <a name="CpuExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandable"></a>

```csharp
public object CpuExpandable { get; }
```

- *Type:* object

---

##### `CpuLimit`<sup>Required</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimit"></a>

```csharp
public double CpuLimit { get; }
```

- *Type:* double

---

##### `CpuReservation`<sup>Required</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservation"></a>

```csharp
public double CpuReservation { get; }
```

- *Type:* double

---

##### `CpuShareLevel`<sup>Required</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevel"></a>

```csharp
public string CpuShareLevel { get; }
```

- *Type:* string

---

##### `CpuShares`<sup>Required</sup> <a name="CpuShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShares"></a>

```csharp
public double CpuShares { get; }
```

- *Type:* double

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MemoryExpandable`<sup>Required</sup> <a name="MemoryExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandable"></a>

```csharp
public object MemoryExpandable { get; }
```

- *Type:* object

---

##### `MemoryLimit`<sup>Required</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimit"></a>

```csharp
public double MemoryLimit { get; }
```

- *Type:* double

---

##### `MemoryReservation`<sup>Required</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; }
```

- *Type:* double

---

##### `MemoryShareLevel`<sup>Required</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevel"></a>

```csharp
public string MemoryShareLevel { get; }
```

- *Type:* string

---

##### `MemoryShares`<sup>Required</sup> <a name="MemoryShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShares"></a>

```csharp
public double MemoryShares { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentResourcePoolId`<sup>Required</sup> <a name="ParentResourcePoolId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolId"></a>

```csharp
public string ParentResourcePoolId { get; }
```

- *Type:* string

---

##### `ScaleDescendantsShares`<sup>Required</sup> <a name="ScaleDescendantsShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsShares"></a>

```csharp
public string ScaleDescendantsShares { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcePoolConfig <a name="ResourcePoolConfig" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ResourcePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ParentResourcePoolId,
    object CpuExpandable = null,
    double CpuLimit = null,
    double CpuReservation = null,
    string CpuShareLevel = null,
    double CpuShares = null,
    System.Collections.Generic.IDictionary<string, string> CustomAttributes = null,
    string Id = null,
    object MemoryExpandable = null,
    double MemoryLimit = null,
    double MemoryReservation = null,
    string MemoryShareLevel = null,
    double MemoryShares = null,
    string ScaleDescendantsShares = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.name">Name</a></code> | <code>string</code> | Name of resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.parentResourcePoolId">ParentResourcePoolId</a></code> | <code>string</code> | The ID of the root resource pool of the compute resource the resource pool is in. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuExpandable">CpuExpandable</a></code> | <code>object</code> | Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuLimit">CpuLimit</a></code> | <code>double</code> | The utilization of a resource pool will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuReservation">CpuReservation</a></code> | <code>double</code> | Amount of CPU (MHz) that is guaranteed available to the resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShareLevel">CpuShareLevel</a></code> | <code>string</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShares">CpuShares</a></code> | <code>double</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#id ResourcePool#id}. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryExpandable">MemoryExpandable</a></code> | <code>object</code> | Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryLimit">MemoryLimit</a></code> | <code>double</code> | The utilization of a resource pool will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | Amount of memory (MB) that is guaranteed available to the resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>string</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShares">MemoryShares</a></code> | <code>double</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.scaleDescendantsShares">ScaleDescendantsShares</a></code> | <code>string</code> | Determines if the shares of all descendants of the resource pool are scaled up or down when the shares of the resource pool are scaled up or down. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#name ResourcePool#name}

---

##### `ParentResourcePoolId`<sup>Required</sup> <a name="ParentResourcePoolId" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.parentResourcePoolId"></a>

```csharp
public string ParentResourcePoolId { get; set; }
```

- *Type:* string

The ID of the root resource pool of the compute resource the resource pool is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#parent_resource_pool_id ResourcePool#parent_resource_pool_id}

---

##### `CpuExpandable`<sup>Optional</sup> <a name="CpuExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuExpandable"></a>

```csharp
public object CpuExpandable { get; set; }
```

- *Type:* object

Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#cpu_expandable ResourcePool#cpu_expandable}

---

##### `CpuLimit`<sup>Optional</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuLimit"></a>

```csharp
public double CpuLimit { get; set; }
```

- *Type:* double

The utilization of a resource pool will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#cpu_limit ResourcePool#cpu_limit}

---

##### `CpuReservation`<sup>Optional</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuReservation"></a>

```csharp
public double CpuReservation { get; set; }
```

- *Type:* double

Amount of CPU (MHz) that is guaranteed available to the resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#cpu_reservation ResourcePool#cpu_reservation}

---

##### `CpuShareLevel`<sup>Optional</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShareLevel"></a>

```csharp
public string CpuShareLevel { get; set; }
```

- *Type:* string

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#cpu_share_level ResourcePool#cpu_share_level}

---

##### `CpuShares`<sup>Optional</sup> <a name="CpuShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShares"></a>

```csharp
public double CpuShares { get; set; }
```

- *Type:* double

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#cpu_shares ResourcePool#cpu_shares}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#custom_attributes ResourcePool#custom_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#id ResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemoryExpandable`<sup>Optional</sup> <a name="MemoryExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryExpandable"></a>

```csharp
public object MemoryExpandable { get; set; }
```

- *Type:* object

Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#memory_expandable ResourcePool#memory_expandable}

---

##### `MemoryLimit`<sup>Optional</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryLimit"></a>

```csharp
public double MemoryLimit { get; set; }
```

- *Type:* double

The utilization of a resource pool will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#memory_limit ResourcePool#memory_limit}

---

##### `MemoryReservation`<sup>Optional</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; set; }
```

- *Type:* double

Amount of memory (MB) that is guaranteed available to the resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#memory_reservation ResourcePool#memory_reservation}

---

##### `MemoryShareLevel`<sup>Optional</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShareLevel"></a>

```csharp
public string MemoryShareLevel { get; set; }
```

- *Type:* string

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#memory_share_level ResourcePool#memory_share_level}

---

##### `MemoryShares`<sup>Optional</sup> <a name="MemoryShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShares"></a>

```csharp
public double MemoryShares { get; set; }
```

- *Type:* double

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#memory_shares ResourcePool#memory_shares}

---

##### `ScaleDescendantsShares`<sup>Optional</sup> <a name="ScaleDescendantsShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.scaleDescendantsShares"></a>

```csharp
public string ScaleDescendantsShares { get; set; }
```

- *Type:* string

Determines if the shares of all descendants of the resource pool are scaled up or down when the shares of the resource pool are scaled up or down.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#scale_descendants_shares ResourcePool#scale_descendants_shares}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/resource_pool#tags ResourcePool#tags}

---



