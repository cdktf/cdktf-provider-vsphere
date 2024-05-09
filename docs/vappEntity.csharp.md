# `vappEntity` Submodule <a name="`vappEntity` Submodule" id="@cdktf/provider-vsphere.vappEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VappEntity <a name="VappEntity" id="@cdktf/provider-vsphere.vappEntity.VappEntity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity vsphere_vapp_entity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VappEntity(Construct Scope, string Id, VappEntityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig">VappEntityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig">VappEntityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartAction">ResetStartAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartDelay">ResetStartDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartOrder">ResetStartOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopAction">ResetStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopDelay">ResetStopDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetWaitForGuest">ResetWaitForGuest</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.vappEntity.VappEntity.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetCustomAttributes"></a>

```csharp
private void ResetCustomAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStartAction` <a name="ResetStartAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartAction"></a>

```csharp
private void ResetStartAction()
```

##### `ResetStartDelay` <a name="ResetStartDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartDelay"></a>

```csharp
private void ResetStartDelay()
```

##### `ResetStartOrder` <a name="ResetStartOrder" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartOrder"></a>

```csharp
private void ResetStartOrder()
```

##### `ResetStopAction` <a name="ResetStopAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopAction"></a>

```csharp
private void ResetStopAction()
```

##### `ResetStopDelay` <a name="ResetStopDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopDelay"></a>

```csharp
private void ResetStopDelay()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetWaitForGuest` <a name="ResetWaitForGuest" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetWaitForGuest"></a>

```csharp
private void ResetWaitForGuest()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VappEntity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VappEntity.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VappEntity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VappEntity.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VappEntity.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VappEntity resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VappEntity to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VappEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VappEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerIdInput">ContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributesInput">CustomAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startActionInput">StartActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelayInput">StartDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrderInput">StartOrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopActionInput">StopActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelayInput">StopDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuestInput">WaitForGuestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerId">ContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startAction">StartAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelay">StartDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrder">StartOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopAction">StopAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelay">StopDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuest">WaitForGuest</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContainerIdInput`<sup>Optional</sup> <a name="ContainerIdInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerIdInput"></a>

```csharp
public string ContainerIdInput { get; }
```

- *Type:* string

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StartActionInput`<sup>Optional</sup> <a name="StartActionInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startActionInput"></a>

```csharp
public string StartActionInput { get; }
```

- *Type:* string

---

##### `StartDelayInput`<sup>Optional</sup> <a name="StartDelayInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelayInput"></a>

```csharp
public double StartDelayInput { get; }
```

- *Type:* double

---

##### `StartOrderInput`<sup>Optional</sup> <a name="StartOrderInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrderInput"></a>

```csharp
public double StartOrderInput { get; }
```

- *Type:* double

---

##### `StopActionInput`<sup>Optional</sup> <a name="StopActionInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopActionInput"></a>

```csharp
public string StopActionInput { get; }
```

- *Type:* string

---

##### `StopDelayInput`<sup>Optional</sup> <a name="StopDelayInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelayInput"></a>

```csharp
public double StopDelayInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `WaitForGuestInput`<sup>Optional</sup> <a name="WaitForGuestInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuestInput"></a>

```csharp
public object WaitForGuestInput { get; }
```

- *Type:* object

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerId"></a>

```csharp
public string ContainerId { get; }
```

- *Type:* string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StartAction`<sup>Required</sup> <a name="StartAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startAction"></a>

```csharp
public string StartAction { get; }
```

- *Type:* string

---

##### `StartDelay`<sup>Required</sup> <a name="StartDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelay"></a>

```csharp
public double StartDelay { get; }
```

- *Type:* double

---

##### `StartOrder`<sup>Required</sup> <a name="StartOrder" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrder"></a>

```csharp
public double StartOrder { get; }
```

- *Type:* double

---

##### `StopAction`<sup>Required</sup> <a name="StopAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopAction"></a>

```csharp
public string StopAction { get; }
```

- *Type:* string

---

##### `StopDelay`<sup>Required</sup> <a name="StopDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelay"></a>

```csharp
public double StopDelay { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `WaitForGuest`<sup>Required</sup> <a name="WaitForGuest" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuest"></a>

```csharp
public object WaitForGuest { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VappEntityConfig <a name="VappEntityConfig" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VappEntityConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContainerId,
    string TargetId,
    System.Collections.Generic.IDictionary<string, string> CustomAttributes = null,
    string Id = null,
    string StartAction = null,
    double StartDelay = null,
    double StartOrder = null,
    string StopAction = null,
    double StopDelay = null,
    string[] Tags = null,
    object WaitForGuest = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.containerId">ContainerId</a></code> | <code>string</code> | Managed object ID of the vApp container the entity is a member of. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.targetId">TargetId</a></code> | <code>string</code> | Managed object ID of the entity to power on or power off. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#id VappEntity#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startAction">StartAction</a></code> | <code>string</code> | How to start the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startDelay">StartDelay</a></code> | <code>double</code> | Delay in seconds before continuing with the next entity in the order of entities to be started. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startOrder">StartOrder</a></code> | <code>double</code> | Order to start and stop target in vApp. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopAction">StopAction</a></code> | <code>string</code> | Defines the stop action for the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopDelay">StopDelay</a></code> | <code>double</code> | Delay in seconds before continuing with the next entity in the order of entities to be stopped. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.waitForGuest">WaitForGuest</a></code> | <code>object</code> | Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.containerId"></a>

```csharp
public string ContainerId { get; set; }
```

- *Type:* string

Managed object ID of the vApp container the entity is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#container_id VappEntity#container_id}

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Managed object ID of the entity to power on or power off.

This can be a virtual machine or a vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#target_id VappEntity#target_id}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#custom_attributes VappEntity#custom_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#id VappEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StartAction`<sup>Optional</sup> <a name="StartAction" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startAction"></a>

```csharp
public string StartAction { get; set; }
```

- *Type:* string

How to start the entity.

Valid settings are none or powerOn. If set to none, then the entity does not participate in auto-start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#start_action VappEntity#start_action}

---

##### `StartDelay`<sup>Optional</sup> <a name="StartDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startDelay"></a>

```csharp
public double StartDelay { get; set; }
```

- *Type:* double

Delay in seconds before continuing with the next entity in the order of entities to be started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#start_delay VappEntity#start_delay}

---

##### `StartOrder`<sup>Optional</sup> <a name="StartOrder" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startOrder"></a>

```csharp
public double StartOrder { get; set; }
```

- *Type:* double

Order to start and stop target in vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#start_order VappEntity#start_order}

---

##### `StopAction`<sup>Optional</sup> <a name="StopAction" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopAction"></a>

```csharp
public string StopAction { get; set; }
```

- *Type:* string

Defines the stop action for the entity.

Can be set to none, powerOff, guestShutdown, or suspend. If set to none, then the entity does not participate in auto-stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#stop_action VappEntity#stop_action}

---

##### `StopDelay`<sup>Optional</sup> <a name="StopDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopDelay"></a>

```csharp
public double StopDelay { get; set; }
```

- *Type:* double

Delay in seconds before continuing with the next entity in the order of entities to be stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#stop_delay VappEntity#stop_delay}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#tags VappEntity#tags}

---

##### `WaitForGuest`<sup>Optional</sup> <a name="WaitForGuest" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.waitForGuest"></a>

```csharp
public object WaitForGuest { get; set; }
```

- *Type:* object

Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay.

This property has no effect for vApps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vapp_entity#wait_for_guest VappEntity#wait_for_guest}

---



