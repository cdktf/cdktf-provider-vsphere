# `haVmOverride` Submodule <a name="`haVmOverride` Submodule" id="@cdktf/provider-vsphere.haVmOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HaVmOverride <a name="HaVmOverride" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override vsphere_ha_vm_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HaVmOverride(Construct Scope, string Id, HaVmOverrideConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig">HaVmOverrideConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig">HaVmOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdRecoveryAction">ResetHaDatastoreApdRecoveryAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponse">ResetHaDatastoreApdResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponseDelay">ResetHaDatastoreApdResponseDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastorePdlResponse">ResetHaDatastorePdlResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaHostIsolationResponse">ResetHaHostIsolationResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmFailureInterval">ResetHaVmFailureInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumFailureWindow">ResetHaVmMaximumFailureWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumResets">ResetHaVmMaximumResets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMinimumUptime">ResetHaVmMinimumUptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoring">ResetHaVmMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoringUseClusterDefaults">ResetHaVmMonitoringUseClusterDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartPriority">ResetHaVmRestartPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartTimeout">ResetHaVmRestartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetHaDatastoreApdRecoveryAction` <a name="ResetHaDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdRecoveryAction"></a>

```csharp
private void ResetHaDatastoreApdRecoveryAction()
```

##### `ResetHaDatastoreApdResponse` <a name="ResetHaDatastoreApdResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponse"></a>

```csharp
private void ResetHaDatastoreApdResponse()
```

##### `ResetHaDatastoreApdResponseDelay` <a name="ResetHaDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponseDelay"></a>

```csharp
private void ResetHaDatastoreApdResponseDelay()
```

##### `ResetHaDatastorePdlResponse` <a name="ResetHaDatastorePdlResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastorePdlResponse"></a>

```csharp
private void ResetHaDatastorePdlResponse()
```

##### `ResetHaHostIsolationResponse` <a name="ResetHaHostIsolationResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaHostIsolationResponse"></a>

```csharp
private void ResetHaHostIsolationResponse()
```

##### `ResetHaVmFailureInterval` <a name="ResetHaVmFailureInterval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmFailureInterval"></a>

```csharp
private void ResetHaVmFailureInterval()
```

##### `ResetHaVmMaximumFailureWindow` <a name="ResetHaVmMaximumFailureWindow" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumFailureWindow"></a>

```csharp
private void ResetHaVmMaximumFailureWindow()
```

##### `ResetHaVmMaximumResets` <a name="ResetHaVmMaximumResets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumResets"></a>

```csharp
private void ResetHaVmMaximumResets()
```

##### `ResetHaVmMinimumUptime` <a name="ResetHaVmMinimumUptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMinimumUptime"></a>

```csharp
private void ResetHaVmMinimumUptime()
```

##### `ResetHaVmMonitoring` <a name="ResetHaVmMonitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoring"></a>

```csharp
private void ResetHaVmMonitoring()
```

##### `ResetHaVmMonitoringUseClusterDefaults` <a name="ResetHaVmMonitoringUseClusterDefaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoringUseClusterDefaults"></a>

```csharp
private void ResetHaVmMonitoringUseClusterDefaults()
```

##### `ResetHaVmRestartPriority` <a name="ResetHaVmRestartPriority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartPriority"></a>

```csharp
private void ResetHaVmRestartPriority()
```

##### `ResetHaVmRestartTimeout` <a name="ResetHaVmRestartTimeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartTimeout"></a>

```csharp
private void ResetHaVmRestartTimeout()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HaVmOverride resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

HaVmOverride.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

HaVmOverride.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

HaVmOverride.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

HaVmOverride.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HaVmOverride resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HaVmOverride to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HaVmOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HaVmOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterIdInput">ComputeClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryActionInput">HaDatastoreApdRecoveryActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelayInput">HaDatastoreApdResponseDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseInput">HaDatastoreApdResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponseInput">HaDatastorePdlResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponseInput">HaHostIsolationResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureIntervalInput">HaVmFailureIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindowInput">HaVmMaximumFailureWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResetsInput">HaVmMaximumResetsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptimeInput">HaVmMinimumUptimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringInput">HaVmMonitoringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaultsInput">HaVmMonitoringUseClusterDefaultsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriorityInput">HaVmRestartPriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeoutInput">HaVmRestartTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterId">ComputeClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryAction">HaDatastoreApdRecoveryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponse">HaDatastoreApdResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelay">HaDatastoreApdResponseDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponse">HaDatastorePdlResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponse">HaHostIsolationResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureInterval">HaVmFailureInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindow">HaVmMaximumFailureWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResets">HaVmMaximumResets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptime">HaVmMinimumUptime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoring">HaVmMonitoring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaults">HaVmMonitoringUseClusterDefaults</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriority">HaVmRestartPriority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeout">HaVmRestartTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComputeClusterIdInput`<sup>Optional</sup> <a name="ComputeClusterIdInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterIdInput"></a>

```csharp
public string ComputeClusterIdInput { get; }
```

- *Type:* string

---

##### `HaDatastoreApdRecoveryActionInput`<sup>Optional</sup> <a name="HaDatastoreApdRecoveryActionInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryActionInput"></a>

```csharp
public string HaDatastoreApdRecoveryActionInput { get; }
```

- *Type:* string

---

##### `HaDatastoreApdResponseDelayInput`<sup>Optional</sup> <a name="HaDatastoreApdResponseDelayInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelayInput"></a>

```csharp
public double HaDatastoreApdResponseDelayInput { get; }
```

- *Type:* double

---

##### `HaDatastoreApdResponseInput`<sup>Optional</sup> <a name="HaDatastoreApdResponseInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseInput"></a>

```csharp
public string HaDatastoreApdResponseInput { get; }
```

- *Type:* string

---

##### `HaDatastorePdlResponseInput`<sup>Optional</sup> <a name="HaDatastorePdlResponseInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponseInput"></a>

```csharp
public string HaDatastorePdlResponseInput { get; }
```

- *Type:* string

---

##### `HaHostIsolationResponseInput`<sup>Optional</sup> <a name="HaHostIsolationResponseInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponseInput"></a>

```csharp
public string HaHostIsolationResponseInput { get; }
```

- *Type:* string

---

##### `HaVmFailureIntervalInput`<sup>Optional</sup> <a name="HaVmFailureIntervalInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureIntervalInput"></a>

```csharp
public double HaVmFailureIntervalInput { get; }
```

- *Type:* double

---

##### `HaVmMaximumFailureWindowInput`<sup>Optional</sup> <a name="HaVmMaximumFailureWindowInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindowInput"></a>

```csharp
public double HaVmMaximumFailureWindowInput { get; }
```

- *Type:* double

---

##### `HaVmMaximumResetsInput`<sup>Optional</sup> <a name="HaVmMaximumResetsInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResetsInput"></a>

```csharp
public double HaVmMaximumResetsInput { get; }
```

- *Type:* double

---

##### `HaVmMinimumUptimeInput`<sup>Optional</sup> <a name="HaVmMinimumUptimeInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptimeInput"></a>

```csharp
public double HaVmMinimumUptimeInput { get; }
```

- *Type:* double

---

##### `HaVmMonitoringInput`<sup>Optional</sup> <a name="HaVmMonitoringInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringInput"></a>

```csharp
public string HaVmMonitoringInput { get; }
```

- *Type:* string

---

##### `HaVmMonitoringUseClusterDefaultsInput`<sup>Optional</sup> <a name="HaVmMonitoringUseClusterDefaultsInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaultsInput"></a>

```csharp
public object HaVmMonitoringUseClusterDefaultsInput { get; }
```

- *Type:* object

---

##### `HaVmRestartPriorityInput`<sup>Optional</sup> <a name="HaVmRestartPriorityInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriorityInput"></a>

```csharp
public string HaVmRestartPriorityInput { get; }
```

- *Type:* string

---

##### `HaVmRestartTimeoutInput`<sup>Optional</sup> <a name="HaVmRestartTimeoutInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeoutInput"></a>

```csharp
public double HaVmRestartTimeoutInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineIdInput"></a>

```csharp
public string VirtualMachineIdInput { get; }
```

- *Type:* string

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterId"></a>

```csharp
public string ComputeClusterId { get; }
```

- *Type:* string

---

##### `HaDatastoreApdRecoveryAction`<sup>Required</sup> <a name="HaDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryAction"></a>

```csharp
public string HaDatastoreApdRecoveryAction { get; }
```

- *Type:* string

---

##### `HaDatastoreApdResponse`<sup>Required</sup> <a name="HaDatastoreApdResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponse"></a>

```csharp
public string HaDatastoreApdResponse { get; }
```

- *Type:* string

---

##### `HaDatastoreApdResponseDelay`<sup>Required</sup> <a name="HaDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelay"></a>

```csharp
public double HaDatastoreApdResponseDelay { get; }
```

- *Type:* double

---

##### `HaDatastorePdlResponse`<sup>Required</sup> <a name="HaDatastorePdlResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponse"></a>

```csharp
public string HaDatastorePdlResponse { get; }
```

- *Type:* string

---

##### `HaHostIsolationResponse`<sup>Required</sup> <a name="HaHostIsolationResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponse"></a>

```csharp
public string HaHostIsolationResponse { get; }
```

- *Type:* string

---

##### `HaVmFailureInterval`<sup>Required</sup> <a name="HaVmFailureInterval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureInterval"></a>

```csharp
public double HaVmFailureInterval { get; }
```

- *Type:* double

---

##### `HaVmMaximumFailureWindow`<sup>Required</sup> <a name="HaVmMaximumFailureWindow" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindow"></a>

```csharp
public double HaVmMaximumFailureWindow { get; }
```

- *Type:* double

---

##### `HaVmMaximumResets`<sup>Required</sup> <a name="HaVmMaximumResets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResets"></a>

```csharp
public double HaVmMaximumResets { get; }
```

- *Type:* double

---

##### `HaVmMinimumUptime`<sup>Required</sup> <a name="HaVmMinimumUptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptime"></a>

```csharp
public double HaVmMinimumUptime { get; }
```

- *Type:* double

---

##### `HaVmMonitoring`<sup>Required</sup> <a name="HaVmMonitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoring"></a>

```csharp
public string HaVmMonitoring { get; }
```

- *Type:* string

---

##### `HaVmMonitoringUseClusterDefaults`<sup>Required</sup> <a name="HaVmMonitoringUseClusterDefaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaults"></a>

```csharp
public object HaVmMonitoringUseClusterDefaults { get; }
```

- *Type:* object

---

##### `HaVmRestartPriority`<sup>Required</sup> <a name="HaVmRestartPriority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriority"></a>

```csharp
public string HaVmRestartPriority { get; }
```

- *Type:* string

---

##### `HaVmRestartTimeout`<sup>Required</sup> <a name="HaVmRestartTimeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeout"></a>

```csharp
public double HaVmRestartTimeout { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HaVmOverrideConfig <a name="HaVmOverrideConfig" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HaVmOverrideConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ComputeClusterId,
    string VirtualMachineId,
    string HaDatastoreApdRecoveryAction = null,
    string HaDatastoreApdResponse = null,
    double HaDatastoreApdResponseDelay = null,
    string HaDatastorePdlResponse = null,
    string HaHostIsolationResponse = null,
    double HaVmFailureInterval = null,
    double HaVmMaximumFailureWindow = null,
    double HaVmMaximumResets = null,
    double HaVmMinimumUptime = null,
    string HaVmMonitoring = null,
    object HaVmMonitoringUseClusterDefaults = null,
    string HaVmRestartPriority = null,
    double HaVmRestartTimeout = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.computeClusterId">ComputeClusterId</a></code> | <code>string</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdRecoveryAction">HaDatastoreApdRecoveryAction</a></code> | <code>string</code> | Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponse">HaDatastoreApdResponse</a></code> | <code>string</code> | Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponseDelay">HaDatastoreApdResponseDelay</a></code> | <code>double</code> | Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastorePdlResponse">HaDatastorePdlResponse</a></code> | <code>string</code> | Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haHostIsolationResponse">HaHostIsolationResponse</a></code> | <code>string</code> | The action to take on this virtual machine when a host is isolated from the rest of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmFailureInterval">HaVmFailureInterval</a></code> | <code>double</code> | If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumFailureWindow">HaVmMaximumFailureWindow</a></code> | <code>double</code> | The length of the reset window in which ha_vm_maximum_resets can operate. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumResets">HaVmMaximumResets</a></code> | <code>double</code> | The maximum number of resets that HA will perform to this virtual machine when responding to a failure event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMinimumUptime">HaVmMinimumUptime</a></code> | <code>double</code> | The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoring">HaVmMonitoring</a></code> | <code>string</code> | The type of virtual machine monitoring to use for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoringUseClusterDefaults">HaVmMonitoringUseClusterDefaults</a></code> | <code>object</code> | Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartPriority">HaVmRestartPriority</a></code> | <code>string</code> | The restart priority for this virtual machine when vSphere detects a host failure. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartTimeout">HaVmRestartTimeout</a></code> | <code>double</code> | The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#id HaVmOverride#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.computeClusterId"></a>

```csharp
public string ComputeClusterId { get; set; }
```

- *Type:* string

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#compute_cluster_id HaVmOverride#compute_cluster_id}

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; set; }
```

- *Type:* string

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#virtual_machine_id HaVmOverride#virtual_machine_id}

---

##### `HaDatastoreApdRecoveryAction`<sup>Optional</sup> <a name="HaDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdRecoveryAction"></a>

```csharp
public string HaDatastoreApdRecoveryAction { get; set; }
```

- *Type:* string

Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event.

Can be one of useClusterDefault, none or reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_datastore_apd_recovery_action HaVmOverride#ha_datastore_apd_recovery_action}

---

##### `HaDatastoreApdResponse`<sup>Optional</sup> <a name="HaDatastoreApdResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponse"></a>

```csharp
public string HaDatastoreApdResponse { get; set; }
```

- *Type:* string

Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore.

Can be one of clusterDefault, disabled, warning, restartConservative, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_datastore_apd_response HaVmOverride#ha_datastore_apd_response}

---

##### `HaDatastoreApdResponseDelay`<sup>Optional</sup> <a name="HaDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponseDelay"></a>

```csharp
public double HaDatastoreApdResponseDelay { get; set; }
```

- *Type:* double

Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.

Specify -1 to use the cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_datastore_apd_response_delay HaVmOverride#ha_datastore_apd_response_delay}

---

##### `HaDatastorePdlResponse`<sup>Optional</sup> <a name="HaDatastorePdlResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastorePdlResponse"></a>

```csharp
public string HaDatastorePdlResponse { get; set; }
```

- *Type:* string

Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore.

Can be one of clusterDefault, disabled, warning, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_datastore_pdl_response HaVmOverride#ha_datastore_pdl_response}

---

##### `HaHostIsolationResponse`<sup>Optional</sup> <a name="HaHostIsolationResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haHostIsolationResponse"></a>

```csharp
public string HaHostIsolationResponse { get; set; }
```

- *Type:* string

The action to take on this virtual machine when a host is isolated from the rest of the cluster.

Can be one of clusterIsolationResponse, none, powerOff, or shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_host_isolation_response HaVmOverride#ha_host_isolation_response}

---

##### `HaVmFailureInterval`<sup>Optional</sup> <a name="HaVmFailureInterval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmFailureInterval"></a>

```csharp
public double HaVmFailureInterval { get; set; }
```

- *Type:* double

If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed.

The value is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_failure_interval HaVmOverride#ha_vm_failure_interval}

---

##### `HaVmMaximumFailureWindow`<sup>Optional</sup> <a name="HaVmMaximumFailureWindow" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumFailureWindow"></a>

```csharp
public double HaVmMaximumFailureWindow { get; set; }
```

- *Type:* double

The length of the reset window in which ha_vm_maximum_resets can operate.

When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_maximum_failure_window HaVmOverride#ha_vm_maximum_failure_window}

---

##### `HaVmMaximumResets`<sup>Optional</sup> <a name="HaVmMaximumResets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumResets"></a>

```csharp
public double HaVmMaximumResets { get; set; }
```

- *Type:* double

The maximum number of resets that HA will perform to this virtual machine when responding to a failure event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_maximum_resets HaVmOverride#ha_vm_maximum_resets}

---

##### `HaVmMinimumUptime`<sup>Optional</sup> <a name="HaVmMinimumUptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMinimumUptime"></a>

```csharp
public double HaVmMinimumUptime { get; set; }
```

- *Type:* double

The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_minimum_uptime HaVmOverride#ha_vm_minimum_uptime}

---

##### `HaVmMonitoring`<sup>Optional</sup> <a name="HaVmMonitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoring"></a>

```csharp
public string HaVmMonitoring { get; set; }
```

- *Type:* string

The type of virtual machine monitoring to use for this virtual machine.

Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_monitoring HaVmOverride#ha_vm_monitoring}

---

##### `HaVmMonitoringUseClusterDefaults`<sup>Optional</sup> <a name="HaVmMonitoringUseClusterDefaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoringUseClusterDefaults"></a>

```csharp
public object HaVmMonitoringUseClusterDefaults { get; set; }
```

- *Type:* object

Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring.

The default is true (use cluster defaults) - set to false to have overrides take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_monitoring_use_cluster_defaults HaVmOverride#ha_vm_monitoring_use_cluster_defaults}

---

##### `HaVmRestartPriority`<sup>Optional</sup> <a name="HaVmRestartPriority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartPriority"></a>

```csharp
public string HaVmRestartPriority { get; set; }
```

- *Type:* string

The restart priority for this virtual machine when vSphere detects a host failure.

Can be one of clusterRestartPriority, lowest, low, medium, high, or highest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_restart_priority HaVmOverride#ha_vm_restart_priority}

---

##### `HaVmRestartTimeout`<sup>Optional</sup> <a name="HaVmRestartTimeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartTimeout"></a>

```csharp
public double HaVmRestartTimeout { get; set; }
```

- *Type:* double

The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready.

Use -1 to use the cluster default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#ha_vm_restart_timeout HaVmOverride#ha_vm_restart_timeout}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/ha_vm_override#id HaVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



