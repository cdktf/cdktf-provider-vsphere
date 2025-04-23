# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-vsphere.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VsphereProvider <a name="VsphereProvider" id="@cdktf/provider-vsphere.provider.VsphereProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs vsphere}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vsphere'

new provider.VsphereProvider(scope: Construct, id: string, config: VsphereProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig">VsphereProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig">VsphereProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.provider.VsphereProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.provider.VsphereProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.provider.VsphereProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAllowUnverifiedSsl` <a name="resetAllowUnverifiedSsl" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetAllowUnverifiedSsl"></a>

```typescript
public resetAllowUnverifiedSsl(): void
```

##### `resetApiTimeout` <a name="resetApiTimeout" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetApiTimeout"></a>

```typescript
public resetApiTimeout(): void
```

##### `resetClientDebug` <a name="resetClientDebug" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebug"></a>

```typescript
public resetClientDebug(): void
```

##### `resetClientDebugPath` <a name="resetClientDebugPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPath"></a>

```typescript
public resetClientDebugPath(): void
```

##### `resetClientDebugPathRun` <a name="resetClientDebugPathRun" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPathRun"></a>

```typescript
public resetClientDebugPathRun(): void
```

##### `resetPersistSession` <a name="resetPersistSession" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetPersistSession"></a>

```typescript
public resetPersistSession(): void
```

##### `resetRestSessionPath` <a name="resetRestSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetRestSessionPath"></a>

```typescript
public resetRestSessionPath(): void
```

##### `resetVcenterServer` <a name="resetVcenterServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVcenterServer"></a>

```typescript
public resetVcenterServer(): void
```

##### `resetVimKeepAlive` <a name="resetVimKeepAlive" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVimKeepAlive"></a>

```typescript
public resetVimKeepAlive(): void
```

##### `resetVimSessionPath` <a name="resetVimSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVimSessionPath"></a>

```typescript
public resetVimSessionPath(): void
```

##### `resetVsphereServer` <a name="resetVsphereServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVsphereServer"></a>

```typescript
public resetVsphereServer(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VsphereProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.provider.VsphereProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-vsphere'

provider.VsphereProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-vsphere'

provider.VsphereProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-vsphere'

provider.VsphereProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-vsphere'

provider.VsphereProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VsphereProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VsphereProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VsphereProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VsphereProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSslInput">allowUnverifiedSslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeoutInput">apiTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugInput">clientDebugInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathInput">clientDebugPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRunInput">clientDebugPathRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSessionInput">persistSessionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPathInput">restSessionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServerInput">vcenterServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAliveInput">vimKeepAliveInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPathInput">vimSessionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServerInput">vsphereServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSsl">allowUnverifiedSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeout">apiTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebug">clientDebug</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPath">clientDebugPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRun">clientDebugPathRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSession">persistSession</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPath">restSessionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServer">vcenterServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAlive">vimKeepAlive</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPath">vimSessionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServer">vsphereServer</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `allowUnverifiedSslInput`<sup>Optional</sup> <a name="allowUnverifiedSslInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSslInput"></a>

```typescript
public readonly allowUnverifiedSslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiTimeoutInput`<sup>Optional</sup> <a name="apiTimeoutInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeoutInput"></a>

```typescript
public readonly apiTimeoutInput: number;
```

- *Type:* number

---

##### `clientDebugInput`<sup>Optional</sup> <a name="clientDebugInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugInput"></a>

```typescript
public readonly clientDebugInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientDebugPathInput`<sup>Optional</sup> <a name="clientDebugPathInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathInput"></a>

```typescript
public readonly clientDebugPathInput: string;
```

- *Type:* string

---

##### `clientDebugPathRunInput`<sup>Optional</sup> <a name="clientDebugPathRunInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRunInput"></a>

```typescript
public readonly clientDebugPathRunInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `persistSessionInput`<sup>Optional</sup> <a name="persistSessionInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSessionInput"></a>

```typescript
public readonly persistSessionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restSessionPathInput`<sup>Optional</sup> <a name="restSessionPathInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPathInput"></a>

```typescript
public readonly restSessionPathInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `vcenterServerInput`<sup>Optional</sup> <a name="vcenterServerInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServerInput"></a>

```typescript
public readonly vcenterServerInput: string;
```

- *Type:* string

---

##### `vimKeepAliveInput`<sup>Optional</sup> <a name="vimKeepAliveInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAliveInput"></a>

```typescript
public readonly vimKeepAliveInput: number;
```

- *Type:* number

---

##### `vimSessionPathInput`<sup>Optional</sup> <a name="vimSessionPathInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPathInput"></a>

```typescript
public readonly vimSessionPathInput: string;
```

- *Type:* string

---

##### `vsphereServerInput`<sup>Optional</sup> <a name="vsphereServerInput" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServerInput"></a>

```typescript
public readonly vsphereServerInput: string;
```

- *Type:* string

---

##### `allowUnverifiedSsl`<sup>Optional</sup> <a name="allowUnverifiedSsl" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSsl"></a>

```typescript
public readonly allowUnverifiedSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiTimeout`<sup>Optional</sup> <a name="apiTimeout" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeout"></a>

```typescript
public readonly apiTimeout: number;
```

- *Type:* number

---

##### `clientDebug`<sup>Optional</sup> <a name="clientDebug" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebug"></a>

```typescript
public readonly clientDebug: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientDebugPath`<sup>Optional</sup> <a name="clientDebugPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPath"></a>

```typescript
public readonly clientDebugPath: string;
```

- *Type:* string

---

##### `clientDebugPathRun`<sup>Optional</sup> <a name="clientDebugPathRun" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRun"></a>

```typescript
public readonly clientDebugPathRun: string;
```

- *Type:* string

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `persistSession`<sup>Optional</sup> <a name="persistSession" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSession"></a>

```typescript
public readonly persistSession: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restSessionPath`<sup>Optional</sup> <a name="restSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPath"></a>

```typescript
public readonly restSessionPath: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `vcenterServer`<sup>Optional</sup> <a name="vcenterServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServer"></a>

```typescript
public readonly vcenterServer: string;
```

- *Type:* string

---

##### `vimKeepAlive`<sup>Optional</sup> <a name="vimKeepAlive" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAlive"></a>

```typescript
public readonly vimKeepAlive: number;
```

- *Type:* number

---

##### `vimSessionPath`<sup>Optional</sup> <a name="vimSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPath"></a>

```typescript
public readonly vimSessionPath: string;
```

- *Type:* string

---

##### `vsphereServer`<sup>Optional</sup> <a name="vsphereServer" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServer"></a>

```typescript
public readonly vsphereServer: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VsphereProviderConfig <a name="VsphereProviderConfig" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-vsphere'

const vsphereProviderConfig: provider.VsphereProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.password">password</a></code> | <code>string</code> | The user password for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.user">user</a></code> | <code>string</code> | The user name for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.allowUnverifiedSsl">allowUnverifiedSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, VMware vSphere client will permit unverifiable SSL certificates. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.apiTimeout">apiTimeout</a></code> | <code>number</code> | API timeout in minutes (Default: 5). |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebug">clientDebug</a></code> | <code>boolean \| cdktf.IResolvable</code> | govmomi debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPath">clientDebugPath</a></code> | <code>string</code> | govmomi debug path for debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPathRun">clientDebugPathRun</a></code> | <code>string</code> | govmomi debug path for a single run. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.persistSession">persistSession</a></code> | <code>boolean \| cdktf.IResolvable</code> | Persist vSphere client sessions to disk. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.restSessionPath">restSessionPath</a></code> | <code>string</code> | The directory to save vSphere REST API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vcenterServer">vcenterServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#vcenter_server VsphereProvider#vcenter_server}. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimKeepAlive">vimKeepAlive</a></code> | <code>number</code> | Keep alive interval for the VIM session in minutes. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimSessionPath">vimSessionPath</a></code> | <code>string</code> | The directory to save vSphere SOAP API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vsphereServer">vsphereServer</a></code> | <code>string</code> | The vSphere Server name for vSphere API operations. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The user password for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#password VsphereProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

The user name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#user VsphereProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#alias VsphereProvider#alias}

---

##### `allowUnverifiedSsl`<sup>Optional</sup> <a name="allowUnverifiedSsl" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.allowUnverifiedSsl"></a>

```typescript
public readonly allowUnverifiedSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, VMware vSphere client will permit unverifiable SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#allow_unverified_ssl VsphereProvider#allow_unverified_ssl}

---

##### `apiTimeout`<sup>Optional</sup> <a name="apiTimeout" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.apiTimeout"></a>

```typescript
public readonly apiTimeout: number;
```

- *Type:* number

API timeout in minutes (Default: 5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#api_timeout VsphereProvider#api_timeout}

---

##### `clientDebug`<sup>Optional</sup> <a name="clientDebug" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebug"></a>

```typescript
public readonly clientDebug: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

govmomi debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#client_debug VsphereProvider#client_debug}

---

##### `clientDebugPath`<sup>Optional</sup> <a name="clientDebugPath" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPath"></a>

```typescript
public readonly clientDebugPath: string;
```

- *Type:* string

govmomi debug path for debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#client_debug_path VsphereProvider#client_debug_path}

---

##### `clientDebugPathRun`<sup>Optional</sup> <a name="clientDebugPathRun" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPathRun"></a>

```typescript
public readonly clientDebugPathRun: string;
```

- *Type:* string

govmomi debug path for a single run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#client_debug_path_run VsphereProvider#client_debug_path_run}

---

##### `persistSession`<sup>Optional</sup> <a name="persistSession" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.persistSession"></a>

```typescript
public readonly persistSession: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Persist vSphere client sessions to disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#persist_session VsphereProvider#persist_session}

---

##### `restSessionPath`<sup>Optional</sup> <a name="restSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.restSessionPath"></a>

```typescript
public readonly restSessionPath: string;
```

- *Type:* string

The directory to save vSphere REST API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#rest_session_path VsphereProvider#rest_session_path}

---

##### `vcenterServer`<sup>Optional</sup> <a name="vcenterServer" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vcenterServer"></a>

```typescript
public readonly vcenterServer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#vcenter_server VsphereProvider#vcenter_server}.

---

##### `vimKeepAlive`<sup>Optional</sup> <a name="vimKeepAlive" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimKeepAlive"></a>

```typescript
public readonly vimKeepAlive: number;
```

- *Type:* number

Keep alive interval for the VIM session in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#vim_keep_alive VsphereProvider#vim_keep_alive}

---

##### `vimSessionPath`<sup>Optional</sup> <a name="vimSessionPath" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimSessionPath"></a>

```typescript
public readonly vimSessionPath: string;
```

- *Type:* string

The directory to save vSphere SOAP API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#vim_session_path VsphereProvider#vim_session_path}

---

##### `vsphereServer`<sup>Optional</sup> <a name="vsphereServer" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vsphereServer"></a>

```typescript
public readonly vsphereServer: string;
```

- *Type:* string

The vSphere Server name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs#vsphere_server VsphereProvider#vsphere_server}

---



