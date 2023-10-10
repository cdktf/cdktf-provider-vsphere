# `vsphere_nas_datastore`

Refer to the Terraform Registory for docs: [`vsphere_nas_datastore`](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore).

# `nasDatastore` Submodule <a name="`nasDatastore` Submodule" id="@cdktf/provider-vsphere.nasDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NasDatastore <a name="NasDatastore" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore vsphere_nas_datastore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new NasDatastore(Construct Scope, string Id, NasDatastoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig">NasDatastoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig">NasDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetAccessMode">ResetAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetDatastoreClusterId">ResetDatastoreClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetSecurityType">ResetSecurityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccessMode` <a name="ResetAccessMode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetAccessMode"></a>

```csharp
private void ResetAccessMode()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetCustomAttributes"></a>

```csharp
private void ResetCustomAttributes()
```

##### `ResetDatastoreClusterId` <a name="ResetDatastoreClusterId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetDatastoreClusterId"></a>

```csharp
private void ResetDatastoreClusterId()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSecurityType` <a name="ResetSecurityType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetSecurityType"></a>

```csharp
private void ResetSecurityType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

NasDatastore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

NasDatastore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

NasDatastore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessible">Accessible</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.freeSpace">FreeSpace</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.maintenanceMode">MaintenanceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.multipleHostAccess">MultipleHostAccess</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.protocolEndpoint">ProtocolEndpoint</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.uncommittedSpace">UncommittedSpace</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessModeInput">AccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributesInput">CustomAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterIdInput">DatastoreClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIdsInput">HostSystemIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHostsInput">RemoteHostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePathInput">RemotePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityTypeInput">SecurityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessMode">AccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIds">HostSystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHosts">RemoteHosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePath">RemotePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityType">SecurityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Accessible`<sup>Required</sup> <a name="Accessible" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessible"></a>

```csharp
public IResolvable Accessible { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `FreeSpace`<sup>Required</sup> <a name="FreeSpace" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.freeSpace"></a>

```csharp
public double FreeSpace { get; }
```

- *Type:* double

---

##### `MaintenanceMode`<sup>Required</sup> <a name="MaintenanceMode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.maintenanceMode"></a>

```csharp
public string MaintenanceMode { get; }
```

- *Type:* string

---

##### `MultipleHostAccess`<sup>Required</sup> <a name="MultipleHostAccess" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.multipleHostAccess"></a>

```csharp
public IResolvable MultipleHostAccess { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ProtocolEndpoint`<sup>Required</sup> <a name="ProtocolEndpoint" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.protocolEndpoint"></a>

```csharp
public IResolvable ProtocolEndpoint { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `UncommittedSpace`<sup>Required</sup> <a name="UncommittedSpace" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.uncommittedSpace"></a>

```csharp
public double UncommittedSpace { get; }
```

- *Type:* double

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `AccessModeInput`<sup>Optional</sup> <a name="AccessModeInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessModeInput"></a>

```csharp
public string AccessModeInput { get; }
```

- *Type:* string

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatastoreClusterIdInput`<sup>Optional</sup> <a name="DatastoreClusterIdInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterIdInput"></a>

```csharp
public string DatastoreClusterIdInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `HostSystemIdsInput`<sup>Optional</sup> <a name="HostSystemIdsInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIdsInput"></a>

```csharp
public string[] HostSystemIdsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RemoteHostsInput`<sup>Optional</sup> <a name="RemoteHostsInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHostsInput"></a>

```csharp
public string[] RemoteHostsInput { get; }
```

- *Type:* string[]

---

##### `RemotePathInput`<sup>Optional</sup> <a name="RemotePathInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePathInput"></a>

```csharp
public string RemotePathInput { get; }
```

- *Type:* string

---

##### `SecurityTypeInput`<sup>Optional</sup> <a name="SecurityTypeInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityTypeInput"></a>

```csharp
public string SecurityTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessMode"></a>

```csharp
public string AccessMode { get; }
```

- *Type:* string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatastoreClusterId`<sup>Required</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterId"></a>

```csharp
public string DatastoreClusterId { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `HostSystemIds`<sup>Required</sup> <a name="HostSystemIds" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIds"></a>

```csharp
public string[] HostSystemIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RemoteHosts`<sup>Required</sup> <a name="RemoteHosts" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHosts"></a>

```csharp
public string[] RemoteHosts { get; }
```

- *Type:* string[]

---

##### `RemotePath`<sup>Required</sup> <a name="RemotePath" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePath"></a>

```csharp
public string RemotePath { get; }
```

- *Type:* string

---

##### `SecurityType`<sup>Required</sup> <a name="SecurityType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityType"></a>

```csharp
public string SecurityType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NasDatastoreConfig <a name="NasDatastoreConfig" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new NasDatastoreConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] HostSystemIds,
    string Name,
    string[] RemoteHosts,
    string RemotePath,
    string AccessMode = null,
    System.Collections.Generic.IDictionary<string, string> CustomAttributes = null,
    string DatastoreClusterId = null,
    string Folder = null,
    string Id = null,
    string SecurityType = null,
    string[] Tags = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.hostSystemIds">HostSystemIds</a></code> | <code>string[]</code> | The managed object IDs of the hosts to mount the datastore on. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.name">Name</a></code> | <code>string</code> | The name of the datastore. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remoteHosts">RemoteHosts</a></code> | <code>string[]</code> | The hostnames or IP addresses of the remote server or servers. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remotePath">RemotePath</a></code> | <code>string</code> | The remote path of the mount point. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.accessMode">AccessMode</a></code> | <code>string</code> | Access mode for the mount point. Can be one of readOnly or readWrite. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>string</code> | The managed object ID of the datastore cluster to place the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.folder">Folder</a></code> | <code>string</code> | The path to the datastore folder to put the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore#id NasDatastore#id}. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.securityType">SecurityType</a></code> | <code>string</code> | The security type to use. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.type">Type</a></code> | <code>string</code> | The type of NAS volume. Can be one of NFS (to denote v3) or NFS41 (to denote NFS v4.1). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HostSystemIds`<sup>Required</sup> <a name="HostSystemIds" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.hostSystemIds"></a>

```csharp
public string[] HostSystemIds { get; set; }
```

- *Type:* string[]

The managed object IDs of the hosts to mount the datastore on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore#host_system_ids NasDatastore#host_system_ids}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore#name NasDatastore#name}

---

##### `RemoteHosts`<sup>Required</sup> <a name="RemoteHosts" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remoteHosts"></a>

```csharp
public string[] RemoteHosts { get; set; }
```

- *Type:* string[]

The hostnames or IP addresses of the remote server or servers.

Only one element should be present for NFS v3 but multiple can be present for NFS v4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore#remote_hosts NasDatastore#remote_hosts}

---

##### `RemotePath`<sup>Required</sup> <a name="RemotePath" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remotePath"></a>

```csharp
public string RemotePath { get; set; }
```

- *Type:* string

The remote path of the mount point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore#remote_path NasDatastore#remote_path}

---

##### `AccessMode`<sup>Optional</sup> <a name="AccessMode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.accessMode"></a>

```csharp
public string AccessMode { get; set; }
```

- *Type:* string

Access mode for the mount point. Can be one of readOnly or readWrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore#access_mode NasDatastore#access_mode}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore#custom_attributes NasDatastore#custom_attributes}

---

##### `DatastoreClusterId`<sup>Optional</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.datastoreClusterId"></a>

```csharp
public string DatastoreClusterId { get; set; }
```

- *Type:* string

The managed object ID of the datastore cluster to place the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore#datastore_cluster_id NasDatastore#datastore_cluster_id}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The path to the datastore folder to put the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore#folder NasDatastore#folder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore#id NasDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurityType`<sup>Optional</sup> <a name="SecurityType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.securityType"></a>

```csharp
public string SecurityType { get; set; }
```

- *Type:* string

The security type to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore#security_type NasDatastore#security_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore#tags NasDatastore#tags}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of NAS volume. Can be one of NFS (to denote v3) or NFS41 (to denote NFS v4.1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/nas_datastore#type NasDatastore#type}

---



