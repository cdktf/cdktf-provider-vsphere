# `contentLibrary` Submodule <a name="`contentLibrary` Submodule" id="@cdktf/provider-vsphere.contentLibrary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContentLibrary <a name="ContentLibrary" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library vsphere_content_library}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ContentLibrary(Construct Scope, string Id, ContentLibraryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig">ContentLibraryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig">ContentLibraryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication">PutPublication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription">PutSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetPublication">ResetPublication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetSubscription">ResetSubscription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPublication` <a name="PutPublication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication"></a>

```csharp
private void PutPublication(ContentLibraryPublication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---

##### `PutSubscription` <a name="PutSubscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription"></a>

```csharp
private void PutSubscription(ContentLibrarySubscription Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPublication` <a name="ResetPublication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetPublication"></a>

```csharp
private void ResetPublication()
```

##### `ResetSubscription` <a name="ResetSubscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetSubscription"></a>

```csharp
private void ResetSubscription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContentLibrary resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ContentLibrary.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ContentLibrary.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ContentLibrary.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

ContentLibrary.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContentLibrary resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContentLibrary to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContentLibrary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContentLibrary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publication">Publication</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference">ContentLibraryPublicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscription">Subscription</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference">ContentLibrarySubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publicationInput">PublicationInput</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBackingInput">StorageBackingInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscriptionInput">SubscriptionInput</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBacking">StorageBacking</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Publication`<sup>Required</sup> <a name="Publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publication"></a>

```csharp
public ContentLibraryPublicationOutputReference Publication { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference">ContentLibraryPublicationOutputReference</a>

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscription"></a>

```csharp
public ContentLibrarySubscriptionOutputReference Subscription { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference">ContentLibrarySubscriptionOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicationInput`<sup>Optional</sup> <a name="PublicationInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publicationInput"></a>

```csharp
public ContentLibraryPublication PublicationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---

##### `StorageBackingInput`<sup>Optional</sup> <a name="StorageBackingInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBackingInput"></a>

```csharp
public string[] StorageBackingInput { get; }
```

- *Type:* string[]

---

##### `SubscriptionInput`<sup>Optional</sup> <a name="SubscriptionInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscriptionInput"></a>

```csharp
public ContentLibrarySubscription SubscriptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StorageBacking`<sup>Required</sup> <a name="StorageBacking" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBacking"></a>

```csharp
public string[] StorageBacking { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContentLibraryConfig <a name="ContentLibraryConfig" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ContentLibraryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] StorageBacking,
    string Description = null,
    string Id = null,
    ContentLibraryPublication Publication = null,
    ContentLibrarySubscription Subscription = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.name">Name</a></code> | <code>string</code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.storageBacking">StorageBacking</a></code> | <code>string[]</code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.description">Description</a></code> | <code>string</code> | Optional description of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#id ContentLibrary#id}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.publication">Publication</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | publication block. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.subscription">Subscription</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | subscription block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#name ContentLibrary#name}

---

##### `StorageBacking`<sup>Required</sup> <a name="StorageBacking" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.storageBacking"></a>

```csharp
public string[] StorageBacking { get; set; }
```

- *Type:* string[]

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#storage_backing ContentLibrary#storage_backing}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional description of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#description ContentLibrary#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#id ContentLibrary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Publication`<sup>Optional</sup> <a name="Publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.publication"></a>

```csharp
public ContentLibraryPublication Publication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

publication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#publication ContentLibrary#publication}

---

##### `Subscription`<sup>Optional</sup> <a name="Subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.subscription"></a>

```csharp
public ContentLibrarySubscription Subscription { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#subscription ContentLibrary#subscription}

---

### ContentLibraryPublication <a name="ContentLibraryPublication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ContentLibraryPublication {
    string AuthenticationMethod = null,
    string Password = null,
    bool|IResolvable Published = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.authenticationMethod">AuthenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#password ContentLibrary#password}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.published">Published</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#published ContentLibrary#published}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#username ContentLibrary#username}. |

---

##### `AuthenticationMethod`<sup>Optional</sup> <a name="AuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.authenticationMethod"></a>

```csharp
public string AuthenticationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#password ContentLibrary#password}.

---

##### `Published`<sup>Optional</sup> <a name="Published" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.published"></a>

```csharp
public bool|IResolvable Published { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#published ContentLibrary#published}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#username ContentLibrary#username}.

---

### ContentLibrarySubscription <a name="ContentLibrarySubscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ContentLibrarySubscription {
    string AuthenticationMethod = null,
    bool|IResolvable AutomaticSync = null,
    bool|IResolvable OnDemand = null,
    string Password = null,
    string SubscriptionUrl = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.authenticationMethod">AuthenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.automaticSync">AutomaticSync</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#automatic_sync ContentLibrary#automatic_sync}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.onDemand">OnDemand</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#on_demand ContentLibrary#on_demand}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#password ContentLibrary#password}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.subscriptionUrl">SubscriptionUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#subscription_url ContentLibrary#subscription_url}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#username ContentLibrary#username}. |

---

##### `AuthenticationMethod`<sup>Optional</sup> <a name="AuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.authenticationMethod"></a>

```csharp
public string AuthenticationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}.

---

##### `AutomaticSync`<sup>Optional</sup> <a name="AutomaticSync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.automaticSync"></a>

```csharp
public bool|IResolvable AutomaticSync { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#automatic_sync ContentLibrary#automatic_sync}.

---

##### `OnDemand`<sup>Optional</sup> <a name="OnDemand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.onDemand"></a>

```csharp
public bool|IResolvable OnDemand { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#on_demand ContentLibrary#on_demand}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#password ContentLibrary#password}.

---

##### `SubscriptionUrl`<sup>Optional</sup> <a name="SubscriptionUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.subscriptionUrl"></a>

```csharp
public string SubscriptionUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#subscription_url ContentLibrary#subscription_url}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/content_library#username ContentLibrary#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContentLibraryPublicationOutputReference <a name="ContentLibraryPublicationOutputReference" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ContentLibraryPublicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetAuthenticationMethod">ResetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPublished">ResetPublished</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationMethod` <a name="ResetAuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetAuthenticationMethod"></a>

```csharp
private void ResetAuthenticationMethod()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPublished` <a name="ResetPublished" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPublished"></a>

```csharp
private void ResetPublished()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishUrl">PublishUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethodInput">AuthenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishedInput">PublishedInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethod">AuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.published">Published</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublishUrl`<sup>Required</sup> <a name="PublishUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishUrl"></a>

```csharp
public string PublishUrl { get; }
```

- *Type:* string

---

##### `AuthenticationMethodInput`<sup>Optional</sup> <a name="AuthenticationMethodInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethodInput"></a>

```csharp
public string AuthenticationMethodInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PublishedInput`<sup>Optional</sup> <a name="PublishedInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishedInput"></a>

```csharp
public bool|IResolvable PublishedInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `AuthenticationMethod`<sup>Required</sup> <a name="AuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethod"></a>

```csharp
public string AuthenticationMethod { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Published`<sup>Required</sup> <a name="Published" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.published"></a>

```csharp
public bool|IResolvable Published { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.internalValue"></a>

```csharp
public ContentLibraryPublication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---


### ContentLibrarySubscriptionOutputReference <a name="ContentLibrarySubscriptionOutputReference" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new ContentLibrarySubscriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAuthenticationMethod">ResetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAutomaticSync">ResetAutomaticSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetOnDemand">ResetOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetSubscriptionUrl">ResetSubscriptionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationMethod` <a name="ResetAuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAuthenticationMethod"></a>

```csharp
private void ResetAuthenticationMethod()
```

##### `ResetAutomaticSync` <a name="ResetAutomaticSync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAutomaticSync"></a>

```csharp
private void ResetAutomaticSync()
```

##### `ResetOnDemand` <a name="ResetOnDemand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetOnDemand"></a>

```csharp
private void ResetOnDemand()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetSubscriptionUrl` <a name="ResetSubscriptionUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetSubscriptionUrl"></a>

```csharp
private void ResetSubscriptionUrl()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethodInput">AuthenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSyncInput">AutomaticSyncInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemandInput">OnDemandInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrlInput">SubscriptionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethod">AuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSync">AutomaticSync</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemand">OnDemand</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrl">SubscriptionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationMethodInput`<sup>Optional</sup> <a name="AuthenticationMethodInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethodInput"></a>

```csharp
public string AuthenticationMethodInput { get; }
```

- *Type:* string

---

##### `AutomaticSyncInput`<sup>Optional</sup> <a name="AutomaticSyncInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSyncInput"></a>

```csharp
public bool|IResolvable AutomaticSyncInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OnDemandInput`<sup>Optional</sup> <a name="OnDemandInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemandInput"></a>

```csharp
public bool|IResolvable OnDemandInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `SubscriptionUrlInput`<sup>Optional</sup> <a name="SubscriptionUrlInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrlInput"></a>

```csharp
public string SubscriptionUrlInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `AuthenticationMethod`<sup>Required</sup> <a name="AuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethod"></a>

```csharp
public string AuthenticationMethod { get; }
```

- *Type:* string

---

##### `AutomaticSync`<sup>Required</sup> <a name="AutomaticSync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSync"></a>

```csharp
public bool|IResolvable AutomaticSync { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OnDemand`<sup>Required</sup> <a name="OnDemand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemand"></a>

```csharp
public bool|IResolvable OnDemand { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SubscriptionUrl`<sup>Required</sup> <a name="SubscriptionUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrl"></a>

```csharp
public string SubscriptionUrl { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.internalValue"></a>

```csharp
public ContentLibrarySubscription InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---



