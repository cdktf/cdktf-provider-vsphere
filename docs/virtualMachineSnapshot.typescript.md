# `virtualMachineSnapshot` Submodule <a name="`virtualMachineSnapshot` Submodule" id="@cdktf/provider-vsphere.virtualMachineSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineSnapshot <a name="VirtualMachineSnapshot" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot vsphere_virtual_machine_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer"></a>

```typescript
import { virtualMachineSnapshot } from '@cdktf/provider-vsphere'

new virtualMachineSnapshot.VirtualMachineSnapshot(scope: Construct, id: string, config: VirtualMachineSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig">VirtualMachineSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig">VirtualMachineSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetConsolidate">resetConsolidate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetRemoveChildren">resetRemoveChildren</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetConsolidate` <a name="resetConsolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetConsolidate"></a>

```typescript
public resetConsolidate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRemoveChildren` <a name="resetRemoveChildren" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetRemoveChildren"></a>

```typescript
public resetRemoveChildren(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isConstruct"></a>

```typescript
import { virtualMachineSnapshot } from '@cdktf/provider-vsphere'

virtualMachineSnapshot.VirtualMachineSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformElement"></a>

```typescript
import { virtualMachineSnapshot } from '@cdktf/provider-vsphere'

virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformResource"></a>

```typescript
import { virtualMachineSnapshot } from '@cdktf/provider-vsphere'

virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidateInput">consolidateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memoryInput">memoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesceInput">quiesceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildrenInput">removeChildrenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuidInput">virtualMachineUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidate">consolidate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memory">memory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesce">quiesce</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildren">removeChildren</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuid">virtualMachineUuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `consolidateInput`<sup>Optional</sup> <a name="consolidateInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidateInput"></a>

```typescript
public readonly consolidateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memoryInput"></a>

```typescript
public readonly memoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `quiesceInput`<sup>Optional</sup> <a name="quiesceInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesceInput"></a>

```typescript
public readonly quiesceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `removeChildrenInput`<sup>Optional</sup> <a name="removeChildrenInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildrenInput"></a>

```typescript
public readonly removeChildrenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `virtualMachineUuidInput`<sup>Optional</sup> <a name="virtualMachineUuidInput" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuidInput"></a>

```typescript
public readonly virtualMachineUuidInput: string;
```

- *Type:* string

---

##### `consolidate`<sup>Required</sup> <a name="consolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidate"></a>

```typescript
public readonly consolidate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memory"></a>

```typescript
public readonly memory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `quiesce`<sup>Required</sup> <a name="quiesce" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesce"></a>

```typescript
public readonly quiesce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `removeChildren`<sup>Required</sup> <a name="removeChildren" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildren"></a>

```typescript
public readonly removeChildren: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

##### `virtualMachineUuid`<sup>Required</sup> <a name="virtualMachineUuid" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuid"></a>

```typescript
public readonly virtualMachineUuid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineSnapshotConfig <a name="VirtualMachineSnapshotConfig" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.Initializer"></a>

```typescript
import { virtualMachineSnapshot } from '@cdktf/provider-vsphere'

const virtualMachineSnapshotConfig: virtualMachineSnapshot.VirtualMachineSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#description VirtualMachineSnapshot#description}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.memory">memory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#memory VirtualMachineSnapshot#memory}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.quiesce">quiesce</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#quiesce VirtualMachineSnapshot#quiesce}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.snapshotName">snapshotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#snapshot_name VirtualMachineSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.virtualMachineUuid">virtualMachineUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#virtual_machine_uuid VirtualMachineSnapshot#virtual_machine_uuid}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.consolidate">consolidate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#consolidate VirtualMachineSnapshot#consolidate}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#id VirtualMachineSnapshot#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.removeChildren">removeChildren</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#remove_children VirtualMachineSnapshot#remove_children}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#description VirtualMachineSnapshot#description}.

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.memory"></a>

```typescript
public readonly memory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#memory VirtualMachineSnapshot#memory}.

---

##### `quiesce`<sup>Required</sup> <a name="quiesce" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.quiesce"></a>

```typescript
public readonly quiesce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#quiesce VirtualMachineSnapshot#quiesce}.

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#snapshot_name VirtualMachineSnapshot#snapshot_name}.

---

##### `virtualMachineUuid`<sup>Required</sup> <a name="virtualMachineUuid" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.virtualMachineUuid"></a>

```typescript
public readonly virtualMachineUuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#virtual_machine_uuid VirtualMachineSnapshot#virtual_machine_uuid}.

---

##### `consolidate`<sup>Optional</sup> <a name="consolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.consolidate"></a>

```typescript
public readonly consolidate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#consolidate VirtualMachineSnapshot#consolidate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#id VirtualMachineSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `removeChildren`<sup>Optional</sup> <a name="removeChildren" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.removeChildren"></a>

```typescript
public readonly removeChildren: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/virtual_machine_snapshot#remove_children VirtualMachineSnapshot#remove_children}.

---


