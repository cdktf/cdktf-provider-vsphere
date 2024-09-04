# `host` Submodule <a name="`host` Submodule" id="@cdktf/provider-vsphere.host"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Host <a name="Host" id="@cdktf/provider-vsphere.host.Host"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host vsphere_host}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.host.Host.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new Host(Construct Scope, string Id, HostConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.host.HostConfig">HostConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostConfig">HostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.host.Host.putServices">PutServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetClusterManaged">ResetClusterManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetConnected">ResetConnected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetForce">ResetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetLicense">ResetLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetLockdown">ResetLockdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetMaintenance">ResetMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetServices">ResetServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetThumbprint">ResetThumbprint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.host.Host.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.host.Host.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.host.Host.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.host.Host.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.host.Host.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.host.Host.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.host.Host.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.host.Host.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.host.Host.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.host.Host.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.host.Host.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.host.Host.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.host.Host.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.Host.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.host.Host.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.Host.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.host.Host.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.Host.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.host.Host.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.Host.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.host.Host.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.Host.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.host.Host.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.Host.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.host.Host.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.host.Host.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.host.Host.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.host.Host.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.host.Host.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.Host.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.host.Host.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.host.Host.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.host.Host.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.host.Host.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.host.Host.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.host.Host.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.host.Host.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServices` <a name="PutServices" id="@cdktf/provider-vsphere.host.Host.putServices"></a>

```csharp
private void PutServices(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.host.Host.putServices.parameter.value"></a>

- *Type:* object

---

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-vsphere.host.Host.resetCluster"></a>

```csharp
private void ResetCluster()
```

##### `ResetClusterManaged` <a name="ResetClusterManaged" id="@cdktf/provider-vsphere.host.Host.resetClusterManaged"></a>

```csharp
private void ResetClusterManaged()
```

##### `ResetConnected` <a name="ResetConnected" id="@cdktf/provider-vsphere.host.Host.resetConnected"></a>

```csharp
private void ResetConnected()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.host.Host.resetCustomAttributes"></a>

```csharp
private void ResetCustomAttributes()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-vsphere.host.Host.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetForce` <a name="ResetForce" id="@cdktf/provider-vsphere.host.Host.resetForce"></a>

```csharp
private void ResetForce()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.host.Host.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLicense` <a name="ResetLicense" id="@cdktf/provider-vsphere.host.Host.resetLicense"></a>

```csharp
private void ResetLicense()
```

##### `ResetLockdown` <a name="ResetLockdown" id="@cdktf/provider-vsphere.host.Host.resetLockdown"></a>

```csharp
private void ResetLockdown()
```

##### `ResetMaintenance` <a name="ResetMaintenance" id="@cdktf/provider-vsphere.host.Host.resetMaintenance"></a>

```csharp
private void ResetMaintenance()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-vsphere.host.Host.resetServices"></a>

```csharp
private void ResetServices()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.host.Host.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThumbprint` <a name="ResetThumbprint" id="@cdktf/provider-vsphere.host.Host.resetThumbprint"></a>

```csharp
private void ResetThumbprint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Host resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.host.Host.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

Host.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.host.Host.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.host.Host.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

Host.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.host.Host.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.host.Host.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

Host.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.host.Host.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.host.Host.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

Host.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Host resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.host.Host.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.host.Host.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Host to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.host.Host.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Host that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.host.Host.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Host to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.services">Services</a></code> | <code><a href="#@cdktf/provider-vsphere.host.HostServicesList">HostServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.clusterManagedInput">ClusterManagedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.connectedInput">ConnectedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.customAttributesInput">CustomAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.forceInput">ForceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.licenseInput">LicenseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.lockdownInput">LockdownInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.maintenanceInput">MaintenanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.servicesInput">ServicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.thumbprintInput">ThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.clusterManaged">ClusterManaged</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.connected">Connected</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.force">Force</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.license">License</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.lockdown">Lockdown</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.maintenance">Maintenance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.host.Host.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.host.Host.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.host.Host.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.host.Host.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.host.Host.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.host.Host.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.host.Host.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.host.Host.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.host.Host.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.host.Host.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.host.Host.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.host.Host.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.host.Host.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.host.Host.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-vsphere.host.Host.property.services"></a>

```csharp
public HostServicesList Services { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostServicesList">HostServicesList</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-vsphere.host.Host.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `ClusterManagedInput`<sup>Optional</sup> <a name="ClusterManagedInput" id="@cdktf/provider-vsphere.host.Host.property.clusterManagedInput"></a>

```csharp
public object ClusterManagedInput { get; }
```

- *Type:* object

---

##### `ConnectedInput`<sup>Optional</sup> <a name="ConnectedInput" id="@cdktf/provider-vsphere.host.Host.property.connectedInput"></a>

```csharp
public object ConnectedInput { get; }
```

- *Type:* object

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.host.Host.property.customAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-vsphere.host.Host.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `ForceInput`<sup>Optional</sup> <a name="ForceInput" id="@cdktf/provider-vsphere.host.Host.property.forceInput"></a>

```csharp
public object ForceInput { get; }
```

- *Type:* object

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-vsphere.host.Host.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.host.Host.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseInput`<sup>Optional</sup> <a name="LicenseInput" id="@cdktf/provider-vsphere.host.Host.property.licenseInput"></a>

```csharp
public string LicenseInput { get; }
```

- *Type:* string

---

##### `LockdownInput`<sup>Optional</sup> <a name="LockdownInput" id="@cdktf/provider-vsphere.host.Host.property.lockdownInput"></a>

```csharp
public string LockdownInput { get; }
```

- *Type:* string

---

##### `MaintenanceInput`<sup>Optional</sup> <a name="MaintenanceInput" id="@cdktf/provider-vsphere.host.Host.property.maintenanceInput"></a>

```csharp
public object MaintenanceInput { get; }
```

- *Type:* object

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vsphere.host.Host.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-vsphere.host.Host.property.servicesInput"></a>

```csharp
public object ServicesInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.host.Host.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-vsphere.host.Host.property.thumbprintInput"></a>

```csharp
public string ThumbprintInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vsphere.host.Host.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-vsphere.host.Host.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `ClusterManaged`<sup>Required</sup> <a name="ClusterManaged" id="@cdktf/provider-vsphere.host.Host.property.clusterManaged"></a>

```csharp
public object ClusterManaged { get; }
```

- *Type:* object

---

##### `Connected`<sup>Required</sup> <a name="Connected" id="@cdktf/provider-vsphere.host.Host.property.connected"></a>

```csharp
public object Connected { get; }
```

- *Type:* object

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.host.Host.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-vsphere.host.Host.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktf/provider-vsphere.host.Host.property.force"></a>

```csharp
public object Force { get; }
```

- *Type:* object

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-vsphere.host.Host.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.host.Host.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `License`<sup>Required</sup> <a name="License" id="@cdktf/provider-vsphere.host.Host.property.license"></a>

```csharp
public string License { get; }
```

- *Type:* string

---

##### `Lockdown`<sup>Required</sup> <a name="Lockdown" id="@cdktf/provider-vsphere.host.Host.property.lockdown"></a>

```csharp
public string Lockdown { get; }
```

- *Type:* string

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="@cdktf/provider-vsphere.host.Host.property.maintenance"></a>

```csharp
public object Maintenance { get; }
```

- *Type:* object

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vsphere.host.Host.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.host.Host.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-vsphere.host.Host.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vsphere.host.Host.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.host.Host.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HostConfig <a name="HostConfig" id="@cdktf/provider-vsphere.host.HostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.host.HostConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HostConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Hostname,
    string Password,
    string Username,
    string Cluster = null,
    object ClusterManaged = null,
    object Connected = null,
    System.Collections.Generic.IDictionary<string, string> CustomAttributes = null,
    string Datacenter = null,
    object Force = null,
    string Id = null,
    string License = null,
    string Lockdown = null,
    object Maintenance = null,
    object Services = null,
    string[] Tags = null,
    string Thumbprint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.hostname">Hostname</a></code> | <code>string</code> | FQDN or IP address of the host. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.password">Password</a></code> | <code>string</code> | Password of the administration account of the host. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.username">Username</a></code> | <code>string</code> | Username of the administration account of the host. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.cluster">Cluster</a></code> | <code>string</code> | ID of the vSphere cluster the host will belong to. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.clusterManaged">ClusterManaged</a></code> | <code>object</code> | Must be set if host is a member of a managed compute_cluster resource. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.connected">Connected</a></code> | <code>object</code> | Set the state of the host. If set to false then the host will be asked to disconnect. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.datacenter">Datacenter</a></code> | <code>string</code> | ID of the vSphere datacenter the host will belong to. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.force">Force</a></code> | <code>object</code> | Force add the host to the vSphere inventory even if it's already managed by a different vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#id Host#id}. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.license">License</a></code> | <code>string</code> | License key that will be applied to this host. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.lockdown">Lockdown</a></code> | <code>string</code> | Set the host's lockdown status. Default is disabled. Valid options are 'disabled', 'normal', 'strict'. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.maintenance">Maintenance</a></code> | <code>object</code> | Set the host's maintenance mode. Default is false. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.services">Services</a></code> | <code>object</code> | services block. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.thumbprint">Thumbprint</a></code> | <code>string</code> | Host's certificate SHA-1 thumbprint. If not set then the CA that signed the host's certificate must be trusted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.host.HostConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.host.HostConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.host.HostConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.host.HostConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.host.HostConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.host.HostConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.host.HostConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-vsphere.host.HostConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

FQDN or IP address of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#hostname Host#hostname}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vsphere.host.HostConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password of the administration account of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#password Host#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vsphere.host.HostConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username of the administration account of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#username Host#username}

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-vsphere.host.HostConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

ID of the vSphere cluster the host will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#cluster Host#cluster}

---

##### `ClusterManaged`<sup>Optional</sup> <a name="ClusterManaged" id="@cdktf/provider-vsphere.host.HostConfig.property.clusterManaged"></a>

```csharp
public object ClusterManaged { get; set; }
```

- *Type:* object

Must be set if host is a member of a managed compute_cluster resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#cluster_managed Host#cluster_managed}

---

##### `Connected`<sup>Optional</sup> <a name="Connected" id="@cdktf/provider-vsphere.host.HostConfig.property.connected"></a>

```csharp
public object Connected { get; set; }
```

- *Type:* object

Set the state of the host. If set to false then the host will be asked to disconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#connected Host#connected}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.host.HostConfig.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#custom_attributes Host#custom_attributes}

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-vsphere.host.HostConfig.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

ID of the vSphere datacenter the host will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#datacenter Host#datacenter}

---

##### `Force`<sup>Optional</sup> <a name="Force" id="@cdktf/provider-vsphere.host.HostConfig.property.force"></a>

```csharp
public object Force { get; set; }
```

- *Type:* object

Force add the host to the vSphere inventory even if it's already managed by a different vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#force Host#force}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.host.HostConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#id Host#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `License`<sup>Optional</sup> <a name="License" id="@cdktf/provider-vsphere.host.HostConfig.property.license"></a>

```csharp
public string License { get; set; }
```

- *Type:* string

License key that will be applied to this host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#license Host#license}

---

##### `Lockdown`<sup>Optional</sup> <a name="Lockdown" id="@cdktf/provider-vsphere.host.HostConfig.property.lockdown"></a>

```csharp
public string Lockdown { get; set; }
```

- *Type:* string

Set the host's lockdown status. Default is disabled. Valid options are 'disabled', 'normal', 'strict'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#lockdown Host#lockdown}

---

##### `Maintenance`<sup>Optional</sup> <a name="Maintenance" id="@cdktf/provider-vsphere.host.HostConfig.property.maintenance"></a>

```csharp
public object Maintenance { get; set; }
```

- *Type:* object

Set the host's maintenance mode. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#maintenance Host#maintenance}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-vsphere.host.HostConfig.property.services"></a>

```csharp
public object Services { get; set; }
```

- *Type:* object

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#services Host#services}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.host.HostConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#tags Host#tags}

---

##### `Thumbprint`<sup>Optional</sup> <a name="Thumbprint" id="@cdktf/provider-vsphere.host.HostConfig.property.thumbprint"></a>

```csharp
public string Thumbprint { get; set; }
```

- *Type:* string

Host's certificate SHA-1 thumbprint. If not set then the CA that signed the host's certificate must be trusted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#thumbprint Host#thumbprint}

---

### HostServices <a name="HostServices" id="@cdktf/provider-vsphere.host.HostServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.host.HostServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HostServices {
    HostServicesNtpd Ntpd = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServices.property.ntpd">Ntpd</a></code> | <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a></code> | ntpd block. |

---

##### `Ntpd`<sup>Optional</sup> <a name="Ntpd" id="@cdktf/provider-vsphere.host.HostServices.property.ntpd"></a>

```csharp
public HostServicesNtpd Ntpd { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a>

ntpd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#ntpd Host#ntpd}

---

### HostServicesNtpd <a name="HostServicesNtpd" id="@cdktf/provider-vsphere.host.HostServicesNtpd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.host.HostServicesNtpd.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HostServicesNtpd {
    object Enabled = null,
    string[] NtpServers = null,
    string Policy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpd.property.enabled">Enabled</a></code> | <code>object</code> | Whether the NTP service is enabled. Default is false. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpd.property.ntpServers">NtpServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#ntp_servers Host#ntp_servers}. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpd.property.policy">Policy</a></code> | <code>string</code> | The policy for the NTP service. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-vsphere.host.HostServicesNtpd.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether the NTP service is enabled. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#enabled Host#enabled}

---

##### `NtpServers`<sup>Optional</sup> <a name="NtpServers" id="@cdktf/provider-vsphere.host.HostServicesNtpd.property.ntpServers"></a>

```csharp
public string[] NtpServers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#ntp_servers Host#ntp_servers}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-vsphere.host.HostServicesNtpd.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

The policy for the NTP service.

Valid values are 'Start and stop with host', 'Start and stop manually', 'Start and stop with port usage'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/host#policy Host#policy}

---

## Classes <a name="Classes" id="Classes"></a>

### HostServicesList <a name="HostServicesList" id="@cdktf/provider-vsphere.host.HostServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.host.HostServicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HostServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.host.HostServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.host.HostServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.host.HostServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vsphere.host.HostServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.host.HostServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.host.HostServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.host.HostServicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.host.HostServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.host.HostServicesList.get"></a>

```csharp
private HostServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.host.HostServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.host.HostServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.host.HostServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.host.HostServicesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HostServicesNtpdOutputReference <a name="HostServicesNtpdOutputReference" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HostServicesNtpdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resetNtpServers">ResetNtpServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetNtpServers` <a name="ResetNtpServers" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resetNtpServers"></a>

```csharp
private void ResetNtpServers()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.resetPolicy"></a>

```csharp
private void ResetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.ntpServersInput">NtpServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.ntpServers">NtpServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `NtpServersInput`<sup>Optional</sup> <a name="NtpServersInput" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.ntpServersInput"></a>

```csharp
public string[] NtpServersInput { get; }
```

- *Type:* string[]

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `NtpServers`<sup>Required</sup> <a name="NtpServers" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.ntpServers"></a>

```csharp
public string[] NtpServers { get; }
```

- *Type:* string[]

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference.property.internalValue"></a>

```csharp
public HostServicesNtpd InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a>

---


### HostServicesOutputReference <a name="HostServicesOutputReference" id="@cdktf/provider-vsphere.host.HostServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HostServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.putNtpd">PutNtpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.resetNtpd">ResetNtpd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNtpd` <a name="PutNtpd" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.putNtpd"></a>

```csharp
private void PutNtpd(HostServicesNtpd Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.putNtpd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a>

---

##### `ResetNtpd` <a name="ResetNtpd" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.resetNtpd"></a>

```csharp
private void ResetNtpd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.property.ntpd">Ntpd</a></code> | <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference">HostServicesNtpdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.property.ntpdInput">NtpdInput</a></code> | <code><a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ntpd`<sup>Required</sup> <a name="Ntpd" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.property.ntpd"></a>

```csharp
public HostServicesNtpdOutputReference Ntpd { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostServicesNtpdOutputReference">HostServicesNtpdOutputReference</a>

---

##### `NtpdInput`<sup>Optional</sup> <a name="NtpdInput" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.property.ntpdInput"></a>

```csharp
public HostServicesNtpd NtpdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostServicesNtpd">HostServicesNtpd</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.host.HostServicesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



