# `host` Submodule <a name="`host` Submodule" id="@cdktf/provider-vsphere.host"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Host <a name="Host" id="@cdktf/provider-vsphere.host.Host"></a>

Represents a {@link https://www.terraform.io/docs/providers/vsphere/r/host vsphere_host}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.host.Host.Initializer"></a>

```typescript
import { host } from '@cdktf/provider-vsphere'

new host.Host(scope: Construct, id: string, config: HostConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.host.HostConfig">HostConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.host.Host.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.host.HostConfig">HostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetClusterManaged">resetClusterManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetConnected">resetConnected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetLicense">resetLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetLockdown">resetLockdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetMaintenance">resetMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.resetThumbprint">resetThumbprint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.host.Host.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.host.Host.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.host.Host.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.host.Host.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.host.Host.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.host.Host.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.host.Host.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.host.Host.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.host.Host.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.host.Host.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.host.Host.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.host.Host.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.host.Host.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.host.Host.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.host.Host.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.host.Host.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.host.Host.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-vsphere.host.Host.resetCluster"></a>

```typescript
public resetCluster(): void
```

##### `resetClusterManaged` <a name="resetClusterManaged" id="@cdktf/provider-vsphere.host.Host.resetClusterManaged"></a>

```typescript
public resetClusterManaged(): void
```

##### `resetConnected` <a name="resetConnected" id="@cdktf/provider-vsphere.host.Host.resetConnected"></a>

```typescript
public resetConnected(): void
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.host.Host.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-vsphere.host.Host.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetForce` <a name="resetForce" id="@cdktf/provider-vsphere.host.Host.resetForce"></a>

```typescript
public resetForce(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.host.Host.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicense` <a name="resetLicense" id="@cdktf/provider-vsphere.host.Host.resetLicense"></a>

```typescript
public resetLicense(): void
```

##### `resetLockdown` <a name="resetLockdown" id="@cdktf/provider-vsphere.host.Host.resetLockdown"></a>

```typescript
public resetLockdown(): void
```

##### `resetMaintenance` <a name="resetMaintenance" id="@cdktf/provider-vsphere.host.Host.resetMaintenance"></a>

```typescript
public resetMaintenance(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.host.Host.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThumbprint` <a name="resetThumbprint" id="@cdktf/provider-vsphere.host.Host.resetThumbprint"></a>

```typescript
public resetThumbprint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.host.Host.isConstruct"></a>

```typescript
import { host } from '@cdktf/provider-vsphere'

host.Host.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.host.Host.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.host.Host.isTerraformElement"></a>

```typescript
import { host } from '@cdktf/provider-vsphere'

host.Host.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.host.Host.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.host.Host.isTerraformResource"></a>

```typescript
import { host } from '@cdktf/provider-vsphere'

host.Host.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.host.Host.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.clusterManagedInput">clusterManagedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.connectedInput">connectedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.customAttributesInput">customAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.forceInput">forceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.licenseInput">licenseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.lockdownInput">lockdownInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.maintenanceInput">maintenanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.thumbprintInput">thumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.clusterManaged">clusterManaged</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.connected">connected</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.force">force</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.license">license</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.lockdown">lockdown</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.maintenance">maintenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.host.Host.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.host.Host.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.host.Host.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.host.Host.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.host.Host.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.host.Host.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.host.Host.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.host.Host.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.host.Host.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.host.Host.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.host.Host.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.host.Host.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.host.Host.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.host.Host.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-vsphere.host.Host.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `clusterManagedInput`<sup>Optional</sup> <a name="clusterManagedInput" id="@cdktf/provider-vsphere.host.Host.property.clusterManagedInput"></a>

```typescript
public readonly clusterManagedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectedInput`<sup>Optional</sup> <a name="connectedInput" id="@cdktf/provider-vsphere.host.Host.property.connectedInput"></a>

```typescript
public readonly connectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.host.Host.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-vsphere.host.Host.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktf/provider-vsphere.host.Host.property.forceInput"></a>

```typescript
public readonly forceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-vsphere.host.Host.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.host.Host.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseInput`<sup>Optional</sup> <a name="licenseInput" id="@cdktf/provider-vsphere.host.Host.property.licenseInput"></a>

```typescript
public readonly licenseInput: string;
```

- *Type:* string

---

##### `lockdownInput`<sup>Optional</sup> <a name="lockdownInput" id="@cdktf/provider-vsphere.host.Host.property.lockdownInput"></a>

```typescript
public readonly lockdownInput: string;
```

- *Type:* string

---

##### `maintenanceInput`<sup>Optional</sup> <a name="maintenanceInput" id="@cdktf/provider-vsphere.host.Host.property.maintenanceInput"></a>

```typescript
public readonly maintenanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vsphere.host.Host.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.host.Host.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-vsphere.host.Host.property.thumbprintInput"></a>

```typescript
public readonly thumbprintInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vsphere.host.Host.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-vsphere.host.Host.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `clusterManaged`<sup>Required</sup> <a name="clusterManaged" id="@cdktf/provider-vsphere.host.Host.property.clusterManaged"></a>

```typescript
public readonly clusterManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connected`<sup>Required</sup> <a name="connected" id="@cdktf/provider-vsphere.host.Host.property.connected"></a>

```typescript
public readonly connected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.host.Host.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-vsphere.host.Host.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-vsphere.host.Host.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-vsphere.host.Host.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.host.Host.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-vsphere.host.Host.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

---

##### `lockdown`<sup>Required</sup> <a name="lockdown" id="@cdktf/provider-vsphere.host.Host.property.lockdown"></a>

```typescript
public readonly lockdown: string;
```

- *Type:* string

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="@cdktf/provider-vsphere.host.Host.property.maintenance"></a>

```typescript
public readonly maintenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.host.Host.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.host.Host.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-vsphere.host.Host.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vsphere.host.Host.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.Host.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.host.Host.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HostConfig <a name="HostConfig" id="@cdktf/provider-vsphere.host.HostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.host.HostConfig.Initializer"></a>

```typescript
import { host } from '@cdktf/provider-vsphere'

const hostConfig: host.HostConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.hostname">hostname</a></code> | <code>string</code> | FQDN or IP address of the host. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.password">password</a></code> | <code>string</code> | Password of the administration account of the host. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.username">username</a></code> | <code>string</code> | Username of the administration account of the host. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.cluster">cluster</a></code> | <code>string</code> | ID of the vSphere cluster the host will belong to. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.clusterManaged">clusterManaged</a></code> | <code>boolean \| cdktf.IResolvable</code> | Must be set if host is a member of a managed compute_cluster resource. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.connected">connected</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set the state of the host. If set to false then the host will be asked to disconnect. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.datacenter">datacenter</a></code> | <code>string</code> | ID of the vSphere datacenter the host will belong to. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.force">force</a></code> | <code>boolean \| cdktf.IResolvable</code> | Force add the host to the vSphere inventory even if it's already managed by a different vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#id Host#id}. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.license">license</a></code> | <code>string</code> | License key that will be applied to this host. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.lockdown">lockdown</a></code> | <code>string</code> | Set the host's lockdown status. Default is disabled. Valid options are 'disabled', 'normal', 'strict'. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.maintenance">maintenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set the host's maintenance mode. Default is false. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.host.HostConfig.property.thumbprint">thumbprint</a></code> | <code>string</code> | Host's certificate SHA-1 thumbprint. If not set then the CA that signed the host's certificate must be trusted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.host.HostConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.host.HostConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.host.HostConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.host.HostConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.host.HostConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.host.HostConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.host.HostConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-vsphere.host.HostConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

FQDN or IP address of the host.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#hostname Host#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.host.HostConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password of the administration account of the host.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#password Host#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vsphere.host.HostConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username of the administration account of the host.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#username Host#username}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-vsphere.host.HostConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

ID of the vSphere cluster the host will belong to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#cluster Host#cluster}

---

##### `clusterManaged`<sup>Optional</sup> <a name="clusterManaged" id="@cdktf/provider-vsphere.host.HostConfig.property.clusterManaged"></a>

```typescript
public readonly clusterManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Must be set if host is a member of a managed compute_cluster resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#cluster_managed Host#cluster_managed}

---

##### `connected`<sup>Optional</sup> <a name="connected" id="@cdktf/provider-vsphere.host.HostConfig.property.connected"></a>

```typescript
public readonly connected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set the state of the host. If set to false then the host will be asked to disconnect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#connected Host#connected}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.host.HostConfig.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#custom_attributes Host#custom_attributes}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-vsphere.host.HostConfig.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

ID of the vSphere datacenter the host will belong to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#datacenter Host#datacenter}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-vsphere.host.HostConfig.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Force add the host to the vSphere inventory even if it's already managed by a different vCenter Server instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#force Host#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.host.HostConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#id Host#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license`<sup>Optional</sup> <a name="license" id="@cdktf/provider-vsphere.host.HostConfig.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

License key that will be applied to this host.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#license Host#license}

---

##### `lockdown`<sup>Optional</sup> <a name="lockdown" id="@cdktf/provider-vsphere.host.HostConfig.property.lockdown"></a>

```typescript
public readonly lockdown: string;
```

- *Type:* string

Set the host's lockdown status. Default is disabled. Valid options are 'disabled', 'normal', 'strict'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#lockdown Host#lockdown}

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktf/provider-vsphere.host.HostConfig.property.maintenance"></a>

```typescript
public readonly maintenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set the host's maintenance mode. Default is false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#maintenance Host#maintenance}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.host.HostConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#tags Host#tags}

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-vsphere.host.HostConfig.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

Host's certificate SHA-1 thumbprint. If not set then the CA that signed the host's certificate must be trusted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/host#thumbprint Host#thumbprint}

---



