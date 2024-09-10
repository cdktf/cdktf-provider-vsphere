# `contentLibraryItem` Submodule <a name="`contentLibraryItem` Submodule" id="@cdktf/provider-vsphere.contentLibraryItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContentLibraryItem <a name="ContentLibraryItem" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/content_library_item vsphere_content_library_item}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ContentLibraryItem(Construct Scope, string Id, ContentLibraryItemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig">ContentLibraryItemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig">ContentLibraryItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetFileUrl">ResetFileUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetSourceUuid">ResetSourceUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFileUrl` <a name="ResetFileUrl" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetFileUrl"></a>

```csharp
private void ResetFileUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSourceUuid` <a name="ResetSourceUuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetSourceUuid"></a>

```csharp
private void ResetSourceUuid()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContentLibraryItem resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ContentLibraryItem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ContentLibraryItem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ContentLibraryItem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ContentLibraryItem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContentLibraryItem resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContentLibraryItem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContentLibraryItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/content_library_item#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContentLibraryItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrlInput">FileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryIdInput">LibraryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuidInput">SourceUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrl">FileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryId">LibraryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuid">SourceUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FileUrlInput`<sup>Optional</sup> <a name="FileUrlInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrlInput"></a>

```csharp
public string FileUrlInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LibraryIdInput`<sup>Optional</sup> <a name="LibraryIdInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryIdInput"></a>

```csharp
public string LibraryIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceUuidInput`<sup>Optional</sup> <a name="SourceUuidInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuidInput"></a>

```csharp
public string SourceUuidInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FileUrl`<sup>Required</sup> <a name="FileUrl" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrl"></a>

```csharp
public string FileUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LibraryId`<sup>Required</sup> <a name="LibraryId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryId"></a>

```csharp
public string LibraryId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceUuid`<sup>Required</sup> <a name="SourceUuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuid"></a>

```csharp
public string SourceUuid { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContentLibraryItemConfig <a name="ContentLibraryItemConfig" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ContentLibraryItemConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LibraryId,
    string Name,
    string Description = null,
    string FileUrl = null,
    string Id = null,
    string SourceUuid = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.libraryId">LibraryId</a></code> | <code>string</code> | ID of the content library to contain item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.name">Name</a></code> | <code>string</code> | The name of the content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.description">Description</a></code> | <code>string</code> | Optional description of the content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.fileUrl">FileUrl</a></code> | <code>string</code> | ID of source VM of content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/content_library_item#id ContentLibraryItem#id}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.sourceUuid">SourceUuid</a></code> | <code>string</code> | The managed object ID of an existing VM to be cloned to the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.type">Type</a></code> | <code>string</code> | Type of content library item. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LibraryId`<sup>Required</sup> <a name="LibraryId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.libraryId"></a>

```csharp
public string LibraryId { get; set; }
```

- *Type:* string

ID of the content library to contain item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/content_library_item#library_id ContentLibraryItem#library_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/content_library_item#name ContentLibraryItem#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional description of the content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/content_library_item#description ContentLibraryItem#description}

---

##### `FileUrl`<sup>Optional</sup> <a name="FileUrl" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.fileUrl"></a>

```csharp
public string FileUrl { get; set; }
```

- *Type:* string

ID of source VM of content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/content_library_item#file_url ContentLibraryItem#file_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/content_library_item#id ContentLibraryItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceUuid`<sup>Optional</sup> <a name="SourceUuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.sourceUuid"></a>

```csharp
public string SourceUuid { get; set; }
```

- *Type:* string

The managed object ID of an existing VM to be cloned to the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/content_library_item#source_uuid ContentLibraryItem#source_uuid}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/content_library_item#type ContentLibraryItem#type}

---



