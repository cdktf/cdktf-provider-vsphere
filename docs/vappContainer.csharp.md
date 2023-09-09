# `vsphere_vapp_container`

Refer to the Terraform Registory for docs: [`vsphere_vapp_container`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container).

# `vappContainer` Submodule <a name="`vappContainer` Submodule" id="@cdktf/provider-vsphere.vappContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VappContainer <a name="VappContainer" id="@cdktf/provider-vsphere.vappContainer.VappContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container vsphere_vapp_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VappContainer(Construct Scope, string Id, VappContainerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig">VappContainerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig">VappContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuExpandable">ResetCpuExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuLimit">ResetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuReservation">ResetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShareLevel">ResetCpuShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShares">ResetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryExpandable">ResetMemoryExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryLimit">ResetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryReservation">ResetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShareLevel">ResetMemoryShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShares">ResetMemoryShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetParentFolderId">ResetParentFolderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCpuExpandable` <a name="ResetCpuExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuExpandable"></a>

```csharp
private void ResetCpuExpandable()
```

##### `ResetCpuLimit` <a name="ResetCpuLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuLimit"></a>

```csharp
private void ResetCpuLimit()
```

##### `ResetCpuReservation` <a name="ResetCpuReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuReservation"></a>

```csharp
private void ResetCpuReservation()
```

##### `ResetCpuShareLevel` <a name="ResetCpuShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShareLevel"></a>

```csharp
private void ResetCpuShareLevel()
```

##### `ResetCpuShares` <a name="ResetCpuShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShares"></a>

```csharp
private void ResetCpuShares()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCustomAttributes"></a>

```csharp
private void ResetCustomAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMemoryExpandable` <a name="ResetMemoryExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryExpandable"></a>

```csharp
private void ResetMemoryExpandable()
```

##### `ResetMemoryLimit` <a name="ResetMemoryLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryLimit"></a>

```csharp
private void ResetMemoryLimit()
```

##### `ResetMemoryReservation` <a name="ResetMemoryReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryReservation"></a>

```csharp
private void ResetMemoryReservation()
```

##### `ResetMemoryShareLevel` <a name="ResetMemoryShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShareLevel"></a>

```csharp
private void ResetMemoryShareLevel()
```

##### `ResetMemoryShares` <a name="ResetMemoryShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShares"></a>

```csharp
private void ResetMemoryShares()
```

##### `ResetParentFolderId` <a name="ResetParentFolderId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetParentFolderId"></a>

```csharp
private void ResetParentFolderId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VappContainer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VappContainer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VappContainer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandableInput">CpuExpandableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimitInput">CpuLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservationInput">CpuReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevelInput">CpuShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuSharesInput">CpuSharesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributesInput">CustomAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandableInput">MemoryExpandableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimitInput">MemoryLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservationInput">MemoryReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevelInput">MemoryShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memorySharesInput">MemorySharesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderIdInput">ParentFolderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolIdInput">ParentResourcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandable">CpuExpandable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimit">CpuLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservation">CpuReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevel">CpuShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShares">CpuShares</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandable">MemoryExpandable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimit">MemoryLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShares">MemoryShares</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderId">ParentFolderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolId">ParentResourcePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CpuExpandableInput`<sup>Optional</sup> <a name="CpuExpandableInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandableInput"></a>

```csharp
public object CpuExpandableInput { get; }
```

- *Type:* object

---

##### `CpuLimitInput`<sup>Optional</sup> <a name="CpuLimitInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimitInput"></a>

```csharp
public double CpuLimitInput { get; }
```

- *Type:* double

---

##### `CpuReservationInput`<sup>Optional</sup> <a name="CpuReservationInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservationInput"></a>

```csharp
public double CpuReservationInput { get; }
```

- *Type:* double

---

##### `CpuShareLevelInput`<sup>Optional</sup> <a name="CpuShareLevelInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevelInput"></a>

```csharp
public string CpuShareLevelInput { get; }
```

- *Type:* string

---

##### `CpuSharesInput`<sup>Optional</sup> <a name="CpuSharesInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuSharesInput"></a>

```csharp
public double CpuSharesInput { get; }
```

- *Type:* double

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemoryExpandableInput`<sup>Optional</sup> <a name="MemoryExpandableInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandableInput"></a>

```csharp
public object MemoryExpandableInput { get; }
```

- *Type:* object

---

##### `MemoryLimitInput`<sup>Optional</sup> <a name="MemoryLimitInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimitInput"></a>

```csharp
public double MemoryLimitInput { get; }
```

- *Type:* double

---

##### `MemoryReservationInput`<sup>Optional</sup> <a name="MemoryReservationInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservationInput"></a>

```csharp
public double MemoryReservationInput { get; }
```

- *Type:* double

---

##### `MemoryShareLevelInput`<sup>Optional</sup> <a name="MemoryShareLevelInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevelInput"></a>

```csharp
public string MemoryShareLevelInput { get; }
```

- *Type:* string

---

##### `MemorySharesInput`<sup>Optional</sup> <a name="MemorySharesInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memorySharesInput"></a>

```csharp
public double MemorySharesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentFolderIdInput`<sup>Optional</sup> <a name="ParentFolderIdInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderIdInput"></a>

```csharp
public string ParentFolderIdInput { get; }
```

- *Type:* string

---

##### `ParentResourcePoolIdInput`<sup>Optional</sup> <a name="ParentResourcePoolIdInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolIdInput"></a>

```csharp
public string ParentResourcePoolIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `CpuExpandable`<sup>Required</sup> <a name="CpuExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandable"></a>

```csharp
public object CpuExpandable { get; }
```

- *Type:* object

---

##### `CpuLimit`<sup>Required</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimit"></a>

```csharp
public double CpuLimit { get; }
```

- *Type:* double

---

##### `CpuReservation`<sup>Required</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservation"></a>

```csharp
public double CpuReservation { get; }
```

- *Type:* double

---

##### `CpuShareLevel`<sup>Required</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevel"></a>

```csharp
public string CpuShareLevel { get; }
```

- *Type:* string

---

##### `CpuShares`<sup>Required</sup> <a name="CpuShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShares"></a>

```csharp
public double CpuShares { get; }
```

- *Type:* double

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MemoryExpandable`<sup>Required</sup> <a name="MemoryExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandable"></a>

```csharp
public object MemoryExpandable { get; }
```

- *Type:* object

---

##### `MemoryLimit`<sup>Required</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimit"></a>

```csharp
public double MemoryLimit { get; }
```

- *Type:* double

---

##### `MemoryReservation`<sup>Required</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; }
```

- *Type:* double

---

##### `MemoryShareLevel`<sup>Required</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevel"></a>

```csharp
public string MemoryShareLevel { get; }
```

- *Type:* string

---

##### `MemoryShares`<sup>Required</sup> <a name="MemoryShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShares"></a>

```csharp
public double MemoryShares { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentFolderId`<sup>Required</sup> <a name="ParentFolderId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderId"></a>

```csharp
public string ParentFolderId { get; }
```

- *Type:* string

---

##### `ParentResourcePoolId`<sup>Required</sup> <a name="ParentResourcePoolId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolId"></a>

```csharp
public string ParentResourcePoolId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VappContainerConfig <a name="VappContainerConfig" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VappContainerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ParentResourcePoolId,
    object CpuExpandable = null,
    double CpuLimit = null,
    double CpuReservation = null,
    string CpuShareLevel = null,
    double CpuShares = null,
    System.Collections.Generic.IDictionary<string, string> CustomAttributes = null,
    string Id = null,
    object MemoryExpandable = null,
    double MemoryLimit = null,
    double MemoryReservation = null,
    string MemoryShareLevel = null,
    double MemoryShares = null,
    string ParentFolderId = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.name">Name</a></code> | <code>string</code> | The name of the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentResourcePoolId">ParentResourcePoolId</a></code> | <code>string</code> | The managed object ID of the parent resource pool or the compute resource the vApp container is in. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuExpandable">CpuExpandable</a></code> | <code>object</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuLimit">CpuLimit</a></code> | <code>double</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuReservation">CpuReservation</a></code> | <code>double</code> | Amount of CPU (MHz) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShareLevel">CpuShareLevel</a></code> | <code>string</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShares">CpuShares</a></code> | <code>double</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#id VappContainer#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryExpandable">MemoryExpandable</a></code> | <code>object</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryLimit">MemoryLimit</a></code> | <code>double</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | Amount of memory (MB) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>string</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShares">MemoryShares</a></code> | <code>double</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentFolderId">ParentFolderId</a></code> | <code>string</code> | The ID of the parent VM folder. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#name VappContainer#name}

---

##### `ParentResourcePoolId`<sup>Required</sup> <a name="ParentResourcePoolId" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentResourcePoolId"></a>

```csharp
public string ParentResourcePoolId { get; set; }
```

- *Type:* string

The managed object ID of the parent resource pool or the compute resource the vApp container is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#parent_resource_pool_id VappContainer#parent_resource_pool_id}

---

##### `CpuExpandable`<sup>Optional</sup> <a name="CpuExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuExpandable"></a>

```csharp
public object CpuExpandable { get; set; }
```

- *Type:* object

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_expandable VappContainer#cpu_expandable}

---

##### `CpuLimit`<sup>Optional</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuLimit"></a>

```csharp
public double CpuLimit { get; set; }
```

- *Type:* double

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_limit VappContainer#cpu_limit}

---

##### `CpuReservation`<sup>Optional</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuReservation"></a>

```csharp
public double CpuReservation { get; set; }
```

- *Type:* double

Amount of CPU (MHz) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_reservation VappContainer#cpu_reservation}

---

##### `CpuShareLevel`<sup>Optional</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShareLevel"></a>

```csharp
public string CpuShareLevel { get; set; }
```

- *Type:* string

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_share_level VappContainer#cpu_share_level}

---

##### `CpuShares`<sup>Optional</sup> <a name="CpuShares" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShares"></a>

```csharp
public double CpuShares { get; set; }
```

- *Type:* double

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#cpu_shares VappContainer#cpu_shares}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#custom_attributes VappContainer#custom_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#id VappContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemoryExpandable`<sup>Optional</sup> <a name="MemoryExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryExpandable"></a>

```csharp
public object MemoryExpandable { get; set; }
```

- *Type:* object

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_expandable VappContainer#memory_expandable}

---

##### `MemoryLimit`<sup>Optional</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryLimit"></a>

```csharp
public double MemoryLimit { get; set; }
```

- *Type:* double

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_limit VappContainer#memory_limit}

---

##### `MemoryReservation`<sup>Optional</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; set; }
```

- *Type:* double

Amount of memory (MB) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_reservation VappContainer#memory_reservation}

---

##### `MemoryShareLevel`<sup>Optional</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShareLevel"></a>

```csharp
public string MemoryShareLevel { get; set; }
```

- *Type:* string

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_share_level VappContainer#memory_share_level}

---

##### `MemoryShares`<sup>Optional</sup> <a name="MemoryShares" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShares"></a>

```csharp
public double MemoryShares { get; set; }
```

- *Type:* double

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#memory_shares VappContainer#memory_shares}

---

##### `ParentFolderId`<sup>Optional</sup> <a name="ParentFolderId" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentFolderId"></a>

```csharp
public string ParentFolderId { get; set; }
```

- *Type:* string

The ID of the parent VM folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#parent_folder_id VappContainer#parent_folder_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vapp_container#tags VappContainer#tags}

---



