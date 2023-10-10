# `provider`

Refer to the Terraform Registory for docs: [`vsphere`](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-vsphere.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VsphereProvider <a name="VsphereProvider" id="@cdktf/provider-vsphere.provider.VsphereProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs vsphere}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.provider.VsphereProvider;

VsphereProvider.Builder.create(Construct scope, java.lang.String id)
    .password(java.lang.String)
    .user(java.lang.String)
//  .alias(java.lang.String)
//  .allowUnverifiedSsl(java.lang.Boolean)
//  .allowUnverifiedSsl(IResolvable)
//  .apiTimeout(java.lang.Number)
//  .clientDebug(java.lang.Boolean)
//  .clientDebug(IResolvable)
//  .clientDebugPath(java.lang.String)
//  .clientDebugPathRun(java.lang.String)
//  .persistSession(java.lang.Boolean)
//  .persistSession(IResolvable)
//  .restSessionPath(java.lang.String)
//  .vcenterServer(java.lang.String)
//  .vimKeepAlive(java.lang.Number)
//  .vimSessionPath(java.lang.String)
//  .vsphereServer(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The user password for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.user">user</a></code> | <code>java.lang.String</code> | The user name for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.allowUnverifiedSsl">allowUnverifiedSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, VMware vSphere client will permit unverifiable SSL certificates. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.apiTimeout">apiTimeout</a></code> | <code>java.lang.Number</code> | API timeout in minutes (Default: 5). |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.clientDebug">clientDebug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | govmomi debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.clientDebugPath">clientDebugPath</a></code> | <code>java.lang.String</code> | govmomi debug path for debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.clientDebugPathRun">clientDebugPathRun</a></code> | <code>java.lang.String</code> | govmomi debug path for a single run. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.persistSession">persistSession</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Persist vSphere client sessions to disk. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.restSessionPath">restSessionPath</a></code> | <code>java.lang.String</code> | The directory to save vSphere REST API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vcenterServer">vcenterServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#vcenter_server VsphereProvider#vcenter_server}. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vimKeepAlive">vimKeepAlive</a></code> | <code>java.lang.Number</code> | Keep alive interval for the VIM session in minutes. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vimSessionPath">vimSessionPath</a></code> | <code>java.lang.String</code> | The directory to save vSphere SOAP API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vsphereServer">vsphereServer</a></code> | <code>java.lang.String</code> | The vSphere Server name for vSphere API operations. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The user password for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#password VsphereProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.user"></a>

- *Type:* java.lang.String

The user name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#user VsphereProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#alias VsphereProvider#alias}

---

##### `allowUnverifiedSsl`<sup>Optional</sup> <a name="allowUnverifiedSsl" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.allowUnverifiedSsl"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, VMware vSphere client will permit unverifiable SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#allow_unverified_ssl VsphereProvider#allow_unverified_ssl}

---

##### `apiTimeout`<sup>Optional</sup> <a name="apiTimeout" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.apiTimeout"></a>

- *Type:* java.lang.Number

API timeout in minutes (Default: 5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#api_timeout VsphereProvider#api_timeout}

---

##### `clientDebug`<sup>Optional</sup> <a name="clientDebug" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.clientDebug"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

govmomi debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#client_debug VsphereProvider#client_debug}

---

##### `clientDebugPath`<sup>Optional</sup> <a name="clientDebugPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.clientDebugPath"></a>

- *Type:* java.lang.String

govmomi debug path for debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#client_debug_path VsphereProvider#client_debug_path}

---

##### `clientDebugPathRun`<sup>Optional</sup> <a name="clientDebugPathRun" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.clientDebugPathRun"></a>

- *Type:* java.lang.String

govmomi debug path for a single run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#client_debug_path_run VsphereProvider#client_debug_path_run}

---

##### `persistSession`<sup>Optional</sup> <a name="persistSession" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.persistSession"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Persist vSphere client sessions to disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#persist_session VsphereProvider#persist_session}

---

##### `restSessionPath`<sup>Optional</sup> <a name="restSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.restSessionPath"></a>

- *Type:* java.lang.String

The directory to save vSphere REST API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#rest_session_path VsphereProvider#rest_session_path}

---

##### `vcenterServer`<sup>Optional</sup> <a name="vcenterServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vcenterServer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#vcenter_server VsphereProvider#vcenter_server}.

---

##### `vimKeepAlive`<sup>Optional</sup> <a name="vimKeepAlive" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vimKeepAlive"></a>

- *Type:* java.lang.Number

Keep alive interval for the VIM session in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#vim_keep_alive VsphereProvider#vim_keep_alive}

---

##### `vimSessionPath`<sup>Optional</sup> <a name="vimSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vimSessionPath"></a>

- *Type:* java.lang.String

The directory to save vSphere SOAP API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#vim_session_path VsphereProvider#vim_session_path}

---

##### `vsphereServer`<sup>Optional</sup> <a name="vsphereServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vsphereServer"></a>

- *Type:* java.lang.String

The vSphere Server name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#vsphere_server VsphereProvider#vsphere_server}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetAllowUnverifiedSsl">resetAllowUnverifiedSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetApiTimeout">resetApiTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebug">resetClientDebug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPath">resetClientDebugPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPathRun">resetClientDebugPathRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetPersistSession">resetPersistSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetRestSessionPath">resetRestSessionPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetVcenterServer">resetVcenterServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetVimKeepAlive">resetVimKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetVimSessionPath">resetVimSessionPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetVsphereServer">resetVsphereServer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.provider.VsphereProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.provider.VsphereProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.provider.VsphereProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAllowUnverifiedSsl` <a name="resetAllowUnverifiedSsl" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetAllowUnverifiedSsl"></a>

```java
public void resetAllowUnverifiedSsl()
```

##### `resetApiTimeout` <a name="resetApiTimeout" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetApiTimeout"></a>

```java
public void resetApiTimeout()
```

##### `resetClientDebug` <a name="resetClientDebug" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebug"></a>

```java
public void resetClientDebug()
```

##### `resetClientDebugPath` <a name="resetClientDebugPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPath"></a>

```java
public void resetClientDebugPath()
```

##### `resetClientDebugPathRun` <a name="resetClientDebugPathRun" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPathRun"></a>

```java
public void resetClientDebugPathRun()
```

##### `resetPersistSession` <a name="resetPersistSession" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetPersistSession"></a>

```java
public void resetPersistSession()
```

##### `resetRestSessionPath` <a name="resetRestSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetRestSessionPath"></a>

```java
public void resetRestSessionPath()
```

##### `resetVcenterServer` <a name="resetVcenterServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVcenterServer"></a>

```java
public void resetVcenterServer()
```

##### `resetVimKeepAlive` <a name="resetVimKeepAlive" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVimKeepAlive"></a>

```java
public void resetVimKeepAlive()
```

##### `resetVimSessionPath` <a name="resetVimSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVimSessionPath"></a>

```java
public void resetVimSessionPath()
```

##### `resetVsphereServer` <a name="resetVsphereServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVsphereServer"></a>

```java
public void resetVsphereServer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.provider.VsphereProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.provider.VsphereProvider;

VsphereProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.provider.VsphereProvider;

VsphereProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.provider.VsphereProvider;

VsphereProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSslInput">allowUnverifiedSslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeoutInput">apiTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugInput">clientDebugInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathInput">clientDebugPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRunInput">clientDebugPathRunInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSessionInput">persistSessionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPathInput">restSessionPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServerInput">vcenterServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAliveInput">vimKeepAliveInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPathInput">vimSessionPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServerInput">vsphereServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSsl">allowUnverifiedSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeout">apiTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebug">clientDebug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPath">clientDebugPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRun">clientDebugPathRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSession">persistSession</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPath">restSessionPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServer">vcenterServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAlive">vimKeepAlive</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPath">vimSessionPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServer">vsphereServer</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `allowUnverifiedSslInput`<sup>Optional</sup> <a name="allowUnverifiedSslInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSslInput"></a>

```java
public java.lang.Object getAllowUnverifiedSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `apiTimeoutInput`<sup>Optional</sup> <a name="apiTimeoutInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeoutInput"></a>

```java
public java.lang.Number getApiTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `clientDebugInput`<sup>Optional</sup> <a name="clientDebugInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugInput"></a>

```java
public java.lang.Object getClientDebugInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientDebugPathInput`<sup>Optional</sup> <a name="clientDebugPathInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathInput"></a>

```java
public java.lang.String getClientDebugPathInput();
```

- *Type:* java.lang.String

---

##### `clientDebugPathRunInput`<sup>Optional</sup> <a name="clientDebugPathRunInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRunInput"></a>

```java
public java.lang.String getClientDebugPathRunInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `persistSessionInput`<sup>Optional</sup> <a name="persistSessionInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSessionInput"></a>

```java
public java.lang.Object getPersistSessionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restSessionPathInput`<sup>Optional</sup> <a name="restSessionPathInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPathInput"></a>

```java
public java.lang.String getRestSessionPathInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `vcenterServerInput`<sup>Optional</sup> <a name="vcenterServerInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServerInput"></a>

```java
public java.lang.String getVcenterServerInput();
```

- *Type:* java.lang.String

---

##### `vimKeepAliveInput`<sup>Optional</sup> <a name="vimKeepAliveInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAliveInput"></a>

```java
public java.lang.Number getVimKeepAliveInput();
```

- *Type:* java.lang.Number

---

##### `vimSessionPathInput`<sup>Optional</sup> <a name="vimSessionPathInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPathInput"></a>

```java
public java.lang.String getVimSessionPathInput();
```

- *Type:* java.lang.String

---

##### `vsphereServerInput`<sup>Optional</sup> <a name="vsphereServerInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServerInput"></a>

```java
public java.lang.String getVsphereServerInput();
```

- *Type:* java.lang.String

---

##### `allowUnverifiedSsl`<sup>Optional</sup> <a name="allowUnverifiedSsl" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSsl"></a>

```java
public java.lang.Object getAllowUnverifiedSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `apiTimeout`<sup>Optional</sup> <a name="apiTimeout" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeout"></a>

```java
public java.lang.Number getApiTimeout();
```

- *Type:* java.lang.Number

---

##### `clientDebug`<sup>Optional</sup> <a name="clientDebug" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebug"></a>

```java
public java.lang.Object getClientDebug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientDebugPath`<sup>Optional</sup> <a name="clientDebugPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPath"></a>

```java
public java.lang.String getClientDebugPath();
```

- *Type:* java.lang.String

---

##### `clientDebugPathRun`<sup>Optional</sup> <a name="clientDebugPathRun" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRun"></a>

```java
public java.lang.String getClientDebugPathRun();
```

- *Type:* java.lang.String

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `persistSession`<sup>Optional</sup> <a name="persistSession" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSession"></a>

```java
public java.lang.Object getPersistSession();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restSessionPath`<sup>Optional</sup> <a name="restSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPath"></a>

```java
public java.lang.String getRestSessionPath();
```

- *Type:* java.lang.String

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `vcenterServer`<sup>Optional</sup> <a name="vcenterServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServer"></a>

```java
public java.lang.String getVcenterServer();
```

- *Type:* java.lang.String

---

##### `vimKeepAlive`<sup>Optional</sup> <a name="vimKeepAlive" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAlive"></a>

```java
public java.lang.Number getVimKeepAlive();
```

- *Type:* java.lang.Number

---

##### `vimSessionPath`<sup>Optional</sup> <a name="vimSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPath"></a>

```java
public java.lang.String getVimSessionPath();
```

- *Type:* java.lang.String

---

##### `vsphereServer`<sup>Optional</sup> <a name="vsphereServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServer"></a>

```java
public java.lang.String getVsphereServer();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VsphereProviderConfig <a name="VsphereProviderConfig" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.provider.VsphereProviderConfig;

VsphereProviderConfig.builder()
    .password(java.lang.String)
    .user(java.lang.String)
//  .alias(java.lang.String)
//  .allowUnverifiedSsl(java.lang.Boolean)
//  .allowUnverifiedSsl(IResolvable)
//  .apiTimeout(java.lang.Number)
//  .clientDebug(java.lang.Boolean)
//  .clientDebug(IResolvable)
//  .clientDebugPath(java.lang.String)
//  .clientDebugPathRun(java.lang.String)
//  .persistSession(java.lang.Boolean)
//  .persistSession(IResolvable)
//  .restSessionPath(java.lang.String)
//  .vcenterServer(java.lang.String)
//  .vimKeepAlive(java.lang.Number)
//  .vimSessionPath(java.lang.String)
//  .vsphereServer(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.password">password</a></code> | <code>java.lang.String</code> | The user password for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.user">user</a></code> | <code>java.lang.String</code> | The user name for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.allowUnverifiedSsl">allowUnverifiedSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, VMware vSphere client will permit unverifiable SSL certificates. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.apiTimeout">apiTimeout</a></code> | <code>java.lang.Number</code> | API timeout in minutes (Default: 5). |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebug">clientDebug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | govmomi debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPath">clientDebugPath</a></code> | <code>java.lang.String</code> | govmomi debug path for debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPathRun">clientDebugPathRun</a></code> | <code>java.lang.String</code> | govmomi debug path for a single run. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.persistSession">persistSession</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Persist vSphere client sessions to disk. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.restSessionPath">restSessionPath</a></code> | <code>java.lang.String</code> | The directory to save vSphere REST API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vcenterServer">vcenterServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#vcenter_server VsphereProvider#vcenter_server}. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimKeepAlive">vimKeepAlive</a></code> | <code>java.lang.Number</code> | Keep alive interval for the VIM session in minutes. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimSessionPath">vimSessionPath</a></code> | <code>java.lang.String</code> | The directory to save vSphere SOAP API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vsphereServer">vsphereServer</a></code> | <code>java.lang.String</code> | The vSphere Server name for vSphere API operations. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The user password for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#password VsphereProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

The user name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#user VsphereProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#alias VsphereProvider#alias}

---

##### `allowUnverifiedSsl`<sup>Optional</sup> <a name="allowUnverifiedSsl" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.allowUnverifiedSsl"></a>

```java
public java.lang.Object getAllowUnverifiedSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, VMware vSphere client will permit unverifiable SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#allow_unverified_ssl VsphereProvider#allow_unverified_ssl}

---

##### `apiTimeout`<sup>Optional</sup> <a name="apiTimeout" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.apiTimeout"></a>

```java
public java.lang.Number getApiTimeout();
```

- *Type:* java.lang.Number

API timeout in minutes (Default: 5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#api_timeout VsphereProvider#api_timeout}

---

##### `clientDebug`<sup>Optional</sup> <a name="clientDebug" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebug"></a>

```java
public java.lang.Object getClientDebug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

govmomi debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#client_debug VsphereProvider#client_debug}

---

##### `clientDebugPath`<sup>Optional</sup> <a name="clientDebugPath" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPath"></a>

```java
public java.lang.String getClientDebugPath();
```

- *Type:* java.lang.String

govmomi debug path for debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#client_debug_path VsphereProvider#client_debug_path}

---

##### `clientDebugPathRun`<sup>Optional</sup> <a name="clientDebugPathRun" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPathRun"></a>

```java
public java.lang.String getClientDebugPathRun();
```

- *Type:* java.lang.String

govmomi debug path for a single run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#client_debug_path_run VsphereProvider#client_debug_path_run}

---

##### `persistSession`<sup>Optional</sup> <a name="persistSession" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.persistSession"></a>

```java
public java.lang.Object getPersistSession();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Persist vSphere client sessions to disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#persist_session VsphereProvider#persist_session}

---

##### `restSessionPath`<sup>Optional</sup> <a name="restSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.restSessionPath"></a>

```java
public java.lang.String getRestSessionPath();
```

- *Type:* java.lang.String

The directory to save vSphere REST API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#rest_session_path VsphereProvider#rest_session_path}

---

##### `vcenterServer`<sup>Optional</sup> <a name="vcenterServer" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vcenterServer"></a>

```java
public java.lang.String getVcenterServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#vcenter_server VsphereProvider#vcenter_server}.

---

##### `vimKeepAlive`<sup>Optional</sup> <a name="vimKeepAlive" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimKeepAlive"></a>

```java
public java.lang.Number getVimKeepAlive();
```

- *Type:* java.lang.Number

Keep alive interval for the VIM session in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#vim_keep_alive VsphereProvider#vim_keep_alive}

---

##### `vimSessionPath`<sup>Optional</sup> <a name="vimSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimSessionPath"></a>

```java
public java.lang.String getVimSessionPath();
```

- *Type:* java.lang.String

The directory to save vSphere SOAP API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#vim_session_path VsphereProvider#vim_session_path}

---

##### `vsphereServer`<sup>Optional</sup> <a name="vsphereServer" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vsphereServer"></a>

```java
public java.lang.String getVsphereServer();
```

- *Type:* java.lang.String

The vSphere Server name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs#vsphere_server VsphereProvider#vsphere_server}

---



