# `provider`

Refer to the Terraform Registory for docs: [`vsphere`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-vsphere.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VsphereProvider <a name="VsphereProvider" id="@cdktf/provider-vsphere.provider.VsphereProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs vsphere}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/provider"

provider.NewVsphereProvider(scope Construct, id *string, config VsphereProviderConfig) VsphereProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig">VsphereProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig">VsphereProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.provider.VsphereProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.provider.VsphereProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAllowUnverifiedSsl` <a name="ResetAllowUnverifiedSsl" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetAllowUnverifiedSsl"></a>

```go
func ResetAllowUnverifiedSsl()
```

##### `ResetApiTimeout` <a name="ResetApiTimeout" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetApiTimeout"></a>

```go
func ResetApiTimeout()
```

##### `ResetClientDebug` <a name="ResetClientDebug" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebug"></a>

```go
func ResetClientDebug()
```

##### `ResetClientDebugPath` <a name="ResetClientDebugPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPath"></a>

```go
func ResetClientDebugPath()
```

##### `ResetClientDebugPathRun` <a name="ResetClientDebugPathRun" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPathRun"></a>

```go
func ResetClientDebugPathRun()
```

##### `ResetPersistSession` <a name="ResetPersistSession" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetPersistSession"></a>

```go
func ResetPersistSession()
```

##### `ResetRestSessionPath` <a name="ResetRestSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetRestSessionPath"></a>

```go
func ResetRestSessionPath()
```

##### `ResetVcenterServer` <a name="ResetVcenterServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVcenterServer"></a>

```go
func ResetVcenterServer()
```

##### `ResetVimKeepAlive` <a name="ResetVimKeepAlive" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVimKeepAlive"></a>

```go
func ResetVimKeepAlive()
```

##### `ResetVimSessionPath` <a name="ResetVimSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVimSessionPath"></a>

```go
func ResetVimSessionPath()
```

##### `ResetVsphereServer` <a name="ResetVsphereServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVsphereServer"></a>

```go
func ResetVsphereServer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.provider.VsphereProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/provider"

provider.VsphereProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.provider.VsphereProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/provider"

provider.VsphereProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/provider"

provider.VsphereProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSslInput">AllowUnverifiedSslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeoutInput">ApiTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugInput">ClientDebugInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathInput">ClientDebugPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRunInput">ClientDebugPathRunInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSessionInput">PersistSessionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPathInput">RestSessionPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServerInput">VcenterServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAliveInput">VimKeepAliveInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPathInput">VimSessionPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServerInput">VsphereServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSsl">AllowUnverifiedSsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeout">ApiTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebug">ClientDebug</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPath">ClientDebugPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRun">ClientDebugPathRun</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSession">PersistSession</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPath">RestSessionPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServer">VcenterServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAlive">VimKeepAlive</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPath">VimSessionPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServer">VsphereServer</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AllowUnverifiedSslInput`<sup>Optional</sup> <a name="AllowUnverifiedSslInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSslInput"></a>

```go
func AllowUnverifiedSslInput() interface{}
```

- *Type:* interface{}

---

##### `ApiTimeoutInput`<sup>Optional</sup> <a name="ApiTimeoutInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeoutInput"></a>

```go
func ApiTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ClientDebugInput`<sup>Optional</sup> <a name="ClientDebugInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugInput"></a>

```go
func ClientDebugInput() interface{}
```

- *Type:* interface{}

---

##### `ClientDebugPathInput`<sup>Optional</sup> <a name="ClientDebugPathInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathInput"></a>

```go
func ClientDebugPathInput() *string
```

- *Type:* *string

---

##### `ClientDebugPathRunInput`<sup>Optional</sup> <a name="ClientDebugPathRunInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRunInput"></a>

```go
func ClientDebugPathRunInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PersistSessionInput`<sup>Optional</sup> <a name="PersistSessionInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSessionInput"></a>

```go
func PersistSessionInput() interface{}
```

- *Type:* interface{}

---

##### `RestSessionPathInput`<sup>Optional</sup> <a name="RestSessionPathInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPathInput"></a>

```go
func RestSessionPathInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `VcenterServerInput`<sup>Optional</sup> <a name="VcenterServerInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServerInput"></a>

```go
func VcenterServerInput() *string
```

- *Type:* *string

---

##### `VimKeepAliveInput`<sup>Optional</sup> <a name="VimKeepAliveInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAliveInput"></a>

```go
func VimKeepAliveInput() *f64
```

- *Type:* *f64

---

##### `VimSessionPathInput`<sup>Optional</sup> <a name="VimSessionPathInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPathInput"></a>

```go
func VimSessionPathInput() *string
```

- *Type:* *string

---

##### `VsphereServerInput`<sup>Optional</sup> <a name="VsphereServerInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServerInput"></a>

```go
func VsphereServerInput() *string
```

- *Type:* *string

---

##### `AllowUnverifiedSsl`<sup>Optional</sup> <a name="AllowUnverifiedSsl" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSsl"></a>

```go
func AllowUnverifiedSsl() interface{}
```

- *Type:* interface{}

---

##### `ApiTimeout`<sup>Optional</sup> <a name="ApiTimeout" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeout"></a>

```go
func ApiTimeout() *f64
```

- *Type:* *f64

---

##### `ClientDebug`<sup>Optional</sup> <a name="ClientDebug" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebug"></a>

```go
func ClientDebug() interface{}
```

- *Type:* interface{}

---

##### `ClientDebugPath`<sup>Optional</sup> <a name="ClientDebugPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPath"></a>

```go
func ClientDebugPath() *string
```

- *Type:* *string

---

##### `ClientDebugPathRun`<sup>Optional</sup> <a name="ClientDebugPathRun" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRun"></a>

```go
func ClientDebugPathRun() *string
```

- *Type:* *string

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PersistSession`<sup>Optional</sup> <a name="PersistSession" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSession"></a>

```go
func PersistSession() interface{}
```

- *Type:* interface{}

---

##### `RestSessionPath`<sup>Optional</sup> <a name="RestSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPath"></a>

```go
func RestSessionPath() *string
```

- *Type:* *string

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `VcenterServer`<sup>Optional</sup> <a name="VcenterServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServer"></a>

```go
func VcenterServer() *string
```

- *Type:* *string

---

##### `VimKeepAlive`<sup>Optional</sup> <a name="VimKeepAlive" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAlive"></a>

```go
func VimKeepAlive() *f64
```

- *Type:* *f64

---

##### `VimSessionPath`<sup>Optional</sup> <a name="VimSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPath"></a>

```go
func VimSessionPath() *string
```

- *Type:* *string

---

##### `VsphereServer`<sup>Optional</sup> <a name="VsphereServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServer"></a>

```go
func VsphereServer() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VsphereProviderConfig <a name="VsphereProviderConfig" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/provider"

&provider.VsphereProviderConfig {
	Password: *string,
	User: *string,
	Alias: *string,
	AllowUnverifiedSsl: interface{},
	ApiTimeout: *f64,
	ClientDebug: interface{},
	ClientDebugPath: *string,
	ClientDebugPathRun: *string,
	PersistSession: interface{},
	RestSessionPath: *string,
	VcenterServer: *string,
	VimKeepAlive: *f64,
	VimSessionPath: *string,
	VsphereServer: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.password">Password</a></code> | <code>*string</code> | The user password for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.user">User</a></code> | <code>*string</code> | The user name for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.allowUnverifiedSsl">AllowUnverifiedSsl</a></code> | <code>interface{}</code> | If set, VMware vSphere client will permit unverifiable SSL certificates. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.apiTimeout">ApiTimeout</a></code> | <code>*f64</code> | API timeout in minutes (Default: 5). |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebug">ClientDebug</a></code> | <code>interface{}</code> | govmomi debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPath">ClientDebugPath</a></code> | <code>*string</code> | govmomi debug path for debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPathRun">ClientDebugPathRun</a></code> | <code>*string</code> | govmomi debug path for a single run. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.persistSession">PersistSession</a></code> | <code>interface{}</code> | Persist vSphere client sessions to disk. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.restSessionPath">RestSessionPath</a></code> | <code>*string</code> | The directory to save vSphere REST API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vcenterServer">VcenterServer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#vcenter_server VsphereProvider#vcenter_server}. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimKeepAlive">VimKeepAlive</a></code> | <code>*f64</code> | Keep alive interval for the VIM session in minutes. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimSessionPath">VimSessionPath</a></code> | <code>*string</code> | The directory to save vSphere SOAP API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vsphereServer">VsphereServer</a></code> | <code>*string</code> | The vSphere Server name for vSphere API operations. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The user password for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#password VsphereProvider#password}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.user"></a>

```go
User *string
```

- *Type:* *string

The user name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#user VsphereProvider#user}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#alias VsphereProvider#alias}

---

##### `AllowUnverifiedSsl`<sup>Optional</sup> <a name="AllowUnverifiedSsl" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.allowUnverifiedSsl"></a>

```go
AllowUnverifiedSsl interface{}
```

- *Type:* interface{}

If set, VMware vSphere client will permit unverifiable SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#allow_unverified_ssl VsphereProvider#allow_unverified_ssl}

---

##### `ApiTimeout`<sup>Optional</sup> <a name="ApiTimeout" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.apiTimeout"></a>

```go
ApiTimeout *f64
```

- *Type:* *f64

API timeout in minutes (Default: 5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#api_timeout VsphereProvider#api_timeout}

---

##### `ClientDebug`<sup>Optional</sup> <a name="ClientDebug" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebug"></a>

```go
ClientDebug interface{}
```

- *Type:* interface{}

govmomi debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#client_debug VsphereProvider#client_debug}

---

##### `ClientDebugPath`<sup>Optional</sup> <a name="ClientDebugPath" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPath"></a>

```go
ClientDebugPath *string
```

- *Type:* *string

govmomi debug path for debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#client_debug_path VsphereProvider#client_debug_path}

---

##### `ClientDebugPathRun`<sup>Optional</sup> <a name="ClientDebugPathRun" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPathRun"></a>

```go
ClientDebugPathRun *string
```

- *Type:* *string

govmomi debug path for a single run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#client_debug_path_run VsphereProvider#client_debug_path_run}

---

##### `PersistSession`<sup>Optional</sup> <a name="PersistSession" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.persistSession"></a>

```go
PersistSession interface{}
```

- *Type:* interface{}

Persist vSphere client sessions to disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#persist_session VsphereProvider#persist_session}

---

##### `RestSessionPath`<sup>Optional</sup> <a name="RestSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.restSessionPath"></a>

```go
RestSessionPath *string
```

- *Type:* *string

The directory to save vSphere REST API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#rest_session_path VsphereProvider#rest_session_path}

---

##### `VcenterServer`<sup>Optional</sup> <a name="VcenterServer" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vcenterServer"></a>

```go
VcenterServer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#vcenter_server VsphereProvider#vcenter_server}.

---

##### `VimKeepAlive`<sup>Optional</sup> <a name="VimKeepAlive" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimKeepAlive"></a>

```go
VimKeepAlive *f64
```

- *Type:* *f64

Keep alive interval for the VIM session in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#vim_keep_alive VsphereProvider#vim_keep_alive}

---

##### `VimSessionPath`<sup>Optional</sup> <a name="VimSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimSessionPath"></a>

```go
VimSessionPath *string
```

- *Type:* *string

The directory to save vSphere SOAP API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#vim_session_path VsphereProvider#vim_session_path}

---

##### `VsphereServer`<sup>Optional</sup> <a name="VsphereServer" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vsphereServer"></a>

```go
VsphereServer *string
```

- *Type:* *string

The vSphere Server name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs#vsphere_server VsphereProvider#vsphere_server}

---



