# `datastoreClusterVmAntiAffinityRule` Submodule <a name="`datastoreClusterVmAntiAffinityRule` Submodule" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastoreClusterVmAntiAffinityRule <a name="DatastoreClusterVmAntiAffinityRule" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster_vm_anti_affinity_rule vsphere_datastore_cluster_vm_anti_affinity_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DatastoreClusterVmAntiAffinityRule(Construct Scope, string Id, DatastoreClusterVmAntiAffinityRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig">DatastoreClusterVmAntiAffinityRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig">DatastoreClusterVmAntiAffinityRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetMandatory">ResetMandatory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMandatory` <a name="ResetMandatory" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetMandatory"></a>

```csharp
private void ResetMandatory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatastoreClusterVmAntiAffinityRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DatastoreClusterVmAntiAffinityRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DatastoreClusterVmAntiAffinityRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DatastoreClusterVmAntiAffinityRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DatastoreClusterVmAntiAffinityRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatastoreClusterVmAntiAffinityRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatastoreClusterVmAntiAffinityRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatastoreClusterVmAntiAffinityRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatastoreClusterVmAntiAffinityRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.datastoreClusterIdInput">DatastoreClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.mandatoryInput">MandatoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.virtualMachineIdsInput">VirtualMachineIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.mandatory">Mandatory</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.virtualMachineIds">VirtualMachineIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DatastoreClusterIdInput`<sup>Optional</sup> <a name="DatastoreClusterIdInput" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.datastoreClusterIdInput"></a>

```csharp
public string DatastoreClusterIdInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MandatoryInput`<sup>Optional</sup> <a name="MandatoryInput" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.mandatoryInput"></a>

```csharp
public object MandatoryInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VirtualMachineIdsInput`<sup>Optional</sup> <a name="VirtualMachineIdsInput" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.virtualMachineIdsInput"></a>

```csharp
public string[] VirtualMachineIdsInput { get; }
```

- *Type:* string[]

---

##### `DatastoreClusterId`<sup>Required</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.datastoreClusterId"></a>

```csharp
public string DatastoreClusterId { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mandatory`<sup>Required</sup> <a name="Mandatory" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.mandatory"></a>

```csharp
public object Mandatory { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VirtualMachineIds`<sup>Required</sup> <a name="VirtualMachineIds" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.virtualMachineIds"></a>

```csharp
public string[] VirtualMachineIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatastoreClusterVmAntiAffinityRuleConfig <a name="DatastoreClusterVmAntiAffinityRuleConfig" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DatastoreClusterVmAntiAffinityRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatastoreClusterId,
    string Name,
    string[] VirtualMachineIds,
    object Enabled = null,
    string Id = null,
    object Mandatory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>string</code> | The managed object ID of the datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.name">Name</a></code> | <code>string</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.virtualMachineIds">VirtualMachineIds</a></code> | <code>string[]</code> | The UUIDs of the virtual machines to run on different datastores from each other. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#id DatastoreClusterVmAntiAffinityRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.mandatory">Mandatory</a></code> | <code>object</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatastoreClusterId`<sup>Required</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.datastoreClusterId"></a>

```csharp
public string DatastoreClusterId { get; set; }
```

- *Type:* string

The managed object ID of the datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#datastore_cluster_id DatastoreClusterVmAntiAffinityRule#datastore_cluster_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#name DatastoreClusterVmAntiAffinityRule#name}

---

##### `VirtualMachineIds`<sup>Required</sup> <a name="VirtualMachineIds" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.virtualMachineIds"></a>

```csharp
public string[] VirtualMachineIds { get; set; }
```

- *Type:* string[]

The UUIDs of the virtual machines to run on different datastores from each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#virtual_machine_ids DatastoreClusterVmAntiAffinityRule#virtual_machine_ids}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#enabled DatastoreClusterVmAntiAffinityRule#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#id DatastoreClusterVmAntiAffinityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mandatory`<sup>Optional</sup> <a name="Mandatory" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.mandatory"></a>

```csharp
public object Mandatory { get; set; }
```

- *Type:* object

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#mandatory DatastoreClusterVmAntiAffinityRule#mandatory}

---



