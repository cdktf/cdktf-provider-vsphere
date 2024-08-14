# `virtualDisk` Submodule <a name="`virtualDisk` Submodule" id="@cdktf/provider-vsphere.virtualDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDisk <a name="VirtualDisk" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk vsphere_virtual_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualDisk(Construct Scope, string Id, VirtualDiskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig">VirtualDiskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig">VirtualDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetAdapterType">ResetAdapterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetCreateDirectories">ResetCreateDirectories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdapterType` <a name="ResetAdapterType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetAdapterType"></a>

```csharp
private void ResetAdapterType()
```

##### `ResetCreateDirectories` <a name="ResetCreateDirectories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetCreateDirectories"></a>

```csharp
private void ResetCreateDirectories()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDisk resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualDisk.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualDisk.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualDisk.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualDisk.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualDisk resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualDisk to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterTypeInput">AdapterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectoriesInput">CreateDirectoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastoreInput">DatastoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPathInput">VmdkPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterType">AdapterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectories">CreateDirectories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastore">Datastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPath">VmdkPath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdapterTypeInput`<sup>Optional</sup> <a name="AdapterTypeInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterTypeInput"></a>

```csharp
public string AdapterTypeInput { get; }
```

- *Type:* string

---

##### `CreateDirectoriesInput`<sup>Optional</sup> <a name="CreateDirectoriesInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectoriesInput"></a>

```csharp
public object CreateDirectoriesInput { get; }
```

- *Type:* object

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `DatastoreInput`<sup>Optional</sup> <a name="DatastoreInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastoreInput"></a>

```csharp
public string DatastoreInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VmdkPathInput`<sup>Optional</sup> <a name="VmdkPathInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPathInput"></a>

```csharp
public string VmdkPathInput { get; }
```

- *Type:* string

---

##### `AdapterType`<sup>Required</sup> <a name="AdapterType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterType"></a>

```csharp
public string AdapterType { get; }
```

- *Type:* string

---

##### `CreateDirectories`<sup>Required</sup> <a name="CreateDirectories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectories"></a>

```csharp
public object CreateDirectories { get; }
```

- *Type:* object

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastore"></a>

```csharp
public string Datastore { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VmdkPath`<sup>Required</sup> <a name="VmdkPath" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPath"></a>

```csharp
public string VmdkPath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDiskConfig <a name="VirtualDiskConfig" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualDiskConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Datastore,
    double Size,
    string VmdkPath,
    string AdapterType = null,
    object CreateDirectories = null,
    string Datacenter = null,
    string Id = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datastore">Datastore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#datastore VirtualDisk#datastore}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#size VirtualDisk#size}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.vmdkPath">VmdkPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.adapterType">AdapterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.createDirectories">CreateDirectories</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datacenter">Datacenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#id VirtualDisk#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#type VirtualDisk#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datastore"></a>

```csharp
public string Datastore { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#datastore VirtualDisk#datastore}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#size VirtualDisk#size}.

---

##### `VmdkPath`<sup>Required</sup> <a name="VmdkPath" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.vmdkPath"></a>

```csharp
public string VmdkPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}.

---

##### `AdapterType`<sup>Optional</sup> <a name="AdapterType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.adapterType"></a>

```csharp
public string AdapterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}.

---

##### `CreateDirectories`<sup>Optional</sup> <a name="CreateDirectories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.createDirectories"></a>

```csharp
public object CreateDirectories { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}.

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#id VirtualDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_disk#type VirtualDisk#type}.

---



