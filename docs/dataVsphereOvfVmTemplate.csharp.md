# `dataVsphereOvfVmTemplate` Submodule <a name="`dataVsphereOvfVmTemplate` Submodule" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereOvfVmTemplate <a name="DataVsphereOvfVmTemplate" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template vsphere_ovf_vm_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereOvfVmTemplate(Construct Scope, string Id, DataVsphereOvfVmTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig">DataVsphereOvfVmTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig">DataVsphereOvfVmTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetAllowUnverifiedSslCert">ResetAllowUnverifiedSslCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDatastoreId">ResetDatastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDeploymentOption">ResetDeploymentOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDiskProvisioning">ResetDiskProvisioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetEnableHiddenProperties">ResetEnableHiddenProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetIpAllocationPolicy">ResetIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetIpProtocol">ResetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetLocalOvfPath">ResetLocalOvfPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetOvfNetworkMap">ResetOvfNetworkMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetRemoteOvfUrl">ResetRemoteOvfUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAllowUnverifiedSslCert` <a name="ResetAllowUnverifiedSslCert" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetAllowUnverifiedSslCert"></a>

```csharp
private void ResetAllowUnverifiedSslCert()
```

##### `ResetDatastoreId` <a name="ResetDatastoreId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDatastoreId"></a>

```csharp
private void ResetDatastoreId()
```

##### `ResetDeploymentOption` <a name="ResetDeploymentOption" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDeploymentOption"></a>

```csharp
private void ResetDeploymentOption()
```

##### `ResetDiskProvisioning` <a name="ResetDiskProvisioning" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDiskProvisioning"></a>

```csharp
private void ResetDiskProvisioning()
```

##### `ResetEnableHiddenProperties` <a name="ResetEnableHiddenProperties" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetEnableHiddenProperties"></a>

```csharp
private void ResetEnableHiddenProperties()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAllocationPolicy` <a name="ResetIpAllocationPolicy" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetIpAllocationPolicy"></a>

```csharp
private void ResetIpAllocationPolicy()
```

##### `ResetIpProtocol` <a name="ResetIpProtocol" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetIpProtocol"></a>

```csharp
private void ResetIpProtocol()
```

##### `ResetLocalOvfPath` <a name="ResetLocalOvfPath" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetLocalOvfPath"></a>

```csharp
private void ResetLocalOvfPath()
```

##### `ResetOvfNetworkMap` <a name="ResetOvfNetworkMap" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetOvfNetworkMap"></a>

```csharp
private void ResetOvfNetworkMap()
```

##### `ResetRemoteOvfUrl` <a name="ResetRemoteOvfUrl" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetRemoteOvfUrl"></a>

```csharp
private void ResetRemoteOvfUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereOvfVmTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereOvfVmTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereOvfVmTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereOvfVmTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereOvfVmTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVsphereOvfVmTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVsphereOvfVmTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVsphereOvfVmTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereOvfVmTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.alternateGuestName">AlternateGuestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.annotation">Annotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuHotAddEnabled">CpuHotAddEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuHotRemoveEnabled">CpuHotRemoveEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuPerformanceCountersEnabled">CpuPerformanceCountersEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.firmware">Firmware</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.guestId">GuestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ideControllerCount">IdeControllerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.memoryHotAddEnabled">MemoryHotAddEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.nestedHvEnabled">NestedHvEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.numCoresPerSocket">NumCoresPerSocket</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.numCpus">NumCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.sataControllerCount">SataControllerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.scsiControllerCount">ScsiControllerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.scsiType">ScsiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.swapPlacementPolicy">SwapPlacementPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.allowUnverifiedSslCertInput">AllowUnverifiedSslCertInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.datastoreIdInput">DatastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.deploymentOptionInput">DeploymentOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.diskProvisioningInput">DiskProvisioningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.enableHiddenPropertiesInput">EnableHiddenPropertiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.hostSystemIdInput">HostSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipAllocationPolicyInput">IpAllocationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.localOvfPathInput">LocalOvfPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ovfNetworkMapInput">OvfNetworkMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.remoteOvfUrlInput">RemoteOvfUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.resourcePoolIdInput">ResourcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.allowUnverifiedSslCert">AllowUnverifiedSslCert</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.datastoreId">DatastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.deploymentOption">DeploymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.diskProvisioning">DiskProvisioning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.enableHiddenProperties">EnableHiddenProperties</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.hostSystemId">HostSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.localOvfPath">LocalOvfPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ovfNetworkMap">OvfNetworkMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.remoteOvfUrl">RemoteOvfUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.resourcePoolId">ResourcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AlternateGuestName`<sup>Required</sup> <a name="AlternateGuestName" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.alternateGuestName"></a>

```csharp
public string AlternateGuestName { get; }
```

- *Type:* string

---

##### `Annotation`<sup>Required</sup> <a name="Annotation" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.annotation"></a>

```csharp
public string Annotation { get; }
```

- *Type:* string

---

##### `CpuHotAddEnabled`<sup>Required</sup> <a name="CpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuHotAddEnabled"></a>

```csharp
public IResolvable CpuHotAddEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CpuHotRemoveEnabled`<sup>Required</sup> <a name="CpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuHotRemoveEnabled"></a>

```csharp
public IResolvable CpuHotRemoveEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CpuPerformanceCountersEnabled`<sup>Required</sup> <a name="CpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuPerformanceCountersEnabled"></a>

```csharp
public IResolvable CpuPerformanceCountersEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Firmware`<sup>Required</sup> <a name="Firmware" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.firmware"></a>

```csharp
public string Firmware { get; }
```

- *Type:* string

---

##### `GuestId`<sup>Required</sup> <a name="GuestId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.guestId"></a>

```csharp
public string GuestId { get; }
```

- *Type:* string

---

##### `IdeControllerCount`<sup>Required</sup> <a name="IdeControllerCount" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ideControllerCount"></a>

```csharp
public double IdeControllerCount { get; }
```

- *Type:* double

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `MemoryHotAddEnabled`<sup>Required</sup> <a name="MemoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.memoryHotAddEnabled"></a>

```csharp
public IResolvable MemoryHotAddEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NestedHvEnabled`<sup>Required</sup> <a name="NestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.nestedHvEnabled"></a>

```csharp
public IResolvable NestedHvEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NumCoresPerSocket`<sup>Required</sup> <a name="NumCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.numCoresPerSocket"></a>

```csharp
public double NumCoresPerSocket { get; }
```

- *Type:* double

---

##### `NumCpus`<sup>Required</sup> <a name="NumCpus" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.numCpus"></a>

```csharp
public double NumCpus { get; }
```

- *Type:* double

---

##### `SataControllerCount`<sup>Required</sup> <a name="SataControllerCount" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.sataControllerCount"></a>

```csharp
public double SataControllerCount { get; }
```

- *Type:* double

---

##### `ScsiControllerCount`<sup>Required</sup> <a name="ScsiControllerCount" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.scsiControllerCount"></a>

```csharp
public double ScsiControllerCount { get; }
```

- *Type:* double

---

##### `ScsiType`<sup>Required</sup> <a name="ScsiType" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.scsiType"></a>

```csharp
public string ScsiType { get; }
```

- *Type:* string

---

##### `SwapPlacementPolicy`<sup>Required</sup> <a name="SwapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.swapPlacementPolicy"></a>

```csharp
public string SwapPlacementPolicy { get; }
```

- *Type:* string

---

##### `AllowUnverifiedSslCertInput`<sup>Optional</sup> <a name="AllowUnverifiedSslCertInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.allowUnverifiedSslCertInput"></a>

```csharp
public object AllowUnverifiedSslCertInput { get; }
```

- *Type:* object

---

##### `DatastoreIdInput`<sup>Optional</sup> <a name="DatastoreIdInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.datastoreIdInput"></a>

```csharp
public string DatastoreIdInput { get; }
```

- *Type:* string

---

##### `DeploymentOptionInput`<sup>Optional</sup> <a name="DeploymentOptionInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.deploymentOptionInput"></a>

```csharp
public string DeploymentOptionInput { get; }
```

- *Type:* string

---

##### `DiskProvisioningInput`<sup>Optional</sup> <a name="DiskProvisioningInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.diskProvisioningInput"></a>

```csharp
public string DiskProvisioningInput { get; }
```

- *Type:* string

---

##### `EnableHiddenPropertiesInput`<sup>Optional</sup> <a name="EnableHiddenPropertiesInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.enableHiddenPropertiesInput"></a>

```csharp
public object EnableHiddenPropertiesInput { get; }
```

- *Type:* object

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `HostSystemIdInput`<sup>Optional</sup> <a name="HostSystemIdInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.hostSystemIdInput"></a>

```csharp
public string HostSystemIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAllocationPolicyInput`<sup>Optional</sup> <a name="IpAllocationPolicyInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipAllocationPolicyInput"></a>

```csharp
public string IpAllocationPolicyInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `LocalOvfPathInput`<sup>Optional</sup> <a name="LocalOvfPathInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.localOvfPathInput"></a>

```csharp
public string LocalOvfPathInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OvfNetworkMapInput`<sup>Optional</sup> <a name="OvfNetworkMapInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ovfNetworkMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OvfNetworkMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RemoteOvfUrlInput`<sup>Optional</sup> <a name="RemoteOvfUrlInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.remoteOvfUrlInput"></a>

```csharp
public string RemoteOvfUrlInput { get; }
```

- *Type:* string

---

##### `ResourcePoolIdInput`<sup>Optional</sup> <a name="ResourcePoolIdInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.resourcePoolIdInput"></a>

```csharp
public string ResourcePoolIdInput { get; }
```

- *Type:* string

---

##### `AllowUnverifiedSslCert`<sup>Required</sup> <a name="AllowUnverifiedSslCert" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.allowUnverifiedSslCert"></a>

```csharp
public object AllowUnverifiedSslCert { get; }
```

- *Type:* object

---

##### `DatastoreId`<sup>Required</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.datastoreId"></a>

```csharp
public string DatastoreId { get; }
```

- *Type:* string

---

##### `DeploymentOption`<sup>Required</sup> <a name="DeploymentOption" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.deploymentOption"></a>

```csharp
public string DeploymentOption { get; }
```

- *Type:* string

---

##### `DiskProvisioning`<sup>Required</sup> <a name="DiskProvisioning" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.diskProvisioning"></a>

```csharp
public string DiskProvisioning { get; }
```

- *Type:* string

---

##### `EnableHiddenProperties`<sup>Required</sup> <a name="EnableHiddenProperties" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.enableHiddenProperties"></a>

```csharp
public object EnableHiddenProperties { get; }
```

- *Type:* object

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.hostSystemId"></a>

```csharp
public string HostSystemId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAllocationPolicy`<sup>Required</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipAllocationPolicy"></a>

```csharp
public string IpAllocationPolicy { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `LocalOvfPath`<sup>Required</sup> <a name="LocalOvfPath" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.localOvfPath"></a>

```csharp
public string LocalOvfPath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OvfNetworkMap`<sup>Required</sup> <a name="OvfNetworkMap" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ovfNetworkMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OvfNetworkMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RemoteOvfUrl`<sup>Required</sup> <a name="RemoteOvfUrl" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.remoteOvfUrl"></a>

```csharp
public string RemoteOvfUrl { get; }
```

- *Type:* string

---

##### `ResourcePoolId`<sup>Required</sup> <a name="ResourcePoolId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.resourcePoolId"></a>

```csharp
public string ResourcePoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereOvfVmTemplateConfig <a name="DataVsphereOvfVmTemplateConfig" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereOvfVmTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string HostSystemId,
    string Name,
    string ResourcePoolId,
    object AllowUnverifiedSslCert = null,
    string DatastoreId = null,
    string DeploymentOption = null,
    string DiskProvisioning = null,
    object EnableHiddenProperties = null,
    string Folder = null,
    string Id = null,
    string IpAllocationPolicy = null,
    string IpProtocol = null,
    string LocalOvfPath = null,
    System.Collections.Generic.IDictionary<string, string> OvfNetworkMap = null,
    string RemoteOvfUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.hostSystemId">HostSystemId</a></code> | <code>string</code> | The ID of an optional host system to pin the virtual machine to. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.name">Name</a></code> | <code>string</code> | Name of the virtual machine to create. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.resourcePoolId">ResourcePoolId</a></code> | <code>string</code> | The ID of a resource pool to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.allowUnverifiedSslCert">AllowUnverifiedSslCert</a></code> | <code>object</code> | Allow unverified ssl certificates while deploying ovf/ova from url. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.datastoreId">DatastoreId</a></code> | <code>string</code> | The ID of the virtual machine's datastore. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.deploymentOption">DeploymentOption</a></code> | <code>string</code> | The Deployment option to be chosen. If empty, the default option is used. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.diskProvisioning">DiskProvisioning</a></code> | <code>string</code> | An optional disk provisioning. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.enableHiddenProperties">EnableHiddenProperties</a></code> | <code>object</code> | Allow properties with ovf:userConfigurable=false to be set. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.folder">Folder</a></code> | <code>string</code> | The name of the folder to locate the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#id DataVsphereOvfVmTemplate#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code>string</code> | The IP allocation policy. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The IP protocol. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.localOvfPath">LocalOvfPath</a></code> | <code>string</code> | The absolute path to the ovf/ova file in the local system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ovfNetworkMap">OvfNetworkMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.remoteOvfUrl">RemoteOvfUrl</a></code> | <code>string</code> | URL to the remote ovf/ova file to be deployed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.hostSystemId"></a>

```csharp
public string HostSystemId { get; set; }
```

- *Type:* string

The ID of an optional host system to pin the virtual machine to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#host_system_id DataVsphereOvfVmTemplate#host_system_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the virtual machine to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#name DataVsphereOvfVmTemplate#name}

---

##### `ResourcePoolId`<sup>Required</sup> <a name="ResourcePoolId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.resourcePoolId"></a>

```csharp
public string ResourcePoolId { get; set; }
```

- *Type:* string

The ID of a resource pool to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#resource_pool_id DataVsphereOvfVmTemplate#resource_pool_id}

---

##### `AllowUnverifiedSslCert`<sup>Optional</sup> <a name="AllowUnverifiedSslCert" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.allowUnverifiedSslCert"></a>

```csharp
public object AllowUnverifiedSslCert { get; set; }
```

- *Type:* object

Allow unverified ssl certificates while deploying ovf/ova from url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#allow_unverified_ssl_cert DataVsphereOvfVmTemplate#allow_unverified_ssl_cert}

---

##### `DatastoreId`<sup>Optional</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.datastoreId"></a>

```csharp
public string DatastoreId { get; set; }
```

- *Type:* string

The ID of the virtual machine's datastore.

The virtual machine configuration is placed here, along with any virtual disks that are created without datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#datastore_id DataVsphereOvfVmTemplate#datastore_id}

---

##### `DeploymentOption`<sup>Optional</sup> <a name="DeploymentOption" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.deploymentOption"></a>

```csharp
public string DeploymentOption { get; set; }
```

- *Type:* string

The Deployment option to be chosen. If empty, the default option is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#deployment_option DataVsphereOvfVmTemplate#deployment_option}

---

##### `DiskProvisioning`<sup>Optional</sup> <a name="DiskProvisioning" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.diskProvisioning"></a>

```csharp
public string DiskProvisioning { get; set; }
```

- *Type:* string

An optional disk provisioning.

If set, all the disks in the deployed ovf will have the same specified disk type (e.g., thin provisioned).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#disk_provisioning DataVsphereOvfVmTemplate#disk_provisioning}

---

##### `EnableHiddenProperties`<sup>Optional</sup> <a name="EnableHiddenProperties" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.enableHiddenProperties"></a>

```csharp
public object EnableHiddenProperties { get; set; }
```

- *Type:* object

Allow properties with ovf:userConfigurable=false to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#enable_hidden_properties DataVsphereOvfVmTemplate#enable_hidden_properties}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The name of the folder to locate the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#folder DataVsphereOvfVmTemplate#folder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#id DataVsphereOvfVmTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAllocationPolicy`<sup>Optional</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ipAllocationPolicy"></a>

```csharp
public string IpAllocationPolicy { get; set; }
```

- *Type:* string

The IP allocation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#ip_allocation_policy DataVsphereOvfVmTemplate#ip_allocation_policy}

---

##### `IpProtocol`<sup>Optional</sup> <a name="IpProtocol" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#ip_protocol DataVsphereOvfVmTemplate#ip_protocol}

---

##### `LocalOvfPath`<sup>Optional</sup> <a name="LocalOvfPath" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.localOvfPath"></a>

```csharp
public string LocalOvfPath { get; set; }
```

- *Type:* string

The absolute path to the ovf/ova file in the local system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#local_ovf_path DataVsphereOvfVmTemplate#local_ovf_path}

---

##### `OvfNetworkMap`<sup>Optional</sup> <a name="OvfNetworkMap" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ovfNetworkMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OvfNetworkMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#ovf_network_map DataVsphereOvfVmTemplate#ovf_network_map}

---

##### `RemoteOvfUrl`<sup>Optional</sup> <a name="RemoteOvfUrl" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.remoteOvfUrl"></a>

```csharp
public string RemoteOvfUrl { get; set; }
```

- *Type:* string

URL to the remote ovf/ova file to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/data-sources/ovf_vm_template#remote_ovf_url DataVsphereOvfVmTemplate#remote_ovf_url}

---



