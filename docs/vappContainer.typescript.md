# `vappContainer` Submodule <a name="`vappContainer` Submodule" id="@cdktf/provider-vsphere.vappContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VappContainer <a name="VappContainer" id="@cdktf/provider-vsphere.vappContainer.VappContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container vsphere_vapp_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer"></a>

```typescript
import { vappContainer } from '@cdktf/provider-vsphere'

new vappContainer.VappContainer(scope: Construct, id: string, config: VappContainerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig">VappContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig">VappContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuExpandable">resetCpuExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuLimit">resetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuReservation">resetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShareLevel">resetCpuShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShares">resetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryExpandable">resetMemoryExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryLimit">resetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryReservation">resetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShareLevel">resetMemoryShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShares">resetMemoryShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetParentFolderId">resetParentFolderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.vappContainer.VappContainer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.vappContainer.VappContainer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCpuExpandable` <a name="resetCpuExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuExpandable"></a>

```typescript
public resetCpuExpandable(): void
```

##### `resetCpuLimit` <a name="resetCpuLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuLimit"></a>

```typescript
public resetCpuLimit(): void
```

##### `resetCpuReservation` <a name="resetCpuReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuReservation"></a>

```typescript
public resetCpuReservation(): void
```

##### `resetCpuShareLevel` <a name="resetCpuShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShareLevel"></a>

```typescript
public resetCpuShareLevel(): void
```

##### `resetCpuShares` <a name="resetCpuShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShares"></a>

```typescript
public resetCpuShares(): void
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMemoryExpandable` <a name="resetMemoryExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryExpandable"></a>

```typescript
public resetMemoryExpandable(): void
```

##### `resetMemoryLimit` <a name="resetMemoryLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryLimit"></a>

```typescript
public resetMemoryLimit(): void
```

##### `resetMemoryReservation` <a name="resetMemoryReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryReservation"></a>

```typescript
public resetMemoryReservation(): void
```

##### `resetMemoryShareLevel` <a name="resetMemoryShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShareLevel"></a>

```typescript
public resetMemoryShareLevel(): void
```

##### `resetMemoryShares` <a name="resetMemoryShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShares"></a>

```typescript
public resetMemoryShares(): void
```

##### `resetParentFolderId` <a name="resetParentFolderId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetParentFolderId"></a>

```typescript
public resetParentFolderId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VappContainer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct"></a>

```typescript
import { vappContainer } from '@cdktf/provider-vsphere'

vappContainer.VappContainer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement"></a>

```typescript
import { vappContainer } from '@cdktf/provider-vsphere'

vappContainer.VappContainer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource"></a>

```typescript
import { vappContainer } from '@cdktf/provider-vsphere'

vappContainer.VappContainer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport"></a>

```typescript
import { vappContainer } from '@cdktf/provider-vsphere'

vappContainer.VappContainer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VappContainer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VappContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VappContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VappContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandableInput">cpuExpandableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimitInput">cpuLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservationInput">cpuReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevelInput">cpuShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuSharesInput">cpuSharesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributesInput">customAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandableInput">memoryExpandableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimitInput">memoryLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservationInput">memoryReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevelInput">memoryShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memorySharesInput">memorySharesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderIdInput">parentFolderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolIdInput">parentResourcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandable">cpuExpandable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimit">cpuLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservation">cpuReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevel">cpuShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShares">cpuShares</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandable">memoryExpandable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevel">memoryShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShares">memoryShares</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderId">parentFolderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolId">parentResourcePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cpuExpandableInput`<sup>Optional</sup> <a name="cpuExpandableInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandableInput"></a>

```typescript
public readonly cpuExpandableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuLimitInput`<sup>Optional</sup> <a name="cpuLimitInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimitInput"></a>

```typescript
public readonly cpuLimitInput: number;
```

- *Type:* number

---

##### `cpuReservationInput`<sup>Optional</sup> <a name="cpuReservationInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservationInput"></a>

```typescript
public readonly cpuReservationInput: number;
```

- *Type:* number

---

##### `cpuShareLevelInput`<sup>Optional</sup> <a name="cpuShareLevelInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevelInput"></a>

```typescript
public readonly cpuShareLevelInput: string;
```

- *Type:* string

---

##### `cpuSharesInput`<sup>Optional</sup> <a name="cpuSharesInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuSharesInput"></a>

```typescript
public readonly cpuSharesInput: number;
```

- *Type:* number

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memoryExpandableInput`<sup>Optional</sup> <a name="memoryExpandableInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandableInput"></a>

```typescript
public readonly memoryExpandableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryLimitInput`<sup>Optional</sup> <a name="memoryLimitInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimitInput"></a>

```typescript
public readonly memoryLimitInput: number;
```

- *Type:* number

---

##### `memoryReservationInput`<sup>Optional</sup> <a name="memoryReservationInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservationInput"></a>

```typescript
public readonly memoryReservationInput: number;
```

- *Type:* number

---

##### `memoryShareLevelInput`<sup>Optional</sup> <a name="memoryShareLevelInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevelInput"></a>

```typescript
public readonly memoryShareLevelInput: string;
```

- *Type:* string

---

##### `memorySharesInput`<sup>Optional</sup> <a name="memorySharesInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memorySharesInput"></a>

```typescript
public readonly memorySharesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentFolderIdInput`<sup>Optional</sup> <a name="parentFolderIdInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderIdInput"></a>

```typescript
public readonly parentFolderIdInput: string;
```

- *Type:* string

---

##### `parentResourcePoolIdInput`<sup>Optional</sup> <a name="parentResourcePoolIdInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolIdInput"></a>

```typescript
public readonly parentResourcePoolIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `cpuExpandable`<sup>Required</sup> <a name="cpuExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandable"></a>

```typescript
public readonly cpuExpandable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuLimit`<sup>Required</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimit"></a>

```typescript
public readonly cpuLimit: number;
```

- *Type:* number

---

##### `cpuReservation`<sup>Required</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservation"></a>

```typescript
public readonly cpuReservation: number;
```

- *Type:* number

---

##### `cpuShareLevel`<sup>Required</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevel"></a>

```typescript
public readonly cpuShareLevel: string;
```

- *Type:* string

---

##### `cpuShares`<sup>Required</sup> <a name="cpuShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShares"></a>

```typescript
public readonly cpuShares: number;
```

- *Type:* number

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memoryExpandable`<sup>Required</sup> <a name="memoryExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandable"></a>

```typescript
public readonly memoryExpandable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryLimit`<sup>Required</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

---

##### `memoryShareLevel`<sup>Required</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevel"></a>

```typescript
public readonly memoryShareLevel: string;
```

- *Type:* string

---

##### `memoryShares`<sup>Required</sup> <a name="memoryShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShares"></a>

```typescript
public readonly memoryShares: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentFolderId`<sup>Required</sup> <a name="parentFolderId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderId"></a>

```typescript
public readonly parentFolderId: string;
```

- *Type:* string

---

##### `parentResourcePoolId`<sup>Required</sup> <a name="parentResourcePoolId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolId"></a>

```typescript
public readonly parentResourcePoolId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VappContainerConfig <a name="VappContainerConfig" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.Initializer"></a>

```typescript
import { vappContainer } from '@cdktf/provider-vsphere'

const vappContainerConfig: vappContainer.VappContainerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.name">name</a></code> | <code>string</code> | The name of the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentResourcePoolId">parentResourcePoolId</a></code> | <code>string</code> | The managed object ID of the parent resource pool or the compute resource the vApp container is in. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuExpandable">cpuExpandable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuLimit">cpuLimit</a></code> | <code>number</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuReservation">cpuReservation</a></code> | <code>number</code> | Amount of CPU (MHz) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShareLevel">cpuShareLevel</a></code> | <code>string</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShares">cpuShares</a></code> | <code>number</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#id VappContainer#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryExpandable">memoryExpandable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | Amount of memory (MB) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShareLevel">memoryShareLevel</a></code> | <code>string</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShares">memoryShares</a></code> | <code>number</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentFolderId">parentFolderId</a></code> | <code>string</code> | The ID of the parent VM folder. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#name VappContainer#name}

---

##### `parentResourcePoolId`<sup>Required</sup> <a name="parentResourcePoolId" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentResourcePoolId"></a>

```typescript
public readonly parentResourcePoolId: string;
```

- *Type:* string

The managed object ID of the parent resource pool or the compute resource the vApp container is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#parent_resource_pool_id VappContainer#parent_resource_pool_id}

---

##### `cpuExpandable`<sup>Optional</sup> <a name="cpuExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuExpandable"></a>

```typescript
public readonly cpuExpandable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#cpu_expandable VappContainer#cpu_expandable}

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuLimit"></a>

```typescript
public readonly cpuLimit: number;
```

- *Type:* number

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#cpu_limit VappContainer#cpu_limit}

---

##### `cpuReservation`<sup>Optional</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuReservation"></a>

```typescript
public readonly cpuReservation: number;
```

- *Type:* number

Amount of CPU (MHz) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#cpu_reservation VappContainer#cpu_reservation}

---

##### `cpuShareLevel`<sup>Optional</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShareLevel"></a>

```typescript
public readonly cpuShareLevel: string;
```

- *Type:* string

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#cpu_share_level VappContainer#cpu_share_level}

---

##### `cpuShares`<sup>Optional</sup> <a name="cpuShares" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShares"></a>

```typescript
public readonly cpuShares: number;
```

- *Type:* number

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#cpu_shares VappContainer#cpu_shares}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#custom_attributes VappContainer#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#id VappContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memoryExpandable`<sup>Optional</sup> <a name="memoryExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryExpandable"></a>

```typescript
public readonly memoryExpandable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#memory_expandable VappContainer#memory_expandable}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#memory_limit VappContainer#memory_limit}

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

Amount of memory (MB) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#memory_reservation VappContainer#memory_reservation}

---

##### `memoryShareLevel`<sup>Optional</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShareLevel"></a>

```typescript
public readonly memoryShareLevel: string;
```

- *Type:* string

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#memory_share_level VappContainer#memory_share_level}

---

##### `memoryShares`<sup>Optional</sup> <a name="memoryShares" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShares"></a>

```typescript
public readonly memoryShares: number;
```

- *Type:* number

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#memory_shares VappContainer#memory_shares}

---

##### `parentFolderId`<sup>Optional</sup> <a name="parentFolderId" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentFolderId"></a>

```typescript
public readonly parentFolderId: string;
```

- *Type:* string

The ID of the parent VM folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#parent_folder_id VappContainer#parent_folder_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/vapp_container#tags VappContainer#tags}

---



