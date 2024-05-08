# `virtualMachineSnapshot` Submodule <a name="`virtualMachineSnapshot` Submodule" id="@cdktf/provider-vsphere.virtualMachineSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineSnapshot <a name="VirtualMachineSnapshot" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot vsphere_virtual_machine_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineSnapshot(Construct Scope, string Id, VirtualMachineSnapshotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig">VirtualMachineSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig">VirtualMachineSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetConsolidate">ResetConsolidate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetRemoveChildren">ResetRemoveChildren</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetConsolidate` <a name="ResetConsolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetConsolidate"></a>

```csharp
private void ResetConsolidate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRemoveChildren` <a name="ResetRemoveChildren" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetRemoveChildren"></a>

```csharp
private void ResetRemoveChildren()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualMachineSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualMachineSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualMachineSnapshot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualMachineSnapshot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualMachineSnapshot resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachineSnapshot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachineSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidateInput">ConsolidateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memoryInput">MemoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesceInput">QuiesceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildrenInput">RemoveChildrenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuidInput">VirtualMachineUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidate">Consolidate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memory">Memory</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesce">Quiesce</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildren">RemoveChildren</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotName">SnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuid">VirtualMachineUuid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConsolidateInput`<sup>Optional</sup> <a name="ConsolidateInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidateInput"></a>

```csharp
public object ConsolidateInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memoryInput"></a>

```csharp
public object MemoryInput { get; }
```

- *Type:* object

---

##### `QuiesceInput`<sup>Optional</sup> <a name="QuiesceInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesceInput"></a>

```csharp
public object QuiesceInput { get; }
```

- *Type:* object

---

##### `RemoveChildrenInput`<sup>Optional</sup> <a name="RemoveChildrenInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildrenInput"></a>

```csharp
public object RemoveChildrenInput { get; }
```

- *Type:* object

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotNameInput"></a>

```csharp
public string SnapshotNameInput { get; }
```

- *Type:* string

---

##### `VirtualMachineUuidInput`<sup>Optional</sup> <a name="VirtualMachineUuidInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuidInput"></a>

```csharp
public string VirtualMachineUuidInput { get; }
```

- *Type:* string

---

##### `Consolidate`<sup>Required</sup> <a name="Consolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidate"></a>

```csharp
public object Consolidate { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memory"></a>

```csharp
public object Memory { get; }
```

- *Type:* object

---

##### `Quiesce`<sup>Required</sup> <a name="Quiesce" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesce"></a>

```csharp
public object Quiesce { get; }
```

- *Type:* object

---

##### `RemoveChildren`<sup>Required</sup> <a name="RemoveChildren" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildren"></a>

```csharp
public object RemoveChildren { get; }
```

- *Type:* object

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotName"></a>

```csharp
public string SnapshotName { get; }
```

- *Type:* string

---

##### `VirtualMachineUuid`<sup>Required</sup> <a name="VirtualMachineUuid" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuid"></a>

```csharp
public string VirtualMachineUuid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineSnapshotConfig <a name="VirtualMachineSnapshotConfig" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineSnapshotConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    object Memory,
    object Quiesce,
    string SnapshotName,
    string VirtualMachineUuid,
    object Consolidate = null,
    string Id = null,
    object RemoveChildren = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#description VirtualMachineSnapshot#description}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.memory">Memory</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#memory VirtualMachineSnapshot#memory}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.quiesce">Quiesce</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#quiesce VirtualMachineSnapshot#quiesce}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.snapshotName">SnapshotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#snapshot_name VirtualMachineSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.virtualMachineUuid">VirtualMachineUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#virtual_machine_uuid VirtualMachineSnapshot#virtual_machine_uuid}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.consolidate">Consolidate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#consolidate VirtualMachineSnapshot#consolidate}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#id VirtualMachineSnapshot#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.removeChildren">RemoveChildren</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#remove_children VirtualMachineSnapshot#remove_children}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#description VirtualMachineSnapshot#description}.

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.memory"></a>

```csharp
public object Memory { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#memory VirtualMachineSnapshot#memory}.

---

##### `Quiesce`<sup>Required</sup> <a name="Quiesce" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.quiesce"></a>

```csharp
public object Quiesce { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#quiesce VirtualMachineSnapshot#quiesce}.

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.snapshotName"></a>

```csharp
public string SnapshotName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#snapshot_name VirtualMachineSnapshot#snapshot_name}.

---

##### `VirtualMachineUuid`<sup>Required</sup> <a name="VirtualMachineUuid" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.virtualMachineUuid"></a>

```csharp
public string VirtualMachineUuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#virtual_machine_uuid VirtualMachineSnapshot#virtual_machine_uuid}.

---

##### `Consolidate`<sup>Optional</sup> <a name="Consolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.consolidate"></a>

```csharp
public object Consolidate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#consolidate VirtualMachineSnapshot#consolidate}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#id VirtualMachineSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RemoveChildren`<sup>Optional</sup> <a name="RemoveChildren" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.removeChildren"></a>

```csharp
public object RemoveChildren { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine_snapshot#remove_children VirtualMachineSnapshot#remove_children}.

---



