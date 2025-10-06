# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-vsphere.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VsphereProvider <a name="VsphereProvider" id="@cdktf/provider-vsphere.provider.VsphereProvider"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs vsphere}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VsphereProvider(Construct Scope, string Id, VsphereProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig">VsphereProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig">VsphereProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetAllowUnverifiedSsl">ResetAllowUnverifiedSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetApiTimeout">ResetApiTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebug">ResetClientDebug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPath">ResetClientDebugPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPathRun">ResetClientDebugPathRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetPersistSession">ResetPersistSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetRestSessionPath">ResetRestSessionPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetVcenterServer">ResetVcenterServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetVimKeepAlive">ResetVimKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetVimSessionPath">ResetVimSessionPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetVsphereServer">ResetVsphereServer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.provider.VsphereProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.provider.VsphereProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.provider.VsphereProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.provider.VsphereProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAllowUnverifiedSsl` <a name="ResetAllowUnverifiedSsl" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetAllowUnverifiedSsl"></a>

```csharp
private void ResetAllowUnverifiedSsl()
```

##### `ResetApiTimeout` <a name="ResetApiTimeout" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetApiTimeout"></a>

```csharp
private void ResetApiTimeout()
```

##### `ResetClientDebug` <a name="ResetClientDebug" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebug"></a>

```csharp
private void ResetClientDebug()
```

##### `ResetClientDebugPath` <a name="ResetClientDebugPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPath"></a>

```csharp
private void ResetClientDebugPath()
```

##### `ResetClientDebugPathRun` <a name="ResetClientDebugPathRun" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPathRun"></a>

```csharp
private void ResetClientDebugPathRun()
```

##### `ResetPersistSession` <a name="ResetPersistSession" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetPersistSession"></a>

```csharp
private void ResetPersistSession()
```

##### `ResetRestSessionPath` <a name="ResetRestSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetRestSessionPath"></a>

```csharp
private void ResetRestSessionPath()
```

##### `ResetVcenterServer` <a name="ResetVcenterServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVcenterServer"></a>

```csharp
private void ResetVcenterServer()
```

##### `ResetVimKeepAlive` <a name="ResetVimKeepAlive" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVimKeepAlive"></a>

```csharp
private void ResetVimKeepAlive()
```

##### `ResetVimSessionPath` <a name="ResetVimSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVimSessionPath"></a>

```csharp
private void ResetVimSessionPath()
```

##### `ResetVsphereServer` <a name="ResetVsphereServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVsphereServer"></a>

```csharp
private void ResetVsphereServer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VsphereProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.provider.VsphereProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VsphereProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.provider.VsphereProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VsphereProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VsphereProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VsphereProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VsphereProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VsphereProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VsphereProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VsphereProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSslInput">AllowUnverifiedSslInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeoutInput">ApiTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugInput">ClientDebugInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathInput">ClientDebugPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRunInput">ClientDebugPathRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSessionInput">PersistSessionInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPathInput">RestSessionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServerInput">VcenterServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAliveInput">VimKeepAliveInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPathInput">VimSessionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServerInput">VsphereServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSsl">AllowUnverifiedSsl</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeout">ApiTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebug">ClientDebug</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPath">ClientDebugPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRun">ClientDebugPathRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSession">PersistSession</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPath">RestSessionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServer">VcenterServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAlive">VimKeepAlive</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPath">VimSessionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServer">VsphereServer</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AllowUnverifiedSslInput`<sup>Optional</sup> <a name="AllowUnverifiedSslInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSslInput"></a>

```csharp
public bool|IResolvable AllowUnverifiedSslInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ApiTimeoutInput`<sup>Optional</sup> <a name="ApiTimeoutInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeoutInput"></a>

```csharp
public double ApiTimeoutInput { get; }
```

- *Type:* double

---

##### `ClientDebugInput`<sup>Optional</sup> <a name="ClientDebugInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugInput"></a>

```csharp
public bool|IResolvable ClientDebugInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ClientDebugPathInput`<sup>Optional</sup> <a name="ClientDebugPathInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathInput"></a>

```csharp
public string ClientDebugPathInput { get; }
```

- *Type:* string

---

##### `ClientDebugPathRunInput`<sup>Optional</sup> <a name="ClientDebugPathRunInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRunInput"></a>

```csharp
public string ClientDebugPathRunInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PersistSessionInput`<sup>Optional</sup> <a name="PersistSessionInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSessionInput"></a>

```csharp
public bool|IResolvable PersistSessionInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RestSessionPathInput`<sup>Optional</sup> <a name="RestSessionPathInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPathInput"></a>

```csharp
public string RestSessionPathInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `VcenterServerInput`<sup>Optional</sup> <a name="VcenterServerInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServerInput"></a>

```csharp
public string VcenterServerInput { get; }
```

- *Type:* string

---

##### `VimKeepAliveInput`<sup>Optional</sup> <a name="VimKeepAliveInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAliveInput"></a>

```csharp
public double VimKeepAliveInput { get; }
```

- *Type:* double

---

##### `VimSessionPathInput`<sup>Optional</sup> <a name="VimSessionPathInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPathInput"></a>

```csharp
public string VimSessionPathInput { get; }
```

- *Type:* string

---

##### `VsphereServerInput`<sup>Optional</sup> <a name="VsphereServerInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServerInput"></a>

```csharp
public string VsphereServerInput { get; }
```

- *Type:* string

---

##### `AllowUnverifiedSsl`<sup>Optional</sup> <a name="AllowUnverifiedSsl" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSsl"></a>

```csharp
public bool|IResolvable AllowUnverifiedSsl { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ApiTimeout`<sup>Optional</sup> <a name="ApiTimeout" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeout"></a>

```csharp
public double ApiTimeout { get; }
```

- *Type:* double

---

##### `ClientDebug`<sup>Optional</sup> <a name="ClientDebug" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebug"></a>

```csharp
public bool|IResolvable ClientDebug { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ClientDebugPath`<sup>Optional</sup> <a name="ClientDebugPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPath"></a>

```csharp
public string ClientDebugPath { get; }
```

- *Type:* string

---

##### `ClientDebugPathRun`<sup>Optional</sup> <a name="ClientDebugPathRun" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRun"></a>

```csharp
public string ClientDebugPathRun { get; }
```

- *Type:* string

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PersistSession`<sup>Optional</sup> <a name="PersistSession" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSession"></a>

```csharp
public bool|IResolvable PersistSession { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RestSessionPath`<sup>Optional</sup> <a name="RestSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPath"></a>

```csharp
public string RestSessionPath { get; }
```

- *Type:* string

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `VcenterServer`<sup>Optional</sup> <a name="VcenterServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServer"></a>

```csharp
public string VcenterServer { get; }
```

- *Type:* string

---

##### `VimKeepAlive`<sup>Optional</sup> <a name="VimKeepAlive" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAlive"></a>

```csharp
public double VimKeepAlive { get; }
```

- *Type:* double

---

##### `VimSessionPath`<sup>Optional</sup> <a name="VimSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPath"></a>

```csharp
public string VimSessionPath { get; }
```

- *Type:* string

---

##### `VsphereServer`<sup>Optional</sup> <a name="VsphereServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServer"></a>

```csharp
public string VsphereServer { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VsphereProviderConfig <a name="VsphereProviderConfig" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VsphereProviderConfig {
    string Password,
    string User,
    string Alias = null,
    bool|IResolvable AllowUnverifiedSsl = null,
    double ApiTimeout = null,
    bool|IResolvable ClientDebug = null,
    string ClientDebugPath = null,
    string ClientDebugPathRun = null,
    bool|IResolvable PersistSession = null,
    string RestSessionPath = null,
    string VcenterServer = null,
    double VimKeepAlive = null,
    string VimSessionPath = null,
    string VsphereServer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.password">Password</a></code> | <code>string</code> | The user password for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.user">User</a></code> | <code>string</code> | The user name for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.allowUnverifiedSsl">AllowUnverifiedSsl</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If set, VMware vSphere client will permit unverifiable SSL certificates. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.apiTimeout">ApiTimeout</a></code> | <code>double</code> | API timeout in minutes (Default: 5). |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebug">ClientDebug</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | govmomi debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPath">ClientDebugPath</a></code> | <code>string</code> | govmomi debug path for debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPathRun">ClientDebugPathRun</a></code> | <code>string</code> | govmomi debug path for a single run. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.persistSession">PersistSession</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Persist vSphere client sessions to disk. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.restSessionPath">RestSessionPath</a></code> | <code>string</code> | The directory to save vSphere REST API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vcenterServer">VcenterServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#vcenter_server VsphereProvider#vcenter_server}. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimKeepAlive">VimKeepAlive</a></code> | <code>double</code> | Keep alive interval for the VIM session in minutes. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimSessionPath">VimSessionPath</a></code> | <code>string</code> | The directory to save vSphere SOAP API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vsphereServer">VsphereServer</a></code> | <code>string</code> | The vSphere Server name for vSphere API operations. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The user password for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#password VsphereProvider#password}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

The user name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#user VsphereProvider#user}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#alias VsphereProvider#alias}

---

##### `AllowUnverifiedSsl`<sup>Optional</sup> <a name="AllowUnverifiedSsl" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.allowUnverifiedSsl"></a>

```csharp
public bool|IResolvable AllowUnverifiedSsl { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If set, VMware vSphere client will permit unverifiable SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#allow_unverified_ssl VsphereProvider#allow_unverified_ssl}

---

##### `ApiTimeout`<sup>Optional</sup> <a name="ApiTimeout" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.apiTimeout"></a>

```csharp
public double ApiTimeout { get; set; }
```

- *Type:* double

API timeout in minutes (Default: 5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#api_timeout VsphereProvider#api_timeout}

---

##### `ClientDebug`<sup>Optional</sup> <a name="ClientDebug" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebug"></a>

```csharp
public bool|IResolvable ClientDebug { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

govmomi debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#client_debug VsphereProvider#client_debug}

---

##### `ClientDebugPath`<sup>Optional</sup> <a name="ClientDebugPath" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPath"></a>

```csharp
public string ClientDebugPath { get; set; }
```

- *Type:* string

govmomi debug path for debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#client_debug_path VsphereProvider#client_debug_path}

---

##### `ClientDebugPathRun`<sup>Optional</sup> <a name="ClientDebugPathRun" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPathRun"></a>

```csharp
public string ClientDebugPathRun { get; set; }
```

- *Type:* string

govmomi debug path for a single run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#client_debug_path_run VsphereProvider#client_debug_path_run}

---

##### `PersistSession`<sup>Optional</sup> <a name="PersistSession" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.persistSession"></a>

```csharp
public bool|IResolvable PersistSession { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Persist vSphere client sessions to disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#persist_session VsphereProvider#persist_session}

---

##### `RestSessionPath`<sup>Optional</sup> <a name="RestSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.restSessionPath"></a>

```csharp
public string RestSessionPath { get; set; }
```

- *Type:* string

The directory to save vSphere REST API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#rest_session_path VsphereProvider#rest_session_path}

---

##### `VcenterServer`<sup>Optional</sup> <a name="VcenterServer" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vcenterServer"></a>

```csharp
public string VcenterServer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#vcenter_server VsphereProvider#vcenter_server}.

---

##### `VimKeepAlive`<sup>Optional</sup> <a name="VimKeepAlive" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimKeepAlive"></a>

```csharp
public double VimKeepAlive { get; set; }
```

- *Type:* double

Keep alive interval for the VIM session in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#vim_keep_alive VsphereProvider#vim_keep_alive}

---

##### `VimSessionPath`<sup>Optional</sup> <a name="VimSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimSessionPath"></a>

```csharp
public string VimSessionPath { get; set; }
```

- *Type:* string

The directory to save vSphere SOAP API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#vim_session_path VsphereProvider#vim_session_path}

---

##### `VsphereServer`<sup>Optional</sup> <a name="VsphereServer" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vsphereServer"></a>

```csharp
public string VsphereServer { get; set; }
```

- *Type:* string

The vSphere Server name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs#vsphere_server VsphereProvider#vsphere_server}

---



