# `vappEntity` Submodule <a name="`vappEntity` Submodule" id="@cdktf/provider-vsphere.vappEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VappEntity <a name="VappEntity" id="@cdktf/provider-vsphere.vappEntity.VappEntity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity vsphere_vapp_entity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer"></a>

```typescript
import { vappEntity } from '@cdktf/provider-vsphere'

new vappEntity.VappEntity(scope: Construct, id: string, config: VappEntityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig">VappEntityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig">VappEntityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartAction">resetStartAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartDelay">resetStartDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartOrder">resetStartOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopAction">resetStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopDelay">resetStopDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetWaitForGuest">resetWaitForGuest</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.vappEntity.VappEntity.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStartAction` <a name="resetStartAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartAction"></a>

```typescript
public resetStartAction(): void
```

##### `resetStartDelay` <a name="resetStartDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartDelay"></a>

```typescript
public resetStartDelay(): void
```

##### `resetStartOrder` <a name="resetStartOrder" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartOrder"></a>

```typescript
public resetStartOrder(): void
```

##### `resetStopAction` <a name="resetStopAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopAction"></a>

```typescript
public resetStopAction(): void
```

##### `resetStopDelay` <a name="resetStopDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopDelay"></a>

```typescript
public resetStopDelay(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWaitForGuest` <a name="resetWaitForGuest" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetWaitForGuest"></a>

```typescript
public resetWaitForGuest(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VappEntity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct"></a>

```typescript
import { vappEntity } from '@cdktf/provider-vsphere'

vappEntity.VappEntity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement"></a>

```typescript
import { vappEntity } from '@cdktf/provider-vsphere'

vappEntity.VappEntity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource"></a>

```typescript
import { vappEntity } from '@cdktf/provider-vsphere'

vappEntity.VappEntity.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport"></a>

```typescript
import { vappEntity } from '@cdktf/provider-vsphere'

vappEntity.VappEntity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VappEntity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VappEntity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VappEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VappEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerIdInput">containerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributesInput">customAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startActionInput">startActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelayInput">startDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrderInput">startOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopActionInput">stopActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelayInput">stopDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuestInput">waitForGuestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startAction">startAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelay">startDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrder">startOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopAction">stopAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelay">stopDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuest">waitForGuest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerIdInput"></a>

```typescript
public readonly containerIdInput: string;
```

- *Type:* string

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `startActionInput`<sup>Optional</sup> <a name="startActionInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startActionInput"></a>

```typescript
public readonly startActionInput: string;
```

- *Type:* string

---

##### `startDelayInput`<sup>Optional</sup> <a name="startDelayInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelayInput"></a>

```typescript
public readonly startDelayInput: number;
```

- *Type:* number

---

##### `startOrderInput`<sup>Optional</sup> <a name="startOrderInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrderInput"></a>

```typescript
public readonly startOrderInput: number;
```

- *Type:* number

---

##### `stopActionInput`<sup>Optional</sup> <a name="stopActionInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopActionInput"></a>

```typescript
public readonly stopActionInput: string;
```

- *Type:* string

---

##### `stopDelayInput`<sup>Optional</sup> <a name="stopDelayInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelayInput"></a>

```typescript
public readonly stopDelayInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `waitForGuestInput`<sup>Optional</sup> <a name="waitForGuestInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuestInput"></a>

```typescript
public readonly waitForGuestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `startAction`<sup>Required</sup> <a name="startAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startAction"></a>

```typescript
public readonly startAction: string;
```

- *Type:* string

---

##### `startDelay`<sup>Required</sup> <a name="startDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelay"></a>

```typescript
public readonly startDelay: number;
```

- *Type:* number

---

##### `startOrder`<sup>Required</sup> <a name="startOrder" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrder"></a>

```typescript
public readonly startOrder: number;
```

- *Type:* number

---

##### `stopAction`<sup>Required</sup> <a name="stopAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopAction"></a>

```typescript
public readonly stopAction: string;
```

- *Type:* string

---

##### `stopDelay`<sup>Required</sup> <a name="stopDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelay"></a>

```typescript
public readonly stopDelay: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `waitForGuest`<sup>Required</sup> <a name="waitForGuest" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuest"></a>

```typescript
public readonly waitForGuest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VappEntityConfig <a name="VappEntityConfig" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.Initializer"></a>

```typescript
import { vappEntity } from '@cdktf/provider-vsphere'

const vappEntityConfig: vappEntity.VappEntityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.containerId">containerId</a></code> | <code>string</code> | Managed object ID of the vApp container the entity is a member of. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.targetId">targetId</a></code> | <code>string</code> | Managed object ID of the entity to power on or power off. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity#id VappEntity#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startAction">startAction</a></code> | <code>string</code> | How to start the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startDelay">startDelay</a></code> | <code>number</code> | Delay in seconds before continuing with the next entity in the order of entities to be started. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startOrder">startOrder</a></code> | <code>number</code> | Order to start and stop target in vApp. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopAction">stopAction</a></code> | <code>string</code> | Defines the stop action for the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopDelay">stopDelay</a></code> | <code>number</code> | Delay in seconds before continuing with the next entity in the order of entities to be stopped. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.waitForGuest">waitForGuest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

Managed object ID of the vApp container the entity is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity#container_id VappEntity#container_id}

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Managed object ID of the entity to power on or power off.

This can be a virtual machine or a vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity#target_id VappEntity#target_id}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity#custom_attributes VappEntity#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity#id VappEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startAction`<sup>Optional</sup> <a name="startAction" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startAction"></a>

```typescript
public readonly startAction: string;
```

- *Type:* string

How to start the entity.

Valid settings are none or powerOn. If set to none, then the entity does not participate in auto-start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity#start_action VappEntity#start_action}

---

##### `startDelay`<sup>Optional</sup> <a name="startDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startDelay"></a>

```typescript
public readonly startDelay: number;
```

- *Type:* number

Delay in seconds before continuing with the next entity in the order of entities to be started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity#start_delay VappEntity#start_delay}

---

##### `startOrder`<sup>Optional</sup> <a name="startOrder" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startOrder"></a>

```typescript
public readonly startOrder: number;
```

- *Type:* number

Order to start and stop target in vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity#start_order VappEntity#start_order}

---

##### `stopAction`<sup>Optional</sup> <a name="stopAction" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopAction"></a>

```typescript
public readonly stopAction: string;
```

- *Type:* string

Defines the stop action for the entity.

Can be set to none, powerOff, guestShutdown, or suspend. If set to none, then the entity does not participate in auto-stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity#stop_action VappEntity#stop_action}

---

##### `stopDelay`<sup>Optional</sup> <a name="stopDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopDelay"></a>

```typescript
public readonly stopDelay: number;
```

- *Type:* number

Delay in seconds before continuing with the next entity in the order of entities to be stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity#stop_delay VappEntity#stop_delay}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity#tags VappEntity#tags}

---

##### `waitForGuest`<sup>Optional</sup> <a name="waitForGuest" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.waitForGuest"></a>

```typescript
public readonly waitForGuest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay.

This property has no effect for vApps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/vapp_entity#wait_for_guest VappEntity#wait_for_guest}

---



