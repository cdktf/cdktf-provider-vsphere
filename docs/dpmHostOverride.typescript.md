# `vsphere_dpm_host_override`

Refer to the Terraform Registory for docs: [`vsphere_dpm_host_override`](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/dpm_host_override).

# `dpmHostOverride` Submodule <a name="`dpmHostOverride` Submodule" id="@cdktf/provider-vsphere.dpmHostOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DpmHostOverride <a name="DpmHostOverride" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/dpm_host_override vsphere_dpm_host_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.Initializer"></a>

```typescript
import { dpmHostOverride } from '@cdktf/provider-vsphere'

new dpmHostOverride.DpmHostOverride(scope: Construct, id: string, config: DpmHostOverrideConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig">DpmHostOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig">DpmHostOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.resetDpmAutomationLevel">resetDpmAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.resetDpmEnabled">resetDpmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDpmAutomationLevel` <a name="resetDpmAutomationLevel" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.resetDpmAutomationLevel"></a>

```typescript
public resetDpmAutomationLevel(): void
```

##### `resetDpmEnabled` <a name="resetDpmEnabled" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.resetDpmEnabled"></a>

```typescript
public resetDpmEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.isConstruct"></a>

```typescript
import { dpmHostOverride } from '@cdktf/provider-vsphere'

dpmHostOverride.DpmHostOverride.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.isTerraformElement"></a>

```typescript
import { dpmHostOverride } from '@cdktf/provider-vsphere'

dpmHostOverride.DpmHostOverride.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.isTerraformResource"></a>

```typescript
import { dpmHostOverride } from '@cdktf/provider-vsphere'

dpmHostOverride.DpmHostOverride.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.computeClusterIdInput">computeClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.dpmAutomationLevelInput">dpmAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.dpmEnabledInput">dpmEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.hostSystemIdInput">hostSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.computeClusterId">computeClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.dpmAutomationLevel">dpmAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.dpmEnabled">dpmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.hostSystemId">hostSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeClusterIdInput`<sup>Optional</sup> <a name="computeClusterIdInput" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.computeClusterIdInput"></a>

```typescript
public readonly computeClusterIdInput: string;
```

- *Type:* string

---

##### `dpmAutomationLevelInput`<sup>Optional</sup> <a name="dpmAutomationLevelInput" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.dpmAutomationLevelInput"></a>

```typescript
public readonly dpmAutomationLevelInput: string;
```

- *Type:* string

---

##### `dpmEnabledInput`<sup>Optional</sup> <a name="dpmEnabledInput" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.dpmEnabledInput"></a>

```typescript
public readonly dpmEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSystemIdInput`<sup>Optional</sup> <a name="hostSystemIdInput" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.hostSystemIdInput"></a>

```typescript
public readonly hostSystemIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.computeClusterId"></a>

```typescript
public readonly computeClusterId: string;
```

- *Type:* string

---

##### `dpmAutomationLevel`<sup>Required</sup> <a name="dpmAutomationLevel" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.dpmAutomationLevel"></a>

```typescript
public readonly dpmAutomationLevel: string;
```

- *Type:* string

---

##### `dpmEnabled`<sup>Required</sup> <a name="dpmEnabled" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.dpmEnabled"></a>

```typescript
public readonly dpmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.hostSystemId"></a>

```typescript
public readonly hostSystemId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverride.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DpmHostOverrideConfig <a name="DpmHostOverrideConfig" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.Initializer"></a>

```typescript
import { dpmHostOverride } from '@cdktf/provider-vsphere'

const dpmHostOverrideConfig: dpmHostOverride.DpmHostOverrideConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.computeClusterId">computeClusterId</a></code> | <code>string</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.hostSystemId">hostSystemId</a></code> | <code>string</code> | The managed object ID of the host. |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.dpmAutomationLevel">dpmAutomationLevel</a></code> | <code>string</code> | The automation level for power operations on this host. Can be one of manual or automated. |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.dpmEnabled">dpmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable DPM for this host. |
| <code><a href="#@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/dpm_host_override#id DpmHostOverride#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.computeClusterId"></a>

```typescript
public readonly computeClusterId: string;
```

- *Type:* string

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/dpm_host_override#compute_cluster_id DpmHostOverride#compute_cluster_id}

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.hostSystemId"></a>

```typescript
public readonly hostSystemId: string;
```

- *Type:* string

The managed object ID of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/dpm_host_override#host_system_id DpmHostOverride#host_system_id}

---

##### `dpmAutomationLevel`<sup>Optional</sup> <a name="dpmAutomationLevel" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.dpmAutomationLevel"></a>

```typescript
public readonly dpmAutomationLevel: string;
```

- *Type:* string

The automation level for power operations on this host. Can be one of manual or automated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/dpm_host_override#dpm_automation_level DpmHostOverride#dpm_automation_level}

---

##### `dpmEnabled`<sup>Optional</sup> <a name="dpmEnabled" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.dpmEnabled"></a>

```typescript
public readonly dpmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable DPM for this host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/dpm_host_override#dpm_enabled DpmHostOverride#dpm_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dpmHostOverride.DpmHostOverrideConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/dpm_host_override#id DpmHostOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



