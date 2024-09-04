# `virtualMachineClass` Submodule <a name="`virtualMachineClass` Submodule" id="@cdktf/provider-vsphere.virtualMachineClass"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineClass <a name="VirtualMachineClass" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_machine_class vsphere_virtual_machine_class}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineClass(Construct Scope, string Id, VirtualMachineClassConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig">VirtualMachineClassConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig">VirtualMachineClassConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.resetCpuReservation">ResetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.resetMemoryReservation">ResetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.resetVgpuDevices">ResetVgpuDevices</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCpuReservation` <a name="ResetCpuReservation" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.resetCpuReservation"></a>

```csharp
private void ResetCpuReservation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMemoryReservation` <a name="ResetMemoryReservation" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.resetMemoryReservation"></a>

```csharp
private void ResetMemoryReservation()
```

##### `ResetVgpuDevices` <a name="ResetVgpuDevices" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.resetVgpuDevices"></a>

```csharp
private void ResetVgpuDevices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineClass resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualMachineClass.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualMachineClass.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualMachineClass.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualMachineClass.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualMachineClass resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachineClass to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachineClass that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_machine_class#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineClass to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.cpuReservationInput">CpuReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.cpusInput">CpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.memoryInput">MemoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.memoryReservationInput">MemoryReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.vgpuDevicesInput">VgpuDevicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.cpuReservation">CpuReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.cpus">Cpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.vgpuDevices">VgpuDevices</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CpuReservationInput`<sup>Optional</sup> <a name="CpuReservationInput" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.cpuReservationInput"></a>

```csharp
public double CpuReservationInput { get; }
```

- *Type:* double

---

##### `CpusInput`<sup>Optional</sup> <a name="CpusInput" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.cpusInput"></a>

```csharp
public double CpusInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.memoryInput"></a>

```csharp
public double MemoryInput { get; }
```

- *Type:* double

---

##### `MemoryReservationInput`<sup>Optional</sup> <a name="MemoryReservationInput" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.memoryReservationInput"></a>

```csharp
public double MemoryReservationInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VgpuDevicesInput`<sup>Optional</sup> <a name="VgpuDevicesInput" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.vgpuDevicesInput"></a>

```csharp
public string[] VgpuDevicesInput { get; }
```

- *Type:* string[]

---

##### `CpuReservation`<sup>Required</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.cpuReservation"></a>

```csharp
public double CpuReservation { get; }
```

- *Type:* double

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.cpus"></a>

```csharp
public double Cpus { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `MemoryReservation`<sup>Required</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VgpuDevices`<sup>Required</sup> <a name="VgpuDevices" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.vgpuDevices"></a>

```csharp
public string[] VgpuDevices { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClass.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineClassConfig <a name="VirtualMachineClassConfig" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineClassConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double Cpus,
    double Memory,
    string Name,
    double CpuReservation = null,
    string Id = null,
    double MemoryReservation = null,
    string[] VgpuDevices = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.cpus">Cpus</a></code> | <code>double</code> | The number of CPUs. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.memory">Memory</a></code> | <code>double</code> | The amount of memory (in MB). |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.name">Name</a></code> | <code>string</code> | The name of the virtual machine class. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.cpuReservation">CpuReservation</a></code> | <code>double</code> | The percentage of the available CPU capacity which will be reserved. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_machine_class#id VirtualMachineClass#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | The percentage of the available memory capacity which will be reserved. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.vgpuDevices">VgpuDevices</a></code> | <code>string[]</code> | A comma-separated list of GPU devices. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.cpus"></a>

```csharp
public double Cpus { get; set; }
```

- *Type:* double

The number of CPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_machine_class#cpus VirtualMachineClass#cpus}

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.memory"></a>

```csharp
public double Memory { get; set; }
```

- *Type:* double

The amount of memory (in MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_machine_class#memory VirtualMachineClass#memory}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the virtual machine class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_machine_class#name VirtualMachineClass#name}

---

##### `CpuReservation`<sup>Optional</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.cpuReservation"></a>

```csharp
public double CpuReservation { get; set; }
```

- *Type:* double

The percentage of the available CPU capacity which will be reserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_machine_class#cpu_reservation VirtualMachineClass#cpu_reservation}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_machine_class#id VirtualMachineClass#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemoryReservation`<sup>Optional</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; set; }
```

- *Type:* double

The percentage of the available memory capacity which will be reserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_machine_class#memory_reservation VirtualMachineClass#memory_reservation}

---

##### `VgpuDevices`<sup>Optional</sup> <a name="VgpuDevices" id="@cdktf/provider-vsphere.virtualMachineClass.VirtualMachineClassConfig.property.vgpuDevices"></a>

```csharp
public string[] VgpuDevices { get; set; }
```

- *Type:* string[]

A comma-separated list of GPU devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_machine_class#vgpu_devices VirtualMachineClass#vgpu_devices}

---



