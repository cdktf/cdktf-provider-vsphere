# `contentLibraryItem` Submodule <a name="`contentLibraryItem` Submodule" id="@cdktf/provider-vsphere.contentLibraryItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContentLibraryItem <a name="ContentLibraryItem" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/content_library_item vsphere_content_library_item}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer"></a>

```typescript
import { contentLibraryItem } from '@cdktf/provider-vsphere'

new contentLibraryItem.ContentLibraryItem(scope: Construct, id: string, config: ContentLibraryItemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig">ContentLibraryItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig">ContentLibraryItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetFileUrl">resetFileUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetSourceUuid">resetSourceUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFileUrl` <a name="resetFileUrl" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetFileUrl"></a>

```typescript
public resetFileUrl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSourceUuid` <a name="resetSourceUuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetSourceUuid"></a>

```typescript
public resetSourceUuid(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContentLibraryItem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isConstruct"></a>

```typescript
import { contentLibraryItem } from '@cdktf/provider-vsphere'

contentLibraryItem.ContentLibraryItem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformElement"></a>

```typescript
import { contentLibraryItem } from '@cdktf/provider-vsphere'

contentLibraryItem.ContentLibraryItem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformResource"></a>

```typescript
import { contentLibraryItem } from '@cdktf/provider-vsphere'

contentLibraryItem.ContentLibraryItem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport"></a>

```typescript
import { contentLibraryItem } from '@cdktf/provider-vsphere'

contentLibraryItem.ContentLibraryItem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContentLibraryItem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContentLibraryItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContentLibraryItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/content_library_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContentLibraryItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrlInput">fileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryIdInput">libraryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuidInput">sourceUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrl">fileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryId">libraryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuid">sourceUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fileUrlInput`<sup>Optional</sup> <a name="fileUrlInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrlInput"></a>

```typescript
public readonly fileUrlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `libraryIdInput`<sup>Optional</sup> <a name="libraryIdInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryIdInput"></a>

```typescript
public readonly libraryIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceUuidInput`<sup>Optional</sup> <a name="sourceUuidInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuidInput"></a>

```typescript
public readonly sourceUuidInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fileUrl`<sup>Required</sup> <a name="fileUrl" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrl"></a>

```typescript
public readonly fileUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `libraryId`<sup>Required</sup> <a name="libraryId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryId"></a>

```typescript
public readonly libraryId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceUuid`<sup>Required</sup> <a name="sourceUuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuid"></a>

```typescript
public readonly sourceUuid: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContentLibraryItemConfig <a name="ContentLibraryItemConfig" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.Initializer"></a>

```typescript
import { contentLibraryItem } from '@cdktf/provider-vsphere'

const contentLibraryItemConfig: contentLibraryItem.ContentLibraryItemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.libraryId">libraryId</a></code> | <code>string</code> | ID of the content library to contain item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.name">name</a></code> | <code>string</code> | The name of the content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.description">description</a></code> | <code>string</code> | Optional description of the content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.fileUrl">fileUrl</a></code> | <code>string</code> | ID of source VM of content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/content_library_item#id ContentLibraryItem#id}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.sourceUuid">sourceUuid</a></code> | <code>string</code> | The managed object ID of an existing VM to be cloned to the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.type">type</a></code> | <code>string</code> | Type of content library item. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `libraryId`<sup>Required</sup> <a name="libraryId" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.libraryId"></a>

```typescript
public readonly libraryId: string;
```

- *Type:* string

ID of the content library to contain item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/content_library_item#library_id ContentLibraryItem#library_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/content_library_item#name ContentLibraryItem#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional description of the content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/content_library_item#description ContentLibraryItem#description}

---

##### `fileUrl`<sup>Optional</sup> <a name="fileUrl" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.fileUrl"></a>

```typescript
public readonly fileUrl: string;
```

- *Type:* string

ID of source VM of content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/content_library_item#file_url ContentLibraryItem#file_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/content_library_item#id ContentLibraryItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceUuid`<sup>Optional</sup> <a name="sourceUuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.sourceUuid"></a>

```typescript
public readonly sourceUuid: string;
```

- *Type:* string

The managed object ID of an existing VM to be cloned to the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/content_library_item#source_uuid ContentLibraryItem#source_uuid}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/content_library_item#type ContentLibraryItem#type}

---



