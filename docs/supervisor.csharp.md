# `supervisor` Submodule <a name="`supervisor` Submodule" id="@cdktf/provider-vsphere.supervisor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Supervisor <a name="Supervisor" id="@cdktf/provider-vsphere.supervisor.Supervisor"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor vsphere_supervisor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new Supervisor(Construct Scope, string Id, SupervisorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig">SupervisorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig">SupervisorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr">PutEgressCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr">PutIngressCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork">PutManagementNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace">PutNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr">PutPodCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr">PutServiceCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.Supervisor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.supervisor.Supervisor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.supervisor.Supervisor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.supervisor.Supervisor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.supervisor.Supervisor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgressCidr` <a name="PutEgressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr"></a>

```csharp
private void PutEgressCidr(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr.parameter.value"></a>

- *Type:* object

---

##### `PutIngressCidr` <a name="PutIngressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr"></a>

```csharp
private void PutIngressCidr(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr.parameter.value"></a>

- *Type:* object

---

##### `PutManagementNetwork` <a name="PutManagementNetwork" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork"></a>

```csharp
private void PutManagementNetwork(SupervisorManagementNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---

##### `PutNamespace` <a name="PutNamespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace"></a>

```csharp
private void PutNamespace(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace.parameter.value"></a>

- *Type:* object

---

##### `PutPodCidr` <a name="PutPodCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr"></a>

```csharp
private void PutPodCidr(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr.parameter.value"></a>

- *Type:* object

---

##### `PutServiceCidr` <a name="PutServiceCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr"></a>

```csharp
private void PutServiceCidr(SupervisorServiceCidr Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Supervisor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

Supervisor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

Supervisor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

Supervisor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

Supervisor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Supervisor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Supervisor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Supervisor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Supervisor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidr">EgressCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList">SupervisorEgressCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidr">IngressCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList">SupervisorIngressCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetwork">ManagementNetwork</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference">SupervisorManagementNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.namespace">Namespace</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList">SupervisorNamespaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidr">PodCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList">SupervisorPodCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidr">ServiceCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference">SupervisorServiceCidrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibraryInput">ContentLibraryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuidInput">DvsUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeClusterInput">EdgeClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidrInput">EgressCidrInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidrInput">IngressCidrInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDnsInput">MainDnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainNtpInput">MainNtpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetworkInput">ManagementNetworkInput</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.namespaceInput">NamespaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidrInput">PodCidrInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomainsInput">SearchDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidrInput">ServiceCidrInput</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHintInput">SizingHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicyInput">StoragePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDnsInput">WorkerDnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerNtpInput">WorkerNtpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibrary">ContentLibrary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuid">DvsUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeCluster">EdgeCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDns">MainDns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainNtp">MainNtp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomains">SearchDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHint">SizingHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicy">StoragePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDns">WorkerDns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerNtp">WorkerNtp</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EgressCidr`<sup>Required</sup> <a name="EgressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidr"></a>

```csharp
public SupervisorEgressCidrList EgressCidr { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList">SupervisorEgressCidrList</a>

---

##### `IngressCidr`<sup>Required</sup> <a name="IngressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidr"></a>

```csharp
public SupervisorIngressCidrList IngressCidr { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList">SupervisorIngressCidrList</a>

---

##### `ManagementNetwork`<sup>Required</sup> <a name="ManagementNetwork" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetwork"></a>

```csharp
public SupervisorManagementNetworkOutputReference ManagementNetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference">SupervisorManagementNetworkOutputReference</a>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.namespace"></a>

```csharp
public SupervisorNamespaceList Namespace { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList">SupervisorNamespaceList</a>

---

##### `PodCidr`<sup>Required</sup> <a name="PodCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidr"></a>

```csharp
public SupervisorPodCidrList PodCidr { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList">SupervisorPodCidrList</a>

---

##### `ServiceCidr`<sup>Required</sup> <a name="ServiceCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidr"></a>

```csharp
public SupervisorServiceCidrOutputReference ServiceCidr { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference">SupervisorServiceCidrOutputReference</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `ContentLibraryInput`<sup>Optional</sup> <a name="ContentLibraryInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibraryInput"></a>

```csharp
public string ContentLibraryInput { get; }
```

- *Type:* string

---

##### `DvsUuidInput`<sup>Optional</sup> <a name="DvsUuidInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuidInput"></a>

```csharp
public string DvsUuidInput { get; }
```

- *Type:* string

---

##### `EdgeClusterInput`<sup>Optional</sup> <a name="EdgeClusterInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeClusterInput"></a>

```csharp
public string EdgeClusterInput { get; }
```

- *Type:* string

---

##### `EgressCidrInput`<sup>Optional</sup> <a name="EgressCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidrInput"></a>

```csharp
public object EgressCidrInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressCidrInput`<sup>Optional</sup> <a name="IngressCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidrInput"></a>

```csharp
public object IngressCidrInput { get; }
```

- *Type:* object

---

##### `MainDnsInput`<sup>Optional</sup> <a name="MainDnsInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDnsInput"></a>

```csharp
public string[] MainDnsInput { get; }
```

- *Type:* string[]

---

##### `MainNtpInput`<sup>Optional</sup> <a name="MainNtpInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainNtpInput"></a>

```csharp
public string[] MainNtpInput { get; }
```

- *Type:* string[]

---

##### `ManagementNetworkInput`<sup>Optional</sup> <a name="ManagementNetworkInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetworkInput"></a>

```csharp
public SupervisorManagementNetwork ManagementNetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.namespaceInput"></a>

```csharp
public object NamespaceInput { get; }
```

- *Type:* object

---

##### `PodCidrInput`<sup>Optional</sup> <a name="PodCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidrInput"></a>

```csharp
public object PodCidrInput { get; }
```

- *Type:* object

---

##### `SearchDomainsInput`<sup>Optional</sup> <a name="SearchDomainsInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomainsInput"></a>

```csharp
public string[] SearchDomainsInput { get; }
```

- *Type:* string[]

---

##### `ServiceCidrInput`<sup>Optional</sup> <a name="ServiceCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidrInput"></a>

```csharp
public SupervisorServiceCidr ServiceCidrInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---

##### `SizingHintInput`<sup>Optional</sup> <a name="SizingHintInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHintInput"></a>

```csharp
public string SizingHintInput { get; }
```

- *Type:* string

---

##### `StoragePolicyInput`<sup>Optional</sup> <a name="StoragePolicyInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicyInput"></a>

```csharp
public string StoragePolicyInput { get; }
```

- *Type:* string

---

##### `WorkerDnsInput`<sup>Optional</sup> <a name="WorkerDnsInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDnsInput"></a>

```csharp
public string[] WorkerDnsInput { get; }
```

- *Type:* string[]

---

##### `WorkerNtpInput`<sup>Optional</sup> <a name="WorkerNtpInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerNtpInput"></a>

```csharp
public string[] WorkerNtpInput { get; }
```

- *Type:* string[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `ContentLibrary`<sup>Required</sup> <a name="ContentLibrary" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibrary"></a>

```csharp
public string ContentLibrary { get; }
```

- *Type:* string

---

##### `DvsUuid`<sup>Required</sup> <a name="DvsUuid" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuid"></a>

```csharp
public string DvsUuid { get; }
```

- *Type:* string

---

##### `EdgeCluster`<sup>Required</sup> <a name="EdgeCluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeCluster"></a>

```csharp
public string EdgeCluster { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MainDns`<sup>Required</sup> <a name="MainDns" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDns"></a>

```csharp
public string[] MainDns { get; }
```

- *Type:* string[]

---

##### `MainNtp`<sup>Required</sup> <a name="MainNtp" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainNtp"></a>

```csharp
public string[] MainNtp { get; }
```

- *Type:* string[]

---

##### `SearchDomains`<sup>Required</sup> <a name="SearchDomains" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomains"></a>

```csharp
public string[] SearchDomains { get; }
```

- *Type:* string[]

---

##### `SizingHint`<sup>Required</sup> <a name="SizingHint" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHint"></a>

```csharp
public string SizingHint { get; }
```

- *Type:* string

---

##### `StoragePolicy`<sup>Required</sup> <a name="StoragePolicy" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicy"></a>

```csharp
public string StoragePolicy { get; }
```

- *Type:* string

---

##### `WorkerDns`<sup>Required</sup> <a name="WorkerDns" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDns"></a>

```csharp
public string[] WorkerDns { get; }
```

- *Type:* string[]

---

##### `WorkerNtp`<sup>Required</sup> <a name="WorkerNtp" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerNtp"></a>

```csharp
public string[] WorkerNtp { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SupervisorConfig <a name="SupervisorConfig" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Cluster,
    string ContentLibrary,
    string DvsUuid,
    string EdgeCluster,
    object EgressCidr,
    object IngressCidr,
    string[] MainDns,
    string[] MainNtp,
    SupervisorManagementNetwork ManagementNetwork,
    object PodCidr,
    string[] SearchDomains,
    SupervisorServiceCidr ServiceCidr,
    string SizingHint,
    string StoragePolicy,
    string[] WorkerDns,
    string[] WorkerNtp,
    string Id = null,
    object Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.cluster">Cluster</a></code> | <code>string</code> | ID of the vSphere cluster on which workload management will be enabled. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.contentLibrary">ContentLibrary</a></code> | <code>string</code> | ID of the subscribed content library. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dvsUuid">DvsUuid</a></code> | <code>string</code> | The UUID (not ID) of the distributed switch. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.edgeCluster">EdgeCluster</a></code> | <code>string</code> | ID of the NSX Edge Cluster. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.egressCidr">EgressCidr</a></code> | <code>object</code> | egress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.ingressCidr">IngressCidr</a></code> | <code>object</code> | ingress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainDns">MainDns</a></code> | <code>string[]</code> | List of DNS servers to use on the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainNtp">MainNtp</a></code> | <code>string[]</code> | List of NTP servers to use on the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.managementNetwork">ManagementNetwork</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | management_network block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.podCidr">PodCidr</a></code> | <code>object</code> | pod_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.searchDomains">SearchDomains</a></code> | <code>string[]</code> | List of DNS search domains. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.serviceCidr">ServiceCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | service_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.sizingHint">SizingHint</a></code> | <code>string</code> | Size of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.storagePolicy">StoragePolicy</a></code> | <code>string</code> | The name of a storage policy associated with the datastore where the container images will be stored. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerDns">WorkerDns</a></code> | <code>string[]</code> | List of DNS servers to use on the worker nodes. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerNtp">WorkerNtp</a></code> | <code>string[]</code> | List of NTP servers to use on the worker nodes. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#id Supervisor#id}. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.namespace">Namespace</a></code> | <code>object</code> | namespace block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

ID of the vSphere cluster on which workload management will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#cluster Supervisor#cluster}

---

##### `ContentLibrary`<sup>Required</sup> <a name="ContentLibrary" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.contentLibrary"></a>

```csharp
public string ContentLibrary { get; set; }
```

- *Type:* string

ID of the subscribed content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#content_library Supervisor#content_library}

---

##### `DvsUuid`<sup>Required</sup> <a name="DvsUuid" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dvsUuid"></a>

```csharp
public string DvsUuid { get; set; }
```

- *Type:* string

The UUID (not ID) of the distributed switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#dvs_uuid Supervisor#dvs_uuid}

---

##### `EdgeCluster`<sup>Required</sup> <a name="EdgeCluster" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.edgeCluster"></a>

```csharp
public string EdgeCluster { get; set; }
```

- *Type:* string

ID of the NSX Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#edge_cluster Supervisor#edge_cluster}

---

##### `EgressCidr`<sup>Required</sup> <a name="EgressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.egressCidr"></a>

```csharp
public object EgressCidr { get; set; }
```

- *Type:* object

egress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#egress_cidr Supervisor#egress_cidr}

---

##### `IngressCidr`<sup>Required</sup> <a name="IngressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.ingressCidr"></a>

```csharp
public object IngressCidr { get; set; }
```

- *Type:* object

ingress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#ingress_cidr Supervisor#ingress_cidr}

---

##### `MainDns`<sup>Required</sup> <a name="MainDns" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainDns"></a>

```csharp
public string[] MainDns { get; set; }
```

- *Type:* string[]

List of DNS servers to use on the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#main_dns Supervisor#main_dns}

---

##### `MainNtp`<sup>Required</sup> <a name="MainNtp" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainNtp"></a>

```csharp
public string[] MainNtp { get; set; }
```

- *Type:* string[]

List of NTP servers to use on the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#main_ntp Supervisor#main_ntp}

---

##### `ManagementNetwork`<sup>Required</sup> <a name="ManagementNetwork" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.managementNetwork"></a>

```csharp
public SupervisorManagementNetwork ManagementNetwork { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

management_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#management_network Supervisor#management_network}

---

##### `PodCidr`<sup>Required</sup> <a name="PodCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.podCidr"></a>

```csharp
public object PodCidr { get; set; }
```

- *Type:* object

pod_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#pod_cidr Supervisor#pod_cidr}

---

##### `SearchDomains`<sup>Required</sup> <a name="SearchDomains" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.searchDomains"></a>

```csharp
public string[] SearchDomains { get; set; }
```

- *Type:* string[]

List of DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#search_domains Supervisor#search_domains}

---

##### `ServiceCidr`<sup>Required</sup> <a name="ServiceCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.serviceCidr"></a>

```csharp
public SupervisorServiceCidr ServiceCidr { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

service_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#service_cidr Supervisor#service_cidr}

---

##### `SizingHint`<sup>Required</sup> <a name="SizingHint" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.sizingHint"></a>

```csharp
public string SizingHint { get; set; }
```

- *Type:* string

Size of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#sizing_hint Supervisor#sizing_hint}

---

##### `StoragePolicy`<sup>Required</sup> <a name="StoragePolicy" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.storagePolicy"></a>

```csharp
public string StoragePolicy { get; set; }
```

- *Type:* string

The name of a storage policy associated with the datastore where the container images will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#storage_policy Supervisor#storage_policy}

---

##### `WorkerDns`<sup>Required</sup> <a name="WorkerDns" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerDns"></a>

```csharp
public string[] WorkerDns { get; set; }
```

- *Type:* string[]

List of DNS servers to use on the worker nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#worker_dns Supervisor#worker_dns}

---

##### `WorkerNtp`<sup>Required</sup> <a name="WorkerNtp" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerNtp"></a>

```csharp
public string[] WorkerNtp { get; set; }
```

- *Type:* string[]

List of NTP servers to use on the worker nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#worker_ntp Supervisor#worker_ntp}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#id Supervisor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.namespace"></a>

```csharp
public object Namespace { get; set; }
```

- *Type:* object

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#namespace Supervisor#namespace}

---

### SupervisorEgressCidr <a name="SupervisorEgressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorEgressCidr {
    string Address,
    double Prefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.address">Address</a></code> | <code>string</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.prefix">Prefix</a></code> | <code>double</code> | Subnet prefix. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#address Supervisor#address}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.prefix"></a>

```csharp
public double Prefix { get; set; }
```

- *Type:* double

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorIngressCidr <a name="SupervisorIngressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorIngressCidr {
    string Address,
    double Prefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.address">Address</a></code> | <code>string</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.prefix">Prefix</a></code> | <code>double</code> | Subnet prefix. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#address Supervisor#address}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.prefix"></a>

```csharp
public double Prefix { get; set; }
```

- *Type:* double

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorManagementNetwork <a name="SupervisorManagementNetwork" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorManagementNetwork {
    double AddressCount,
    string Gateway,
    string Network,
    string StartingAddress,
    string SubnetMask
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.addressCount">AddressCount</a></code> | <code>double</code> | Number of addresses to allocate. Starts from 'starting_address'. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.gateway">Gateway</a></code> | <code>string</code> | Gateway IP address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.network">Network</a></code> | <code>string</code> | ID of the network. (e.g. a distributed port group). |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.startingAddress">StartingAddress</a></code> | <code>string</code> | Starting address of the management network range. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.subnetMask">SubnetMask</a></code> | <code>string</code> | Subnet mask. |

---

##### `AddressCount`<sup>Required</sup> <a name="AddressCount" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.addressCount"></a>

```csharp
public double AddressCount { get; set; }
```

- *Type:* double

Number of addresses to allocate. Starts from 'starting_address'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#address_count Supervisor#address_count}

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.gateway"></a>

```csharp
public string Gateway { get; set; }
```

- *Type:* string

Gateway IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#gateway Supervisor#gateway}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

ID of the network. (e.g. a distributed port group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#network Supervisor#network}

---

##### `StartingAddress`<sup>Required</sup> <a name="StartingAddress" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.startingAddress"></a>

```csharp
public string StartingAddress { get; set; }
```

- *Type:* string

Starting address of the management network range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#starting_address Supervisor#starting_address}

---

##### `SubnetMask`<sup>Required</sup> <a name="SubnetMask" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.subnetMask"></a>

```csharp
public string SubnetMask { get; set; }
```

- *Type:* string

Subnet mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#subnet_mask Supervisor#subnet_mask}

---

### SupervisorNamespace <a name="SupervisorNamespace" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorNamespace {
    string Name,
    string[] ContentLibraries = null,
    string[] VmClasses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.name">Name</a></code> | <code>string</code> | The name of the namespace. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.contentLibraries">ContentLibraries</a></code> | <code>string[]</code> | A list of content libraries. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.vmClasses">VmClasses</a></code> | <code>string[]</code> | A list of virtual machine classes. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#name Supervisor#name}

---

##### `ContentLibraries`<sup>Optional</sup> <a name="ContentLibraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.contentLibraries"></a>

```csharp
public string[] ContentLibraries { get; set; }
```

- *Type:* string[]

A list of content libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#content_libraries Supervisor#content_libraries}

---

##### `VmClasses`<sup>Optional</sup> <a name="VmClasses" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.vmClasses"></a>

```csharp
public string[] VmClasses { get; set; }
```

- *Type:* string[]

A list of virtual machine classes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#vm_classes Supervisor#vm_classes}

---

### SupervisorPodCidr <a name="SupervisorPodCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorPodCidr {
    string Address,
    double Prefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.address">Address</a></code> | <code>string</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.prefix">Prefix</a></code> | <code>double</code> | Subnet prefix. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#address Supervisor#address}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.prefix"></a>

```csharp
public double Prefix { get; set; }
```

- *Type:* double

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorServiceCidr <a name="SupervisorServiceCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorServiceCidr {
    string Address,
    double Prefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.address">Address</a></code> | <code>string</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.prefix">Prefix</a></code> | <code>double</code> | Subnet prefix. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#address Supervisor#address}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.prefix"></a>

```csharp
public double Prefix { get; set; }
```

- *Type:* double

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#prefix Supervisor#prefix}

---

## Classes <a name="Classes" id="Classes"></a>

### SupervisorEgressCidrList <a name="SupervisorEgressCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorEgressCidrList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get"></a>

```csharp
private SupervisorEgressCidrOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SupervisorEgressCidrOutputReference <a name="SupervisorEgressCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorEgressCidrOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefixInput">PrefixInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefix">Prefix</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefixInput"></a>

```csharp
public double PrefixInput { get; }
```

- *Type:* double

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefix"></a>

```csharp
public double Prefix { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SupervisorIngressCidrList <a name="SupervisorIngressCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorIngressCidrList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get"></a>

```csharp
private SupervisorIngressCidrOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SupervisorIngressCidrOutputReference <a name="SupervisorIngressCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorIngressCidrOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefixInput">PrefixInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefix">Prefix</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefixInput"></a>

```csharp
public double PrefixInput { get; }
```

- *Type:* double

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefix"></a>

```csharp
public double Prefix { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SupervisorManagementNetworkOutputReference <a name="SupervisorManagementNetworkOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorManagementNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCountInput">AddressCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddressInput">StartingAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMaskInput">SubnetMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCount">AddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gateway">Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddress">StartingAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMask">SubnetMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressCountInput`<sup>Optional</sup> <a name="AddressCountInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCountInput"></a>

```csharp
public double AddressCountInput { get; }
```

- *Type:* double

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gatewayInput"></a>

```csharp
public string GatewayInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `StartingAddressInput`<sup>Optional</sup> <a name="StartingAddressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddressInput"></a>

```csharp
public string StartingAddressInput { get; }
```

- *Type:* string

---

##### `SubnetMaskInput`<sup>Optional</sup> <a name="SubnetMaskInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMaskInput"></a>

```csharp
public string SubnetMaskInput { get; }
```

- *Type:* string

---

##### `AddressCount`<sup>Required</sup> <a name="AddressCount" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCount"></a>

```csharp
public double AddressCount { get; }
```

- *Type:* double

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gateway"></a>

```csharp
public string Gateway { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `StartingAddress`<sup>Required</sup> <a name="StartingAddress" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddress"></a>

```csharp
public string StartingAddress { get; }
```

- *Type:* string

---

##### `SubnetMask`<sup>Required</sup> <a name="SubnetMask" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMask"></a>

```csharp
public string SubnetMask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.internalValue"></a>

```csharp
public SupervisorManagementNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---


### SupervisorNamespaceList <a name="SupervisorNamespaceList" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorNamespaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get"></a>

```csharp
private SupervisorNamespaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SupervisorNamespaceOutputReference <a name="SupervisorNamespaceOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorNamespaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetContentLibraries">ResetContentLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetVmClasses">ResetVmClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentLibraries` <a name="ResetContentLibraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetContentLibraries"></a>

```csharp
private void ResetContentLibraries()
```

##### `ResetVmClasses` <a name="ResetVmClasses" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetVmClasses"></a>

```csharp
private void ResetVmClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibrariesInput">ContentLibrariesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClassesInput">VmClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibraries">ContentLibraries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClasses">VmClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentLibrariesInput`<sup>Optional</sup> <a name="ContentLibrariesInput" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibrariesInput"></a>

```csharp
public string[] ContentLibrariesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VmClassesInput`<sup>Optional</sup> <a name="VmClassesInput" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClassesInput"></a>

```csharp
public string[] VmClassesInput { get; }
```

- *Type:* string[]

---

##### `ContentLibraries`<sup>Required</sup> <a name="ContentLibraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibraries"></a>

```csharp
public string[] ContentLibraries { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VmClasses`<sup>Required</sup> <a name="VmClasses" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClasses"></a>

```csharp
public string[] VmClasses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SupervisorPodCidrList <a name="SupervisorPodCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorPodCidrList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get"></a>

```csharp
private SupervisorPodCidrOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SupervisorPodCidrOutputReference <a name="SupervisorPodCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorPodCidrOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefixInput">PrefixInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefix">Prefix</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefixInput"></a>

```csharp
public double PrefixInput { get; }
```

- *Type:* double

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefix"></a>

```csharp
public double Prefix { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SupervisorServiceCidrOutputReference <a name="SupervisorServiceCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new SupervisorServiceCidrOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefixInput">PrefixInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefix">Prefix</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefixInput"></a>

```csharp
public double PrefixInput { get; }
```

- *Type:* double

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefix"></a>

```csharp
public double Prefix { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.internalValue"></a>

```csharp
public SupervisorServiceCidr InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---



